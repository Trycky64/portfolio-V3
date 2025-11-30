import Link from "next/link";

const NAV_ITEMS = [
  { href: "#projects", label: "Projets" },
  { href: "#timeline", label: "Parcours" },
  { href: "#skills", label: "Compétences" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-qp-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="#hero"
          className="text-sm font-semibold tracking-wide text-slate-100 focus-ring"
          aria-label="Revenir au début de la page"
        >
          <span className="text-qp-primary">{"<"}</span>
          Quentin Perriere
          <span className="text-qp-primary">{"/>"}</span>
        </Link>

        <nav className="hidden gap-4 text-xs sm:flex" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 text-slate-300 transition hover:bg-slate-800 hover:text-qp-primary focus-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
