"use client";

import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { useI18n } from "@/lib/i18n/context";
import { timelineItems } from "@/lib/timeline";

export function EducationSection() {
  const { locale } = useI18n();
  const education = timelineItems.filter((item) => item.type === "education");

  return (
    <section
      id="education"
      className="scroll-mt-20 border-b border-border bg-background"
    >
      <Container>
        <div className="animate-fade-in-up py-12 sm:py-section-y">
          <SectionTitle
            title={locale === "fr" ? "Formation" : "Education"}
            description={
              locale === "fr"
                ? "Les formations qui structurent mon parcours en développement logiciel et applicatif."
                : "The education that shaped my path in software and application development."
            }
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {education.map((item) => (
              <Card key={item.id} variant="info">
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
