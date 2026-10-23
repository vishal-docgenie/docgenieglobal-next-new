
import React from 'react';

interface Section {
  id: string;
  title: string;
  content: string;
}

interface BlogContentProps {
  section: Section;
}

// "* item" and "1. item", optionally indented (template-literal content often is)
const BULLET_ITEM = /^ *\* (.*)$/;
const NUMBERED_ITEM = /^ *(\d+)\. (.*)$/;

// Converts one blank-line-separated block. Consecutive list lines become a
// single <ul>/<ol>; any other lines become a paragraph.
const renderBlock = (block: string) => {
  const out: string[] = [];
  let text: string[] = [];
  // Cast so TS doesn't narrow to null; flushList() reassigns it inside a closure
  let list = null as { tag: 'ul' | 'ol'; start: number; items: string[] } | null;

  const flushText = () => {
    if (text.length) out.push(`<p>${text.join('\n')}</p>`);
    text = [];
  };
  const flushList = () => {
    if (!list) return;
    const cls = list.tag === 'ul' ? 'list-disc' : 'list-decimal';
    const start = list.tag === 'ol' && list.start !== 1 ? ` start="${list.start}"` : '';
    const items = list.items.map((item) => `<li>${item}</li>`).join('');
    out.push(`<${list.tag} class="${cls}"${start}>${items}</${list.tag}>`);
    list = null;
  };

  for (const line of block.split('\n')) {
    const bullet = line.match(BULLET_ITEM);
    const numbered = bullet ? null : line.match(NUMBERED_ITEM);
    if (bullet || numbered) {
      const tag = bullet ? 'ul' : 'ol';
      flushText();
      if (list?.tag !== tag) {
        flushList();
        list = { tag, start: numbered ? Number(numbered[1]) : 1, items: [] };
      }
      list?.items.push(bullet ? bullet[1] : numbered![2]);
    } else {
      flushList();
      if (line.trim()) text.push(line);
    }
  }
  flushText();
  flushList();
  return out.join('');
};

// Simple function to convert Markdown to HTML
const markdownToHtml = (markdown: string) => {
  return markdown
    // Convert ** to bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Paragraphs and lists, block by block
    .split(/\n\n+/).map(renderBlock).join('');
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
