"use client";

import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";

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

          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
              <h3 className="text-lg font-semibold">
                {t("about.availability.title")}
              </h3>

              <p className="mt-3 text-sm text-slate-200">
                {t("about.availability.status")}
              </p>

              <div className="mt-5 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-sm font-semibold text-slate-100">
                  {t("about.process.title")}
                </p>
                <ol className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>
                    <span className="text-qp-primary font-semibold">1.</span>{" "}
                    {t("about.process.step1")}
                  </li>
                  <li>
                    <span className="text-qp-primary font-semibold">2.</span>{" "}
                    {t("about.process.step2")}
                  </li>
                  <li>
                    <span className="text-qp-primary font-semibold">3.</span>{" "}
                    {t("about.process.step3")}
                  </li>
                  <li>
                    <span className="text-qp-primary font-semibold">4.</span>{" "}
                    {t("about.process.step4")}
                  </li>
                </ol>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
