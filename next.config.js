/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES ? '/eigenLore' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/eigenLore/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig