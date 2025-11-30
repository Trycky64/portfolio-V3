import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-800 bg-qp-bg-soft">
      <Container>
        <div className="py-12 sm:py-section-y animate-fade-in-up">
          <SectionTitle title="À propos" />
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            <p>
              Je m’appelle Quentin Perriere et je suis développeur web &amp; applicatif,
              actuellement en Bachelor après un BTS SIO option SLAM. Je travaille aussi
              bien sur le back-end (PHP/Symfony, APIs REST, bases de données) que sur le
              front-end (React, Next.js, Tailwind, WordPress) avec une vraie curiosité
              pour les tests automatisés et la qualité logicielle.
            </p>
            <p>
              J’ai eu l’occasion de travailler comme testeur QA sur une application
              Android et Windows, ainsi que comme développeur web sur un site
              professionnel Symfony. En parallèle, je m’intéresse fortement à Linux, aux
              serveurs et à l’auto-hébergement, notamment via Raspberry Pi et Cloudflare
              Tunnel.
            </p>
            <p>
              On me décrit comme quelqu’un de rigoureux, adaptable et organisé, à l’aise
              en équipe et capable de garder son calme sous pression. Je suis passionné
              par le développement web, les systèmes Linux, le hardware et les jeux vidéo,
              que je retrouve aussi dans mes projets perso.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
