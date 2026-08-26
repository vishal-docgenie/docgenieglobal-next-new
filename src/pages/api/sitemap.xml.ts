import type { NextApiRequest, NextApiResponse } from "next";
import { blogData } from "@/data/blogs/blogData";
import { generateSlug } from "@/lib/blog-slug";

const BASE_URL = "https://www.docgenieglobal.com";

// Stable reference date for static/structural pages. Using a fixed value (rather
// than `new Date()` at request time) keeps <lastmod> deterministic so Google is
// not told every page "changed today" on every crawl. Bump this only when the
// static pages are meaningfully updated.
const SITE_LASTMOD = "2026-08-11";

const staticPages = [
  { path: "/", priority: "1.00", changefreq: "weekly" },
  { path: "/solutions", priority: "0.90", changefreq: "weekly" },
  { path: "/solutions/white-label-telemedicine", priority: "0.90", changefreq: "weekly" },
  { path: "/solutions/hipaa-compliant-healthcare", priority: "0.90", changefreq: "weekly" },
  { path: "/solutions/virtual-care-features", priority: "0.80", changefreq: "monthly" },
  { path: "/solutions/chronic-care-management", priority: "0.80", changefreq: "monthly" },
  { path: "/solutions/ai-capabilities", priority: "0.80", changefreq: "monthly" },
  { path: "/industries", priority: "0.80", changefreq: "monthly" },
  // { path: "/industries/telemedicine-platform-for-clinics", priority: "0.85", changefreq: "monthly" },
  // { path: "/industries/telemedicine-platform-for-hospitals", priority: "0.85", changefreq: "monthly" },
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

function toISODate(dateStr: string, fallback: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return fallback;
  return d.toISOString().split("T")[0];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateSitemap(): string {
  const staticEntries = staticPages
    .map(({ path, priority, changefreq }) => {
      // Site uses trailingSlash: true. Ensure every non-root URL ends with "/"
      // and never produce a double slash. Root stays exactly "${BASE_URL}/".
      const normalizedPath = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
      const loc = escapeXml(`${BASE_URL}${normalizedPath}`);
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${SITE_LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const blogEntries = blogData
    .map((post) => {
      const slug = (post.slug ?? generateSlug(post.title)).replace(/^\/+|\/+$/g, "");
      // Reflect the real freshness of the post: prefer dateModified, fall back to
      // the publish date. Previously this always used `date`, so updated posts
      // never surfaced their new lastmod in the sitemap.
      const lastmod = toISODate(post.dateModified ?? post.date, SITE_LASTMOD);
      return `
  <url>
    <loc>${escapeXml(`${BASE_URL}/blogs/${slug}/`)}</loc>
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
