import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// All routes to prerender
const routesToPrerender = [
  "/",
  "/regras",
  "/seguranca",
  "/blog",
  "/all-groups",
  "/como-funciona",
  "/ajuda",
  "/reportar",
  "/faq",
  "/privacidade",
  "/termos",
  "/cookies",
  "/sitemap",
  "/blog/ferramentas",
  "/blog/negocios",
  "/blog/comunidade",
  "/blog/grupos",
  "/blog/privacidade",
  "/grupos-telegram-divulgacao",
  "/grupos-telegram-investimentos",
  "/grupos-telegram-cursos",
  "/grupos-telegram-namoros",
  "/grupos-telegram-esportes",
  "/grupos-telegram-tecnologia",
  "/grupos-telegram-estilo",
  "/grupos-telegram-vendas",
  "/grupos-telegram-redes-sociais",
  "/grupos-telegram-videos",
  "/grupos-telegram-encontros",
  "/grupos-telegram-figurinhas",
  "/grupos-telegram-games",
  "/grupos-telegram-zoeira",
  "/grupos-telegram-promocoes",
  "/grupos-telegram-livros",
  "/grupos-telegram-musicas",
  "/grupos-telegram-liberais",
  "/grupos-telegram-receitas",
  "/grupos-telegram-cinema",
  "/grupos-telegram-lgbtqia",
  "/grupos-telegram-oportunidades",
  "/grupos-telegram-estudos",
  "/grupos-telegram-amizades",
  "/grupos-telegram-noticias",
  "/grupos-telegram-viagens",
  "/grupos-telegram-pets",
];

const Renderer = vitePrerender.PuppeteerRenderer;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: routesToPrerender,
        renderer: new Renderer({
          renderAfterDocumentEvent: "render-event",
          maxConcurrentRoutes: 4,
        }),
        postProcess(renderedRoute) {
          // Ensure route consistency
          renderedRoute.route = renderedRoute.originalRoute;
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
