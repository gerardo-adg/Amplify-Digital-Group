// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/data/site.ts";

export default defineConfig({
  site: site.url,
  trailingSlash: "always",
  build: { format: "directory" },
  vite: { build: { chunkSizeWarningLimit: 1200 } },
  integrations: [sitemap({ filter: (page) => !page.includes("/thanks/") })],
});
