"use client";

import Link from "next/link";
import { Container } from "./container";
import { useI18n } from "@/lib/i18n/context";

export function Header() {
  const { t, locale, toggleLocale } = useI18n();

  return (
    <header className="border-b border-slate-800 bg-qp-bg/80 backdrop-blur supports-[backdrop-filter]:bg-qp-bg/60 sticky top-0 z-40">
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Home always absolute + violet */}
          <Link
            href="https://quentinperriere.com"
            className="font-semibold text-qp-primary hover:text-qp-primary/80 transition focus-ring"
          >
            <span>&lt;Quentin Perriere/&gt;</span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden sm:flex gap-6 text-sm">
              <Link href="/#projects" className="hover:text-qp-primary transition">
                {t("nav.projects")}
              </Link>
              <Link href="/#services" className="hover:text-qp-primary transition">
                {t("nav.services")}
              </Link>
              <Link href="/#timeline" className="hover:text-qp-primary transition">
                {t("nav.timeline")}
              </Link>
              <Link href="/#skills" className="hover:text-qp-primary transition">
                {t("nav.skills")}
              </Link>
              <Link href="/#about" className="hover:text-qp-primary transition">
                {t("nav.about")}
              </Link>
              <Link href="/#contact" className="hover:text-qp-primary transition">
                {t("nav.contact")}
              </Link>
            </nav>

            {/* Language switch */}
            <button
              type="button"
              onClick={toggleLocale}
              className="rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1 text-xs font-semibold text-slate-200 hover:border-slate-600 hover:text-white transition focus-ring"
              aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
              title={locale === "fr" ? "Switch to English" : "Passer en français"}
            >
              {locale === "fr" ? "FR" : "EN"}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
