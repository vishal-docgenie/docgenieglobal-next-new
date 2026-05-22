import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Redirect "/solution" routes to "/solutions"
  async redirects() {
    return [
      {
        source: "/solution",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/solution/:path*",
        destination: "/solutions/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
