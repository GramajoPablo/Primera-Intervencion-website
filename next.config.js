/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the export output for Sanity Studio to work
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  // Add transpilePackages for Sanity Studio
  transpilePackages: ['@sanity/ui', '@sanity/icons', 'styled-components'],
};

module.exports = nextConfig;
