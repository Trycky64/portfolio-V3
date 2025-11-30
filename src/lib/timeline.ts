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
    id: "bts-sio-slam",
    period: "2023 — 2025",
    title: "BTS SIO — option SLAM",
    description:
      "Formation en développement d’applications, architectures logicielles, bases de données, réseau et systèmes.",
    type: "education",
  },
  {
    id: "mcdo",
    period: "12/2023 — 12/2024",
    title: "Équipier polyvalent — McDonald’s, Anglet",
    description:
      "Travail en équipe dans un environnement dynamique, gestion de la pression et respect des standards de service.",
    type: "experience",
  },
  {
    id: "dev-dwe64",
    period: "05/2024 — 06/2024",
    title: "Développeur web — DWE64",
    description:
      "Conception d’un site professionnel avec Symfony, Doctrine et MySQL, rôles utilisateurs et sécurité.",
    type: "experience",
  },
  {
    id: "infra-rpi-timeline",
    period: "2024 — 2025",
    title: "Infra perso sur Raspberry Pi",
    description:
      "Mise en place d’un environnement auto-hébergé sur Raspberry Pi, sécurisé et exposé via Cloudflare Tunnel.",
    type: "project",
  },
  {
    id: "citypulse-timeline",
    period: "2024 — 2025",
    title: "CityPulse",
    description:
      "Application Vue 3 pour explorer des données urbaines avec un design responsive.",
    type: "project",
  },
  {
    id: "crystalbound-timeline",
    period: "2024 — 2025",
    title: "Crystalbound",
    description:
      "Jeu de tower defense 2D en Python avec une architecture de code claire.",
    type: "project",
  },
  {
    id: "qa-maxsea",
    period: "01/2025 — 02/2025",
    title: "Testeur QA — Maxsea International",
    description:
      "Tests automatisés sur une application Android et Windows, scénarios avec Pytest et Airtest, remontée de bugs.",
    type: "experience",
  },
  {
    id: "bachelor-dev-web",
    period: "2025 — 2026",
    title: "Bachelor développement web & applicatif",
    description:
      "Spécialisation en développement web & applicatif moderne, avec un focus sur PHP/Symfony, React / Next.js et les bonnes pratiques de développement.",
    type: "education",
  },
];

export function getTimeline() {
  return timelineItems;
}
