/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/eigenLore' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/eigenLore/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig