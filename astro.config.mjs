import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://alfacilingir.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page), serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }) })],
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
