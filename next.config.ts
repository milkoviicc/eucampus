import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://marianos98.sg-host.com/**'),
      new URL('https://learnwithjusticeu.com/**'),
      new URL('https://eucampus.com/**'),
    ],
  },
}

export default nextConfig
