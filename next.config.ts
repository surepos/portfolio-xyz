/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "assets.aceternity.com",
      "images.unsplash.com"
    ],
  },
};

module.exports = nextConfig;
