# AGENTS.md — Bella Maka website

Zasady pracy agenta AI projektującego i implementującego stronę Bella Maka.

Brief marketingowy/treściowy: [docs/brand-brief.md](docs/brand-brief.md) — czytaj przed każdą decyzją dot. treści, IA, tonu.

## Stack (ustalony, nie zmieniać bez pytania)

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS
- shadcn/ui — komponenty bazowe, nie budować własnego design systemu od zera
- Sanity (headless CMS) — treść bloga (`/studio`, `src/sanity/`). Sanity MCP podłączony w [.mcp.json](.mcp.json) — agent może odpytywać schema/dataset przez GROQ bez kopiowania kodu do kontekstu (autoryzacja OAuth per-user, nie sekret w repo).
- Storybook — dokumentacja i testy (vitest + play functions) komponentów UI
- Deploy: Vercel

## Kolorystyka i logo

Realna paleta marki (nie wymyślać innych kolorów) i lista assetów: [docs/brand-brief.md](docs/brand-brief.md#kolorystyka). Tokeny CSS w [src/app/globals.css](src/app/globals.css)

## i18n (PL/EN)

Strona jest dwujęzyczna, routing `/pl/...` i `/en/...` (`src/app/[locale]/`, `src/middleware.ts`). Zasady:

- Każdy nowy string UI-owy idzie do [src/i18n/dictionaries.ts](src/i18n/dictionaries.ts) (oba języki naraz, nie tylko PL) — nigdy nie hardkoduj tekstu bezpośrednio w JSX stron pod `[locale]`.
- Każdy wewnętrzny link musi być prefiksowany locale: `` `/${locale}/portfolio` ``, nie `"/portfolio"`.
- Nowe strony pod `[locale]` odczytują `params.locale`, walidują przez `isLocale()` (`notFound()` jeśli nie), i pobierają `getDictionary(locale)`.
- `/studio` (Sanity) jest celowo POZA `[locale]` — to narzędzie admina, nie treść użytkownika, nie tłumacz go.
- `middleware.ts` musi być w `src/`, nie w roocie repo (bo projekt używa katalogu `src/`) — inaczej Next.js go cicho ignoruje.

## Storybook i testy

Dla każdego nowego reużywalnego komponentu UI (`src/components/ui/*`, współdzielone komponenty) dodaj kolokowany `*.stories.tsx` — bez wyjątków, nawet dla "prostych" komponentów (np. banera). To wymóg, nie sugestia: jeśli go pominiesz, nikt inny tego nie złapie automatycznie. Wzorzec i zasady (tagi `ai-generated`/`needs-work`, dokładnie jeden `CssCheck` na projekt, kiedy pisać `play`) zgodnie z tym, co ustawił `npx storybook skills setup` — sprawdź istniejące pliki w `src/components/**/*.stories.tsx` jako wzór.

Dla czystej logiki bez UI (helpery w `src/lib/`, `src/i18n/`, reguły w middleware) dodaj kolokowany `*.test.ts` — osobny projekt `unit` w [vitest.config.ts](vitest.config.ts) (node, bez przeglądarki), wzór w [src/i18n/config.test.ts](src/i18n/config.test.ts).

Przed uznaniem zadania za skończone zawsze uruchom `pnpm test` (odpala oba projekty: `storybook` + `unit`).

E2e (czarna skrzynka, prawdziwy build+start): [playwright.config.ts](playwright.config.ts), specy w `e2e/*.spec.ts`, uruchamiane `pnpm test:e2e`. Osobna warstwa od Storybook/unit — dopisuj tu tylko sanity-check ścieżek krytycznych (np. routing, główna nawigacja), nie duplikuj tego, co pokrywa Storybook play function.

## Formatowanie i commity

- Prettier ([.prettierrc.json](.prettierrc.json)) jest źródłem prawdy dla stylu — `pnpm format` przed commitem, `pnpm format:check` gate'uje CI. ESLint ma `eslint-config-prettier` na końcu configu, więc nie duplikuje reguł stylistycznych.
- Husky (`.husky/commit-msg`) + commitlint ([commitlint.config.mjs](commitlint.config.mjs)) odrzucają commit, jeśli nie jest Conventional Commit — to jest teraz wymuszone, nie tylko konwencja w dokumentacji.

## Deploy i CI

- Deploy: Vercel, auto-build z każdego push/PR. `next build` sam gate'uje lint (`eslint-config-next`) i typy (`tsc`) — build failuje jeśli któreś nie przejdzie, nic dodatkowego nie trzeba w repo konfigurować pod to.
- Vercel NIE odpala `vitest` (ani Storybook, ani unit testów) — to robi [.github/workflows/ci.yml](.github/workflows/ci.yml) jako wymagany check na PR (`pnpm format:check`, `pnpm lint`, `tsc --noEmit`, `pnpm test`, `pnpm test:e2e`). Traktuj czerwony CI tak samo jak czerwony build na Vercelu — nie mergować.
- Dependabot ([.github/dependabot.yml](.github/dependabot.yml)) otwiera PR-y na aktualizacje zależności (npm + github-actions) raz w tygodniu — to nadal wymaga review usera, nie mergować automatycznie.
- Zmienne środowiskowe (`NEXT_PUBLIC_SANITY_*`, `NEXT_PUBLIC_GA_ID`) ustawia się w dashboardzie Vercela (per environment: Production/Preview), nie w repo — `.env.local.example` to tylko wzór dla lokalnego dev.

## Model routing (agent AI)

- Boilerplate, `*.stories.tsx`, `*.test.ts`, mechaniczne rename/refaktor — tani/szybki model wystarcza.
- Decyzje architektoniczne, i18n routing, integracja z Sanity/CMS, cokolwiek dotykające `middleware.ts` lub struktury `[locale]` — mocniejszy model, tu błąd kosztuje więcej niż oszczędność.

## Styl komunikacji agenta

- W czacie: zwięźle, bez lania wody, bez grzecznościowych zwrotów — meritum, nie fluff. Nie dotyczy kodu, commitów i opisów PR — te zawsze pełnym, poprawnym językiem.
- Nie skracaj kosztem treści technicznej — liczby, nazwy plików, konkretne komendy zawsze zostają.

## Commit messages

- Konwencja: [Conventional Commits](https://www.conventionalcommits.org/) — prefiks `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `ci:`. Subject po angielsku, tryb rozkazujący, bez kropki na końcu.
- Body tylko gdy "why" nieoczywiste z samego diffu (nie opisuj "co" — to widać w kodzie).
- Skill `/caveman-commit` generuje message w tym samym formacie (Conventional Commits, ultra-skompresowany) — użyj go swobodnie, nie zastępuje tej konwencji, tylko ją realizuje szybciej.

## Konwencje kodu

- Komponenty serwerowe domyślnie (App Router); `"use client"` tylko gdy potrzebna interaktywność.
- Brak nowych zależności poza ustalonym stackiem bez zapytania usera.
- Dostępność: kontrast, semantyczny HTML, focus states — must-have, nie nice-to-have.
- Nie dodawaj treści placeholder typu "Lorem ipsum" w commitowanym kodzie — użyj wyraźnie oznaczonych TODO albo zapytaj usera o realną treść.

## Zakres i granice

- Nie publikuj (deploy, push do zdalnego repo) bez wyraźnej zgody usera na dany krok.
- Nie zmieniaj ustalonego stacku, IA (3 ścieżki z głównej) ani zasad anonimizacji klientów bez pytania — to decyzje usera, nie agenta.
- Przy niejasności co do treści (dane liczbowe, nazwy klientów, zdjęcia) — pytaj usera, nie zgaduj.

Kiedy decydować samemu, a kiedy pytać:

- **Decyduj sam, bez pytania**: treść commit message, nazwy branchy, drobne konwencje kodu (formatowanie, nazwy zmiennych/plików) w ramach ustalonego stacku.
- **Pytaj, gdy jest więcej niż jedno rozsądne podejście**: wybór konkretnego wzorca/hooka/podejścia w ramach ustalonego stacku (np. który komponent shadcn, jak rozbić plik na moduły) — jeśli nie ma jednego oczywistego rozwiązania, zatrzymaj się i zapytaj zamiast zgadywać.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
