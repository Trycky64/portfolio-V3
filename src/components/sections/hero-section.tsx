import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-slate-800 bg-gradient-to-b from-qp-bg-soft to-qp-bg"
    >
      <Container>
        <div className="py-16 sm:py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-qp-primary">
            Quentin Perriere
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Développeur web & applicatif
            <span className="block text-qp-primary">
              PHP / Symfony • React / Next.js • WordPress • Python
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-slate-300 sm:text-base">
            Actuellement en Bachelor développement web et applicatif, après un
            BTS SIO option SLAM, j&apos;ai une expérience concrète en
            développement et en tests QA : automatisation de tests pour une
            application Android et Windows, développement d&apos;un site pro
            sous Symfony, et auto-hébergement de projets sur Linux et Raspberry
            Pi. Je conçois des applications modernes de bout en bout, du code au
            déploiement.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-qp-primary px-5 py-2 text-sm font-medium text-qp-primary transition hover:bg-qp-primary/10 focus-ring"
            >
              Voir mes projets
            </a>
            <a
              href="/cv-quentin-perriere.pdf"
              className="inline-flex items-center rounded-full bg-qp-primary px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-qp-primary-soft focus-ring"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
