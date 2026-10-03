# personal-website

Wesley Klein's personal website — a portfolio and open sketchbook of software, object, sound, image, and print work. Built with Astro and MDX.

## Commands

Uses `pnpm`.

```sh
pnpm install   # Install dependencies
pnpm dev       # Dev server at localhost:4321
pnpm build     # Build to ./dist/
pnpm preview   # Preview the production build
```

## Structure

```text
/
├── public/              # Fonts, favicon — served as-is
└── src/
    ├── assets/projects/ # Project images, processed at build time
    ├── components/      # Icon.astro, ImageGroup.astro
    ├── content/         # Projects as .mdx (schema in content.config.ts)
    ├── layouts/         # BaseLayout.astro
    ├── pages/           # index.astro, [slug].astro, 404.astro
    └── styles/          # global.css
```

Adding a project: create `src/content/projects/<name>.mdx` with `title`, `summary`, and
`disciplines` frontmatter, then drop its images in `src/assets/projects/<name>/`.
