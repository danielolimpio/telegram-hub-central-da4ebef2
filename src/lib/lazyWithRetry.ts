import { lazy, type ComponentType } from "react";

const RELOAD_KEY = "lovable:chunk-reload";

/**
 * Wraps React.lazy to recover from stale chunk errors after a new deploy.
 *
 * When the browser has cached an old index.html that references JS chunks
 * which no longer exist on the server, the dynamic import fails with errors
 * like "Failed to fetch dynamically imported module" or the server returns
 * the SPA fallback HTML which then triggers `Unexpected token '<'` when the
 * runtime tries to parse it as JSON/JS. In both cases a single hard reload
 * fixes the situation. We guard with sessionStorage to avoid reload loops.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      // Successful load — clear the guard so future failures can reload again.
      if (typeof window !== "undefined") {
        try {
          window.sessionStorage.removeItem(RELOAD_KEY);
        } catch {
          // ignore
        }
      }
      return mod;
    } catch (error) {
      if (typeof window === "undefined") throw error;

      let alreadyReloaded = false;
      try {
        alreadyReloaded = window.sessionStorage.getItem(RELOAD_KEY) === "1";
      } catch {
        // sessionStorage unavailable — fall through and rethrow.
      }

      if (!alreadyReloaded) {
        try {
          window.sessionStorage.setItem(RELOAD_KEY, "1");
        } catch {
          // ignore
        }
        // Hard reload to pick up the latest index.html and chunk hashes.
        window.location.reload();
        // Return a placeholder that never resolves so React keeps the suspense
        // boundary in the loading state until the reload happens.
        return new Promise<{ default: T }>(() => {});
      }

      throw error;
    }
  });
}