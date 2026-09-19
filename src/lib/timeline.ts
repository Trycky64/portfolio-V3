export type TimelineItemType = "education" | "experience" | "project";
export type LocalizedText = { fr: string; en: string };

export type TimelineItem = {
  id: string;
  period: LocalizedText;
  title: LocalizedText;
  company?: string;
  description: LocalizedText;
  technologies?: string[];
  technical?: boolean;
  type: TimelineItemType;
};

export const timelineItems: TimelineItem[] = [
  {
    id: "bachelor-dev-web",
    period: { fr: "09/2025 — 12/2025", en: "Sep 2025 — Dec 2025" },
    title: { fr: "Bachelor développement web & applicatif", en: "Bachelor in web & application development" },
    description: {
      fr: "Spécialisation en développement web et applicatif moderne (PHP/Symfony, React/Next.js, bonnes pratiques, intégration continue).",
      en: "Specialization in modern web and application development (PHP/Symfony, React/Next.js, best practices, CI/CD).",
    },
    type: "education",
  },
  {
    id: "bts-sio-slam",
    period: { fr: "2023 — 2025", en: "2023 — 2025" },
    title: { fr: "BTS SIO — option SLAM", en: "BTS SIO — SLAM" },
    description: {
      fr: "Formation en développement d’applications, bases de données, système et réseau.",
      en: "Training in application development, databases, systems and networks.",
    },
    type: "education",
  },
  {
    id: "leclerc-traiteur",
    period: { fr: "Depuis mars 2026", en: "Since March 2026" },
    title: { fr: "Traiteur", en: "Deli assistant" },
    company: "E.Leclerc",
    description: {
      fr: "Organisation du travail, respect des procédures et coordination en équipe dans un rythme opérationnel soutenu.",
      en: "Work organization, adherence to procedures and team coordination in a fast-paced operational environment.",
    },
    technical: false,
    type: "experience",
  },
  {
    id: "qa-maxsea",
    period: { fr: "05/2025 — 06/2025", en: "May 2025 — Jun 2025" },
    title: { fr: "Stagiaire QA & automatisation Python", en: "QA & Python automation intern" },
    company: "MaxSea International",
    description: {
      fr: "Création et exécution de scénarios de tests automatisés sur Android et Windows, puis remontée et suivi des bugs.",
      en: "Created and ran automated test scenarios on Android and Windows, then reported and tracked bugs.",
    },
    technologies: ["Python", "pytest", "Airtest"],
    technical: true,
    type: "experience",
  },
  {
    id: "dev-dwe64",
    period: { fr: "05/2024 — 06/2024", en: "May 2024 — Jun 2024" },
    title: { fr: "Stagiaire développeur web", en: "Web developer intern" },
    company: "DWE64",
    description: {
      fr: "Développement d’une application web avec gestion des utilisateurs, des rôles, des données SQL et de la sécurité.",
      en: "Developed a web application with user and role management, SQL data handling and security controls.",
    },
    technologies: ["Symfony", "Doctrine", "SQL"],
    technical: true,
    type: "experience",
  },
  {
    id: "mcdo",
    period: { fr: "12/2023 — 12/2024", en: "Dec 2023 — Dec 2024" },
    title: { fr: "Équipier polyvalent", en: "Crew member" },
    company: "McDonald’s · Anglet",
    description: {
      fr: "Travail en équipe dans un rythme soutenu, respect des procédures et gestion de la pression.",
      en: "Teamwork in a fast-paced environment, adherence to procedures and working under pressure.",
    },
    technical: false,
    type: "experience",
  },
  {
    id: "citypulse-timeline",
    period: { fr: "2024 — 2025", en: "2024 — 2025" },
    title: { fr: "CityPulse", en: "CityPulse" },
    description: {
      fr: "Application Vue 3 pour explorer des données urbaines avec une interface moderne.",
      en: "Vue 3 application to explore urban data with a modern interface.",
    },
    type: "project",
  },
  {
    id: "portfolio-v3-timeline",
    period: { fr: "2025", en: "2025" },
    title: { fr: "Portfolio v3", en: "Portfolio v3" },
    description: {
      fr: "Refonte complète du portfolio avec Next.js, Tailwind, animations, SEO et pages dynamiques.",
      en: "Full portfolio revamp with Next.js, Tailwind, animations, SEO and dynamic pages.",
    },
    type: "project",
  },
];

export function getTimeline() {
  return timelineItems;
}
