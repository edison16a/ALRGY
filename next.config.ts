import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  images: {
    // allow SVGs through the Next.js Image optimizer
    dangerouslyAllowSVG: true,

    // whitelist your exact remote hosts
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
            {
        protocol: "https",
        hostname: "*",      // ← allow any domain :contentReference[oaicite:0]{index=0}
        port: "",
        pathname: "/**",
      },
    ],
  },
  experiemental: {
    ppr: 'incremental'
  },
  devIndicators:{
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  }
};

export default nextConfig;
