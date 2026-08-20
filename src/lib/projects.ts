export type LocalizedText = {
  fr: string;
  en: string;
};

export type LocalizedList = {
  fr: string[];
  en: string[];
};

export type ProjectCategory =
  | "Python"
  | "Backend"
  | "Web"
  | "Java"
  | "DevOps"
  | "QA/Automation";

export type ProjectStatus =
  | "production"
  | "active"
  | "completed"
  | "experimental";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  categories: ProjectCategory[];
  status: ProjectStatus;
  year: number;
  featured: boolean;
  order: number;
  image?: string;
  gallery: string[];

  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  problem: LocalizedText;
  goals: LocalizedList;
  architecture: LocalizedList;
  challenges: LocalizedList;
  solutions: LocalizedList;
  results: LocalizedList;

  stack: string[];
  highlights: LocalizedList;
  tests: string[];
  infrastructure: string[];

  links: ProjectLinks;
}

const projects: Project[] = [
  {
    slug: "portfolio-v3",
    title: "Portfolio V3",
    type: "Portfolio personnel",
    categories: ["Web", "DevOps"],
    status: "production",
    year: 2026,
    featured: true,
    order: 20,
    image: "/images/projects/portfolio-v3.png",
    gallery: [],
    shortDescription: {
      fr: "Portfolio personnel développé avec Next.js, TypeScript et Tailwind CSS, avec routes FR/EN, tests et déploiement auto-hébergé.",
      en: "Personal portfolio built with Next.js, TypeScript and Tailwind CSS, with FR/EN routes, tests and self-hosted deployment.",
    },
    longDescription: {
      fr: "Le portfolio centralise mes projets, mon profil technique et mes moyens de contact dans une application Next.js structurée autour de routes localisées et d'un design system réutilisable.",
      en: "The portfolio centralizes my projects, technical profile and contact options in a Next.js application structured around localized routes and a reusable design system.",
    },
    problem: {
      fr: "Présenter mon profil et mes projets dans une interface unique, rapide à parcourir et suffisamment structurée pour évoluer sans dupliquer les données.",
      en: "Present my profile and projects in a single interface that is quick to scan and structured enough to evolve without duplicating data.",
    },
    goals: {
      fr: [
        "Centraliser les projets et informations publiques.",
        "Proposer une navigation FR/EN cohérente.",
        "Maintenir une base testable et déployable.",
      ],
      en: [
        "Centralize projects and public information.",
        "Provide consistent FR/EN navigation.",
        "Keep the codebase testable and deployable.",
      ],
    },
    architecture: {
      fr: [
        "Next.js App Router avec routes localisées.",
        "Composants React et design system partagé.",
        "Données de projets centralisées dans src/lib/projects.ts.",
      ],
      en: [
        "Next.js App Router with localized routes.",
        "React components and shared design system.",
        "Project data centralized in src/lib/projects.ts.",
      ],
    },
    challenges: {
      fr: [
        "Éviter les duplications entre homepage et pages projet.",
        "Conserver une architecture compatible avec le rendu statique.",
      ],
      en: [
        "Avoid duplication between the homepage and project pages.",
        "Keep an architecture compatible with static rendering.",
      ],
    },
    solutions: {
      fr: [
        "Centralisation des métadonnées et contenus projet.",
        "Validation systématique via lint, typecheck, tests et build.",
      ],
      en: [
        "Centralized project metadata and content.",
        "Systematic validation through lint, typecheck, tests and build.",
      ],
    },
    results: {
      fr: [
        "Routes FR/EN pré-rendues.",
        "Base technique validée automatiquement avant mise en production.",
      ],
      en: [
        "Pre-rendered FR/EN routes.",
        "Technical baseline validated automatically before production.",
      ],
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "Cloudflare Tunnel",
      "systemd",
    ],
    highlights: {
      fr: [
        "Design system réutilisable.",
        "Internationalisation FR/EN par URL.",
        "Pipeline local lint + typecheck + tests + build.",
      ],
      en: [
        "Reusable design system.",
        "URL-based FR/EN internationalization.",
        "Local lint + typecheck + tests + build pipeline.",
      ],
    },
    tests: ["Vitest", "TypeScript", "ESLint", "Next.js production build"],
    infrastructure: ["Linux", "Raspberry Pi", "systemd", "Cloudflare Tunnel"],
    links: {
      github: "https://github.com/Trycky64/portfolio-V3",
      demo: "/",
    },
  },
  {
    slug: "citypulse",
    title: "CityPulse",
    type: "Application web",
    categories: ["Web"],
    status: "completed",
    year: 2025,
    featured: true,
    order: 10,
    image: "/images/projects/citypulse.png",
    gallery: [],
    shortDescription: {
      fr: "Application Vue 3 + TypeScript qui compare des données environnementales entre villes à partir d'API publiques.",
      en: "Vue 3 + TypeScript application that compares environmental data between cities using public APIs.",
    },
    longDescription: {
      fr: "CityPulse récupère des données météo et de qualité de l'air depuis des API publiques, valide et normalise les réponses, puis les présente dans une interface Vue avec cartes, graphiques et comparaison entre villes.",
      en: "CityPulse fetches weather and air-quality data from public APIs, validates and normalizes the responses, then presents them in a Vue interface with maps, charts and city comparison.",
    },
    problem: {
      fr: "Les API environnementales exposent des formats hétérogènes qu'il faut transformer en données cohérentes et faciles à exploiter côté interface.",
      en: "Environmental APIs expose heterogeneous formats that need to be transformed into consistent data that is easy to use in the UI.",
    },
    goals: {
      fr: [
        "Rechercher et comparer des villes.",
        "Afficher météo et qualité de l'air.",
        "Rendre les appels API robustes et testables.",
      ],
      en: [
        "Search and compare cities.",
        "Display weather and air quality.",
        "Make API calls robust and testable.",
      ],
    },
    architecture: {
      fr: [
        "Vue 3 + TypeScript + Vite.",
        "Pinia pour l'état et Vue Router pour la navigation.",
        "Services dédiés pour géocodage, météo et qualité de l'air.",
        "Validation des réponses avec Zod.",
      ],
      en: [
        "Vue 3 + TypeScript + Vite.",
        "Pinia for state and Vue Router for navigation.",
        "Dedicated services for geocoding, weather and air quality.",
        "Response validation with Zod.",
      ],
    },
    challenges: {
      fr: [
        "Uniformiser les réponses de plusieurs API.",
        "Conserver des tests E2E déterministes malgré les dépendances réseau.",
        "Gérer le cache et les comportements dégradés.",
      ],
      en: [
        "Normalize responses from several APIs.",
        "Keep E2E tests deterministic despite network dependencies.",
        "Handle caching and degraded behavior.",
      ],
    },
    solutions: {
      fr: [
        "Wrappers de services et modèles normalisés.",
        "Mocks de routes Playwright pour les tests E2E.",
        "Cache IndexedDB avec idb-keyval.",
      ],
      en: [
        "Service wrappers and normalized models.",
        "Playwright route mocks for E2E tests.",
        "IndexedDB cache with idb-keyval.",
      ],
    },
    results: {
      fr: [
        "Application front typée et structurée par fonctionnalités.",
        "Tests unitaires et E2E intégrés au workflow.",
        "CI GitHub Actions pour lint, typecheck, tests et build.",
      ],
      en: [
        "Typed frontend application structured by features.",
        "Unit and E2E tests integrated into the workflow.",
        "GitHub Actions CI for lint, typecheck, tests and build.",
      ],
    },
    stack: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "Vue Router",
      "Tailwind CSS",
      "Leaflet",
      "Chart.js",
      "Axios",
      "Zod",
    ],
    highlights: {
      fr: [
        "Validation des données API avec Zod.",
        "Cache IndexedDB.",
        "Mocks réseau déterministes pour Playwright.",
      ],
      en: [
        "API data validation with Zod.",
        "IndexedDB cache.",
        "Deterministic network mocks for Playwright.",
      ],
    },
    tests: ["Vitest", "Playwright", "ESLint", "TypeScript"],
    infrastructure: ["GitHub Actions"],
    links: {
      github: "https://github.com/Trycky64/citypulse",
    },
  },
];

function byProjectOrder(a: Project, b: Project) {
  return b.order - a.order;
}

export function getAllProjects(): Project[] {
  return [...projects].sort(byProjectOrder);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort(byProjectOrder)
    .slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects
    .filter((project) => project.categories.includes(category))
    .sort(byProjectOrder);
}
