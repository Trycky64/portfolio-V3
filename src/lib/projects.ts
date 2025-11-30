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
      "Architecture front basée sur des composants réutilisables en Vue 3.",
      "Intégration d’un design responsive avec Tailwind CSS.",
      "Consommation d’une API backend et gestion de l’état global.",
      "Environnement de développement typé avec TypeScript.",
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
      "Architecture basée sur des sections réutilisables (Hero, Projets, Parcours, Compétences, Contact).",
      "Design system avec composants génériques (Button, Card, Badge, SectionTitle).",
      "Formulaire de contact connecté à une API route Next.js.",
      "Optimisation des performances et du SEO de base.",
    ],
    links: {
      github: "#",
      demo: "#",
    },
    image: "/images/projects/portfolio-v3.png",
  },
  {
    slug: "crystalbound",
    title: "Crystalbound",
    tagLine: "Jeu vidéo — tower defense 2D",
    shortDescription:
      "Jeu de tower defense en Python avec une architecture de code claire et des assets 2D stylisés.",
    stack: ["Python", "Arcade", "Poetry", "pytest"],
    highlights: [
      "Backlog P1/P2/P3 structuré pour guider le développement.",
      "Architecture orientée objets pour les tours, ennemis, vagues et HUD.",
      "Intégration d’assets 2D et d’effets visuels cohérents.",
      "Mise en place de tests et d’outils de qualité (pytest, Ruff, mypy).",
    ],
    links: {
      github: "#",
    },
    image: "/images/projects/crystalbound.png",
  },
  {
    slug: "infra-rpi",
    title: "Infra perso / self-hosting",
    tagLine: "Infra & DevOps",
    shortDescription:
      "Infrastructure personnelle pour héberger mes projets sur un Raspberry Pi sécurisé et exposé via Cloudflare.",
    stack: [
      "Raspberry Pi",
      "Linux",
      "Docker",
      "Cloudflare Tunnel",
      "systemd",
    ],
    highlights: [
      "Installation et configuration d’un environnement serveur sur Raspberry Pi.",
      "Mise en place de Cloudflare Tunnel pour exposer des services web en HTTPS.",
      "Configuration de la sécurité de base (UFW, fail2ban).",
      "Automatisation du déploiement et documentation du setup.",
    ],
    links: {
      demo: "#",
    },
    image: "/images/projects/infra-rpi.png",
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
