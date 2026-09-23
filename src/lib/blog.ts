import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { isLocale, type Locale } from "@/i18n/config";
import { deriveExcerpt, deriveTitle } from "./blog-text";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostImage = {
  /** Path under /public, e.g. "/images/blog/<slug>/01.jpg". */
  src: string;
  alt: string;
};

export type PostSource = "site" | "facebook";

/**
 * "mdx" runs the body through MDX (headings, lists, links). "text" renders it
 * verbatim with preserved line breaks — the default for Facebook posts, whose
 * copy is plain text and may contain characters MDX would choke on.
 */
export type PostFormat = "mdx" | "text";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: PostImage | null;
  gallery: PostImage[];
  source: PostSource;
  /** Link to the original post (e.g. the Facebook permalink). */
  sourceUrl: string | null;
  /** Language the post is written in; posts are shown on both locales. */
  lang: Locale;
  format: PostFormat;
};

export type Post = PostMeta & { content: string };

function fail(slug: string, message: string): never {
  throw new Error(`content/blog/${slug}.mdx: ${message}`);
}

function optionalString(
  slug: string,
  data: Record<string, unknown>,
  key: string,
): string | null {
  const value = data[key];
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") fail(slug, `"${key}" must be a string`);
  return value.trim();
}

function parseImage(slug: string, value: unknown, field: string): PostImage {
  if (typeof value !== "object" || value === null) {
    fail(slug, `"${field}" must be an object with "src" and "alt"`);
  }
  const { src, alt } = value as Record<string, unknown>;
  if (typeof src !== "string" || !src.startsWith("/")) {
    fail(slug, `"${field}.src" must be an absolute path under /public`);
  }
  // Alt text is required for accessibility; describe the photo, don't repeat
  // the post title.
  if (typeof alt !== "string" || alt.trim() === "") {
    fail(slug, `"${field}.alt" is required`);
  }
  return { src, alt: alt.trim() };
}

function parseDate(slug: string, value: unknown): string {
  // gray-matter turns unquoted YAML dates into Date objects.
  const date =
    value instanceof Date
      ? value.toISOString().slice(0, 10)
      : typeof value === "string"
        ? value
        : null;
  if (!date || Number.isNaN(new Date(date).getTime())) {
    fail(slug, `"date" is required (YYYY-MM-DD)`);
  }
  return date;
}

/** Validates frontmatter and fills in what Facebook posts don't have. */
export function parsePost(
  slug: string,
  data: Record<string, unknown>,
  content: string,
): Post {
  const source = optionalString(slug, data, "source") ?? "site";
  if (source !== "site" && source !== "facebook") {
    fail(slug, `"source" must be "site" or "facebook"`);
  }

  const lang = optionalString(slug, data, "lang") ?? "pl";
  if (!isLocale(lang)) fail(slug, `"lang" must be a supported locale`);

  const format =
    optionalString(slug, data, "format") ??
    (source === "facebook" ? "text" : "mdx");
  if (format !== "mdx" && format !== "text") {
    fail(slug, `"format" must be "mdx" or "text"`);
  }

  const gallery = data.gallery ?? [];
  if (!Array.isArray(gallery)) fail(slug, `"gallery" must be a list`);

  const sourceUrl = optionalString(slug, data, "sourceUrl");
  if (sourceUrl && !/^https:\/\//.test(sourceUrl)) {
    fail(slug, `"sourceUrl" must be an https URL`);
  }

  return {
    slug,
    title: optionalString(slug, data, "title") ?? deriveTitle(content),
    date: parseDate(slug, data.date),
    excerpt: optionalString(slug, data, "excerpt") ?? deriveExcerpt(content),
    cover: data.cover ? parseImage(slug, data.cover, "cover") : null,
    gallery: gallery.map((image, i) =>
      parseImage(slug, image, `gallery[${i}]`),
    ),
    source,
    sourceUrl,
    lang,
    format,
    content,
  };
}

function readPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return parsePost(slug, data, content);
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = readPost(file.replace(/\.mdx$/, ""));
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function getPostBySlug(slug: string): Post | null {
  // Slugs come from the URL; never let them escape content/blog.
  if (!SLUG_PATTERN.test(slug)) return null;
  if (!fs.existsSync(path.join(BLOG_DIR, `${slug}.mdx`))) return null;
  return readPost(slug);
}
