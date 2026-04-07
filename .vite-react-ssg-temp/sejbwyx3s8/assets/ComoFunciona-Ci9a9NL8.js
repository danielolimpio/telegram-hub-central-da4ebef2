import { jsxs, jsx } from "react/jsx-runtime";
import { CheckCircle, Users, MessageCircle, Shield, Search, Heart } from "lucide-react";
import { C as Card, c as CardContent } from "./card-BUhh-XFb.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { S as Separator } from "./separator-KsVz8JGx.js";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { B as BreadcrumbSchema } from "./JsonLd-DQdzIALA.js";
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
import "@radix-ui/react-separator";
import "./client-Du4NYLEw.js";
import "@supabase/supabase-js";
const ComoFunciona = () => {
  const steps = [
    {
      icon: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-telegram-blue" }),
      title: "1. Cadastre-se",
      description: "Crie sua conta gratuita para começar a enviar grupos ou acesse grupos públicos sem cadastro."
    },
    {
      icon: /* @__PURE__ */ jsx(MessageCircle, { className: "w-8 h-8 text-telegram-blue" }),
      title: "2. Envie seu Grupo",
      description: "Adicione o link do seu grupo do Telegram com nome, categoria e descrição detalhada."
    },
    {
      icon: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-telegram-blue" }),
      title: "3. Moderação",
      description: "Nossa equipe analisa todos os grupos para garantir qualidade e segurança da comunidade."
    },
    {
      icon: /* @__PURE__ */ jsx(CheckCircle, { className: "w-8 h-8 text-telegram-blue" }),
      title: "4. Aprovação",
      description: "Grupos aprovados ficam visíveis para todos os usuários da plataforma."
    },
    {
      icon: /* @__PURE__ */ jsx(Search, { className: "w-8 h-8 text-telegram-blue" }),
      title: "5. Descubra Grupos",
      description: "Explore milhares de grupos organizados por mais de 25 categorias diferentes."
    },
    {
      icon: /* @__PURE__ */ jsx(Heart, { className: "w-8 h-8 text-telegram-blue" }),
      title: "6. Conecte-se",
      description: "Entre nos grupos que interessam você e conecte-se com pessoas que compartilham seus interesses."
    }
  ];
  const advantages = [
    "Acesso gratuito a milhares de grupos",
    "Grupos organizados por mais de 25 categorias",
    "Moderação ativa para garantir qualidade",
    "Interface simples e intuitiva",
    "Atualização constante de novos grupos",
    "Comunidade segura e confiável"
  ];
  const faqs = [
    {
      question: "É gratuito?",
      answer: "Sim! Nossa plataforma é 100% gratuita para encontrar e enviar grupos do Telegram."
    },
    {
      question: "Como os grupos são moderados?",
      answer: "Cada grupo passa por análise manual para verificar se atende nossas diretrizes de comunidade e não contém conteúdo inadequado."
    },
    {
      question: "Posso enviar quantos grupos quiser?",
      answer: "Sim, não há limite para envio de grupos, desde que sigam nossas regras e diretrizes da comunidade."
    },
    {
      question: "Quanto tempo leva para aprovar um grupo?",
      answer: "Normalmente entre 24 a 48 horas, dependendo do volume de submissões e complexidade da análise."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.comoFunciona.title,
        description: mainPagesSEO.comoFunciona.description,
        canonical: mainPagesSEO.comoFunciona.canonical
      }
    ),
    /* @__PURE__ */ jsx(BreadcrumbSchema, { items: [
      { name: "Início", url: "https://gruposdotelegram.org/" },
      { name: "Como Funciona", url: "https://gruposdotelegram.org/como-funciona/" }
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Como Funciona" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Descubra como nossa plataforma conecta pessoas através de grupos do Telegram organizados e seguros" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: steps.map((step, index) => /* @__PURE__ */ jsx(Card, { className: "text-center p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: step.icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: step.description })
      ] }) }, index)) }),
      /* @__PURE__ */ jsx(Separator, { className: "my-16" }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-foreground mb-8", children: "Vantagens da Nossa Plataforma" }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground mb-8", children: "Por que escolher nossa plataforma para encontrar grupos do Telegram" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: advantages.map((advantage, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-4 bg-card rounded-lg border", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-telegram-blue flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: advantage })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-16" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-foreground mb-8", children: "Perguntas Frequentes" }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground mb-8", children: "Tire suas principais dúvidas sobre o funcionamento" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: faq.answer })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-16", children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-telegram-blue hover:bg-telegram-blue/90", children: /* @__PURE__ */ jsx("a", { href: "/submit", children: "Enviar Meu Grupo" }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ComoFunciona as default
};
