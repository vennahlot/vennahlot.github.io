import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true, // Disable Next.js image optimization as it requires a server
  },
};

export default nextConfig;
