
import React, { useMemo } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { blogData } from "@/data/blogs/blogData";
import BlogCard from "@/components/blog/BlogCard";

/**
 * Homepage strip showing the 3 most recent blog posts.
 * Mirrors the look of "Featured Articles" on /blogs but with a static grid
 * (no carousel), since the homepage already has lots of moving parts.
 */
const LatestBlogsSection = () => {
  // Sort by date descending, take the 3 most recent.
  // useMemo so we don't re-sort the entire array on every render.
  const latestBlogs = useMemo(
    () =>
      [...blogData]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3),
    []
  );

  if (latestBlogs.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 reveal animate-fade-in">
          <h2 className="heading-2 mb-3">From Our Blog</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Insights, trends, and best practices in telemedicine and virtual care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 text-sm font-medium transition-colors duration-300"
          >
            View all articles
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogsSection;
