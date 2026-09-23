import { describe, expect, it } from "vitest";
import { getAllPosts, getPostBySlug, parsePost } from "./blog";

const facebookBody =
  "Nowa pizza w karcie! Spróbujcie koniecznie.\n\n#bellamaka";

describe("parsePost", () => {
  it("fills in title, excerpt and defaults for a Facebook post", () => {
    const post = parsePost(
      "nowa-pizza",
      {
        date: "2026-09-01",
        source: "facebook",
        sourceUrl: "https://www.facebook.com/bellamakabrzegdolny/posts/1",
      },
      facebookBody,
    );
    expect(post.title).toBe("Nowa pizza w karcie!");
    expect(post.excerpt).toBe(
      "Nowa pizza w karcie! Spróbujcie koniecznie. #bellamaka",
    );
    expect(post.format).toBe("text");
    expect(post.lang).toBe("pl");
    expect(post.cover).toBeNull();
    expect(post.gallery).toEqual([]);
  });

  it("keeps explicit frontmatter over derived values", () => {
    const post = parsePost(
      "wpis",
      {
        title: "Własny tytuł",
        excerpt: "Własny opis",
        date: "2026-09-01",
        format: "mdx",
        source: "facebook",
        lang: "en",
      },
      facebookBody,
    );
    expect(post.title).toBe("Własny tytuł");
    expect(post.excerpt).toBe("Własny opis");
    expect(post.format).toBe("mdx");
    expect(post.lang).toBe("en");
  });

  it("defaults site posts to MDX", () => {
    const post = parsePost("wpis", { title: "T", date: "2026-09-01" }, "Tekst");
    expect(post.source).toBe("site");
    expect(post.format).toBe("mdx");
  });

  it("accepts YAML dates parsed into Date objects", () => {
    const post = parsePost("wpis", { date: new Date("2026-09-01") }, "Tekst");
    expect(post.date).toBe("2026-09-01");
  });

  it("parses cover and gallery images", () => {
    const post = parsePost(
      "wpis",
      {
        date: "2026-09-01",
        cover: { src: "/images/blog/wpis/01.jpg", alt: "Pizza" },
        gallery: [{ src: "/images/blog/wpis/02.jpg", alt: "Piec" }],
      },
      "Tekst",
    );
    expect(post.cover).toEqual({
      src: "/images/blog/wpis/01.jpg",
      alt: "Pizza",
    });
    expect(post.gallery).toHaveLength(1);
  });

  it.each([
    [{}, /"date" is required/],
    [{ date: "2026-09-01", source: "instagram" }, /"source"/],
    [{ date: "2026-09-01", lang: "de" }, /"lang"/],
    [{ date: "2026-09-01", format: "html" }, /"format"/],
    [{ date: "2026-09-01", sourceUrl: "http://fb.com/x" }, /"sourceUrl"/],
    [
      { date: "2026-09-01", cover: { src: "/a.jpg" } },
      /"cover.alt" is required/,
    ],
    [
      { date: "2026-09-01", gallery: [{ src: "a.jpg", alt: "A" }] },
      /"gallery\[0\].src"/,
    ],
  ])("rejects invalid frontmatter %j", (data, error) => {
    expect(() => parsePost("wpis", data, "Tekst")).toThrow(error);
  });
});

describe("content/blog", () => {
  it("parses every committed post", () => {
    expect(getAllPosts().length).toBeGreaterThan(0);
  });

  it("ignores slugs that could escape the content directory", () => {
    expect(getPostBySlug("../package")).toBeNull();
    expect(getPostBySlug("Witamy")).toBeNull();
  });
});
