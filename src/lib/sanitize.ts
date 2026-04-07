import DOMPurify from 'dompurify';

const config = {
  ALLOWED_TAGS: [
    'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'span', 'h1', 'h2', 'h3',
    'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote'
  ],
  ALLOWED_ATTR: ['style', 'class'],
  ALLOWED_STYLES: {
    '*': {
      'color': [/^#[0-9a-fA-F]{3,6}$/, /^rgb\(/, /^rgba\(/],
      'background-color': [/^#[0-9a-fA-F]{3,6}$/, /^rgb\(/, /^rgba\(/],
      'text-align': [/^left$/, /^right$/, /^center$/, /^justify$/],
      'font-family': [/.*/],
      'font-size': [/^\d+(?:px|em|rem|%)$/],
    }
  },
  KEEP_CONTENT: true,
} as const;

const sanitizeHTMLForSSR = (dirty: string): string =>
  dirty
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
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
export const validateAndSanitizeHTML = (html: string, maxLength: number = 5000): { 
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
