import { NextResponse } from "next/server";
import { z } from "zod";

import {
  CONTACT_LIMITS,
  HONEYPOT_FIELD,
  MAX_BODY_BYTES,
  RATE_LIMIT,
} from "@/lib/contact";

const contactSchema = z.object({
  name: z
    .string()
    .min(CONTACT_LIMITS.name.min, "Le nom est requis")
    .max(CONTACT_LIMITS.name.max),
  email: z.string().email("Email invalide").max(CONTACT_LIMITS.email.max),
  message: z
    .string()
    .min(CONTACT_LIMITS.message.min, "Le message est trop court")
    .max(CONTACT_LIMITS.message.max),
  locale: z.enum(["fr", "en"]).optional(),
  [HONEYPOT_FIELD]: z.string().max(200).optional(),
});

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "portfolio@onresend.com";

function jsonError(error: string, status: number, extra?: Record<string, unknown>) {
  return NextResponse.json({ ok: false, error, ...extra }, { status });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// In-memory rate limiter: fine for a single-instance, personal-portfolio deployment.
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;

  for (const [key, timestamps] of hits) {
    const recent = timestamps.filter((ts) => ts > windowStart);
    if (recent.length === 0) {
      hits.delete(key);
    } else {
      hits.set(key, recent);
    }
  }

  const timestamps = hits.get(ip) ?? [];
  const recent = timestamps.filter((ts) => ts > windowStart);

  if (recent.length >= RATE_LIMIT.maxRequests) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function getClientIp(request: Request): string {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) {
    return cfIp.trim().slice(0, 100);
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]!.trim().slice(0, 100);
  }

  return "unknown";
}

export async function POST(request: Request) {
  try {
    const contentLength = request.headers.get("content-length");
    if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
      return jsonError("PAYLOAD_TOO_LARGE", 413);
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return jsonError("PAYLOAD_TOO_LARGE", 413);
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      const retryAfterSeconds = Math.ceil(RATE_LIMIT.windowMs / 1000);
      return NextResponse.json(
        { ok: false, error: "RATE_LIMITED", retryAfter: retryAfterSeconds },
        { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
      );
    }

    const json = JSON.parse(rawBody);
    const data = contactSchema.parse(json);

    // Honeypot: bots fill every field, real visitors never see this one.
    // Respond as if the message was sent, without emailing anything.
    if (data[HONEYPOT_FIELD]) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
      console.warn("[CONTACT] Configuration serveur manquante");
      return jsonError("CONFIG_ERROR", 500);
    }

    const locale = data.locale === "en" ? "en" : "fr";
    const subject =
      locale === "en"
        ? `[EN] New message from portfolio — ${data.name}`
        : `[FR] Nouveau message depuis le portfolio — ${data.name}`;
    const textBody = [
      `Nom: ${data.name}`,
      `Email: ${data.email}`,
      `Langue: ${locale}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

    const htmlBody = `
      <h2>${locale === "en" ? "New message from portfolio" : "Nouveau message depuis le portfolio"}</h2>
      <p><strong>${locale === "en" ? "Name" : "Nom"} :</strong> ${safeName}</p>
      <p><strong>Email :</strong> ${safeEmail}</p>
      <p><strong>Langue :</strong> ${locale}</p>
      <p><strong>Message :</strong></p>
      <p>${safeMessage}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      console.error("[CONTACT] Resend a retourné une erreur", res.status);
      return jsonError("EMAIL_ERROR", 500);
    }

    console.log("[CONTACT] Email envoyé");

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return jsonError("INVALID_DATA", 400);
    }

    if (error instanceof z.ZodError) {
      const fieldErrors = error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      }));
      return jsonError("INVALID_DATA", 400, { issues: fieldErrors });
    }

    console.error("[CONTACT] Erreur serveur inattendue");
    return jsonError("SERVER_ERROR", 500);
  }
}
