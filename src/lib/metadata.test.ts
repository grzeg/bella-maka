import { describe, expect, it } from "vitest";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "./metadata";

const base = {
  locale: "pl" as const,
  title: "Menu i ceny pizzy",
  description: "Opis menu.",
  imageAlt: "Alt",
};

describe("buildMetadata", () => {
  it("sets a per-page canonical and hreflang alternates", () => {
    const meta = buildMetadata({ ...base, path: "/menu" });
    expect(meta.alternates?.canonical).toBe("/pl/menu");
    expect(meta.alternates?.languages).toEqual({
      pl: "/pl/menu",
      en: "/en/menu",
    });
  });

  it("uses the locale root as canonical for the homepage", () => {
    const meta = buildMetadata({ ...base, locale: "en" });
    expect(meta.alternates?.canonical).toBe("/en");
  });

  it("lets the layout template wrap normal titles but not absolute ones", () => {
    expect(buildMetadata(base).title).toBe("Menu i ceny pizzy");
    expect(buildMetadata({ ...base, absoluteTitle: true }).title).toEqual({
      absolute: "Menu i ceny pizzy",
    });
  });

  it("keeps social title and description in sync with the page", () => {
    const meta = buildMetadata({ ...base, path: "/menu" });
    expect(meta.openGraph?.title).toBe("Menu i ceny pizzy — Bella Mąka");
    expect(meta.openGraph?.description).toBe("Opis menu.");
    expect(meta.twitter?.title).toBe("Menu i ceny pizzy — Bella Mąka");
  });

  it("falls back to the hero poster when the page has no image", () => {
    const meta = buildMetadata(base);
    expect(meta.openGraph?.images).toEqual([
      expect.objectContaining({
        url: "/images/hero/poster.jpg",
        alt: "Alt",
      }),
    ]);
  });
});

describe("page metadata copy in the dictionaries", () => {
  it("has a unique title and description per page in every locale", () => {
    for (const locale of locales) {
      const dict = getDictionary(locale);
      const entries = [
        dict.meta.home,
        dict.meta.menu,
        dict.meta.gallery,
        dict.meta.contact,
        dict.meta.reviews,
        dict.meta.blog,
        dict.meta.privacy,
        { title: dict.about.title, description: dict.about.metaDescription },
      ];
      expect(new Set(entries.map((e) => e.title)).size).toBe(entries.length);
      expect(new Set(entries.map((e) => e.description)).size).toBe(
        entries.length,
      );
    }
  });

  it("translates the page titles instead of reusing the Polish ones", () => {
    const pl = getDictionary("pl").meta;
    const en = getDictionary("en").meta;
    expect(en.menu.title).not.toBe(pl.menu.title);
    expect(en.contact.description).not.toBe(pl.contact.description);
  });
});
