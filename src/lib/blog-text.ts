import type { Locale } from "@/i18n/config";

// Pure text helpers for blog posts. Facebook posts have no title, no excerpt
// and use bare line breaks instead of Markdown, so these derive the missing
// fields and tokenize plain text safely (without running it through MDX,
// where a stray "<3" or "{" would break the build).

export const TITLE_MAX_LENGTH = 80;
export const EXCERPT_MAX_LENGTH = 240;

const ELLIPSIS = "…";

/** Strips the Markdown syntax that shows up in posts, leaving readable text. */
export function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/^\s{0,3}>\s?/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Cuts text to at most `max` characters on a word boundary, adding "…". */
export function truncateAtWord(text: string, max: number): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;

  const hardCut = normalized.slice(0, max - ELLIPSIS.length);
  const lastSpace = hardCut.lastIndexOf(" ");
  const cut = lastSpace > 0 ? hardCut.slice(0, lastSpace) : hardCut;
  return `${cut.replace(/[\s,;:.!?–—-]+$/, "")}${ELLIPSIS}`;
}

/** Title fallback: the first sentence (or line) of the body. */
export function deriveTitle(body: string): string {
  const firstLine =
    body
      .split("\n")
      .map((line) => toPlainText(line))
      .find((line) => line.length > 0) ?? "";
  const sentence = firstLine.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? firstLine;
  return truncateAtWord(sentence, TITLE_MAX_LENGTH);
}

/** Excerpt fallback: the start of the body, capped at the schema limit. */
export function deriveExcerpt(body: string): string {
  return truncateAtWord(toPlainText(body), EXCERPT_MAX_LENGTH);
}

export type TextSegment =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

/** One paragraph = lines separated by single line breaks. */
export type TextParagraph = TextSegment[][];

const URL_PATTERN = /https?:\/\/[^\s<>"]+[^\s<>".,;:!?)\]'"]/g;

function tokenizeLine(line: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let cursor = 0;

  for (const match of line.matchAll(URL_PATTERN)) {
    const start = match.index;
    if (start > cursor) {
      segments.push({ type: "text", value: line.slice(cursor, start) });
    }
    segments.push({ type: "link", value: match[0], href: match[0] });
    cursor = start + match[0].length;
  }

  if (cursor < line.length) {
    segments.push({ type: "text", value: line.slice(cursor) });
  }
  return segments;
}

/**
 * Splits plain text into paragraphs (blank-line separated) and lines,
 * turning bare http(s) URLs into link segments.
 */
export function tokenizePlainText(text: string): TextParagraph[] {
  return text
    .replace(/\r\n?/g, "\n")
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .map(tokenizeLine),
    )
    .filter((paragraph) => paragraph.length > 0);
}

const dateLocaleByLocale: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-US",
};

/**
 * Formats a YYYY-MM-DD post date for display. Pinned to UTC so a date-only
 * string never shifts to the previous day in western time zones.
 */
export function formatPostDate(date: string, locale: Locale): string {
  return new Date(date).toLocaleDateString(dateLocaleByLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
