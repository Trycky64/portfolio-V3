import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";

import {
  getAdjacentProjects,
  getAllProjects,
  getFeaturedProjects,
  getProjectImageAlt,
  getProjectBySlug,
  getProjectType,
  getProjectsByCategory,
} from "./projects";

describe("lib/projects", () => {
  it("décrit les captures de projet dans chaque langue", () => {
    for (const project of getAllProjects()) {
      for (const image of [project.image, ...project.gallery].filter((path): path is string => Boolean(path))) {
        for (const locale of ["fr", "en"] as const) {
          expect(getProjectImageAlt(project, image, locale).length).toBeGreaterThan(15);
        }
      }
    }
    const pygeolab = getProjectBySlug("pygeolab")!;
    expect(getProjectImageAlt(pygeolab, pygeolab.gallery[1], "fr")).toContain("mathématique");
  });
  it("publie les quatre projets dans l'ordre attendu", () => {
    expect(getAllProjects().map((project) => project.slug)).toEqual([
      "pygeolab",
      "jellyfin-media-integrity",
      "tec",
      "citypulse",
    ]);
  });

  it("retire les anciens projets secondaires", () => {
    expect(getProjectBySlug("portfolio-v5")).toBeUndefined();
    expect(getProjectBySlug("tryckys-rtp")).toBeUndefined();
  });

  it("présente Jellyfin Media Integrity v1.2.0 comme deuxième projet complet et public", () => {
    const project = getProjectBySlug("jellyfin-media-integrity");
    expect(project).toBeDefined();
    if (!project) return;

    expect(project.contentStatus).toBe("ready");
    expect(project.featured).toBe(true);
    expect(getFeaturedProjects()[0]?.slug).toBe("pygeolab");
    expect(getFeaturedProjects()[1]?.slug).toBe(project.slug);
    expect(project.categories).toContain("Backend");
    expect(project.categories).toContain("Applications");
    expect(project.links).toEqual({
      github: "https://github.com/Trycky64/Jellyfin.Plugin.MediaIntegrity",
    });
    expect(project.image).toBeTruthy();
    expect(project.gallery).toHaveLength(2);

    for (const locale of ["fr", "en"] as const) {
      expect(getProjectType(project, locale)).toContain("Jellyfin");
      for (const value of [
        project.shortDescription,
        project.longDescription,
        project.problem,
        project.seoDescription!,
      ]) {
        expect(value[locale].length).toBeGreaterThan(50);
      }
      for (const section of [
        project.goals,
        project.architecture,
        project.challenges,
        project.solutions,
        project.results,
        project.highlights,
      ]) {
        expect(section[locale].length).toBeGreaterThan(0);
      }
      expect(
        Array.isArray(project.tests) ? project.tests : project.tests[locale],
      ).not.toHaveLength(0);
      expect(
        Array.isArray(project.infrastructure)
          ? project.infrastructure
          : project.infrastructure[locale],
      ).not.toHaveLength(0);
    }

    for (const path of [project.image, ...project.gallery]) {
      expect(existsSync(join(process.cwd(), "public", path!.replace(/^\//, "")))).toBe(
        true,
      );
    }

    const publishedText = JSON.stringify(project);
    expect(publishedText).toMatch(/A\/V Repair/);
    expect(publishedText).toMatch(/229 tests xUnit/);
    expect(publishedText).toMatch(/Video is never re-encoded/);
    expect(publishedText).not.toMatch(/all FFmpeg (?:invocations|uses).*copy/i);
    expect(publishedText).not.toMatch(
      /(?:69 tests|Version 1\.0\.0|Two scheduled tasks|deux tâches planifiées)/i,
    );
    expect(publishedText).not.toMatch(
      /(?:\/home\/|\/srv\/|jellyfin-private|127\.0\.0\.1|192\.168\.|10\.\d+\.\d+\.\d+)/i,
    );
  });

  it("publie PyGeoLab comme projet Python principal avec une fiche FR/EN complète", () => {
    const project = getProjectBySlug("pygeolab");
    expect(project).toBeDefined();
    if (!project) return;

    expect(project.contentStatus).toBe("ready");
    expect(project.featured).toBe(true);
    expect(project.order).toBe(
      Math.max(...getFeaturedProjects().map((item) => item.order)),
    );
    expect(getFeaturedProjects()[0]?.slug).toBe("pygeolab");
    expect(project.title).toBe("PyGeoLab");
    expect(getProjectType(project, "fr")).toContain("géométrie dynamique");
    expect(getProjectType(project, "en")).toMatch(/dynamic geometry/i);
    for (const locale of ["fr", "en"] as const) {
      expect(project.shortDescription[locale].length).toBeGreaterThan(50);
      expect(project.longDescription[locale].length).toBeGreaterThan(50);
      expect(project.problem[locale]).toBeTruthy();
      for (const section of [
        project.goals,
        project.architecture,
        project.challenges,
        project.solutions,
        project.results,
        project.highlights,
      ]) {
        expect(section[locale].length).toBeGreaterThan(0);
      }
      expect(
        Array.isArray(project.tests) ? project.tests : project.tests[locale],
      ).toHaveLength(6);
      expect(
        Array.isArray(project.infrastructure)
          ? project.infrastructure
          : project.infrastructure[locale],
      ).toHaveLength(2);
    }
    expect(project.categories).toContain("Python");
    expect(project.categories).toContain("Applications");
    expect(project.links.github).toMatch(/^https:\/\/github\.com\//);
    expect(project.links.demo).toBeUndefined();
    expect(project.image).toBeTruthy();
    expect(project.gallery).toHaveLength(2);
    for (const image of [project.image, ...project.gallery]) {
      expect(existsSync(join(process.cwd(), "public", image!.replace(/^\//, "")))).toBe(
        true,
      );
    }
  });

  it("présente Trycky's Enchantment Cracker comme troisième projet complet avec attribution ClientCommands", () => {
    const project = getProjectBySlug("tec");
    expect(project).toBeDefined();
    if (!project) return;

    expect(project.contentStatus).toBe("ready");
    expect(project.featured).toBe(true);
    expect(project.categories).toContain("Java");
    expect(getFeaturedProjects()[2]?.slug).toBe(project.slug);

    for (const locale of ["fr", "en"] as const) {
      expect(getProjectType(project, locale)).toContain("NeoForge");
      for (const value of [
        project.shortDescription,
        project.longDescription,
        project.problem,
        project.seoDescription!,
      ]) {
        expect(value[locale].length).toBeGreaterThan(50);
      }
      for (const section of [
        project.goals,
        project.architecture,
        project.challenges,
        project.solutions,
        project.results,
        project.highlights,
      ]) {
        expect(section[locale].length).toBeGreaterThan(0);
      }
      expect(
        Array.isArray(project.tests) ? project.tests : project.tests[locale],
      ).not.toHaveLength(0);
      expect(
        Array.isArray(project.infrastructure)
          ? project.infrastructure
          : project.infrastructure[locale],
      ).not.toHaveLength(0);
    }

    const attributionText = JSON.stringify(project);
    expect(attributionText).toMatch(/ClientCommands/);
    expect(attributionText).toMatch(/Earthcomputer/);
    expect(attributionText).toMatch(/LattiCG/);
    expect(attributionText).toMatch(/LGPL-3\.0-or-later/);

    expect(project.links.github).toBe("https://github.com/Trycky64/TEC");
    expect(project.links.github).toMatch(/^https:\/\/github\.com\//);
    expect(project.links.demo).toBeUndefined();

    // No real gameplay screenshots exist yet; the model must not carry
    // fabricated image paths for TEC.
    expect(project.image).toBeUndefined();
    expect(project.gallery).toEqual([]);
  });

  it("publie CityPulse comme quatrième projet secondaire complet", () => {
    const project = getProjectBySlug("citypulse");
    expect(project).toBeDefined();
    if (!project) return;

    expect(getAllProjects()[3]?.slug).toBe(project.slug);
    expect(project.featured).toBe(false);
    expect(project.contentStatus).toBe("ready");
    expect(project.categories).toEqual(["Web", "Applications"]);
    expect(project.links.github).toMatch(/^https:\/\/github\.com\//);
    expect(project.links.demo).toBe("https://citypulse.quentinperriere.com/");
    expect(project.image).toBe("/images/projects/citypulse.png");
    expect(
      existsSync(join(process.cwd(), "public", project.image!.replace(/^\//, ""))),
    ).toBe(true);

    for (const locale of ["fr", "en"] as const) {
      expect(getProjectType(project, locale)).toMatch(/Vue 3.*TypeScript/i);
      for (const value of [
        project.shortDescription,
        project.longDescription,
        project.problem,
        project.seoDescription!,
      ]) {
        expect(value[locale].length).toBeGreaterThan(50);
      }
      for (const section of [
        project.goals,
        project.architecture,
        project.challenges,
        project.solutions,
        project.results,
        project.highlights,
      ]) {
        expect(section[locale].length).toBeGreaterThan(0);
      }
      expect(
        Array.isArray(project.tests) ? project.tests : project.tests[locale],
      ).not.toHaveLength(0);
      expect(
        Array.isArray(project.infrastructure)
          ? project.infrastructure
          : project.infrastructure[locale],
      ).not.toHaveLength(0);
    }

    expect(project.stack).toEqual(
      expect.arrayContaining([
        "Vue 3",
        "TypeScript",
        "Vite",
        "Pinia",
        "Vue Router",
        "Hono",
        "Zod",
        "IndexedDB",
        "Leaflet",
        "Chart.js",
        "Vitest",
        "Playwright",
      ]),
    );
  });

  it("trie tous les projets par ordre décroissant", () => {
    const orders = getAllProjects().map((project) => project.order);
    expect(orders).toEqual([...orders].sort((a, b) => b - a));
  });

  it("calcule la navigation précédente et suivante selon l'ordre publié", () => {
    expect(getAdjacentProjects("pygeolab")).toMatchObject({
      previous: undefined,
      next: { slug: "jellyfin-media-integrity" },
    });
    expect(getAdjacentProjects("jellyfin-media-integrity")).toMatchObject({
      previous: { slug: "pygeolab" },
      next: { slug: "tec" },
    });
    expect(getAdjacentProjects("tec")).toMatchObject({
      previous: { slug: "jellyfin-media-integrity" },
      next: { slug: "citypulse" },
    });
    expect(getAdjacentProjects("citypulse")).toMatchObject({
      previous: { slug: "tec" },
      next: undefined,
    });
    expect(getAdjacentProjects("unknown")).toEqual({});
  });

  it("respecte featured et la limite", () => {
    const featured = getFeaturedProjects(1);
    expect(featured).toHaveLength(1);
    expect(featured.every((project) => project.featured)).toBe(true);
  });

  it("filtre par catégorie", () => {
    const webProjects = getProjectsByCategory("Web");
    expect(webProjects.length).toBeGreaterThan(0);
    expect(webProjects.every((project) => project.categories.includes("Web"))).toBe(true);
    expect(getProjectsByCategory("Python").map((project) => project.slug)).toEqual([
      "pygeolab",
    ]);
    expect(getProjectsByCategory("Backend").map((project) => project.slug)).toEqual([
      "jellyfin-media-integrity",
    ]);
    expect(getProjectsByCategory("Java").map((project) => project.slug)).toEqual(["tec"]);
    expect(getProjectsByCategory("Applications").map((project) => project.slug)).toEqual([
      "pygeolab",
      "jellyfin-media-integrity",
      "tec",
      "citypulse",
    ]);
  });
});
