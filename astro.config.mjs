// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321", // Deploy ederken burayı kendi domain adresinizle değiştirin
  output: "server",
  adapter: cloudflare(),
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
