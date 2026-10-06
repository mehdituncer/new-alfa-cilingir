import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site: 'https://alfa-cilingir.gptuser1212.chatgpt.site', output: 'static', trailingSlash: 'always', integrations: [sitemap()], vite: {plugins: [tailwindcss()]}, devToolbar: {enabled: false}});
