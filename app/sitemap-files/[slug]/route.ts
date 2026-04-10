import { BASE_URL, LAST_UPDATED } from "@/lib/constants"
import { CITIES } from "@/lib/cities"
import { VALID_PROFESSIONS, KNOWN_MODIFIERS, KNOWN_PREFIXES } from "@/lib/professions"

interface RouteProps {
  params: Promise<{ slug: string }>
}

function isValidSlug(slug: string): boolean {
  if (VALID_PROFESSIONS.includes(slug)) return true

  for (const mod of KNOWN_MODIFIERS) {
    for (const prof of VALID_PROFESSIONS) {
      if (slug === `${prof}-${mod}`) return true
    }
  }

  for (const prefix of KNOWN_PREFIXES) {
    for (const prof of VALID_PROFESSIONS) {
      if (slug === `${prefix}-${prof}`) return true
    }
  }

  return false
}

export async function GET(_request: Request, { params }: RouteProps) {
  const { slug } = await params

  if (!isValidSlug(slug)) {
    return new Response("Not found", { status: 404 })
  }

  const lastmod = LAST_UPDATED

  const urls = CITIES.map(
    (city) => `  <url>
    <loc>${BASE_URL}/${slug}/${city}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${urls}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
