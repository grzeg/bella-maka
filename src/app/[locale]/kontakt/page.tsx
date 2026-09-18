import type { Metadata } from "next";
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
    title: "Kontakt",
    description: `Adres, godziny otwarcia i telefon do pizzerii ${site.name} w ${site.cityLocative}.`,
  };
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
        {dict.contact.title}
      </h1>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <dl className="space-y-6">
            <div>
              <dt className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
                {dict.contact.addressLabel}
              </dt>
              <dd className="text-foreground mt-1">
                {site.address.street}
                <br />
                {site.address.note}
                <br />
                {site.address.postalCode} {site.address.city}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
                {dict.contact.phoneLabel}
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${site.phone}`}
                  className="text-foreground hover:text-primary"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
                {dict.contact.hoursLabel}
              </dt>
              <dd className="mt-1">
                <ul className="text-foreground space-y-1">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 sm:max-w-xs"
                    >
                      <span>{h.day}</span>
                      <span className="tabular-nums">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
                {dict.contact.socialLabel}
              </dt>
              <dd className="mt-1 space-x-4">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary"
                >
                  {dict.contact.facebook}
                </a>
                <a
                  href={site.social.pyszne}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary"
                >
                  {dict.contact.pyszne}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-border overflow-hidden rounded-xl border">
          <iframe
            title={`${dict.contact.mapTitle} — ${site.name}`}
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
