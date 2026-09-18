"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/data/site";

export function MobileNav({
  links,
  orderLabel,
  openLabel,
  siteName = site.name,
}: {
  links: { href: string; label: string }[];
  orderLabel: string;
  openLabel: string;
  siteName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={<Button variant="ghost" size="icon" aria-label={openLabel} />}
        >
          <Menu className="size-5" />
        </SheetTrigger>
        <SheetContent side="right" className="w-72">
          <SheetHeader>
            <SheetTitle className="font-brand text-primary text-2xl">
              {siteName}
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-2 flex flex-col gap-1 px-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/90 hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-2.5 text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="mt-3"
              nativeButton={false}
              render={
                <a
                  href={site.social.pyszne}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {orderLabel}
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
