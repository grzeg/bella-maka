import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PlainTextBody } from "@/components/blog/plain-text-body";
import { PostGallery } from "@/components/blog/post-gallery";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-text";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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

  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    },
    // Page-level openGraph replaces the layout's wholesale, so only override
    // it when the post has its own image to share.
    ...(post.cover && {
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt,
        url: `${site.url}/${locale}${path}`,
        siteName: site.name,
        publishedTime: post.date,
        images: [{ url: post.cover.src, alt: post.cover.alt }],
      },
    }),
  };
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
  const dict = getDictionary(locale);
  const foreign = post.lang !== locale;

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Link
        href={`/${locale}/blog`}
        className="text-muted-foreground hover:text-primary focus-visible:ring-ring/50 rounded-sm text-sm focus-visible:ring-[3px] focus-visible:outline-none"
      >
        ← {dict.blog.backToBlog}
      </Link>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <time
          dateTime={post.date}
          className="text-muted-foreground text-sm tabular-nums"
        >
          {formatPostDate(post.date, locale)}
        </time>
        {post.source === "facebook" && (
          <Badge variant="secondary">{dict.blog.fromFacebook}</Badge>
        )}
      </div>
      <h1
        lang={foreign ? post.lang : undefined}
        className="font-heading text-foreground mt-1 text-3xl font-bold sm:text-4xl"
      >
        {post.title}
      </h1>
      {foreign && (
        <p className="text-muted-foreground mt-2 text-sm italic">
          {dict.blog.writtenIn[post.lang]}
        </p>
      )}

      {post.cover && (
        <div className="ring-foreground/10 relative mt-8 aspect-[4/3] overflow-hidden rounded-lg ring-1">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div
        lang={foreign ? post.lang : undefined}
        className="prose-content text-foreground/90 [&_h2]:font-heading mt-6 max-w-none text-base leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:mt-1 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5"
      >
        {post.format === "text" ? (
          <PlainTextBody text={post.content} />
        ) : (
          <MDXRemote source={post.content} />
        )}
      </div>

      <PostGallery images={post.gallery} locale={locale} />

      {post.source === "facebook" && post.sourceUrl && (
        <p className="border-border mt-10 border-t pt-6 text-sm">
          <a
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary focus-visible:ring-ring/50 rounded-sm underline underline-offset-4 focus-visible:ring-[3px] focus-visible:outline-none"
          >
            {dict.blog.viewOnFacebook}
            <span className="sr-only"> {dict.blog.opensInNewTab}</span>
          </a>
        </p>
      )}
    </article>
  );
}
