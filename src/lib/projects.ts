export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagLine: string;
  image?: string;
  shortDescription: { fr: string; en: string };
  stack: string[];
  highlights: { fr: string[]; en: string[] };
  links: ProjectLinks;
}

const projects: Project[] = [
  {
    slug: "portfolio-v3",
    title: "Portfolio V3",
    tagLine: "Next.js • Tailwind • Cloudflare • Raspberry Pi",
    image: "/images/projects/portfolio-v3.png",
    shortDescription: {
      fr: "Portfolio moderne développé avec Next.js 16, déployé sur un Raspberry Pi via Cloudflare Tunnel. Formulaire de contact emailing avec Resend.",
      en: "Modern portfolio built with Next.js 16, deployed on a Raspberry Pi via Cloudflare Tunnel. Contact form using Resend email API.",
    },
    stack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Cloudflare Tunnel",
      "Resend",
      "systemd",
    ],
    highlights: {
      fr: [
      "UI/UX responsive basée sur un design system cohérent",
      "Déploiement sur Raspberry Pi via Cloudflare Tunnel",
      "Formulaire de contact complet (Resend API)",
      "Gestion CI/CD avec GitHub Actions",
      ],
      en: [
        "Responsive UI/UX built on a consistent design system",
        "Deployment on a Raspberry Pi via Cloudflare Tunnel",
        "Complete contact form (Resend API)",
        "CI/CD with GitHub Actions",
      ],
    },
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
    shortDescription: {
      fr: "Application web affichant les données de pollution, météo et circulation en temps réel. Interface moderne en Vue 3 + API Node.",
      en: "Web app showing pollution, weather and traffic data in real-time. Modern UI in Vue 3 + Node API.",
    },
    stack: ["Vue 3", "Vite", "TailwindCSS", "Node.js", "API REST"],
    highlights: {
      fr: [
      "Interface réactive et légère",
      "Données temps réel pollution et météo",
      "Backend Node.js hébergé sur Raspberry Pi",
      "Déploiement full-stack sécurisé via Cloudflare",
      ],
      en: [
        "Reactive and lightweight interface",
        "Real-time pollution and weather data",
        "Node.js backend hosted on a Raspberry Pi",
        "Secure full-stack deployment via Cloudflare",
      ],
    },
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
