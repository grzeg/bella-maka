import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/galeria", label: "Galeria" },
  { href: "/opinie", label: "Opinie" },
  { href: "/o-nas", label: "O nas" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight text-primary"
        >
          <Image
            src="/images/logo/badge.jpg"
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
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<a href={site.social.pyszne} target="_blank" rel="noopener noreferrer" />}
          >
            Zamów online
          </Button>
        </div>

        <MobileNav links={links} />
      </div>
    </header>
  );
}
