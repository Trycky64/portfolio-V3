"use client";

import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";

type ServiceId = "website" | "webapp" | "nextreact" | "api" | "deploy" | "maintenance";

const SERVICES: { id: ServiceId }[] = [
  { id: "website" },
  { id: "webapp" },
  { id: "nextreact" },
  { id: "api" },
  { id: "deploy" },
  { id: "maintenance" },
];

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="border-b border-slate-800 bg-qp-bg">
      <Container>
        <div className="py-12 sm:py-section-y animate-fade-in-up">
          <SectionTitle title={t("services.title")} description={t("services.description")} />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ id }) => (
              <Card key={id}>
                <h3 className="text-lg font-semibold">{t(`services.items.${id}.title`)}</h3>
                <p className="mt-2 text-sm text-slate-200">{t(`services.items.${id}.desc`)}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-qp-primary" />
                    <span>{t(`services.items.${id}.b1`)}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-qp-primary" />
                    <span>{t(`services.items.${id}.b2`)}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-qp-primary" />
                    <span>{t(`services.items.${id}.b3`)}</span>
                  </li>
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
