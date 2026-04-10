import { BASE_URL, LAST_UPDATED } from "@/lib/constants"
import { VALID_PROFESSIONS, KNOWN_MODIFIERS, KNOWN_PREFIXES } from "@/lib/professions"

export async function GET() {
  const lastmod = LAST_UPDATED

  const entries: string[] = []

  for (const prof of VALID_PROFESSIONS) {
    for (const mod of KNOWN_MODIFIERS) {
      entries.push(`  <sitemap>
    <loc>${BASE_URL}/sitemap-files/${prof}-${mod}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`)
    }
    for (const prefix of KNOWN_PREFIXES) {
      entries.push(`  <sitemap>
    <loc>${BASE_URL}/sitemap-files/${prefix}-${prof}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`)
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
