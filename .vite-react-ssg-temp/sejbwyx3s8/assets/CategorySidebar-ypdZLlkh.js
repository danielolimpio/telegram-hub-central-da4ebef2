import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Users, ExternalLink, Heart, Send, ChevronUp, ChevronDown, BookOpen } from "lucide-react";
import { B as Button } from "./button-CeG9Zf-X.js";
import { C as Card, c as CardContent } from "./card-BUhh-XFb.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback, s as sanitizeHTML } from "./sanitize-MDfNxrKs.js";
import { useState } from "react";
const GroupCard = ({ id, title, description, members, avatar, isNew, category, slug, telegramLink }) => {
  const formatMembers = (count) => {
    return count.toLocaleString("pt-BR");
  };
  const generateSlug = (text) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };
  const groupSlug = slug || generateSlug(title);
  return /* @__PURE__ */ jsx(Card, { className: "group hover:shadow-telegram transition-all duration-300 border-border/50 hover:border-telegram-blue/30 overflow-hidden h-full", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0 h-full flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "relative flex-1 flex flex-col", children: [
    isNew && /* @__PURE__ */ jsx(Badge, { className: "absolute top-3 right-3 z-10 bg-success text-success-foreground text-xs", children: "Novo" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-6 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(Avatar, { className: "w-16 h-16 sm:w-20 sm:h-20 border-2 border-telegram-blue/20", children: [
        /* @__PURE__ */ jsx(
          AvatarImage,
          {
            src: avatar || "",
            alt: title,
            className: "object-cover"
          }
        ),
        /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-telegram-blue text-white text-2xl font-bold", children: title.substring(0, 2).toUpperCase() })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-white rounded-full" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "px-4 pb-4 flex-1 flex flex-col text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-base sm:text-lg mb-2 group-hover:text-telegram-blue transition-colors line-clamp-2", children: title }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-3 flex-1",
          dangerouslySetInnerHTML: { __html: sanitizeHTML(description) }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mb-3 truncate", children: category }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center text-sm text-muted-foreground mb-4", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 mr-1" }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs sm:text-sm", children: [
          formatMembers(members),
          " membros"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 mt-auto", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "telegram",
            size: "sm",
            className: "flex-1 text-xs sm:text-sm",
            onClick: () => window.location.href = `/grupo/${groupSlug}`,
            children: [
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" }),
              "Entrar"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "hover:bg-accent hover:text-accent-foreground sm:w-auto",
            children: /* @__PURE__ */ jsx(Heart, { className: "w-3 h-3 sm:w-4 sm:h-4" })
          }
        )
      ] })
    ] })
  ] }) }) });
};
const CategorySidebar = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const allCategories = [
    { name: "Grupos Telegram Amizades", path: "/grupos-telegram-amizades" },
    { name: "Grupos Telegram Cinema", path: "/grupos-telegram-cinema" },
    { name: "Grupos Telegram Cursos", path: "/grupos-telegram-cursos" },
    { name: "Grupos Telegram Divulgação", path: "/grupos-telegram-divulgacao" },
    { name: "Grupos Telegram Encontros", path: "/grupos-telegram-encontros" },
    { name: "Grupos Telegram Esportes", path: "/grupos-telegram-esportes" },
    { name: "Grupos Telegram Estilo", path: "/grupos-telegram-estilo" },
    { name: "Grupos Telegram Estudos", path: "/grupos-telegram-estudos" },
    { name: "Grupos Telegram Figurinhas", path: "/grupos-telegram-figurinhas" },
    { name: "Grupos Telegram Games", path: "/grupos-telegram-games" },
    { name: "Grupos Telegram Investimentos", path: "/grupos-telegram-investimentos" },
    { name: "Grupos Telegram LGBTQIA", path: "/grupos-telegram-lgbtqia" },
    { name: "Grupos Telegram Liberais", path: "/grupos-telegram-liberais" },
    { name: "Grupos Telegram Livros", path: "/grupos-telegram-livros" },
    { name: "Grupos Telegram Músicas", path: "/grupos-telegram-musicas" },
    { name: "Grupos Telegram Namoros", path: "/grupos-telegram-namoros" },
    { name: "Grupos Telegram Notícias", path: "/grupos-telegram-noticias" },
    { name: "Grupos Telegram Oportunidades", path: "/grupos-telegram-oportunidades" },
    { name: "Grupos Telegram Pets", path: "/grupos-telegram-pets" },
    { name: "Grupos Telegram Promoções", path: "/grupos-telegram-promocoes" },
    { name: "Grupos Telegram Receitas", path: "/grupos-telegram-receitas" },
    { name: "Grupos Telegram Redes Sociais", path: "/grupos-telegram-redes-sociais" },
    { name: "Grupos Telegram Tecnologia", path: "/grupos-telegram-tecnologia" },
    { name: "Grupos Telegram Vendas", path: "/grupos-telegram-vendas" },
    { name: "Grupos Telegram Viagens", path: "/grupos-telegram-viagens" },
    { name: "Grupos Telegram Vídeos", path: "/grupos-telegram-videos" },
    { name: "Grupos Telegram Zoeira", path: "/grupos-telegram-zoeira" }
  ];
  const displayedCategories = showAllCategories ? allCategories : allCategories.slice(0, 8);
  return /* @__PURE__ */ jsxs("aside", { className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-lg p-4 sm:p-6 border border-border/50", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center", children: [
        /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 sm:w-5 sm:h-5 mr-2 text-telegram-blue" }),
        "Categorias Populares"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1 sm:space-y-2", children: [
        displayedCategories.map((category) => /* @__PURE__ */ jsx(
          "a",
          {
            href: category.path,
            className: "block py-2 px-2 sm:px-3 text-xs sm:text-sm text-muted-foreground hover:text-telegram-blue hover:bg-muted/50 rounded transition-colors truncate",
            title: category.name,
            children: category.name
          },
          category.name
        )),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowAllCategories(!showAllCategories),
            className: "w-full flex items-center justify-center py-2 px-2 sm:px-3 text-xs sm:text-sm text-telegram-blue hover:bg-muted/50 rounded transition-colors font-medium",
            children: showAllCategories ? /* @__PURE__ */ jsxs(Fragment, { children: [
              "Ver menos ",
              /* @__PURE__ */ jsx(ChevronUp, { className: "w-3 h-3 sm:w-4 sm:h-4 ml-1" })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Ver mais categorias ",
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-3 h-3 sm:w-4 sm:h-4 ml-1" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-lg p-4 sm:p-6 border border-border/50", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 sm:w-5 sm:h-5 mr-2 text-telegram-blue" }),
        "Dicas do Blog"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3 sm:space-y-4", children: [
        {
          title: "Como criar grupos seguros no Telegram",
          excerpt: "Dicas essenciais para manter seu grupo protegido",
          readTime: "3 min"
        },
        {
          title: "10 regras fundamentais para comunidades",
          excerpt: "Estabeleça diretrizes claras para seu grupo",
          readTime: "5 min"
        },
        {
          title: "Estratégias de crescimento orgânico",
          excerpt: "Aumente seus membros de forma natural",
          readTime: "4 min"
        }
      ].map((post, index) => /* @__PURE__ */ jsxs("article", { className: "border-b border-border/30 pb-2 sm:pb-3 last:border-0", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-medium text-foreground text-xs sm:text-sm mb-1 hover:text-telegram-blue cursor-pointer line-clamp-2", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-1 line-clamp-2", children: post.excerpt }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-telegram-blue", children: [
          post.readTime,
          " de leitura"
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 sm:mt-4", children: /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-xs sm:text-sm text-telegram-blue hover:text-telegram-light-blue font-medium", children: "Ver mais dicas →" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-lg p-4 sm:p-6 border border-border/50", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4", children: "Estatísticas" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 sm:space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm text-muted-foreground", children: "Grupos Ativos" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-medium text-telegram-blue", children: "12.500+" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm text-muted-foreground", children: "Membros Total" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-medium text-telegram-blue", children: "2.8M+" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm text-muted-foreground", children: "Novos Hoje" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-medium text-green-500", children: "+23" })
        ] })
      ] })
    ] })
  ] });
};
export {
  CategorySidebar as C,
  GroupCard as G
};
