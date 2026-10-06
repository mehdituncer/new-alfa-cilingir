# Alfa Çilingir

Astro 5 + Tailwind CSS 4 ile statik, Türkçe ve mobil uyumlu çilingir sitesi. Shadcn tasarım dilinde yerel Astro bileşenleri; React gerektirmez.

## Çalıştırma

```sh
npm install
npm run dev
npm run build
npm run preview
```

## İçerik

- Ana sayfa, hizmetler listesi ve 6 hizmet yazısı
- Bölgeler listesi ve 5 bölge yazısı; 89 mahalle adı
- Blog listesi ve 3 bilgilendirici yazı
- İletişim, gizlilik ve 404 sayfaları
- LocalBusiness alt türü Locksmith, WebSite, WebPage, Service, Article, FAQPage, BreadcrumbList ve ItemList JSON-LD
- Sitemap, robots.txt, canonical ve Open Graph metadata
- Europe/Istanbul saat dilimiyle 07.00 dahil, 00.00 hariç çevrim içi göstergesi

İşletme bilgileri: `src/data/site.ts`. Hizmet ve blog metinleri: `src/data/editorial.json`. Bölge yazıları: `src/data/region-content.ts`.

## Gerçek işletme bilgileri ve yayın

Telefon/adres kullanıcı tarafından sağlanmıştır. No:35 ve işletme Google kaydı bağımsız doğrulanmamıştır. Google Maps bağlantısı adres aramasıdır; doğrulanmış yer kaydı iddiası taşımaz. Gerçek Google yorumları bulunmadığından sahte yorum, puan, Review veya AggregateRating eklenmemiştir. Instagram/Facebook hesapları sağlanmadığından bağlantıları uydurulmamıştır. WhatsApp aktiftir.

15 dakika yakın bölgeler için bir varış hedefidir; trafik, konum ve ekip uygunluğu notuyla sunulur. Çevrim içi göstergesi belirlenen çalışma saatlerini gösterir, canlı operatör durumu değildir.

`astro.config.mjs` içindeki `site` önizleme yayın adresidir. Alfaçilingir.com için alan adı/DNS bağlantısı ayrıca yapılmalı; bağlandıktan sonra `site` gerçek kanonik alan adıyla güncellenip yeniden derlenmelidir. Sitemap, canonical ve JSON-LD bundan türetilir. Güncel yayın adresi: https://alfa-cilingir.gptuser1212.chatgpt.site

FAQPage işaretlemesi Google'da zengin sonuç gösterileceğini garanti etmez. Fotoğraf stok ve temsilidir, gerçek işletme personeli iddiası içermez.

## Görsel kaynağı

Hero: Pixabay / locksmith security door lock, 1280×935.
Kaynak: https://pixabay.com/photos/locksmith-security-door-lock-8559026/
Lisans: https://pixabay.com/service/license-summary/
Yerel dosya: `public/images/locksmith-hero.jpg`.

## Mahalle kaynakları

- https://beylikduzu.istanbul/icerik/harita-paylasim-platformu
- https://esenyurt.istanbul/muhtarliklar
- https://www.bcekmece.bel.tr/buyukcekmece/muhtarliklar
- https://www.bcekmece.bel.tr/buyukcekmece/muhtarliklar?page=2
- https://www.avcilar.bel.tr/mahalleler
- https://www.basaksehir.bel.tr/muhtarliklar

Bahçeşehir ayrı ilçe değil, Başakşehir'e bağlı 1. Kısım ve 2. Kısım mahallelerini kapsayan hizmet bölgesidir.

## Eylül 2026 görsel ve mobil güncellemesi

Marka Alfa Çilingir olarak düzeltildi. Telefon ve WhatsApp etiketleri tek satırda; mobil güven alanları ortalı. Hizmet kartları, blog kartları ve tüm hizmet/bölge/blog yazılarının başlangıcında temsili görseller bulunur.

Altı görsel yerleşik ImageGen aracıyla üretilmiştir. WebP dosyaları `public/images/services/` klasöründe, 640 ve 1280 piksel genişliğinde sunulur. Üretim promptları `docs/generated-image-prompts.json` dosyasındadır. Görseller gerçek işletme personeli, mekânı veya hizmet müdahalesinin belgesi olarak sunulmaz.
