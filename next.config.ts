import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
