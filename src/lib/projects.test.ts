import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";

import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectType,
  getProjectsByCategory,
} from "./projects";

describe("lib/projects", () => {
  it("conserve les projets réels sous forme de templates", () => {
    expect(getAllProjects().map((project) => project.slug)).toEqual(
      expect.arrayContaining(["portfolio-v5", "tryckys-rtp", "citypulse"]),
    );
  });

  it("conserve les autres projets sous forme de placeholders", () => {
    for (const project of getAllProjects().filter((item) => item.slug !== "pygeolab")) {
      expect(project.contentStatus).toBe("placeholder");
      expect(project.shortDescription.fr).toBeTruthy();
      expect(project.shortDescription.en).toBeTruthy();
      expect(project.problem.fr).toBe("");
      expect(project.goals.fr).toEqual([]);
      expect(project.architecture.fr).toEqual([]);
      expect(project.results.fr).toEqual([]);
      expect(project.tests).toEqual([]);
      expect(project.infrastructure).toEqual([]);
    }
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
      expect(Array.isArray(project.tests) ? project.tests : project.tests[locale]).toHaveLength(6);
      expect(Array.isArray(project.infrastructure) ? project.infrastructure : project.infrastructure[locale]).toHaveLength(2);
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

  it("conserve les liens publics déjà vérifiés", () => {
    expect(getProjectBySlug("citypulse")?.links.demo).toBe(
      "https://citypulse.quentinperriere.com/",
    );
    expect(getProjectBySlug("tryckys-rtp")?.links.docs).toBe(
      "https://rtp.quentinperriere.com/",
    );
  });

  it("trie tous les projets par ordre décroissant", () => {
    const orders = getAllProjects().map((project) => project.order);
    expect(orders).toEqual([...orders].sort((a, b) => b - a));
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
  });
});
