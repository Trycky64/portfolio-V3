// src/lib/timeline.ts
export type TimelineItemType = "education" | "experience" | "project";

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  description: string;
  type: TimelineItemType;
};

export const timelineItems: TimelineItem[] = [
  {
    id: "bachelor-dev-web",
    period: "2025 — 2026",
    title: "Bachelor développement web & applicatif",
    description:
      "Spécialisation en développement web et applicatif moderne (PHP/Symfony, React/Next.js, bonnes pratiques, intégration continue).",
    type: "education",
  },
  {
    id: "bts-sio-slam",
    period: "2023 — 2025",
    title: "BTS SIO — option SLAM",
    description:
      "Formation en développement d’applications, bases de données, système et réseau.",
    type: "education",
  },
  {
    id: "mcdo",
    period: "01/2025 — 02/2025",
    title: "Équipier polyvalent — McDonald’s, Anglet",
    description:
      "Travail en équipe, gestion de la pression et respect des standards de service.",
    type: "experience",
  },
  {
    id: "qa-maxsea",
    period: "12/2023 — 12/2024",
    title: "Testeur QA — Maxsea International",
    description:
      "Tests automatisés (Android & Windows), scénarios Pytest et Airtest, remontée de bugs.",
    type: "experience",
  },
  {
    id: "dev-dwe64",
    period: "05/2024 — 06/2024",
    title: "Développeur web — DWE64",
    description:
      "Développement d’un site professionnel en Symfony + Doctrine, rôles utilisateurs, sécurité.",
    type: "experience",
  },
  {
    id: "citypulse-timeline",
    period: "2024 — 2025",
    title: "CityPulse",
    description:
      "Application Vue 3 pour explorer des données urbaines avec une interface moderne.",
    type: "project",
  },
  {
    id: "portfolio-v3-timeline",
    period: "2025",
    title: "Portfolio v3",
    description:
      "Refonte complète du portfolio avec Next.js, Tailwind, animations, SEO et pages dynamiques.",
    type: "project",
  },
];

export function getTimeline() {
  return timelineItems;
}
