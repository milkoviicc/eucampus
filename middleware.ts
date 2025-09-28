// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const authCookie = req.cookies.get('auth')?.value
  let isAuthenticated = false

  if (authCookie) {
    try {
      const auth = JSON.parse(authCookie)
      isAuthenticated = auth?.isAuthenticated ?? false
    } catch (err) {
      console.error('Invalid auth cookie', err)
    }
  }

  // Redirect logged-in users away from /login
  if (pathname.startsWith('/login') && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Redirect NOT logged-in users away from /lms
  if (pathname.startsWith('/lms') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Default: continue request
  return NextResponse.next()
}

// Configure which routes this middleware applies to
export const config = {
  matcher: ['/login', '/lms'],
}
