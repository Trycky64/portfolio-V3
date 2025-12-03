"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { I18nProvider } from "@/lib/i18n/context";
import type { Locale, Messages } from "@/lib/i18n";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

function detectLocale(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return "fr";
}

async function loadMessages(locale: Locale): Promise<Messages> {
  const mod = await import(`../i18n/${locale}.json`);
  return mod.default as Messages;
}

export function ClientRoot({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>("fr");
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    const nextLocale = detectLocale(pathname || "/");
    setLocale(nextLocale);
    loadMessages(nextLocale)
      .then(setMessages)
      .catch(() => {
        setMessages({});
      });
  }, [pathname]);

  if (!messages) {
    return null;
  }

  return (
    <I18nProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
