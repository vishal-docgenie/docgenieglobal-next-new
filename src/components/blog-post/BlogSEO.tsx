import Head from "next/head";
import { BlogPost } from '@/data/blogs/types';
import { generateSlug } from '@/lib/blog-slug';
import { stripBlogMarkdown, stripHtmlTags, truncateAtWordBoundary } from '@/lib/blogText';

interface BlogSEOProps {
  blog: BlogPost;
}

const BlogSEO = ({ blog }: BlogSEOProps) => {
  // Generate base URL with the correct domain
  const baseUrl = 'https://www.docgenieglobal.com';
  const blogUrl = `${baseUrl}/blogs/${blog.slug || generateSlug(blog.title)}/`;

  /**
   * Open Graph and schema.org both require absolute image URLs; a path-only
   * value is simply dropped by most scrapers, so those posts shared without a
   * preview image. 16 of the 31 published posts stored a site-relative path
   * (`/images/blog/...`), 3 stored an absolute DocGenie URL and 12 point at
   * Unsplash. Normalising here rather than rewriting blogData fixes og:image,
   * twitter:image and the BlogPosting schema in one place, keeps each article's
   * own artwork, and means a future post stored either way still emits a valid
   * absolute URL. Values that are already absolute (including the external
   * ones) pass through untouched.
   */
  const absoluteImageUrl = (src?: string) =>
    src && src.startsWith('/') ? `${baseUrl}${src}` : src;

  const socialImage = absoluteImageUrl(blog.image);

  // Create meta description with keywords (prefer conclusion, fall back to intro)
  const generateMetaDescription = () => {
    if (blog.metaDescription?.trim()) {
      return blog.metaDescription.trim();
    }
    const sourceText = stripHtmlTags(stripBlogMarkdown(
      blog.content?.conclusion?.trim() ||
      blog.content?.intro?.trim() ||
      "DocGenie Global offers a comprehensive white-label telemedicine platform for clinics, hospitals, and healthcare providers."
    ));

    // Posts with an explicit metaDescription returned above and never reach
    // this truncation path.
    return truncateAtWordBoundary(sourceText);
  };

  // Format date for schema
  const formatSchemaDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toISOString();
    } catch (e) {
      console.error('Error formatting date for schema:', e);
      return dateString;
    }
  };

  // Build primary meta values with sensible fallbacks
  const seoTitle = blog.seoTitle?.trim() || blog.title?.trim();
  const pageTitle = seoTitle
    ? `${seoTitle} | DocGenie Global`
    : "DocGenie Global - B2B Telemedicine Platform";

  const metaDescription = generateMetaDescription();

  const keywords = Array.isArray(blog.tags) && blog.tags.length > 0
    ? blog.tags.join(', ')
    : "telemedicine, healthcare technology, virtual care, DocGenie Global";

  // Generate schema for article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": generateMetaDescription(),
    "image": {
      "@type": "ImageObject",
      "url": socialImage,
      "caption": blog.imageAlt || `Image related to ${blog.title}`
    },
    "author": blog.author
      ? {
          "@type": "Person",
          "name": blog.author.name,
          "jobTitle": blog.author.title,
          "description": blog.author.credentials,
          ...(blog.author.linkedin ? { "sameAs": blog.author.linkedin } : {})
        }
      : {
          "@type": "Organization",
          "name": "DocGenie Global"
        },
    "publisher": {
      "@type": "Organization",
      "name": "DocGenie Global",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/lovable-uploads/docgenie-logo.png`
      }
    },
    "datePublished": formatSchemaDate(blog.date),
    "dateModified": formatSchemaDate(blog.dateModified || blog.date),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogUrl
    },
    "keywords": keywords
  };

  // HowTo schema (only for step-by-step guide blogs)
  const howToSchema = Array.isArray(blog.howToSteps) && blog.howToSteps.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": blog.title,
        "description": generateMetaDescription(),
        "step": blog.howToSteps.map((step, i) => ({
          "@type": "HowToStep",
          "position": i + 1,
          "name": step.name,
          "text": step.text
        }))
      }
    : null;

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blogs/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": blogUrl
      }
    ]
  };

  // Generate schema for faq
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Array.isArray(blog.schemafaqs) ? blog.schemafaqs : []
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title key="title">{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={blogUrl} />

      {/* Open Graph Tags for Social Media */}
      <meta property="og:url" content={blogUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={blog.title || "DocGenie Global"} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={blog.imageAlt || `Image related to ${blog.title}`} />
      <meta property="og:site_name" content="DocGenie Global" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={blog.title || "DocGenie Global"} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={blog.imageAlt || `Image related to ${blog.title}`} />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* HowTo Schema */}
      {howToSchema && (
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      )}

      {/* FAQ Schema */}
      {Array.isArray(blog.schemafaqs) && blog.schemafaqs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Head>
  );
};

export default BlogSEO;