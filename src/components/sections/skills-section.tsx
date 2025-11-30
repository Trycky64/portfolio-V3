// src/components/sections/skills-section.tsx
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Badge } from "@/components/ui/badge";
import { getSkillGroups } from "@/lib/skills";

export function SkillsSection() {
  const groups = getSkillGroups();

  return (
    <section id="skills" className="border-b border-slate-800 bg-qp-bg">
      <Container>
        <div className="py-section-y">
          <SectionTitle
            title="Compétences"
            description="Un aperçu rapide de mon stack actuel côté front, back, DevOps et qualité logicielle."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {groups.map((group) => (
              <article
                key={group.id}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  {group.description}
                </p>
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
