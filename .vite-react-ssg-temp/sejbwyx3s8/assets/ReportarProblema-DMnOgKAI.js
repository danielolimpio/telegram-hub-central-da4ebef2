import { jsxs, jsx } from "react/jsx-runtime";
import { AlertTriangle, Shield, Flag, MessageCircle, Users, FileText } from "lucide-react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { I as Input } from "./client-Du4NYLEw.js";
import { L as Label } from "./label-DPO1kvhT.js";
import { T as Textarea } from "./textarea-6Ttc-Vmm.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-vI2S422S.js";
import { C as Checkbox } from "./checkbox-D50hG86N.js";
import { A as Alert, a as AlertDescription } from "./alert-BoVYTXUg.js";
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
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@radix-ui/react-checkbox";
const ReportarProblema = () => {
  const reportTypes = [
    {
      value: "spam",
      label: "Spam ou Conteúdo Promocional Excessivo",
      icon: /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" })
    },
    {
      value: "inappropriate",
      label: "Conteúdo Inadequado ou Ofensivo",
      icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4" })
    },
    {
      value: "scam",
      label: "Golpe ou Atividade Fraudulenta",
      icon: /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" })
    },
    {
      value: "fake",
      label: "Informações Falsas ou Enganosas",
      icon: /* @__PURE__ */ jsx(Flag, { className: "w-4 h-4" })
    },
    {
      value: "harassment",
      label: "Assédio ou Bullying",
      icon: /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" })
    },
    {
      value: "other",
      label: "Outro (especificar na descrição)",
      icon: /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" })
    }
  ];
  const guidelines = [
    "Forneça informações detalhadas e precisas sobre o problema",
    "Inclua links ou evidências quando possível",
    "Seja respeitoso e objetivo na descrição",
    "Não faça denúncias falsas ou maliciosas",
    "Aguarde nossa análise antes de fazer nova denúncia do mesmo caso"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.reportar.title,
        description: mainPagesSEO.reportar.description,
        canonical: mainPagesSEO.reportar.canonical
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-16 h-16 text-red-500" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Reportar Problema" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Ajude-nos a manter a comunidade segura reportando problemas ou violações" })
      ] }),
      /* @__PURE__ */ jsxs(Alert, { className: "mb-8", children: [
        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxs(AlertDescription, { children: [
          /* @__PURE__ */ jsx("strong", { children: "Sua denúncia é importante!" }),
          " Todas as denúncias são analisadas pela nossa equipe. Manteremos sua identidade confidencial e você receberá um retorno sobre o status da análise."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Formulário de Denúncia" }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxs("form", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nome (opcional)" }),
                /* @__PURE__ */ jsx(Input, { id: "name", placeholder: "Seu nome" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "E-mail de contato" }),
                /* @__PURE__ */ jsx(Input, { id: "email", type: "email", placeholder: "seu@email.com", required: true })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "report-type", children: "Tipo de Problema" }),
              /* @__PURE__ */ jsxs(Select, { required: true, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Selecione o tipo de problema" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: reportTypes.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type.value, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  type.icon,
                  /* @__PURE__ */ jsx("span", { children: type.label })
                ] }) }, type.value)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "group-link", children: "Link do Grupo (se aplicável)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "group-link",
                  placeholder: "https://t.me/nomeDoGrupo ou link da página do grupo"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Descrição Detalhada" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  id: "description",
                  placeholder: "Descreva o problema em detalhes. Inclua quando aconteceu, evidências e qualquer informação relevante...",
                  className: "min-h-[120px]",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "evidence", children: "Evidências (opcional)" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "evidence",
                  type: "file",
                  multiple: true,
                  accept: "image/*,.pdf,.txt",
                  className: "cursor-pointer"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Aceitos: imagens, PDF ou arquivos de texto (máx. 5MB cada)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "priority", children: "Urgência" }),
              /* @__PURE__ */ jsxs(Select, { children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Selecione a urgência" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "low", children: "Baixa - Problema menor" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "medium", children: "Média - Problema moderado" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "high", children: "Alta - Problema sério" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "urgent", children: "Urgente - Situação perigosa" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Checkbox, { id: "terms", required: true }),
              /* @__PURE__ */ jsxs(Label, { htmlFor: "terms", className: "text-sm", children: [
                "Confirmo que as informações são verdadeiras e concordo com os",
                " ",
                /* @__PURE__ */ jsx("a", { href: "/termos", className: "text-telegram-blue hover:underline", children: "Termos de Uso" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full bg-red-500 hover:bg-red-600", children: [
              /* @__PURE__ */ jsx(Flag, { className: "w-4 h-4 mr-2" }),
              "Enviar Denúncia"
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Diretrizes para Denúncia" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: guidelines.map((guideline, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-telegram-blue rounded-full mt-2 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: guideline })
            ] }, index)) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "O que acontece depois?" }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold", children: "1" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Recebemos sua denúncia e enviamos confirmação por e-mail" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold", children: "2" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Nossa equipe analisa o caso em até 48 horas" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold", children: "3" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Tomamos as medidas necessárias e informamos o resultado" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Outras Formas de Contato" }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-sm", children: "E-mail Emergencial:" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "urgente@gruposdotelegram.com" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-sm", children: "Telegram:" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "@gruposdotelegram" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-sm", children: "Horário de Atendimento:" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Segunda a Sexta, 9h às 18h" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ReportarProblema as default
};
