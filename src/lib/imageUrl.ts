/**
 * Image URL helpers.
 *
 * Supabase Storage exposes an on-the-fly image transformation endpoint at
 * `/storage/v1/render/image/public/...` that can resize and convert formats
 * (including WebP). We use it to serve small, well-cached WebP thumbnails
 * so avatars render immediately on the first visit instead of falling back
 * to the blue Radix Avatar placeholder while the original JPG/PNG loads.
 */

const SUPABASE_OBJECT_PREFIX = "/storage/v1/object/public/";
const SUPABASE_RENDER_PREFIX = "/storage/v1/render/image/public/";

export interface WebpOptions {
  width?: number;
  height?: number;
  quality?: number;
}

/**
 * Convert a Supabase public object URL into an optimized WebP variant served
 * by Supabase's image transformation endpoint. Non-Supabase URLs (or empty
 * strings) are returned unchanged so external avatars still work.
 */
export function toWebp(url: string | null | undefined, opts: WebpOptions = {}): string {
  if (!url) return "";
  try {
    const u = new URL(url);
    const idx = u.pathname.indexOf(SUPABASE_OBJECT_PREFIX);
    if (idx === -1) return url;
    const rest = u.pathname.slice(idx + SUPABASE_OBJECT_PREFIX.length);
    const params = new URLSearchParams();
    params.set("format", "webp");
    if (opts.width) params.set("width", String(opts.width));
    if (opts.height) params.set("height", String(opts.height));
    params.set("quality", String(opts.quality ?? 80));
    params.set("resize", "cover");
    return `${u.origin}${SUPABASE_RENDER_PREFIX}${rest}?${params.toString()}`;
  } catch {
    return url;
  }
}
