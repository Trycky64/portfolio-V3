"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";

import en from "@/i18n/en.json";
import fr from "@/i18n/fr.json";

export type Locale = "fr" | "en";

type Messages = Record<string, unknown>;
type Vars = Record<string, string | number>;

type I18nContextValue = {
  locale: Locale;
  t: (key: string, vars?: Vars) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getNestedValue(obj: Messages, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (
      acc &&
      typeof acc === "object" &&
      part in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[part];
    }

    return undefined;
  }, obj);
}

function interpolate(template: string, vars?: Vars): string {
  if (!vars) {
    return template;
  }

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = vars[key];

    if (value === undefined || value === null) {
      return match;
    }

    return String(value);
  });
}

export function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const messages = useMemo<Messages>(
    () => (locale === "fr" ? (fr as Messages) : (en as Messages)),
    [locale],
  );

  const t = useCallback(
    (key: string, vars?: Vars) => {
      const value = getNestedValue(messages, key);

      if (typeof value === "string") {
        return interpolate(value, vars);
      }

      return key;
    },
    [messages],
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t,
    }),
    [locale, t],
  );

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
}
