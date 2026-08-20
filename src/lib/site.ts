export const SITE_URL = "https://quentinperriere.com";
export const GITHUB_URL = "https://github.com/Trycky64";

const configuredLinkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim();

export const LINKEDIN_URL =
  configuredLinkedInUrl &&
  configuredLinkedInUrl !== "https://www.linkedin.com/" &&
  configuredLinkedInUrl !== "https://www.linkedin.com"
    ? configuredLinkedInUrl
    : null;

export const EMAIL = "quentin.perriere64@gmail.com";
export const CV_URL = "/cv-quentin-perriere.pdf";
export const LOCATION = "Bordeaux, Nouvelle-Aquitaine";

export const PERSON_NAME = "Quentin Perriere";

export const ROLE = {
  fr: "Développeur Python • Backend • Web & Applicatif",
  en: "Python Developer • Backend • Web & Applications",
} as const;

export const AVAILABILITY = {
  fr: "Hybride ou télétravail · Recherche active · Temps plein",
  en: "Hybrid or remote · Actively looking · Full-time",
} as const;
