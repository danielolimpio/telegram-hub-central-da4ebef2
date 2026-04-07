import { jsxs, jsx } from "react/jsx-runtime";
import { HelpCircle, Search, Users, MessageCircle, Shield, BookOpen, Mail } from "lucide-react";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-BUhh-XFb.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { I as Input } from "./client-Du4NYLEw.js";
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
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
const CentralAjuda = () => {
  const helpCategories = [
    {
      icon: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-blue-500" }),
      title: "Participação em Grupos",
      description: "Como encontrar e entrar em grupos do Telegram",
      articles: [
        "Como encontrar grupos do meu interesse",
        "Como entrar em um grupo do Telegram",
        "O que fazer se o link do grupo não funcionar",
        "Como sair de um grupo",
        "Regras básicas de participação"
      ]
    },
    {
      icon: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-green-500" }),
      title: "Envio de Grupos",
      description: "Como cadastrar seu grupo na plataforma",
      articles: [
        "Como enviar meu grupo para análise",
        "Requisitos para aprovação",
        "Tempo de análise e aprovação",
        "Como editar informações do grupo",
        "Como remover meu grupo da plataforma"
      ]
    },
    {
      icon: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-red-500" }),
      title: "Segurança e Moderação",
      description: "Proteção e segurança na plataforma",
      articles: [
        "Como denunciar conteúdo inadequado",
        "Políticas de moderação",
        "Como me proteger de golpes",
        "Configurações de privacidade recomendadas",
        "O que fazer em caso de spam"
      ]
    },
    {
      icon: /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6 text-purple-500" }),
      title: "Recursos da Plataforma",
      description: "Como usar todos os recursos disponíveis",
      articles: [
        "Como usar a busca avançada",
        "Sistema de categorias",
        "Como favoritar grupos",
        "Filtros de pesquisa",
        "Notificações e alertas"
      ]
    }
  ];
  const contactOptions = [
    {
      icon: /* @__PURE__ */ jsx(MessageCircle, { className: "w-8 h-8 text-green-500" }),
      title: "Telegram",
      description: "Suporte rápido pelo Telegram",
      action: "Enviar Mensagem",
      href: "https://t.me/gruposdotelegram"
    },
    {
      icon: /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-blue-500" }),
      title: "E-mail",
      description: "suporte@gruposdotelegram.com",
      action: "Enviar E-mail",
      href: "mailto:suporte@gruposdotelegram.com"
    },
    {
      icon: /* @__PURE__ */ jsx(HelpCircle, { className: "w-8 h-8 text-orange-500" }),
      title: "FAQ",
      description: "Perguntas mais frequentes",
      action: "Ver FAQ",
      href: "/faq"
    }
  ];
  const quickAnswers = [
    {
      question: "Como encontrar grupos específicos?",
      answer: "Use a barra de pesquisa ou navegue pelas categorias na sidebar. Você pode filtrar por popularidade, novos grupos ou buscar por palavras-chave."
    },
    {
      question: "Meu grupo foi rejeitado, o que fazer?",
      answer: "Verifique se seu grupo atende às regras da comunidade. Você pode reenviar após fazer os ajustes necessários ou entrar em contato conosco."
    },
    {
      question: "Como impulsionar meu grupo?",
      answer: "Acesse a página 'Impulsionar Grupos' para ver os planos disponíveis e dar destaque ao seu grupo na plataforma."
    },
    {
      question: "A plataforma é gratuita?",
      answer: "Sim, encontrar e enviar grupos é totalmente gratuito. Cobramos apenas pelos serviços premium de destaque."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.ajuda.title,
        description: mainPagesSEO.ajuda.description,
        canonical: mainPagesSEO.ajuda.canonical
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-16 h-16 text-telegram-blue" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Central de Ajuda" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Encontre respostas para suas dúvidas sobre o Grupos do Telegram" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto mb-12", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Pesquisar na central de ajuda...",
            className: "pl-10 py-3 text-lg"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6 text-center", children: "Respostas Rápidas" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: quickAnswers.map((qa, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: qa.question }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: qa.answer })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6 text-center", children: "Categorias de Ajuda" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: helpCategories.map((category, index) => /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-3", children: [
              category.icon,
              /* @__PURE__ */ jsx("span", { children: category.title })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: category.description })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: category.articles.map((article, articleIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { className: "text-left text-sm text-telegram-blue hover:underline", children: article }) }, articleIndex)) }) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6 text-center", children: "Precisa de Mais Ajuda?" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: contactOptions.map((option, index) => /* @__PURE__ */ jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: option.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: option.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: option.description }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsx("a", { href: option.href, target: option.href.startsWith("http") ? "_blank" : "_self", children: option.action }) })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "Status da Plataforma" }),
          /* @__PURE__ */ jsx(Badge, { className: "bg-green-500", children: "Operacional" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Website" }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-green-100 text-green-800", children: "Online" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Moderação de Grupos" }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-green-100 text-green-800", children: "Funcionando" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Sistema de Busca" }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-green-100 text-green-800", children: "Operacional" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Esta página foi útil?" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "👍 Sim, foi útil" }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "👎 Não, preciso de mais ajuda" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  CentralAjuda as default
};
