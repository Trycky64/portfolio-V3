"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsListPage() {
  const { t, locale } = useI18n();
  const projects = getAllProjects();
  const base = `/${locale}`;

  return (
    <section className="min-h-screen bg-background py-16">
      <Container>
        <h1 className="text-3xl font-bold text-text-primary">
          {t("projects_list.title")}
        </h1>
        <p className="mt-2 text-text-muted">
          {t("projects_list.description")}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} variant="project">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="muted">{project.type}</Badge>
                <Badge variant="muted">{project.year}</Badge>
                {project.categories.map((category) => (
                  <Badge key={category} variant="tech">
                    {category}
                  </Badge>
                ))}
              </div>

              <h2 className="mt-4 text-lg font-semibold">
                {project.title}
              </h2>

              {project.image && (
                <div className="relative mt-4 h-40 overflow-hidden rounded-lg border border-border bg-surface">
                  <Image
                    src={project.image}
                    alt={`Image ${project.title}`}
                    fill
                    className="object-cover"
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

              <Link
                href={`${base}/projects/${project.slug}`}
                className="focus-ring mt-5 inline-block rounded-md text-sm font-semibold text-primary hover:underline"
              >
                {t("common.see_project")}
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
