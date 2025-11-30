export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-qp-bg">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Quentin Perriere. Tous droits réservés.</p>
        <p className="space-x-3">
          <a
            href="https://github.com/Trycky64"
            className="hover:text-qp-primary"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/quentin-perriere-295045292/"
            className="hover:text-qp-primary"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
