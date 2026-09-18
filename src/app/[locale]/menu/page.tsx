import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";
import { menuHighlights, pizzaSizes } from "@/data/menu";
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
    title: "Menu",
    description: `Menu pizzerii ${site.name} w ${site.cityLocative} — wybrane pizze i ceny. Pełna karta i zamówienia na pyszne.pl.`,
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
        {dict.menu.title}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-prose">{dict.menu.note}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {menuHighlights.map((item) => (
          <Card key={item.name}>
            <Image
              src={item.image}
              alt={`Pizza ${item.name}`}
              width={640}
              height={420}
              className="h-44 w-full object-cover"
            />
            <CardContent>
              <div className="flex items-start justify-between gap-2">
                <p className="font-heading text-foreground text-lg font-semibold">
                  {item.name}
                </p>
                <div className="flex gap-1">
                  {item.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="shrink-0">
                      {tag === "wege" ? dict.menu.tagWege : dict.menu.tagOstre}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mt-1.5 text-sm">
                {item.description}
              </p>
              <div className="text-foreground/80 mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium tabular-nums">
                {item.prices.map((price, i) => (
                  <span key={pizzaSizes[i]}>
                    {pizzaSizes[i]}: {price} zł
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="border-border bg-card mt-10 rounded-xl border p-6 text-center sm:p-8">
        <p className="font-heading text-foreground text-xl font-semibold">
          {dict.menu.partialTitle}
        </p>
        <p className="text-muted-foreground mx-auto mt-1.5 max-w-prose text-sm">
          {dict.menu.partialSubtitle}
        </p>
        <Button
          size="lg"
          className="mt-4"
          nativeButton={false}
          render={
            <a
              href={site.social.pyszne}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          {dict.menu.partialCta}
        </Button>
      </div>
    </section>
  );
}
