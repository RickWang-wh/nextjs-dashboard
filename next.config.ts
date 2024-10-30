import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["vigilant-barnacle-g6vwvp47j7r2xx-3000.app.github.dev", "localhost:3000"],
    },
  },
};
 
export default nextConfig;
