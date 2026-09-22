"use client";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
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
        <div className="py-12 sm:py-section-y">
          <SectionTitle
            title={locale === "fr" ? "Expérience professionnelle" : "Professional experience"}
            description={
              locale === "fr"
                ? "Mes expériences professionnelles, du développement et de l’automatisation de tests aux environnements opérationnels."
                : "My professional experience, from software development and test automation to operational environments."
            }
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {experiences.map((item) => (
              <Card
                key={item.id}
                variant="experience"
                className={
                  item.technical
                    ? "border-primary/35 bg-surface/90"
                    : "bg-surface-soft/55"
                }
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.period[locale]}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">
                  {item.title[locale]}
                </h3>
                {item.company && (
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {item.company}
                  </p>
                )}
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {item.description[locale]}
                </p>
                {item.technologies && (
                  <div
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label={
                      locale === "fr"
                        ? "Technologies utilisées"
                        : "Technologies used"
                    }
                  >
                    {item.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
