/**
 * Strips the markdown syntax supported by the blog renderer (BlogContent.tsx)
 * so blog text can be shown outside the article body — blog cards, meta
 * descriptions — without literal `**`, `* ` or `1. ` markers.
 * HTML tags (e.g. inline links) are left untouched.
 */
export const stripBlogMarkdown = (text: string): string =>
  text
    .replace(/\*\*(.*?)\*\*/g, '$1')    // **bold** → bold
    .replace(/^ *\* /gm, '')            // "* " list markers
    .replace(/^ *\d+\. /gm, '');        // "1. " numbered list markers
