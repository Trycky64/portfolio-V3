"use client";

<<<<<<< HEAD
import React, { createContext, useContext } from "react";
import type { Messages, Locale } from "../i18n";

type I18nContextValue = {
  locale: Locale;
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ locale, messages, children }: I18nContextValue & { children: React.ReactNode }) {
  return <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>;
=======
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import fr from "@/i18n/fr.json";
import en from "@/i18n/en.json";

export type Locale = "fr" | "en";

type Messages = Record<string, unknown>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getNestedValue(obj: Messages, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

const STORAGE_KEY = "qp_locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  // Load persisted locale
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "en") {
        setLocale(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist locale
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale]);

  const messages = useMemo<Messages>(() => {
    return locale === "fr" ? (fr as Messages) : (en as Messages);
  }, [locale]);

  const t = useMemo(() => {
    return (key: string) => {
      const value = getNestedValue(messages, key);
      if (typeof value === "string") return value;
      return key; // visible fallback if missing translation
    };
  }, [messages]);

  const toggleLocale = useMemo(() => {
    return () => setLocale((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, toggleLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
>>>>>>> 30e29c1 (feat(freelance): i18n + services section + hero avatar + header lang switch)
}

export function useI18n() {
  const ctx = useContext(I18nContext);
<<<<<<< HEAD
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  const { messages, locale } = ctx;

  function t(key: string, vars?: Record<string, string | number | undefined>) {
    const parts = key.split(".");
    let value: any = messages;
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

  return { t, locale } as const;
=======
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
>>>>>>> 30e29c1 (feat(freelance): i18n + services section + hero avatar + header lang switch)
}
