// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// Detect environment to set correct base for asset URLs
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  integrations: [tailwind()],
  // Keep site empty on Vercel; set for GitHub Pages so sitemap/canonical work
  site: isGithubPages ? 'https://tourlivebr.github.io' : undefined,
  // Only use base on GitHub Pages project pages. On Vercel it must be undefined.
  base: isGithubPages ? '/mktsolucoes' : undefined,
});
