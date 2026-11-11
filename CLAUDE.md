# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses `pnpm` as the package manager.

```bash
pnpm dev      # Start dev server (http://localhost:4321)
pnpm build    # Type-check, build to dist/, then check dist/ (scripts/check-dist.mjs)
pnpm preview  # Preview production build
pnpm check    # Type-check only (astro check)
pnpm format   # Format with Prettier (format:check to only check)
```

`scripts/check-dist.mjs` runs after every build, locally and in CI (`withastro/action` runs `pnpm run build`). The build also fails on type errors. `check-dist` fails if an original image from `src/assets/projects/` was shipped (see the `meta.clone` note under ImageGroup) or if `dist/` passes 20 MB (it is about 3.6 MB).

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`) at https://www.wesklein.com (`public/CNAME`).

Development happens in the dev container (`.devcontainer/`: Node, pnpm, git, gh, Claude Code). `astro.config.mjs` binds the dev server to all interfaces and allows the host `devbox`, so it is also reachable at http://devbox:4321. The config also turns on `prefetchAll`, which fetches a page when its link is hovered or focused.

TypeScript is pinned to 6.x: `astro check` does not work with TypeScript 7 yet. Prettier skips `.md`/`.mdx` (prose). In `.astro` markup it can move a line break next to inline text, which adds or removes a visible space; the homepage intro's link paragraph is marked `<!-- prettier-ignore -->` for this reason.

## Project context

This is Wesley Klein's personal website, built with Astro 6 and MDX. It replaced an earlier Vue 3 + Vite version of the same site, which has been retired — this repository is the only version.

The site belongs to Wesley Klein — a portfolio and project showcase. The design is intentionally minimal ("a record and open sketchbook"). No CSS frameworks, no component libraries.

## Architecture

### Routing
- `src/pages/index.astro` — homepage with project list. Once loaded and idle, it fetches the first 3 images of every project (about 360 KB; skipped under Save-Data), so a project opens fully drawn and the page crossfade runs between two finished pages
- `src/pages/[slug].astro` — dynamic project pages, driven by content collection
- `src/pages/404.astro` — not found page

Internal links end in `/` (e.g. `/beacon/`): GitHub Pages redirects `/beacon` to `/beacon/`, costing a round trip.

### Content
Projects live in `src/content/projects/` as `.mdx` files. `src/content.config.ts` defines the Zod schema. Adding a project: create `src/content/projects/yourproject.mdx` with frontmatter (`title`, `summary`, `disciplines`, `order`) and MDX body. `order` sets the homepage position, lowest first. Drop images in `src/assets/projects/yourproject/`. Everything in `src/assets/projects/` is built and deployed, so keep images no project uses elsewhere (e.g. `src/assets/unused/`).

MDX files can use `ImageGroup` without importing it, because `[slug].astro` passes it in its `components` map. Any other component has to be added to that map or imported in the MDX file.

The first image in a project's MDX is also its link-preview image (`og:image`). The build fails if a project has none, or if that image has no alt text. `projectImages` in `src/lib/images.ts` finds a project's images by matching `{ src: '…', alt: '…' }` objects in the raw MDX text, so write `src` and `alt` as string literals, not variables.

**Disciplines** (used in frontmatter): `software`, `object`, `sound`, `image`, `print`. Required by the schema but not currently displayed anywhere.

### Components
- `src/layouts/BaseLayout.astro` — wraps all pages, includes global CSS, accepts `title`, `description`, `image` (link preview, converted to a 1200px JPEG), `imageAlt` and `noindex` (used by the 404 page: adds `robots noindex` and drops the canonical URL) props, plus a `head` slot for page-specific `<head>` tags (project and 404 pages use it to preload Gambetta). Adds canonical and Open Graph tags; `@astrojs/sitemap` generates the sitemap. `src/lib/previewImage.ts` finds a project's preview image and alt text; the homepage uses the top project's. Its `theme-color` metas hard-code the page background colors, so keep them in sync with `--color-background` in `global.css`
- `src/components/ImageGroup.astro` — images used in MDX, at most the text width (550px). Clicking one opens a full-screen view up to 2400px wide (without JS the link opens the image). The first image of the first group on a page loads eagerly; the rest are lazy and hidden until loaded, then fade in only if they arrive more than 200 ms after the page opened; a cached or fast one just appears, since fading it in would read as a flicker. Their inline `onload` calls `imageLoaded`, defined by an inline script in the project page's head, which also sets `html.js`; they are hidden only under `html.js`, so without JS they show as usual. The eager image never fades, so the page isn't slower to appear. An animated `name.gif` can have a `name-still.webp` beside it, shown instead when the viewer prefers reduced motion. Read image sizes with `imageSize()` (via `meta.clone`), never `meta.width` etc.: touching any field of an imported image makes Astro ship the original (the Beacon originals are 2–26 MB each).
- `src/components/Lightbox.astro` — the full-screen `<dialog>` viewer for ImageGroup. Only opens (and only shows the zoom-in cursor) when the full view would be at least 25% larger than the image on the page, so it does nothing on a phone in portrait; there the links lose their `href` and label, so they aren't announced or focusable as links. Has a "× *Close*" button styled like BackLink (any click also closes it); the dialog itself, not the button, takes focus on open, so a mouse click shows no focus ring. Included once at the end of project pages; keep its script out of ImageGroup, since an inline script between two groups breaks their adjacent-sibling spacing. Takes no props: it reads the `a.zoom` links ImageGroup renders, whose `data-*` attributes carry the full-screen srcset, size and still-frame srcset
- `src/components/BackLink.astro` — the "↩ *Home*" link (icon + Gambetta italic), used on project pages and the 404 page
- `src/components/Icon.astro` — inline SVG icons. Takes `name: IconName` (see `src/components/icons.ts` for valid values; currently `arrow-u-up-left`, used in BackLink, and `x`, used in Lightbox's Close button). Uses correct Phosphor regular-weight filled paths with `fill="currentColor"`

### Styles
Global CSS in `src/styles/global.css`. CSS custom properties for colors, widths, margins, gaps. Colors follow the system light/dark setting (`prefers-color-scheme`); there is no toggle. Pages crossfade on navigation via the browser's cross-document View Transitions (`@view-transition`, no JS). Both the crossfade and the image fade are off when the viewer prefers reduced motion. Custom fonts served from `public/fonts/` as WOFF2: GeneralSans (400/500, both preloaded; Medium is the page title) for everything, and Gambetta Italic (400, from Fontshare) only for small navigation words: "Home" in BackLink and "Close" in Lightbox, via the global `.nav-label` class.

Key variables:
- `--page-width-medium: 34.375rem` (550px) — content width for text and images
- `--margin-small: 1rem`, `--margin-medium: 2rem`, `--margin-large: 3rem`
- `--gap-small: 4px` (icon to label), `--gap-medium: 1ch` (between images in a group)

Type scale is modeled on benji.org: 14px body (`0.875rem`), `1.25rem` line-height, slight negative letter-spacing.

### Images
Stored in `src/assets/projects/` (processed by Astro/Sharp at build time). `src/lib/images.ts` holds what ImageGroup and the homepage share: loading an image by its MDX path (`import.meta.glob`), the still-frame path, `imageSize`, and `inlineImage`, the options for an image at text width. The homepage's preloads are a cache hit only because both build images with `inlineImage`, so change sizes there, not in one place. ImageGroup uses Astro's `<Image>` component, which adds `width`/`height` attributes. Those only give the image its ratio, so to reserve its space before it loads, each `a.zoom` gets its final width up front (inline `--width`/`--ratio`, smallest of column, image and 70vh tall) and the image fills it. Don't give the `img` `width: auto` again: until it loads it has no size, and the page grows as images arrive. Sharp is installed as a dependency for image processing.
