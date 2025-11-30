export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagLine: string;
  image?: string;
  shortDescription: string;
  stack: string[];
  highlights: string[];
  links: ProjectLinks;
}

const projects: Project[] = [
  {
    slug: "portfolio-v3",
    title: "Portfolio V3",
    tagLine: "Next.js • Tailwind • Cloudflare • Raspberry Pi",
    image: "/images/projects/portfolio-v3.png",
    shortDescription:
      "Portfolio moderne développé avec Next.js 16, déployé sur un Raspberry Pi via Cloudflare Tunnel. Formulaire de contact emailing avec Resend.",
    stack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Cloudflare Tunnel",
      "Resend",
      "systemd",
    ],
    highlights: [
      "UI/UX responsive basée sur un design system cohérent",
      "Déploiement sur Raspberry Pi via Cloudflare Tunnel",
      "Formulaire de contact complet (Resend API)",
      "Gestion CI/CD avec GitHub Actions",
    ],
    links: {
      github: "https://github.com/Trycky64/portfolio-V3",
      demo: "https://quentinperriere.com",
    },
  },
  {
    slug: "citypulse",
    title: "CityPulse",
    tagLine: "Vue 3 • Vite • Tailwind • API Node.js",
    image: "/images/projects/citypulse.png",
    shortDescription:
      "Application web affichant les données de pollution, météo et circulation en temps réel. Interface moderne en Vue 3 + API Node.",
    stack: ["Vue 3", "Vite", "TailwindCSS", "Node.js", "API REST"],
    highlights: [
      "Interface réactive et légère",
      "Données temps réel pollution et météo",
      "Backend Node.js hébergé sur Raspberry Pi",
      "Déploiement full-stack sécurisé via Cloudflare",
    ],
    links: {
      github: "https://github.com/Trycky64/citypulse",
      demo: "https://citypulse.quentinperriere.com",
    },
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
