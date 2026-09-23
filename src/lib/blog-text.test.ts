import { describe, expect, it } from "vitest";
import {
  EXCERPT_MAX_LENGTH,
  TITLE_MAX_LENGTH,
  deriveExcerpt,
  deriveTitle,
  formatPostDate,
  toPlainText,
  tokenizePlainText,
  truncateAtWord,
} from "./blog-text";

describe("toPlainText", () => {
  it("strips common Markdown syntax", () => {
    expect(
      toPlainText("## Nowość\n\n**Pizza** z [pieca](https://x.pl) i `sos`"),
    ).toBe("Nowość Pizza z pieca i sos");
  });

  it("keeps emoji and hashtags from Facebook copy", () => {
    expect(toPlainText("Zapraszamy 🍕 #bellamaka")).toBe(
      "Zapraszamy 🍕 #bellamaka",
    );
  });
});

describe("truncateAtWord", () => {
  it("returns short text unchanged", () => {
    expect(truncateAtWord("Krótki tekst", 50)).toBe("Krótki tekst");
  });

  it("cuts on a word boundary and appends an ellipsis within the limit", () => {
    const result = truncateAtWord("Pizza z pieca, prosto do Ciebie", 20);
    expect(result).toBe("Pizza z pieca…");
    expect(result.length).toBeLessThanOrEqual(20);
  });

  it("hard-cuts a single long word", () => {
    expect(truncateAtWord("a".repeat(30), 10)).toBe(`${"a".repeat(9)}…`);
  });
});

describe("deriveTitle", () => {
  it("uses the first sentence of the first non-empty line", () => {
    expect(
      deriveTitle("\nNowa pizza w karcie! Spróbujcie koniecznie.\nDruga linia"),
    ).toBe("Nowa pizza w karcie!");
  });

  it("uses the whole first line when it has no sentence end", () => {
    expect(deriveTitle("Promocja weekendowa 🍕\n-20% na wszystko")).toBe(
      "Promocja weekendowa 🍕",
    );
  });

  it("does not split on dots inside numbers", () => {
    expect(deriveTitle("Otwarte od 12.00 do 22.00 w sobotę")).toBe(
      "Otwarte od 12.00 do 22.00 w sobotę",
    );
  });

  it("caps long titles", () => {
    expect(deriveTitle("słowo ".repeat(40)).length).toBeLessThanOrEqual(
      TITLE_MAX_LENGTH,
    );
  });
});

describe("deriveExcerpt", () => {
  it("flattens line breaks and caps at the excerpt limit", () => {
    const excerpt = deriveExcerpt(
      `Linia pierwsza\nLinia druga\n\n${"x ".repeat(300)}`,
    );
    expect(excerpt.startsWith("Linia pierwsza Linia druga")).toBe(true);
    expect(excerpt.length).toBeLessThanOrEqual(EXCERPT_MAX_LENGTH);
  });
});

describe("tokenizePlainText", () => {
  it("splits paragraphs on blank lines and keeps single line breaks", () => {
    expect(tokenizePlainText("Linia 1\nLinia 2\n\n\nAkapit 2")).toEqual([
      [
        [{ type: "text", value: "Linia 1" }],
        [{ type: "text", value: "Linia 2" }],
      ],
      [[{ type: "text", value: "Akapit 2" }]],
    ]);
  });

  it("turns bare URLs into links without trailing punctuation", () => {
    expect(tokenizePlainText("Zamów: https://pyszne.pl/bella.")).toEqual([
      [
        [
          { type: "text", value: "Zamów: " },
          {
            type: "link",
            value: "https://pyszne.pl/bella",
            href: "https://pyszne.pl/bella",
          },
          { type: "text", value: "." },
        ],
      ],
    ]);
  });

  it("leaves characters MDX would reject as plain text", () => {
    expect(tokenizePlainText("Kochamy was <3 {serio}")).toEqual([
      [[{ type: "text", value: "Kochamy was <3 {serio}" }]],
    ]);
  });

  it("normalizes Windows line endings", () => {
    expect(tokenizePlainText("A\r\nB\r\n\r\nC")).toHaveLength(2);
  });
});

describe("formatPostDate", () => {
  it("formats per locale without shifting the day", () => {
    expect(formatPostDate("2026-09-01", "pl")).toBe("1 września 2026");
    expect(formatPostDate("2026-09-01", "en")).toBe("September 1, 2026");
  });
});
