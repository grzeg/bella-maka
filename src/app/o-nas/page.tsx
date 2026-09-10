import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "O nas",
  description: `Historia pizzerii ${site.name} w ${site.cityLocative}.`,
};

export default function ONasPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        O nas
      </h1>
      <div className="prose-content mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          {/* TODO: właściciel — historia pizzerii, kiedy powstała, skąd nazwa
              "Bella Mąka", co jest dla was ważne w robieniu pizzy. */}
          {site.name} działa w {site.cityLocative} przy {site.address.street}.
          Tu wpiszemy prawdziwą historię lokalu — poproś właściciela o kilka
          zdań o początkach, zespole i podejściu do robienia pizzy.
        </p>
      </div>
    </section>
  );
}
