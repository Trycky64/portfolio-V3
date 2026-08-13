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
    <section className="min-h-screen bg-qp-bg py-16">
      <Container>
        <h1 className="text-3xl font-bold text-white">
          {t("projects_list.title")}
        </h1>
        <p className="mt-2 text-slate-400">
          {t("projects_list.description")}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug}>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="mt-1 text-xs uppercase tracking-wide text-qp-primary">
                {project.tagLine}
              </p>

              {project.image && (
                <div className="relative mt-4 h-40 overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
                  <Image
                    src={project.image}
                    alt={`Image ${project.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <p className="mt-3 text-sm text-slate-200">
                {project.shortDescription[locale]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <Link
                href={`${base}/projects/${project.slug}`}
                className="mt-4 inline-block text-sm text-qp-primary hover:underline"
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
