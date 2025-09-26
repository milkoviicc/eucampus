// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const authCookie = req.cookies.get('auth')?.value

  // Only protect /login
  if (pathname.startsWith('/login')) {
    if (authCookie) {
      try {
        const auth = JSON.parse(authCookie)

        if (auth?.isAuthenticated) {
          console.log('Auth cookie: ' + authCookie)
          console.log('Auth: ' + auth)
          console.log('isAuthenticated: ' + auth.isAuthenticated)
          // Redirect authenticated users away from /login
          return NextResponse.redirect(new URL('/', req.url))
        }
      } catch (err) {
        console.error('Invalid auth cookie', err)
      }
    }
  }

  // Default: continue request
  return NextResponse.next()
}

// Configure which routes use this middleware
export const config = {
  matcher: ['/login'],
}
