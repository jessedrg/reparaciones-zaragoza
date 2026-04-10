import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PROFESSIONS, VALID_PROFESSIONS } from "@/lib/professions"
import { CITIES, getCityName } from "@/lib/cities"
import { BASE_URL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"
import { PROFESSION_CONTENT } from "@/lib/profession-content"

interface PageProps {
  params: Promise<{ profession: string }>
}

const MAIN_CITIES = [
  "zaragoza", "calatayud", "ejea-de-los-caballeros", "tarazona", "utebo",
  "caspe", "la-almunia-de-dona-godina", "zuera", "tauste", "borja",
  "epila", "gallur", "fuentes-de-ebro", "illueca", "daroca",
  "sadaba", "sos-del-rey-catolico", "belchite", "pina-de-ebro", "la-muela",
  "cuarte-de-huerva", "maria-de-huerva", "cadrete", "villanueva-de-gallego",
  "el-burgo-de-ebro", "alfajarin", "pedrola", "figueruelas", "la-puebla-de-alfinden",
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { profession: professionId } = await params

  if (!VALID_PROFESSIONS.includes(professionId)) return { title: "No encontrado" }

  const profession = PROFESSIONS.find((p) => p.id === professionId)
  if (!profession) return {}

  const title = `${profession.name} en Zaragoza y provincia | Profesionales Cualificados | ${SITE_NAME}`
  const description = `Servicio de ${profession.name.toLowerCase()} en Zaragoza y toda su provincia. ${profession.description} Cobertura en mas de 250 localidades. Presupuesto sin compromiso. Llama al ${PHONE_DISPLAY}.`

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${professionId}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${professionId}`,
      siteName: SITE_NAME,
      locale: "es_ES",
      type: "website",
    },
  }
}

export default async function ProfessionPage({ params }: PageProps) {
  const { profession: professionId } = await params

  if (!VALID_PROFESSIONS.includes(professionId)) {
    notFound()
  }

  const profession = PROFESSIONS.find((p) => p.id === professionId)!
  const content = PROFESSION_CONTENT[professionId]

  const comarcas: Record<string, string[]> = {
    "Zaragoza capital y area metropolitana": CITIES.filter((c) => ["zaragoza", "utebo", "cuarte-de-huerva", "la-muela", "cadrete", "maria-de-huerva", "villanueva-de-gallego", "san-mateo-de-gallego", "zuera", "la-puebla-de-alfinden", "alfajarin", "el-burgo-de-ebro", "pastriz", "villamayor-de-gallego", "pinseque", "figueruelas", "pedrola", "sobradiel", "la-joyosa", "torres-de-berrellen"].includes(c)),
    "Comarca de Calatayud": CITIES.filter((c) => ["calatayud", "ateca", "alhama-de-aragon", "ariza", "cervera-de-la-canada", "maluenda", "ibdes", "jaraba", "nuévalos", "cetina", "terrer", "morata-de-jalon"].includes(c)),
    "Cinco Villas": CITIES.filter((c) => ["ejea-de-los-caballeros", "tauste", "sadaba", "sos-del-rey-catolico", "uncastillo", "biota", "luna", "erla"].includes(c)),
    "Comarca del Aranda": CITIES.filter((c) => ["illueca", "brea-de-aragon", "gotor", "aranda-de-moncayo", "jarque-de-moncayo", "mesones-de-isuela", "sestrica"].includes(c)),
    "Ribera del Ebro": CITIES.filter((c) => ["caspe", "maella", "fabara", "chiprana", "escatron", "sástago", "quinto", "gelsa", "velilla-de-ebro", "pina-de-ebro", "fuentes-de-ebro", "osera-de-ebro", "nuez-de-ebro"].includes(c)),
    "Campo de Borja": CITIES.filter((c) => ["borja", "magallon", "ainzon", "mallén", "gallur", "novillas", "novallas", "bulbuente", "fuendejalon", "tabuenca"].includes(c)),
    "Comarca de Tarazona": CITIES.filter((c) => ["tarazona", "vera-de-moncayo", "litago", "torrellas", "grisel", "vierlas", "lituenigo", "anon-de-moncayo", "san-martin-de-la-virgen-de-moncayo"].includes(c)),
    "Campo de Daroca": CITIES.filter((c) => ["daroca", "used", "mainar", "badules", "romanos", "manchones", "gallocanta", "anento"].includes(c)),
    "Valdejalon": CITIES.filter((c) => ["la-almunia-de-dona-godina", "epila", "ricla", "calatorao", "morata-de-jalon", "lumpiaque", "salillas-de-jalon", "plasencia-de-jalon", "rueda-de-jalon", "lucena-de-jalon"].includes(c)),
    "Campo de Carinena": CITIES.filter((c) => ["carinena", "aguaron", "cosuenda", "longares", "paniza", "encinacorba", "almonacid-de-la-sierra"].includes(c)),
    "Ribera Alta del Ebro": CITIES.filter((c) => ["alagon", "remolinos", "pradilla-de-ebro", "boquineni", "luceni", "alcala-de-ebro", "cabanas-de-ebro"].includes(c)),
  }

  const faqSchema = content ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } : null

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${profession.name} - ${SITE_NAME}`,
    description: profession.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE,
      url: BASE_URL,
      areaServed: { "@type": "AdministrativeArea", name: "Provincia de Zaragoza" },
    },
    serviceType: profession.name,
    areaServed: { "@type": "AdministrativeArea", name: "Provincia de Zaragoza" },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <svg className="w-4 h-4 text-blue-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{profession.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            {profession.name} en Zaragoza y provincia
          </h1>
          {content && (
            <p className="text-lg text-blue-100/90 mb-10 max-w-3xl leading-relaxed">
              {content.heroSubtitle}
            </p>
          )}
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* What we do */}
      {content && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Sobre el servicio</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 tracking-tight">Que hacemos</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{content.whatWeDo}</p>
          </div>
        </section>
      )}

      {/* Services we offer */}
      {content && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Servicios</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Servicios que ofrecemos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.map((svc) => (
                <div key={svc.title} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How we work */}
      {content && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Proceso</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Como trabajamos</h2>
            <div className="space-y-6">
              {content.howWeWork.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-semibold text-sm shrink-0" style={{ backgroundColor: '#1e3a5f' }}>
                    {i + 1}
                  </div>
                  <p className="text-gray-600 leading-relaxed pt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why choose us */}
      {content && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Ventajas</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Por que elegirnos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.whyUs.map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-2xl border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {content && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Tarifas</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Precios orientativos</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-900">Servicio</th>
                    <th className="text-right py-4 pl-4 text-sm font-semibold text-gray-900">Precio estimado</th>
                  </tr>
                </thead>
                <tbody>
                  {content.pricing.map((row) => (
                    <tr key={row.service} className="border-b border-gray-100">
                      <td className="py-4 pr-4 text-gray-700">{row.service}</td>
                      <td className="py-4 pl-4 text-brand-800 font-semibold text-right">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed">{content.pricingNote}</p>
          </div>
        </section>
      )}

      {/* Situations */}
      {content && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Casos</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Situaciones en las que te ayudamos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.situations.map((sit) => (
                <div key={sit.title} className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{sit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{sit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Emergency tips */}
      {content && (
        <section className="py-16 lg:py-20 bg-accent-50 border-y border-accent-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-accent-700 uppercase tracking-widest mb-3">Emergencias</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-accent-900 mb-8 tracking-tight">Que hacer en caso de emergencia</h2>
            <div className="space-y-4">
              {content.emergencyTips.map((tip, i) => (
                <div key={i} className="flex gap-4 bg-white p-4 rounded-xl border border-accent-200">
                  <div className="w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    !
                  </div>
                  <p className="text-accent-900 leading-relaxed pt-1">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA mid-page */}
      <section className="py-16 text-white" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
            Necesitas un {profession.name.toLowerCase()}?
          </h2>
          <p className="text-blue-100/90 mb-8">Presupuesto sin compromiso. Profesionales en tu zona de Zaragoza.</p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Main cities */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Cobertura</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 tracking-tight">{profession.name} en las principales localidades</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {MAIN_CITIES.filter((c) => CITIES.includes(c)).map((city) => (
              <Link
                key={city}
                href={`/${professionId}/${city}`}
                className="px-4 py-3 bg-gray-50 hover:bg-brand-800 hover:text-white rounded-xl text-sm font-medium text-gray-700 transition-colors text-center"
              >
                {getCityName(city)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {content && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {content.faq.map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cities by comarca */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Comarcas</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">{profession.name} por comarca</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(comarcas).map(([comarca, cities]) => (
              cities.length > 0 && (
                <div key={comarca}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">{comarca}</h3>
                  <ul className="space-y-2">
                    {cities.map((city) => (
                      <li key={city}>
                        <Link
                          href={`/${professionId}/${city}`}
                          className="text-sm text-gray-600 hover:text-brand-800 transition-colors"
                        >
                          {profession.name} en {getCityName(city)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* SEO text */}
      {content && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 leading-relaxed">{content.seoText}</p>
          </div>
        </section>
      )}

      {/* CTA bottom */}
      <section className="py-16 lg:py-20 text-white" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Necesitas un {profession.name.toLowerCase()}?
          </h2>
          <p className="text-blue-100/90 mb-10 text-lg">Contactanos sin compromiso. Presupuesto gratuito y servicio garantizado en Zaragoza y provincia.</p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  )
}
