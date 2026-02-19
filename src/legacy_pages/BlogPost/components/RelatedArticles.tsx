import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRight, Tag } from 'lucide-react';
import { BlogPost } from '../../Blogs/types';
import { generateSlug } from '../hooks/useBlogData';

interface RelatedArticlesProps {
  currentBlog: BlogPost;
  allBlogs: BlogPost[];
  maxRelated?: number;
}

const RelatedArticles = ({ currentBlog, allBlogs, maxRelated = 3 }: RelatedArticlesProps) => {
  const router = useRouter();

  // Find related blogs based on matching tags
  const relatedBlogs = allBlogs
    .filter(blog =>
      // Don't include the current blog
      blog.id !== currentBlog.id &&
      // Find blogs with at least one matching tag
      blog.tags.some(tag => currentBlog.tags.includes(tag))
    )
    // Sort by number of matching tags (most matches first)
    .sort((a, b) => {
      const aMatches = a.tags.filter(tag => currentBlog.tags.includes(tag)).length;
      const bMatches = b.tags.filter(tag => currentBlog.tags.includes(tag)).length;
      return bMatches - aMatches;
    })
    // Limit to maxRelated
    .slice(0, maxRelated);

  // Scroll to top when navigating between blog posts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [router.asPath]);

  if (relatedBlogs.length === 0) {
    return null;
  }

  const handleLinkClick = () => {
    // Scroll to top with smooth animation when clicking on a related article
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Articles</h2>
      <div className="space-y-6">
        {relatedBlogs.map((blog) => {
          // Determine which slug to use
          const slug = blog.slug || generateSlug(blog.title);

          return (
            <div key={blog.id} className="flex flex-col md:flex-row gap-4 bg-gray-50 rounded-lg overflow-hidden hover:bg-gray-100 transition-colors">
              <Link
                href={`/blogs/${slug}`}
                className="block md:w-1/3 h-48 overflow-hidden"
                onClick={handleLinkClick}
              >
                <img
                  src={blog.image}
                  alt={blog.imageAlt || blog.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </Link>
              <div className="p-4 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <Link
                    href={`/blogs/${slug}`}
                    className="block"
                    onClick={handleLinkClick}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-brand-blue transition-colors">
                      {blog.title}
                    </h3>
                  </Link>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags
                      .filter(tag => currentBlog.tags.includes(tag))
                      .slice(0, 3)
                      .map((tag, index) => (
                        <span key={index} className="inline-flex items-center text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
                <Link
                  href={`/blogs/${slug}`}
                  className="inline-flex items-center text-gray-700 hover:underline mt-2"
                  onClick={handleLinkClick}
                >
                  Read more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedArticles;
