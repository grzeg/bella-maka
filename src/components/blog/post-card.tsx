import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { PostMeta } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog-text";

/** Blog list entry: optional cover thumbnail, date, source badge, excerpt. */
export function PostCard({ post, locale }: { post: PostMeta; locale: Locale }) {
  const dict = getDictionary(locale);
  const href = `/${locale}/blog/${post.slug}`;
  const foreign = post.lang !== locale;

  return (
    <article className="border-border flex flex-col gap-4 border-b pb-8 last:border-0 sm:flex-row">
      {post.cover && (
        <div className="ring-foreground/10 relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg ring-1 sm:w-48">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            sizes="(min-width: 640px) 192px, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
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
        <h2
          lang={foreign ? post.lang : undefined}
          className="font-heading text-foreground mt-1 text-xl font-semibold"
        >
          <Link
            href={href}
            className="hover:text-primary focus-visible:ring-ring/50 rounded-sm focus-visible:ring-[3px] focus-visible:outline-none"
          >
            {post.title}
          </Link>
        </h2>
        <p
          lang={foreign ? post.lang : undefined}
          className="text-muted-foreground mt-2 text-sm"
        >
          {post.excerpt}
        </p>
        {foreign && (
          <p className="text-muted-foreground mt-2 text-xs italic">
            {dict.blog.writtenIn[post.lang]}
          </p>
        )}
      </div>
    </article>
  );
}
