/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [200, 640, 750, 828, 1080],
  },
};

module.exports = nextConfig;
