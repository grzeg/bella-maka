import Link from "next/link";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="border-border bg-muted/50 border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-brand text-primary text-2xl">{site.name}</p>
          <p className="text-muted-foreground mt-2 text-sm">
            {site.address.street}
            <br />
            {site.address.note}
            <br />
            {site.address.postalCode} {site.address.city}
          </p>
        </div>

        <div>
          <p className="text-foreground text-sm font-semibold">
            {dict.footer.hoursTitle}
          </p>
          <ul className="text-muted-foreground mt-2 space-y-1 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="tabular-nums">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-foreground text-sm font-semibold">
            {dict.footer.contactTitle}
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li>
              <a
                href={`tel:${site.phone}`}
                className="text-muted-foreground hover:text-primary"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={site.social.pyszne}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                {dict.footer.orderOnPyszne}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-border text-muted-foreground border-t px-4 py-4 text-center text-xs sm:px-6">
        © {new Date().getFullYear()} {site.name}, {site.city}.{" "}
        {dict.footer.rightsReserved}{" "}
        <Link
          href={`/${locale}/polityka-prywatnosci`}
          className="hover:text-primary underline underline-offset-2"
        >
          {dict.footer.privacyPolicy}
        </Link>
      </div>
    </footer>
  );
}
