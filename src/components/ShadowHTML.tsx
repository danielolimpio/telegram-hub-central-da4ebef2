import { useEffect, useRef } from "react";
import { sanitizeHTML } from "@/lib/sanitize";

interface ShadowHTMLProps {
  html: string;
  className?: string;
}

/**
 * Renders untrusted (but sanitized) HTML inside a Shadow DOM so that
 * any user-provided <style> blocks and CSS rules are scoped to this
 * subtree only and cannot leak into the rest of the application.
 *
 * During SSR / first paint we render a sanitized fallback so content
 * is still visible (and indexable) before hydration.
 */
const ShadowHTML = ({ html, className }: ShadowHTMLProps) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const sanitized = sanitizeHTML(html || "");

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const root = host.shadowRoot ?? host.attachShadow({ mode: "open" });

    // Base styles inside the shadow root so the user content inherits
    // sensible defaults but stays isolated from the page.
    root.innerHTML = `
      <style>
        :host { display: block; }
        :host, * { box-sizing: border-box; }
        a { color: inherit; }
        img, video { max-width: 100%; height: auto; }
      </style>
      <div class="shadow-content">${sanitized}</div>
    `;
  }, [sanitized]);

  return (
    <div
      ref={hostRef}
      className={className}
      // SSR fallback: visible until hydration replaces it with shadow DOM
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
};

export default ShadowHTML;