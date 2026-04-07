import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as StatsCard } from "./StatsCard-BEePMdBa.js";
import { G as GroupCard, C as CategorySidebar } from "./CategorySidebar-ypdZLlkh.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { C as CategorySchema, B as BreadcrumbSchema } from "./JsonLd-DQdzIALA.js";
import { c as categorySEO } from "./seo-DxaWTmB0.js";
import { Newspaper, TrendingUp, Users, Star, Clock } from "lucide-react";
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
import "./card-BUhh-XFb.js";
import "./badge-DObGNgcP.js";
import "./sanitize-MDfNxrKs.js";
import "@radix-ui/react-avatar";
import "dompurify";
const GruposNoticias = () => {
  const stats = [
    { icon: Users, value: "+12.500", label: "Grupos Ativos", color: "blue" },
    { icon: TrendingUp, value: "8.742", label: "Acessos Hoje", color: "green" },
    { icon: Star, value: "156", label: "Grupos Premium", color: "orange" },
    { icon: Clock, value: "23", label: "Novos Hoje", color: "gray" }
  ];
  const featuredGroups = [];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: categorySEO.noticias.title,
        description: categorySEO.noticias.description,
        canonical: categorySEO.noticias.canonical
      }
    ),
    /* @__PURE__ */ jsx(CategorySchema, { name: "Grupos do Telegram de Notícias", description: categorySEO.noticias.description, url: `https://gruposdotelegram.org${categorySEO.noticias.canonical}/` }),
    /* @__PURE__ */ jsx(BreadcrumbSchema, { items: [{ name: "Início", url: "https://gruposdotelegram.org/" }, { name: "Notícias", url: `https://gruposdotelegram.org${categorySEO.noticias.canonical}/` }] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: stats.map((stat, index) => /* @__PURE__ */ jsx(
        StatsCard,
        {
          icon: stat.icon,
          value: stat.value,
          label: stat.label,
          color: stat.color
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl mr-4", children: /* @__PURE__ */ jsx(Newspaper, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Grupos do Telegram de Notícias" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1", children: "Mantenha-se informado com as últimas notícias" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-foreground mb-6 flex items-center", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-telegram-blue mr-2" }),
              "Grupos em Destaque"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6", children: featuredGroups.map((group, index) => /* @__PURE__ */ jsx(
              GroupCard,
              {
                title: group.title,
                description: group.description,
                members: group.members,
                avatar: group.avatar,
                category: group.category,
                isNew: group.isNew
              },
              index
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-80 w-full", children: /* @__PURE__ */ jsx(CategorySidebar, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  GruposNoticias as default
};
