// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { readingTime } from "./src/lib/reading-time";

// https://astro.build/config
export default defineConfig({
  site: "https://www.astrid.sh/",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [readingTime],
  },
  output: "server",
  adapter: vercel(),
});
