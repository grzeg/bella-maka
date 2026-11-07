# Bella Mąka

[![CI](https://github.com/grzeg/bella-maka/actions/workflows/ci.yml/badge.svg)](https://github.com/grzeg/bella-maka/actions/workflows/ci.yml)

<img src="public/images/hero/poster.jpg" alt="Pizza with salami and jalapeños baking in the pizzeria's oven" width="360" />

**EN** Bilingual (PL/EN) website of the Bella Mąka pizzeria in Brzeg Dolny, Lower Silesia. Live at [bellamaka.pl](https://bellamaka.pl). Built with Next.js (App Router) and strict TypeScript, with a CI pipeline that blocks merges on formatting, lint, types, component tests and end-to-end tests.

**PL** Dwujęzyczna (PL/EN) strona pizzerii Bella Mąka w Brzegu Dolnym na Dolnym Śląsku. Działa pod adresem [bellamaka.pl](https://bellamaka.pl). Zbudowana w Next.js (App Router) i strict TypeScript, z CI, które blokuje merge przy błędach formatowania, lintu, typów, testów komponentów i testów e2e.

## Stack

- Next.js (App Router, React Server Components) + TypeScript (strict)
- Tailwind CSS + shadcn/ui
- MDX blog (`content/blog`, validated at build time)
- Sanity Studio at `/studio`: schema and Studio scaffold only, not yet the content source (see `src/sanity/README.md`)
- Storybook (Vitest + play functions + a11y addon), Vitest unit tests, Playwright e2e
- Deploy: Vercel. CI: GitHub Actions

## Features / Funkcje

**EN**

- Routing under `/pl` and `/en`, with every UI string in one dictionary file.
- Per-page canonical URLs, `hreflang` alternates, Open Graph and Twitter metadata.
- `sitemap.xml`, `robots.txt`, `llms.txt` for AI agents, and schema.org `Restaurant` structured data.
- Blog from MDX files with validated frontmatter. Posts can be imported from Facebook and rendered as plain text.
- Cookie consent: Google Analytics loads only after the visitor accepts.

**PL**

- Routing pod `/pl` i `/en`, wszystkie teksty interfejsu w jednym pliku słownika.
- Osobne adresy canonical, alternatywy `hreflang` oraz metadane Open Graph i Twitter dla każdej strony.
- `sitemap.xml`, `robots.txt`, `llms.txt` dla agentów AI oraz dane strukturalne schema.org `Restaurant`.
- Blog z plików MDX z walidowanym frontmatterem. Wpisy można przenosić z Facebooka i wyświetlać jako zwykły tekst.
- Zgoda na cookies: Google Analytics ładuje się dopiero po akceptacji odwiedzającego.

## Decisions / Decyzje

**Per-page metadata / Metadane per strona**

**EN** In the Next.js metadata API a page-level `openGraph` or `twitter` replaces the layout's one wholesale, and an inherited canonical would point every page at the homepage. So the layout holds only a fallback and every page builds its full set through `buildMetadata()` in `src/lib/metadata.ts`, covered by unit tests.

**PL** W API metadanych Next.js `openGraph` lub `twitter` ustawione na stronie zastępuje te z layoutu w całości, a odziedziczony canonical wskazywałby każdą stronę na stronę główną. Dlatego layout trzyma tylko wartości zapasowe, a każda strona składa pełny zestaw przez `buildMetadata()` z `src/lib/metadata.ts`, z testami jednostkowymi.

**Default locale, no guessing / Domyślny język bez zgadywania**

**EN** The middleware always redirects to `/pl` and never reads `Accept-Language`. This is a local Polish business site, not a language-detection product.

**PL** Middleware zawsze przekierowuje na `/pl` i nie czyta `Accept-Language`. To strona lokalnego biznesu w Polsce, a nie produkt do wykrywania języka.

**Content that fails the build / Treść, która wywala build**

**EN** Blog frontmatter is parsed and validated by `parsePost()` in `src/lib/blog.ts`. An invalid post fails the build with the file name and the field, and alt text is required for every image.

**PL** Frontmatter bloga jest parsowany i walidowany przez `parsePost()` w `src/lib/blog.ts`. Błędny wpis przerywa build z nazwą pliku i pola, a tekst alternatywny jest wymagany dla każdego zdjęcia.

**MDX now, Sanity later / MDX teraz, Sanity później**

**EN** The blog reads `content/blog/*.mdx`. The Sanity `post` schema mirrors the frontmatter 1:1, so moving to the CMS later is a copy job, not a rewrite. `/studio` lives outside `[locale]` on purpose, because it is an admin tool and not user-facing content.

**PL** Blog czyta `content/blog/*.mdx`. Schemat `post` w Sanity odwzorowuje frontmatter 1:1, więc późniejsza migracja do CMS to kopiowanie, a nie przepisywanie. `/studio` jest celowo poza `[locale]`, bo to narzędzie administracyjne, a nie treść dla użytkownika.

**Three test layers / Trzy warstwy testów**

**EN** Storybook covers UI components, Vitest covers pure logic (`src/lib`, `src/i18n`), and Playwright runs only critical-path checks against a real build and start. Vercel does not run Vitest, so GitHub Actions is the required check on every PR.

**PL** Storybook pokrywa komponenty UI, Vitest czystą logikę (`src/lib`, `src/i18n`), a Playwright tylko ścieżki krytyczne na prawdziwym buildzie. Vercel nie uruchamia Vitesta, więc wymaganym checkiem na każdym PR jest GitHub Actions.

**Fonts with Polish diacritics / Fonty z polskimi znakami**

**EN** Bodoni Moda replaced the originally suggested Italiana, because Italiana has no `latin-ext` subset and drops ą, ę, ć, ł, ń, ó, ś, ź, ż.

**PL** Bodoni Moda zastąpiła pierwotnie proponowaną Italianę, bo ta nie ma podzbioru `latin-ext` i gubi ą, ę, ć, ł, ń, ó, ś, ź, ż.

**Built with an AI agent, under written rules / Praca z agentem AI według spisanych zasad**

**EN** The site was built with Claude Code. The agent's rules (stack, i18n conventions, test requirements, Conventional Commits) live in [AGENTS.md](AGENTS.md), and the CI gates decide what gets merged.

**PL** Strona powstała z użyciem Claude Code. Zasady dla agenta (stack, konwencje i18n, wymagania testowe, Conventional Commits) są w [AGENTS.md](AGENTS.md), a o tym, co trafi do `main`, decyduje CI.

## Setup

```bash
pnpm install
pnpm dev
```

**EN** The site runs without any environment variables. Optionally create `.env.local` with `NEXT_PUBLIC_GA_ID` (Google Analytics, loaded only after cookie consent) and, for the Sanity Studio at `/studio`, `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`. On Vercel, set them per environment in the dashboard.

**PL** Strona działa bez żadnych zmiennych środowiskowych. Opcjonalnie utwórz `.env.local` z `NEXT_PUBLIC_GA_ID` (Google Analytics, ładowany dopiero po zgodzie na cookies) oraz, dla Sanity Studio pod `/studio`, `NEXT_PUBLIC_SANITY_PROJECT_ID` i `NEXT_PUBLIC_SANITY_DATASET`. Na Vercelu ustawia się je w dashboardzie, osobno dla każdego środowiska.

## Commands / Komendy

```bash
pnpm dev              # dev server (localhost:3000)
pnpm build            # production build (gates lint + types)
pnpm start            # start production build

pnpm lint             # ESLint
pnpm format           # Prettier: fix
pnpm format:check     # Prettier: check (CI gate)

pnpm test             # Storybook (Vitest + play) + unit tests
pnpm test:e2e         # Playwright, on a real build + start

pnpm storybook        # Storybook dev server (localhost:6006)
pnpm build-storybook  # Storybook static build
```

## Structure / Struktura

- `src/app/[locale]/` — pages (PL/EN routing) / strony (routing PL/EN)
- `src/app/studio/` — Sanity Studio, outside `[locale]` / Sanity Studio, poza `[locale]`
- `src/components/` — components (`ui/` = shadcn-based, with `.stories.tsx`) / komponenty (`ui/` = oparte na shadcn, ze `.stories.tsx`)
- `src/i18n/` — PL/EN dictionaries, locale config / słowniki PL/EN, konfiguracja locale
- `src/lib/` — blog parsing, metadata builder / parsowanie bloga, budowanie metadanych
- `src/sanity/` — Sanity schema and client / schemat i klient Sanity
- `content/blog/` — blog posts (MDX) / treść bloga (MDX)
- `e2e/` — Playwright specs / specy Playwright

## CI

**EN** `.github/workflows/ci.yml` runs `format:check`, `lint`, `tsc --noEmit`, `test` and `test:e2e`. All of them are required checks on a PR.

**PL** `.github/workflows/ci.yml` uruchamia `format:check`, `lint`, `tsc --noEmit`, `test` i `test:e2e`. Wszystkie są wymaganymi checkami na PR.

## License / Licencja

MIT
