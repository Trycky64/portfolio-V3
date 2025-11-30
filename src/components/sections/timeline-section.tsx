import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { getTimeline } from "@/lib/timeline";

export function TimelineSection() {
  const items = getTimeline();

  return (
    <section id="timeline" className="border-b border-slate-800 bg-qp-bg-soft">
      <Container>
        <div className="py-12 sm:py-section-y animate-fade-in-up">
          <SectionTitle
            title="Parcours"
            description="Entre formation, expériences en entreprise et projets perso, voici les grandes étapes de mon parcours."
          />

          <ol className="mt-8 space-y-6 border-l border-slate-700 pl-4">
            {items.map((item) => (
              <li key={item.id} className="relative pl-4">
                <span className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-qp-primary bg-qp-bg" />
                <div className="text-xs text-qp-primary">{item.period}</div>
                <div className="text-sm font-semibold">{item.title}</div>
                <p className="mt-1 text-sm text-slate-300">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
