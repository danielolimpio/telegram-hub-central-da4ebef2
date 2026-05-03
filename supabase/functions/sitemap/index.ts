import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SITE_URL = "https://gruposdotelegram.org";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Static pages always present in the sitemap
const STATIC_PAGES: { path: string; changefreq: string; priority: string }[] = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/todos-grupos/", changefreq: "daily", priority: "0.9" },
  { path: "/blog/", changefreq: "weekly", priority: "0.8" },
  { path: "/como-funciona/", changefreq: "monthly", priority: "0.7" },
  { path: "/faq/", changefreq: "monthly", priority: "0.7" },
  { path: "/ajuda/", changefreq: "monthly", priority: "0.6" },
  { path: "/seguranca/", changefreq: "monthly", priority: "0.7" },
  { path: "/regras/", changefreq: "monthly", priority: "0.6" },
  { path: "/reportar/", changefreq: "monthly", priority: "0.5" },
  { path: "/privacidade/", changefreq: "yearly", priority: "0.4" },
  { path: "/termos/", changefreq: "yearly", priority: "0.4" },
  { path: "/cookies/", changefreq: "yearly", priority: "0.3" },
  { path: "/sitemap/", changefreq: "weekly", priority: "0.5" },
  // Blog categories
  { path: "/blog/ferramentas/", changefreq: "weekly", priority: "0.7" },
  { path: "/blog/negocios/", changefreq: "weekly", priority: "0.7" },
  { path: "/blog/comunidade/", changefreq: "weekly", priority: "0.7" },
  { path: "/blog/grupos/", changefreq: "weekly", priority: "0.7" },
  { path: "/blog/privacidade/", changefreq: "weekly", priority: "0.7" },
  // Group category pages
  { path: "/grupos-telegram-divulgacao/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-vendas/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-promocoes/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-oportunidades/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-investimentos/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-redes-sociais/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-livros/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-estudos/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-cursos/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-videos/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-musicas/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-amizades/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-namoros/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-encontros/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-liberais/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-noticias/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-esportes/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-figurinhas/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-receitas/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-viagens/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-tecnologia/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-games/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-cinema/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-pets/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-estilo/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-zoeira/", changefreq: "daily", priority: "0.8" },
  { path: "/grupos-telegram-lgbtqia/", changefreq: "daily", priority: "0.8" },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatDate(d: string | Date): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toISOString().split("T")[0];
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Fetch every approved group (paginate to bypass 1000-row default)
    const groups: { slug: string; updated_at: string }[] = [];
    const pageSize = 1000;
    let from = 0;
    while (true) {
      const { data, error } = await supabase
        .from("groups")
        .select("slug, updated_at")
        .eq("status", "approved")
        .order("created_at", { ascending: false })
        .range(from, from + pageSize - 1);
      if (error) throw error;
      if (!data || data.length === 0) break;
      groups.push(...data);
      if (data.length < pageSize) break;
      from += pageSize;
    }

    const today = formatDate(new Date());

    const urls: string[] = [];

    for (const p of STATIC_PAGES) {
      urls.push(
        `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
      );
    }

    for (const g of groups) {
      if (!g.slug) continue;
      const lastmod = g.updated_at ? formatDate(g.updated_at) : today;
      urls.push(
        `  <url>\n    <loc>${SITE_URL}/grupo/${escapeXml(g.slug)}/</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
      );
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

    return new Response(xml, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=300",
      },
    });
  } catch (err) {
    console.error("sitemap error:", err);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>\n<error>${escapeXml(String(err))}</error>`,
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/xml" } },
    );
  }
});