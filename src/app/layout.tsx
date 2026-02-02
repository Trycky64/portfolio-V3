import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { I18nProvider } from "@/lib/i18n/context";
import { CookieConsent } from "@/components/ui/cookie-consent";

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
