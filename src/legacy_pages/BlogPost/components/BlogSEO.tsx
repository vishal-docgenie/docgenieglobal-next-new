
import React from 'react';
import Head from "next/head";
import { BlogPost } from '../../Blogs/types';
import { generateSlug } from '../hooks/useBlogData';

interface BlogSEOProps {
  blog: BlogPost;
}

const BlogSEO = ({ blog }: BlogSEOProps) => {
  // Generate base URL with the correct domain
  const baseUrl = 'https://www.docgenieglobal.com';
  const blogUrl = `${baseUrl}/blogs/${blog.slug || generateSlug(blog.title)}`;
  
  // Create meta description with keywords
  const generateMetaDescription = () => {
    const sourceText = blog.conclusion?.trim() || blog.content?.trim() || "DocGenie Global offers a comprehensive white-label telemedicine platform for clinics, hospitals, and healthcare providers.";

    if (sourceText.length <= 160) {
      return sourceText;
    }

    return `${sourceText.substring(0, 157)}...`;
  };
  
  // Format date for schema
  const formatSchemaDate = (dateString: string) => {
    // Convert date like "August 15, 2024" to ISO format
    try {
      const date = new Date(dateString);
      return date.toISOString();
    } catch (e) {
      console.error('Error formatting date for schema:', e);
      return dateString;
    }
  };
  
  // Build primary meta values with sensible fallbacks
  const pageTitle = blog.title?.trim()
    ? `${blog.title.trim()} | DocGenie Global`
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
      "url": blog.image,
      "caption": blog.imageAlt || `Image related to ${blog.title}`
    },
    "author": {
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
    "dateModified": formatSchemaDate(blog.date),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogUrl
    },
    "keywords": keywords
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
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={blogUrl} />

      {/* Open Graph Tags for Social Media */}
      <meta property="og:url" content={blogUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={blog.title || "DocGenie Global"} />
      <meta property="og:image" content={blog.image} />
      <meta property="og:image:alt" content={blog.imageAlt || `Image related to ${blog.title}`} />
      <meta property="og:site_name" content="DocGenie Global" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={blog.title || "DocGenie Global"} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={blog.image} />
      <meta name="twitter:image:alt" content={blog.imageAlt || `Image related to ${blog.title}`} />
      
      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Head>
  );
};

export default BlogSEO;
