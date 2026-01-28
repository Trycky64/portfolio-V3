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
