"use client";

import React from "react";
import { I18nProvider } from "@/lib/i18n/context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function RootClient({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
