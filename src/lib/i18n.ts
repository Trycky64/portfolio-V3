export type Locale = "fr" | "en";

export type Messages = Record<string, any>;

export async function getTranslations(locale: Locale): Promise<Messages> {
  switch (locale) {
    case "en":
      return (await import("../i18n/en.json")).default;
    case "fr":
    default:
      return (await import("../i18n/fr.json")).default;
  }
}
