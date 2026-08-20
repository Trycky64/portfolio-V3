"use client";

import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { useI18n } from "@/lib/i18n/context";
import { timelineItems } from "@/lib/timeline";

export function ExperienceSection() {
  const { locale } = useI18n();
  const experiences = timelineItems.filter((item) => item.type === "experience");

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-border bg-surface-soft"
    >
      <Container>
        <div className="animate-fade-in-up py-12 sm:py-section-y">
          <SectionTitle
            title={locale === "fr" ? "Expérience professionnelle" : "Professional experience"}
            description={
              locale === "fr"
                ? "Mes principales expériences professionnelles, avec un focus sur les responsabilités et compétences transférables."
                : "My main professional experience, focused on responsibilities and transferable skills."
            }
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {experiences.map((item) => (
              <Card key={item.id} variant="experience">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">
                  {item.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {item.description[locale]}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
