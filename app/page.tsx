import Link from "next/link"
import { PROFESSIONS } from "@/lib/professions"
import { PHONE, PHONE_DISPLAY, SITE_NAME } from "@/lib/constants"
import { IconPhone, IconCheck, IconShield, IconClock, IconMapPin, IconDocument, ServiceIcons } from "@/components/icons"

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-4">
              Profesionales en Zaragoza
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance leading-[1.1]">
              Reparaciones para tu hogar en Zaragoza y provincia
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Electricistas, fontaneros, cerrajeros, desatascos y tecnicos de calderas. Profesionales cualificados con garantia. Presupuesto sin compromiso.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors phone-pulse"
            >
              <IconPhone className="w-5 h-5" />
              Llamar: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Servicios</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 tracking-tight">Nuestros servicios en Zaragoza</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROFESSIONS.map((profession) => {
              const Icon = ServiceIcons[profession.icon]
              return (
                <Link
                  key={profession.id}
                  href={`/${profession.id}`}
                  className="group bg-card p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-5"
                    style={{ backgroundColor: profession.color }}
                  >
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {profession.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{profession.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Proceso</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 tracking-tight">Como funciona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: "1", title: "Llamanos", desc: "Explicanos tu problema. Te orientamos y asignamos al profesional mas adecuado de tu zona." },
              { step: "2", title: "Diagnostico y presupuesto", desc: "El profesional evalua la situacion in situ y te da un presupuesto cerrado. Sin sorpresas." },
              { step: "3", title: "Solucion garantizada", desc: "Realizamos el trabajo con materiales de calidad. Factura con desglose y garantia por escrito." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Garantias</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 tracking-tight">Por que elegir {SITE_NAME}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: IconShield, title: "Profesionales verificados", desc: "Todos los profesionales tienen formacion acreditada y experiencia demostrable." },
              { icon: IconDocument, title: "Presupuesto sin compromiso", desc: "Te damos precio cerrado antes de empezar. Si no te convence, no pagas nada." },
              { icon: IconCheck, title: "Garantia por escrito", desc: "Trabajo garantizado con factura detallada y garantia documentada." },
              { icon: IconMapPin, title: "Cobertura provincial", desc: "Servicio en Zaragoza capital y toda la provincia, incluyendo pueblos y comarcas." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "250+", label: "Localidades cubiertas" },
              { value: "24/7", label: "Servicio urgente" },
              { value: "100%", label: "Garantia escrita" },
              { value: "5", label: "Especialidades" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Necesitas un profesional en Zaragoza?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto">
            Contactanos sin compromiso. Presupuesto gratuito y servicio garantizado en toda la provincia.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-5 rounded-lg text-xl font-semibold transition-colors"
          >
            <IconPhone className="w-6 h-6" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  )
}
