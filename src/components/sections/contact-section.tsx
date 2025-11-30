"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
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
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          res.status === 400
            ? "Certains champs ne sont pas valides. Vérifie les informations saisies."
            : "Impossible d'envoyer le message. Réessaie plus tard.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Erreur envoi formulaire contact :", error);
      setStatus("error");
      setErrorMessage("Impossible d'envoyer le message (erreur réseau). Réessaie plus tard.");
    }
  }

  const buttonLabel =
    status === "loading"
      ? "Envoi..."
      : status === "error"
      ? "Réessayer"
      : status === "success"
      ? "Envoyé !"
      : "Envoyer";

  const isSubmitting = status === "loading";

  return (
    <section id="contact" className="bg-qp-bg">
      <Container className="py-16 sm:py-24">
        <SectionTitle
          title="On discute de votre projet ?"
          description="Contactez-moi via le formulaire ou directement par email / réseaux."
        />

        <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block font-medium text-slate-100">
                Nom
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
                Email
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
                Message
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
                <p className="text-sm text-emerald-400">
                  Message envoyé avec succès, merci ! Je vous répondrai dès que possible.
                </p>
              )}

              {status === "error" && errorMessage && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
            </div>
          </form>

          {/* Coordonnées directes */}
          <div className="space-y-4 text-sm text-slate-300">
            <h3 className="text-base font-semibold text-slate-100">Contact direct & réseaux</h3>
            <p>
              Email :{" "}
              <a href="mailto:q.perriere@gmail.com" className="underline underline-offset-4 hover:text-qp-primary">
                q.perriere@gmail.com
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
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
