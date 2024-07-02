
/*const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
  },

module.exports = nextConfig */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* typescript: {
    ignoreBuildErrors: true,
  }, */

  /* pageExtensions: ['defaultFormValues.ts', 'validationSchema.ts', 'page.ts', 'page.ts'], */
}

module.exports = nextConfig
