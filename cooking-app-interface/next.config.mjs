/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'images.immediate.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'notjustfood.blog',
      },
      {
        protocol: 'https',
        hostname: 'www.recipetineats.com',
      },
      {
        protocol: 'https',
        hostname: 'd1hbpr09pwz0sk.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'www.thebossykitchen.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },
}

export default nextConfig
