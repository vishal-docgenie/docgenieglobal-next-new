import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstileConfig";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** Loads the Turnstile library once per page, however many widgets mount. */
let scriptPromise: Promise<void> | null = null;
function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null; // allow a retry on the next mount
      reject(new Error("Turnstile script failed to load"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export type TurnstileHandle = {
  /** Gets a fresh token. Tokens are single-use, so call after every submit. */
  reset: () => void;
};

type Props = {
  action: string;
  onToken: (token: string | null) => void;
};

/**
 * Cloudflare Turnstile bot check.
 *
 * Usually invisible to real visitors; Cloudflare only shows an interactive
 * checkbox when it is unsure. It sets no tracking cookies, so it is not gated
 * on the CookieYes analytics/marketing consent the way GA and Clarity are.
 */
const TurnstileWidget = forwardRef<TurnstileHandle, Props>(({ action, onToken }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [failed, setFailed] = useState(false);

  // Keep the latest callback without re-rendering the widget when it changes.
  const onTokenRef = useRef(onToken);
  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      onTokenRef.current(null);
      if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
    },
  }));

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      console.error("Turnstile: NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set.");
      return;
    }

    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action,
          callback: (token) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(null),
          "error-callback": () => onTokenRef.current(null),
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, [action]);

  return (
    <div>
      <div ref={containerRef} />
      {(failed || !TURNSTILE_SITE_KEY) && (
        <p className="text-sm text-red-600" role="alert">
          The security check could not load. Please disable any ad or script blocker for this site and refresh the page.
        </p>
      )}
    </div>
  );
});

TurnstileWidget.displayName = "TurnstileWidget";

export default TurnstileWidget;
