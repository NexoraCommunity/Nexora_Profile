import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["images.unsplash.com", "img.icons8.com"],
  },
};

export default nextConfig;
