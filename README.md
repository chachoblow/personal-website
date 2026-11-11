# personal-website

Wesley Klein's personal website — a portfolio and open sketchbook of software, object, sound, image, and print work. Built with Astro and MDX.

## Commands

Uses `pnpm`.

```sh
pnpm install        # Install dependencies
pnpm dev            # Dev server at localhost:4321
pnpm build          # Type-check, build to ./dist/, then check dist/
pnpm preview        # Preview the production build
pnpm check          # Type-check only
pnpm format         # Format with Prettier (format:check to only check)
```

The build fails on type errors, on a project with no preview image (its first
image, which needs alt text), and in `scripts/check-dist.mjs` if an original
image was shipped or `dist/` passes 20 MB. Pushing to `main` deploys to GitHub
Pages.

## Structure

```text
/
├── .devcontainer/       # Dev container: Node, pnpm, git, gh, Claude Code
├── public/              # Fonts, favicon — served as-is
├── scripts/             # check-dist.mjs, run after every build
└── src/
    ├── assets/projects/ # Project images, processed at build time
    ├── components/      # BackLink, Icon, ImageGroup, Lightbox
    ├── content/         # Projects as .mdx (schema in content.config.ts)
    ├── layouts/         # BaseLayout.astro
    ├── lib/             # previewImage.ts (link-preview image)
    ├── pages/           # index.astro, [slug].astro, 404.astro
    └── styles/          # global.css
```

Adding a project: create `src/content/projects/<name>.mdx` with `title`, `summary`,
`disciplines` and `order` (homepage position) frontmatter, then drop its images in `src/assets/projects/<name>/`
and show them with `<ImageGroup images={[{ src: '/projects/<name>/a.webp', alt: '…' }]} />`.
Keep images no project uses out of `src/assets/projects/` (e.g. in `src/assets/unused/`), since everything there is built.
