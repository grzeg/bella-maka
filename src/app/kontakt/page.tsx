import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Adres, godziny otwarcia i telefon do pizzerii ${site.name} w ${site.cityLocative}.`,
};

export default function KontaktPage() {
  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.postalCode} ${site.address.city}`
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Kontakt
      </h1>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <dl className="space-y-6">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Adres
              </dt>
              <dd className="mt-1 text-foreground">
                {site.address.street}
                <br />
                {site.address.note}
                <br />
                {site.address.postalCode} {site.address.city}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Telefon
              </dt>
              <dd className="mt-1">
                <a href={`tel:${site.phone}`} className="text-foreground hover:text-primary">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Godziny otwarcia
              </dt>
              <dd className="mt-1">
                <ul className="space-y-1 text-foreground">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 sm:max-w-xs">
                      <span>{h.day}</span>
                      <span className="tabular-nums">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Social
              </dt>
              <dd className="mt-1 space-x-4">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary"
                >
                  Facebook
                </a>
                <a
                  href={site.social.pyszne}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary"
                >
                  pyszne.pl
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title={`Mapa dojazdu — ${site.name}`}
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          />
        </div>
      </div>
    </section>
  );
}
