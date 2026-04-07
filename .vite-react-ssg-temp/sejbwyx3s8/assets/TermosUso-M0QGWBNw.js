import { jsxs, jsx } from "react/jsx-runtime";
import { Scale, AlertTriangle, FileText, Users, CheckCircle, Shield, XCircle } from "lucide-react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import { A as Alert, a as AlertDescription } from "./alert-BoVYTXUg.js";
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
const TermosUso = () => {
  const userResponsibilities = [
    "Fornecer informações verdadeiras e atualizadas",
    "Manter a segurança de sua conta e senha",
    "Usar a plataforma apenas para fins legítimos",
    "Respeitar os direitos de outros usuários",
    "Não violar direitos de propriedade intelectual",
    "Seguir as regras da comunidade estabelecidas"
  ];
  const prohibitedActivities = [
    "Enviar conteúdo ilegal, ofensivo ou inadequado",
    "Fazer spam ou envios em massa não solicitados",
    "Tentar acessar contas de outros usuários",
    "Usar bots ou automação não autorizados",
    "Interferir no funcionamento da plataforma",
    "Criar múltiplas contas para contornar restrições"
  ];
  const intellectualProperty = [
    {
      title: "Conteúdo da Plataforma",
      description: "O design, código, texto e outros elementos da plataforma são protegidos por direitos autorais."
    },
    {
      title: "Conteúdo do Usuário",
      description: "Você mantém os direitos sobre o conteúdo que envia, mas nos concede licença para usar na plataforma."
    },
    {
      title: "Marcas Registradas",
      description: "Nosso nome, logo e marcas são propriedade exclusiva e não podem ser usados sem autorização."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.termos.title,
        description: mainPagesSEO.termos.description,
        canonical: mainPagesSEO.termos.canonical
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(Scale, { className: "w-16 h-16 text-telegram-blue" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Termos de Uso" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Regras e condições para uso da plataforma Grupos do Telegram" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Última atualização: 25 de setembro de 2025" })
      ] }),
      /* @__PURE__ */ jsxs(Alert, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxs(AlertDescription, { children: [
          /* @__PURE__ */ jsx("strong", { children: "Importante:" }),
          " Ao usar nossa plataforma, você concorda automaticamente com estes termos. Se não concorda, por favor, não use nossos serviços."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "Aceitação dos Termos" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Bem-vindo ao Grupos do Telegram! Estes Termos de Uso estabelecem as regras para o uso de nossa plataforma de descoberta de grupos do Telegram. Ao acessar ou usar nossos serviços, você concorda em cumprir estes termos e todas as leis aplicáveis. Se você não concorda com qualquer parte destes termos, não deve usar nossa plataforma." }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "Nossos Serviços" })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "O Grupos do Telegram é uma plataforma que permite aos usuários:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Descobrir grupos públicos do Telegram organizados por categorias" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Enviar seus próprios grupos para moderação e aprovação" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Pesquisar grupos por temas específicos de interesse" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Acessar dicas de segurança e melhores práticas" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-foreground mb-6 flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsx("span", { children: "Suas Responsabilidades" })
        ] }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: userResponsibilities.map((responsibility, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: responsibility })
        ] }, index)) }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-foreground mb-6 flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-red-500" }),
          /* @__PURE__ */ jsx("span", { children: "Atividades Proibidas" })
        ] }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: prohibitedActivities.map((activity, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-500 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: activity })
        ] }, index)) }) }) })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-8" }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Propriedade Intelectual" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: intellectualProperty.map((item, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
        ] }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Limitação de Responsabilidade" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Não nos responsabilizamos pelo conteúdo dos grupos listados em nossa plataforma. Os usuários são inteiramente responsáveis pelas interações que ocorrem nos grupos do Telegram." }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Modificações dos Termos" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Podemos atualizar estes termos periodicamente. Notificaremos sobre mudanças significativas e o uso continuado após as mudanças constitui aceitação dos novos termos." }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "Dúvidas sobre os Termos" })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "E-mail Jurídico" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "legal@gruposdotelegram.com" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Central de Ajuda" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("a", { href: "/ajuda", className: "text-telegram-blue hover:underline", children: "Suporte online" }) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TermosUso as default
};
