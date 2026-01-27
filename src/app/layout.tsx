<<<<<<< HEAD
import type { Metadata } from "next";
import "./globals.css";
import { ClientRoot } from "./root-client";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-qp-bg text-slate-100 antialiased">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
=======
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { I18nProvider } from "@/lib/i18n/context";

export const metadata: Metadata = {
  title: {
    default: "Quentin Perriere — Développeur web freelance",
    template: "%s — Quentin Perriere",
  },
  description:
    "Développeur web freelance. J’accompagne startups, PME et indépendants sur des sites vitrine, apps web (Next.js/React), APIs et déploiements (Cloudflare, auto-hébergement). Micro-entreprise en cours de validation (SIRET bientôt).",
  metadataBase: new URL("https://quentinperriere.com"),
  openGraph: {
    title: "Quentin Perriere — Développeur web freelance",
    description:
      "Développeur web freelance. Sites vitrine, apps web, APIs et déploiements. Micro-entreprise en cours de validation (SIRET bientôt).",
    url: "https://quentinperriere.com",
    siteName: "Quentin Perriere",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quentin Perriere — Développeur web freelance",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
>>>>>>> 30e29c1 (feat(freelance): i18n + services section + hero avatar + header lang switch)
