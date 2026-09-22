import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { type Locale } from "@/lib/i18n/context";
import { GITHUB_URL, LINKEDIN_URL, PERSON_NAME, SITE_URL } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON_NAME,
    url: SITE_URL,
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    jobTitle: locale === "fr" ? "Développeur Python / Backend" : "Python / Backend Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anglet",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PERSON_NAME,
    url: SITE_URL,
    inLanguage: locale,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([person, website]).replace(/</g, "\\u003c") }} />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
