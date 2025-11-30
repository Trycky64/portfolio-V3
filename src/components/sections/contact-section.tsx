// src/components/sections/contact-section.tsx
import { Container } from "@/components/layout/container";
import { ContactForm } from "./contact-form";
import { SectionTitle } from "@/components/ui/section-title";

export function ContactSection() {
  return (
    <section id="contact" className="bg-qp-bg">
      <Container>
        <div className="py-section-y">
          <SectionTitle
            title="On travaille ensemble ?"
            description="Basé à Bordeaux (33800), je suis ouvert aux opportunités d’alternance et de poste en développement web & applicatif."
          />

          <div className="mt-8 grid gap-8 md:grid-cols-[2fr,1fr]">
            <ContactForm />

            <div className="space-y-3 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">
                Contact direct & réseaux
              </p>
              <p>
                Email :{" "}
                <a
                  href="mailto:q.perriere@gmail.com"
                    className="text-qp-primary hover:underline"
                >
                  q.perriere@gmail.com
                </a>
              </p>
              <p>
                GitHub :{" "}
                <a
                  href="https://github.com/TON_USER_GITHUB"
                    className="text-qp-primary hover:underline"
                  target="_blank"
                >
                  github.com/TON_USER_GITHUB
                </a>
              </p>
              <p>
                LinkedIn :{" "}
                <a
                  href="https://www.linkedin.com/in/TON_PROFIL_LINKEDIN"
                    className="text-qp-primary hover:underline"
                  target="_blank"
                >
                  linkedin.com/in/TON_PROFIL_LINKEDIN
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
