"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "./container";
import { useI18n, type Locale } from "@/lib/i18n/context";
import { PERSON_NAME } from "@/lib/site";

function getLocalizedPath(pathname: string, locale: Locale) {
  if (/^\/(fr|en)(?=\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${locale}`);
  }

  return `/${locale}`;
}

export function Header() {
  const pathname = usePathname();
  const { t, locale } = useI18n();

  const base = `/${locale}`;
  const targetLocale: Locale = locale === "fr" ? "en" : "fr";
  const targetPath = getLocalizedPath(pathname, targetLocale);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-qp-bg/80 backdrop-blur supports-[backdrop-filter]:bg-qp-bg/60">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href={base}
            className="font-semibold text-qp-primary transition hover:text-qp-primary/80 focus-ring"
          >
            <span>&lt;{PERSON_NAME}/&gt;</span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden gap-6 text-sm sm:flex">
              <Link
                href={`${base}#projects`}
                className="transition hover:text-qp-primary"
              >
                {t("nav.projects")}
              </Link>

              <Link
                href={`${base}#skills`}
                className="transition hover:text-qp-primary"
              >
                {t("nav.skills")}
              </Link>

              <Link
                href={`${base}#timeline`}
                className="transition hover:text-qp-primary"
              >
                {t("nav.timeline")}
              </Link>

              <Link
                href={`${base}#about`}
                className="transition hover:text-qp-primary"
              >
                {t("nav.about")}
              </Link>

              <Link
                href={`${base}#contact`}
                className="transition hover:text-qp-primary"
              >
                {t("nav.contact")}
              </Link>
            </nav>

            <Link
              href={targetPath}
              className="rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-600 hover:text-white focus-ring"
              aria-label={
                locale === "fr" ? "Switch to English" : "Passer en français"
              }
              title={
                locale === "fr" ? "Switch to English" : "Passer en français"
              }
            >
              {locale === "fr" ? "FR" : "EN"}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}