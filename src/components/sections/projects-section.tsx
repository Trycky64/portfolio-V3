import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "CityPulse",
    role: "Application web — dashboard de données urbaines",
    stack: ["Vue 3", "Vite", "TypeScript", "Tailwind", "API REST"],
    description:
      "Application Vue 3 moderne pour explorer et visualiser des données urbaines avec une UX centrée sur la lisibilité.",
  },
  {
    name: "Portfolio v3",
    role: "Site personnel — Next.js",
    stack: ["Next.js", "TypeScript", "Tailwind", "App Router"],
    description:
      "Ce site, conçu comme un portfolio clair et maintenable, avec un design system réutilisable et une structure soignée.",
  },
  {
    name: "Crystalbound",
    role: "Jeu vidéo — tower defense 2D",
    stack: ["Python", "Arcade", "Poetry", "pytest"],
    description:
      "Jeu de tower defense en Python avec une architecture de code propre, un backlog P1/P2/P3 et des assets 2D stylisés.",
  },
  {
    name: "Infra perso / self-hosting",
    role: "Infra & DevOps",
    stack: ["Raspberry Pi", "Linux", "Cloudflare Tunnel", "systemd"],
    description:
      "Infrastructure personnelle pour héberger mes projets sur un Raspberry Pi sécurisé et exposé via Cloudflare.",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-slate-800 bg-slate-950">
      <Container>
        <div className="py-section-y">
          <SectionTitle
            title="Projets phares"
            description="Une sélection de projets qui représentent le mieux ma manière de travailler : du front au backend, jusqu’au déploiement."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name}>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-sky-400">
                  {project.role}
                </p>
                <p className="mt-3 text-sm text-slate-200">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
