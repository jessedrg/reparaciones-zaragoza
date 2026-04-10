import Link from "next/link"
import { PROFESSIONS } from "@/lib/professions"
import { PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <p className="text-sm font-medium text-blue-200 uppercase tracking-widest mb-4">Profesionales en Zaragoza</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Reparaciones para tu hogar en Zaragoza y provincia
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/90 mb-10 max-w-3xl leading-relaxed">
            Electricistas, fontaneros, cerrajeros, desatascos y tecnicos de calderas. Profesionales cualificados con garantia. Presupuesto sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all phone-pulse"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Servicios</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Nuestros servicios en Zaragoza</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFESSIONS.map((profession) => (
              <Link
                key={profession.id}
                href={`/${profession.id}`}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl mb-4"
                  style={{ backgroundColor: profession.color }}
                >
                  {profession.icon === "Zap" && "⚡"}
                  {profession.icon === "Droplets" && "💧"}
                  {profession.icon === "KeyRound" && "🔑"}
                  {profession.icon === "Waves" && "🌊"}
                  {profession.icon === "Flame" && "🔥"}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-800 transition-colors">
                  {profession.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{profession.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Proceso</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Como funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Llamanos", desc: "Explicanos tu problema. Te orientamos y asignamos al profesional mas adecuado de tu zona." },
              { step: "2", title: "Diagnostico y presupuesto", desc: "El profesional evalua la situacion in situ y te da un presupuesto cerrado. Sin sorpresas." },
              { step: "3", title: "Solucion garantizada", desc: "Realizamos el trabajo con materiales de calidad. Factura con desglose y garantia por escrito." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto mb-5" style={{ backgroundColor: '#1e3a5f' }}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-accent-500 uppercase tracking-widest mb-3">Garantias</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 tracking-tight">Por que elegir {SITE_NAME}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Profesionales verificados", desc: "Todos los profesionales tienen formacion acreditada y experiencia demostrable." },
              { title: "Presupuesto sin compromiso", desc: "Te damos precio cerrado antes de empezar. Si no te convence, no pagas nada." },
              { title: "Garantia por escrito", desc: "Trabajo garantizado con factura detallada y garantia documentada." },
              { title: "Cobertura provincial", desc: "Servicio en Zaragoza capital y toda la provincia, incluyendo pueblos y comarcas." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 text-white" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "250+", label: "Localidades cubiertas" },
              { value: "24/7", label: "Servicio urgente" },
              { value: "100%", label: "Garantia escrita" },
              { value: "5", label: "Especialidades" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-accent-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Necesitas un profesional en Zaragoza?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Contactanos sin compromiso. Presupuesto gratuito y servicio garantizado en toda la provincia.
          </p>
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
