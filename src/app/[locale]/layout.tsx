import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { I18nProvider, type Locale } from "@/lib/i18n/context";
import { localeAlternates, socialMetadata } from "@/lib/seo";
import { LOCATION, PERSON_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const LOCALES = ["fr", "en"] as const;

function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale = rawLocale;
  const isFrench = locale === "fr";

  const title = isFrench
    ? `${PERSON_NAME} — Développeur Python, backend et web à ${LOCATION}`
    : `${PERSON_NAME} — Python, Backend & Web Developer in ${LOCATION}`;

  const description = isFrench
    ? "Développeur Python orienté backend, web et applicatif. Projets, compétences, expérience et contact."
    : "Python developer focused on backend, web and application development. Projects, skills, experience and contact.";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s — ${PERSON_NAME}`,
    },
    description,
    authors: [{ name: PERSON_NAME, url: SITE_URL }],
    creator: PERSON_NAME,
    publisher: PERSON_NAME,
    alternates: {
      canonical: `/${locale}`,
      languages: localeAlternates(),
    },
    ...socialMetadata(locale, title, description, `/${locale}`),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} scroll-smooth`}
    >
      <body>
        <I18nProvider locale={locale}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
