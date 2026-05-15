import type { BlogContent, BlogSection } from '@/data/blogs/types';

/**
 * Builds the section list used by the article body and the TOC sidebar.
 * Wraps the blog's intro and (optional) conclusion as their own sections,
 * with the curated mid-sections in between.
 */
export const generateSections = (content: BlogContent): BlogSection[] => {
  try {
    if (!content || !content.sections) {
      throw new Error('Blog content is missing sections');
    }

    const sections: BlogSection[] = [
      { id: 'introduction', title: 'Introduction', content: content.intro },
      ...content.sections,
    ];

    if (content.conclusion) {
      sections.push({
        id: 'conclusion',
        title: 'Conclusion',
        content: content.conclusion,
      });
    }

    return sections;
  } catch (error) {
    console.error('Error generating sections:', error);
    return [
      {
        id: 'error',
        title: 'Content Error',
        content: 'There was an error processing this content. Please try again later.',
      },
    ];
  }
};