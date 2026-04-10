import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PROFESSIONS, VALID_PROFESSIONS, KNOWN_MODIFIERS, KNOWN_PREFIXES } from "@/lib/professions"
import { CITIES, getCityName, getProvinceName } from "@/lib/cities"
import { BASE_URL, PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"
import { PROFESSION_CONTENT } from "@/lib/profession-content"

interface PageProps {
  params: Promise<{ profession: string; city: string }>
}

function parseProfessionSlug(slug: string): {
  professionId: string
  modifier: string | null
  prefix: string | null
} {
  for (const prefix of KNOWN_PREFIXES) {
    for (const prof of VALID_PROFESSIONS) {
      if (slug === `${prefix}-${prof}`) {
        return { professionId: prof, modifier: null, prefix }
      }
    }
  }

  for (const mod of KNOWN_MODIFIERS) {
    for (const prof of VALID_PROFESSIONS) {
      if (slug === `${prof}-${mod}`) {
        return { professionId: prof, modifier: mod as string, prefix: null }
      }
    }
  }

  if (VALID_PROFESSIONS.includes(slug)) {
    return { professionId: slug, modifier: null, prefix: null }
  }

  return { professionId: slug, modifier: null, prefix: null }
}

function formatModifier(mod: string): string {
  return mod.replace(/-/g, " ")
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { profession: profSlug, city: citySlug } = await params
  const { professionId, modifier, prefix } = parseProfessionSlug(profSlug)

  if (!VALID_PROFESSIONS.includes(professionId)) return { title: "No encontrado" }
  if (!CITIES.includes(citySlug)) return { title: "No encontrado" }

  const profession = PROFESSIONS.find((p) => p.id === professionId)!
  const cityName = getCityName(citySlug)
  const provinceName = getProvinceName(citySlug)

  let title: string
  let description: string

  if (prefix) {
    title = `${formatModifier(prefix).charAt(0).toUpperCase() + formatModifier(prefix).slice(1)} ${profession.name.toLowerCase()} en ${cityName} | ${SITE_NAME}`
    description = `Consulta el ${formatModifier(prefix)} de ${profession.name.toLowerCase()} en ${cityName} (${provinceName}). Presupuesto sin compromiso. Llama al ${PHONE_DISPLAY}.`
  } else if (modifier) {
    title = `${profession.name} ${formatModifier(modifier)} en ${cityName} | ${SITE_NAME}`
    description = `Servicio de ${profession.name.toLowerCase()} ${formatModifier(modifier)} en ${cityName} (${provinceName}). Profesionales cualificados. Llama al ${PHONE_DISPLAY}.`
  } else {
    title = `${profession.name} en ${cityName} | Profesionales Cualificados | ${SITE_NAME}`
    description = `Servicio de ${profession.name.toLowerCase()} en ${cityName} (${provinceName}). Profesionales verificados con garantia. Presupuesto sin compromiso. Llama al ${PHONE_DISPLAY}.`
  }

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${profSlug}/${citySlug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${profSlug}/${citySlug}`,
      siteName: SITE_NAME,
      locale: "es_ES",
      type: "website",
    },
  }
}

export default async function CityPage({ params }: PageProps) {
  const { profession: profSlug, city: citySlug } = await params
  const { professionId, modifier, prefix } = parseProfessionSlug(profSlug)

  if (!VALID_PROFESSIONS.includes(professionId)) notFound()
  if (!CITIES.includes(citySlug)) notFound()

  const profession = PROFESSIONS.find((p) => p.id === professionId)!
  const content = PROFESSION_CONTENT[professionId]
  const cityName = getCityName(citySlug)
  const provinceName = getProvinceName(citySlug)

  let pageTitle: string
  let pageSubtitle: string

  if (prefix) {
    const fmtPrefix = formatModifier(prefix)
    pageTitle = `${fmtPrefix.charAt(0).toUpperCase() + fmtPrefix.slice(1)} ${profession.name.toLowerCase()} en ${cityName}`
    pageSubtitle = `Informacion sobre ${fmtPrefix} de servicio de ${profession.name.toLowerCase()} en ${cityName} y alrededores.`
  } else if (modifier) {
    pageTitle = `${profession.name} ${formatModifier(modifier)} en ${cityName}`
    pageSubtitle = `Servicio de ${profession.name.toLowerCase()} ${formatModifier(modifier)} en ${cityName} (${provinceName}). Profesionales cualificados disponibles.`
  } else {
    pageTitle = `${profession.name} en ${cityName}`
    pageSubtitle = content
      ? content.cityIntro(cityName, provinceName)
      : `Profesionales de ${profession.name.toLowerCase()} en ${cityName} (${provinceName}). Servicio garantizado.`
  }

  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    description: pageSubtitle,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE,
      url: BASE_URL,
      areaServed: {
        "@type": "City",
        name: cityName,
        containedInPlace: { "@type": "AdministrativeArea", name: provinceName },
      },
    },
    serviceType: profession.name,
    areaServed: {
      "@type": "City",
      name: cityName,
    },
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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <svg className="w-4 h-4 text-blue-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href={`/${professionId}`} className="hover:text-white transition-colors">{profession.name}</Link>
            <svg className="w-4 h-4 text-blue-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{cityName}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            {pageTitle}
          </h1>
          <p className="text-lg text-blue-100/90 mb-8 max-w-3xl leading-relaxed">{pageSubtitle}</p>
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Local service intro */}
            {content && !modifier && !prefix && (
              <section>
                <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Servicio local</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  {profession.name} en {cityName}
                </h2>
                <p className="text-gray-600 leading-relaxed">{content.cityServices(cityName)}</p>
              </section>
            )}

            {/* How we work in city */}
            {content && (
              <section>
                <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Proceso</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
                  Como trabajamos en {cityName}
                </h2>
                <div className="space-y-5">
                  {content.howWeWork.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-9 h-9 rounded-full text-white flex items-center justify-center font-semibold text-sm shrink-0" style={{ backgroundColor: '#1e3a5f' }}>
                        {i + 1}
                      </div>
                      <p className="text-gray-600 leading-relaxed pt-1.5">{step}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Services in city */}
            {content && (
              <section>
                <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Servicios</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
                  Servicios en {cityName}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {content.services.map((svc) => (
                    <div key={svc.title} className="p-5 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-md transition-all">
                      <h3 className="font-semibold text-gray-900 mb-2">{svc.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Local advice */}
            {content && !modifier && !prefix && (
              <section className="bg-blue-50 rounded-2xl p-6 lg:p-8">
                <p className="text-sm font-medium text-brand-800 uppercase tracking-widest mb-3">Consejo local</p>
                <h2 className="text-xl font-bold text-brand-900 mb-4">Consejo para residentes de {cityName}</h2>
                <p className="text-brand-800/80 leading-relaxed">{content.cityAdvice(cityName)}</p>
              </section>
            )}

            {/* Why choose us */}
            {content && (
              <section>
                <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Ventajas</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">Por que elegirnos en {cityName}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {content.whyUs.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pricing in city */}
            {content && (
              <section>
                <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Tarifas</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">Precios en {cityName}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 pr-4 text-sm font-semibold text-gray-900">Servicio</th>
                        <th className="text-right py-3 pl-4 text-sm font-semibold text-gray-900">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.pricing.map((row) => (
                        <tr key={row.service} className="border-b border-gray-100">
                          <td className="py-3 pr-4 text-gray-700 text-sm">{row.service}</td>
                          <td className="py-3 pl-4 text-brand-800 font-semibold text-right text-sm">{row.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">{content.pricingNote}</p>
              </section>
            )}

            {/* FAQ */}
            {content && (
              <section>
                <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">FAQ</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">Preguntas frecuentes</h2>
                <div className="space-y-6">
                  {content.faq.map((item, i) => (
                    <div key={i} className="border-b border-gray-200 pb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Emergency tips */}
            {content && (
              <section className="bg-accent-50 rounded-2xl p-6 lg:p-8">
                <h2 className="text-xl font-bold text-accent-900 mb-6">Que hacer en caso de emergencia</h2>
                <div className="space-y-3">
                  {content.emergencyTips.map((tip, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-xs shrink-0">!</div>
                      <p className="text-accent-900 text-sm leading-relaxed pt-0.5">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact card */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: '#1e3a5f' }}>
                <h3 className="text-lg font-semibold mb-2">Necesitas ayuda?</h3>
                <p className="text-blue-100/80 text-sm mb-6">
                  {profession.name} en {cityName}. Presupuesto sin compromiso.
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 w-full bg-accent-500 hover:bg-accent-600 text-white py-3.5 rounded-full font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_DISPLAY}
                </a>
              </div>

              {/* Other professions */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Otros servicios en {cityName}</h3>
                <ul className="space-y-3">
                  {PROFESSIONS.filter((p) => p.id !== professionId).map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/${p.id}/${citySlug}`}
                        className="text-sm text-gray-600 hover:text-brand-800 transition-colors"
                      >
                        {p.name} en {cityName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust signals */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Garantias</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Profesionales cualificados
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Presupuesto sin compromiso
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Garantia por escrito
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Servicio en {cityName}
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* SEO text */}
      {content && (
        <section className="py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 leading-relaxed">{content.seoText}</p>
          </div>
        </section>
      )}

      {/* CTA bottom */}
      <section className="py-16 text-white" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
            {profession.name} en {cityName}
          </h2>
          <p className="text-blue-100/90 mb-8">Presupuesto sin compromiso. Profesionales en {cityName} y alrededores.</p>
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
    </main>
  )
}
