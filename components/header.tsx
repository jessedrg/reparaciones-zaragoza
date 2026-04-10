"use client"

import Link from "next/link"
import { useState } from "react"
import { SITE_NAME, PHONE, PHONE_DISPLAY } from "@/lib/constants"
import { LogoMark } from "./logo"
import { IconPhone, IconMenu, IconClose } from "./icons"

const NAV_ITEMS = [
  { href: "/electricista", label: "Electricistas" },
  { href: "/fontanero", label: "Fontaneros" },
  { href: "/cerrajero", label: "Cerrajeros" },
  { href: "/desatascos", label: "Desatascos" },
  { href: "/calderas", label: "Calderas" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoMark className="w-10 h-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground tracking-tight">{SITE_NAME}</span>
              <span className="text-[11px] text-muted-foreground tracking-wide hidden sm:block">Profesionales en Zaragoza</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border mt-3 pt-4">
              <a 
                href={`tel:${PHONE}`} 
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary text-primary-foreground font-medium"
              >
                <IconPhone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
