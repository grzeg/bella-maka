import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
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
  const dict = getDictionary(locale);
  return {
    title: dict.about.title,
    description: dict.about.metaDescription,
  };
}

// Photos already in the gallery; intrinsic sizes keep layout stable (no CLS).
const photos = {
  interior: { src: "/images/gallery/unnamed.jpg", width: 1360, height: 1020 },
  dough: { src: "/images/gallery/pizza22.jpeg", width: 1600, height: 1200 },
  sauce: {
    src: "/images/gallery/724937293_122116652564946185_2100637243274836640_n.jpg",
    width: 1440,
    height: 1146,
  },
  oven: {
    src: "/images/gallery/743234584_122119653116946185_4102379689060176804_n.jpg",
    width: 1440,
    height: 868,
  },
} as const;

const imageClass =
  "ring-foreground/10 h-auto w-full rounded-lg object-cover ring-1";
const linkClass =
  "text-primary focus-visible:ring-ring/50 rounded-sm underline underline-offset-4 focus-visible:ring-[3px] focus-visible:outline-none";

export default async function ONasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const about = dict.about;

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <header className="max-w-3xl">
        <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
          {about.title}
        </h1>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          {about.lead}
        </p>
      </header>

      <Image
        {...photos.interior}
        alt={about.interiorAlt}
        priority
        sizes="(min-width: 1024px) 976px, 100vw"
        className={`${imageClass} mt-8 aspect-[16/9]`}
      />

      <section
        aria-labelledby="about-dough"
        className="mt-14 grid items-center gap-8 md:grid-cols-2"
      >
        <div>
          <h2
            id="about-dough"
            className="font-heading text-foreground text-2xl font-semibold"
          >
            {about.doughTitle}
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            {about.doughBody}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Image
            {...photos.sauce}
            alt={about.sauceImageAlt}
            sizes="(min-width: 768px) 240px, 50vw"
            className={`${imageClass} aspect-square`}
          />
          <Image
            {...photos.dough}
            alt={about.doughImageAlt}
            sizes="(min-width: 768px) 240px, 50vw"
            className={`${imageClass} aspect-square`}
          />
        </div>
      </section>

      <section
        aria-labelledby="about-menu"
        className="mt-14 grid items-center gap-8 md:grid-cols-2"
      >
        <Image
          {...photos.oven}
          alt={about.ovenImageAlt}
          sizes="(min-width: 768px) 488px, 100vw"
          className={`${imageClass} md:order-first`}
        />
        <div className="order-first md:order-none">
          <h2
            id="about-menu"
            className="font-heading text-foreground text-2xl font-semibold"
          >
            {about.menuTitle}
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            {about.menuBody}
          </p>
          <Button
            variant="outline"
            className="mt-5"
            nativeButton={false}
            render={<Link href={`/${locale}/menu`} />}
          >
            {dict.home.ctaMenu}
          </Button>
        </div>
      </section>

      <section
        aria-labelledby="about-visit"
        className="border-border bg-muted/40 mt-14 rounded-xl border p-6 sm:p-8"
      >
        <h2
          id="about-visit"
          className="font-heading text-foreground text-2xl font-semibold"
        >
          {about.visitTitle}
        </h2>
        <p className="text-muted-foreground mt-3 max-w-3xl leading-relaxed">
          {about.visitBody}
        </p>

        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-foreground font-semibold">
              {about.addressLabel}
            </dt>
            <dd className="text-muted-foreground mt-1">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </dd>
          </div>
          <div>
            <dt className="text-foreground font-semibold">
              {about.phoneLabel}
            </dt>
            <dd className="text-muted-foreground mt-1">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className={linkClass}
              >
                {site.phone}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={
              <a
                href={site.social.pyszne}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            {about.ctaOrder}
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href={`/${locale}/kontakt`} />}
          >
            {about.ctaContact}
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href={`/${locale}/galeria`} />}
          >
            {about.ctaGallery}
          </Button>
        </div>

        <p className="text-muted-foreground mt-6 text-sm">
          {about.newsBody}{" "}
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {about.facebookLabel}
            <span className="sr-only"> {dict.blog.opensInNewTab}</span>
          </a>
          {" · "}
          <Link href={`/${locale}/blog`} className={linkClass}>
            {about.ctaBlog}
          </Link>
        </p>
      </section>
    </div>
  );
}
