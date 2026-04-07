import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as StatsCard } from "./StatsCard-BEePMdBa.js";
import { G as GroupCard, C as CategorySidebar } from "./CategorySidebar-ypdZLlkh.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { C as CategorySchema, B as BreadcrumbSchema } from "./JsonLd-DQdzIALA.js";
import { c as categorySEO } from "./seo-DxaWTmB0.js";
import { Cpu, TrendingUp, Users, Star, Clock } from "lucide-react";
import { s as supabase } from "./client-Du4NYLEw.js";
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
import "./card-BUhh-XFb.js";
import "./badge-DObGNgcP.js";
import "./sanitize-MDfNxrKs.js";
import "@radix-ui/react-avatar";
import "dompurify";
import "@supabase/supabase-js";
const GruposTecnologia = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const stats = [
    { icon: Users, value: "+12.500", label: "Grupos Ativos", color: "blue" },
    { icon: TrendingUp, value: "8.742", label: "Acessos Hoje", color: "green" },
    { icon: Star, value: "156", label: "Grupos Premium", color: "orange" },
    { icon: Clock, value: "23", label: "Novos Hoje", color: "gray" }
  ];
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase.from("groups").select("*").eq("status", "approved").eq("category", "Grupos do Telegram de Tecnologia").order("created_at", { ascending: false });
        if (error) throw error;
        setGroups(data || []);
      } catch (error) {
        console.error("Erro ao buscar grupos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, []);
  const seo = categorySEO.tecnologia;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(SEOHead, { title: seo.title, description: seo.description, canonical: seo.canonical }),
    /* @__PURE__ */ jsx(CategorySchema, { name: "Grupos do Telegram de Tecnologia", description: seo.description, url: `https://gruposdotelegram.org${seo.canonical}/` }),
    /* @__PURE__ */ jsx(BreadcrumbSchema, { items: [{ name: "Início", url: "https://gruposdotelegram.org/" }, { name: "Tecnologia", url: `https://gruposdotelegram.org${seo.canonical}/` }] }),
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
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl mr-4", children: /* @__PURE__ */ jsx(Cpu, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Grupos do Telegram de Tecnologia" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-1", children: "Fique por dentro das últimas novidades em tecnologia" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-foreground mb-6 flex items-center", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-telegram-blue mr-2" }),
              "Grupos de Tecnologia"
            ] }),
            loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Carregando grupos..." }) }) : groups.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Nenhum grupo encontrado nesta categoria." }) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6", children: groups.map((group) => /* @__PURE__ */ jsx(
              GroupCard,
              {
                title: group.title,
                description: group.description,
                members: group.members || 0,
                avatar: group.thumbnail_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(group.title)}&background=0088cc&color=fff&size=128`,
                category: group.category
              },
              group.id
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
  GruposTecnologia as default
};
