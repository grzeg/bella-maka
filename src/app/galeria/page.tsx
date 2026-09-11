import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Galeria",
  description: `Zdjęcia pizzy i wnętrza pizzerii ${site.name} w ${site.cityLocative}.`,
};

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");

function getGalleryImages() {
  return fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort()
    .map((file) => `/images/gallery/${file}`);
}

export default function GaleriaPage() {
  const images = getGalleryImages();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Galeria
      </h1>
      <p className="mt-3 max-w-prose text-muted-foreground">
        Prosto z pieca i z sali — {site.name} na co dzień.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {images.map((src) => (
          <div
            key={src}
            className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-foreground/10"
          >
            <Image
              src={src}
              alt="Bella Mąka — zdjęcie z pizzerii"
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
