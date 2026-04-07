import { jsxs, jsx } from "react/jsx-runtime";
import { Shield, AlertTriangle, CheckCircle, Eye, Lock, UserX, MessageSquare, Settings } from "lucide-react";
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
const DicasSeguranca = () => {
  const securityTips = [
    {
      icon: /* @__PURE__ */ jsx(Eye, { className: "w-6 h-6 text-blue-500" }),
      title: "Verifique o Grupo Antes de Entrar",
      description: "Leia a descrição, verifique o número de membros e observe se há moderadores ativos.",
      tips: [
        "Confira se o tema do grupo corresponde ao seu interesse",
        "Observe a qualidade das mensagens recentes",
        "Verifique se há administradores identificados",
        "Desconfie de grupos com poucos membros mas muitas mensagens"
      ]
    },
    {
      icon: /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6 text-green-500" }),
      title: "Proteja Suas Informações Pessoais",
      description: "Nunca compartilhe dados sensíveis em grupos públicos do Telegram.",
      tips: [
        "Não divulgue seu número de telefone completo",
        "Evite compartilhar endereço residencial",
        "Não envie fotos de documentos pessoais",
        "Cuidado com informações financeiras",
        "Use apelidos ao invés do nome completo"
      ]
    },
    {
      icon: /* @__PURE__ */ jsx(UserX, { className: "w-6 h-6 text-red-500" }),
      title: "Identifique Golpes Comuns",
      description: "Aprenda a reconhecer tentativas de fraude em grupos do Telegram.",
      tips: [
        "Desconfie de promoções 'imperdíveis' ou muito boas",
        "Cuidado com pedidos de pagamento antecipado",
        "Não clique em links suspeitos",
        "Esquemas de 'dinheiro fácil' são quase sempre golpes",
        "Verifique a veracidade de ofertas de emprego"
      ]
    },
    {
      icon: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 text-purple-500" }),
      title: "Práticas de Comunicação Segura",
      description: "Como se comunicar de forma segura em grupos do Telegram.",
      tips: [
        "Pense duas vezes antes de enviar mensagens",
        "Não responda a provocações ou discussões",
        "Use mensagens privadas para assuntos pessoais",
        "Denuncie comportamentos inadequados",
        "Mantenha conversas respeitosas"
      ]
    }
  ];
  const warningSignals = [
    {
      signal: "Pedidos de dinheiro urgentes",
      description: "Golpistas frequentemente criam senso de urgência"
    },
    {
      signal: "Ofertas de investimento garantido",
      description: "Nenhum investimento é 100% garantido"
    },
    {
      signal: "Solicitação de dados bancários",
      description: "Bancos nunca pedem dados por mensagem"
    },
    {
      signal: "Links suspeitos ou encurtados",
      description: "Podem levar a sites maliciosos"
    },
    {
      signal: "Pessoas se passando por autoridades",
      description: "Órgãos oficiais não fazem contato por Telegram"
    }
  ];
  const privacySettings = [
    {
      setting: "Número de Telefone",
      recommendation: "Visível apenas para contatos",
      icon: /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4" })
    },
    {
      setting: "Foto do Perfil",
      recommendation: "Visível para todos ou apenas contatos",
      icon: /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" })
    },
    {
      setting: "Último Acesso",
      recommendation: "Visível apenas para contatos",
      icon: /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" })
    },
    {
      setting: "Grupos e Canais",
      recommendation: "Apenas contatos podem adicionar você",
      icon: /* @__PURE__ */ jsx(Settings, { className: "w-4 h-4" })
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.seguranca.title,
        description: mainPagesSEO.seguranca.description,
        canonical: mainPagesSEO.seguranca.canonical
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "w-16 h-16 text-telegram-blue" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Dicas de Segurança" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Mantenha-se seguro ao participar de grupos do Telegram com nossas dicas essenciais de segurança" })
      ] }),
      /* @__PURE__ */ jsxs(Alert, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxs(AlertDescription, { children: [
          /* @__PURE__ */ jsx("strong", { children: "Lembre-se:" }),
          " Sua segurança é responsabilidade compartilhada. Sempre use o bom senso e desconfie de ofertas muito boas para ser verdade."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12", children: securityTips.map((tip, index) => /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-3", children: [
          tip.icon,
          /* @__PURE__ */ jsx("span", { children: tip.title })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: tip.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: tip.tips.map((tipItem, tipIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: tipItem })
          ] }, tipIndex)) })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-foreground mb-8", children: "Sinais de Alerta para Golpes" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: warningSignals.map((warning, index) => /* @__PURE__ */ jsx(Card, { className: "border-red-200 dark:border-red-800", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-red-500 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1", children: warning.signal }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: warning.description })
          ] })
        ] }) }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-foreground mb-8", children: "Configurações de Privacidade Recomendadas" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: privacySettings.map((setting, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              setting.icon,
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: setting.setting })
            ] }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Recomendado" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: setting.recommendation })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6 text-orange-500" }),
          /* @__PURE__ */ jsx("span", { children: "Como Denunciar Problemas" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Se você encontrar atividades suspeitas ou comportamentos inadequados:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg text-center", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "No Telegram" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: 'Use a função "Reportar" dentro do próprio aplicativo' })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg text-center", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Em Nossa Plataforma" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("a", { href: "/reportar", className: "text-telegram-blue hover:underline", children: "Acesse nossa página de denúncia" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg text-center", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Autoridades" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Em casos graves, procure órgãos competentes" })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DicasSeguranca as default
};
