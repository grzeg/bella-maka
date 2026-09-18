import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/blog";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const dateLocaleByLocale: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-US",
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
    title: "Blog",
    description: `Nowości i promocje pizzerii ${site.name} w ${site.cityLocative}.`,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
        {dict.blog.title}
      </h1>

      <div className="mt-8 space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-border border-b pb-8 last:border-0"
          >
            <time className="text-muted-foreground text-sm tabular-nums">
              {new Date(post.date).toLocaleDateString(
                dateLocaleByLocale[locale],
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )}
            </time>
            <h2 className="font-heading text-foreground mt-1 text-xl font-semibold">
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="hover:text-primary"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
