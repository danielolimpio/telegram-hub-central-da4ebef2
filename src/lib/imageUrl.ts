/**
 * Image URL helpers.
 *
 * Image loading helpers used by group thumbnails.
 *
 * Important: this Supabase project does not have the Storage image transform
 * feature enabled. Calling `/storage/v1/render/image/public/...` returns 403
 * and makes every thumbnail fall back to the blue initials placeholder.
 * For group cards we therefore keep the original public object URL and only
 * use the textual fallback when the original image itself cannot be loaded.
 */

export interface WebpOptions {
  width?: number;
  height?: number;
  quality?: number;
}

/**
 * Keep backward compatibility with the previous helper name while avoiding
 * the disabled Supabase render endpoint. The options are intentionally ignored.
 */
export function toWebp(url: string | null | undefined, opts: WebpOptions = {}): string {
  void opts;
  return url || "";
}
