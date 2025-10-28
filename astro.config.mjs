import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  integrations: [react(), tailwind({
    applyBaseStyles: true
  })],
  vite: {
    envPrefix: ['PUBLIC_', 'ALGOLIA_']
  }
});