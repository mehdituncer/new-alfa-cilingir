import type { APIRoute } from 'astro';
import editorial from '../data/editorial.json';
import { business, regions, faq } from '../data/site';
import { regionContent } from '../data/region-content';
// Machine-readable summary for AI assistants (llmstxt.org). Built from the same data as the pages, so it stays in sync.
// The 10-minute figure mirrors the hero and the FAQ: it is a target, not a promise.
const summary = 'Alfa Çilingir, İstanbul’un batısında (Beylikdüzü, Esenyurt, Büyükçekmece, Avcılar ve Bahçeşehir) kapı açma, oto çilingir, kasa açma, kilit değişimi, kırık anahtar çıkarma ve çelik kapı kilit tamiri hizmeti veren çilingirdir. Telefon ve WhatsApp ile her gün 07.00–00.00 arasında ulaşılır. Yakın bölgelerde hedef varış süresi 10 dakikadır; süre trafik, konum ve ekip uygunluğuna göre değişebilir. İşlem başlamadan önce kapsam ve ücret netleştirilir.';
type Section = { heading: string; paragraphs: string[] };
type Faq = { q: string; a: string };
const body = (sections: Section[], faqs: Faq[]) => [
  ...sections.flatMap((s) => ['### ' + s.heading, '', ...s.paragraphs.flatMap((p) => [p, ''])]),
  ...(faqs.length ? ['### Sık sorulan sorular', '', ...faqs.flatMap((f) => ['**' + f.q + '**', f.a, ''])] : []),
];
export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const lines: string[] = [
    '# Alfa Çilingir', '', '> ' + summary, '', 'Telefon ve WhatsApp: ' + business.phone + ' · Her gün 07.00–00.00 · ' + u('/'), '',
    '## Hizmetler', '',
    ...editorial.services.flatMap((s) => ['## ' + s.title, 'Adres: ' + u('/hizmetler/' + s.slug + '/'), '', s.intro, '', ...body(s.sections, s.faqs)]),
    '## Hizmet bölgeleri', '',
    ...regions.flatMap((r) => { const c = (regionContent as any)[r.slug]; return ['## ' + r.name + ' çilingir', 'Adres: ' + u('/bolgeler/' + r.slug + '/'), 'Hizmet mahalleleri: ' + r.neighborhoods.join(', '), '', c.intro, '', ...body(c.sections, c.faqs)]; }),
    '## Rehber yazıları', '',
    ...editorial.posts.flatMap((p) => ['## ' + p.title, 'Adres: ' + u('/blog/' + p.slug + '/'), '', p.intro, '', ...body(p.sections, p.faqs)]),
    '## Genel sık sorulan sorular', '', ...faq.flatMap((f) => ['**' + f.q + '**', f.a, '']),
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
