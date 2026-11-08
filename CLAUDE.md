# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses `pnpm` as the package manager.

```bash
pnpm dev      # Start dev server (http://localhost:4321)
pnpm build    # Build to dist/
pnpm preview  # Preview production build
```

## Project context

This is Wesley Klein's personal website, built with Astro 6 and MDX. It replaced an earlier Vue 3 + Vite version of the same site, which has been retired — this repository is the only version.

The site belongs to Wesley Klein — a portfolio and project showcase. The design is intentionally minimal ("a record and open sketchbook"). No CSS frameworks, no component libraries.

## Architecture

### Routing
- `src/pages/index.astro` — homepage with project list
- `src/pages/[slug].astro` — dynamic project pages, driven by content collection
- `src/pages/404.astro` — not found page

### Content
Projects live in `src/content/projects/` as `.mdx` files. `src/content.config.ts` defines the Zod schema. Adding a project: create `src/content/projects/yourproject.mdx` with frontmatter (`title`, `summary`, `disciplines`) and MDX body. Drop images in `src/assets/projects/yourproject/`.

**Disciplines** (used in frontmatter): `software`, `object`, `sound`, `image`, `print`. Required by the schema but not currently displayed anywhere.

### Components
- `src/layouts/BaseLayout.astro` — wraps all pages, includes global CSS, accepts `title` and `description` props
- `src/components/ImageGroup.astro` — images used in MDX, at most the text width (550px). Clicking one opens a full-screen view up to 2400px wide (without JS the link opens the image).
- `src/components/Lightbox.astro` — the full-screen `<dialog>` viewer for ImageGroup. Only opens (and only shows the zoom-in cursor) when the full view would be at least 25% larger than the image on the page, so it does nothing on a phone in portrait. Included once at the end of project pages; keep its script out of ImageGroup, since an inline script between two groups breaks their adjacent-sibling spacing. Takes `images: { src: string, alt: string }[]` where `src` is a `/projects/...` path (resolved via `import.meta.glob` against `src/assets/projects/`)
- `src/components/BackLink.astro` — the "↩ *Home*" link (icon + Gambetta italic), used on project pages and the 404 page
- `src/components/Icon.astro` — inline SVG icons. Takes `name: IconName` (see `src/components/icons.ts` for valid values; currently only `arrow-u-up-left`, used in BackLink). Uses correct Phosphor regular-weight filled paths with `fill="currentColor"`

### Styles
Global CSS in `src/styles/global.css`. CSS custom properties for colors, widths, margins, gaps. Custom fonts served from `public/fonts/`: GeneralSans (400/500) for everything, and Gambetta Italic (400, from Fontshare) only for the italic "Home" in BackLink.

Key variables:
- `--page-width-medium: 34.375rem` (550px) — content width for text and images
- `--margin-small: 1rem`, `--margin-medium: 2rem`, `--margin-large: 3rem`

Type scale is modeled on benji.org: 14px body (`0.875rem`), `1.25rem` line-height, slight negative letter-spacing.

### Images
Stored in `src/assets/projects/` (processed by Astro/Sharp at build time). `ImageGroup.astro` resolves paths via `import.meta.glob` and uses Astro's `<Image>` component, which adds `width`/`height` attributes to prevent layout shift. Sharp is installed as a dependency for image processing.
