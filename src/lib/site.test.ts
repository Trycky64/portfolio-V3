import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";

import {
  CV_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  SITE_URL,
} from "./site";

describe("lib/site", () => {
  it("utilise des URLs publiques absolues valides", () => {
    expect(new URL(SITE_URL).protocol).toBe("https:");
    expect(new URL(GITHUB_URL).protocol).toBe("https:");
    expect(new URL(LINKEDIN_URL).protocol).toBe("https:");
  });

  it("pointe vers le profil LinkedIn final", () => {
    expect(LINKEDIN_URL).toBe(
      "https://www.linkedin.com/in/quentin-perriere-295045292",
    );
  });

  it("utilise le PDF CV de chaque langue et l'emplacement actuel", () => {
    expect(CV_URL).toEqual({
      fr: "/cv-quentin-perriere.pdf",
      en: "/cv-quentin-perriere-en.pdf",
    });
    for (const path of Object.values(CV_URL)) {
      expect(existsSync(join(process.cwd(), "public", path.slice(1)))).toBe(true);
    }
    expect(LOCATION).toBe("Anglet, Nouvelle-Aquitaine");
  });
});
