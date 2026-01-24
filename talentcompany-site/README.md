# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> ðŸ§‘â€ðŸš€ **Seasoned astronaut?** Delete this file. Have fun!

## ðŸš€ Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
â”œâ”€â”€ public/
â”œâ”€â”€ src/
â”‚   â””â”€â”€ pages/
â”‚       â””â”€â”€ index.astro
â””â”€â”€ package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## ðŸ§ž Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Sitemap submission (Google + Bing)

This site generates a sitemap at:

- `https://talentcompany-site.vercel.app/sitemap.xml`

### Google Search Console

1. Open Google Search Console and add/verify your site property.
2. Go to **Sitemaps**.
3. Submit: `/sitemap.xml`

### Bing Webmaster Tools

1. Open Bing Webmaster Tools and add/verify your site.
2. Go to **Sitemaps**.
3. Submit: `/sitemap.xml`

Tip: for a custom domain, set `SITE="https://yourdomain.com"` in your Vercel project environment variables so canonical URLs and sitemap URLs match your production domain.

## Ops checklist (domain, env vars, deploys)

### Custom domain on Vercel (DNS)

- [ ] **Buy/choose your domain** (e.g. `talentcompany.com` + optional `www.talentcompany.com`)
- [ ] **Vercel Dashboard â†’ Project â†’ Settings â†’ Domains**
  - Add your apex domain (e.g. `talentcompany.com`)
  - Add `www` if you want it (e.g. `www.talentcompany.com`)
- [ ] **Update DNS at your DNS provider**
  - **Apex domain (`@`)**:
    - Recommended: add an **A record** pointing to Vercelâ€™s IP (Vercel will show the exact IP in the Domains UI)
    - Alternative: use the provider-specific â€œALIAS/ANAMEâ€ option if your DNS supports it
  - **`www` subdomain**:
    - Add a **CNAME** to the Vercel target shown in the Domains UI (often `cname.vercel-dns.com`)
- [ ] **Wait for DNS to propagate**, then confirm the domain shows â€œValid Configurationâ€ in Vercel
- [ ] **Set canonical/sitemap base URL**
  - In Vercel â†’ Project â†’ Settings â†’ Environment Variables, set:
    - `SITE=https://yourdomain.com`

### Environment variables (Calendly, Formspree, analytics)

Vercel Dashboard â†’ Project â†’ Settings â†’ Environment Variables:

- [ ] **Calendly embed**
  - `PUBLIC_CALENDLY_URL=https://calendly.com/<your-org>/<15min>`
- [ ] **Formspree contact form**
  - `PUBLIC_FORMSPREE_ACTION=https://formspree.io/f/<yourFormId>`
- [ ] **Site base URL (SEO)**
  - `SITE=https://yourdomain.com` (production)
- [ ] **Analytics (pick one)**
  - Plausible: `PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com`
  - Google Analytics: `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
  - PostHog: `PUBLIC_POSTHOG_KEY=...` + `PUBLIC_POSTHOG_HOST=https://app.posthog.com`

### Local dev + shipping changes (branch â†’ PR â†’ merge)

- [ ] **Install dependencies**
  - `npm install`
- [ ] **Run locally**
  - `npm run dev`
- [ ] **Create a feature branch**
  - `git checkout -b feat/<short-name>`
- [ ] **Commit changes**
  - `git add -A`
  - `git commit -m \"...\"`
- [ ] **Push branch**
  - `git push -u origin HEAD`
- [ ] **Open a PR on GitHub**
  - Merge to `main` when approved
- [ ] **Vercel**
  - PRs create **Preview Deployments**
  - Merges to `main` create **Production deployments**

### Daily SEO / Performance checks

- [ ] **Lighthouse (quick sanity)**
  - Run locally against a production build:
    - `npm run build`
    - `npm run preview`
  - Audit with Lighthouse (desktop + mobile) and address regressions.
- [ ] **Google Search Console**
  - Check **Pages / Indexing**, **Sitemaps**, and any **Enhancements** warnings
  - Confirm sitemap is reachable:
    - `https://yourdomain.com/sitemap.xml`
- [ ] **Bing Webmaster Tools**
  - Check indexing + sitemap status

## Hero A/B test (homepage)

### Variants (headline + subheadline)

- **Hero A (current)**:
  - Headline: `Flexible Remote Talent for Design & AEC Teams`
  - Subheadline: `Pre-vetted designers and AEC professionals, ready to plug into your workflow â€” full-time, part-time, or managed teams.`
- **Hero B (alternate)**:
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

### A/B test plan (small + actionable)

**What to measure**

- **Primary KPI**: Hero primary CTA click-through rate (CTR) to `#contact`
- **Secondary KPIs**:
  - Contact form submissions (Formspree dashboard)
  - Calendly bookings (Calendly dashboard)
  - Scroll depth / engagement (optional)

**How to run the test**

Option 1 â€” **Vercel Preview Deployments (no code changes)**:

- Create two branches:
  - `test/hero-a` (render only `HeroA`)
  - `test/hero-b` (render only `HeroB`)
- Open PRs and use the two Preview URLs as the test URLs (split traffic from ads/email equally).

Option 2 â€” **Simple on-page A/B snippet (already implemented)**:

- Homepage chooses A/B on first visit and stores it in `localStorage`.
- It also pushes `hero_variant` and `hero_primary_click` events to `window.dataLayer` for later analytics wiring.

**Expected impact**

- Target: **+10â€“20%** improvement in hero CTA CTR
- If CTR improves, expect downstream lift in:
  - form submits and/or bookings (often **+5â€“15%** depending on traffic quality)

## ðŸ‘€ Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
