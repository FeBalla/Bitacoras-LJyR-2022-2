/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.IMAGES_DOMAIN || ""],
  },
  webpack(config) {
    config.resolve.extensions = [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"]
    return config
  },
}

module.exports = nextConfig
