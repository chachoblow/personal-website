# To do

Possible improvements, not commitments.

## Move hosting off GitHub Pages

GitHub Pages serves every file with `cache-control: max-age=600`, and that can't
be changed. Astro's files in `/_astro/` are content-hashed, so they could be
cached for a year; as it is, a visitor returning after 10 minutes re-checks every
image with the server. First visits wouldn't change much.

- **Pick:** Cloudflare (free, `_headers` file for cache rules). Netlify also works
  and can leave DNS at Namecheap.
- **Repo:** add `public/_headers` (`/_astro/*` → `public, max-age=31536000,
  immutable`; `/fonts/*` shorter, since font names aren't hashed), keep building
  in GitHub Actions (so `astro check` and `check-dist` still run) but deploy to
  Cloudflare with an API token secret, remove `public/CNAME`, update `CLAUDE.md`
  and `README.md`.
- **Outside the repo:** add wesklein.com to Cloudflare (it copies the current DNS
  records), switch the nameservers at Namecheap, attach `www.wesklein.com` to the
  project, redirect `wesklein.com` to `www`, then turn off GitHub Pages. In that
  order there's no downtime.
- **Trade-off:** faster repeat visits and more control, against a second account,
  DNS in a new place, and a deploy that depends on a token.

## Visitor analytics

To see how many people visit and which projects they open.

- **Google Tag Manager / Google Analytics:** free and detailed, but heavy for this
  site (GTM plus GA4 is well over 100 KB of JavaScript, more than the pages' own),
  sets cookies, so EU and UK visitors would need a consent banner, and is often
  blocked by ad blockers. A poor fit for a minimal, no-framework site.
- **Lighter, cookieless options** (no consent banner needed, a few KB or less):
  - Cloudflare Web Analytics: free; comes with the hosting move above.
  - GoatCounter: free for personal sites, open source, one small script.
  - Plausible or Fathom: paid, polished dashboards.
  - Umami: open source; free if self-hosted, or a hosted plan.
- **Leaning:** Cloudflare Web Analytics if hosting moves there, otherwise
  GoatCounter. Either is one script tag in `BaseLayout.astro`.
