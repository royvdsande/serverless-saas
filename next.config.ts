import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Waarschuwing: Dit zorgt ervoor dat Vercel gewoon doorbouwt, zelfs als er ESLint errors zijn.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
