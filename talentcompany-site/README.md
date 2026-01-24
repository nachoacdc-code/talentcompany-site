# talentcompany-site

Minimal Astro marketing site for TalentCompany (lead-gen focused).

## Commands

All commands run from `talentcompany-site/`:

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the production build |

## Sitemap submission (Google + Bing)

This site generates a sitemap at:

- `https://talentcompany-site.vercel.app/sitemap.xml`

### Google Search Console

1. Add/verify your site property.
2. Go to **Sitemaps**
3. Submit: `/sitemap.xml`

### Bing Webmaster Tools

1. Add/verify your site.
2. Go to **Sitemaps**
3. Submit: `/sitemap.xml`

Tip: for a custom domain, set `SITE="https://yourdomain.com"` in your Vercel project environment variables so canonical URLs and sitemap URLs match your production domain.

## Ops checklist (domain, env vars, deploys)

### Custom domain on Vercel (DNS)

- [ ] Buy/choose your domain (e.g. `talentcompany.com` + optional `www.talentcompany.com`)
- [ ] Vercel Dashboard -> Project -> Settings -> Domains
  - Add your apex domain (e.g. `talentcompany.com`)
  - Add `www` if you want it (e.g. `www.talentcompany.com`)
- [ ] Update DNS at your DNS provider
  - Apex domain (`@`)
    - Recommended: add an A record pointing to Vercel's IP (shown in the Domains UI)
    - Alternative: ALIAS/ANAME if your DNS supports it
  - `www` subdomain
    - Add a CNAME to the Vercel target shown in the Domains UI (often `cname.vercel-dns.com`)
- [ ] Wait for DNS to propagate, confirm the domain shows "Valid Configuration" in Vercel
- [ ] Set canonical/sitemap base URL
  - In Vercel -> Project -> Settings -> Environment Variables, set:
    - `SITE=https://yourdomain.com`

### Environment variables (Calendly, Formspree, analytics)

Vercel Dashboard -> Project -> Settings -> Environment Variables:

- [ ] Calendly embed
  - `PUBLIC_CALENDLY_URL=https://calendly.com/<your-org>/<15min>`
- [ ] Formspree contact form
  - `PUBLIC_FORMSPREE_ACTION=https://formspree.io/f/<yourFormId>`
- [ ] Site base URL (SEO)
  - `SITE=https://yourdomain.com` (production)
- [ ] Analytics (pick one)
  - Plausible: `PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com`
  - Google Analytics: `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
  - PostHog: `PUBLIC_POSTHOG_KEY=...` and `PUBLIC_POSTHOG_HOST=https://app.posthog.com`

### Local dev + shipping changes (branch -> PR -> merge)

- [ ] Install dependencies: `npm install`
- [ ] Run locally: `npm run dev`
- [ ] Create a feature branch: `git checkout -b feat/<short-name>`
- [ ] Commit changes: `git add -A` then `git commit -m "..."`
- [ ] Push branch: `git push -u origin HEAD`
- [ ] Open a PR on GitHub, merge to `main` when approved
- [ ] Vercel
  - PRs create Preview Deployments
  - Merges to `main` create Production deployments

### Daily SEO / Performance checks

- [ ] Lighthouse (quick sanity)
  - `npm run build`
  - `npm run preview`
- [ ] Google Search Console
  - Check Pages/Indexing, Sitemaps, and any Enhancements warnings
  - Confirm sitemap is reachable: `https://yourdomain.com/sitemap.xml`
- [ ] Bing Webmaster Tools
  - Check indexing + sitemap status

## Hero A/B test (homepage)

### Variants (headline + subheadline)

- Hero A (current)
  - Headline: `Flexible Remote Talent for Design & AEC Teams`
  - Subheadline: `Pre-vetted designers and AEC professionals, ready to plug into your workflow â€” full-time, part-time, or managed teams.`
- Hero B (alternate)
  - Headline: `Scale design and BIM capacity in days (not quarters)`
  - Subheadline: `Staff augmentation or managed teams with senior remote specialists. Ramp up fast, reduce hiring risk, and keep delivery moving.`

These variants live in:

- `src/components/HeroA.astro`
- `src/components/HeroB.astro`

### How to toggle locally

- Force a variant using a query param:
  - `/?hero=A`
  - `/?hero=B`
- The selection is persisted in `localStorage` (`tc_hero_variant`). Clear it to re-randomize.

