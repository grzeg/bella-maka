import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { locales } from "./config";
import { getDictionary } from "./dictionaries";

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");

describe("gallery photo alts", () => {
  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file));

  it.each(locales)("describes every gallery file in %s", (locale) => {
    const alts: Record<string, string> =
      getDictionary(locale).gallery.photoAlts;
    for (const file of files) {
      expect(alts[file], file).toBeTruthy();
    }
    expect(Object.keys(alts).sort()).toEqual([...files].sort());
  });

  it("does not reuse the same alt for two different photos", () => {
    for (const locale of locales) {
      const alts = Object.values(getDictionary(locale).gallery.photoAlts);
      expect(new Set(alts).size).toBe(alts.length);
    }
  });
});
