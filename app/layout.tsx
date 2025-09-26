import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import Providers from './providers/Providers'
import { cookies } from 'next/headers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'EU Campus',
  description: 'EU Campus is a digital learning platform...',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Read cookie on the server
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('auth')?.value ?? null

  let initialAuth = null

  if (authCookie) {
    try {
      // decode the cookie once
      let decoded = decodeURIComponent(authCookie)

      // if it's still wrapped in quotes, remove them
      if (decoded.startsWith('"') && decoded.endsWith('"')) {
        decoded = decoded.slice(1, -1)
      }

      // finally parse JSON
      initialAuth = JSON.parse(decoded)
    } catch (err) {
      console.warn('Failed to parse auth cookie on server', err)
    }
  }

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className={`font-poppins antialiased`}>
        <Providers initialAuth={initialAuth}>{children}</Providers>
      </body>
    </html>
  )
}
