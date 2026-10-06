import type { APIRoute } from 'astro';
const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended'];
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /', '', '# Arama ve yapay zekâ asistanları sitenin tamamını okuyabilir', ...bots.flatMap((b) => ['User-agent: ' + b, 'Allow: /', '']), 'Sitemap: ' + new URL('sitemap-index.xml', site).href, ''];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
