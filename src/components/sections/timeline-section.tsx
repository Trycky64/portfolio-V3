const timeline = [
  {
    title: "Équipier polyvalent — McDonald’s, Anglet",
    period: "01/2025 — 02/2025",
    description:
      "Travail en équipe dans un environnement dynamique, gestion de la pression et respect des standards de service et d’hygiène.",
  },
  {
    title: "Testeur QA — Maxsea International",
    period: "12/2023 — 12/2024",
    description:
      "Réalisation de tests automatisés sur une application Android et Windows, mise en place de scénarios avec Pytest et Airtest, rédaction de rapports de bugs.",
  },
  {
    title: "Développeur web — DWE64",
    period: "05/2024 — 06/2024",
    description:
      "Conception d’un site professionnel avec Symfony, gestion de la base de données avec Doctrine et MySQL, rôles utilisateurs et sécurité, déploiement local avec Docker/XAMPP.",
  },
  {
    title: "Bachelor développement web & applicatif",
    period: "2025 — 2026",
    description:
      "Spécialisation en développement web & applicatif moderne, avec un focus sur PHP/Symfony, React / Next.js et bonnes pratiques de développement.",
  },
  {
    title: "BTS SIO — option SLAM",
    period: "2023 — 2025",
    description:
      "Formation en développement d’applications, architectures logicielles, bases de données, réseau et systèmes.",
  },
  {
    title: "Baccalauréat général",
    period: "2020 — 2023",
    description:
      "Bac général, spécialités à préciser si besoin, point de départ de mon orientation vers l’informatique.",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="border-b border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Parcours</h2>
        <p className="mt-2 text-sm text-slate-300">
          Entre formation, expériences en entreprise et projets perso, voici les
          grandes étapes de mon parcours.
        </p>

        <ol className="mt-8 space-y-6 border-l border-slate-700 pl-4">
          {timeline.map((item) => (
            <li key={item.title} className="relative pl-4">
              <span className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-sky-500 bg-slate-950" />
              <div className="text-xs text-sky-400">{item.period}</div>
              <div className="text-sm font-semibold">{item.title}</div>
              <p className="mt-1 text-sm text-slate-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
