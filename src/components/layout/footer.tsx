"use client";

import { Container } from "@/components/layout/container";
import { useI18n } from "@/lib/i18n/context";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const MALT_URL =
  process.env.NEXT_PUBLIC_MALT_URL ??
  "https://www.malt.fr/profile/quentinperriere1";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/60 py-6 text-sm text-slate-400">
      <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p>{t("footer.copyright")}</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={MALT_URL}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-qp-primary focus-ring"
            aria-label={t("footer.maltAria")}
          >
            {t("footer.malt")}
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-qp-primary focus-ring"
          >
            {t("footer.github")}
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-qp-primary focus-ring"
          >
            {t("footer.linkedin")}
          </a>
        </div>
      </Container>
    </footer>
  );
}
