import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
      // Singular-to-plural typo fix: /solution -> /solutions
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
      // GSC sitemap fix: redirect submitted URL to actual dynamic sitemap
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;
