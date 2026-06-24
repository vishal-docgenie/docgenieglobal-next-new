import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  trailingSlash: true,

  // Singular-to-plural typo fix: /solution -> /solutions
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
=======
  skipTrailingSlashRedirect: true,
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
>>>>>>> 6f091381d9e8afd8489a54b4b2d64f372c3eb8ea
      },
    ];
  },
};

export default nextConfig;
