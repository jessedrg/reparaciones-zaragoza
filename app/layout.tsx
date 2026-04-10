import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SITE_NAME, BASE_URL, PHONE_DISPLAY } from "@/lib/constants"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Electricistas, Fontaneros, Cerrajeros, Desatascos y Calderas en Zaragoza`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `Profesionales de reparaciones en Zaragoza y provincia: electricistas, fontaneros, cerrajeros, desatascos y calderas. Servicio urgente 24h. Presupuesto sin compromiso. Llama al ${PHONE_DISPLAY}.`,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Profesionales de Reparaciones en Zaragoza`,
    description: `Electricistas, fontaneros, cerrajeros, desatascos y calderas en Zaragoza y provincia. Servicio garantizado. Llama al ${PHONE_DISPLAY}.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
