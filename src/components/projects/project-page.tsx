"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug } from "@/lib/projects";
import { useI18n } from "@/lib/i18n/context";

export default function ProjectPage({ slug }: { slug: string }) {
  const { t, locale } = useI18n();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="bg-qp-bg min-h-screen py-16">
        <Container>
          <h1 className="text-3xl font-bold text-white">{t("projects_page.project_not_found")}</h1>
          <p className="mt-4 text-sm text-slate-300">
            {t("projects_page.project_not_found_desc", { slug })}
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-qp-bg min-h-screen py-16">
      <Container>
        {/* Titre / Tagline */}
        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        <p className="mt-1 text-sm uppercase tracking-wide text-qp-primary">{project.tagLine}</p>

        {/* Image */}
        {project.image && (
          <div className="relative mt-6 h-60 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <Image src={project.image} alt={`Capture du projet ${project.title}`} fill className="object-cover" />
          </div>
        )}

        {/* Description courte */}
        <p className="mt-6 text-slate-200 leading-relaxed text-sm">{project.shortDescription[locale]}</p>

        {/* Stack */}
        <h2 className="mt-10 text-lg font-semibold text-white">{t("projects_page.tech_used")}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights[locale] && project.highlights[locale].length > 0 && (
          <>
            <h2 className="mt-10 text-lg font-semibold text-white">{t("projects_page.highlights")}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {project.highlights[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Liens */}
        <h2 className="mt-10 text-lg font-semibold text-white">{t("projects_page.links")}</h2>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="text-qp-primary hover:underline">
              {t("common.source_code")} →
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-qp-primary hover:underline">
              {t("common.demo")} →
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
