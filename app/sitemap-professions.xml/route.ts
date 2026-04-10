import { BASE_URL, LAST_UPDATED } from "@/lib/constants"
import { VALID_PROFESSIONS } from "@/lib/professions"

export async function GET() {
  const lastmod = LAST_UPDATED

  const sitemaps = VALID_PROFESSIONS.map(
    (prof) => `  <sitemap>
    <loc>${BASE_URL}/sitemap-files/${prof}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
  ).join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
