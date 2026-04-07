import { jsx, jsxs } from "react/jsx-runtime";
import { Cookie, Globe, Settings, CheckCircle, XCircle, Shield, BarChart, Eye } from "lucide-react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import * as React from "react";
import { useState } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { c as cn } from "../main.mjs";
import { S as Separator } from "./separator-KsVz8JGx.js";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { m as mainPagesSEO } from "./seo-DxaWTmB0.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-separator";
import "./client-Du4NYLEw.js";
import "@supabase/supabase-js";
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
const PoliticaCookies = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    // Sempre habilitado
    analytics: true,
    marketing: false,
    personalization: true
  });
  const cookieTypes = [
    {
      name: "Cookies Essenciais",
      key: "essential",
      required: true,
      description: "Necessários para o funcionamento básico do site. Não podem ser desabilitados.",
      examples: "Autenticação, preferências de idioma, carrinho de compras",
      icon: /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-green-500" })
    },
    {
      name: "Cookies de Analytics",
      key: "analytics",
      required: false,
      description: "Nos ajudam a entender como você usa o site para melhorar a experiência.",
      examples: "Google Analytics, estatísticas de uso, métricas de performance",
      icon: /* @__PURE__ */ jsx(BarChart, { className: "w-5 h-5 text-telegram-blue" })
    },
    {
      name: "Cookies de Marketing",
      key: "marketing",
      required: false,
      description: "Usados para exibir anúncios relevantes e medir a eficácia das campanhas.",
      examples: "Google Ads, Facebook Pixel, remarketing",
      icon: /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-purple-500" })
    },
    {
      name: "Cookies de Personalização",
      key: "personalization",
      required: false,
      description: "Permitem personalizar sua experiência com base em suas preferências.",
      examples: "Tema escuro/claro, grupos salvos, recomendações personalizadas",
      icon: /* @__PURE__ */ jsx(Settings, { className: "w-5 h-5 text-orange-500" })
    }
  ];
  const thirdPartyCookies = [
    {
      service: "Google Analytics",
      purpose: "Análise de tráfego e comportamento dos usuários",
      data: "Páginas visitadas, tempo de sessão, origem do tráfego",
      retention: "26 meses"
    },
    {
      service: "Google Ads",
      purpose: "Remarketing e otimização de campanhas publicitárias",
      data: "Interações com anúncios, conversões",
      retention: "90 dias"
    },
    {
      service: "Hotjar",
      purpose: "Análise de experiência do usuário e mapas de calor",
      data: "Movimentos do mouse, cliques, rolagem da página",
      retention: "365 dias"
    }
  ];
  const handlePreferenceChange = (key, value) => {
    if (key === "essential") return;
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: value
    }));
  };
  const savePreferences = () => {
    console.log("Preferências salvas:", cookiePreferences);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.cookies.title,
        description: mainPagesSEO.cookies.description,
        canonical: mainPagesSEO.cookies.canonical
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(Cookie, { className: "w-16 h-16 text-telegram-blue" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Política de Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Como usamos cookies para melhorar sua experiência em nossa plataforma" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Última atualização: 25 de setembro de 2025" })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "O que são Cookies?" })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, bem como fornecer informações aos proprietários do site sobre como os usuários interagem com suas páginas." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Tipos de Cookies que Usamos" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: cookieTypes.map((type, index) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2 text-lg", children: [
              type.icon,
              /* @__PURE__ */ jsx("span", { children: type.name }),
              type.required && /* @__PURE__ */ jsx("span", { className: "text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full", children: "Obrigatório" })
            ] }),
            /* @__PURE__ */ jsx(
              Switch,
              {
                checked: cookiePreferences[type.key],
                onCheckedChange: (checked) => handlePreferenceChange(type.key, checked),
                disabled: type.required
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-2", children: type.description }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx("strong", { children: "Exemplos:" }),
              " ",
              type.examples
            ] })
          ] })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Settings, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "Suas Preferências de Cookie" })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Você pode controlar quais cookies aceita. Note que desabilitar certos cookies pode afetar a funcionalidade do site." }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: savePreferences,
                className: "bg-telegram-blue hover:bg-telegram-blue/90",
                children: "Salvar Preferências"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setCookiePreferences({
                  essential: true,
                  analytics: false,
                  marketing: false,
                  personalization: false
                }),
                children: "Aceitar Apenas Essenciais"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-8" }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Cookies de Terceiros" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Também utilizamos serviços de terceiros que podem definir seus próprios cookies:" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: thirdPartyCookies.map((service, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground mb-1", children: service.service }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Serviço" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: service.purpose }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Finalidade" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: service.data }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Dados Coletados" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: service.retention }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Retenção" })
          ] })
        ] }) }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Gerenciar no Navegador" }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Você pode controlar cookies através das configurações do seu navegador:" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3 text-green-500" }),
                /* @__PURE__ */ jsx("span", { children: "Chrome: Configurações → Privacidade → Cookies" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3 text-green-500" }),
                /* @__PURE__ */ jsx("span", { children: "Firefox: Preferências → Privacidade" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3 text-green-500" }),
                /* @__PURE__ */ jsx("span", { children: "Safari: Preferências → Privacidade" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Opt-out de Analytics" }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Para opt-out de serviços específicos:" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-3 h-3 text-red-500" }),
                /* @__PURE__ */ jsx("a", { href: "https://tools.google.com/dlpage/gaoptout", className: "text-telegram-blue hover:underline", children: "Google Analytics Opt-out" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-3 h-3 text-red-500" }),
                /* @__PURE__ */ jsx("a", { href: "https://www.hotjar.com/legal/compliance/opt-out", className: "text-telegram-blue hover:underline", children: "Hotjar Opt-out" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Cookie, { className: "w-6 h-6 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { children: "Dúvidas sobre Cookies" })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Se você tiver dúvidas sobre nossa política de cookies:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "E-mail" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "cookies@gruposdotelegram.com" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Central de Ajuda" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("a", { href: "/ajuda", className: "text-telegram-blue hover:underline", children: "Suporte técnico" }) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PoliticaCookies as default
};
