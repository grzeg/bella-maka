"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Consent = "granted" | "denied";

const STORAGE_KEY = "bella-maka-cookie-consent";

export function CookieConsent({ gaId }: { gaId?: string }) {
  const [state, setState] = useState<{ consent: Consent | null; hydrated: boolean }>({
    consent: null,
    hydrated: false,
  });
  const { consent, hydrated } = state;

  useEffect(() => {
    // localStorage doesn't exist on the server — read it once after mount
    // instead of guessing a value at SSR time and risking a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({
      consent: window.localStorage.getItem(STORAGE_KEY) as Consent | null,
      hydrated: true,
    });
  }, []);

  function choose(value: Consent) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setState((prev) => ({ ...prev, consent: value }));
  }

  return (
    <>
      {consent === "granted" && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {hydrated && consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card px-4 py-4 shadow-lg sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-card-foreground">
              Używamy plików cookie do analizy ruchu na stronie (Google Analytics).
              Możesz zaakceptować lub odrzucić — zobacz{" "}
              <Link href="/polityka-prywatnosci" className="underline underline-offset-2">
                politykę prywatności
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <Button variant="outline" onClick={() => choose("denied")}>
                Odrzuć
              </Button>
              <Button onClick={() => choose("granted")}>Akceptuj</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
