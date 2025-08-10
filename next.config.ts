import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable image optimization with better formats
    formats: ['image/webp', 'image/avif'],
    // Use remotePatterns instead of deprecated domains
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimize device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable loading optimization
    minimumCacheTTL: 60,
  },
  // Enable static export optimizations
  trailingSlash: false,
  // Remove deprecated poweredByHeader (it's false by default in newer versions)
  poweredByHeader: false,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
