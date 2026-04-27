import { useEffect, useRef, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  // Rewrite common top-level selectors (html, body) inside user-provided
  // <style> blocks so they actually match something inside the Shadow DOM.
  // Without this, pasted full-page HTML loses all of its body/html styling
  // because there is no <body> inside the shadow root.
  const rewritten = sanitized.replace(
    /<style\b([^>]*)>([\s\S]*?)<\/style>/gi,
    (_m, attrs: string, css: string) => {
      const fixed = css
        // `html, body { ... }` or `body, html { ... }` -> target shadow root + content
        .replace(/(^|[},])\s*(?:html\s*,\s*body|body\s*,\s*html)\b/gi, "$1 :host, .shadow-body")
        .replace(/(^|[},])\s*body\b/gi, "$1 .shadow-body")
        .replace(/(^|[},])\s*html\b/gi, "$1 :host");
      return `<style${attrs}>${fixed}</style>`;
    }
  );

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Clear any SSR fallback content from the light DOM before attaching shadow.
    if (!host.shadowRoot) {
      host.innerHTML = "";
    }

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
      <div class="shadow-body shadow-content">${rewritten}</div>
    `;
    setMounted(true);
  }, [rewritten]);

  return (
    <div
      ref={hostRef}
      className={className}
      suppressHydrationWarning
      // SSR / pre-hydration fallback so content is visible and indexable.
      // Once mounted, the effect attaches a Shadow DOM and takes over rendering.
      {...(!mounted ? { dangerouslySetInnerHTML: { __html: sanitized } } : {})}
    />
  );
};

export default ShadowHTML;