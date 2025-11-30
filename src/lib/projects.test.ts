import { describe, it, expect } from "vitest";
import { getAllProjects, getProjectBySlug } from "./projects";

describe("lib/projects", () => {
  it("renvoie au moins un projet", () => {
    const all = getAllProjects();
    expect(all.length).toBeGreaterThanOrEqual(1);
  });

  it("permet de récupérer un projet par slug", () => {
    const project = getProjectBySlug("portfolio-v3");
    expect(project).toBeDefined();
    expect(project?.slug).toBe("portfolio-v3");
  });
});
