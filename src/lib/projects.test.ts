import { describe, expect, it } from "vitest";

import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectsByCategory,
} from "./projects";

describe("lib/projects", () => {
  it("conserve les projets réels sous forme de templates", () => {
    expect(getAllProjects().map((project) => project.slug)).toEqual(
      expect.arrayContaining(["portfolio-v5", "tryckys-rtp", "citypulse"]),
    );
  });

  it("ne présente aucune étude de cas inachevée comme prête", () => {
    for (const project of getAllProjects()) {
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
