import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://eucampus.com/**'),
      new URL('https://learnwithjusticeu.com/**'),
    ],
  },
}

export default nextConfig
