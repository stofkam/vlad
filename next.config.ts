import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env:{
    SERVER_URL:process.env.SERVER_URL
  },
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
