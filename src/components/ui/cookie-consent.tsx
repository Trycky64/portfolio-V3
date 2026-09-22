"use client";

import { useSyncExternalStore } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "qp_cookie_consent";
const CONSENT_CHANGE_EVENT = "qp_cookie_consent_change";

type Consent = "accepted" | "refused" | null;

function getConsentSnapshot(): Consent {
  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "accepted" || stored === "refused") {
    return stored;
  }

  return null;
}

function getServerSnapshot(): Consent {
  return null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
  };
}

export function CookieConsent() {
  const { t } = useI18n();
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerSnapshot,
  );

  const handleChoice = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  };

  if (consent) {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-900/95 p-4 shadow-lg backdrop-blur">
      <p className="text-sm text-slate-200">{t("cookies.text")}</p>

      <div className="mt-3 flex flex-wrap gap-3">
        <Button onClick={() => handleChoice("accepted")}>
          {t("cookies.accept")}
        </Button>

        <Button
          variant="secondary"
          onClick={() => handleChoice("refused")}
        >
          {t("cookies.refuse")}
        </Button>
      </div>
    </div>
  );
}
