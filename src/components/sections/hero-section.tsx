import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <Container>
        <div className="py-16 sm:py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
          Quentin Perriere
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
          Développeur web & applicatif
          <span className="block text-sky-400">
            PHP / Symfony • React / Next.js • WordPress • Python
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-slate-300 sm:text-base">
          Actuellement en Bachelor développement web et applicatif, après un BTS
          SIO option SLAM, j&apos;ai une expérience concrète en développement et en
          tests QA&nbsp;: automatisation de tests pour une application Android et
          Windows, développement d&apos;un site pro sous Symfony, et auto-hébergement
          de projets sur Linux et Raspberry Pi. Je conçois des applications
          modernes de bout en bout, du code au déploiement.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-sky-500 px-5 py-2 text-sm font-medium text-sky-400 hover:bg-sky-500/10"
          >
            Voir mes projets
          </a>
          <a
            href="/cv-quentin-perriere.pdf"
            className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
          >
            Télécharger mon CV
          </a>
        </div>
        </div>
      </Container>
    </section>
  );
}
