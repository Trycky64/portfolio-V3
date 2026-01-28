"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import fr from "@/i18n/fr.json";
import en from "@/i18n/en.json";

export type Locale = "fr" | "en";

type Messages = Record<string, unknown>;
type Vars = Record<string, string | number>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string, vars?: Vars) => string;
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

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = vars[key];
    if (value === undefined || value === null) return match;
    return String(value);
  });
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
    return (key: string, vars?: Vars) => {
      const value = getNestedValue(messages, key);
      if (typeof value === "string") return interpolate(value, vars);
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
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
