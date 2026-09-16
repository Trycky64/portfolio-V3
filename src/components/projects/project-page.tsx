"use client";

import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { IconLink } from "@/components/ui/icon-link";
import { useI18n } from "@/lib/i18n/context";
import { getProjectBySlug, getProjectType, type LocalizedList } from "@/lib/projects";

function ProjectList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectPage({ slug }: { slug: string }) {
  const { t, locale } = useI18n();
  const base = `/${locale}`;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-background py-16">
        <Container>
          <h1 className="text-3xl font-bold text-text-primary">
            {t("projects_page.project_not_found")}
          </h1>
          <p className="mt-4 text-sm text-text-muted">
            {t("projects_page.project_not_found_desc", { slug })}
          </p>
        </Container>
      </section>
    );
  }

  const localized = (value: LocalizedList) => value[locale];
  const localizedOrShared = (value: string[] | LocalizedList) =>
    Array.isArray(value) ? value : value[locale];
  const ready = project.contentStatus === "ready";
  const hasLinks = Boolean(
    project.links.github || project.links.demo || project.links.docs,
  );

  return (
    <main className="min-h-screen bg-background py-16">
      <Container>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="muted">{getProjectType(project, locale)}</Badge>
          <Badge variant="muted">{project.year}</Badge>
          <Badge variant={project.status === "production" ? "success" : "muted"}>
            {locale === "fr" && project.status === "active" ? "Actif" : project.status}
          </Badge>
          {project.categories.map((category) => (
            <Badge key={category} variant="tech">
              {category}
            </Badge>
          ))}
        </div>

        <h1 className="mt-5 text-3xl font-bold text-text-primary sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-text-muted">
          {project.shortDescription[locale]}
        </p>

        {!ready && (
          <div className="mt-8 rounded-xl border border-border bg-surface p-5">
            <p className="text-sm leading-6 text-text-muted">
              {locale === "fr"
                ? "Étude de cas en préparation. Elle sera complétée lorsque le projet et ses éléments de présentation seront finalisés."
                : "Case study in progress. It will be completed once the project and its presentation assets are finalized."}
            </p>
          </div>
        )}

        {project.image && (
          <div
            className={
              ready
                ? "relative mt-8 aspect-[3/2] max-h-[44rem] overflow-hidden rounded-xl border border-border bg-surface"
                : "relative mt-8 h-64 overflow-hidden rounded-xl border border-border bg-surface sm:h-80"
            }
          >
            <Image
              src={project.image}
              alt={
                locale === "fr"
                  ? `Capture du projet ${project.title}`
                  : `Screenshot of ${project.title}`
              }
              fill
              className={ready ? "object-contain" : "object-cover"}
              sizes="(min-width: 1024px) 992px, calc(100vw - 32px)"
              loading={ready ? "eager" : "lazy"}
            />
          </div>
        )}

        {ready && project.gallery.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border bg-surface"
              >
                <Image
                  src={image}
                  alt={
                    locale === "fr"
                      ? `Capture ${index + 2} de ${project.title}`
                      : `Screenshot ${index + 2} of ${project.title}`
                  }
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="muted">
              {tech}
            </Badge>
          ))}
        </div>

        {ready && (
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <section className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-text-primary">
                {locale === "fr" ? "Présentation" : "Overview"}
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-6 text-text-muted">
                {project.longDescription[locale]}
              </p>
            </section>
            {project.problem[locale] && (
              <section>
                <h2 className="text-xl font-semibold text-text-primary">
                  {locale === "fr" ? "Problème" : "Problem"}
                </h2>
                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {project.problem[locale]}
                </p>
              </section>
            )}
            <ProjectList
              title={locale === "fr" ? "Objectifs" : "Goals"}
              items={localized(project.goals)}
            />
            <ProjectList title="Architecture" items={localized(project.architecture)} />
            <ProjectList
              title={locale === "fr" ? "Défis" : "Challenges"}
              items={localized(project.challenges)}
            />
            <ProjectList title="Solutions" items={localized(project.solutions)} />
            <ProjectList
              title={locale === "fr" ? "Résultats" : "Results"}
              items={localized(project.results)}
            />
            <ProjectList
              title={locale === "fr" ? "Points forts" : "Highlights"}
              items={localized(project.highlights)}
            />
            <ProjectList
              title={locale === "fr" ? "Tests & qualité" : "Tests & quality"}
              items={localizedOrShared(project.tests)}
            />
            <ProjectList
              title="Infrastructure"
              items={localizedOrShared(project.infrastructure)}
            />
          </div>
        )}

        {hasLinks && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-text-primary">
              {t("projects_page.links")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.links.github && (
                <IconLink
                  href={project.links.github}
                  icon="github"
                  label={t("common.source_code")}
                  external
                />
              )}
              {project.links.demo && (
                <IconLink
                  href={
                    project.links.demo.startsWith("/")
                      ? `${base}${project.links.demo}`
                      : project.links.demo
                  }
                  icon="external"
                  label={t("common.demo")}
                  external={!project.links.demo.startsWith("/")}
                />
              )}
              {project.links.docs && (
                <IconLink
                  href={project.links.docs}
                  icon="external"
                  label="Documentation"
                  external
                />
              )}
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
