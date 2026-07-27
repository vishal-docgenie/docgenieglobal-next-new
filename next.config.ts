import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
        permanent: true
      },
      // Blog 2: slug migrated from legacy AI/healthcare topic to correct staff training topic
      {
        source: "/blogs/how-ai-is-transforming-healthcare",
        destination: "/blogs/virtual-care-staff-training-guide/",
        permanent: true,
      },
      {
        source: "/blogs/how-ai-is-transforming-healthcare/",
        destination: "/blogs/virtual-care-staff-training-guide/",
        permanent: true,
      },
      // Blog 3: slug migrated from legacy technology/patient-care topic to correct clinic growth topic
      {
        source: "/blogs/the-role-of-technology-in-improving-patient-care",
        destination: "/blogs/virtual-care-platform-clinic-growth-revenue/",
        permanent: true,
      },
      {
        source: "/blogs/the-role-of-technology-in-improving-patient-care/",
        destination: "/blogs/virtual-care-platform-clinic-growth-revenue/",
        permanent: true,
      },
      // Blog 4: slug migrated from legacy "5 ways telemedicine improves access" to white-label features topic
      {
        source: "/blogs/5-ways-telemedicine-improves-access-to-healthcare",
        destination: "/blogs/white-label-telemedicine-platform-features/",
        permanent: true,
      },
      {
        source: "/blogs/5-ways-telemedicine-improves-access-to-healthcare/",
        destination: "/blogs/white-label-telemedicine-platform-features/",
        permanent: true,
      },
      // Blog 5: slug migrated from legacy remote-patient-monitoring topic to patient management topic
      {
        source: "/blogs/the-benefits-of-remote-patient-monitoring",
        destination: "/blogs/patient-management-system-virtual-care/",
        permanent: true,
      },
      {
        source: "/blogs/the-benefits-of-remote-patient-monitoring/",
        destination: "/blogs/patient-management-system-virtual-care/",
        permanent: true,
      },
      // Blog 6: slug migrated from legacy big-data topic to EHR/EMR integration topic
      {
        source: "/blogs/the-impact-of-big-data-on-healthcare",
        destination: "/blogs/ehr-emr-integration-telemedicine-guide/",
        permanent: true,
      },
      {
        source: "/blogs/the-impact-of-big-data-on-healthcare/",
        destination: "/blogs/ehr-emr-integration-telemedicine-guide/",
        permanent: true,
      },
      // Blog 7: slug migrated from legacy VR-in-medical-training topic to HIPAA compliance topic
      {
        source: "/blogs/virtual-reality-in-medical-training",
        destination: "/blogs/hipaa-compliance-best-practices-healthcare-providers/",
        permanent: true,
      },
      {
        source: "/blogs/virtual-reality-in-medical-training/",
        destination: "/blogs/hipaa-compliance-best-practices-healthcare-providers/",
        permanent: true,
      },
      // Blog 8: slug migrated from legacy mental-health-apps topic to telemedicine trends topic
      {
        source: "/blogs/mental-health-apps-a-review-of-the-top-solutions",
        destination: "/blogs/telemedicine-technology-trends-2026/",
        permanent: true,
      },
      {
        source: "/blogs/mental-health-apps-a-review-of-the-top-solutions/",
        destination: "/blogs/telemedicine-technology-trends-2026/",
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
