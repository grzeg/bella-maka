import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";
import { menuHighlights, menuNote, pizzaSizes } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: `Menu pizzerii ${site.name} w ${site.cityLocative} — wybrane pizze i ceny. Pełna karta i zamówienia na pyszne.pl.`,
};

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Menu
      </h1>
      <p className="mt-3 max-w-prose text-muted-foreground">{menuNote}</p>

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
                <p className="font-heading text-lg font-semibold text-foreground">
                  {item.name}
                </p>
                <div className="flex gap-1">
                  {item.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="shrink-0">
                      {tag === "wege" ? "wege" : "ostre"}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium tabular-nums text-foreground/80">
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

      <div className="mt-10 rounded-xl border border-border bg-card p-6 text-center sm:p-8">
        <p className="font-heading text-xl font-semibold text-foreground">
          To tylko część karty
        </p>
        <p className="mx-auto mt-1.5 max-w-prose text-sm text-muted-foreground">
          Pełne menu — 20 rodzajów pizzy, sałatki, napoje i dodatki — oraz
          zamówienia online znajdziesz na pyszne.pl.
        </p>
        <Button
          size="lg"
          className="mt-4"
          nativeButton={false}
          render={<a href={site.social.pyszne} target="_blank" rel="noopener noreferrer" />}
        >
          Pełne menu i zamówienie
        </Button>
      </div>
    </section>
  );
}
