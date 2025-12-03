"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Container } from "./container";
import { useI18n } from "@/lib/i18n/context";

export function Header() {
  const { t, locale } = useI18n();
  const pathname = usePathname() || "/";
  const router = useRouter();

  // Compute base path for links: root for fr, /en for en
  const base = locale === "en" ? "/en" : "";

  function switchLang() {
    // Toggle between / and /en, preserving the rest of the path
    if (locale === "en") {
      // go back to french route
      const target = pathname.replace(/^\/en/, "") || "/";
      // set cookie for persistence
      document.cookie = "qp-lang=fr; path=/; max-age=31536000";
      router.push(target);
    } else {
      const target = pathname === "/" ? "/en" : `/en${pathname}`;
      document.cookie = "qp-lang=en; path=/; max-age=31536000";
      router.push(target);
    }
  }

  return (
    <header className="border-b border-slate-800 bg-qp-bg/80 backdrop-blur supports-[backdrop-filter]:bg-qp-bg/60 sticky top-0 z-40">
      <Container>
        <div className="flex h-14 items-center justify-between">

          {/* BOUTON HOME ALWAYS ABSOLUTE + VIOLET */}
          <Link
            href={base ? base + "/" : "/"}
            className="font-semibold text-qp-primary hover:text-qp-primary/80 transition focus-ring"
          >
            <span>{t("header.home_name")}</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex gap-6 text-sm">
            <Link href={`${base}#projects`} className="hover:text-qp-primary transition">
              {t("header.projects")}
            </Link>
            <Link href={`${base}#timeline`} className="hover:text-qp-primary transition">
              {t("header.timeline")}
            </Link>
            <Link href={`${base}#skills`} className="hover:text-qp-primary transition">
              {t("header.skills")}
            </Link>
            <Link href={`${base}#about`} className="hover:text-qp-primary transition">
              {t("header.about")}
            </Link>
            <Link href={`${base}#contact`} className="hover:text-qp-primary transition">
              {t("header.contact")}
            </Link>
          </nav>

          {/* Language switch */}
          <div className="ml-4">
            <button
              aria-label="Toggle language"
              onClick={() => switchLang()}
              className="rounded-md border border-slate-700 px-3 py-1 text-sm"
            >
              {locale === "en" ? t("header.lang_en") : t("header.lang_fr")}
            </button>
          </div>

        </div>
      </Container>
    </header>
  );
}
