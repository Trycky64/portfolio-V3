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
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Projets phares</h2>
        <p className="mt-2 text-sm text-slate-300">
          Une sélection de projets qui représentent le mieux ma manière de
          travailler : du front au backend, jusqu’au déploiement.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-sky-500/70 hover:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-sky-400">
                {project.role}
              </p>
              <p className="mt-3 text-sm text-slate-200">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
