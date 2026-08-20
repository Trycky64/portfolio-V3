import { describe, expect, it } from "vitest";

import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectsByCategory,
} from "./projects";

describe("lib/projects", () => {
  it("renvoie au moins un projet", () => {
    expect(getAllProjects().length).toBeGreaterThanOrEqual(1);
  });

  it("permet de récupérer un projet par slug", () => {
    const project = getProjectBySlug("portfolio-v3");

    expect(project).toBeDefined();
    expect(project?.slug).toBe("portfolio-v3");
    expect(project?.shortDescription.fr).toBeTruthy();
    expect(project?.longDescription.en).toBeTruthy();
    expect(project?.highlights.fr.length).toBeGreaterThan(0);
  });

  it("trie tous les projets par ordre décroissant", () => {
    const all = getAllProjects();
    const orders = all.map((project) => project.order);

    expect(orders).toEqual([...orders].sort((a, b) => b - a));
  });

  it("ne retourne que les projets featured et respecte la limite", () => {
    const featured = getFeaturedProjects(1);

    expect(featured).toHaveLength(1);
    expect(featured.every((project) => project.featured)).toBe(true);
  });

  it("permet de filtrer par catégorie", () => {
    const webProjects = getProjectsByCategory("Web");

    expect(webProjects.length).toBeGreaterThan(0);
    expect(
      webProjects.every((project) => project.categories.includes("Web")),
    ).toBe(true);
  });

  it("utilise uniquement des statuts autorisés", () => {
    const allowed = new Set([
      "production",
      "active",
      "completed",
      "experimental",
    ]);

    for (const project of getAllProjects()) {
      expect(allowed.has(project.status)).toBe(true);
    }
  });
});
