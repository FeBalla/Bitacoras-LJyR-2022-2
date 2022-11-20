/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bitacoras-ljyr.s3.amazonaws.com"],
  },
}

module.exports = nextConfig
