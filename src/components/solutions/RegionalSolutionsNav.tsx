import React from "react";
import Link from "next/link";

/**
 * Exposes the four country white-label pages from the /solutions/ hub.
 *
 * Before Phase 4 the only internal paths to these pages were the footer's
 * regional list and one paragraph on /solutions/white-label-telemedicine/,
 * while ~30 files linked to the global page. This closes that asymmetry from
 * the hub page a regional buyer is most likely to land on.
 *
 * Anchors deliberately lead with the market and name the locally relevant
 * concern rather than repeating "white label telemedicine platform" four
 * times — the global page's own regional paragraph already uses "United
 * States edition" style anchors, so these read differently on purpose.
 * Each description restates only what that country page already documents.
 */
const regions = [
  {
    slug: "us",
    name: "United States",
    note: "HIPAA-aligned workflows, EHR/EMR integration and multi-state delivery.",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    note: "UK GDPR considerations for private clinics and GP practices.",
  },
  {
    slug: "za",
    name: "South Africa",
    note: "POPIA-aligned data workflows, medical aid billing and load-shedding resilience.",
  },
  {
    slug: "gh",
    name: "Ghana",
    note: "Mobile-money payments and low-bandwidth, mobile-first delivery.",
  },
];

const RegionalSolutionsNav = () => (
  <section className="py-16 bg-brand-blue/5">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="heading-3 mb-4">Solutions by market</h2>
        <p className="text-lg text-gray-700">
          Regulatory expectations, payment methods and connectivity differ by market. These pages
          cover what changes locally; the{" "}
          <Link
            href="/solutions/white-label-telemedicine/"
            className="text-brand-blue underline"
          >
            white label telemedicine platform
          </Link>{" "}
          page covers the product itself.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {regions.map((r) => (
          <Link
            key={r.slug}
            href={`/${r.slug}/white-label-telemedicine-platform/`}
            className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left"
          >
            <h3 className="text-lg font-semibold mb-2 text-brand-blue">
              Virtual care in {r.name}
            </h3>
            <p className="text-gray-700 text-sm">{r.note}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RegionalSolutionsNav;
