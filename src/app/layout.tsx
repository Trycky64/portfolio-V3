import type { Metadata } from "next";
import "./globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-qp-bg text-slate-100 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
