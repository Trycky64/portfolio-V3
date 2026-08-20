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
    slug: "portfolio-v5",
    title: "Portfolio V5",
    type: "Portfolio de recrutement",
    categories: ["Web", "DevOps"],
    status: "active",
    year: 2026,
    featured: true,
    order: 20,
    image: "/images/projects/portfolio-v3.png",
    gallery: [],
    shortDescription: {
      fr: "Portfolio bilingue orienté recrutement, développé avec Next.js, React et TypeScript, avec design system, tests, CI et hébergement auto-géré.",
      en: "Bilingual recruitment-focused portfolio built with Next.js, React and TypeScript, with a design system, tests, CI and self-managed hosting.",
    },
    longDescription: {
      fr: "Portfolio V5 est une refonte complète de mon portfolio pour présenter clairement mon positionnement Python/backend, mes projets techniques et mon parcours. L'application sépare le contenu FR/EN par URL, centralise les données de projets et s'appuie sur une base Next.js typée, testée et conçue pour un déploiement auto-hébergé.",
      en: "Portfolio V5 is a complete rebuild of my portfolio to clearly present my Python/backend positioning, technical projects and background. The application separates FR/EN content by URL, centralizes project data and relies on a typed and tested Next.js foundation designed for self-hosted deployment.",
    },
    problem: {
      fr: "Construire un portfolio de recrutement bilingue qui reste rapide à parcourir, crédible techniquement et facile à maintenir, tout en réunissant SEO, contact, validation continue et hébergement auto-géré sans retomber dans un positionnement de site vitrine freelance.",
      en: "Build a bilingual recruitment portfolio that remains quick to scan, technically credible and easy to maintain, while combining SEO, contact, continuous validation and self-managed hosting without falling back to a freelance showcase positioning.",
    },
    goals: {
      fr: [
        "Présenter immédiatement un positionnement Python, backend et applicatif.",
        "Fournir des routes FR/EN cohérentes avec des URLs stables.",
        "Transformer les projets en études de cas structurées à partir d'une source de données unique.",
        "Préparer une base SEO complète avec métadonnées localisées, canonical et hreflang.",
        "Conserver un formulaire de contact serveur avec validation et gestion explicite des erreurs.",
        "Automatiser la validation du code avant intégration avec lint, typecheck, tests et build.",
        "Déployer l'application sur une infrastructure Linux auto-hébergée.",
      ],
      en: [
        "Immediately present a Python, backend and application-development positioning.",
        "Provide consistent FR/EN routes with stable URLs.",
        "Turn projects into structured case studies from a single data source.",
        "Prepare a complete SEO foundation with localized metadata, canonical URLs and hreflang.",
        "Keep a server-side contact form with validation and explicit error handling.",
        "Automate code validation before integration with lint, typecheck, tests and build.",
        "Deploy the application on self-hosted Linux infrastructure.",
      ],
    },
    architecture: {
      fr: [
        "Développement : Next.js 16 App Router, React 19, TypeScript et Tailwind CSS.",
        "Architecture web : routes localisées /fr et /en, composants réutilisables et design system centralisé.",
        "Données : projets centralisés dans src/lib/projects.ts et consommés par la homepage, la liste complète et les pages détail.",
        "Qualité : ESLint, TypeScript, Vitest et build Next.js regroupés dans la commande npm run verify.",
        "CI : GitHub Actions exécute installation, lint, typecheck, tests et build sur Ubuntu avec Node.js 22.",
        "Hébergement : application prévue sur Raspberry Pi/Linux, service géré avec systemd et exposition HTTPS via Cloudflare Tunnel.",
      ],
      en: [
        "Development: Next.js 16 App Router, React 19, TypeScript and Tailwind CSS.",
        "Web architecture: localized /fr and /en routes, reusable components and a centralized design system.",
        "Data: projects centralized in src/lib/projects.ts and consumed by the homepage, full list and detail pages.",
        "Quality: ESLint, TypeScript, Vitest and the Next.js build grouped under npm run verify.",
        "CI: GitHub Actions runs install, lint, typecheck, tests and build on Ubuntu with Node.js 22.",
        "Hosting: application designed for Raspberry Pi/Linux hosting, managed with systemd and exposed over HTTPS through Cloudflare Tunnel.",
      ],
    },
    challenges: {
      fr: [
        "Faire évoluer une V3 très orientée freelance vers une expérience de recrutement sans conserver de contenu obsolète.",
        "Éviter la duplication entre les pages localisées et entre les différentes vues d'un même projet.",
        "Garder des limites Server/Client propres avec l'App Router.",
        "Conserver un design cohérent tout en migrant progressivement les anciens composants.",
        "Ne pas confondre CI et déploiement : GitHub Actions valide le code, tandis que l'hébergement est géré séparément.",
      ],
      en: [
        "Move from a freelance-oriented V3 to a recruitment experience without keeping obsolete content.",
        "Avoid duplication across localized pages and the different views of the same project.",
        "Keep clean Server/Client boundaries with the App Router.",
        "Maintain a consistent design while progressively migrating legacy components.",
        "Keep CI and deployment distinct: GitHub Actions validates the code while hosting is managed separately.",
      ],
    },
    solutions: {
      fr: [
        "Positionnement, contenus et CTA réécrits autour de Python/backend et de la recherche d'emploi.",
        "Locale portée par l'URL et génération statique des routes FR/EN.",
        "Modèle Project fortement typé avec helpers dédiés pour projets featured, catégories et slugs.",
        "Design tokens et composants UI communs pour limiter les styles ad hoc.",
        "Commande verify unique pour lancer lint, typecheck, tests et build avant chaque milestone.",
        "Séparation explicite entre la chaîne de développement/CI et la couche d'hébergement Linux.",
      ],
      en: [
        "Reworked positioning, content and CTAs around Python/backend and job search.",
        "URL-based locale handling and static generation of FR/EN routes.",
        "Strongly typed Project model with dedicated helpers for featured projects, categories and slugs.",
        "Shared design tokens and UI components to limit ad hoc styling.",
        "Single verify command to run lint, typecheck, tests and build before each milestone.",
        "Explicit separation between the development/CI pipeline and the Linux hosting layer.",
      ],
    },
    results: {
      fr: [
        "Une homepage structurée pour un parcours recruteur : Hero, Projets, Compétences, Expérience, Formation, À propos et Contact.",
        "Une architecture de routes /fr et /en pré-rendues avec pages projet dynamiques par slug.",
        "Un design system et un modèle de données projet réutilisables.",
        "Un CV public intégré au parcours de candidature.",
        "Une validation locale reproductible via npm run verify.",
        "Une CI GitHub Actions présente pour lint, typecheck, tests et build.",
      ],
      en: [
        "A homepage structured for a recruiter journey: Hero, Projects, Skills, Experience, Education, About and Contact.",
        "Pre-rendered /fr and /en route architecture with slug-based project pages.",
        "A reusable design system and project data model.",
        "A public resume integrated into the application flow.",
        "Reproducible local validation through npm run verify.",
        "A GitHub Actions CI workflow for lint, typecheck, tests and build.",
      ],
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
      "Linux",
      "Raspberry Pi",
      "systemd",
      "Cloudflare Tunnel",
    ],
    highlights: {
      fr: [
        "Positionnement recrutement Python/backend.",
        "Internationalisation FR/EN pilotée par l'URL.",
        "Design system réutilisable et composants accessibles.",
        "Modèle de données unique pour toutes les vues projet.",
        "Pipeline de validation lint + typecheck + tests + build.",
        "Développement et hébergement documentés comme deux couches distinctes.",
      ],
      en: [
        "Python/backend recruitment positioning.",
        "URL-driven FR/EN internationalization.",
        "Reusable design system and accessible components.",
        "Single data model for every project view.",
        "Lint + typecheck + tests + build validation pipeline.",
        "Development and hosting documented as two distinct layers.",
      ],
    },
    tests: [
      "Vitest",
      "TypeScript",
      "ESLint",
      "Next.js production build",
    ],
    infrastructure: [
      "CI — GitHub Actions / Ubuntu / Node.js 22",
      "Hosting — Raspberry Pi / Linux",
      "Process manager — systemd",
      "Public ingress — Cloudflare Tunnel",
    ],
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
