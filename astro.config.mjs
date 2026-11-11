// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.wesklein.com',
  // Fetch a page when its link is hovered or focused, so it opens instantly
  prefetch: { prefetchAll: true },
  integrations: [mdx(), sitemap()],
  // Listen on all interfaces so the dev server is reachable from outside its
  // container, and accept requests addressed to devbox (http://devbox:4321)
  server: { host: true, allowedHosts: ['devbox'] },
})