import { describe, expect, it } from "vitest";

import {
  GITHUB_URL,
  LINKEDIN_URL,
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
});
