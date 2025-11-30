// src/lib/skills.ts
export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Je construis des interfaces modernes, responsives et maintenables.",
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
    title: "Backend & APIs",
    description:
      "Je développe des APIs et des backends structurés autour de frameworks solides.",
    items: ["PHP (Symfony)", "Python", "Ruby (bases)", "APIs REST", "Doctrine"],
  },
  {
    id: "databases",
    title: "Bases de données",
    description:
      "Je sais modéliser, interroger et manipuler des bases de données relationnelles.",
    items: ["MySQL", "MariaDB", "PostgreSQL"],
  },
  {
    id: "devops",
    title: "DevOps & auto-hébergement",
    description:
      "Je déploie et maintiens mes projets sur Linux, en auto-hébergé ou sur VPS.",
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
    title: "Qualité & tests",
    description:
      "Je suis à l’aise avec les tests automatisés côté front, back et mobile.",
    items: ["Pytest", "Airtest", "Unittest", "Jest", "Vitest"],
  },
  {
    id: "tools",
    title: "Outils & écosystème",
    description:
      "Je m’appuie sur des outils modernes pour garder un code propre et versionné.",
    items: ["Git", "GitHub", "Composer", "Android Studio", "VS Code"],
  },
];

export function getSkillGroups() {
  return skillGroups;
}
