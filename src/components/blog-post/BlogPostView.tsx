// BlogPostView.tsx
import React, { useEffect } from 'react';
import Link from 'next/link';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
// import ConclusionBox from './ConclusionBox'; // re-enable when ConclusionBox JSX below is uncommented
import TableOfContents from './TableOfContents';
import BlogCTA from './BlogCTA';
import FaqSection from './FaqSection';
import BlogSEO from './BlogSEO';
import RelatedArticles from './RelatedArticles';

export default function BlogPostView({
  blog,
  sections,
  allBlogs
}: {
  blog: any;         // use your BlogPost type here
  sections: any[];   // section list with id/title/content
  allBlogs: any[];
}) {
  // Smooth scroll (client-only)
  useEffect(() => {
    const original = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';

    // If URL has a hash, scroll to it with an offset to account for the fixed header
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const offset = 100;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    return () => {
      document.documentElement.style.scrollBehavior = original;
    };
  }, [blog?.slug]);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Blog Post Not Found</h2>
        <Link href="/blogs" className="mt-4 inline-block px-4 py-2 bg-brand-blue text-white rounded-md">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <BlogSEO blog={blog} />

      <BlogHeader blog={blog} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            {/* table of contents (mobile) */}
            <div className="md:hidden mb-6">
              <TableOfContents sections={sections} />
            </div>

            {/* main content */}
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                <BlogContent section={section} />
              </div>
            ))}

            {/*
              ConclusionBox kept for future use. Currently disabled because the
              conclusion is already rendered as the last section above (via
              sectionUtils, which appends content.conclusion as a section).
              Re-enable if/when we want a separate styled callout for the conclusion:

              {blog.content.conclusion && <ConclusionBox conclusion={blog.content.conclusion} />}
            */}

            {blog.faqs?.length ? (
              <div className="mt-16">
                <FaqSection faqs={blog.faqs} />
              </div>
            ) : null}

            <RelatedArticles currentBlog={blog} allBlogs={allBlogs} />

            <div className="mt-16">
              <BlogCTA cta={blog.cta} />
            </div>
          </div>

          <div className="w-full md:w-1/4 hidden md:block">
            <TableOfContents sections={sections} />
          </div>
        </div>
      </div>
    </>
  );
}