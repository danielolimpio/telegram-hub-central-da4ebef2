import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { G as GroupCard, C as CategorySidebar } from "./CategorySidebar-ypdZLlkh.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { B as BreadcrumbSchema } from "./JsonLd-DQdzIALA.js";
import { m as mainPagesSEO } from "./seo-DxaWTmB0.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { I as Input, s as supabase } from "./client-Du4NYLEw.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-vI2S422S.js";
import { Search, Filter, Grid, List } from "lucide-react";
import { useState, useEffect } from "react";
import "react-router-dom";
import "./card-BUhh-XFb.js";
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
import "./badge-DObGNgcP.js";
import "./sanitize-MDfNxrKs.js";
import "@radix-ui/react-avatar";
import "dompurify";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "@radix-ui/react-select";
const AllGroups = () => {
  const [allGroups, setAllGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase.from("groups").select("*").eq("status", "approved").order("created_at", { ascending: false });
        if (error) throw error;
        setAllGroups(data || []);
      } catch (error) {
        console.error("Error fetching groups:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.allGroups.title,
        description: mainPagesSEO.allGroups.description,
        canonical: mainPagesSEO.allGroups.canonical
      }
    ),
    /* @__PURE__ */ jsx(BreadcrumbSchema, { items: [
      { name: "Início", url: "https://gruposdotelegram.org/" },
      { name: "Todos os Grupos", url: "https://gruposdotelegram.org/all-groups/" }
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground mb-2", children: "Todos os Grupos" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Explore nossa coleção completa de grupos do Telegram" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-card rounded-lg p-6 mb-6 border border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Buscar grupos...",
                  className: "pl-10"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs(Select, { children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "w-48", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Categoria" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "Todas as categorias" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "vendas", children: "Vendas" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "renda", children: "Renda Extra" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "marketing", children: "Marketing" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "investimento", children: "Investimento" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Select, { children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "w-40", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Ordenar por" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "members", children: "Mais membros" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "recent", children: "Mais recentes" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "name", children: "Nome A-Z" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4" }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
              "Mostrando ",
              allGroups.length,
              " grupos"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(Grid, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(List, { className: "w-4 h-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6", children: loading ? /* @__PURE__ */ jsx("div", { className: "col-span-full text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Carregando grupos..." }) }) : allGroups.length === 0 ? /* @__PURE__ */ jsx("div", { className: "col-span-full text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Nenhum grupo cadastrado ainda. Seja o primeiro a enviar seu grupo!" }) }) : allGroups.map((group) => /* @__PURE__ */ jsx(
            GroupCard,
            {
              title: group.title,
              description: group.description,
              members: group.members || 0,
              avatar: group.thumbnail_url,
              category: group.category,
              telegramLink: group.telegram_link,
              slug: group.slug
            },
            group.id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Button, { variant: "outline", disabled: true, children: "Anterior" }),
            /* @__PURE__ */ jsx(Button, { variant: "telegram", children: "1" }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", children: "2" }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", children: "3" }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Próximo" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-80", children: /* @__PURE__ */ jsx(CategorySidebar, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  AllGroups as default
};
