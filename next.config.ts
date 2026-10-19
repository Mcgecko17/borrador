import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Desactiva el botón flotante negro de Next.js en modo desarrollo
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fbqmxoergxfifhcemzlw.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
