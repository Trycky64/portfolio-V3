export type LocalizedText = { fr: string; en: string };
export type LocalizedList = { fr: string[]; en: string[] };

export type ProjectCategory =
  | "Python"
  | "Applications"
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
  type: string | LocalizedText;
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
  tests: string[] | LocalizedList;
  infrastructure: string[] | LocalizedList;
  links: ProjectLinks;
  seoDescription?: LocalizedText;
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
  {
    slug: "pygeolab",
    title: "PyGeoLab",
    type: {
      fr: "Application desktop de géométrie dynamique et de visualisation mathématique",
      en: "Dynamic geometry and mathematical visualization desktop application",
    },
    categories: ["Python", "Applications"],
    status: "active",
    contentStatus: "ready",
    year: 2026,
    featured: true,
    order: 30,
    image: "/images/projects/pygeolab/pygeolab-workspace.png",
    gallery: [
      "/images/projects/pygeolab/pygeolab-geometry.png",
      "/images/projects/pygeolab/pygeolab-math.png",
    ],
    shortDescription: {
      fr: "PyGeoLab est une application desktop de géométrie dynamique et de visualisation mathématique développée en Python avec PySide6. Elle associe un moteur géométrique typé, un graphe de dépendances pour la recomputation incrémentale, un parseur mathématique sans eval(), une persistance versionnée, des tests automatisés et des distributions Windows/Linux.",
      en: "PyGeoLab is a Python/PySide6 desktop application for dynamic geometry and mathematical visualization. It combines a typed geometry engine, dependency-driven incremental recomputation, a mathematical parser without eval(), versioned persistence, automated tests, and packaged Windows/Linux distributions.",
    },
    longDescription: {
      fr: "PyGeoLab repose sur un cœur métier Python indépendant de l’interface Qt. Ses objets géométriques immuables sont identifiés par UUID. Un graphe de dépendances acyclique propage les modifications et recalcule les constructions affectées. L’application comprend aussi un moteur d’expressions mathématiques, des documents .pgl versionnés, un historique Undo/Redo et une chaîne de qualité avec Ruff, mypy strict, pytest, pytest-qt, CI multi-OS et packaging PyInstaller.",
      en: "PyGeoLab is built around a Python domain core independent of the Qt interface. Its immutable geometric objects have stable UUIDs. An acyclic dependency graph propagates edits and recomputes affected constructions. The application also includes a mathematical expression engine, versioned .pgl documents, Undo/Redo history, and quality checks with Ruff, strict mypy, pytest, pytest-qt, multi-OS CI, and PyInstaller packaging.",
    },
    problem: {
      fr: "Construire une application interactive où des objets géométriques et mathématiques dépendent les uns des autres et réagissent aux modifications sans recalculer toute la scène, tout en conservant un document validable et robuste face aux cas dégénérés.",
      en: "Build an interactive application where geometric and mathematical objects depend on each other and react to edits without recomputing the entire scene, while keeping the document validatable and robust to degenerate cases.",
    },
    goals: {
      fr: [
        "Séparer le domaine géométrique de l’interface Qt.",
        "Maintenir des dépendances cohérentes et ne recalculer que les objets affectés.",
        "Gérer explicitement les cas géométriques dégénérés.",
        "Sauvegarder et charger des documents versionnés et validés.",
        "Vérifier le code par typage strict et tests automatisés.",
      ],
      en: [
        "Keep the geometry domain independent from the Qt UI.",
        "Maintain consistent dependencies and recompute only affected objects.",
        "Handle degenerate geometric cases explicitly.",
        "Save and load versioned, validated documents.",
        "Check code with strict typing and automated tests.",
      ],
    },
    architecture: {
      fr: [
        "Domaine géométrique et mathématique indépendant de Qt.",
        "Modèle Document avec objets immuables et UUID stables.",
        "Graphe acyclique avec détection de cycles, tri topologique et recomputation ciblée.",
        "Couche de commandes Undo/Redo ; interaction, rendu et UI séparés.",
        "Persistance .pgl versionnée avec validation avant reconstruction.",
      ],
      en: [
        "Geometry and math domain independent of Qt.",
        "Document model with immutable objects and stable UUIDs.",
        "Acyclic graph with cycle detection, topological ordering, and targeted recomputation.",
        "Undo/Redo command layer; separate interaction, rendering, and UI.",
        "Versioned .pgl persistence validated before reconstruction.",
      ],
    },
    challenges: {
      fr: [
        "Propager les modifications dans un graphe de constructions sans incohérence.",
        "Traiter les configurations géométriques impossibles et les limites numériques.",
        "Analyser des expressions utilisateur sans exécuter du Python arbitraire.",
        "Tester les interactions Qt en plus du cœur métier.",
      ],
      en: [
        "Propagate edits through a construction graph consistently.",
        "Handle impossible geometric configurations and numerical limits.",
        "Parse user expressions without running arbitrary Python.",
        "Test Qt interactions alongside the domain core.",
      ],
    },
    solutions: {
      fr: [
        "Validation du DAG, tri topologique et recalcul des descendants affectés.",
        "Définitions métier immuables et modifications du Document validées avant publication.",
        "Tolérance géométrique centralisée et états d’erreur explicites.",
        "Parseur recursive-descent avec AST interne, sans eval() ni exec().",
        "Tests pytest-qt et contrôles CI sur Windows/Linux et Python 3.12 à 3.14.",
      ],
      en: [
        "DAG validation, topological ordering, and recomputation of affected descendants.",
        "Immutable domain definitions and Document changes validated before publication.",
        "Centralized geometric tolerance and explicit error states.",
        "Recursive-descent parser with an internal AST, without eval() or exec().",
        "pytest-qt tests and CI checks on Windows/Linux and Python 3.12 to 3.14.",
      ],
    },
    results: {
      fr: [
        "355 tests passés localement sur la révision 1.1.1 inspectée.",
        "Ruff (lint et format) et mypy strict validés localement.",
        "Release v1.1.1 publiée avec archives Windows x64 et Linux x64.",
        "Contrôles de non-régression des performances présents dans la suite de tests.",
      ],
      en: [
        "355 tests passed locally on the inspected 1.1.1 revision.",
        "Ruff (lint and format) and strict mypy passed locally.",
        "Release v1.1.1 published with Windows x64 and Linux x64 archives.",
        "Performance regression checks are included in the test suite.",
      ],
    },
    stack: [
      "Python",
      "PySide6",
      "Qt",
      "pytest",
      "pytest-qt",
      "Ruff",
      "mypy",
      "Hatchling",
      "PyInstaller",
      "GitHub Actions",
    ],
    highlights: {
      fr: [
        "Moteur géométrique 2D indépendant de l’UI.",
        "Graphe de dépendances avec recomputation incrémentale.",
        "Modèle documentaire immuable et mises à jour atomiques.",
        "Parseur mathématique sans eval().",
        "Tests unitaires, d’intégration, UI, système et de non-régression.",
        "Packaging PyInstaller et releases Windows/Linux.",
      ],
      en: [
        "UI-independent 2D geometry engine.",
        "Dependency graph with incremental recomputation.",
        "Immutable document objects and atomic updates.",
        "Mathematical parser without eval().",
        "Unit, integration, UI, system, and regression tests.",
        "PyInstaller packaging and Windows/Linux releases.",
      ],
    },
    tests: {
      fr: ["pytest · 355 tests réussis localement", "pytest-qt pour les interactions UI", "Ruff : lint et format", "mypy en mode strict", "CI : Windows/Linux · Python 3.12/3.13/3.14", "Tests de démarrage des exécutables PyInstaller"],
      en: ["pytest · 355 tests passed locally", "pytest-qt for UI interactions", "Ruff lint and format", "mypy in strict mode", "CI: Windows/Linux · Python 3.12/3.13/3.14", "PyInstaller executable smoke tests"],
    },
    infrastructure: {
      fr: ["GitHub Actions : CI Windows/Linux", "PyInstaller : archives Windows x64 et Linux x64"],
      en: ["GitHub Actions: Windows/Linux CI", "PyInstaller: Windows x64 and Linux x64 archives"],
    },
    links: { github: "https://github.com/Trycky64/PyGeoLab" },
    seoDescription: {
      fr: "Application desktop Python/PySide6 de géométrie dynamique avec moteur géométrique, graphe de dépendances, tests automatisés et packaging Windows/Linux.",
      en: "Python/PySide6 dynamic geometry desktop application with a geometry engine, dependency graph, automated tests, and Windows/Linux packaging.",
    },
  },
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

export function getProjectType(project: Project, locale: keyof LocalizedText): string {
  return typeof project.type === "string" ? project.type : project.type[locale];
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
