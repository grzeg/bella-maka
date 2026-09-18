# Bella Mąka

Strona pizzerii Bella Mąka (Brzeg Dolny, Dolny Śląsk) — Next.js (App Router) + TypeScript, i18n PL/EN, Sanity CMS dla bloga.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS + shadcn/ui
- Sanity (headless CMS) — `/studio`
- Storybook (vitest + play functions) dla komponentów UI
- Playwright — e2e
- Deploy: Vercel

Zasady pracy agenta AI nad tym repo: [AGENTS.md](AGENTS.md). Brief marketingowy/treściowy: [docs/brand-brief.md](docs/brand-brief.md).

## Setup

```bash
pnpm install
cp .env.local.example .env.local
```

Wypełnij `.env.local` (Sanity project ID, GA ID) — szczegóły w samym pliku.

## Komendy

```bash
pnpm dev              # dev server (localhost:3000)
pnpm build            # production build (gate'uje lint + typy)
pnpm start            # start production build

pnpm lint             # ESLint
pnpm format           # Prettier — napraw
pnpm format:check     # Prettier — sprawdź (gate w CI)

pnpm test             # Storybook (vitest + play) + unit testy
pnpm test:e2e         # Playwright, na realnym build+start

pnpm storybook        # Storybook dev server (localhost:6006)
pnpm build-storybook  # Storybook static build
```

## Struktura

- `src/app/[locale]/` — strony (routing PL/EN)
- `src/app/studio/` — Sanity Studio (admin, poza `[locale]`)
- `src/components/` — komponenty (`ui/` = shadcn-based, z `.stories.tsx`)
- `src/i18n/` — słowniki PL/EN, konfiguracja locale
- `src/sanity/` — schema i klient Sanity
- `content/blog/` — treść bloga (MDX)
- `e2e/` — specy Playwright

## CI

`.github/workflows/ci.yml`: `format:check`, `lint`, `tsc --noEmit`, `test`, `test:e2e` — wymagane checki na PR.
