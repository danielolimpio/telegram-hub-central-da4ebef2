import { jsxs, jsx } from "react/jsx-runtime";
import { TrendingUp, Sparkles, BookOpen, Shield, MessageCircle, Users, Briefcase, Wrench } from "lucide-react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { I as Input } from "./client-Du4NYLEw.js";
import { Link, useParams } from "react-router-dom";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { B as BreadcrumbSchema } from "./JsonLd-DQdzIALA.js";
import { b as blogCategoriesSEO, m as mainPagesSEO } from "./seo-DxaWTmB0.js";
import "react";
import "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
const BlogSidebar = () => {
  const blogCategories = [
    { name: "Ferramentas", count: 0, path: "/blog/ferramentas" },
    { name: "Negócios", count: 0, path: "/blog/negocios" },
    { name: "Comunidade", count: 0, path: "/blog/comunidade" },
    { name: "Grupos", count: 0, path: "/blog/grupos" },
    { name: "Privacidade", count: 0, path: "/blog/privacidade" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center text-lg", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 mr-2 text-telegram-blue" }),
        "Categorias do Blog"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: blogCategories.map((category) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: category.path,
          className: "flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium group-hover:text-telegram-blue transition-colors", children: category.name }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full", children: category.count })
          ]
        },
        category.name
      )) }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center text-lg", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 mr-2 text-telegram-blue" }),
        "Artigos Recentes"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Nenhum artigo publicado ainda." }) })
    ] })
  ] });
};
const Blog = () => {
  const { categoria } = useParams();
  const categories = [
    { name: "Todos", slug: "", count: 0 },
    { name: "Ferramentas", slug: "ferramentas", count: 0 },
    { name: "Negócios", slug: "negocios", count: 0 },
    { name: "Comunidade", slug: "comunidade", count: 0 },
    { name: "Grupos", slug: "grupos", count: 0 },
    { name: "Privacidade", slug: "privacidade", count: 0 }
  ];
  const activeCategory = categoria || "";
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Ferramentas":
        return /* @__PURE__ */ jsx(Wrench, { className: "w-4 h-4" });
      case "Negócios":
        return /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4" });
      case "Comunidade":
        return /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" });
      case "Grupos":
        return /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" });
      case "Privacidade":
        return /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" });
      default:
        return /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4" });
    }
  };
  const getSEO = () => {
    if (activeCategory && blogCategoriesSEO[activeCategory]) {
      return blogCategoriesSEO[activeCategory];
    }
    return mainPagesSEO.blog;
  };
  const seo = getSEO();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: seo.title,
        description: seo.description,
        canonical: seo.canonical
      }
    ),
    /* @__PURE__ */ jsx(BreadcrumbSchema, { items: [
      { name: "Início", url: "https://gruposdotelegram.org/" },
      { name: "Blog", url: "https://gruposdotelegram.org/blog/" }
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-16 h-16 text-telegram-blue" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Blog Grupos do Telegram" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Dicas, tutoriais e estratégias para criar, gerenciar e fazer crescer seus grupos do Telegram" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-center mb-12", children: categories.map((category, index) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: activeCategory === category.slug ? "default" : "outline",
              size: "sm",
              className: activeCategory === category.slug ? "bg-telegram-blue hover:bg-telegram-blue/90" : "",
              asChild: true,
              children: /* @__PURE__ */ jsxs(Link, { to: category.slug ? `/blog/${category.slug}` : "/blog", children: [
                getCategoryIcon(category.name),
                /* @__PURE__ */ jsx("span", { className: "ml-1", children: category.name }),
                /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "ml-2", children: category.count })
              ] })
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsx(Card, { className: "text-center py-16", children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "w-16 h-16 text-muted-foreground mx-auto mb-4" }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-2", children: "Nenhum artigo publicado" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Em breve teremos conteúdos incríveis sobre Telegram para você!" })
          ] }) }) }),
          /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-telegram-blue/10 to-purple-500/10", children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: "Assine Nossa Newsletter" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Receba os melhores conteúdos sobre grupos do Telegram diretamente no seu e-mail" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ jsx(Input, { placeholder: "Seu melhor e-mail" }),
                /* @__PURE__ */ jsx(Button, { className: "bg-telegram-blue hover:bg-telegram-blue/90", children: "Assinar" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center mt-2", children: "Enviamos apenas conteúdo relevante. Sem spam." })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-80", children: /* @__PURE__ */ jsx(BlogSidebar, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Blog as default
};
