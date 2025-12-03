import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n";

export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  // Keep a simple wrapper; the root layout still handles <html> and <body>
  return <>{children}</>;
}
