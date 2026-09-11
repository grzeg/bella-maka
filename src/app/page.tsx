import Link from "next/link";
import Image from "next/image";
import { Bike, MapPin, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";
import { menuHighlights, pizzaSizes } from "@/data/menu";
import { HeroMedia } from "@/components/hero-media";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[540px] items-center overflow-hidden sm:min-h-[640px]">
        <HeroMedia src="/images/hero/loop.mp4" poster="/images/hero/poster.jpg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
            {site.city}, Dolny Śląsk
          </p>
          <h1 className="mt-2 max-w-2xl text-balance font-heading text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
            Pizza z pieca,
            <br />
            prosto z {site.cityGenitive}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-white/85">
            {site.name} — rodzinna pizzeria przy {site.address.street}.
            Szybki dowóz i wynos, zamówienia online przez pyszne.pl.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <a href={site.social.pyszne} target="_blank" rel="noopener noreferrer" />
              }
            >
              Zamów online
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              render={<Link href="/menu" />}
            >
              Zobacz menu
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6">
          <Card className="border-border/60">
            <CardContent className="flex flex-col items-start gap-2 pt-0">
              <Bike className="size-6 text-primary" />
              <p className="font-semibold text-foreground">Szybki dowóz</p>
              <p className="text-sm text-muted-foreground">
                Prosto pod drzwi, darmowa dostawa od 30 zł.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex flex-col items-start gap-2 pt-0">
              <MapPin className="size-6 text-primary" />
              <p className="font-semibold text-foreground">Dogodna lokalizacja</p>
              <p className="text-sm text-muted-foreground">
                Wejście od tyłu budynku, {site.address.postalCode} {site.city}.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex flex-col items-start gap-2 pt-0">
              <Flame className="size-6 text-primary" />
              <p className="font-semibold text-foreground">Prosto z pieca</p>
              <p className="text-sm text-muted-foreground">
                Świeże ciasto, codziennie na miejscu.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-border bg-card/50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Nasze hity
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Pełna karta i zamówienia na pyszne.pl.
              </p>
            </div>
            <Button variant="outline" nativeButton={false} render={<Link href="/menu" />}>
              Całe menu
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {menuHighlights.slice(0, 3).map((item) => (
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
                    {item.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary" className="shrink-0">
                        {tag === "wege" ? "wege" : "ostre"}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-3 flex gap-3 text-sm font-medium tabular-nums text-foreground/80">
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
        </div>
      </section>
    </>
  );
}
