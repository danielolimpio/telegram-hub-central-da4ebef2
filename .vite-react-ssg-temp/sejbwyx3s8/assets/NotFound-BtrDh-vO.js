import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { B as Button } from "./button-CeG9Zf-X.js";
import { Send, Home, Search } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-subtle flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-md", children: [
    /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-gradient-telegram rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Send, { className: "w-12 h-12 text-white" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold text-telegram-blue mb-2", children: "404" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-foreground mb-2", children: "Página não encontrada" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Ops! A página que você procura não existe ou foi movida." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "telegram",
          size: "lg",
          className: "w-full",
          onClick: () => window.location.href = "/",
          children: [
            /* @__PURE__ */ jsx(Home, { className: "w-5 h-5 mr-2" }),
            "Voltar ao Início"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          size: "lg",
          className: "w-full",
          onClick: () => window.location.href = "/all-groups",
          children: [
            /* @__PURE__ */ jsx(Search, { className: "w-5 h-5 mr-2" }),
            "Buscar Grupos"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx("p", { children: "Você também pode:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-4 mt-2", children: [
        /* @__PURE__ */ jsx("a", { href: "/all-groups", className: "hover:text-telegram-blue transition-colors", children: "Ver todos os grupos" }),
        /* @__PURE__ */ jsx("span", { children: "•" }),
        /* @__PURE__ */ jsx("a", { href: "/submit-group", className: "hover:text-telegram-blue transition-colors", children: "Enviar um grupo" })
      ] })
    ] })
  ] }) });
};
export {
  NotFound as default
};
