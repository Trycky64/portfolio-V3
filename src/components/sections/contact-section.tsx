"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { useI18n } from "@/lib/i18n/context";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const { t, locale } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: (formData.get("name") ?? "").toString().trim(),
      email: (formData.get("email") ?? "").toString().trim(),
      message: (formData.get("message") ?? "").toString().trim(),
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(res.status === 400 ? t("contact_section.error_invalid_fields") : t("contact_section.error"));
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Erreur envoi formulaire contact :", error);
      setStatus("error");
      setErrorMessage(t("contact_section.error_network"));
    }
  }

  const buttonLabel =
    status === "loading"
      ? t("contact_section.sending")
      : status === "error"
      ? t("contact_section.retry")
      : status === "success"
      ? t("contact_section.sent")
      : t("contact_section.send");

  const isSubmitting = status === "loading";

  return (
    <section id="contact" className="bg-qp-bg">
      <Container className="py-16 sm:py-24">
        <SectionTitle title={t("contact_section.title")} description={t("contact_section.description")} />

        <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block font-medium text-slate-100">
                {t("contact_section.name_label")}
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-qp-primary focus:ring-1 focus:ring-qp-primary"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block font-medium text-slate-100">
                {t("contact_section.email_label")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-qp-primary focus:ring-1 focus:ring-qp-primary"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="message" className="block font-medium text-slate-100">
                {t("contact_section.message_label")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-qp-primary focus:ring-1 focus:ring-qp-primary"
              />
            </div>

            <div className="space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md bg-qp-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-qp-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {buttonLabel}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400">{t("contact_section.success")}</p>
              )}

              {status === "error" && errorMessage && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
            </div>
          </form>

          {/* Coordonnées directes */}
          <div className="space-y-4 text-sm text-slate-300">
            <h3 className="text-base font-semibold text-slate-100">{t("contact_section.contact_direct_title")}</h3>
            <p>
              Email :{" "}
              <a href="mailto:quentin.perriere64@gmail.com" className="underline underline-offset-4 hover:text-qp-primary">
                quentin.perriere64@gmail.com
              </a>
            </p>
            <p>
              GitHub :{" "}
              <a
                href="https://github.com/Trycky64"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-qp-primary"
              >
                Github
              </a>
            </p>
            <p>
              LinkedIn :{" "}
              <a
                href="https://www.linkedin.com/in/quentin-perriere-295045292/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-qp-primary"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
