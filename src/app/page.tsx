// src/app/page.tsx
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <TimelineSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
