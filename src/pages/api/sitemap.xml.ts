import type { NextApiRequest, NextApiResponse } from "next";
import { blogData } from "@/data/blogs/blogData";
import { generateSlug } from "@/lib/blog-slug";

const BASE_URL = "https://www.docgenieglobal.com";

const staticPages = [
  { path: "/", priority: "1.00", changefreq: "weekly" },
  { path: "/solutions", priority: "0.90", changefreq: "weekly" },
  { path: "/solutions/white-label-telemedicine", priority: "0.90", changefreq: "weekly" },
  { path: "/solutions/hipaa-compliant-healthcare", priority: "0.90", changefreq: "weekly" },
  { path: "/solutions/virtual-care-features", priority: "0.80", changefreq: "monthly" },
  { path: "/solutions/chronic-care-management", priority: "0.80", changefreq: "monthly" },
  { path: "/solutions/ai-capabilities", priority: "0.80", changefreq: "monthly" },
  { path: "/industries", priority: "0.80", changefreq: "monthly" },
  { path: "/industries/healthcare-providers", priority: "0.80", changefreq: "monthly" },
  { path: "/industries/third-party-vendors", priority: "0.80", changefreq: "monthly" },
  { path: "/industries/public-health", priority: "0.80", changefreq: "monthly" },
  { path: "/pricing", priority: "0.80", changefreq: "weekly" },
  { path: "/about", priority: "0.70", changefreq: "monthly" },
  { path: "/blogs", priority: "0.80", changefreq: "weekly" },
  { path: "/contact", priority: "0.70", changefreq: "monthly" },
  { path: "/us/white-label-telemedicine-platform", priority: "0.85", changefreq: "monthly" },
  { path: "/uk/white-label-telemedicine-platform", priority: "0.85", changefreq: "monthly" },
  { path: "/za/white-label-telemedicine-platform", priority: "0.85", changefreq: "monthly" },
  { path: "/gh/white-label-telemedicine-platform", priority: "0.85", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.30", changefreq: "yearly" },
  { path: "/terms-of-service", priority: "0.30", changefreq: "yearly" },
];

function toISODate(dateStr: string): string {
  try {
    return new Date(dateStr).toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const staticEntries = staticPages
    .map(
      ({ path, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("");

  const blogEntries = blogData
    .map((post) => {
      const slug = post.slug ?? generateSlug(post.title);
      const lastmod = toISODate(post.date);
      return `
  <url>
    <loc>${BASE_URL}/blogs/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticEntries}
${blogEntries}
</urlset>`;
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.status(200).send(generateSitemap());
}
