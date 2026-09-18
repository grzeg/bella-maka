"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const localeLabels: Record<Locale, string> = { pl: "PL", en: "EN" };

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav
      aria-label={label}
      className="flex items-center gap-1 text-sm font-medium"
    >
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && (
            <span className="text-foreground/30 mx-1" aria-hidden="true">
              /
            </span>
          )}
          {loc === locale ? (
            <span className="text-primary" aria-current="page">
              {localeLabels[loc]}
            </span>
          ) : (
            <Link
              href={`/${loc}${rest ? `/${rest}` : ""}`}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              {localeLabels[loc]}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
