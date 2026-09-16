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
  {
    slug: "jellyfin-media-integrity",
    title: "Jellyfin Media Integrity",
    type: {
      fr: "Plugin serveur Jellyfin de détection et réparation contrôlée de médias",
      en: "Jellyfin server plugin for media integrity detection and guarded repair",
    },
    categories: ["Backend", "Applications"],
    status: "active",
    contentStatus: "ready",
    year: 2026,
    featured: true,
    order: 25,
    image: "/images/projects/jellyfin-media-integrity/settings.png",
    gallery: [
      "/images/projects/jellyfin-media-integrity/scheduled-tasks.png",
      "/images/projects/jellyfin-media-integrity/status.png",
    ],
    shortDescription: {
      fr: "Plugin serveur C#/.NET pour détecter des anomalies structurelles dans une bibliothèque Jellyfin et remuxer les fichiers éligibles avec FFmpeg, sans réencodage. Il associe ffprobe, une file persistante, la validation des flux, le contrôle des lectures actives, des sauvegardes vérifiées par SHA-256 et un remplacement avec possibilité de retour arrière.",
      en: "C#/.NET server plugin that detects structural issues in a Jellyfin library and remuxes eligible files with FFmpeg, without re-encoding. It combines ffprobe, a persistent queue, stream validation, active-playback checks, SHA-256-verified backups, and rollback-aware replacement.",
    },
    longDescription: {
      fr: "Le plugin natif s’intègre aux API de bibliothèque et de sessions de Jellyfin ainsi qu’à ses tâches planifiées. Un scan analyse les médias avec ffprobe, classe les anomalies et place les candidats éligibles dans une file JSON persistante. La tâche de réparation utilise FFmpeg en copie de flux, valide le résultat et vérifie les chemins et les lectures en cours avant tout remplacement. Le mode simulation est activé par défaut ; sauvegarde, manifeste de récupération, staging et retour arrière encadrent les opérations sur les fichiers.",
      en: "The native plugin integrates with Jellyfin's library and session APIs and its scheduled tasks. A scan probes media with ffprobe, classifies issues, and places eligible candidates in a persistent JSON queue. The repair task uses FFmpeg stream copy, validates its output, and checks paths and active playback before replacement. Dry run is enabled by default; backups, a recovery manifest, staging, and rollback guard file operations.",
    },
    problem: {
      fr: "Un conteneur média peut être défectueux alors que ses flux audio et vidéo restent utilisables. Une réparation automatique doit éviter de toucher un fichier sain, de remplacer un média en cours de lecture ou de perdre l’original.",
      en: "A media container may be damaged while its audio and video streams remain usable. Automated repair must avoid changing healthy files, replacing media during playback, or losing the original.",
    },
    goals: {
      fr: [
        "Détecter certaines anomalies structurelles dans la bibliothèque Jellyfin.",
        "Remuxer les cas éligibles sans réencoder les flux.",
        "Protéger l’original et refuser le remplacement si une validation échoue.",
        "Éviter les remplacements pendant une lecture active.",
        "Rendre les scans et réparations annulables et observables.",
      ],
      en: [
        "Detect selected structural issues in the Jellyfin library.",
        "Remux eligible cases without re-encoding streams.",
        "Protect originals and reject replacement when validation fails.",
        "Avoid replacement during active playback.",
        "Make scans and repairs cancellable and observable.",
      ],
    },
    architecture: {
      fr: [
        "Plugin Jellyfin natif avec injection de dépendances, page d’administration et API réservée aux administrateurs.",
        "LibraryMediaProvider → MediaProbeService (ffprobe) → MediaIssueDetector → file de réparation JSON versionnée.",
        "Deux tâches planifiées séparent le scan du traitement de la file.",
        "MediaRemuxService lance FFmpeg en copie de flux ; MediaValidationService contrôle la sortie.",
        "PathSecurityService et MediaUseService vérifient les chemins et les sessions ; MediaReplacementService gère sauvegarde, staging, manifeste et retour arrière.",
      ],
      en: [
        "Native Jellyfin plugin with dependency injection, an admin page, and an administrator-only API.",
        "LibraryMediaProvider → MediaProbeService (ffprobe) → MediaIssueDetector → versioned JSON repair queue.",
        "Two scheduled tasks separate scanning from queue processing.",
        "MediaRemuxService runs FFmpeg in stream-copy mode; MediaValidationService checks the output.",
        "PathSecurityService and MediaUseService check paths and sessions; MediaReplacementService handles backup, staging, the recovery manifest, and rollback.",
      ],
    },
    challenges: {
      fr: [
        "Superviser ffprobe et FFmpeg avec annulation et délais d’expiration.",
        "Distinguer les anomalies remuxables des fichiers illisibles ou corrompus.",
        "Préserver les flux attendus et éviter un remplacement pendant la lecture.",
        "Limiter les accès hors des racines autorisées et les liens symboliques.",
        "Récupérer l’original après certains échecs de remplacement.",
      ],
      en: [
        "Supervise ffprobe and FFmpeg with cancellation and timeouts.",
        "Distinguish remuxable issues from unreadable or corrupted files.",
        "Preserve expected streams and avoid replacing files during playback.",
        "Constrain paths to allowed roots and reject symbolic links.",
        "Recover the original after certain replacement failures.",
      ],
    },
    solutions: {
      fr: [
        "ProcessStartInfo.ArgumentList, opérations asynchrones, CancellationToken et timeouts.",
        "Classification explicite, file persistante versionnée et limites de tentatives.",
        "Mode simulation activé par défaut et une réparation réelle au maximum par exécution par défaut.",
        "Validation ffprobe et passe complète des paquets configurable avant remplacement.",
        "Contrôle des sessions, validation des chemins et des points de réanalyse.",
        "Sauvegarde et empreintes SHA-256, staging, manifeste de récupération et retour arrière sur certains échecs.",
      ],
      en: [
        "ProcessStartInfo.ArgumentList, asynchronous operations, CancellationToken, and timeouts.",
        "Explicit classification, a versioned persistent queue, and retry limits.",
        "Dry run enabled by default and a default limit of one real repair per run.",
        "ffprobe validation and a configurable full packet pass before replacement.",
        "Session checks, path containment, and reparse-point checks.",
        "Backup and SHA-256 hashes, staging, a recovery manifest, and rollback for certain failures.",
      ],
    },
    results: {
      fr: [
        "Version 1.0.0 compilée et packagée localement pour Jellyfin 10.11.11.",
        "69 tests xUnit et test du contrat JavaScript réussis localement.",
        "Plugin chargé dans une instance Jellyfin 10.11.11 jetable ; page d’administration et deux tâches planifiées vérifiées.",
        "Scan exécuté sur une bibliothèque vide ; les statistiques de la dernière exécution sont visibles dans la page du plugin.",
      ],
      en: [
        "Version 1.0.0 built and packaged locally for Jellyfin 10.11.11.",
        "69 xUnit tests and the JavaScript contract test passed locally.",
        "Plugin loaded in a disposable Jellyfin 10.11.11 instance; its admin page and two scheduled tasks were verified.",
        "A scan ran on an empty library; last-run statistics are visible on the plugin page.",
      ],
    },
    stack: [
      "C#",
      ".NET 9",
      "Jellyfin API",
      "ASP.NET Core",
      "FFmpeg",
      "ffprobe",
      "xUnit",
      "HTML / JavaScript",
      "GitHub Actions",
      "Linux",
    ],
    highlights: {
      fr: [
        "Plugin serveur natif Jellyfin en C#/.NET.",
        "Pipeline ffprobe → classification → file → remux → validation.",
        "Remux FFmpeg en copie de flux, sans réencodage.",
        "Contrôle des sessions actives et des chemins avant remplacement.",
        "Sauvegardes vérifiées par SHA-256 et reprise guidée par un manifeste.",
        "69 tests xUnit, test JavaScript et CI GitHub Actions.",
      ],
      en: [
        "Native Jellyfin server plugin in C#/.NET.",
        "ffprobe → classification → queue → remux → validation pipeline.",
        "FFmpeg stream-copy remuxing without re-encoding.",
        "Active-session and path checks before replacement.",
        "SHA-256-verified backups and manifest-guided recovery.",
        "69 xUnit tests, a JavaScript contract test, and GitHub Actions CI.",
      ],
    },
    tests: {
      fr: [
        "xUnit : 69 tests réussis localement en Release.",
        "Test du contrat JavaScript de la page d’administration : réussi.",
        "dotnet format --verify-no-changes et build Release : réussis.",
        "Harness PiValidation : compilation réussie ; exécution dépendante d’une instance externe non effectuée ici.",
        "Validation manuelle : chargement, configuration, API administrateur et scan sur Jellyfin local jetable.",
      ],
      en: [
        "xUnit: 69 tests passed locally in Release.",
        "Admin-page JavaScript contract test: passed.",
        "dotnet format --verify-no-changes and Release build: passed.",
        "PiValidation harness: build passed; run against an external instance was not performed here.",
        "Manual validation: load, configuration, administrator API, and scan on disposable local Jellyfin.",
      ],
    },
    infrastructure: {
      fr: [
        "Cible Jellyfin 10.11.11 et .NET 9 ; plugin chargé sur une instance Jellyfin locale conteneurisée.",
        "GitHub Actions : restore, format, build, tests, vérification JavaScript, packaging et artefacts ZIP/TRX.",
      ],
      en: [
        "Targets Jellyfin 10.11.11 and .NET 9; loaded on a local container-hosted Jellyfin instance.",
        "GitHub Actions: restore, format, build, tests, JavaScript check, packaging, and ZIP/TRX artifacts.",
      ],
    },
    links: {},
    seoDescription: {
      fr: "Plugin serveur Jellyfin en C#/.NET pour détecter et remuxer des médias présentant des anomalies structurelles, avec validation, sauvegardes et retour arrière.",
      en: "C#/.NET Jellyfin server plugin for detecting and remuxing structural media issues, with validation, backups, and rollback.",
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
