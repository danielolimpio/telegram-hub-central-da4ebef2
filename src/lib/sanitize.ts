import DOMPurify from 'dompurify';

const config = {
  ALLOWED_TAGS: [
    'p', 'br', 'hr', 'strong', 'b', 'em', 'i', 'u', 's', 'small', 'sub', 'sup',
    'span', 'div', 'section', 'article', 'header', 'footer', 'main', 'aside', 'nav',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'dl', 'dt', 'dd',
    'blockquote', 'pre', 'code',
    'a', 'img', 'figure', 'figcaption',
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'colgroup', 'col',
    'style',
  ],
  ALLOWED_ATTR: [
    'style', 'class', 'id', 'title', 'lang', 'dir',
    'href', 'target', 'rel',
    'src', 'alt', 'width', 'height', 'loading',
    'colspan', 'rowspan', 'align', 'valign',
  ],
  // Allow <style> blocks so users can paste fully-styled HTML.
  // DOMPurify will still sanitize CSS and strip dangerous URLs/expressions.
  ADD_TAGS: ['style'],
  ALLOW_DATA_ATTR: true,
  KEEP_CONTENT: true,
  // Don't aggressively strip CSS properties — let users style freely.
  // DOMPurify still blocks javascript:, expression(), and behaviors.
  WHOLE_DOCUMENT: false,
  ALLOW_UNKNOWN_PROTOCOLS: false,
} as const;

const sanitizeHTMLForSSR = (dirty: string): string =>
  dirty
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<\/?(?:iframe|object|embed|link|meta|base|form|input|button|textarea|select)[^>]*>/gi, '')
    .replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s+(?:href|src)\s*=\s*(['"])\s*javascript:[^'"]*\1/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/data:text\/html/gi, '');

/**
 * Sanitizes HTML content to prevent XSS attacks
 * Allows safe formatting tags but removes dangerous scripts and attributes
 */
export const sanitizeHTML = (dirty: string): string => {
  if (!dirty) return '';

  if (DOMPurify && typeof DOMPurify === 'object' && typeof (DOMPurify as any).sanitize === 'function') {
    return (DOMPurify as any).sanitize(dirty, config);
  }

  return sanitizeHTMLForSSR(dirty);
};

/**
 * Validates and sanitizes HTML with length limit
 */
export const validateAndSanitizeHTML = (html: string, maxLength: number = 10000): { 
  sanitized: string; 
  isValid: boolean; 
  error?: string 
} => {
  if (!html) {
    return { sanitized: '', isValid: false, error: 'Content is required' };
  }

  // Check length before sanitization
  if (html.length > maxLength) {
    return { 
      sanitized: '', 
      isValid: false, 
      error: `Content exceeds maximum length of ${maxLength} characters` 
    };
  }

  const sanitized = sanitizeHTML(html);

  return { sanitized, isValid: true };
};
