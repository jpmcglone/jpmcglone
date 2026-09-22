# John P. McGlone’s website

A static Nuxt 4 / Vue portfolio using Nuxt UI 4, Tailwind CSS 4, and Inter. GitHub Pages hosts the generated site at https://jpmcglone.com.

## Setup

Use Node 24 (`nvm use`) and npm 11 or later:

```sh
npm ci
npm run dev -- --port 3001
```

The project also installs Node 24 locally so npm scripts use a consistent runtime even when the shell has an older Node patch. npm and `package-lock.json` are the authoritative package manager and lockfile.

## Quality checks

```sh
npm run check         # Zero-warning ESLint, Prettier, Vue/TypeScript, Vitest
npm run generate      # Production build and static prerendering
npm run check:site    # Generated routes, SEO metadata, indexing, local assets
npm run audit        # Dependency security advisories
```

Use `npm run lint:fix`, `npm run format`, and `npm run test:watch` during development. GitHub Actions runs the same checks on pull requests and pushes to `main`; it does not deploy.

Tests cover skill search and ranking, historical dates, safe inline content, shared profile metadata, and icon availability. The generated-site check ensures the two tools remain unlisted and have `noindex` metadata.

## Content and design

- `data/` holds profile, résumé, search keywords, and page metadata.
- `components/resume/` renders the résumé sections.
- `app.config.ts` and `assets/css/tailwind.css` define the dark theme and UI component overrides.
- `public/data/` contains legacy data exports; the app imports the typed files in `data/`.
- TypeScript stays on the Vue tooling’s established 5.9 line. The scoped `fontless → esbuild` override avoids GHSA-g7r4-m6w7-qqqr until the upstream font package updates its range. Automatic font fetching is disabled; Inter is bundled locally.

## Deployment

```sh
npm run check
npm run generate
npm run check:site
npm run deploy
```

The deploy script publishes `.output/public` to the `gh-pages` branch and adds `.nojekyll`; `public/CNAME` preserves the custom domain. Pushing source to `main` alone does not deploy.

Stop the development server before generating in the same checkout: both commands write to `.nuxt`. To keep development running, generate from a separate checkout or temporary source copy.
