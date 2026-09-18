import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
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
    title: "Galeria",
    description: `Zdjęcia pizzy i wnętrza pizzerii ${site.name} w ${site.cityLocative}.`,
  };
}

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");

function getGalleryImages() {
  return fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort()
    .map((file) => `/images/gallery/${file}`);
}

export default async function GaleriaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const images = getGalleryImages();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
        {dict.gallery.title}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-prose">
        {dict.gallery.subtitle}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {images.map((src) => (
          <div
            key={src}
            className="ring-foreground/10 relative aspect-square overflow-hidden rounded-lg ring-1"
          >
            <Image
              src={src}
              alt={dict.gallery.imageAlt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
