import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { I18nProvider, type Locale } from "@/lib/i18n/context";
import { PERSON_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
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
    ? `${PERSON_NAME} — Développeur Python, backend et web à Bordeaux`
    : `${PERSON_NAME} — Python, Backend & Web Developer in Bordeaux`;

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
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: PERSON_NAME,
      type: "website",
      locale: isFrench ? "fr_FR" : "en_GB",
      alternateLocale: isFrench ? ["en_GB"] : ["fr_FR"],
    },
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
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
