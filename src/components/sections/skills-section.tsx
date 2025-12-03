"use client";

import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Badge } from "@/components/ui/badge";
import { getSkillGroups } from "@/lib/skills";
import { useI18n } from "@/lib/i18n/context";

export function SkillsSection() {
  const groups = getSkillGroups();
  const { t, locale } = useI18n();

  return (
    <section id="skills" className="border-b border-slate-800 bg-qp-bg">
      <Container>
        <div className="py-12 sm:py-section-y animate-fade-in-up">
          <SectionTitle title={t("skills_section.title")} description={t("skills_section.description")} />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {groups.map((group) => (
              <article
                key={group.id}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <h3 className="text-sm font-semibold">{group.title[locale]}</h3>
                <p className="mt-1 text-sm text-slate-300">{group.description[locale]}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
