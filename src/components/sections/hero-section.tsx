<<<<<<< HEAD
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
=======
"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useI18n } from "@/lib/i18n/context";

const MALT_URL = "https://www.malt.fr/profile/quentinperriere1";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="hero" className="border-b border-slate-800 bg-qp-bg">
      <Container>
        <div className="py-16 sm:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Texte */}
            <div className="animate-fade-in-up">
              <p className="text-sm font-medium uppercase tracking-wide text-qp-primary">
                {t("hero.kicker")}
              </p>

              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {t("hero.title")}
              </h1>

              <p className="mt-4 max-w-xl text-slate-200">{t("hero.subtitle")}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-qp-primary px-5 py-2 text-sm font-semibold text-white hover:bg-qp-primary/90 transition focus-ring"
                >
                  {t("hero.ctaContact")}
                </Link>

                <a
                  href={MALT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:text-white transition focus-ring"
                >
                  {t("hero.ctaMalt")}
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-400">{t("hero.statusNote")}</p>
            </div>

            {/* Avatar */}
            <div className="flex justify-center md:justify-end animate-fade-in-up">
              <div className="relative h-48 w-48 sm:h-56 sm:w-56">
                <div className="absolute inset-0 rounded-full bg-qp-primary/20 blur-2xl" />
                <Image
                  src="/images/avatar.jpg"
                  alt="Quentin Perriere"
                  fill
                  priority
                  className="relative rounded-full object-cover border border-slate-700"
                  sizes="(min-width: 768px) 224px, 192px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
>>>>>>> 30e29c1 (feat(freelance): i18n + services section + hero avatar + header lang switch)
