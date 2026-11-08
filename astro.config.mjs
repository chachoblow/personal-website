// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.wesklein.com',
  // Fetch a page when its link is hovered or focused, so it opens instantly
  prefetch: { prefetchAll: true },
  integrations: [mdx(), sitemap()],
})