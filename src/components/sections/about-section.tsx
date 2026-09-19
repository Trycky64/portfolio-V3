"use client";

import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";
import { LOCATION } from "@/lib/site";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-border bg-background"
    >
      <Container>
        <div className="py-12 sm:py-section-y animate-fade-in-up">
          <SectionTitle
            title={t("about.title")}
            description={t("about.description")}
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold">{t("about.value.title")}</h3>
              <p className="mt-3 text-sm text-slate-200">
                {t("about.value.p1")}
              </p>
              <p className="mt-3 text-sm text-slate-200">
                {t("about.value.p2")}
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold">{t("about.build.title")}</h3>
              <p className="mt-3 text-sm text-slate-200">
                {t("about.build.p1")}
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold">
                {t("about.availability.title")}
              </h3>

              <p className="mt-3 text-sm text-slate-200">
                {t("about.availability.status", { location: LOCATION })}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
