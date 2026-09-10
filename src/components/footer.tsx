import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-primary">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {site.address.street}
            <br />
            {site.address.note}
            <br />
            {site.address.postalCode} {site.address.city}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Godziny otwarcia</p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="tabular-nums">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Kontakt</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="text-muted-foreground hover:text-primary">
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
                Zamów na pyszne.pl
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {site.name}, {site.city}. Wszystkie prawa zastrzeżone.{" "}
        <Link href="/polityka-prywatnosci" className="underline underline-offset-2 hover:text-primary">
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
}
