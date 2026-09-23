import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Bike, MapPin, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";
import { menuHighlights, pizzaSizes } from "@/data/menu";
import { HeroMedia } from "@/components/hero-media";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <section className="relative isolate flex min-h-[540px] items-center overflow-hidden sm:min-h-[640px]">
        <HeroMedia
          src="/images/hero/loop-main.mp4"
          mobileSrc="/images/hero/loop-main-mobile.mp4"
          poster="/images/hero/poster.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-white/80 uppercase">
            {dict.home.cityTagline}
          </p>
          <h1 className="font-heading mt-2 max-w-2xl text-5xl leading-[1.05] font-bold text-balance text-white sm:text-6xl">
            {dict.home.heroTitleLine1}
            <br />
            {dict.home.heroTitleLine2}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-white/85">
            {dict.home.heroSubtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <a
                  href={site.social.pyszne}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {dict.home.ctaOrder}
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              render={<Link href={`/${locale}/menu`} />}
            >
              {dict.home.ctaMenu}
            </Button>
          </div>
        </div>
      </section>

      <section className="border-border border-b">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6">
          <Card className="border-border/60">
            <CardContent className="flex flex-col items-start gap-2 pt-0">
              <Bike className="text-primary size-6" />
              <p className="text-foreground font-semibold">
                {dict.home.featureDeliveryTitle}
              </p>
              <p className="text-muted-foreground text-sm">
                {dict.home.featureDeliveryDesc}
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex flex-col items-start gap-2 pt-0">
              <MapPin className="text-primary size-6" />
              <p className="text-foreground font-semibold">
                {dict.home.featureLocationTitle}
              </p>
              <p className="text-muted-foreground text-sm">
                {dict.home.featureLocationDesc}
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="flex flex-col items-start gap-2 pt-0">
              <Flame className="text-primary size-6" />
              <p className="text-foreground font-semibold">
                {dict.home.featureOvenTitle}
              </p>
              <p className="text-muted-foreground text-sm">
                {dict.home.featureOvenDesc}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-border bg-card/50 border-t py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-foreground text-2xl font-semibold sm:text-3xl">
                {dict.home.highlightsTitle}
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                {dict.home.highlightsSubtitle}
              </p>
            </div>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href={`/${locale}/menu`} />}
            >
              {dict.home.allMenuCta}
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
                  sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
                  className="h-44 w-full object-cover"
                />
                <CardContent>
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-heading text-foreground text-lg font-semibold">
                      {item.name}
                    </p>
                    {item.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary" className="shrink-0">
                        {tag === "wege"
                          ? dict.menu.tagWege
                          : dict.menu.tagOstre}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-1.5 text-sm">
                    {item.description}
                  </p>
                  <div className="text-foreground/80 mt-3 flex gap-3 text-sm font-medium tabular-nums">
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
