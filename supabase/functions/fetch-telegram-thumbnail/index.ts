import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per minute
const RATE_LIMIT_WINDOW = 60000; // 1 minute in ms

function getRateLimitKey(req: Request): string {
  return req.headers.get("x-forwarded-for") || 
         req.headers.get("x-real-ip") || 
         "unknown";
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const existing = rateLimitMap.get(key);
  
  if (!existing || now > existing.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (existing.count >= RATE_LIMIT) {
    return false;
  }
  
  existing.count++;
  return true;
}

function isValidTelegramUsername(username: string): boolean {
  // Telegram usernames: 5-32 characters, alphanumeric and underscores
  return /^[a-zA-Z0-9_]{5,32}$/.test(username);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limiting
  const clientKey = getRateLimitKey(req);
  if (!checkRateLimit(clientKey)) {
    console.warn(`Rate limit exceeded for ${clientKey}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { telegramLink } = await req.json();
    
    if (!telegramLink || !telegramLink.includes("t.me/")) {
      return new Response(
        JSON.stringify({ error: "Invalid Telegram link" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const username = telegramLink.split("t.me/")[1]?.replace(/^@/, "").split("/")[0];
    if (!username) {
      return new Response(
        JSON.stringify({ error: "Could not extract username" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate username format
    if (!isValidTelegramUsername(username)) {
      console.warn(`Invalid username format: ${username}`);
      return new Response(
        JSON.stringify({ error: "Invalid Telegram username format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Fetching thumbnail for: ${username}`);

    // Fetch with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(`https://t.me/${username}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const html = await response.text();
    
    // Extract og:image meta tag
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    
    if (match && match[1]) {
      console.log(`Thumbnail found for: ${username}`);
      return new Response(
        JSON.stringify({ thumbnailUrl: match[1] }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } else {
      // Fallback to UI Avatars
      const fallbackUrl = `https://ui-avatars.com/api/?name=${username}&background=0088cc&color=fff&size=128`;
      console.log(`Using fallback for: ${username}`);
      return new Response(
        JSON.stringify({ thumbnailUrl: fallbackUrl }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error("Request timeout");
      return new Response(
        JSON.stringify({ error: "Request timeout" }),
        { status: 504, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    console.error("Error fetching Telegram thumbnail:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
