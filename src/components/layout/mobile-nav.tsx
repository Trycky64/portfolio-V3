"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import type { Locale } from "@/lib/i18n/context";

interface MobileNavItem {
  id: string;
  label: string;
  href: string;
  active: boolean;
}

interface MobileNavProps {
  items: MobileNavItem[];
  locale: Locale;
  targetLocale: Locale;
  targetPath: string;
  labels: {
    navigation: string;
    open: string;
    close: string;
  };
}

export function MobileNav({
  items,
  locale,
  targetLocale,
  targetPath,
  labels,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-surface/60 text-text-primary"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="sr-only">
          {open ? labels.close : labels.open}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          id={menuId}
          className="absolute right-0 top-[calc(100%+0.5rem)] w-[min(19rem,calc(100vw-2rem))] rounded-lg border border-border bg-background p-2 shadow-xl"
        >
          <nav aria-label={labels.navigation} className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={
                  item.active
                    ? "focus-ring rounded-md bg-surface px-3 py-3 text-sm font-medium text-text-primary"
                    : "focus-ring rounded-md px-3 py-3 text-sm font-medium text-text-muted transition-colors hover:bg-surface/70 hover:text-text-primary"
                }
              >
                {item.label}
              </Link>
            ))}

            <div className="my-1 border-t border-border" />

            <Link
              href={targetPath}
              hrefLang={targetLocale}
              lang={targetLocale}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-text-muted transition-colors hover:bg-surface/70 hover:text-text-primary"
              aria-label={
                locale === "fr" ? "Switch to English" : "Passer en français"
              }
            >
              {locale === "fr" ? "English" : "Français"}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
