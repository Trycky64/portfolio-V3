const skillGroups = [
  {
    title: "Frontend",
    description:
      "Je construis des interfaces modernes, responsives et maintenables.",
    skills: [
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
    title: "Backend & APIs",
    description:
      "Je développe des APIs et des backends structurés autour de frameworks solides.",
    skills: [
      "PHP (Symfony)",
      "Python",
      "Ruby (bases)",
      "APIs REST",
      "Doctrine",
    ],
  },
  {
    title: "Bases de données & stockage",
    description:
      "Je sais modéliser, interroger et manipuler des bases de données relationnelles.",
    skills: ["MySQL", "MariaDB", "PostgreSQL"],
  },
  {
    title: "DevOps & auto-hébergement",
    description:
      "Je déploie et maintiens mes projets sur Linux, en auto-hébergé ou sur VPS.",
    skills: [
      "Linux (Debian/Ubuntu)",
      "Docker",
      "VPS",
      "Raspberry Pi",
      "systemd",
      "Cloudflare Tunnel",
    ],
  },
  {
    title: "Qualité & tests",
    description:
      "Je suis à l’aise avec les tests automatisés côté front, back et mobile.",
    skills: ["Pytest", "Airtest", "Unittest", "Jest", "Vitest"],
  },
  {
    title: "Outils & écosystème",
    description:
      "Je m’appuie sur des outils modernes pour garder un code propre et versionné.",
    skills: ["Git", "GitHub", "Composer", "Android Studio", "VS Code"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Compétences</h2>
        <p className="mt-2 text-sm text-slate-300">
          Un aperçu rapide de mon stack actuel côté front, back, DevOps et
          qualité logicielle.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <p className="mt-1 text-sm text-slate-300">
                {group.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
