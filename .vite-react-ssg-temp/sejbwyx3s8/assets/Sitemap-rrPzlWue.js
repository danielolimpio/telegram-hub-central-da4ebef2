import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { m as mainPagesSEO } from "./seo-DxaWTmB0.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import { Map, Home, HelpCircle, FileText, BookOpen, Folder, Users, Shield, Lock, Megaphone, ShoppingCart, Tag, Briefcase, TrendingUp, Share2, BookMarked, GraduationCap, Video, Music, Heart, Flame, Users2, Newspaper, Trophy, Image, ChefHat, Plane, Cpu, Gamepad2, Film, PawPrint, Shirt, Laugh, Rainbow, Wrench, Building, ExternalLink } from "lucide-react";
import "react";
import "./button-CeG9Zf-X.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "./client-Du4NYLEw.js";
import "@supabase/supabase-js";
const Sitemap = () => {
  const mainPages = [
    { name: "Página Inicial", url: "/", icon: Home },
    { name: "Todos os Grupos", url: "/all-groups", icon: Users },
    { name: "Como Funciona", url: "/como-funciona", icon: HelpCircle },
    { name: "Regras da Comunidade", url: "/regras", icon: Shield },
    { name: "Dicas de Segurança", url: "/seguranca", icon: Lock },
    { name: "Blog", url: "/blog", icon: BookOpen }
  ];
  const supportPages = [
    { name: "Central de Ajuda", url: "/ajuda", icon: HelpCircle },
    { name: "Reportar Problema", url: "/reportar", icon: Shield },
    { name: "Perguntas Frequentes (FAQ)", url: "/faq", icon: HelpCircle }
  ];
  const legalPages = [
    { name: "Política de Privacidade", url: "/privacidade", icon: Shield },
    { name: "Termos de Uso", url: "/termos", icon: FileText },
    { name: "Política de Cookies", url: "/cookies", icon: FileText }
  ];
  const groupCategories = [
    { name: "Grupos de Divulgação", url: "/grupos-telegram-divulgacao", icon: Megaphone },
    { name: "Grupos de Vendas", url: "/grupos-telegram-vendas", icon: ShoppingCart },
    { name: "Grupos de Promoções", url: "/grupos-telegram-promocoes", icon: Tag },
    { name: "Grupos de Oportunidades", url: "/grupos-telegram-oportunidades", icon: Briefcase },
    { name: "Grupos de Investimentos", url: "/grupos-telegram-investimentos", icon: TrendingUp },
    { name: "Grupos de Redes Sociais", url: "/grupos-telegram-redes-sociais", icon: Share2 },
    { name: "Grupos de Livros", url: "/grupos-telegram-livros", icon: BookMarked },
    { name: "Grupos de Estudos", url: "/grupos-telegram-estudos", icon: GraduationCap },
    { name: "Grupos de Cursos", url: "/grupos-telegram-cursos", icon: GraduationCap },
    { name: "Grupos de Vídeos", url: "/grupos-telegram-videos", icon: Video },
    { name: "Grupos de Músicas", url: "/grupos-telegram-musicas", icon: Music },
    { name: "Grupos de Amizades", url: "/grupos-telegram-amizades", icon: Heart },
    { name: "Grupos de Namoros", url: "/grupos-telegram-namoros", icon: Heart },
    { name: "Grupos de Encontros", url: "/grupos-telegram-encontros", icon: Flame },
    { name: "Grupos Liberais", url: "/grupos-telegram-liberais", icon: Users2 },
    { name: "Grupos de Notícias", url: "/grupos-telegram-noticias", icon: Newspaper },
    { name: "Grupos de Esportes", url: "/grupos-telegram-esportes", icon: Trophy },
    { name: "Grupos de Figurinhas", url: "/grupos-telegram-figurinhas", icon: Image },
    { name: "Grupos de Receitas", url: "/grupos-telegram-receitas", icon: ChefHat },
    { name: "Grupos de Viagens", url: "/grupos-telegram-viagens", icon: Plane },
    { name: "Grupos de Tecnologia", url: "/grupos-telegram-tecnologia", icon: Cpu },
    { name: "Grupos de Games", url: "/grupos-telegram-games", icon: Gamepad2 },
    { name: "Grupos de Cinema", url: "/grupos-telegram-cinema", icon: Film },
    { name: "Grupos de Pets", url: "/grupos-telegram-pets", icon: PawPrint },
    { name: "Grupos de Estilo", url: "/grupos-telegram-estilo", icon: Shirt },
    { name: "Grupos de Zoeira", url: "/grupos-telegram-zoeira", icon: Laugh },
    { name: "Grupos LGBTQIA+", url: "/grupos-telegram-lgbtqia", icon: Rainbow }
  ];
  const blogCategories = [
    { name: "Ferramentas", url: "/blog/ferramentas", icon: Wrench },
    { name: "Negócios", url: "/blog/negocios", icon: Building },
    { name: "Comunidade", url: "/blog/comunidade", icon: Users },
    { name: "Grupos", url: "/blog/grupos", icon: Users2 },
    { name: "Privacidade", url: "/blog/privacidade", icon: Lock }
  ];
  const SitemapSection = ({
    title,
    items,
    icon: SectionIcon
  }) => /* @__PURE__ */ jsxs(Card, { className: "border-border/50 bg-card/50 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
      /* @__PURE__ */ jsx(SectionIcon, { className: "w-5 h-5 text-telegram-blue" }),
      title
    ] }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: items.map((item, index) => {
      const ItemIcon = item.icon;
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: item.url,
          className: "flex items-center gap-2 text-muted-foreground hover:text-telegram-blue transition-colors group py-1",
          children: [
            /* @__PURE__ */ jsx(ItemIcon, { className: "w-4 h-4 text-muted-foreground/70 group-hover:text-telegram-blue transition-colors" }),
            /* @__PURE__ */ jsx("span", { className: "flex-1", children: item.name }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" })
          ]
        }
      ) }, index);
    }) }) })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-background to-secondary/20", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.sitemap.title,
        description: mainPagesSEO.sitemap.description,
        canonical: mainPagesSEO.sitemap.canonical
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-telegram mb-6", children: /* @__PURE__ */ jsx(Map, { className: "w-8 h-8 text-white" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Mapa do Site" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Navegue por todas as páginas e seções do Grupos do Telegram. Encontre rapidamente o que você procura." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx(
          SitemapSection,
          {
            title: "Páginas Principais",
            items: mainPages,
            icon: Home
          }
        ),
        /* @__PURE__ */ jsx(
          SitemapSection,
          {
            title: "Suporte",
            items: supportPages,
            icon: HelpCircle
          }
        ),
        /* @__PURE__ */ jsx(
          SitemapSection,
          {
            title: "Páginas Legais",
            items: legalPages,
            icon: FileText
          }
        ),
        /* @__PURE__ */ jsx(
          SitemapSection,
          {
            title: "Categorias do Blog",
            items: blogCategories,
            icon: BookOpen
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(Card, { className: "border-border/50 bg-card/50 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
          /* @__PURE__ */ jsx(Folder, { className: "w-5 h-5 text-telegram-blue" }),
          "Categorias de Grupos (",
          groupCategories.length,
          " categorias)"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2", children: groupCategories.map((item, index) => {
          const ItemIcon = item.icon;
          return /* @__PURE__ */ jsxs(
            "a",
            {
              href: item.url,
              className: "flex items-center gap-2 text-muted-foreground hover:text-telegram-blue transition-colors group py-2 px-3 rounded-lg hover:bg-telegram-blue/5",
              children: [
                /* @__PURE__ */ jsx(ItemIcon, { className: "w-4 h-4 text-muted-foreground/70 group-hover:text-telegram-blue transition-colors flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm truncate", children: item.name })
              ]
            },
            index
          );
        }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-6 px-8 py-4 bg-card/80 border border-border/50 rounded-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-telegram-blue", children: mainPages.length + supportPages.length + legalPages.length }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Páginas" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-border" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-telegram-blue", children: groupCategories.length }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Categorias de Grupos" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-border" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-telegram-blue", children: blogCategories.length }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Categorias do Blog" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Sitemap as default
};
