"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { useI18n } from "@/lib/i18n/context";
import { getFeaturedProjects } from "@/lib/projects";

export function ProjectsSection() {
  const { t, locale } = useI18n();
  const base = `/${locale}`;
  const projects = getFeaturedProjects(4);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-border bg-background"
    >
      <Container>
        <div className="animate-fade-in-up py-12 sm:py-section-y">
          <SectionTitle
            title={t("projects_section.title")}
            description={t("projects_section.description")}
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.slug} variant="project">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="muted">{project.type}</Badge>
                  {project.categories.slice(0, 2).map((category) => (
                    <Badge key={category} variant="tech">
                      {category}
                    </Badge>
                  ))}
                </div>

                <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>

                {project.image && (
                  <div className="relative mt-4 h-40 overflow-hidden rounded-lg border border-border bg-surface">
                    <Image
                      src={project.image}
                      alt={`Capture du projet ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                )}

                <p className="mt-3 text-sm text-text-muted">
                  {project.shortDescription[locale]}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="muted">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <Link
                    href={`${base}/projects/${project.slug}`}
                    className="focus-ring rounded-md text-primary hover:underline"
                  >
                    {t("common.see_project")}
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={`${base}/projects`}
              className="focus-ring inline-flex min-h-11 items-center rounded-md px-1 text-sm font-semibold text-primary hover:underline"
            >
              {locale === "fr" ? "Voir tous les projets" : "View all projects"} →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
