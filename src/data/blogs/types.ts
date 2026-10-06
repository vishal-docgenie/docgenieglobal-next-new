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
 * - `quickAnswer` — optional short answer; rendered as a "Quick Answer" callout after the intro.
 * - `sections`   — the curated mid-sections (Style B: numbered, listicle-style).
 * - `conclusion` — optional closing paragraph(s); rendered as the "Conclusion" section if present.
 */
export interface BlogContent {
  intro: string;
  quickAnswer?: string;   // Optional "Quick Answer" callout rendered right after the intro (supports inline HTML)
  sections: BlogSection[];
  conclusion?: string;
}

/**
 * Optional custom CTA block at the bottom of a blog post.
 */
export interface BlogCustomCta {
  heading: string;
  body: string;
}

export interface BlogAuthor {
  name: string;
  title: string;
  credentials: string;
  image: string;
  linkedin?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug?: string;          // Optional — generated from title if not provided
  seoTitle?: string;      // Optional <title> override; falls back to title
  metaDescription?: string; // Optional meta description override; falls back to conclusion/intro
  content: BlogContent;   // Structured content (was: string)
  date: string;
  dateModified?: string;  // ISO date string; falls back to date if omitted
  readTime: string;
  author?: BlogAuthor;
  image: string;
  imageAlt?: string;
  category: string;
  tags: string[];
  featured?: boolean;
  cta?: BlogCustomCta;    // Optional custom CTA block. Falls back to default if omitted.
  howToSteps?: {
    name: string;
    text: string;
  }[];
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