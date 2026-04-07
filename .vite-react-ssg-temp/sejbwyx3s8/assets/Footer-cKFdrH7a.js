import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Send, Search, Shield, LayoutDashboard, LogOut, User, BookOpen, Users, Info, HelpCircle, Lock, Mail, Cookie, Globe, Heart } from "lucide-react";
import { B as Button } from "./button-CeG9Zf-X.js";
import { s as supabase, I as Input } from "./client-Du4NYLEw.js";
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser((session == null ? void 0 : session.user) ?? null);
      if (session == null ? void 0 : session.user) {
        checkAdmin(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser((session == null ? void 0 : session.user) ?? null);
      if (session == null ? void 0 : session.user) {
        checkAdmin(session.user.id);
      }
    });
    return () => subscription.unsubscribe();
  }, []);
  const checkAdmin = async (userId) => {
    const { data } = await supabase.rpc("is_admin", { _user_id: userId });
    setIsAdmin(!!data);
  };
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
    navigate("/");
  };
  return /* @__PURE__ */ jsx("header", { className: "bg-background border-b border-border shadow-sm sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-telegram rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Send, { className: "w-5 h-5 text-white" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold", children: [
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Grupos do " }),
        /* @__PURE__ */ jsx("span", { className: "text-telegram-blue", children: "Telegram" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 max-w-md mx-8 hidden md:block", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          placeholder: "Faça sua busca...",
          className: "pl-10 bg-secondary/50 border-none focus:bg-background transition-colors"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "telegram",
            size: "sm",
            className: "hidden sm:flex",
            onClick: () => navigate("/dashboard"),
            children: [
              /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 mr-2" }),
              "Enviar Grupo"
            ]
          }
        ),
        isAdmin && /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => navigate("/admin"),
            className: "hidden sm:flex",
            children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-2" }),
              "Admin"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => navigate("/dashboard"),
            children: [
              /* @__PURE__ */ jsx(LayoutDashboard, { className: "w-4 h-4 mr-2" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Dashboard" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: handleLogout,
            children: [
              /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-2" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Sair" })
            ]
          }
        )
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "telegram",
            size: "sm",
            className: "hidden sm:flex",
            onClick: () => navigate("/auth"),
            children: [
              /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 mr-2" }),
              "Enviar Grupo"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => navigate("/auth"),
            children: [
              /* @__PURE__ */ jsx(User, { className: "w-4 h-4 mr-2" }),
              "Entrar"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "hidden sm:flex",
          onClick: () => navigate("/blog"),
          children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 mr-2" }),
            "Blog"
          ]
        }
      )
    ] })
  ] }) }) });
};
const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-card border-t border-border mt-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-telegram rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Send, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold", children: [
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Grupos do " }),
            /* @__PURE__ */ jsx("span", { className: "text-telegram-blue", children: "Telegram" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-4", children: "A maior plataforma de descoberta de grupos do Telegram no Brasil. Conecte-se com pessoas que compartilham seus interesses." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-telegram-blue" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "+12.500 grupos ativos" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Navegação" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/", className: "text-muted-foreground hover:text-telegram-blue transition-colors flex items-center", children: [
            /* @__PURE__ */ jsx(Info, { className: "w-3 h-3 mr-1" }),
            "Início"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/como-funciona", className: "text-muted-foreground hover:text-telegram-blue transition-colors flex items-center", children: [
            /* @__PURE__ */ jsx(HelpCircle, { className: "w-3 h-3 mr-1" }),
            "Como funciona"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/regras", className: "text-muted-foreground hover:text-telegram-blue transition-colors flex items-center", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-3 h-3 mr-1" }),
            "Regras da comunidade"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/seguranca", className: "text-muted-foreground hover:text-telegram-blue transition-colors flex items-center", children: [
            /* @__PURE__ */ jsx(Lock, { className: "w-3 h-3 mr-1" }),
            "Dicas de segurança"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Suporte" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/ajuda", className: "text-muted-foreground hover:text-telegram-blue transition-colors flex items-center", children: [
            /* @__PURE__ */ jsx(HelpCircle, { className: "w-3 h-3 mr-1" }),
            "Central de ajuda"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/reportar", className: "text-muted-foreground hover:text-telegram-blue transition-colors flex items-center", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-3 h-3 mr-1" }),
            "Reportar problema"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/faq", className: "text-muted-foreground hover:text-telegram-blue transition-colors flex items-center", children: [
            /* @__PURE__ */ jsx(Info, { className: "w-3 h-3 mr-1" }),
            "FAQ"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/blog", className: "text-muted-foreground hover:text-telegram-blue transition-colors flex items-center", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "w-3 h-3 mr-1" }),
            "Blog"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Receba os melhores grupos diretamente no seu e-mail" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Seu e-mail",
                className: "text-sm"
              }
            ),
            /* @__PURE__ */ jsx(Button, { variant: "telegram", size: "sm", children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Enviamos apenas conteúdo relevante, sem spam." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-border mt-8 pt-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("a", { href: "/privacidade", className: "hover:text-telegram-blue transition-colors flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsx("span", { children: "Política de Privacidade" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "/termos", className: "hover:text-telegram-blue transition-colors flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx(Info, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsx("span", { children: "Termos de Uso" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "/cookies", className: "hover:text-telegram-blue transition-colors flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx(Cookie, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsx("span", { children: "Política de Cookies" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "/sitemap", className: "hover:text-telegram-blue transition-colors flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsx("span", { children: "Sitemap" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("span", { children: [
          "© ",
          currentYear,
          " Grupos do Telegram | Todos os direitos reservados"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: "Desenvolvido por" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://danielolimpio.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center space-x-1 hover:text-telegram-blue transition-colors font-medium",
              children: [
                /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-red-500" }),
                /* @__PURE__ */ jsx("span", { children: "DanielOlimpio" }),
                /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4 text-telegram-blue" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] }) });
};
export {
  Footer as F,
  Header as H
};
