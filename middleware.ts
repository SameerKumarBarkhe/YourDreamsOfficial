import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if the path is an admin path
  const isAdminPath = path.startsWith("/admin") && !path.startsWith("/admin/login")

  if (isAdminPath) {
    // Check for authentication cookie/token
    const isAuthenticated = request.cookies.has("isAuthenticated") || request.headers.get("authorization")

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      const url = new URL("/admin/login", request.url)
      url.searchParams.set("callbackUrl", encodeURI(request.url))
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

