"use client";

import { FormEvent, useState, useEffect } from "react";
import { Container } from "@/components/layout/container";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: brancher sur une API route plus tard
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 600);
  }

  if (!isMounted) {
    // render a small placeholder to maintain layout while avoiding hydration mismatch
    return (
      <section id="contact" className="bg-qp-bg" suppressHydrationWarning>
        <div className="mx-auto max-w-5xl px-4 py-16" />
      </section>
    );
  }

  return (
    <section id="contact" className="bg-slate-950" suppressHydrationWarning>
      <Container>
        <div className="py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          On travaille ensemble ?
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Basé à Bordeaux (33800), je suis ouvert aux opportunités d&apos;alternance
          et de poste en développement web &amp; applicatif. Envoyez-moi un
          message, je vous réponds rapidement.
        </p>

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
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
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
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-qp-primary"
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
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-qp-primary"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="inline-flex items-center rounded-full bg-sky-400 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-indigo-400 disabled:opacity-60"
            >
              {status === "idle" && "Envoyer le message"}
              {status === "sending" && "Envoi en cours..."}
              {status === "sent" && "Message envoyé ✔"}
            </button>

            {status === "error" && (
              <p className="text-xs text-red-400">
                Une erreur est survenue. Vous pouvez aussi me contacter
                directement par email.
              </p>
            )}
          </form>

          <div className="space-y-3 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">
              Contact direct & réseaux
            </p>
            <p>
              Email :{" "}
              <a
                href="mailto:q.perriere@gmail.com"
                className="text-sky-400 hover:underline"
              >
                q.perriere@gmail.com
              </a>
            </p>
            <p>
              GitHub :{" "}
              <a
                href="https://github.com/Trycky64"
                className="text-sky-400 hover:underline"
                target="_blank"
              >
                Github
              </a>
            </p>
            <p>
              LinkedIn :{" "}
              <a
                href="https://www.linkedin.com/in/quentin-perriere-295045292/"
                className="text-sky-400 hover:underline"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}
