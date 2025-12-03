"use client";

import React, { createContext, useContext } from "react";
import type { Messages, Locale } from "../i18n";

type I18nContextValue = {
  locale: Locale;
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ locale, messages, children }: I18nContextValue & { children: React.ReactNode }) {
  return <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");

  function t(key: string, vars?: Record<string, string | number | undefined>) {
    const parts = key.split(".");
    let value: any = ctx.messages;
    for (const part of parts) {
      if (value && typeof value === "object" && part in value) {
        value = value[part];
      } else {
        return key; // Fallback: return key itself
      }
    }
    if (typeof value === "string") {
      if (!vars) return value;
      return value.replace(/{{(.*?)}}/g, (_, v: string) => {
        return String(vars[v.trim()] ?? "");
      });
    }
    return value;
  }

  return { t, locale: ctx.locale } as const;
}
