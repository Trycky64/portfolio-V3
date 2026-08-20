"use client";

import { Container } from "@/components/layout/container";
import { IconLink } from "@/components/ui/icon-link";
import { useI18n } from "@/lib/i18n/context";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PERSON_NAME,
} from "@/lib/site";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-soft/60 py-8 text-sm text-text-muted">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>
              © {year} {PERSON_NAME}
            </p>
            <p className="text-xs text-text-muted/80">
              {t("footer.stackNote")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            <IconLink href={GITHUB_URL} icon="github" label="GitHub" external />

            {LINKEDIN_URL && (
              <IconLink
                href={LINKEDIN_URL}
                icon="linkedin"
                label="LinkedIn"
                external
              />
            )}

            <IconLink
              href={`mailto:${EMAIL}`}
              icon="email"
              label={t("footer.email")}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
