import Link from "next/link"
import { SITE_NAME, PHONE, PHONE_DISPLAY } from "@/lib/constants"
import { PROFESSIONS } from "@/lib/professions"
import { LogoMark } from "./logo"
import { IconPhone } from "./icons"

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <LogoMark className="w-10 h-10" />
              <span className="text-xl font-semibold text-background">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              Profesionales cualificados para tu hogar. Servicio garantizado en Zaragoza y provincia.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-background font-semibold mb-4 text-sm uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3">
              {PROFESSIONS.map((p) => (
                <li key={p.id}>
                  <Link href={`/${p.id}`} className="text-sm text-background/60 hover:text-background transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-background font-semibold mb-4 text-sm uppercase tracking-wider">Localidades principales</h3>
            <ul className="space-y-3">
              {["zaragoza", "calatayud", "ejea-de-los-caballeros", "tarazona", "utebo", "caspe"].map((city) => (
                <li key={city}>
                  <Link
                    href={`/electricista/${city}`}
                    className="text-sm text-background/60 hover:text-background transition-colors capitalize"
                  >
                    {city.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-background font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${PHONE}`} className="text-sm text-accent hover:text-accent/80 font-medium transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-sm text-background/60">Disponible 24/7</li>
              <li className="text-sm text-background/60">Zaragoza y provincia</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-background/10">
              <p className="text-xs text-background/50 leading-relaxed">
                Servicio rapido y profesional. Presupuesto sin compromiso.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terminos" className="text-xs text-background/50 hover:text-background/80 transition-colors">
              Terminos
            </Link>
            <Link href="/privacidad" className="text-xs text-background/50 hover:text-background/80 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
