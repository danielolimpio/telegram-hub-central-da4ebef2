import DOMPurify from 'dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks
 * Allows safe formatting tags but removes dangerous scripts and attributes
 */
export const sanitizeHTML = (dirty: string): string => {
  if (!dirty) return '';

  // Configure DOMPurify to allow safe formatting tags
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
  };

  return DOMPurify.sanitize(dirty, config);
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
