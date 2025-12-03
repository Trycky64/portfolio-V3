"use client";

import { Container } from "@/components/layout/container";
import { useI18n } from "@/lib/i18n/context";

export function HeroSection() {
  const { t } = useI18n();
  return (
    <section
      id="hero"
      className="border-b border-slate-800 bg-gradient-to-b from-qp-bg-soft to-qp-bg"
    >
      <Container>
        <div className="py-16 sm:py-24 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.3em] text-qp-primary">Quentin Perriere</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
            {t("hero.subtitle")}
            <span className="block text-qp-primary">{t("hero.stack")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-slate-300 sm:text-base">{t("hero.intro")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-qp-primary px-5 py-2 text-sm font-medium text-qp-primary transition hover:bg-qp-primary/10 focus-ring"
            >
              {t("common.view_projects")}
            </a>
            <a
              href="/cv-quentin-perriere.pdf"
              className="inline-flex items-center rounded-full bg-qp-primary px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-qp-primary-soft focus-ring"
            >
              {t("common.download_cv")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
