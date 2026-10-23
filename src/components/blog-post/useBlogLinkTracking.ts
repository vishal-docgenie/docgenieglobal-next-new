import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Path prefixes that count as a commercial destination.
 *
 * Blog prose also links to other articles, and RelatedArticles sits inside the
 * same column, so firing on every internal link would bury the signal in
 * blog-to-blog navigation. Only these destinations are recorded.
 */
const COMMERCIAL_PREFIXES = [
  "/solutions",
  "/us/white-label-telemedicine-platform",
  "/uk/white-label-telemedicine-platform",
  "/za/white-label-telemedicine-platform",
  "/gh/white-label-telemedicine-platform",
  "/industries",
  "/contact",
  "/pricing",
];

const MAX_LINK_TEXT = 100;

/**
 * Records clicks on editorial links that lead from an article to a commercial
 * page.
 *
 * Phase 7 showed the blog-to-money-page path was invisible: 86 in-content
 * links across the published posts carried no tracking at all, so "which
 * article sends people to which commercial page" could not be answered.
 *
 * One delegated listener on the article column covers all 86 links without
 * touching the blog content itself. The Phase 7 contextual CTA lives in
 * BlogCTA, which is a sibling of this column rather than a descendant, so it
 * is out of scope structurally — a single click can never produce both a
 * cta_click and a blog_link_click.
 *
 * @param ref       The article column element.
 * @param sourcePath Path of the article, used as source_path.
 */
export function useBlogLinkTracking(
  ref: React.RefObject<HTMLElement | null>,
  sourcePath: string
) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor || !root.contains(anchor)) return;

      // Resolve relative hrefs and ignore anything leaving the site.
      const href = anchor.getAttribute("href");
      if (!href) return;
      let destination: string;
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        destination = url.pathname;
      } catch {
        return;
      }

      if (!COMMERCIAL_PREFIXES.some((p) => destination.startsWith(p))) return;

      trackEvent({
        event: "blog_link_click",
        source_path: sourcePath,
        link_text: (anchor.textContent || "").replace(/\s+/g, " ").trim().slice(0, MAX_LINK_TEXT),
        destination_path: destination,
        link_type: anchor.closest("[data-blog-faq]") ? "faq" : "inline_content",
      });
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [ref, sourcePath]);
}
