import { describe, expect, it } from "vitest";
import { defaultLocale, isLocale, locales } from "./config";

describe("isLocale", () => {
  it("accepts every configured locale", () => {
    for (const locale of locales) {
      expect(isLocale(locale)).toBe(true);
    }
  });

  it("rejects unknown locale strings", () => {
    expect(isLocale("de")).toBe(false);
    expect(isLocale("")).toBe(false);
    expect(isLocale("PL")).toBe(false);
  });

  it("keeps the default locale within the configured list", () => {
    expect(locales).toContain(defaultLocale);
  });
});
