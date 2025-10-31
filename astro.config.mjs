import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isProductionBuild = process.env.NODE_ENV === 'production';
const defaultBase = isProductionBuild ? '/awesome-green-software' : '/';
const base = process.env.BASE_PATH ?? defaultBase;
const site = process.env.SITE_URL ?? (base !== '/' ? `https://green-software-foundation.github.io${base}` : undefined);

export default defineConfig({
  site,
  base,
  integrations: [react(), tailwind({
    applyBaseStyles: true
  })],
  vite: {
    envPrefix: ['PUBLIC_', 'ALGOLIA_']
  }
});