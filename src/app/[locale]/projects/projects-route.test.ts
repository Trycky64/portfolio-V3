import { describe, expect, it, vi } from "vitest";

const { notFoundMock } = vi.hoisted(() => ({
  notFoundMock: vi.fn(() => {
    throw new Error("NEXT_HTTP_ERROR_FALLBACK;404");
  }),
}));

vi.mock("next/navigation", () => ({ notFound: notFoundMock }));

import { generateMetadata as generateProjectsMetadata } from "./page";
import DynamicProjectPage, {
  generateMetadata as generateProjectMetadata,
} from "./[slug]/page";
import { getAllProjects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

describe("projects routes", () => {
  it("génère les canonical et hreflang de la liste dans chaque langue", async () => {
    for (const locale of ["fr", "en"] as const) {
      const metadata = await generateProjectsMetadata({
        params: Promise.resolve({ locale }),
      });

      expect(metadata.alternates).toEqual({
        canonical: `/${locale}/projects`,
        languages: {
          fr: "/fr/projects",
          en: "/en/projects",
          "x-default": "/fr/projects",
        },
      });
      expect(metadata.title).toBe(locale === "fr" ? "Projets logiciels" : "Software projects");
      expect(metadata.description).toBeTruthy();
      expect(metadata.openGraph).toMatchObject({
        url: `${SITE_URL}/${locale}/projects`,
        locale: locale === "fr" ? "fr_FR" : "en_GB",
        images: [{ url: `${SITE_URL}/${locale}/opengraph-image`, width: 1200, height: 630 }],
      });
      expect(metadata.twitter).toMatchObject({
        card: "summary_large_image",
        title: `${locale === "fr" ? "Projets logiciels" : "Software projects"} — Quentin Perriere`,
        description: metadata.description,
        images: [`${SITE_URL}/${locale}/opengraph-image`],
      });
    }
  });

  it("génère les canonical et hreflang de chaque projet", async () => {
    for (const project of getAllProjects()) {
      for (const locale of ["fr", "en"] as const) {
        const metadata = await generateProjectMetadata({
          params: Promise.resolve({ locale, slug: project.slug }),
        });

        expect(metadata.title).toBe(project.title);
        expect(metadata.description).toBe(project.seoDescription?.[locale] ?? project.shortDescription[locale]);
        expect(metadata.alternates).toEqual({
          canonical: `/${locale}/projects/${project.slug}`,
          languages: {
            fr: `/fr/projects/${project.slug}`,
            en: `/en/projects/${project.slug}`,
            "x-default": `/fr/projects/${project.slug}`,
          },
        });
        expect(metadata.openGraph).toMatchObject({
          url: `${SITE_URL}/${locale}/projects/${project.slug}`,
          locale: locale === "fr" ? "fr_FR" : "en_GB",
          type: "website",
          images: [{ url: `${SITE_URL}/${locale}/opengraph-image` }],
        });
        expect(metadata.twitter).toMatchObject({
          card: "summary_large_image",
          title: project.title,
          description: metadata.description,
          images: [`${SITE_URL}/${locale}/opengraph-image`],
        });
      }
    }
  });

  it("appelle notFound pour un slug inconnu", async () => {
    await expect(
      DynamicProjectPage({
        params: Promise.resolve({ locale: "fr", slug: "inexistant" }),
      }),
    ).rejects.toThrow("NEXT_HTTP_ERROR_FALLBACK;404");
    expect(notFoundMock).toHaveBeenCalledOnce();
  });
});
