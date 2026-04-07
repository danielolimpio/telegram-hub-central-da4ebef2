import { jsxs, jsx } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { C as Card, c as CardContent } from "./card-BUhh-XFb.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { C as Checkbox } from "./checkbox-D50hG86N.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback, s as sanitizeHTML } from "./sanitize-MDfNxrKs.js";
import { MessageCircle, Users, Star, Share2, ExternalLink, CheckCircle } from "lucide-react";
import { s as supabase } from "./client-Du4NYLEw.js";
import { toast } from "sonner";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-avatar";
import "dompurify";
import "@supabase/supabase-js";
const GroupDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [acceptedRules, setAcceptedRules] = useState(false);
  useEffect(() => {
    const fetchGroup = async () => {
      if (!slug) return;
      try {
        const { data, error } = await supabase.from("groups").select("*").eq("slug", slug).eq("status", "approved").single();
        if (error) {
          console.error("Error fetching group:", error);
          toast.error("Grupo não encontrado");
          navigate("/");
          return;
        }
        const userAgent = navigator.userAgent;
        const { data: viewsData, error: viewsError } = await supabase.rpc("increment_group_views", {
          group_slug: slug,
          user_agent_str: userAgent
        });
        if (viewsError) {
          console.error("Error incrementing views:", viewsError);
        }
        setGroup({
          ...data,
          views: viewsData || data.views || 0
        });
      } catch (error) {
        console.error("Error:", error);
        toast.error("Erro ao carregar grupo");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchGroup();
  }, [slug, navigate]);
  const handleJoinGroup = () => {
    if (!group || !acceptedRules) {
      toast.error("Você precisa concordar com as regras antes de continuar");
      return;
    }
    window.open(group.telegram_link, "_blank");
  };
  const handleShare = async (platform) => {
    if (!group) return;
    const url = window.location.href;
    const text = `${group.title} - ${group.description}`;
    let shareUrl = "";
    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };
  const formatMembers = (count) => {
    return count.toLocaleString("pt-BR");
  };
  const communityRules = [
    {
      text: "Respeite a privacidade alheia: Não compartilhe dados pessoais de outras pessoas sem autorização explícita.",
      icon: CheckCircle
    },
    {
      text: "Compartilhe com responsabilidade: Envie apenas links de grupos públicos e apropriados para um público geral.",
      icon: CheckCircle
    },
    {
      text: "Evite conteúdo impróprio: Não publique ou promova materiais que violem leis, direitos autorais ou políticas de plataformas como Telegram e Google.",
      icon: CheckCircle
    },
    {
      text: "Verifique antes de enviar: Certifique-se de que os links e conteúdos sejam seguros, funcionais e livres de riscos digitais.",
      icon: CheckCircle
    },
    {
      text: "Seja gentil e respeitoso: Use uma linguagem cordial e evite mensagens que possam ofender, discriminar ou perturbar outros usuários.",
      icon: CheckCircle
    },
    {
      text: "Mantenha a relevância: Evite repetições excessivas ou publicações fora do tema. Qualidade sempre vem antes da quantidade!",
      icon: CheckCircle
    },
    {
      text: "Siga as políticas oficiais: Todos os grupos devem estar em conformidade com os Termos de Serviço do Telegram e as Políticas do Programa Google AdSense.",
      icon: CheckCircle
    },
    {
      text: "Ajude a manter o ambiente saudável: Se for administrador, modere seu grupo com cuidado e incentive um espaço positivo para todos.",
      icon: CheckCircle
    }
  ];
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "max-w-5xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: "Carregando..." }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  if (!group) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "max-w-5xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: "Grupo não encontrado" }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsx(Card, { className: "border-border/50 mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "w-24 h-24 sm:w-32 sm:h-32 mb-4 border-4 border-telegram-blue/20", children: [
            /* @__PURE__ */ jsx(
              AvatarImage,
              {
                src: group.thumbnail_url || "",
                alt: group.title,
                className: "object-cover"
              }
            ),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-telegram-blue text-white text-3xl font-bold", children: group.title.substring(0, 2).toUpperCase() })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold text-foreground mb-4", children: group.title }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "text-muted-foreground mb-4 max-w-3xl leading-relaxed text-left",
              dangerouslySetInnerHTML: { __html: sanitizeHTML(group.description) }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-6", children: [
            /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "flex items-center gap-1.5 px-3 py-1.5", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
              group.category
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxs("span", { children: [
                formatMembers(group.views),
                " ",
                group.views === 1 ? "acesso" : "acessos"
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "flex items-center gap-1.5 px-3 py-1.5 text-yellow-600 border-yellow-600", children: [
              /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-yellow-600" }),
              "Premium"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-6 mt-6", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium mb-3 flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4" }),
            "Compartilhar este grupo:"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => handleShare("whatsapp"),
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
                  "WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => handleShare("facebook"),
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
                  "Facebook"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => handleShare("twitter"),
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
                  "Twitter"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => handleShare("linkedin"),
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
                  "LinkedIn"
                ]
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { className: "border-border/50 mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 sm:p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-foreground mb-6 flex items-center gap-2", children: "📋 Regras e Boas Práticas da Comunidade" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-6", children: communityRules.map((rule, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-success" }) }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-medium text-foreground", children: [
              rule.text.split(":")[0],
              ":"
            ] }),
            rule.text.split(":").slice(1).join(":")
          ] })
        ] }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: "⚠️" }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("strong", { children: "Ao seguir essas práticas, você contribui para uma comunidade mais confiável, inclusiva e útil para todos!" }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-muted/30 border border-border rounded-lg p-4 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "accept-rules",
              checked: acceptedRules,
              onCheckedChange: (checked) => setAcceptedRules(checked),
              className: "mt-1"
            }
          ),
          /* @__PURE__ */ jsxs(
            "label",
            {
              htmlFor: "accept-rules",
              className: "text-sm text-muted-foreground cursor-pointer leading-relaxed",
              children: [
                /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Li e concordo com as regras da comunidade." }),
                " Entendo que devo respeitar todas as diretrizes acima ao participar deste grupo."
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "telegram",
            size: "lg",
            className: "w-full text-lg py-6",
            onClick: handleJoinGroup,
            disabled: !acceptedRules,
            children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 mr-2" }),
              "Aceite as regras para continuar"
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-muted-foreground mt-3", children: "Você precisa concordar com as regras antes de entrar no grupo" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  GroupDetails as default
};
