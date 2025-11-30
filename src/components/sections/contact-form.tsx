"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 600);
  }

  return (
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
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-qp-primary"
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
        className="inline-flex items-center rounded-full bg-qp-primary px-5 py-2 text-sm font-medium text-slate-950 hover:bg-qp-primary-soft disabled:opacity-60"
      >
        {status === "idle" && "Envoyer le message"}
        {status === "sending" && "Envoi en cours..."}
        {status === "sent" && "Message envoyé ✔"}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-400">
          Une erreur est survenue. Vous pouvez aussi me contacter directement par email.
        </p>
      )}
    </form>
  );
}
