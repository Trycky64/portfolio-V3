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
      fr: "Application Vue 3 + TypeScript qui agrège, valide et met en cache des données météo et de qualité de l'air issues d'API publiques.",
      en: "Vue 3 + TypeScript application that aggregates, validates and caches weather and air-quality data from public APIs.",
    },
    longDescription: {
      fr: "CityPulse est une application web développée avec Vue 3, TypeScript et Vite. Elle organise la navigation avec Vue Router, l'état avec Pinia et les accès aux données dans des services dédiés. Les réponses reçues sont normalisées et validées avec Zod, puis mises en cache côté navigateur avec IndexedDB afin de limiter les appels inutiles et d'améliorer la résilience de l'interface.",
      en: "CityPulse is a web application built with Vue 3, TypeScript and Vite. It organizes navigation with Vue Router, state with Pinia and data access through dedicated services. Received responses are normalized and validated with Zod, then cached in the browser with IndexedDB to reduce unnecessary requests and improve UI resilience.",
    },
    problem: {
      fr: "Présenter des données environnementales provenant de sources externes sous une forme cohérente, tout en gérant les différences de schéma, les erreurs réseau et la répétition des appels API.",
      en: "Present environmental data coming from external sources in a consistent form while handling schema differences, network failures and repeated API requests.",
    },
    goals: {
      fr: [
        "Rechercher des villes et naviguer entre les vues avec Vue Router.",
        "Centraliser l'état applicatif avec Pinia.",
        "Afficher des données météo et de qualité de l'air issues d'API publiques.",
        "Valider et normaliser les réponses avant leur consommation par l'interface.",
        "Réduire les requêtes répétées grâce à un cache persistant côté navigateur.",
        "Tester les services et les parcours critiques de façon reproductible.",
      ],
      en: [
        "Search for cities and navigate between views with Vue Router.",
        "Centralize application state with Pinia.",
        "Display weather and air-quality data from public APIs.",
        "Validate and normalize responses before they reach the UI.",
        "Reduce repeated requests with persistent browser-side caching.",
        "Test services and critical user flows reproducibly.",
      ],
    },
    architecture: {
      fr: [
        "Interface : Vue 3 + TypeScript + Vite.",
        "Navigation : Vue Router.",
        "State management : Pinia.",
        "Accès aux données : services dédiés pour géocodage, météo et qualité de l'air.",
        "Validation : schémas Zod autour des réponses externes.",
        "Visualisation : Leaflet pour la cartographie et Chart.js pour les graphiques.",
      ],
      en: [
        "Interface: Vue 3 + TypeScript + Vite.",
        "Navigation: Vue Router.",
        "State management: Pinia.",
        "Data access: dedicated services for geocoding, weather and air quality.",
        "Validation: Zod schemas around external responses.",
        "Visualization: Leaflet for maps and Chart.js for charts.",
      ],
    },
    challenges: {
      fr: [
        "Transformer des réponses externes hétérogènes en modèles exploitables par l'UI.",
        "Éviter qu'une dépendance réseau rende les tests E2E instables.",
        "Réutiliser les données déjà récupérées sans servir indéfiniment des valeurs expirées.",
        "Conserver un comportement testable lorsque IndexedDB n'est pas disponible.",
      ],
      en: [
        "Transform heterogeneous external responses into models usable by the UI.",
        "Prevent network dependencies from making E2E tests unstable.",
        "Reuse previously fetched data without serving expired values indefinitely.",
        "Keep behavior testable when IndexedDB is unavailable.",
      ],
    },
    solutions: {
      fr: [
        "Validation et transformation des réponses avec Zod dans la couche service.",
        "Cache avec durée de vie et stratégie stale-while-revalidate basé sur idb-keyval/IndexedDB.",
        "Fallback mémoire du cache lorsque IndexedDB n'est pas disponible, notamment dans l'environnement de test.",
        "Mocks réseau Playwright pour rendre les scénarios E2E déterministes.",
      ],
      en: [
        "Response validation and transformation with Zod in the service layer.",
        "TTL-based stale-while-revalidate cache using idb-keyval/IndexedDB.",
        "In-memory cache fallback when IndexedDB is unavailable, notably in the test environment.",
        "Playwright network mocks to keep E2E scenarios deterministic.",
      ],
    },
    results: {
      fr: [
        "Architecture front typée avec séparation claire entre interface, état et services.",
        "Données externes validées avant d'être exposées aux composants.",
        "Cache navigateur persistant avec expiration et rafraîchissement en arrière-plan.",
        "Tests unitaires avec Vitest et tests end-to-end avec Playwright.",
        "Workflow GitHub Actions pour lint, typecheck, tests et build.",
      ],
      en: [
        "Typed frontend architecture with clear separation between UI, state and services.",
        "External data validated before being exposed to components.",
        "Persistent browser cache with expiration and background refresh.",
        "Unit tests with Vitest and end-to-end tests with Playwright.",
        "GitHub Actions workflow for lint, typecheck, tests and build.",
      ],
    },
    stack: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "Vue Router",
      "Zod",
      "Axios",
      "IndexedDB",
      "idb-keyval",
      "Leaflet",
      "Chart.js",
    ],
    highlights: {
      fr: [
        "Validation de données externes avec Zod.",
        "State management avec Pinia.",
        "Cache IndexedDB avec TTL et stale-while-revalidate.",
        "Tests unitaires Vitest et E2E Playwright.",
        "CI GitHub Actions.",
      ],
      en: [
        "External data validation with Zod.",
        "State management with Pinia.",
        "IndexedDB cache with TTL and stale-while-revalidate.",
        "Vitest unit tests and Playwright E2E tests.",
        "GitHub Actions CI.",
      ],
    },
    tests: [
      "Vitest",
      "Playwright",
      "TypeScript",
      "ESLint",
    ],
    infrastructure: [
      "GitHub Actions — lint / typecheck / tests / build",
      "Browser cache — IndexedDB / idb-keyval",
    ],
    links: {
      github: "https://github.com/Trycky64/citypulse",
      demo: "https://citypulse.quentinperriere.com/",
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
