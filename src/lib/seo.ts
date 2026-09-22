import type { Locale } from "@/lib/i18n/context";
import { SITE_URL } from "@/lib/site";

export function localeAlternates(path = "") {
  return {
    fr: `/fr${path}`,
    en: `/en${path}`,
    "x-default": `/fr${path}`,
  };
}

export function ogImage(locale: Locale) {
  return {
    url: `${SITE_URL}/${locale}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: locale === "fr"
      ? "Quentin Perriere — Développeur Python, Backend, Web & Applicatif"
      : "Quentin Perriere — Python Developer, Backend, Web & Applications",
  };
}

export function socialMetadata(locale: Locale, title: string, description: string, path: string) {
  const image = ogImage(locale);
  return {
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "Quentin Perriere",
      type: "website" as const,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: locale === "fr" ? ["en_GB"] : ["fr_FR"],
      images: [image],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image.url],
    },
  };
}
