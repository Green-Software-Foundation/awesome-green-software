import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://jrauvola.github.io',
  base: '/awesome-green-software',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })]
});