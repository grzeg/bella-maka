import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { MobileNav } from "@/components/mobile-nav";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Navbar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const links = [
    { href: `/${locale}/menu`, label: dict.nav.menu },
    { href: `/${locale}/galeria`, label: dict.nav.gallery },
    { href: `/${locale}/opinie`, label: dict.nav.reviews },
    { href: `/${locale}/o-nas`, label: dict.nav.about },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/kontakt`, label: dict.nav.contact },
  ];

  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={`/${locale}`}
          className="font-brand text-primary flex items-center gap-2 text-2xl"
        >
          <Image
            src="/images/logo/badge-round-512.png"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          {site.name}
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher locale={locale} label={dict.nav.switchLanguage} />
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
            {dict.nav.orderOnline}
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          nativeButton={false}
          render={
            <a
              href={site.social.pyszne}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.nav.orderOnline}
            />
          }
        >
          <ShoppingBag className="size-5" />
        </Button>

        <MobileNav
          links={links}
          orderLabel={dict.nav.orderOnline}
          openLabel={dict.nav.openMenu}
          siteName={site.name}
          locale={locale}
          switchLanguageLabel={dict.nav.switchLanguage}
        />
      </div>
    </header>
  );
}
