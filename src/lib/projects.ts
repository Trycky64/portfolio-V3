// src/lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  tagLine: string;
  shortDescription: string;
  stack: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "citypulse",
    title: "CityPulse",
    tagLine: "Application web — dashboard de données urbaines",
    shortDescription:
      "Application Vue 3 moderne pour explorer et visualiser des données urbaines avec une UX centrée sur la lisibilité.",
    stack: ["Vue 3", "Vite", "TypeScript", "Tailwind", "API REST"],
    highlights: [
      "Architecture front basée sur des composants Vue 3 réutilisables.",
      "Design responsive avec Tailwind CSS.",
      "Consommation d’une API backend et gestion d’état front.",
      "Développement typé avec TypeScript.",
    ],
    links: {
      github: "#",
      demo: "#",
    },
    image: "/images/projects/citypulse.png",
  },
  {
    slug: "portfolio-v3",
    title: "Portfolio v3",
    tagLine: "Site personnel — Next.js",
    shortDescription:
      "Portfolio développé avec Next.js App Router pour présenter mon parcours, mes projets et mes compétences.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
    highlights: [
      "Architecture en sections réutilisables.",
      "Design system avec composants génériques.",
      "Formulaire de contact via API Next.js.",
      "Images optimisées via next/image.",
    ],
    links: {
      github: "#",
      demo: "#",
    },
    image: "/images/projects/portfolio-v3.png",
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
