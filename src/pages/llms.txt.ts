import type { APIRoute } from 'astro';
import editorial from '../data/editorial.json';
import { business, regions, faq } from '../data/site';
import { regionContent } from '../data/region-content';
// Machine-readable summary for AI assistants (llmstxt.org). Built from the same data as the pages, so it stays in sync.
// The 10-minute figure mirrors the hero and the FAQ: it is a target, not a promise.
const summary = 'Alfa Çilingir, İstanbul’un batısında (Beylikdüzü, Esenyurt, Büyükçekmece, Avcılar ve Bahçeşehir) kapı açma, oto çilingir, kasa açma, kilit değişimi, kırık anahtar çıkarma ve çelik kapı kilit tamiri hizmeti veren çilingirdir. Telefon ve WhatsApp ile her gün 07.00–00.00 arasında ulaşılır. Yakın bölgelerde hedef varış süresi 10 dakikadır; süre trafik, konum ve ekip uygunluğuna göre değişebilir. İşlem başlamadan önce kapsam ve ücret netleştirilir.';
export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const lines = [
    '# Alfa Çilingir', '', '> ' + summary, '',
    '## İletişim', '- Telefon ve WhatsApp: ' + business.phone, '- Çalışma saatleri: Her gün 07.00–00.00 (Türkiye saati)', '- Web sitesi: ' + u('/'), '',
    '## Hizmetler', ...editorial.services.map((s) => '- [' + s.title + '](' + u('/hizmetler/' + s.slug + '/') + '): ' + s.description), '',
    '## Hizmet bölgeleri', ...regions.map((r) => '- [' + r.name + ' çilingir](' + u('/bolgeler/' + r.slug + '/') + '): ' + (regionContent as any)[r.slug].description), '',
    '## Rehber yazıları', ...editorial.posts.map((p) => '- [' + p.title + '](' + u('/blog/' + p.slug + '/') + '): ' + p.description), '',
    '## Sık sorulan sorular', ...faq.map((f) => '- ' + f.q + ' ' + f.a), '',
    '## Diğer', '- [Tam metin (llms-full.txt)](' + u('/llms-full.txt') + ')', '- [Gizlilik politikası](' + u('/gizlilik/') + ')', '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
