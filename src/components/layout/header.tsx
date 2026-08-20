"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { useI18n, type Locale } from "@/lib/i18n/context";
import { CV_URL, PERSON_NAME } from "@/lib/site";

const NAV_ITEMS = [
  { id: "projects", key: "nav.projects" },
  { id: "skills", key: "nav.skills" },
  { id: "experience", key: "nav.experience" },
  { id: "about", key: "nav.about" },
  { id: "contact", key: "nav.contact" },
] as const;

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
  const isProjectsRoute = pathname.startsWith(`${base}/projects`);

  const items = NAV_ITEMS.map((item) => ({
    id: item.id,
    label: t(item.key),
    href: `${base}#${item.id}`,
    active: item.id === "projects" && isProjectsRoute,
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-3">
          <Link
            href={base}
            className="focus-ring rounded-md px-1 py-2 font-semibold tracking-tight text-primary transition-colors hover:text-primary-strong"
            aria-label={`${PERSON_NAME} — ${t("nav.home")}`}
          >
            &lt;{PERSON_NAME}/&gt;
          </Link>

          <div className="flex items-center gap-2">
            <nav
              className="hidden items-center gap-1 sm:flex"
              aria-label={t("nav.primaryAria")}
            >
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={
                    item.active
                      ? "focus-ring rounded-md bg-surface px-3 py-2 text-sm font-medium text-text-primary"
                      : "focus-ring rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface/70 hover:text-text-primary"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href={CV_URL}
              download="cv-quentin-perriere.pdf"
              className="focus-ring hidden min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-strong hover:text-white sm:inline-flex"
            >
              {t("nav.cv")}
            </a>

            <Link
              href={targetPath}
              hrefLang={targetLocale}
              lang={targetLocale}
              className="focus-ring hidden min-h-11 items-center justify-center rounded-md border border-border bg-surface/60 px-3 text-xs font-semibold text-text-muted transition-colors hover:border-primary/40 hover:text-text-primary sm:inline-flex"
              aria-label={
                locale === "fr" ? "Switch to English" : "Passer en français"
              }
            >
              {targetLocale.toUpperCase()}
            </Link>

            <MobileNav
              items={items}
              locale={locale}
              targetLocale={targetLocale}
              targetPath={targetPath}
              labels={{
                navigation: t("nav.mobileAria"),
                open: t("nav.openMenu"),
                close: t("nav.closeMenu"),
              }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
