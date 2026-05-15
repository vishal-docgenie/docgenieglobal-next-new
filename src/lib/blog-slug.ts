/**
 * Convert a blog title into a URL-friendly slug.
 * Used as a fallback for blogs that don't have an explicit `slug` field.
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // remove special characters
    .replace(/\s+/g, '-')       // spaces → hyphens
    .replace(/-+/g, '-')        // collapse multiple hyphens
    .trim();
};
