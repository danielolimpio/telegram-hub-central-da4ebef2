import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
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

    const response = await fetch(`https://t.me/${username}`);
    const html = await response.text();
    
    // Extract og:image meta tag
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    
    if (match && match[1]) {
      return new Response(
        JSON.stringify({ thumbnailUrl: match[1] }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    } else {
      // Fallback to UI Avatars
      const fallbackUrl = `https://ui-avatars.com/api/?name=${username}&background=0088cc&color=fff&size=128`;
      return new Response(
        JSON.stringify({ thumbnailUrl: fallbackUrl }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error fetching Telegram thumbnail:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
