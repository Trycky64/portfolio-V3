import type { Metadata } from "next";

import ProjectPage from "@/components/projects/project-page";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

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
      languages: {
        fr: `/fr/projects/${slug}`,
        en: `/en/projects/${slug}`,
      },
    },
    openGraph: {
      title: project.title,
      description,
      url: `${SITE_URL}${path}`,
      type: "article",
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function DynamicProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectPage slug={slug} />;
}
