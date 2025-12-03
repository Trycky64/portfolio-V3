import type { Metadata } from "next";
import "./globals.css";
import { getTranslations } from "@/lib/i18n";
import { I18nProvider } from "@/lib/i18n/context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  // À adapter quand ton domaine sera fixé
  metadataBase: new URL("https://quentinperriere.com"),
  title: {
    default: "Quentin Perriere — Développeur web & applicatif",
    template: "%s | Quentin Perriere",
  },
  description:
    "Portfolio de Quentin Perriere, développeur web & applicatif. PHP/Symfony, React, Next.js, WordPress, Python, tests QA, auto-hébergement Linux & Raspberry Pi.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Quentin Perriere — Développeur web & applicatif",
    siteName: "Quentin Perriere — Portfolio",
    description:
      "Portfolio de Quentin Perriere, développeur web & applicatif. Découvrez ses projets, son parcours et ses compétences en développement web moderne.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Quentin Perriere",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = await getTranslations("fr");
  return (
    <html lang="fr">
      <body className="bg-qp-bg text-slate-100 antialiased">
        <I18nProvider locale="fr" messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
          <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
