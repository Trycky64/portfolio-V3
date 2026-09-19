import type { Metadata } from "next";

import { ProjectsList } from "@/components/projects/projects-list";
import type { Locale } from "@/lib/i18n/context";
import { PERSON_NAME, SITE_URL } from "@/lib/site";

const metadataByLocale: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Projets logiciels",
    description:
      "Découvrez les projets de Quentin Perriere en Python, backend, applications et web, avec leurs choix techniques, tests et résultats.",
  },
  en: {
    title: "Software projects",
    description:
      "Explore Quentin Perriere's Python, backend, application, and web projects, including technical decisions, tests, and results.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "fr";
  const metadata = metadataByLocale[locale];
  const path = `/${locale}/projects`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: path,
      languages: {
        fr: "/fr/projects",
        en: "/en/projects",
      },
    },
    openGraph: {
      title: `${metadata.title} — ${PERSON_NAME}`,
      description: metadata.description,
      url: `${SITE_URL}${path}`,
      type: "website",
    },
  };
}

export default function ProjectsPage() {
  return <ProjectsList />;
}
