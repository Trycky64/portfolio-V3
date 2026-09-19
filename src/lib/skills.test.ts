import { describe, expect, it } from "vitest";

import { getSkillGroups } from "./skills";

describe("lib/skills", () => {
  it("publie les huit groupes dans l’ordre attendu", () => {
    expect(getSkillGroups().map((group) => group.id)).toEqual([
      "python-architecture",
      "backend-server",
      "apis-data",
      "testing-quality",
      "web",
      "java",
      "linux-devops",
      "tools",
    ]);
  });

  it("retire les technologies peu représentatives", () => {
    const items = getSkillGroups().flatMap((group) => group.items);
    expect(items).not.toEqual(
      expect.arrayContaining([
        "Ruby (bases)",
        "WordPress",
        "Bootstrap",
        "Jest",
        "Unittest",
        "VPS",
      ]),
    );
  });

  it("couvre les compétences principales avec des preuves concrètes", () => {
    const groups = getSkillGroups();
    const byId = (id: string) => groups.find((group) => group.id === id)!;

    expect(byId("python-architecture").items).toContain("Python");
    expect(byId("backend-server").items).toEqual(
      expect.arrayContaining(["C#", ".NET 9", "Hono"]),
    );
    expect(byId("testing-quality").items).toEqual(
      expect.arrayContaining(["pytest", "xUnit", "Playwright"]),
    );
    expect(byId("java").items).toEqual(
      expect.arrayContaining(["Java 21", "NeoForge", "Gradle"]),
    );

    for (const group of groups) {
      expect(group.evidence.fr.length).toBeGreaterThan(0);
      expect(group.evidence.en.length).toBeGreaterThan(0);
    }
  });
});
