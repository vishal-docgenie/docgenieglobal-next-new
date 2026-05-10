/**
 * A single section within a blog post.
 * - `id`     — kebab-cased slug, used as the URL anchor (e.g. /blogs/foo#enhanced-brand-visibility)
 * - `title`  — displayed heading (e.g. "1. Enhanced Brand Visibility")
 * - `content` — body prose. Supports the existing markdownToHtml syntax used in BlogContent.tsx
 *               (blank-line paragraphs, **bold**, *italic*, `* ` unordered lists, `1.` numbered lists).
 */
export interface BlogSection {
  id: string;
  title: string;
  content: string;
}

/**
 * Structured content for a blog post. Replaces the previous flat-string content.
 * - `intro`      — opening paragraph(s); rendered as the "Introduction" section.
 * - `sections`   — the curated mid-sections (Style B: numbered, listicle-style).
 * - `conclusion` — optional closing paragraph(s); rendered as the "Conclusion" section if present.
 */
export interface BlogContent {
  intro: string;
  sections: BlogSection[];
  conclusion?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug?: string;          // Optional — generated from title if not provided
  content: BlogContent;   // Structured content (was: string)
  date: string;
  readTime: string;
  image: string;
  imageAlt?: string;
  category: string;
  tags: string[];
  featured?: boolean;
  faqs?: {
    question: string;
    answer: string;
  }[];
  schemafaqs?: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}