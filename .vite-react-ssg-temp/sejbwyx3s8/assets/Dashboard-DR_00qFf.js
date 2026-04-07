import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle, d as CardDescription } from "./card-BUhh-XFb.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { s as supabase, I as Input } from "./client-Du4NYLEw.js";
import { T as Textarea } from "./textarea-6Ttc-Vmm.js";
import { L as Label } from "./label-DPO1kvhT.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-vI2S422S.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-9cq_VkaS.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./sanitize-MDfNxrKs.js";
import { User, LogOut, Eye, Clock, CheckCircle, Star, BarChart3, Upload, Send, Camera, MessageSquare, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { u as useToast } from "../main.mjs";
import { R as RichTextEditor } from "./RichTextEditor-CgKcA0UI.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { g as groupSchema } from "./validation-ChnxpKXx.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@supabase/supabase-js";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@radix-ui/react-tabs";
import "@radix-ui/react-avatar";
import "dompurify";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@tiptap/react";
import "@tiptap/starter-kit";
import "@tiptap/extension-text-align";
import "@tiptap/extension-color";
import "@tiptap/extension-text-style";
import "@tiptap/extension-font-family";
import "@tiptap/extension-highlight";
import "@tiptap/extension-underline";
import "zod";
const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myGroups, setMyGroups] = useState([]);
  const [groupTitle, setGroupTitle] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupCategory, setGroupCategory] = useState("");
  const [groupMembers, setGroupMembers] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [groupThumbnail, setGroupThumbnail] = useState("");
  const [adminContact, setAdminContact] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  useEffect(() => {
    checkUser();
  }, []);
  const checkUser = async () => {
    const { data: { user: user2 } } = await supabase.auth.getUser();
    if (!user2) {
      navigate("/auth");
      return;
    }
    setUser(user2);
    const { data: profileData } = await supabase.from("profiles").select("*").eq("id", user2.id).maybeSingle();
    if (profileData) {
      setProfile(profileData);
      setDisplayName(profileData.display_name || "");
      setBio(profileData.bio || "");
      setAvatarPreview(profileData.avatar_url || "");
    }
    const { data: groupsData } = await supabase.from("groups").select("*").eq("user_id", user2.id).order("created_at", { ascending: false });
    if (groupsData) {
      setMyGroups(groupsData);
    }
    setLoading(false);
  };
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  const fetchTelegramThumbnail = async (link) => {
    var _a, _b;
    if (!link.includes("t.me/")) {
      setGroupThumbnail("");
      return;
    }
    try {
      const { data, error } = await supabase.functions.invoke("fetch-telegram-thumbnail", {
        body: { telegramLink: link }
      });
      if (error) throw error;
      if (data == null ? void 0 : data.thumbnailUrl) {
        setGroupThumbnail(data.thumbnailUrl);
      } else {
        const username = (_a = link.split("t.me/")[1]) == null ? void 0 : _a.replace(/^@/, "").split("/")[0];
        setGroupThumbnail(`https://ui-avatars.com/api/?name=${username}&background=0088cc&color=fff&size=128`);
      }
    } catch (error) {
      console.error("Error fetching thumbnail:", error);
      const username = (_b = link.split("t.me/")[1]) == null ? void 0 : _b.replace(/^@/, "").split("/")[0];
      setGroupThumbnail(`https://ui-avatars.com/api/?name=${username}&background=0088cc&color=fff&size=128`);
    }
  };
  const handleSubmitGroup = async () => {
    const validation = groupSchema.safeParse({
      title: groupTitle,
      description: groupDescription,
      telegram_link: telegramLink,
      members: groupMembers,
      category: groupCategory
    });
    if (!validation.success) {
      toast({
        title: "Dados inválidos",
        description: validation.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }
    setSubmitting(true);
    try {
      const slug = groupTitle.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      const { error } = await supabase.from("groups").insert({
        user_id: user.id,
        title: validation.data.title,
        description: validation.data.description,
        category: validation.data.category,
        members: validation.data.members,
        telegram_link: validation.data.telegram_link,
        slug,
        thumbnail_url: groupThumbnail,
        status: "pending"
      });
      if (error) throw error;
      toast({
        title: "Grupo enviado!",
        description: "Seu grupo está aguardando aprovação."
      });
      setGroupTitle("");
      setGroupDescription("");
      setGroupCategory("");
      setGroupMembers("");
      setTelegramLink("");
      setGroupThumbnail("");
      setAdminContact("");
    } catch (error) {
      toast({
        title: "Erro ao enviar grupo",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };
  const handleAvatarChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "Arquivo muito grande",
        description: "O tamanho máximo do avatar é 5MB.",
        variant: "destructive"
      });
      return;
    }
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Tipo de arquivo inválido",
        description: "Por favor, selecione uma imagem (JPEG, PNG, GIF ou WebP).",
        variant: "destructive"
      });
      return;
    }
    setAvatarFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleUpdateProfile = async () => {
    if (!user) return;
    setSubmitting(true);
    try {
      let avatarUrl = profile == null ? void 0 : profile.avatar_url;
      if (avatarFile) {
        const fileExt = avatarFile.name.split(".").pop();
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from("avatars").upload(fileName, avatarFile, { upsert: true });
        if (uploadError) throw uploadError;
        const { data: urlData } = supabase.storage.from("avatars").getPublicUrl(fileName);
        avatarUrl = urlData.publicUrl;
      }
      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        display_name: displayName,
        bio,
        avatar_url: avatarUrl
      });
      if (error) throw error;
      toast({
        title: "Perfil atualizado!",
        description: "Suas informações foram salvas."
      });
      await checkUser();
    } catch (error) {
      toast({
        title: "Erro ao atualizar perfil",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };
  const categories = [
    "Amizades",
    "Cinema",
    "Cursos",
    "Divulgação",
    "Encontros",
    "Esportes",
    "Estilo",
    "Estudos",
    "Figurinhas",
    "Games",
    "Investimentos",
    "LGBTQIA+",
    "Liberais",
    "Livros",
    "Músicas",
    "Namoros",
    "Notícias",
    "Oportunidades",
    "Pets",
    "Promoções",
    "Receitas",
    "Redes Sociais",
    "Tecnologia",
    "Vendas",
    "Viagens",
    "Vídeos",
    "Zoeira"
  ];
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-subtle flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Carregando..." }) });
  }
  const stats = [
    { icon: MessageSquare, label: "Total de Grupos", value: "25", color: "text-blue-500" },
    { icon: CheckCircle, label: "Aprovados", value: "25", color: "text-green-500" },
    { icon: Clock, label: "Pendentes", value: "0", color: "text-yellow-500" },
    { icon: Eye, label: "Total de Acessos", value: "1", color: "text-purple-500" },
    { icon: Heart, label: "Favoritos", value: "0", color: "text-red-500" }
  ];
  const recentGroups = [];
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-subtle", children: /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "w-16 h-16", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: avatarPreview }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: /* @__PURE__ */ jsx(User, { className: "w-8 h-8" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Dashboard" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-1", children: [
            "Bem-vindo, ",
            (profile == null ? void 0 : profile.display_name) || (user == null ? void 0 : user.email)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: handleLogout, children: [
        /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-2" }),
        "Sair"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8", children: stats.map((stat) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: stat.label }),
        /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold", children: stat.value })
      ] }),
      /* @__PURE__ */ jsx(stat.icon, { className: `w-8 h-8 ${stat.color}` })
    ] }) }) }, stat.label)) }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "overview", className: "space-y-6", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-5", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", children: "Visão Geral" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "groups", children: "Meus Grupos" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "favorites", children: "Favoritos" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "promote", children: "Enviar Grupo" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "profile", children: "Perfil" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "overview", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Meus Grupos Recentes" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Últimos grupos que você enviou" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: recentGroups.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Você ainda não enviou nenhum grupo." }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: 'Clique na aba "Enviar Grupo" para adicionar seu primeiro grupo.' })
        ] }) : recentGroups.map((group, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1", children: group.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: group.category }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Eye, { className: "w-3 h-3" }),
                    group.views,
                    " acessos"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
                    group.date
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-sm text-green-500", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
                  group.status
                ] }),
                group.canPromote && /* @__PURE__ */ jsxs(Button, { size: "sm", className: "bg-yellow-500 hover:bg-yellow-600", children: [
                  /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 mr-1" }),
                  "Anunciar"
                ] })
              ] })
            ]
          },
          index
        )) }) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "groups", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Todos os Meus Grupos" }),
          /* @__PURE__ */ jsxs(CardDescription, { children: [
            myGroups.length,
            " grupos cadastrados"
          ] })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: myGroups.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center py-8", children: "Você ainda não enviou nenhum grupo." }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: myGroups.map((group) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "w-12 h-12", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: group.thumbnail_url || "" }),
              /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-telegram-blue text-white", children: group.title.substring(0, 2).toUpperCase() })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: group.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsx(Badge, { variant: group.status === "approved" ? "default" : group.status === "pending" ? "secondary" : "destructive", children: group.status === "approved" ? "Aprovado" : group.status === "pending" ? "Pendente" : "Rejeitado" }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "w-3 h-3" }),
                  group.views || 0,
                  " visualizações"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            group.status === "approved" && /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => navigate(`/grupo/${group.slug}/stats`),
                children: [
                  /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4 mr-2" }),
                  "Estatísticas"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => window.open(group.telegram_link, "_blank"),
                children: "Ver Grupo"
              }
            )
          ] })
        ] }, group.id)) }) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "favorites", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Grupos Favoritos" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Você ainda não tem grupos favoritos." }) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "promote", children: /* @__PURE__ */ jsxs(Card, { className: "border-border/50", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Upload, { className: "w-5 h-5 text-telegram-blue" }),
            /* @__PURE__ */ jsx("span", { children: "Enviar Novo Grupo" })
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Preencha as informações do seu grupo do Telegram" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "groupName", children: "Nome do Grupo *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "groupName",
                placeholder: "Ex: Grupo de Marketing Digital",
                value: groupTitle,
                onChange: (e) => setGroupTitle(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            RichTextEditor,
            {
              label: "Descrição *",
              content: groupDescription,
              onChange: setGroupDescription
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "category", children: "Categoria *" }),
              /* @__PURE__ */ jsxs(Select, { value: groupCategory, onValueChange: setGroupCategory, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Selecione uma categoria" }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: categories.map((category) => /* @__PURE__ */ jsx(SelectItem, { value: category.toLowerCase(), children: category }, category)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "members", children: "Número de Membros" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "members",
                  type: "number",
                  placeholder: "Ex: 150",
                  value: groupMembers,
                  onChange: (e) => setGroupMembers(e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "telegramLink", children: "Link do Telegram *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "telegramLink",
                placeholder: "https://t.me/seugrupo",
                value: telegramLink,
                onChange: (e) => {
                  setTelegramLink(e.target.value);
                  fetchTelegramThumbnail(e.target.value);
                },
                required: true
              }
            ),
            groupThumbnail && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-3 p-3 border rounded-lg bg-muted/30", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: groupThumbnail,
                  alt: "Preview do grupo",
                  className: "w-16 h-16 rounded-lg object-cover"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Preview da miniatura" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Miniatura do grupo será carregada aqui" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "adminContact", children: "Contato do Administrador" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "adminContact",
                placeholder: "@seuusuario ou email@exemplo.com",
                value: adminContact,
                onChange: (e) => setAdminContact(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "telegram",
              size: "lg",
              className: "w-full",
              onClick: handleSubmitGroup,
              disabled: submitting,
              children: [
                /* @__PURE__ */ jsx(Send, { className: "w-5 h-5 mr-2" }),
                submitting ? "Enviando..." : "Enviar Grupo"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "profile", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(User, { className: "w-5 h-5" }),
            "Meu Perfil"
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Personalize suas informações públicas" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs(Avatar, { className: "w-32 h-32", children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: avatarPreview }),
                /* @__PURE__ */ jsx(AvatarFallback, { children: /* @__PURE__ */ jsx(User, { className: "w-16 h-16" }) })
              ] }),
              /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "avatar-upload",
                  className: "absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(Camera, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        id: "avatar-upload",
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        onChange: handleAvatarChange
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Clique no ícone para alterar sua foto" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "displayName", children: "Nome de Exibição" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "displayName",
                placeholder: "Como você quer ser chamado?",
                value: displayName,
                onChange: (e) => setDisplayName(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "bio", children: "Bio" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "bio",
                placeholder: "Conte um pouco sobre você...",
                rows: 4,
                value: bio,
                onChange: (e) => setBio(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: (user == null ? void 0 : user.email) || "",
                disabled: true,
                className: "bg-muted"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "O email não pode ser alterado" })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleUpdateProfile,
              disabled: submitting,
              className: "w-full",
              children: submitting ? "Salvando..." : "Salvar Alterações"
            }
          )
        ] })
      ] }) })
    ] })
  ] }) });
};
export {
  Dashboard as default
};
