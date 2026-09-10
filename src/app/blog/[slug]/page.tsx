import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <time className="text-sm tabular-nums text-muted-foreground">
        {new Date(post.date).toLocaleDateString("pl-PL", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
      <h1 className="mt-1 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {post.title}
      </h1>
      <div className="prose-content mt-6 max-w-none text-base leading-relaxed text-foreground/90 [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_li]:mt-1 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
