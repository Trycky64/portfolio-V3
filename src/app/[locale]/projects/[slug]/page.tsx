import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectPage from "@/components/projects/project-page";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { localeAlternates, socialMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || (locale !== "fr" && locale !== "en")) return {};

  const description =
    project.seoDescription?.[locale] ?? project.shortDescription[locale];
  const path = `/${locale}/projects/${slug}`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: path,
      languages: localeAlternates(`/projects/${slug}`),
    },
    ...socialMetadata(locale, project.title, description, path),
  };
}

export default async function DynamicProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  if (!getProjectBySlug(slug)) {
    notFound();
  }

  return <ProjectPage slug={slug} />;
}
