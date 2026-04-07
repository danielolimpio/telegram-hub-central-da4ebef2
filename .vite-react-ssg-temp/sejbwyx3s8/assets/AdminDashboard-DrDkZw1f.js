import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { s as supabase, I as Input } from "./client-Du4NYLEw.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-vI2S422S.js";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Shield, Users, Search, Clock, CheckCircle, XCircle, MessageSquare, Edit, Trash2, ExternalLink, RefreshCw } from "lucide-react";
import { c as cn, u as useToast } from "../main.mjs";
import { R as RichTextEditor } from "./RichTextEditor-CgKcA0UI.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./sanitize-MDfNxrKs.js";
import DOMPurify from "dompurify";
import { g as groupSchema } from "./validation-ChnxpKXx.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@supabase/supabase-js";
import "@radix-ui/react-select";
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
import "./label-DPO1kvhT.js";
import "@radix-ui/react-label";
import "@radix-ui/react-avatar";
import "zod";
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("pending");
  const [editingGroup, setEditingGroup] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    category: "",
    description: "",
    telegram_link: "",
    thumbnail_url: ""
  });
  useEffect(() => {
    checkAdminAccess();
  }, []);
  useEffect(() => {
    if (isAdmin) {
      fetchGroups();
    }
  }, [isAdmin]);
  const fetchGroups = async () => {
    try {
      const { data, error } = await supabase.from("groups").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      setGroups(data || []);
    } catch (error) {
      console.error("Error fetching groups:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os grupos.",
        variant: "destructive"
      });
    }
  };
  const handleApproveGroup = async (groupId) => {
    try {
      const { error } = await supabase.from("groups").update({ status: "approved" }).eq("id", groupId);
      if (error) throw error;
      toast({
        title: "Grupo aprovado",
        description: "O grupo foi aprovado com sucesso."
      });
      fetchGroups();
    } catch (error) {
      console.error("Error approving group:", error);
      toast({
        title: "Erro",
        description: "Não foi possível aprovar o grupo.",
        variant: "destructive"
      });
    }
  };
  const handleRejectGroup = async (groupId) => {
    try {
      const { error } = await supabase.from("groups").update({ status: "rejected" }).eq("id", groupId);
      if (error) throw error;
      toast({
        title: "Grupo rejeitado",
        description: "O grupo foi rejeitado."
      });
      fetchGroups();
    } catch (error) {
      console.error("Error rejecting group:", error);
      toast({
        title: "Erro",
        description: "Não foi possível rejeitar o grupo.",
        variant: "destructive"
      });
    }
  };
  const handleDeleteGroup = async (groupId) => {
    if (!confirm("Tem certeza que deseja excluir este grupo? Esta ação não pode ser desfeita.")) {
      return;
    }
    try {
      const { error } = await supabase.from("groups").delete().eq("id", groupId);
      if (error) throw error;
      toast({
        title: "Grupo excluído",
        description: "O grupo foi excluído com sucesso."
      });
      fetchGroups();
    } catch (error) {
      console.error("Error deleting group:", error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir o grupo.",
        variant: "destructive"
      });
    }
  };
  const handleRefreshThumbnail = async (telegramLink) => {
    try {
      toast({
        title: "Atualizando miniatura...",
        description: "Buscando nova imagem do Telegram."
      });
      const { data, error } = await supabase.functions.invoke("fetch-telegram-thumbnail", {
        body: { telegramLink }
      });
      if (error) throw error;
      const thumbnailUrl = data == null ? void 0 : data.thumbnailUrl;
      setEditForm((prev) => ({ ...prev, thumbnail_url: thumbnailUrl || "" }));
      toast({
        title: "Miniatura atualizada!",
        description: "A imagem do grupo foi atualizada com sucesso."
      });
    } catch (error) {
      console.error("Error refreshing thumbnail:", error);
      toast({
        title: "Erro ao atualizar miniatura",
        description: "Não foi possível atualizar a imagem.",
        variant: "destructive"
      });
    }
  };
  const handleEditGroup = (group) => {
    setEditingGroup(group);
    setEditForm({
      title: group.title,
      category: group.category,
      description: group.description,
      telegram_link: group.telegram_link,
      thumbnail_url: group.thumbnail_url || ""
    });
  };
  const handleSaveEdit = async () => {
    if (!editingGroup) return;
    const validation = groupSchema.safeParse({
      title: editForm.title,
      description: editForm.description,
      telegram_link: editForm.telegram_link,
      members: null,
      category: editForm.category
    });
    if (!validation.success) {
      toast({
        title: "Dados inválidos",
        description: validation.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }
    try {
      const { error } = await supabase.from("groups").update({
        title: editForm.title,
        category: editForm.category,
        description: editForm.description,
        telegram_link: editForm.telegram_link,
        thumbnail_url: editForm.thumbnail_url
      }).eq("id", editingGroup.id);
      if (error) throw error;
      toast({
        title: "Grupo atualizado!",
        description: "As alterações foram salvas com sucesso."
      });
      setEditingGroup(null);
      fetchGroups();
    } catch (error) {
      console.error("Error updating group:", error);
      toast({
        title: "Erro ao atualizar",
        description: "Não foi possível salvar as alterações.",
        variant: "destructive"
      });
    }
  };
  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }
      const { data: isAdminResult, error: adminError } = await supabase.rpc("is_admin", {
        _user_id: user.id
      });
      if (adminError) {
        console.error("Error checking admin role:", adminError);
        toast({
          title: "Erro ao verificar permissões",
          description: "Ocorreu um erro ao verificar suas permissões.",
          variant: "destructive"
        });
        navigate("/");
        return;
      }
      if (!isAdminResult) {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão para acessar o painel administrativo.",
          variant: "destructive"
        });
        navigate("/");
        return;
      }
      setIsAdmin(true);
    } catch (error) {
      console.error("Error in checkAdminAccess:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };
  const categories = [
    "Grupos do Telegram de Promoções",
    "Grupos do Telegram de Vendas",
    "Grupos do Telegram de Oportunidades",
    "Grupos do Telegram de Namoros",
    "Grupos do Telegram de Amizades",
    "Grupos do Telegram de Encontros",
    "Grupos do Telegram de Games",
    "Grupos do Telegram de Esportes",
    "Grupos do Telegram de Tecnologia",
    "Grupos do Telegram de Estudos",
    "Grupos do Telegram de Cursos",
    "Grupos do Telegram de Notícias",
    "Grupos do Telegram de Músicas",
    "Grupos do Telegram de Filmes e Cinema",
    "Grupos do Telegram de Livros",
    "Grupos do Telegram de Receitas",
    "Grupos do Telegram de Pets",
    "Grupos do Telegram de Viagens",
    "Grupos do Telegram de Investimentos",
    "Grupos do Telegram de Figurinhas",
    "Grupos do Telegram de Zoeira",
    "Grupos do Telegram de Divulgação",
    "Grupos do Telegram de Redes Sociais",
    "Grupos do Telegram de Vídeos",
    "Grupos do Telegram de LGBTQIA+",
    "Grupos do Telegram de Estilo e Moda",
    "Grupos do Telegram de Liberais"
  ];
  const filteredGroups = groups.filter((g) => g.status === statusFilter).filter(
    (g) => searchQuery === "" || g.title.toLowerCase().includes(searchQuery.toLowerCase()) || g.category.toLowerCase().includes(searchQuery.toLowerCase()) || g.user_id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Verificando permissões..." })
    ] }) });
  }
  if (!isAdmin) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
      /* @__PURE__ */ jsx(Shield, { className: "w-16 h-16 mx-auto mb-4 text-destructive" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Acesso Negado" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Você não tem permissão para acessar o painel administrativo." }),
      /* @__PURE__ */ jsx(Button, { onClick: () => navigate("/"), className: "w-full", children: "Voltar para Home" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-500/10", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-green-500" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Painel Administrativo" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Gerencie grupos e moderação de conteúdo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: "gap-2",
              onClick: () => navigate("/admin/users"),
              children: [
                /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
                "Gerenciar Usuários"
              ]
            }
          ),
          /* @__PURE__ */ jsx(Button, { variant: "destructive", children: "Administrador" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card border rounded-lg p-6 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx(Search, { className: "w-5 h-5 text-muted-foreground" }),
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Filtros e Busca" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center flex-wrap", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Buscar por nome, categoria ou usuário...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "flex-1 min-w-[300px]"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: statusFilter === "pending" ? "default" : "outline",
                onClick: () => setStatusFilter("pending"),
                className: statusFilter === "pending" ? "bg-green-500 hover:bg-green-600" : "",
                children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 mr-2" }),
                  "Pendentes"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: statusFilter === "approved" ? "default" : "outline",
                onClick: () => setStatusFilter("approved"),
                className: statusFilter === "approved" ? "bg-green-500 hover:bg-green-600" : "",
                children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 mr-2" }),
                  "Aprovados"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: statusFilter === "rejected" ? "default" : "outline",
                onClick: () => setStatusFilter("rejected"),
                className: statusFilter === "rejected" ? "bg-green-500 hover:bg-green-600" : "",
                children: [
                  /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 mr-2" }),
                  "Rejeitados"
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredGroups.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "bg-card border rounded-lg p-12 text-center", children: [
        /* @__PURE__ */ jsx(MessageSquare, { className: "w-16 h-16 text-muted-foreground mx-auto mb-4" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          'Nenhum grupo encontrado com o status "',
          statusFilter,
          '"'
        ] })
      ] }) : filteredGroups.map((group) => /* @__PURE__ */ jsxs("div", { className: "bg-card border rounded-lg p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: group.title }),
              /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: group.status === "approved" ? "default" : "secondary",
                  className: group.status === "approved" ? "bg-green-500/10 text-green-500" : "",
                  children: group.status === "approved" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3 mr-1" }),
                    "Aprovado"
                  ] }) : group.status === "pending" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 mr-1" }),
                    "Pendente"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(XCircle, { className: "w-3 h-3 mr-1" }),
                    "Rejeitado"
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm text-muted-foreground mb-3", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Categoria:" }),
                " ",
                group.category
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "ID do Usuário:" }),
                " ",
                group.user_id
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Criado em:" }),
                " ",
                new Date(group.created_at).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "prose prose-sm max-w-none mb-3",
                dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(group.description) }
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Acessos: 0" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 ml-4", children: [
            group.status === "pending" && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs(Button, { size: "sm", className: "bg-green-500 hover:bg-green-600", onClick: () => handleApproveGroup(group.id), children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 mr-1" }),
                "Aprovar"
              ] }),
              /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "destructive", onClick: () => handleRejectGroup(group.id), children: [
                /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 mr-1" }),
                "Rejeitar"
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", onClick: () => handleEditGroup(group), children: [
              /* @__PURE__ */ jsx(Edit, { className: "w-4 h-4 mr-1" }),
              "Editar"
            ] }),
            /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", className: "text-destructive", onClick: () => handleDeleteGroup(group.id), children: [
              /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 mr-1" }),
              "Excluir"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "w-16 h-16 rounded", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: group.thumbnail_url || "", alt: group.title }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded text-xs", children: group.title.substring(0, 2).toUpperCase() })
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "gap-2", onClick: () => window.open(group.telegram_link, "_blank"), children: [
            "Ver Link do Telegram",
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
          ] })
        ] })
      ] }, group.id)) })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: !!editingGroup, onOpenChange: () => setEditingGroup(null), children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Editar Grupo" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Faça as alterações necessárias no grupo" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Nome do Grupo" }),
          /* @__PURE__ */ jsx(Input, { value: editForm.title, onChange: (e) => setEditForm((prev) => ({ ...prev, title: e.target.value })) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Categoria" }),
          /* @__PURE__ */ jsxs(Select, { value: editForm.category, onValueChange: (value) => setEditForm((prev) => ({ ...prev, category: value })), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsx(SelectContent, { children: categories.map((cat) => /* @__PURE__ */ jsx(SelectItem, { value: cat, children: cat }, cat)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          RichTextEditor,
          {
            label: "Descrição",
            content: editForm.description,
            onChange: (value) => setEditForm((prev) => ({ ...prev, description: value }))
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Link do Telegram" }),
          /* @__PURE__ */ jsx(Input, { value: editForm.telegram_link, onChange: (e) => setEditForm((prev) => ({ ...prev, telegram_link: e.target.value })) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Imagem do Grupo" }),
          editForm.thumbnail_url && /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "w-16 h-16 rounded", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: editForm.thumbnail_url }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: "IMG" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Imagem atual" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-3", children: [
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => {
              var _a;
              return (_a = document.getElementById("file-upload")) == null ? void 0 : _a.click();
            }, children: "Escolher arquivo" }),
            /* @__PURE__ */ jsx("input", { id: "file-upload", type: "file", accept: "image/*", className: "hidden" }),
            /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: () => handleRefreshThumbnail(editForm.telegram_link), className: "gap-2", children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4" }),
              "Atualizar do Telegram"
            ] })
          ] }),
          /* @__PURE__ */ jsx("label", { className: "text-sm text-muted-foreground mb-2 block", children: "Ou cole a URL da imagem" }),
          /* @__PURE__ */ jsx(Input, { value: editForm.thumbnail_url, onChange: (e) => setEditForm((prev) => ({ ...prev, thumbnail_url: e.target.value })) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2 mt-6", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setEditingGroup(null), children: "Cancelar" }),
        /* @__PURE__ */ jsx(Button, { className: "bg-green-500 hover:bg-green-600", onClick: handleSaveEdit, children: "Salvar Alterações" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  AdminDashboard as default
};
