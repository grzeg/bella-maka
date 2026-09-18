import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/menu",
    "/galeria",
    "/opinie",
    "/o-nas",
    "/blog",
    "/kontakt",
  ];

  const staticRoutes = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified: new Date(),
    })),
  );

  const postRoutes = locales.flatMap((locale) =>
    getAllPosts().map((post) => ({
      url: `${site.url}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  );

  return [...staticRoutes, ...postRoutes];
}
