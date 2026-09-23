# Brand brief — Bella Mąka

Referenced from [AGENTS.md](../AGENTS.md) as the source of truth for content,
IA, and tone decisions. This file was a dead link until now — the sections
below are a **skeleton**, not finished brand strategy. Sections marked
`NEEDS OWNER INPUT` are real content/positioning decisions that shouldn't be
invented by an agent — fill them in with the pizzeria owner, then remove the
marker.

## Positioning & voice

NEEDS OWNER INPUT — one paragraph on how Bella Mąka wants to sound: casual
neighborhood spot vs. destination pizzeria, family-run warmth vs. no-nonsense
efficiency, etc. Current copy (see `src/i18n/dictionaries.ts`) leans warm,
direct, short sentences — confirm or correct that read.

## Information architecture

Three paths from the homepage (per AGENTS.md's "Zakres i granice" — this is
locked, don't change without asking):

1. **Order** — hero CTA → pyszne.pl (external ordering platform), or `/menu`.
2. **Visit** — `/galeria`, `/kontakt` (address, hours, map).
3. **Trust** — `/opinie` (reviews), `/o-nas` (story), `/blog`.

Full route list (both `/pl` and `/en` locales) in
[src/app/[locale]/](../src/app/%5Blocale%5D/).

## Kolorystyka (color palette)

Real palette — do not invent other colors. CSS custom properties in
[src/app/globals.css](../src/app/globals.css), light/dark pairs:

| Token                | Light     | Dark      |
| -------------------- | --------- | --------- |
| `--background`       | `#fbf3e7` | `#1c1815` |
| `--primary`          | `#7a3b24` | `#d97a54` |
| `--brand-terracotta` | `#c1552f` | `#d97a54` |
| `--brand-green`      | `#3f5c3f` | `#7fa876` |
| `--brand-red`        | `#a3352c` | `#d9695a` |

Full token set (`--muted`, `--accent`, `--card`, `--destructive`, `--sidebar-*`,
`--chart-*`, radius scale) is in `globals.css` — this table only covers the
brand-specific ones worth knowing at a glance.

## Asset inventory

- Logo: [public/images/logo/badge.jpg](../public/images/logo/badge.jpg)
- Hero video/poster: [public/images/hero/](../public/images/hero/)
- Menu photography: [public/images/menu/](../public/images/menu/) (6 pizzas —
  Napoli, Torino, Sicilia, Parma, Modena, Rimini; see
  [src/data/menu.ts](../src/data/menu.ts))
- Gallery photos: [public/images/gallery/](../public/images/gallery/) (19
  photos, no placeholders)

NEEDS OWNER INPUT — anything missing (updated food photography, a proper
logo vector/SVG instead of the JPEG badge, real customer reviews to replace
the placeholders in `src/i18n/dictionaries.ts` → `reviews`).

## Known open content gaps

Tracked as `TODO` (Polish) / `TODO_TRANSLATE` (English) in the codebase —
not invented, not blocking the build:

- `src/data/site.ts` — real phone number, real opening hours, final domain.
- `src/i18n/dictionaries.ts` → `about` (PL and EN) — the page describes the
  dough, menu and ways to order from known facts; the founding story (when it
  opened, where the name comes from) still needs the owner.
- `src/i18n/dictionaries.ts` → `reviews` — real reviews or a Google Reviews
  widget, replacing the two placeholders.
- `src/i18n/dictionaries.ts` → `privacy` (PL and EN) — legal text needs
  owner/lawyer sign-off before publishing.
- English marketing copy throughout `src/i18n/dictionaries.ts` is machine
  translation prefixed `TODO_TRANSLATE:` — needs a native-English pass
  before it ships (structural UI chrome — nav labels, buttons, form labels —
  is already translated directly, not a placeholder).
