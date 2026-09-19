export type LocalizedText = { fr: string; en: string };

export type SkillGroup = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
  evidence: { fr: string[]; en: string[] };
};

export const skillGroups: SkillGroup[] = [
  {
    id: "python-architecture",
    title: { fr: "Python & Architecture applicative", en: "Python & Application architecture" },
    description: {
      fr: "Cœurs métier séparés de l’interface, modèles immuables, dépendances explicites, typage strict et packaging.",
      en: "Domain cores separated from the UI, immutable models, explicit dependencies, strict typing and packaging.",
    },
    items: ["Python", "PySide6", "Architecture applicative", "Typage strict", "PyInstaller"],
    evidence: { fr: ["PyGeoLab", "MaxSea International"], en: ["PyGeoLab", "MaxSea International"] },
  },
  {
    id: "backend-server",
    title: { fr: "Backend & intégrations serveur", en: "Backend & Server integrations" },
    description: {
      fr: "Services backend, intégrations serveur, validation des entrées et traitements de fichiers encadrés.",
      en: "Backend services, server integrations, input validation and controlled file processing.",
    },
    items: ["C#", ".NET 9", "ASP.NET Core", "Jellyfin API", "FFmpeg", "ffprobe", "Hono", "Node.js"],
    evidence: { fr: ["Jellyfin Media Integrity", "CityPulse"], en: ["Jellyfin Media Integrity", "CityPulse"] },
  },
  {
    id: "apis-data",
    title: { fr: "APIs & données", en: "APIs & Data" },
    description: {
      fr: "Consommation, validation et normalisation d’API, persistance locale et bases SQL relationnelles.",
      en: "API consumption, validation and normalization, local persistence and relational SQL databases.",
    },
    items: ["APIs REST", "Axios", "Zod", "SQL", "Doctrine", "IndexedDB", "Nominatim", "Open-Meteo"],
    evidence: { fr: ["CityPulse", "DWE64"], en: ["CityPulse", "DWE64"] },
  },
  {
    id: "testing-quality",
    title: { fr: "Tests & qualité", en: "Testing & Quality" },
    description: {
      fr: "Tests unitaires, interface et end-to-end, analyse statique, typage et contrôles automatisés en CI.",
      en: "Unit, UI and end-to-end testing, static analysis, type checking and automated CI checks.",
    },
    items: ["pytest", "pytest-qt", "Airtest", "xUnit", "Vitest", "Playwright", "Ruff", "mypy", "ESLint", "TypeScript type checking", "GitHub Actions"],
    evidence: {
      fr: ["PyGeoLab", "Jellyfin Media Integrity", "CityPulse", "TEC", "MaxSea International"],
      en: ["PyGeoLab", "Jellyfin Media Integrity", "CityPulse", "TEC", "MaxSea International"],
    },
  },
  {
    id: "web",
    title: { fr: "Web", en: "Web" },
    description: {
      fr: "Applications web typées, interfaces responsives et intégration frontend/backend.",
      en: "Typed web applications, responsive interfaces and frontend/backend integration.",
    },
    items: ["TypeScript", "JavaScript", "Vue 3", "React", "Next.js", "Symfony", "HTML", "CSS", "Tailwind CSS"],
    evidence: { fr: ["CityPulse", "Portfolio V5", "DWE64"], en: ["CityPulse", "Portfolio V5", "DWE64"] },
  },
  {
    id: "java",
    title: { fr: "Java", en: "Java" },
    description: {
      fr: "Développement Java 21 avec logique déterministe, intégration NeoForge et build Gradle.",
      en: "Java 21 development with deterministic logic, NeoForge integration and Gradle builds.",
    },
    items: ["Java 21", "NeoForge", "Gradle"],
    evidence: { fr: ["TEC"], en: ["TEC"] },
  },
  {
    id: "linux-devops",
    title: { fr: "Linux / DevOps", en: "Linux / DevOps" },
    description: {
      fr: "Déploiement Linux, conteneurs, services système, CI et auto-hébergement sur matériel personnel.",
      en: "Linux deployment, containers, system services, CI and self-hosting on personal hardware.",
    },
    items: ["Linux", "Docker", "Raspberry Pi", "systemd", "Cloudflare Tunnel", "GitHub Actions", "Self-hosting"],
    evidence: {
      fr: ["PyGeoLab", "Jellyfin Media Integrity", "Infrastructure personnelle"],
      en: ["PyGeoLab", "Jellyfin Media Integrity", "Personal infrastructure"],
    },
  },
  {
    id: "tools",
    title: { fr: "Outils", en: "Tools" },
    description: {
      fr: "Versionnement, collaboration et gestion des dépendances au quotidien.",
      en: "Day-to-day version control, collaboration and dependency management.",
    },
    items: ["Git", "GitHub", "VS Code", "npm", "Composer"],
    evidence: {
      fr: ["Projets du portfolio", "MaxSea International", "DWE64"],
      en: ["Portfolio projects", "MaxSea International", "DWE64"],
    },
  },
];

export function getSkillGroups() {
  return skillGroups;
}
