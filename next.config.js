/**
 * @type {import('next').NextConfig}
 **/
/* const { i18n } = require('next-i18next') */

const nextConfig = {
  /*  i18n, */
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
  },
}

module.exports = nextConfig
