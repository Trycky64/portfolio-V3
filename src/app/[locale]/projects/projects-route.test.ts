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
        },
      });
      expect(metadata.description).toBeTruthy();
    }
  });

  it("génère les canonical et hreflang de chaque projet", async () => {
    for (const project of getAllProjects()) {
      for (const locale of ["fr", "en"] as const) {
        const metadata = await generateProjectMetadata({
          params: Promise.resolve({ locale, slug: project.slug }),
        });

        expect(metadata.title).toBe(project.title);
        expect(metadata.description).toBeTruthy();
        expect(metadata.alternates).toEqual({
          canonical: `/${locale}/projects/${project.slug}`,
          languages: {
            fr: `/fr/projects/${project.slug}`,
            en: `/en/projects/${project.slug}`,
          },
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
