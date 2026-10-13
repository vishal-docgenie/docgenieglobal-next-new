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

/** Longest meta description we publish, including any ellipsis. */
export const META_DESCRIPTION_MAX_LENGTH = 160;

const ELLIPSIS = '...';

/**
 * Shortens text to at most `maxLength` characters (ellipsis included) without
 * cutting a word in half.
 *
 * Phase 3B: the previous logic was `text.substring(0, 157) + '...'`, which
 * sliced blindly at character 157 and routinely ended mid-word — live example:
 * "...improve patient experience, workflows, and care conti...". Google shows
 * that verbatim, so it read as truncated and damaged click-through on the 27
 * posts that rely on the generated fallback.
 *
 * Now the cut moves back to the last whitespace boundary that fits, and any
 * trailing punctuation is removed so the ellipsis reads cleanly. A single word
 * longer than the budget still falls back to a hard slice, which keeps the
 * length guarantee absolute.
 *
 * Length is never exceeded; text already within the limit is returned
 * unchanged apart from whitespace normalisation.
 */
export const truncateAtWordBoundary = (
  text: string,
  maxLength: number = META_DESCRIPTION_MAX_LENGTH
): string => {
  const normalised = text.trim().replace(/\s+/g, ' ');
  if (normalised.length <= maxLength) return normalised;

  // Reserve room for the ellipsis.
  const budget = Math.max(0, maxLength - ELLIPSIS.length);
  // Slice one character past the budget so a boundary sitting exactly at the
  // budget is still found by lastIndexOf.
  const lastBoundary = normalised.slice(0, budget + 1).lastIndexOf(' ');

  const body =
    lastBoundary > 0
      ? normalised.slice(0, lastBoundary)
      : normalised.slice(0, budget); // single oversized word: hard cut

  // Drop punctuation left dangling before the ellipsis (", " / ". " / " - ").
  return `${body.replace(/[\s,;:.!?–—-]+$/u, '')}${ELLIPSIS}`;
};
