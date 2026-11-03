import type { Metadata } from "next";
import { site } from "@/data/site";
import { locales, type Locale } from "@/i18n/config";

const ogLocaleByLocale: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_US",
};

export type SocialImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

// Fallback share image — the same hero poster the layout used before.
export const defaultSocialImage = {
  url: "/images/hero/poster.jpg",
  width: 1440,
  height: 1372,
} as const;

type BuildMetadataInput = {
  locale: Locale;
  /** Path without the locale prefix, e.g. "/menu". Empty string for home. */
  path?: string;
  title: string;
  description: string;
  /** Skip the layout's `%s — Bella Mąka` title template (used for home). */
  absoluteTitle?: boolean;
  /** Share image; falls back to the hero poster with `imageAlt` as its alt. */
  image?: SocialImage;
  imageAlt: string;
  type?: "website" | "article";
  publishedTime?: string;
};

/**
 * Per-page metadata. A page-level `openGraph`/`twitter` replaces the layout's
 * wholesale, so every page has to supply its own complete set — otherwise all
 * pages share the homepage's social title/description. The canonical URL is
 * also per page: inheriting the layout's would point every page at the
 * homepage.
 */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  absoluteTitle = false,
  image,
  imageAlt,
  type = "website",
  publishedTime,
}: BuildMetadataInput): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} — ${site.name}`;
  const socialImage: SocialImage = image ?? {
    ...defaultSocialImage,
    alt: imageAlt,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    },
    openGraph: {
      title: socialTitle,
      description,
      url: `${site.url}/${locale}${path}`,
      siteName: site.name,
      locale: ogLocaleByLocale[locale],
      type,
      ...(publishedTime && { publishedTime }),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  };
}
