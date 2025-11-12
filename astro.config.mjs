// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://alfacilingir.com/",
  integrations: [sitemap()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["@lucide/astro"],
    },
  },
  build: {
    inlineStylesheets: "always",
  },
});
