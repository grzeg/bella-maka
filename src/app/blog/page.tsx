import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: `Nowości i promocje pizzerii ${site.name} w ${site.cityLocative}.`,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Blog
      </h1>

      <div className="mt-8 space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-border pb-8 last:border-0">
            <time className="text-sm tabular-nums text-muted-foreground">
              {new Date(post.date).toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
