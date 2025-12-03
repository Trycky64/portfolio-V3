import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n";
import { I18nProvider } from "@/lib/i18n/context";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const generateStaticParams = async () => {
  return [
    { locale: "fr" },
    { locale: "en" },
  ];
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale === "en" ? "en" : "fr";
  const messages = await getTranslations(locale as any);

  return {
    metadataBase: new URL("https://quentinperriere.com"),
    title: {
      default: messages.seo.title_default,
      template: "%s | Quentin Perriere",
    },
    description: messages.seo.description,
    openGraph: {
      type: "website",
      url: locale === "fr" ? "/" : "/en",
      title: messages.seo.title_default,
      description: messages.seo.description,
      siteName: "Quentin Perriere — Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Aperçu du portfolio de Quentin Perriere",
        },
      ],
    },
    alternates: {
      canonical: locale === "fr" ? "/" : "/en",
      languages: {
        "fr-FR": "/",
        "en-US": "/en",
      },
    },
  } as Metadata;
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "fr";
  const messages = await getTranslations(locale as any);

  return (
    <html lang={locale}>
      <body className="bg-qp-bg text-slate-100 antialiased">
        <I18nProvider locale={locale as any} messages={messages}>
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
