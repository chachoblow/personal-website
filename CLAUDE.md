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
- `src/pages/index.astro` — homepage with project list and discipline filter
- `src/pages/[slug].astro` — dynamic project pages, driven by content collection
- `src/pages/404.astro` — not found page

### Content
Projects live in `src/content/projects/` as `.mdx` files. `src/content.config.ts` defines the Zod schema. Adding a project: create `src/content/projects/yourproject.mdx` with frontmatter (`title`, `summary`, `disciplines`) and MDX body. Drop images in `src/assets/projects/yourproject/`.

**Disciplines** (used in frontmatter): `software`, `object`, `sound`, `image`, `print`

### Components
- `src/layouts/BaseLayout.astro` — wraps all pages, includes global CSS, accepts `title` and `description` props
- `src/components/ImageGroup.astro` — flex grid of images, used in MDX. Takes `images: { src: string, alt: string }[]` where `src` is a `/projects/...` path (resolved via `import.meta.glob` against `src/assets/projects/`)
- `src/components/Icon.astro` — inline SVG icons. Takes `name: IconName` (see `src/components/icons.ts` for valid values). Uses correct Phosphor regular-weight filled paths with `fill="currentColor"`

### Styles
Global CSS in `src/styles/global.css`. CSS custom properties for colors, widths, margins, gaps. Custom font: GeneralSans (400/500) served from `public/fonts/`.

Key variables:
- `--page-width-medium: 640px` — text content width
- `--page-width-large: 900px` — image group width
- `--margin-small: 1lh`, `--margin-medium: 2lh`, `--margin-large: 3lh`

### Images
Stored in `src/assets/projects/` (processed by Astro/Sharp at build time). `ImageGroup.astro` resolves paths via `import.meta.glob` and uses Astro's `<Image>` component, which adds `width`/`height` attributes to prevent layout shift. Sharp is installed as a dependency for image processing.

### Discipline filter
The homepage filter is plain vanilla JS (inline `<script>` in `index.astro`). Clicking a filter button toggles `li.hidden` on project list items. No framework island needed.

## Known deferred work
- Filter animation (smooth fade + collapse) — attempted but removed due to bugs, left for later
