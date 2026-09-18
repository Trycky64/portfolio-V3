import { describe, expect, it } from "vitest";

import { getTranslations } from "./i18n";

describe("lib/i18n", () => {
  it("renvoie les traductions FR et EN", async () => {
    const fr = await getTranslations("fr");

    expect(fr.hero.subtitle).toBeDefined();
    expect(fr.nav.projects).toBeDefined();
    expect(fr.hero.ctaCv).toBe("Télécharger mon CV");
    expect(fr.about.availability.status).toContain("{location}");

    const en = await getTranslations("en");

    expect(en.hero.subtitle).toBeDefined();
    expect(en.nav.projects).toBeDefined();
    expect(en.hero.ctaCv).toBe("Download my CV");
    expect(en.about.availability.status).toContain("{location}");
  });
});
