import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    // Set correct content-type header
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');

    // Return sitemap XML
    res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage - Highest Priority -->
  <url>
    <loc>https://ivexportservice.com/</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Stock Page -->
  <url>
    <loc>https://ivexportservice.com/stock</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Services Page -->
  <url>
    <loc>https://ivexportservice.com/services</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- About Page -->
  <url>
    <loc>https://ivexportservice.com/about</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Impressum (Low Priority) -->
  <url>
    <loc>https://ivexportservice.com/impressum</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`);
}
