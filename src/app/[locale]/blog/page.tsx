import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/blog/post-card";
import { getAllPosts } from "@/lib/blog";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/metadata";

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
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/blog",
    title: dict.meta.blog.title,
    description: dict.meta.blog.description,
    imageAlt: dict.meta.homeImageAlt,
  });
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

      {posts.length === 0 ? (
        <p className="text-muted-foreground mt-8">{dict.blog.empty}</p>
      ) : (
        <div className="mt-8 space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      )}
    </section>
  );
}
