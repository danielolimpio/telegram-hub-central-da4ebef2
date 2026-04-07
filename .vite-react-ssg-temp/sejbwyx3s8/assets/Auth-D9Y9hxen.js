import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { B as Button } from "./button-CeG9Zf-X.js";
import { s as supabase, I as Input } from "./client-Du4NYLEw.js";
import { L as Label } from "./label-DPO1kvhT.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardDescription, c as CardContent } from "./card-BUhh-XFb.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-9cq_VkaS.js";
import { ArrowLeft, Send } from "lucide-react";
import { u as useToast } from "../main.mjs";
import { s as signupSchema } from "./validation-ChnxpKXx.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@supabase/supabase-js";
import "@radix-ui/react-label";
import "@radix-ui/react-tabs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "zod";
const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session == null ? void 0 : session.user) {
        navigate("/dashboard");
      }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session == null ? void 0 : session.user) {
        navigate("/dashboard");
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword
      });
      if (error) {
        toast({
          title: "Erro no login",
          description: error.message,
          variant: "destructive"
        });
        return;
      }
      if (data.user) {
        toast({
          title: "Login realizado!",
          description: "Bem-vindo de volta!"
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const validation = signupSchema.safeParse({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      confirmPassword
    });
    if (!validation.success) {
      toast({
        title: "Dados inválidos",
        description: validation.error.errors[0].message,
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupEmail,
        password: signupPassword,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            display_name: signupName
          }
        }
      });
      if (error) {
        toast({
          title: "Erro no cadastro",
          description: error.message,
          variant: "destructive"
        });
        return;
      }
      if (data.user) {
        toast({
          title: "Cadastro realizado!",
          description: "Sua conta foi criada com sucesso! Bem-vindo!"
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-subtle flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
      "Voltar para o início"
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx("div", { className: "p-3 bg-telegram-blue/10 rounded-full", children: /* @__PURE__ */ jsx(Send, { className: "w-8 h-8 text-telegram-blue" }) }) }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: "Grupos do Telegram" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Entre ou cadastre-se para começar a compartilhar grupos" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "login", className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "login", children: "Entrar" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "signup", children: "Cadastrar" })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "login", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                type: "email",
                placeholder: "seu@email.com",
                value: loginEmail,
                onChange: (e) => setLoginEmail(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Senha" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                placeholder: "••••••••",
                value: loginPassword,
                onChange: (e) => setLoginPassword(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              className: "w-full bg-telegram-blue hover:bg-telegram-blue/90",
              disabled: isLoading,
              children: isLoading ? "Entrando..." : "Entrar"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "signup", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSignup, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nome completo" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "name",
                type: "text",
                placeholder: "Seu nome",
                value: signupName,
                onChange: (e) => setSignupName(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "signup-email", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "signup-email",
                type: "email",
                placeholder: "seu@email.com",
                value: signupEmail,
                onChange: (e) => setSignupEmail(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "signup-password", children: "Senha" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "signup-password",
                type: "password",
                placeholder: "••••••••",
                value: signupPassword,
                onChange: (e) => setSignupPassword(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "confirm-password", children: "Confirmar senha" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "confirm-password",
                type: "password",
                placeholder: "••••••••",
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              className: "w-full bg-telegram-blue hover:bg-telegram-blue/90",
              disabled: isLoading,
              children: isLoading ? "Cadastrando..." : "Cadastrar"
            }
          )
        ] }) })
      ] }) })
    ] })
  ] }) });
};
export {
  Auth as default
};
