# Release Notes

Branch: `update-site-structure`  
Date: 2026-01-29

## Summary
- **Navigation**: Updated header navigation to the new structure (Home, Solutions dropdown, Roles, How It Works, **Book a Call** primary CTA) with improved accessibility (ARIA + keyboard behavior).
- **New site structure**: Added the core sitemap routes for Solutions, Roles, and How It Works, plus legal pages (Terms, Privacy, Cookies).
- **Homepage refresh**: Replaced the homepage with a new layout (hero + solution cards + steps + roles + proof + CTA).
- **Solutions pages populated**: Built out content for AEC, Creative & Design, and Marketing solution pages (plus key child pages).
- **Footer**: Redesigned to a clearer multi-column layout with legal links in the bottom bar.
- **SEO infrastructure**:
  - Generated and committed sitemap files under `public/` and updated `public/robots.txt` to reference the sitemap.
  - Added JSON-LD on main Solutions pages + How It Works to help search/LLM retrieval (where present).
- **Lead-gen wiring**:
  - Centralized booking link via env vars (`PUBLIC_BOOKING_URL` / `PUBLIC_CALENDLY_URL`).
  - Added a site-wide **“Tell Us Your Needs”** modal with validation and Formspree support (with local fallback + CSV download).

## What changed (high level)
- **Navbar**: `src/components/Nav.astro`
- **Footer**: `src/components/Footer.astro`
- **Booking + modal**:
  - `src/lib/cta.ts` (booking + Formspree config)
  - `src/components/TellUsNeedsModal.astro` (modal form + validation + submit)
- **Sitemap + robots**:
  - `public/robots.txt`
  - `public/sitemap.xml`, `public/sitemap-index.xml`, `public/sitemap-0.xml`
  - `scripts/postbuild.mjs` (copies generated sitemaps into `public/`)
- **Key pages**:
  - Home: `src/pages/index.astro`
  - How It Works: `src/pages/how-it-works.astro`
  - Solutions: `src/pages/solutions/**`
  - Roles: `src/pages/roles/**`

## Deployment (Vercel)
This project is set up for Vercel auto-deploy.

### Recommended workflow
1. Open a PR from `update-site-structure` → `main`.
2. Review the Vercel **Preview Deployment** from the PR.
3. Merge the PR into `main`.
4. Vercel will automatically create a **Production deployment** from `main`.

### Environment variables (recommended)
Set these in Vercel (Project → Settings → Environment Variables):
- **Site base URL (SEO + sitemap)**:
  - `SITE=https://yourdomain.com` (when you have a domain)
- **Booking**
  - `PUBLIC_BOOKING_URL=https://calendly.com/<org>/<event>` (preferred)
  - or `PUBLIC_CALENDLY_URL=...`
- **Form submission**
  - `PUBLIC_FORMSPREE_ACTION=https://formspree.io/f/<id>`

## Placeholder replacement reminders
The site currently includes placeholders in a few areas to be replaced as copy/design assets become available:

- **Images**
  - Hero images/visual blocks on Solutions pages (add real imagery + alt text)
  - Optional per-page OpenGraph images (if you want custom OG per page)
- **Proof**
  - Testimonials (replace “TODO testimonial…” blocks)
  - Add **2 case snippets** per Solutions page (short: context → work → result)
- **ROI / calculator**
  - Replace “ROI teaser / savings calculator placeholder” on team pages with an embed or simple calculator component.
- **Design Brief Kit**
  - Add the downloadable template and link it on Creative & Design pages.
- **Role pages**
  - Expand placeholder role pages beyond the Architectural Designer template.
- **SEO structured data**
  - Ensure FAQs displayed on-page match any FAQ JSON-LD added.
  - Add lightweight JSON-LD to pages that currently lack it (roles directory + role pages, individuals pages, PM-led page) if desired.

## Content tracking
See `content-checklist/` for per-page checklists designers/copywriters can follow.

