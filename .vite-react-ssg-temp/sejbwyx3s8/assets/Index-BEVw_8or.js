import { jsx, jsxs } from "react/jsx-runtime";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as StatsCard } from "./StatsCard-BEePMdBa.js";
import { G as GroupCard, C as CategorySidebar } from "./CategorySidebar-ypdZLlkh.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { O as OrganizationSchema, W as WebSiteSchema, B as BreadcrumbSchema } from "./JsonLd-DQdzIALA.js";
import { ChevronDown, Users, ArrowRight, Shield, BookOpen, Lock, AlertTriangle, XCircle, MessageCircle, CheckCircle, UserCheck, HelpCircle, TrendingUp, Star, Clock } from "lucide-react";
import { B as Button } from "./button-CeG9Zf-X.js";
import { useNavigate, Link } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import { s as supabase } from "./client-Du4NYLEw.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { c as cn } from "../main.mjs";
import "./badge-DObGNgcP.js";
import "class-variance-authority";
import "./sanitize-MDfNxrKs.js";
import "@radix-ui/react-avatar";
import "dompurify";
import "vite-react-ssg";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const Index = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const stats = [
    { icon: Users, value: "+12.500", label: "Grupos Ativos", color: "blue" },
    { icon: TrendingUp, value: "8.742", label: "Acessos Hoje", color: "green" },
    { icon: Star, value: "156", label: "Grupos Premium", color: "orange" },
    { icon: Clock, value: "23", label: "Novos Hoje", color: "gray" }
  ];
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase.from("groups").select("*").eq("status", "approved").order("created_at", { ascending: false });
        if (error) throw error;
        setGroups(data || []);
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
        title: "Grupos do Telegram - Encontre os Melhores Grupos em 2025",
        description: "Descubra e participe dos melhores grupos do Telegram. Milhares de grupos verificados em diversas categorias. Conecte-se com pessoas que compartilham seus interesses de forma segura.",
        canonical: "/"
      }
    ),
    /* @__PURE__ */ jsx(OrganizationSchema, {}),
    /* @__PURE__ */ jsx(WebSiteSchema, {}),
    /* @__PURE__ */ jsx(BreadcrumbSchema, { items: [
      { name: "Início", url: "https://gruposdotelegram.org/" }
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: stats.map((stat, index) => /* @__PURE__ */ jsx(
        StatsCard,
        {
          icon: stat.icon,
          value: stat.value,
          label: stat.label,
          color: stat.color
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-4 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 sm:space-x-3", children: [
                /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 sm:w-6 sm:h-6 text-telegram-blue" }),
                /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-foreground", children: "Todos os Grupos" })
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "text-telegram-blue hover:text-telegram-light-blue self-start sm:self-auto",
                  onClick: () => navigate("/all-groups"),
                  children: [
                    "Ver todos",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6", children: loading ? /* @__PURE__ */ jsx("div", { className: "col-span-full text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Carregando grupos..." }) }) : groups.length === 0 ? /* @__PURE__ */ jsx("div", { className: "col-span-full text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Nenhum grupo disponível." }) }) : groups.slice(0, 12).map((group) => /* @__PURE__ */ jsx(
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
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-16 space-y-12", children: [
            /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden bg-gradient-to-br from-telegram-blue/5 via-background to-purple-500/5 border-telegram-blue/20", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-telegram-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" }),
              /* @__PURE__ */ jsx(CardHeader, { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-telegram-blue/10 rounded-xl", children: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-telegram-blue" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl sm:text-3xl font-bold text-foreground", children: "Conexões Reais, Seguras e com Propósito" })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "relative space-y-6 text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-lg leading-relaxed", children: [
                  "Grupos do Telegram são espaços poderosos para criar conexões humanas autênticas, trocar conhecimento e construir comunidades vibrantes. Mas, assim como em qualquer ambiente digital, existem riscos reais: ",
                  /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "golpes financeiros, vazamento de dados, bots maliciosos" }),
                  " e ambientes tóxicos que podem prejudicar sua experiência online."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-6 bg-telegram-blue/5 rounded-2xl border border-telegram-blue/10", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-foreground mb-2", children: "Por isso, criamos este espaço como seu aliado de confiança." }),
                  /* @__PURE__ */ jsxs("p", { className: "leading-relaxed", children: [
                    "Não somos apenas um diretório de links. Somos uma ",
                    /* @__PURE__ */ jsx("strong", { className: "text-telegram-blue", children: "plataforma de curadoria humana" }),
                    ", onde cada grupo passa por verificação criteriosa antes de ser publicado. Nossa missão é simples: conectar você a comunidades reais, respeitosas e alinhadas com seus verdadeiros interesses, sempre priorizando sua segurança e bem-estar digital."
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "border-2 border-dashed border-muted-foreground/20", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-green-500/10 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-7 h-7 text-green-600" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-xl sm:text-2xl font-bold text-foreground", children: "Guia Essencial para Usar Grupos do Telegram com Segurança e Inteligência" })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6 text-blue-600" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: "Como entrar sem expor seu número?" }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-3", children: "No Telegram, seu número de telefone não é visível publicamente — a menos que você configure isso nas configurações de privacidade. Ao usar links de convite (como os que oferecemos aqui), você entra diretamente no grupo sem revelar seu contato a estranhos." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxs("p", { className: "text-sm text-amber-700 dark:text-amber-400", children: [
                        /* @__PURE__ */ jsx("strong", { children: "Dica importante:" }),
                        " evite usar seu número como nome de usuário público ou compartilhá-lo em descrições de perfil ou comentários."
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-purple-600" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: "Quantas pessoas cabem em um grupo em 2025?" }),
                    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
                      "O Telegram permite até ",
                      /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "200.000 membros" }),
                      " em um grupo! No entanto, comunidades menores (de 20 a 100 pessoas) costumam ser mais interativas e acolhedoras, enquanto grupos gigantes tendem a ser mais anônimos e menos moderados. Escolha de acordo com o tipo de conexão que você busca."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6 text-red-600" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: "Como identificar se um grupo é sério ou golpe?" }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Fique atento a três sinais de alerta:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: 'Falta de regras claras ou descrição genérica (ex: "grupo legal", "entre já!");' })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Administração oculta ou sem qualquer identificação;" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: 'Excesso de promoções, mensagens automáticas, promessas de "ganhe dinheiro rápido" ou links suspeitos.' })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Grupos legítimos têm propósito definido, moderação ativa e transparência sobre suas intenções." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-green-600" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: "Como sair de um grupo com educação?" }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-3", children: 'No Telegram, você pode sair sem notificar ninguém — basta tocar em "Sair do grupo". Se desejar, pode enviar uma mensagem breve antes, como:' }),
                    /* @__PURE__ */ jsx("div", { className: "p-4 bg-muted/50 rounded-lg border border-border italic text-foreground", children: '"Obrigado pela troca! Estou saindo para focar em outros espaços. Desejo sucesso a todos!"' }),
                    /* @__PURE__ */ jsxs("p", { className: "mt-3 text-muted-foreground", children: [
                      "Mas lembre-se: ",
                      /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "sua paz digital vem primeiro" }),
                      ". Não há obrigação de justificar sua saída."
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-green-500/10 rounded-xl", children: /* @__PURE__ */ jsx(Shield, { className: "w-7 h-7 text-green-600" }) }),
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-bold text-foreground", children: "Nosso Compromisso com a Curadoria" })
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Todos os grupos listados aqui passam por verificação manual. Exigimos que cada comunidade tenha:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Regras claras e visíveis" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Administração identificável" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Propósito legítimo e alinhado com nossos valores" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-red-500/5 to-rose-500/5 border-red-500/20", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-500/10 rounded-xl", children: /* @__PURE__ */ jsx(XCircle, { className: "w-7 h-7 text-red-600" }) }),
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-bold text-foreground", children: "Proibimos Rigorosamente" })
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Se um grupo violar nossos critérios ou receber denúncias consistentes, é removido em até 24 horas:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-red-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Conteúdo impróprio ou ilegal" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-red-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Spam e automações abusivas" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-red-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Golpes, pirâmides ou exploração" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground italic", children: "Nossa curadoria é humana, não automatizada — porque acreditamos que confiança não pode ser gerada por algoritmos." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden bg-gradient-to-r from-telegram-blue via-telegram-blue to-blue-600 text-white", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" }),
              /* @__PURE__ */ jsx(CardContent, { className: "relative py-8 px-6 sm:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6", children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 p-4 bg-white/10 rounded-2xl backdrop-blur-sm", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-12 h-12 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2", children: "Quer Ir Além dos Links? Explore Nosso Blog!" }),
                  /* @__PURE__ */ jsx("p", { className: "text-white/80 mb-4", children: "No nosso blog, você encontra guias práticos e avançados para dominar o Telegram com consciência." }),
                  /* @__PURE__ */ jsxs("ul", { className: "flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-white/90 mb-4", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4" }),
                      "Proteção de privacidade"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4" }),
                      "Moderação de grupos"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4" }),
                      "Identificação de golpes"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Link, { to: "/blog", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-white text-telegram-blue hover:bg-white/90 font-semibold", children: [
                  "Acessar o Blog",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
                ] }) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-telegram-blue/10 rounded-xl", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-7 h-7 text-telegram-blue" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-xl sm:text-2xl font-bold text-foreground", children: "Perguntas Frequentes" })
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "w-full", children: [
                /* @__PURE__ */ jsxs(AccordionItem, { value: "item-1", children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-medium", children: "Onde posso encontrar grupos confiáveis?" }),
                  /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: "Navegue pelas categorias acima ou use nossa busca. Todos os grupos são verificados por humanos antes da publicação." })
                ] }),
                /* @__PURE__ */ jsxs(AccordionItem, { value: "item-2", children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-medium", children: "Como entro em um grupo?" }),
                  /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: 'Clique no grupo desejado, leia a descrição e as regras, depois toque em "Entrar no Grupo". Você será redirecionado automaticamente para o Telegram.' })
                ] }),
                /* @__PURE__ */ jsxs(AccordionItem, { value: "item-3", children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-medium", children: "É seguro participar dos grupos listados?" }),
                  /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: "Sim. Todos são pré-aprovados e monitorados. Ainda assim, mantenha o bom senso: nunca compartilhe dados sensíveis (CPF, senhas, comprovantes, etc.) em grupos, mesmo os verificados." })
                ] }),
                /* @__PURE__ */ jsxs(AccordionItem, { value: "item-4", children: [
                  /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-medium", children: "Posso cadastrar meu próprio grupo?" }),
                  /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: 'Com certeza! Clique em "Anunciar Grupo" no menu, preencha as informações e aguarde a análise. O cadastro é 100% gratuito, e seu grupo pode alcançar milhares de pessoas em busca de comunidades reais.' })
                ] })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-80 w-full", children: /* @__PURE__ */ jsx(CategorySidebar, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Index as default
};
