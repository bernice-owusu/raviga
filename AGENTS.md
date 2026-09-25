# AGENTS.md

Single-page marketing site for **Raviga Engineering Limited** (Ghanaian telecom field ops / fiber
OSP). Not a backend project — see "What this repo is not".

## Commands

```bash
npm install
npm run dev       # vite on port 3000, host 0.0.0.0
npm run lint      # tsc --noEmit  (this IS the typecheck — there is no linter)
npm run build
```

Verification loop is just `npm run lint` → `npm run build`.

### Gotchas

- **`npm run clean` is broken on Windows.** The script is `rm -rf dist server.js`, and npm runs
  scripts through `cmd.exe`, where `rm` does not exist. Delete `dist/` manually instead.
- **No tests, no ESLint, no Prettier, no CI, no pre-commit hooks.** `package.json` `lint` is a
  typecheck alias. Do not add a "run the tests" step; there is nothing to run. If you add tests,
  you must also add the runner, config, and script.
- **Toolchain is unusual**: TypeScript `7.0.2` (the native compiler) and Vite `8.3`. `tsconfig.json`
  has **no `strict`** and no `include`/`exclude`, so `tsc` typechecks every `.ts/.tsx/.js` under the
  project root (including local `dist/` output). Don't assume type safety you haven't verified.
- `DISABLE_HMR=true` turns off both HMR *and* file watching (`vite.config.ts`). AI Studio sets this
  so agent edits don't cause flicker. Leave that block alone; change it only if you understand you
  are disabling HMR for your own dev loop.
- Shell is PowerShell on this machine — no `rm`, `cp`, `grep`. Use PowerShell cmdlets or the
  dedicated file tools.

## What this repo is not (stale template artifacts)

Trust the code, not the template metadata. Several things imply a server/API that does not exist:

- **No API keys, no env loading, no network calls.** `@google/genai`, `express`, and `dotenv` are
  installed but **never imported** anywhere in `src/`. The README's "set `GEMINI_API_KEY` in
  `.env.local`" step is vestigial from the Google AI Studio template. `.env.example` is empty and
  `.env*` is gitignored — do not add env plumbing unless a feature actually needs it.
- `metadata.json` declares `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`, but there is no server. It's
  the only file AI Studio reads; keep it accurate if you change the app's nature.
- `package.json` is still named `react-example` (template default), not `raviga`.

## Architecture

- `index.html` → `src/main.tsx` → `src/App.tsx`. `App.tsx` is the composition root and the single
  owner of cross-section state: `currentTheme`, and the two modal open/close states. All interactivity
  is lifted here; sections receive callbacks (`onOpenQuoteModal`, `onOpenCalibrationModal`,
  `onOpenServiceDetails`) rather than owning navigation between sections.
- **Content is data-driven.** `src/data/companyData.ts` (~470 lines) holds all copy, contact details,
  services, equipment, clients, and org chart. `src/types.ts` defines the matching interfaces. Add or
  edit copy here, not inline in JSX. Phones/emails/WhatsApp number exist in **several places** in that
  file plus at least one hardcoded literal in `ContactSection.tsx` — update all of them.
- **Large parts of `companyData.ts` are never rendered**: `EQUIPMENT_CATALOG`,
  `MANAGEMENT_ORGANIZATION`, and `CLIENT_PARTNERS` are exported but imported by nothing.
  `ClientTrackRecord.tsx` hardcodes its own client data instead. Don't "fix" the site by assuming
  the equipment catalog should be on the page — it currently isn't, by design or by omission.
- `RavigaLogo.tsx` is an inline SVG component with `variant`/`showTagline` props — prefer it over
  the image files in `public/assets/`.

### Theming (read before touching colors)

- Three themes: `light` | `navy` | `steel`, persisted in `localStorage` under `raviga_theme`, default
  `light`. `App.tsx` swaps a class on `<html>` and passes `currentTheme` down.
- **`dark:` is media-query based, not class-based.** Tailwind 4 has no `@custom-variant dark` here,
  so every `dark:` utility compiles to `@media (prefers-color-scheme: dark)`. Toggling the `dark`
  class on `<html>` has **no effect** on those utilities. Themes actually re-skin the site because
  components branch on `const isLight = currentTheme === 'light'` and apply their own class strings.
- `theme-navy` and `theme-steel` have **no CSS beyond scrollbar colors**. When adding theming for a
  component, follow the existing `isLight ? ... : ...` pattern; do not rely on `dark:` or on
  `theme-*` classes doing anything.

### Tailwind 4 specifics

No `tailwind.config.js` and no `postcss.config.js` — Tailwind runs through `@tailwindcss/vite`
(`@import "tailwindcss"` in `src/index.css`). There is no `@theme` block, so there are no custom
design tokens. Use stock palette classes. `autoprefixer` is a dependency but is not wired up.

## Conventions

- `React.FC<Props>` with an explicitly declared `interface XxxProps` co-located above the component.
  Components are **named exports** (`export const Hero`), only `App` and `main` are default exports.
- Icons come from `lucide-react` and are **not** resolved dynamically. `ServiceItem.iconName` and
  `EquipmentItem.imageTag` are plain strings consumed by hand-written `switch` statements (e.g.
  `getServiceIcon` in `ServicesSection.tsx`). Adding an icon to `companyData.ts` renders nothing
  until you add a matching `case`, and unknown names silently fall back to a default icon.
- `currentTheme?: 'light' | 'navy' | 'steel'` is passed to nearly every section and defaults to
  `'light'`. Keep this prop threading intact.
- The contact form is **client-side only**: it generates a fake ticket id
  (`RFP-RVG-${random 6 digits}`), then hands off to `wa.me` / `mailto:` via `window.open`. There is
  no submission endpoint, no persistence, and no validation backend. If you need real submissions,
  that's a new feature requiring a backend decision — flag it rather than assuming one exists.
- Both modals are separate components that each build their own `fixed inset-0 z-50` overlay and
  early-return `null` when closed. There's no shared `Modal` primitive — if you add a third, decide
  whether to extract one.
- Hard Tailwind dark colors (`bg-slate-900`, `text-slate-100`) are baked into the modal internals,
  which is why modals look dark even in the light theme. Match this if you extend them.
- No formatting tool, but the existing style is consistent: 2-space indent, **single quotes**, JSX
  attributes double-quoted, no semicolon discipline enforced (mixes), `import` paths relative
  (`../data/companyData`). Match the surrounding file.

## Conventions to preserve

- Only `src/`, `index.html`, `public/`, and the config files are tracked. `dist/` and `node_modules/`
  are gitignored but `dist/` may contain a stale local build — ignore it, and don't commit it.
- `index.html` carries hand-written SEO/meta tags and a Google Fonts link (Plus Jakarta Sans, Space
  Grotesk). Fonts are loaded from the network, not bundled.
