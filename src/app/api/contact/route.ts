import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis").max(200),
  email: z.string().email("Email invalide").max(200),
  message: z.string().min(1, "Le message est requis").max(5000),
  locale: z.enum(["fr", "en"]).optional(),
});

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "portfolio@onresend.com";

if (!RESEND_API_KEY) {
  console.warn(
    "[CONTACT] RESEND_API_KEY manquant. L'API contact répondra en erreur.",
  );
}

if (!CONTACT_TO_EMAIL) {
  console.warn(
    "[CONTACT] CONTACT_TO_EMAIL manquant. L'API contact répondra en erreur.",
  );
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = contactSchema.parse(json);

    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
      return NextResponse.json(
        {
          ok: false,
          error: "CONFIG_ERROR",
          message:
            "Le service de contact n'est pas correctement configuré côté serveur.",
        },
        { status: 500 },
      );
    }

    // Contenu de l’email
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

    const htmlBody = `
      <h2>${locale === "en" ? "New message from portfolio" : "Nouveau message depuis le portfolio"}</h2>
      <p><strong>${locale === "en" ? "Name" : "Nom"} :</strong> ${data.name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Langue :</strong> ${locale}</p>
      <p><strong>Message :</strong></p>
      <p>${data.message.replace(/\n/g, "<br />")}</p>
    `;

    // Appel à l'API Resend
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
      const errorText = await res.text().catch(() => "");
      console.error("[CONTACT] Erreur Resend:", res.status, errorText);

      return NextResponse.json(
        {
          ok: false,
          error: "EMAIL_ERROR",
        },
        { status: 500 },
      );
    }

    // On log quand même pour trace serveur
    console.log("[CONTACT] Email envoyé avec succès", {
      name: data.name,
      email: data.email,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[CONTACT] Erreur:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: "INVALID_DATA",
          issues: error.issues,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: "SERVER_ERROR",
      },
      { status: 500 },
    );
  }
}
