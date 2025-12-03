// src/lib/timeline.ts
export type TimelineItemType = "education" | "experience" | "project";

export type TimelineItem = {
  id: string;
  period: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  type: TimelineItemType;
};

export const timelineItems: TimelineItem[] = [
  {
    id: "bachelor-dev-web",
    period: "2025 — 2026",
    title: { fr: "Bachelor développement web & applicatif", en: "Bachelor in web & application development" },
    description: {
      fr: "Spécialisation en développement web et applicatif moderne (PHP/Symfony, React/Next.js, bonnes pratiques, intégration continue).",
      en: "Specialization in modern web and application development (PHP/Symfony, React/Next.js, best practices, CI/CD).",
    },
    type: "education",
  },
  {
    id: "bts-sio-slam",
    period: "2023 — 2025",
    title: { fr: "BTS SIO — option SLAM", en: "BTS SIO — SLAM" },
    description: { fr: "Formation en développement d’applications, bases de données, système et réseau.", en: "Training in application development, databases, systems and networks." },
    type: "education",
  },
  {
    id: "mcdo",
    period: "01/2025 — 02/2025",
    title: { fr: "Équipier polyvalent — McDonald’s, Anglet", en: "Crew member — McDonald’s, Anglet" },
    description: { fr: "Travail en équipe, gestion de la pression et respect des standards de service.", en: "Teamwork, working under pressure and adhering to service standards." },
    type: "experience",
  },
  {
    id: "qa-maxsea",
    period: "12/2023 — 12/2024",
    title: { fr: "Testeur QA — Maxsea International", en: "QA Tester — Maxsea International" },
    description: { fr: "Tests automatisés (Android & Windows), scénarios Pytest et Airtest, remontée de bugs.", en: "Automated testing (Android & Windows), Pytest & Airtest scenarios, bug reporting." },
    type: "experience",
  },
  {
    id: "dev-dwe64",
    period: "05/2024 — 06/2024",
    title: { fr: "Développeur web — DWE64", en: "Web developer — DWE64" },
    description: { fr: "Développement d’un site professionnel en Symfony + Doctrine, rôles utilisateurs, sécurité.", en: "Development of a professional website using Symfony + Doctrine, user roles, security." },
    type: "experience",
  },
  {
    id: "citypulse-timeline",
    period: "2024 — 2025",
    title: { fr: "CityPulse", en: "CityPulse" },
    description: { fr: "Application Vue 3 pour explorer des données urbaines avec une interface moderne.", en: "Vue 3 application to explore urban data with a modern interface." },
    type: "project",
  },
  {
    id: "portfolio-v3-timeline",
    period: "2025",
    title: { fr: "Portfolio v3", en: "Portfolio v3" },
    description: { fr: "Refonte complète du portfolio avec Next.js, Tailwind, animations, SEO et pages dynamiques.", en: "Full portfolio revamp with Next.js, Tailwind, animations, SEO and dynamic pages." },
    type: "project",
  },
];

export function getTimeline() {
  return timelineItems;
}
