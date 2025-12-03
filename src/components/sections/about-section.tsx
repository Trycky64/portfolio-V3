"use client";

import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { useI18n } from "@/lib/i18n/context";

export function AboutSection() {
  const { t } = useI18n();
  return (
    <section id="about" className="border-b border-slate-800 bg-qp-bg-soft">
      <Container>
        <div className="py-12 sm:py-section-y animate-fade-in-up">
          <SectionTitle title={t("about_section.title")} />
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            <p>{t("about_section.p1")}</p>
            <p>{t("about_section.p2")}</p>
            <p>{t("about_section.p3")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
