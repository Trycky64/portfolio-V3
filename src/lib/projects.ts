export type LocalizedText = { fr: string; en: string };
export type LocalizedList = { fr: string[]; en: string[] };

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

export type ProjectContentStatus = "placeholder" | "ready";

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
  contentStatus: ProjectContentStatus;
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

type TemplateInput = Pick<
  Project,
  | "slug"
  | "title"
  | "type"
  | "categories"
  | "status"
  | "year"
  | "featured"
  | "order"
  | "shortDescription"
  | "stack"
  | "links"
> &
  Partial<Pick<Project, "image" | "gallery">>;

function projectTemplate(input: TemplateInput): Project {
  return {
    ...input,
    contentStatus: "placeholder",
    gallery: input.gallery ?? [],
    longDescription: {
      fr: "Étude de cas en cours de préparation.",
      en: "Case study currently being prepared.",
    },
    problem: { fr: "", en: "" },
    goals: { fr: [], en: [] },
    architecture: { fr: [], en: [] },
    challenges: { fr: [], en: [] },
    solutions: { fr: [], en: [] },
    results: { fr: [], en: [] },
    highlights: { fr: [], en: [] },
    tests: [],
    infrastructure: [],
  };
}

// Les fiches détaillées restent volontairement en template tant que les projets
// et leurs assets ne sont pas considérés comme portfolio-ready.
const projects: Project[] = [
  projectTemplate({
    slug: "portfolio-v5",
    title: "Portfolio V5",
    type: "Portfolio de recrutement",
    categories: ["Web", "DevOps"],
    status: "active",
    year: 2026,
    featured: true,
    order: 20,
    image: "/images/projects/portfolio-v3.png",
    shortDescription: {
      fr: "Portfolio bilingue développé avec Next.js, React et TypeScript pour présenter mes projets et mon parcours.",
      en: "Bilingual portfolio built with Next.js, React and TypeScript to present my projects and background.",
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vitest"],
    links: {
      github: "https://github.com/Trycky64/portfolio-V3",
      demo: "/",
    },
  }),

  projectTemplate({
    slug: "tryckys-rtp",
    title: "Trycky's RTP",
    type: "Mod serveur",
    categories: ["Java", "Backend"],
    status: "active",
    year: 2026,
    featured: true,
    order: 15,
    shortDescription: {
      fr: "Projet Java/NeoForge côté serveur autour d'une téléportation aléatoire configurable et sécurisée.",
      en: "Server-side Java/NeoForge project built around configurable and safe random teleportation.",
    },
    stack: ["Java", "NeoForge", "Minecraft 1.21.1", "Gradle", "Git", "GitHub"],
    links: {
      github: "https://github.com/Trycky64/Tryckys-RTP",
      docs: "https://rtp.quentinperriere.com/",
    },
  }),

  projectTemplate({
    slug: "citypulse",
    title: "CityPulse",
    type: "Application web",
    categories: ["Web"],
    status: "completed",
    year: 2025,
    featured: true,
    order: 10,
    image: "/images/projects/citypulse.png",
    shortDescription: {
      fr: "Application Vue 3 + TypeScript exploitant des API publiques de données environnementales.",
      en: "Vue 3 + TypeScript application using public environmental-data APIs.",
    },
    stack: ["Vue 3", "TypeScript", "Vite", "Pinia", "Vue Router", "Zod", "Vitest", "Playwright"],
    links: {
      github: "https://github.com/Trycky64/citypulse",
      demo: "https://citypulse.quentinperriere.com/",
    },
  }),
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
