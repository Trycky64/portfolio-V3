// src/lib/skills.ts
export type SkillGroup = {
  id: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: { fr: "Frontend", en: "Frontend" },
    description: { fr: "Je construis des interfaces modernes, responsives et maintenables.", en: "I build modern, responsive, maintainable interfaces." },
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "WordPress (thèmes, intégration)",
    ],
  },
  {
    id: "backend",
    title: { fr: "Backend & APIs", en: "Backend & APIs" },
    description: {
      fr: "Je développe des APIs et des backends structurés autour de frameworks solides.",
      en: "I build structured APIs and backends using robust frameworks.",
    },
    items: ["PHP (Symfony)", "Python", "Ruby (bases)", "APIs REST", "Doctrine"],
  },
  {
    id: "databases",
    title: { fr: "Bases de données", en: "Databases" },
    description: {
      fr: "Je sais modéliser, interroger et manipuler des bases de données relationnelles.",
      en: "I can model, query and manipulate relational databases.",
    },
    items: ["MySQL", "MariaDB", "PostgreSQL"],
  },
  {
    id: "devops",
    title: { fr: "DevOps & auto-hébergement", en: "DevOps & self-hosting" },
    description: {
      fr: "Je déploie et maintiens mes projets sur Linux, en auto-hébergé ou sur VPS.",
      en: "I deploy and maintain projects on Linux, in self-hosting or VPS.",
    },
    items: [
      "Linux (Debian/Ubuntu)",
      "Docker",
      "VPS",
      "Raspberry Pi",
      "systemd",
      "Cloudflare Tunnel",
    ],
  },
  {
    id: "quality",
    title: { fr: "Qualité & tests", en: "Quality & testing" },
    description: {
      fr: "Je suis à l’aise avec les tests automatisés côté front, back et mobile.",
      en: "I'm comfortable with automated testing on frontend, backend and mobile.",
    },
    items: ["Pytest", "Airtest", "Unittest", "Jest", "Vitest"],
  },
  {
    id: "tools",
    title: { fr: "Outils & écosystème", en: "Tools & ecosystem" },
    description: {
      fr: "Je m’appuie sur des outils modernes pour garder un code propre et versionné.",
      en: "I rely on modern tools to keep code clean and versioned.",
    },
    items: ["Git", "GitHub", "Composer", "Android Studio", "VS Code"],
  },
];

export function getSkillGroups() {
  return skillGroups;
}
