# brendanpotter.com

Personal site in the spirit of classic-web minimalism: paper background, serif type, four tabs, instant on mobile. Built with Vite + React. Three.js survives as a signature, not a centerpiece: a drag-to-spin low-poly plane in the header and a campfire easter egg in the footer.

## Layout

```
brendan-personal-website/      the app (run everything from here)
  src/
    pages/                     HomePage (eager) · Projects / Photos / Changelog (lazy routes)
    components/                Nav, Footer, Reveal (cascade load-in), PlaneSlot,
                               ContributionGraph, ErrorBoundary, CampfireOverlay
    component_models/          Plane3D, Campfire3D (the only files importing three)
    threejs_models/            PlaneModel, CampingModel (GLTF wrappers)
    data/                      site.js · experience.js · projects.js · tags.js · changelog.js
    photos/                    drop images here → they appear on /photos
    styles/                    tokens.css · global.css · components.css (plain CSS, no Tailwind)
  public/assets/               low_poly_plane (315KB) · low_poly_forest_campfire (4.1MB, lazy)
```

## Develop

```bash
cd brendan-personal-website
npm install
npm run dev        # vite dev server
npm run build      # production build
npm run preview    # serve the build
npm run lint       # eslint
```

## Updating content

Everything editable lives in `src/data/` and `src/photos/`. See `CLAUDE.md` for the exact one-sentence workflows ("add a changelog entry", "add a photo", "add a project") — they're written so you can hand them to an agent verbatim.

## Performance shape

- First paint is text only: entry chunk ≈ 82KB gz (React + router + calendar + home).
- three.js lives in a shared lazy chunk; the plane model (315KB) loads after `requestIdleCallback`.
- The campfire's 4.1MB scene downloads only if someone clicks "sit by the fire" in the footer.
- Photos and secondary routes are code-split; images use native `loading="lazy"`.
- All load-in animation (cascade fade-up) disables under `prefers-reduced-motion`.

## Hosting note (SPA fallback)

Deep links like `/changelog` need a rewrite to `index.html` on static hosts:

- **Vercel**: covered by `brendan-personal-website/vercel.json` (already in the repo).
- **Netlify**: add `_redirects` with `/* /index.html 200`.
- **GitHub Pages**: copy `dist/index.html` to `dist/404.html` after build.
