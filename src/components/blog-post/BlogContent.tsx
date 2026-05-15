
import React from 'react';

interface Section {
  id: string;
  title: string;
  content: string;
}

interface BlogContentProps {
  section: Section;
}

// Simple function to convert Markdown to HTML
const markdownToHtml = (markdown: string) => {
  return markdown
    // Convert ** to bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Convert * list items (with proper indentation)
    .replace(/^ *\* (.*?)$/gm, '<li>$1</li>')
    // Wrap lists in ul tags
    .replace(/<li>(.*?)(<li>|$)/g, '<ul><li>$1</ul>$2')
    // Convert numbered list items
    .replace(/^\d+\. (.*?)$/gm, '<li>$1</li>')
    // Wrap numbered lists in ol tags
    .replace(/<li>(.*?)(<li>|$)/g, '<ol><li>$1</ol>$2')
    // Convert line breaks to paragraphs
    .split(/\n\n+/).map(p => `<p>${p}</p>`).join('');
};

const BlogContent = ({ section }: BlogContentProps) => {
  return (
    <div className="blog-section text-left">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-snug text-center">
        {section.title}
      </h2>
      <div className="prose max-w-none text-left leading-relaxed">
        <div 
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(section.content) }}
        />
      </div>
    </div>
  );
};

export default BlogContent;
