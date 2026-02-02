"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "qp_cookie_consent";

type Consent = "accepted" | "refused" | null;

export function CookieConsent() {
  const { t } = useI18n();
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;
    if (stored) setConsent(stored);
  }, []);

  const handleChoice = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value!);
    setConsent(value);
  };

  if (consent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-900/95 p-4 shadow-lg backdrop-blur">
      <p className="text-sm text-slate-200">
        {t("cookies.text")}
      </p>

      <div className="mt-3 flex flex-wrap gap-3">
        <Button onClick={() => handleChoice("accepted")}>
          {t("cookies.accept")}
        </Button>
        <Button variant="outline" onClick={() => handleChoice("refused")}>
          {t("cookies.refuse")}
        </Button>
      </div>
    </div>
  );
}
