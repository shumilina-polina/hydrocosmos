/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ["localhost"],
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
};

module.exports = nextConfig;
