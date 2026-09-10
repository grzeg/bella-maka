import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Polityka prywatności
      </h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          {/* TODO: przed publikacją — pełna treść przygotowana/zaakceptowana
              przez właściciela lub prawnika (RODO, administrator danych,
              podstawy przetwarzania, okres retencji, prawa użytkownika). */}
          Administratorem danych jest {site.name}, {site.address.street},{" "}
          {site.address.postalCode} {site.address.city}.
        </p>
        <p>
          Strona korzysta z plików cookie Google Analytics wyłącznie po
          wyrażeniu zgody w bannerze cookie. Zgodę można wycofać w dowolnym
          momencie, czyszcząc dane strony w przeglądarce.
        </p>
        <p>
          Kontakt w sprawie danych osobowych:{" "}
          <a href={`tel:${site.phone}`} className="underline underline-offset-2 hover:text-primary">
            {site.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
