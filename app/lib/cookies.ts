'use server'
import { cookies } from 'next/headers'

interface AuthCookie {
  isAuthenticated: boolean
  user: {
    id: string
    email: string
    fullName: string
  }
}

// Set cookie as raw JSON
export async function setCookie(name: string, value: AuthCookie, days = 7) {
  const cookieStore = await cookies()
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000)

  // store as JSON string directly, Next.js handles encoding
  cookieStore.set({
    name,
    value: JSON.stringify(value),
    path: '/',
    expires,
    httpOnly: false, // must be false if you want client-side JS access
  })
}

// Read cookie as JSON
export async function getCookie(): Promise<AuthCookie | null> {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('auth')

  if (!userCookie) return null

  try {
    return JSON.parse(userCookie.value) // already valid JSON
  } catch (err) {
    console.error('Failed to parse cookie', err)
    return null
  }
}

// Delete cookie
export async function removeCookie(name: string) {
  const cookieStore = await cookies()
  cookieStore.delete({ name, path: '/' })
}
