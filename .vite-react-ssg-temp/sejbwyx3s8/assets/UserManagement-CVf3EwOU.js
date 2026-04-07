import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { b as buttonVariants, B as Button } from "./button-CeG9Zf-X.js";
import { s as supabase, I as Input } from "./client-Du4NYLEw.js";
import { C as Card, c as CardContent } from "./card-BUhh-XFb.js";
import { S as StatsCard } from "./StatsCard-BEePMdBa.js";
import { c as cn, u as useToast } from "../main.mjs";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Users, ArrowLeft, Badge as Badge$1, ShieldX, Crown, FolderOpen, Search, CheckCircle, Trash2 } from "lucide-react";
import { B as Badge } from "./badge-DObGNgcP.js";
import { format } from "date-fns";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@supabase/supabase-js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const Table = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props })
);
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props })
);
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "tr",
    {
      ref,
      className: cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "th",
    {
      ref,
      className: cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  )
);
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("td", { ref, className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className), ...props })
);
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props })
);
TableCaption.displayName = "TableCaption";
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Title, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
const UserManagement = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    blockedUsers: 0,
    premiumUsers: 0,
    totalGroups: 0
  });
  useEffect(() => {
    checkAdminAccess();
  }, []);
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
          description: "Você não tem permissão para acessar esta página.",
          variant: "destructive"
        });
        navigate("/");
        return;
      }
      fetchUsers();
      fetchStats();
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };
  const fetchUsers = async () => {
    try {
      const { data: profiles, error: profilesError } = await supabase.from("profiles").select("id, display_name, created_at");
      if (profilesError) throw profilesError;
      const { data: groupCounts, error: groupError } = await supabase.from("groups").select("user_id");
      if (groupError) throw groupError;
      const groupCountMap = (groupCounts == null ? void 0 : groupCounts.reduce((acc, group) => {
        acc[group.user_id] = (acc[group.user_id] || 0) + 1;
        return acc;
      }, {})) || {};
      const usersData = (profiles || []).map((profile) => {
        return {
          id: profile.id,
          email: "Email protegido",
          // Email is not available in profiles table
          display_name: profile.display_name || null,
          created_at: profile.created_at,
          groupCount: groupCountMap[profile.id] || 0,
          isPremium: false
          // TODO: Implement premium logic
        };
      });
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os usuários.",
        variant: "destructive"
      });
    }
  };
  const fetchStats = async () => {
    try {
      const { count: totalUsers } = await supabase.from("profiles").select("*", { count: "exact", head: true });
      const { count: totalGroups } = await supabase.from("groups").select("*", { count: "exact", head: true });
      setStats({
        totalUsers: totalUsers || 0,
        blockedUsers: 0,
        // TODO: Implement blocked users logic
        premiumUsers: 0,
        // TODO: Implement premium users logic
        totalGroups: totalGroups || 0
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };
  const handleDeleteUser = async () => {
    if (!deleteUserId) return;
    try {
      const { error } = await supabase.from("profiles").delete().eq("id", deleteUserId);
      if (error) throw error;
      toast({
        title: "Usuário excluído",
        description: "O perfil do usuário foi excluído com sucesso."
      });
      setDeleteUserId(null);
      fetchUsers();
      fetchStats();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir o usuário.",
        variant: "destructive"
      });
    }
  };
  const filteredUsers = users.filter((user) => {
    var _a;
    const searchLower = searchQuery.toLowerCase();
    return user.email.toLowerCase().includes(searchLower) || ((_a = user.display_name) == null ? void 0 : _a.toLowerCase().includes(searchLower));
  });
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "max-w-7xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: "Carregando..." }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-telegram-blue/10 p-3 rounded-lg", children: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-telegram-blue" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Gerenciamento de Usuários" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Visualize e gerencie todos os usuários cadastrados" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              onClick: () => navigate("/admin"),
              className: "gap-2",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
                "Voltar ao Painel"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(Badge, { variant: "destructive", className: "gap-1.5", children: [
            /* @__PURE__ */ jsx(Badge$1, { className: "w-3 h-3" }),
            "Administrador"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
        /* @__PURE__ */ jsx(
          StatsCard,
          {
            label: "Total de Usuários",
            value: stats.totalUsers.toString(),
            icon: Users,
            color: "blue"
          }
        ),
        /* @__PURE__ */ jsx(
          StatsCard,
          {
            label: "Usuários Bloqueados",
            value: stats.blockedUsers.toString(),
            icon: ShieldX,
            color: "gray"
          }
        ),
        /* @__PURE__ */ jsx(
          StatsCard,
          {
            label: "Usuários Premium",
            value: stats.premiumUsers.toString(),
            icon: Crown,
            color: "orange"
          }
        ),
        /* @__PURE__ */ jsx(
          StatsCard,
          {
            label: "Total de Grupos",
            value: stats.totalGroups.toString(),
            icon: FolderOpen,
            color: "green"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Search, { className: "w-5 h-5 text-muted-foreground" }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Buscar Usuário" })
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Buscar por nome, email ou telefone...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "mt-4"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold mb-4", children: [
          "Usuários Cadastrados (",
          filteredUsers.length,
          ")"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "Nome" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Email" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Telegram" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-center", children: "Grupos" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-center", children: "Status" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Cadastro" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-center", children: "Ações" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: filteredUsers.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 7, className: "text-center text-muted-foreground py-8", children: "Nenhum usuário encontrado" }) }) : filteredUsers.map((user) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: user.display_name || "N/A" }),
            /* @__PURE__ */ jsx(TableCell, { children: user.email }),
            /* @__PURE__ */ jsx(TableCell, { children: "N/A" }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-center", children: user.groupCount }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-center", children: /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "gap-1.5 text-success border-success", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3" }),
              "Ativo"
            ] }) }),
            /* @__PURE__ */ jsx(TableCell, { children: format(new Date(user.created_at), "dd/MM/yyyy") }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-center", children: /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "destructive",
                size: "sm",
                onClick: () => setDeleteUserId(user.id),
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }),
                  "Excluir"
                ]
              }
            ) })
          ] }, user.id)) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(AlertDialog, { open: !!deleteUserId, onOpenChange: () => setDeleteUserId(null), children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Confirmar exclusão" }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: "Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita e todos os dados do usuário serão removidos permanentemente." })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancelar" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleDeleteUser, className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", children: "Excluir" })
      ] })
    ] }) })
  ] });
};
export {
  UserManagement as default
};
