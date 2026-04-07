import { jsxs, jsx } from "react/jsx-runtime";
import { Shield, AlertTriangle, CheckCircle, XCircle, Users, MessageCircle } from "lucide-react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import { A as Alert, a as AlertDescription } from "./alert-BoVYTXUg.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { m as mainPagesSEO } from "./seo-DxaWTmB0.js";
import "react";
import "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "./button-CeG9Zf-X.js";
import "@radix-ui/react-slot";
import "./client-Du4NYLEw.js";
import "@supabase/supabase-js";
const RegrasComunidade = () => {
  const allowedContent = [
    "Grupos educacionais e de aprendizado",
    "Comunidades de hobbies e interesses",
    "Grupos profissionais e networking",
    "Comunidades de suporte e ajuda mútua",
    "Grupos de discussão respeitosa",
    "Canais informativos e notícias",
    "Grupos de vendas legítimas (sem spam)",
    "Comunidades de entretenimento saudável"
  ];
  const prohibitedContent = [
    "Conteúdo adulto ou pornográfico",
    "Promoção de atividades ilegais",
    "Discurso de ódio ou discriminação",
    "Spam ou conteúdo promocional excessivo",
    "Grupos de pirataria ou conteúdo protegido",
    "Esquemas de pirâmide ou golpes",
    "Conteúdo violento ou perturbador",
    "Grupos que promovem automutilação"
  ];
  const communityGuidelines = [
    {
      title: "Respeito Mútuo",
      description: "Trate todos os membros com cortesia e respeito, independente de suas opiniões ou características pessoais."
    },
    {
      title: "Conteúdo Relevante",
      description: "Mantenha as discussões focadas no tema do grupo e evite spam ou mensagens repetitivas."
    },
    {
      title: "Privacidade",
      description: "Não compartilhe informações pessoais de outros membros sem permissão explícita."
    },
    {
      title: "Moderação",
      description: "Respeite as decisões dos moderadores e administradores do grupo."
    }
  ];
  const consequences = [
    {
      level: "Advertência",
      description: "Primeira violação menor das regras",
      action: "Notificação e orientação sobre as regras"
    },
    {
      level: "Suspensão Temporária",
      description: "Violações repetidas ou moderadas",
      action: "Remoção temporária da plataforma por 7-30 dias"
    },
    {
      level: "Banimento Permanente",
      description: "Violações graves ou repetidas após suspensão",
      action: "Remoção permanente da plataforma"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.regras.title,
        description: mainPagesSEO.regras.description,
        canonical: mainPagesSEO.regras.canonical
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "w-16 h-16 text-telegram-blue" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Regras da Comunidade" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Diretrizes para manter nossa comunidade segura e respeitosa para todos" })
      ] }),
      /* @__PURE__ */ jsxs(Alert, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxs(AlertDescription, { children: [
          /* @__PURE__ */ jsx("strong", { children: "Importante:" }),
          " Todos os grupos passam por moderação antes de serem aprovados. O não cumprimento destas regras pode resultar na rejeição do grupo ou banimento da plataforma."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-500" }),
          /* @__PURE__ */ jsx("span", { children: "Conteúdo Permitido" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: allowedContent.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-red-500" }),
          /* @__PURE__ */ jsx("span", { children: "Conteúdo Proibido" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: prohibitedContent.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-500 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-foreground mb-6 flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsx("span", { children: "Diretrizes da Comunidade" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: communityGuidelines.map((guideline, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: guideline.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: guideline.description })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-foreground mb-6 flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsx("span", { children: "Consequências por Violações" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: consequences.map((consequence, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: consequence.level }),
            /* @__PURE__ */ jsxs(Badge, { variant: index === 0 ? "secondary" : index === 1 ? "default" : "destructive", children: [
              "Nível ",
              index + 1
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: consequence.description }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: consequence.action })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6 text-orange-500" }),
          /* @__PURE__ */ jsx("span", { children: "Como Denunciar Violações" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Se você encontrar conteúdo que viola nossas regras, pode denunciá-lo através dos seguintes canais:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "E-mail" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "denuncia@gruposdotelegram.com" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Formulário" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("a", { href: "/reportar", className: "text-telegram-blue hover:underline", children: "Página de denúncia" }) })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  RegrasComunidade as default
};
