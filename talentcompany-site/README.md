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

## ðŸ‘€ Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
