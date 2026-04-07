import { jsxs, jsx } from "react/jsx-runtime";
import { Shield, FileText, Database, Lock, Users, Eye, Globe, Cookie } from "lucide-react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import { S as Separator } from "./separator-KsVz8JGx.js";
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
import "@radix-ui/react-separator";
import "./button-CeG9Zf-X.js";
import "@radix-ui/react-slot";
import "./client-Du4NYLEw.js";
import "@supabase/supabase-js";
const PoliticaPrivacidade = () => {
  const dataCollected = [
    {
      type: "Informações de Conta",
      description: "Nome, e-mail e dados básicos do perfil quando você se cadastra",
      icon: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-telegram-blue" })
    },
    {
      type: "Dados de Navegação",
      description: "Como você usa nossa plataforma, páginas visitadas e tempo de permanência",
      icon: /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-telegram-blue" })
    },
    {
      type: "Informações de Dispositivo",
      description: "Tipo de dispositivo, navegador e endereço IP para segurança",
      icon: /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5 text-telegram-blue" })
    },
    {
      type: "Cookies",
      description: "Pequenos arquivos para melhorar sua experiência e funcionalidade do site",
      icon: /* @__PURE__ */ jsx(Cookie, { className: "w-5 h-5 text-telegram-blue" })
    }
  ];
  const dataUsage = [
    "Fornecer e melhorar nossos serviços",
    "Personalizar sua experiência na plataforma",
    "Comunicar sobre atualizações e novos recursos",
    "Garantir a segurança e prevenir fraudes",
    "Cumprir obrigações legais e regulamentares",
    "Analisar o uso da plataforma para melhorias"
  ];
  const userRights = [
    {
      right: "Acesso aos Dados",
      description: "Solicite uma cópia de todos os dados que temos sobre você"
    },
    {
      right: "Correção de Dados",
      description: "Corrija informações incorretas ou desatualizadas"
    },
    {
      right: "Exclusão de Dados",
      description: "Solicite a remoção completa de seus dados pessoais"
    },
    {
      right: "Portabilidade",
      description: "Transfira seus dados para outras plataformas quando aplicável"
    },
    {
      right: "Restrição de Processamento",
      description: "Limite como processamos seus dados em certas circunstâncias"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.privacidade.title,
        description: mainPagesSEO.privacidade.description,
        canonical: mainPagesSEO.privacidade.canonical
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "w-16 h-16 text-telegram-blue" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Política de Privacidade" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Como coletamos, usamos e protegemos suas informações pessoais" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Última atualização: 25 de setembro de 2025" })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "Compromisso com sua Privacidade" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "No Grupos do Telegram, levamos sua privacidade muito a sério. Esta política explica de forma clara e transparente como coletamos, usamos, armazenamos e protegemos suas informações pessoais. Estamos comprometidos em manter a confidencialidade de seus dados e cumprir todas as leis aplicáveis de proteção de dados, incluindo a LGPD (Lei Geral de Proteção de Dados)." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-foreground mb-6 flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Database, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsx("span", { children: "Informações que Coletamos" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: dataCollected.map((item, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
          item.icon,
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: item.type }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
          ] })
        ] }) }) }, index)) })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-8" }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "Como Usamos suas Informações" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: dataUsage.map((usage, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-telegram-blue rounded-full flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: usage })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Seus Direitos" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: userRights.map((right, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: right.right }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: right.description })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-8" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Segurança dos Dados" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição." }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Compartilhamento de Dados" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para operar nossos serviços ou por exigência legal." }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "Entre em Contato" })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Se você tiver dúvidas sobre esta política ou quiser exercer seus direitos de proteção de dados:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "E-mail" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "privacidade@gruposdotelegram.com" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Central de Ajuda" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("a", { href: "/ajuda", className: "text-telegram-blue hover:underline", children: "Formulário de contato" }) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PoliticaPrivacidade as default
};
