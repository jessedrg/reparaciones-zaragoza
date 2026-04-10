import Link from "next/link"
import { PHONE, PHONE_DISPLAY } from "@/lib/constants"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pagina no encontrada</h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la pagina que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full text-white font-semibold transition-colors"
            style={{ backgroundColor: '#1e3a5f' }}
          >
            Volver al inicio
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="px-6 py-3 bg-accent-500 hover:bg-accent-600 rounded-full text-white font-semibold transition-colors"
          >
            Llamar: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </main>
  )
}
