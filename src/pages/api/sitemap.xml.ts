import type { NextApiRequest, NextApiResponse } from "next";
import { blogData } from "@/data/blogs/blogData";
import { generateSlug } from "@/lib/blog-slug";

const BASE_URL = "https://www.docgenieglobal.com";

// Static/structural pages publish no <lastmod>.
//
// History: this used `new Date()` at request time, which told Google every page
// "changed today" on every crawl and trained it to devalue the signal. That was
// replaced by a hardcoded SITE_LASTMOD = "2026-08-11" constant, which nobody
// ever bumped — so 21 URLs claimed the same arbitrary date for two months.
// Neither value represented real content modification.
//
// <lastmod> is optional. Omitting it is strictly better than publishing a date
// we cannot stand behind: Google ignores a lastmod it does not trust, and an
// untrustworthy one can discredit the whole sitemap. Blog entries keep their
// lastmod because it is backed by real editorial metadata (dateModified).

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
  // /privacy-policy and /terms-of-service are intentionally absent: both are
  // Disallow-ed in public/robots.txt, and submitting a robots-blocked URL in a
  // sitemap is a self-contradictory signal that surfaces in Search Console as
  // "Indexed, though blocked by robots.txt" / "Blocked by robots.txt".
  // Their existing crawl/index intent is unchanged — only the contradiction is
  // removed. To list them again, remove the Disallow rules first.
];

/** Real editorial date -> ISO day. Returns null when unparseable, so the
 *  caller omits <lastmod> rather than inventing one. */
function toISODate(dateStr: string | undefined): string | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
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
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const blogEntries = blogData
    .map((post) => {
      const slug = (post.slug ?? generateSlug(post.title)).replace(/^\/+|\/+$/g, "");
      // Reflect the real freshness of the post: prefer dateModified, fall back to
      // the publish date. Both are genuine content metadata, so this lastmod is
      // trustworthy and is kept. If neither parses, the tag is omitted.
      const lastmod = toISODate(post.dateModified ?? post.date);
      return `
  <url>
    <loc>${escapeXml(`${BASE_URL}/blogs/${slug}/`)}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ""}
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
