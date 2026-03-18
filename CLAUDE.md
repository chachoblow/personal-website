# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses `pnpm` as the package manager.

```bash
pnpm dev          # Start dev server
pnpm build        # Type-check + build
pnpm lint         # ESLint with auto-fix
pnpm format       # Prettier formatting
pnpm test:unit    # Run Vitest unit tests
pnpm test:e2e     # Run Cypress e2e (against production build)
pnpm test:e2e:dev # Run Cypress e2e (against dev server)
```

## Architecture

Vue 3 + Vite + TypeScript portfolio site. Two routes: home (`/`) and dynamic project pages (`/:slug`).

### Content System

Projects live in `src/content/projects/` as TypeScript files exporting a `ProjectDoc` object. `src/content/index.ts` auto-loads them via `import.meta.glob()`. To add a project, create a new file there — it will be picked up automatically.

**`ProjectDoc` structure** (`src/content/types.ts`):
- `slug`, `title`, `summary`, `disciplines` — metadata
- `content: Block[]` — array of typed content blocks (`BlockType` enum: Text, Image, Carousel, etc.)

**`DisciplineType`** (`src/content/disciplines.ts`): Software, Object, Sound, Image, Print — used for filtering on the homepage.

### Styling

- Global CSS in `src/assets/main.css` using CSS custom properties for colors, page widths, margins, and gaps
- Custom font: GeneralSans (400 regular, 500 medium) from `src/assets/fonts/`
- No CSS framework — plain CSS with scoped styles per component

### Code Style

Prettier config: no semicolons, single quotes, no parens on single arrow params.
