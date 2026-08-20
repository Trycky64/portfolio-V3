"use client";

import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { getTimeline } from "@/lib/timeline";
import { useI18n } from "@/lib/i18n/context";

export function TimelineSection() {
  const items = getTimeline();
  const { t, locale } = useI18n();

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-border bg-surface-soft"
    >
      <Container>
        <div className="animate-fade-in-up py-12 sm:py-section-y">
          <SectionTitle
            title={t("header.timeline")}
            description={t("timeline_section.description")}
          />

          <ol className="mt-8 space-y-6 border-l border-border pl-4">
            {items.map((item) => (
              <li key={item.id} className="relative pl-4">
                <span className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-primary bg-background" />
                <div className="text-xs text-primary">{item.period}</div>
                <div className="text-sm font-semibold">{item.title[locale]}</div>
                <p className="mt-1 text-sm text-text-muted">
                  {item.description[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
