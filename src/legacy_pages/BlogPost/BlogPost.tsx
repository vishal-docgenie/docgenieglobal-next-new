
import { useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import BlogHeader from './components/BlogHeader';
import { useIsMobile } from '@/hooks/use-mobile';
import { useBlogData, generateSlug } from './hooks/useBlogData';
import { useScrollTracking } from './hooks/useScrollTracking';
import { blogData } from '../Blogs/data/blogData';
import BlogContent from './components/BlogContent';
import ConclusionBox from './components/ConclusionBox';
import TableOfContents from './components/TableOfContents';
import BlogCTA from './components/BlogCTA';
import FaqSection from './components/FaqSection';
import BlogSEO from './components/BlogSEO';
import RelatedArticles from './components/RelatedArticles';

// Debug component to help troubleshoot slug issues
const DebugSlugInfo = ({ slug }: { slug: string }) => {
  return (
    <div className="bg-red-50 p-4 mb-4 rounded-lg border border-red-200">
      <h3 className="text-red-700 font-bold">Debug Information</h3>
      <p className="text-sm">Current URL slug: <code className="bg-gray-100 px-1 py-0.5 rounded">{slug}</code></p>
      <div className="mt-2 text-xs">
        <p className="font-semibold">Available blog slugs:</p>
        <ul className="space-y-1 mt-1">
          {blogData.map((blog, index) => (
            <li key={index}>
              <span className={`${generateSlug(blog.title) === slug || blog.slug === slug ? 'font-bold text-green-700' : ''}`}>
                Blog #{blog.id} ({blog.title}):
              </span>
              <ul className="ml-4">
                <li>Custom slug: <code className="bg-gray-100 px-1">{blog.slug || 'not set'}</code></li>
                <li>Generated slug: <code className="bg-gray-100 px-1">{generateSlug(blog.title)}</code></li>
                <li>Matches current URL: {generateSlug(blog.title) === slug || blog.slug === slug ? '✅' : '❌'}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BlogPost = () => {
  // Use slug parameter for routing
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const isMobile = useIsMobile();
  
  console.log('========== BlogPost COMPONENT RENDERING ==========');
  console.log('📣 BlogPost rendering with slug parameter:', slug);
  
  // Memoize the callback so it doesn't change on every render
  const handleNotFound = useCallback(() => {
    console.log('⚠️ Blog not found, navigating to /blogs');
    router.push('/blogs');
  }, [router]);
  
  const { blog, sections, isLoading } = useBlogData(slug, handleNotFound);
  
  console.log('BlogPost received data:', { 
    blogExists: !!blog,
    blogTitle: blog?.title,
    sectionsCount: sections?.length || 0,
    isLoading 
  });

  if (blog) {
    console.log('Blog details for rendering:', {
      title: blog.title,
      date: blog.date,
      readTime: blog.readTime,
      category: blog.category,
      imageUrl: blog.image && blog.image.substring(0, 50) + '...',
      sectionIds: sections.map(s => s.id)
    });
  }
  
  const activeSection = useScrollTracking(sections, isLoading);
  console.log('Current active section:', activeSection);

  // Apply smooth scrolling behavior only to blog post pages
  useEffect(() => {
    // Save the original scroll behavior
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    
    // Set smooth scrolling for this page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('BlogPost mounted or updated with slug:', slug);
    
    // Cleanup function to restore original scroll behavior when leaving the page
    return () => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      console.log('BlogPost unmounted');
    };
  }, [slug]);

  useEffect(() => {
    if (!isLoading) {
      console.log('Blog post data loaded, rendering with:', {
        hasBlog: !!blog,
        sectionCount: sections.length
      });
    }
  }, [isLoading, blog, sections]);

  if (isLoading) {
    console.log('Rendering loading state');
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <div className="w-full max-w-4xl">
              <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
              <div className="relative -mt-24 bg-white rounded-t-lg shadow-lg p-6 max-w-4xl mx-auto">
                <div className="h-6 bg-gray-200 animate-pulse rounded w-1/3 mb-4"></div>
                <div className="h-8 bg-gray-200 animate-pulse rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <DebugSlugInfo slug={slug || ''} />
          <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto bg-red-50 p-6 rounded-lg border border-red-200">
            <h2 className="text-2xl font-bold text-red-600">Blog Post Not Found</h2>
            <p className="text-gray-700">We couldn't find a blog post matching the URL parameter: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{slug}</span></p>
            
            <div className="w-full mt-6">
              <h3 className="text-lg font-semibold mb-2">Available Blog Slugs:</h3>
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm overflow-auto max-h-60">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Blog Title</th>
                      <th className="text-left py-2">Generated Slug</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogData.map((blogItem, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="py-2 pr-4">{blogItem.title}</td>
                        <td className="py-2 font-mono">{generateSlug(blogItem.title)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <button 
              onClick={() => router.push('/blogs')}
              className="mt-4 px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-brand-blue/90 transition-colors"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  console.log('Rendering simplified blog content');
  console.log('========== BlogPost RENDER COMPLETED ==========');
  
  return (
    <Layout>
      {/* Add SEO component */}
      {blog && <BlogSEO blog={blog} />}
      
      <BlogHeader blog={blog} />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            {/* Mobile Table of Contents - only visible on mobile */}
            <div className="md:hidden mb-6">
              <TableOfContents sections={sections} activeSection={activeSection} />
            </div>
            
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                <BlogContent section={section} />
              </div>
            ))}
            
            {blog.conclusion && <ConclusionBox conclusion={blog.conclusion} />}
            
            {/* Add FAQ section before the CTA */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div className="mt-16">
                <FaqSection faqs={blog.faqs} />
              </div>
            )}
            
            {/* Add the Related Articles section here, before the CTA */}
            <RelatedArticles currentBlog={blog} allBlogs={blogData} />
            
            {/* Add the Blog CTA section */}
            <div className="mt-16">
              <BlogCTA />
            </div>
          </div>
          <div className="w-full md:w-1/4 hidden md:block">
            <TableOfContents sections={sections} activeSection={activeSection} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
