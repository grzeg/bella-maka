import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { isLocale, locales, type Locale } from "@/i18n/config";

const dateLocaleByLocale: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-US",
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllPosts().map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <time className="text-muted-foreground text-sm tabular-nums">
        {new Date(post.date).toLocaleDateString(dateLocaleByLocale[locale], {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
      <h1 className="font-heading text-foreground mt-1 text-3xl font-bold sm:text-4xl">
        {post.title}
      </h1>
      <div className="prose-content text-foreground/90 [&_h2]:font-heading mt-6 max-w-none text-base leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:mt-1 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
