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

  it("expose les clés About/Contact utilisées par les composants, sans reste freelance", async () => {
    const fr = await getTranslations("fr");
    const en = await getTranslations("en");

    for (const messages of [fr, en]) {
      expect(messages.about.build.title).toBeTruthy();
      expect(messages.about.build.p1).toBeTruthy();
      expect(messages.about.value.p1).toBeTruthy();
      expect(messages.about.value.p2).toBeTruthy();
      expect(messages.contact.success).toBeTruthy();
      expect(messages.contact.errors.invalid).toBeTruthy();
      expect(messages.contact.errors.tooLarge).toBeTruthy();
      expect(messages.contact.errors.rateLimited).toBeTruthy();
      expect(messages.contact.errors.server).toBeTruthy();
      expect(messages.contact.errors.network).toBeTruthy();
      expect(messages.contact.button.sending).toBeTruthy();
      expect(messages.contact.button.sent).toBeTruthy();

      expect(messages.about).not.toHaveProperty("process");
      expect(messages).not.toHaveProperty("services");
    }

    for (const value of [
      fr.contact.title,
      fr.contact.description,
      en.contact.title,
      en.contact.description,
    ]) {
      expect(value).not.toMatch(/deadline|devis|quote|freelance/i);
    }
  });
});
