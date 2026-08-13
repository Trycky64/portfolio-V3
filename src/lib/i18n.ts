import en from "../i18n/en.json";
import fr from "../i18n/fr.json";

export type Locale = "fr" | "en";

const translations = {
  fr,
  en,
} as const;

export type Messages = (typeof translations)[Locale];

export async function getTranslations(
  locale: Locale,
): Promise<Messages> {
  return translations[locale];
}