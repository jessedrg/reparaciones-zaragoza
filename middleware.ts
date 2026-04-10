import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get("host") || ""

  // Force www
  if (hostname === "reparaciones-zaragoza.com") {
    url.host = "www.reparaciones-zaragoza.com"
    return NextResponse.redirect(url, 301)
  }

  // Remove trailing slash
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "")
    return NextResponse.redirect(url, 301)
  }

  const response = NextResponse.next()

  // Security headers
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  )

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.svg|robots\\.txt|sitemap).*)"],
}
