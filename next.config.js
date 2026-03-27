/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/eigenLore' : '',
  assetPrefix: isProd ? '/eigenLore/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
