/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/source",
      destination: "/destination",
    },
  ],
};

module.exports = nextConfig;
