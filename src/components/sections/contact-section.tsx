"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";

export function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: (formData.get("name") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };

    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          "Impossible d’envoyer le message. Vérifiez les champs ou réessayez plus tard.",
        );
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Une erreur est survenue. Vous pouvez aussi me contacter directement par email.",
      );
    }
  }

  return (
    <section id="contact" className="bg-qp-bg">
      <Container>
        <div className="py-12 sm:py-section-y">
          <SectionTitle
            title="On travaille ensemble ?"
            description="Basé à Bordeaux (33800), je suis ouvert aux opportunités d’alternance et de poste en développement web & applicatif."
          />

          <div className="mt-8 grid gap-8 md:grid-cols-[2fr,1fr]">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-slate-200">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus-ring"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus-ring"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="message" className="block text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus-ring"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex items-center rounded-full bg-qp-primary px-5 py-2 text-sm font-medium text-slate-950 hover:bg-qp-primary-soft disabled:opacity-60 focus-ring"
              >
                {status === "idle" && "Envoyer le message"}
                {status === "sending" && "Envoi en cours..."}
                {status === "sent" && "Message envoyé ✔"}
                {status === "error" && "Réessayer"}
              </button>

              <div aria-live="polite" className="min-h-[1.25rem]">
                {errorMessage && (
                  <p className="text-xs text-red-400">{errorMessage}</p>
                )}
                {status === "sent" && !errorMessage && (
                  <p className="text-xs text-qp-accent">
                    Merci pour votre message ! Je vous répondrai dès que
                    possible.
                  </p>
                )}
              </div>
            </form>

            <div className="space-y-3 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">
                Contact direct & réseaux
              </p>
              <p>
                Email :{" "}
                <a
                  href="mailto:q.perriere@gmail.com"
                  className="text-qp-primary hover:underline focus-ring rounded"
                >
                  q.perriere@gmail.com
                </a>
              </p>
              <p>
                GitHub :{" "}
                <a
                  href="https://github.com/TON_USER_GITHUB"
                  className="text-qp-primary hover:underline focus-ring rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/TON_USER_GITHUB
                </a>
              </p>
              <p>
                LinkedIn :{" "}
                <a
                  href="https://www.linkedin.com/in/TON_PROFIL_LINKEDIN"
                  className="text-qp-primary hover:underline focus-ring rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/TON_PROFIL_LINKEDIN
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
