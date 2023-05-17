/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ["localhost"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
