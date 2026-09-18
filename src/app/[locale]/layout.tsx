import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bodoni_Moda, Karla, Pacifico } from "next/font/google";
import "../globals.css";
import { site } from "@/data/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";

// Italiana (as suggested) has no latin-ext subset, so it drops Polish diacritics
// (ą, ę, ć, ł, ń, ó, ś, ź, ż) entirely. Bodoni Moda gives the same high-contrast
// Italian display-serif look — it's the actual Bodoni, an Italian typeface — with
// full Polish support.
const heading = Bodoni_Moda({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const body = Karla({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

// Bold brush script matching the hand-lettered "Bella Mąka" in the logo —
// used only for the navbar/footer wordmark, not for running headings.
const brand = Pacifico({
  variable: "--font-brand",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const ogLocaleByLocale: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_US",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — Pizzeria w ${site.cityLocative}`,
      template: `%s — ${site.name}`,
    },
    description: site.description,
    openGraph: {
      title: `${site.name} — Pizzeria w ${site.cityLocative}`,
      description: site.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      locale: ogLocaleByLocale[locale],
      type: "website",
    },
  };
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  image: `${site.url}/images/logo/badge.jpg`,
  url: site.url,
  telephone: site.phone,
  servesCuisine: "Pizza",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: "PL",
  },
  sameAs: [site.social.facebook, site.social.pyszne],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${heading.variable} ${body.variable} ${brand.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <CookieConsent gaId={process.env.NEXT_PUBLIC_GA_ID} locale={locale} />
      </body>
    </html>
  );
}
