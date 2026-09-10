import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Galeria",
  description: `Zdjęcia pizzy i wnętrza pizzerii ${site.name} w ${site.cityLocative}.`,
};

// TODO: podmienić na prawdziwe zdjęcia jedzenia/wnętrza od właściciela (public/images/galeria)
const placeholderCount = 8;

export default function GaleriaPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Galeria
      </h1>
      <p className="mt-3 max-w-prose text-muted-foreground">
        Zdjęcia jedzenia i lokalu — miejsce docelowe czeka na materiały od
        właściciela.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-border bg-muted text-xs text-muted-foreground"
          >
            Zdjęcie {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
