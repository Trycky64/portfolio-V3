import { describe, expect, it } from "vitest";

import { getTranslations } from "./i18n";

describe("lib/i18n", () => {
  it("renvoie les traductions FR et EN", async () => {
    const fr = await getTranslations("fr");

    expect(fr.hero.subtitle).toBeDefined();
    expect(fr.nav.projects).toBeDefined();

    const en = await getTranslations("en");

    expect(en.hero.subtitle).toBeDefined();
    expect(en.nav.projects).toBeDefined();
  });
});