// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used by @astrojs/sitemap to generate absolute URLs.
  // Set SITE="https://your-domain.com" in your environment for production.
  site: process.env.SITE ?? 'https://example.com',

  // Optimized images via built-in astro:assets using sharp.
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});