"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";
import {
  getAllProjects,
  getProjectsByCategory,
  getProjectType,
  type ProjectCategory,
} from "@/lib/projects";

type ProjectFilter =
  "all" | Extract<ProjectCategory, "Python" | "Backend" | "Java" | "Applications">;

const FILTERS: Array<{ value: ProjectFilter; labelKey: string }> = [
  { value: "all", labelKey: "projects_list.filters.all" },
  { value: "Python", labelKey: "projects_list.filters.python" },
  { value: "Backend", labelKey: "projects_list.filters.backend" },
  { value: "Java", labelKey: "projects_list.filters.java" },
  { value: "Applications", labelKey: "projects_list.filters.applications" },
];

export function ProjectsList() {
  const { t, locale } = useI18n();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const projects = getAllProjects();
  const visibleProjects =
    activeFilter === "all" ? projects : getProjectsByCategory(activeFilter);
  const base = `/${locale}`;

  return (
    <section className="min-h-screen bg-background py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t("projects_list.eyebrow")}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            {t("projects_list.title")}
          </h1>
          <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
            {t("projects_list.description")}
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label={t("projects_list.filters.label")}
        >
          {FILTERS.map((filter) => {
            const active = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={active}
                className={`focus-ring min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "border-primary bg-primary text-slate-950"
                    : "border-border bg-surface/70 text-text-muted hover:border-primary/60 hover:text-text-primary"
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {t(filter.labelKey)}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          {t("projects_list.result_count", { count: visibleProjects.length })}
        </p>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Card key={project.slug} variant="project" className="!h-auto">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="muted">{getProjectType(project, locale)}</Badge>
                <Badge variant="muted">{project.year}</Badge>
                {project.categories.map((category) => (
                  <Badge key={category} variant="tech">
                    {category}
                  </Badge>
                ))}
              </div>

              <h2 className="mt-4 text-xl font-semibold text-text-primary">
                {project.title}
              </h2>

              {project.image && (
                <div className="relative mt-4 aspect-[3/2] overflow-hidden rounded-lg border border-border bg-surface">
                  <Image
                    src={project.image}
                    alt={
                      locale === "fr"
                        ? `Aperçu du projet ${project.title}`
                        : `Preview of ${project.title}`
                    }
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 480px, calc(100vw - 48px)"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              )}

              <p className="mt-4 text-sm leading-6 text-text-muted">
                {project.shortDescription[locale]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((tech) => (
                  <Badge key={tech} variant="muted">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={`${base}/projects/${project.slug}`}
                  className="focus-ring inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-primary hover:underline"
                >
                  {t("common.see_project")}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
