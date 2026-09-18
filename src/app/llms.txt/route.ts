import { site } from "@/data/site";
import { menuHighlights, menuNote } from "@/data/menu";
import { getAllPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

// llms.txt (https://llmstxt.org) — plain-text summary for AI agents/LLMs
// that can't (or shouldn't have to) render the full site to find basics:
// address, menu highlights, order link, page map per locale.
export function GET() {
  const pages = [
    { path: "", pl: "Strona główna", en: "Home" },
    { path: "/menu", pl: "Menu", en: "Menu" },
    { path: "/galeria", pl: "Galeria", en: "Gallery" },
    { path: "/opinie", pl: "Opinie", en: "Reviews" },
    { path: "/o-nas", pl: "O nas", en: "About" },
    { path: "/blog", pl: "Blog", en: "Blog" },
    { path: "/kontakt", pl: "Kontakt", en: "Contact" },
  ];

  const posts = getAllPosts();

  const pageLines = locales
    .map((locale) =>
      pages
        .map(
          (p) =>
            `- [${locale === "pl" ? p.pl : p.en}](${site.url}/${locale}${p.path})`,
        )
        .join("\n"),
    )
    .join("\n\n");

  const menuLines = menuHighlights
    .map(
      (item) =>
        `- ${item.name} (${item.prices.join("/")} zł, 28/35/45 cm): ${item.description}`,
    )
    .join("\n");

  const postLines = posts.length
    ? locales
        .map((locale) =>
          posts
            .map(
              (post) =>
                `- [${post.title}](${site.url}/${locale}/blog/${post.slug})`,
            )
            .join("\n"),
        )
        .join("\n\n")
    : "(brak wpisów / no posts yet)";

  const body = `# ${site.name}

> ${site.description}

Pizzeria w ${site.cityLocative}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Zamówienia online: ${site.social.pyszne}

## Menu (skrót / highlights)

${menuLines}

${menuNote}

## Strony / Pages (PL, EN)

${pageLines}

## Blog

${postLines}

## Dane / Data

- Telefon / Phone: ${site.phone}
- Facebook: ${site.social.facebook}
- Zamówienia / Orders: ${site.social.pyszne}
- Sitemap: ${site.url}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
