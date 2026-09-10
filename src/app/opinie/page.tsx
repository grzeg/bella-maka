import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Opinie",
  description: `Opinie klientów o pizzerii ${site.name} w ${site.cityLocative}.`,
};

// TODO: podmienić na prawdziwe opinie z Google/Facebooka/pyszne.pl (albo osadzić widżet Google Reviews)
const placeholderReviews = [
  {
    author: "Klient/-ka",
    text: "Miejsce na prawdziwe opinie z Google, Facebooka lub pyszne.pl.",
    rating: 5,
  },
  {
    author: "Klient/-ka",
    text: "Warto podpiąć widżet Google Reviews — wzmacnia lokalne SEO.",
    rating: 5,
  },
];

export default function OpiniePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Opinie
      </h1>
      <p className="mt-3 max-w-prose text-muted-foreground">
        Zobacz też pełne opinie na{" "}
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary"
        >
          Facebooku
        </a>
        .
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {placeholderReviews.map((review, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-brand-terracotta">
              {"★".repeat(review.rating)}
            </p>
            <p className="mt-2 text-sm text-card-foreground">{review.text}</p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              — {review.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
