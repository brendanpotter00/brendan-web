# brendan-web — agent guide

Personal site (Vite + React, plain CSS). App lives in `brendan-personal-website/`; run all npm commands from there. Site content is data-driven: most requests are one-file edits under `brendan-personal-website/src/data/` or a file drop into `brendan-personal-website/src/photos/`.

Copy rule for ALL site text: **no em dashes**. Use periods, commas, colons, or "·" separators. Year ranges like "2023–26" (en dash) are fine.

## Workflow: add a changelog entry

When asked to "add a changelog entry", "log an event", "add something to my changelog" (with or without a tag):

1. Open `brendan-personal-website/src/data/changelog.js`.
2. Append an object to `ENTRIES` (position doesn't matter; the page sorts newest-first):
   ```js
   {
     date: "YYYY-MM-DD",          // required; today unless told otherwise
     title: "Short lead-in",      // optional bold prefix
     text: "One or two sentences. No em dashes.",  // required
     tags: ["career"],            // required; ids from src/data/tags.js
     link: { href: "https://…", label: "live" },   // optional
   }
   ```
3. Tags must exist in `src/data/tags.js` (`career`, `side-projects`, `leisure`). If the user names a new tag, add `{ id, label }` to `TAGS` first, then use it.
4. Verify: `npm run lint` passes; entry appears at `/changelog` (dev server) and filters by its tag.

## Workflow: add a photo

When asked to "add a photo/picture" (the user supplies a file or path):

1. Name it `YYYY-MM-DD-short-caption.ext` (`jpg`/`jpeg`/`png`/`webp`). The date prefix drives sort order (newest first); the rest of the name becomes the caption with dashes shown as spaces.
2. If the source is over ~2000px on the long edge or over ~500KB, downscale/compress first (e.g. `sips -Z 2000 in.jpg --out out.jpg` on macOS), photos are landscape-orientation by convention.
3. Drop it in `brendan-personal-website/src/photos/`.
4. Verify: it renders on `/photos` (build-time glob; restart dev server if it doesn't appear).

## Workflow: add a project

When asked to "add a project": append to `PROJECTS` in `brendan-personal-website/src/data/projects.js` (newest first): `{ name, description, links: { live: url, repo: url } }` (either link optional). Verify on `/projects`.

## Workflow: edit bio / experience / contact

- Tagline, email, socials, location, key URLs: `src/data/site.js`.
- Experience one-liners: `src/data/experience.js` (`years` is a short display string; keep `text` to one sentence).
- About paragraphs: `src/pages/HomePage.jsx` (the only content that lives in a component).

## Architecture constraints (do not break)

- **Nothing eager may import three.js.** Only `src/component_models/*` and `src/threejs_models/*` may import `three`/`@react-three/*`, and they're reached exclusively through `React.lazy` (PlaneSlot, CampfireOverlay). If `npm run build` warns a module is "dynamically and statically imported", that boundary broke.
- Secondary pages (`/projects`, `/photos`, `/changelog`) stay lazy routes in `App.jsx`.
- Load-in animation is the `Reveal` component (cascade fade-up). New list/section content should be wrapped in `Reveal` with a small `index` for stagger; it must stay disabled under `prefers-reduced-motion`.
- Styling is plain CSS in `src/styles/` (tokens/global/components). No Tailwind, no CSS-in-JS, no new UI dependencies for content changes.
- SPA deep links need the rewrite in `brendan-personal-website/vercel.json`; keep it when touching hosting.

## Verify before declaring done

```bash
cd brendan-personal-website
npm run lint && npm run build
```

For visual changes also walk `/`, `/projects`, `/photos`, `/changelog` at 390px width.
