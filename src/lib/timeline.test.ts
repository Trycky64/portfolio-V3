import { describe, expect, it } from "vitest";

import { getTimeline } from "./timeline";

describe("lib/timeline", () => {
  const experiences = getTimeline().filter(
    (item) => item.type === "experience",
  );

  it("classe les expériences de la plus récente à la plus ancienne", () => {
    expect(experiences.map((item) => item.id)).toEqual([
      "leclerc-traiteur",
      "qa-maxsea",
      "dev-dwe64",
      "mcdo",
    ]);
  });

  it("publie le poste E.Leclerc en cours avec une période localisée", () => {
    const leclerc = experiences[0];
    expect(leclerc.company).toBe("E.Leclerc");
    expect(leclerc.period).toEqual({
      fr: "Depuis mars 2026",
      en: "Since March 2026",
    });
  });

  it("décrit les expériences techniques avec leur stack vérifiée", () => {
    const maxsea = experiences.find((item) => item.id === "qa-maxsea")!;
    const dwe64 = experiences.find((item) => item.id === "dev-dwe64")!;

    expect(maxsea.technologies).toEqual(
      expect.arrayContaining(["Python", "pytest", "Airtest"]),
    );
    for (const keyword of ["Android", "Windows", "scénarios", "bugs"]) {
      expect(maxsea.description.fr).toMatch(new RegExp(keyword, "i"));
    }
    expect(dwe64.technologies).toEqual(
      expect.arrayContaining(["Symfony", "Doctrine", "SQL"]),
    );
    for (const keyword of ["utilisateurs", "rôles", "sécurité"]) {
      expect(dwe64.description.fr).toMatch(new RegExp(keyword, "i"));
    }
  });

  it("conserve McDonald’s en dernière position", () => {
    expect(experiences.at(-1)).toMatchObject({
      id: "mcdo",
      period: { fr: "12/2023 — 12/2024", en: "Dec 2023 — Dec 2024" },
      technical: false,
    });
  });
});

describe("lib/timeline — formation", () => {
  const education = getTimeline().filter((item) => item.type === "education");

  it("classe les formations de la plus récente à la plus ancienne", () => {
    expect(education.map((item) => item.id)).toEqual([
      "bachelor-dev-web",
      "bts-sio-slam",
    ]);
  });

  it("publie le Bachelor développement web & applicatif avec une période localisée", () => {
    const bachelor = education.find((item) => item.id === "bachelor-dev-web")!;
    expect(bachelor.period.fr).toBeTruthy();
    expect(bachelor.period.en).toBeTruthy();
    expect(bachelor.title.fr).toMatch(/Bachelor/i);
  });

  it("publie le BTS SIO option SLAM avec la période vérifiée sur les CV (2023 — 2025)", () => {
    const bts = education.find((item) => item.id === "bts-sio-slam")!;
    expect(bts.title.fr).toMatch(/BTS SIO/i);
    expect(bts.title.fr).toMatch(/SLAM/i);
    expect(bts.period).toEqual({ fr: "2023 — 2025", en: "2023 — 2025" });
  });
});
