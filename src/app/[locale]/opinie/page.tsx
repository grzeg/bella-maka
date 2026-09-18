import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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
    title: "Opinie",
    description: `Opinie klientów o pizzerii ${site.name} w ${site.cityLocative}.`,
  };
}

export default async function OpiniePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
        {dict.reviews.title}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-prose">
        {dict.reviews.seeMoreOn}{" "}
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary underline underline-offset-2"
        >
          {dict.reviews.facebook}
        </a>
        .
      </p>

      {sortedReviews.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {sortedReviews.map((review, i) => (
            <div
              key={i}
              className="border-border bg-card rounded-xl border p-5"
            >
              <p className="text-brand-terracotta text-sm">
                {"★".repeat(review.rating)}
              </p>
              <p className="text-card-foreground mt-2 text-sm">{review.text}</p>
              <p className="text-muted-foreground mt-3 text-sm font-medium">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground mt-8">{dict.reviews.emptyState}</p>
      )}
    </section>
  );
}
