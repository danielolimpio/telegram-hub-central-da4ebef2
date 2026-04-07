import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const queryClient = new QueryClient();
const App = () => /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
  /* @__PURE__ */ jsx(Toaster$1, {}),
  /* @__PURE__ */ jsx(Toaster, {}),
  /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background" }), children: /* @__PURE__ */ jsx(Outlet, {}) })
] }) });
const Index = lazy(() => import("./assets/Index-BEVw_8or.js"));
const AllGroups = lazy(() => import("./assets/AllGroups-D_XNOcJV.js"));
const NotFound = lazy(() => import("./assets/NotFound-BtrDh-vO.js"));
const ComoFunciona = lazy(() => import("./assets/ComoFunciona-Ci9a9NL8.js"));
const RegrasComunidade = lazy(() => import("./assets/RegrasComunitariade-B_YgtPXY.js"));
const DicasSeguranca = lazy(() => import("./assets/DicasSeguranca-DDpgE8wy.js"));
const CentralAjuda = lazy(() => import("./assets/CentralAjuda-B55gMdGR.js"));
const ReportarProblema = lazy(() => import("./assets/ReportarProblema-DMnOgKAI.js"));
const FAQ = lazy(() => import("./assets/FAQ-DC_0TeNH.js"));
const Blog = lazy(() => import("./assets/Blog-D1LuzgzV.js"));
const PoliticaPrivacidade = lazy(() => import("./assets/PoliticaPrivacidade-1IwfO5Wa.js"));
const TermosUso = lazy(() => import("./assets/TermosUso-M0QGWBNw.js"));
const PoliticaCookies = lazy(() => import("./assets/PoliticaCookies-Z0cRsVQ8.js"));
const Sitemap = lazy(() => import("./assets/Sitemap-rrPzlWue.js"));
const GruposDivulgacao = lazy(() => import("./assets/GruposDivulgacao-B5CpOp5i.js"));
const GruposVendas = lazy(() => import("./assets/GruposVendas-CdZezTB-.js"));
const GruposPromocoes = lazy(() => import("./assets/GruposPromocoes-B-gZqxPu.js"));
const GruposOportunidades = lazy(() => import("./assets/GruposOportunidades-CScuQZ1x.js"));
const GruposInvestimentos = lazy(() => import("./assets/GruposInvestimentos-Dnr_J4kR.js"));
const GruposRedesSociais = lazy(() => import("./assets/GruposRedesSociais-C45uDAkE.js"));
const GruposLivros = lazy(() => import("./assets/GruposLivros-ButQTEMi.js"));
const GruposEstudos = lazy(() => import("./assets/GruposEstudos-CaFhyiq4.js"));
const GruposCursos = lazy(() => import("./assets/GruposCursos-Cc_Dceat.js"));
const GruposVideos = lazy(() => import("./assets/GruposVideos-DDC4IMqq.js"));
const GruposMusicas = lazy(() => import("./assets/GruposMusicas-CpzLIgVp.js"));
const GruposAmizades = lazy(() => import("./assets/GruposAmizades-BNcaGQlb.js"));
const GruposNamoros = lazy(() => import("./assets/GruposNamoros-DnepN96T.js"));
const GruposEncontros = lazy(() => import("./assets/GruposEncontros-_fia1BY8.js"));
const GruposLiberais = lazy(() => import("./assets/GruposLiberais-Cw0EXeGr.js"));
const GruposNoticias = lazy(() => import("./assets/GruposNoticias-C7h9_IIh.js"));
const GruposEsportes = lazy(() => import("./assets/GruposEsportes-vANVpWRl.js"));
const GruposFigurinhas = lazy(() => import("./assets/GruposFigurinhas-C4VuJ_-c.js"));
const GruposReceitas = lazy(() => import("./assets/GruposReceitas-aUe6Tm6f.js"));
const GruposViagens = lazy(() => import("./assets/GruposViagens-Dp7zBu_H.js"));
const GruposTecnologia = lazy(() => import("./assets/GruposTecnologia-BifXDcQ0.js"));
const GruposGames = lazy(() => import("./assets/GruposGames-xu5U9WTm.js"));
const GruposCinema = lazy(() => import("./assets/GruposCinema-DfOMSZdY.js"));
const GruposPets = lazy(() => import("./assets/GruposPets-C1ObeNDV.js"));
const GruposEstilo = lazy(() => import("./assets/GruposEstilo-C_7vJhSu.js"));
const GruposZoeira = lazy(() => import("./assets/GruposZoeira-CyGMP10y.js"));
const GruposLGBTQIA = lazy(() => import("./assets/GruposLGBTQIA-CHEi-WAW.js"));
const Auth = lazy(() => import("./assets/Auth-D9Y9hxen.js"));
const Dashboard = lazy(() => import("./assets/Dashboard-DR_00qFf.js"));
const AdminDashboard = lazy(() => import("./assets/AdminDashboard-DrDkZw1f.js"));
const UserManagement = lazy(() => import("./assets/UserManagement-CVf3EwOU.js"));
const GroupDetails = lazy(() => import("./assets/GroupDetails-BkiZUsoE.js"));
const GroupStats = lazy(() => import("./assets/GroupStats-BHsAAkwJ.js"));
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(App, {}),
    children: [
      { index: true, element: /* @__PURE__ */ jsx(Index, {}) },
      { path: "all-groups", element: /* @__PURE__ */ jsx(AllGroups, {}) },
      { path: "como-funciona", element: /* @__PURE__ */ jsx(ComoFunciona, {}) },
      { path: "regras", element: /* @__PURE__ */ jsx(RegrasComunidade, {}) },
      { path: "seguranca", element: /* @__PURE__ */ jsx(DicasSeguranca, {}) },
      { path: "ajuda", element: /* @__PURE__ */ jsx(CentralAjuda, {}) },
      { path: "reportar", element: /* @__PURE__ */ jsx(ReportarProblema, {}) },
      { path: "faq", element: /* @__PURE__ */ jsx(FAQ, {}) },
      { path: "blog", element: /* @__PURE__ */ jsx(Blog, {}) },
      { path: "blog/ferramentas", element: /* @__PURE__ */ jsx(Blog, {}) },
      { path: "blog/negocios", element: /* @__PURE__ */ jsx(Blog, {}) },
      { path: "blog/comunidade", element: /* @__PURE__ */ jsx(Blog, {}) },
      { path: "blog/grupos", element: /* @__PURE__ */ jsx(Blog, {}) },
      { path: "blog/privacidade", element: /* @__PURE__ */ jsx(Blog, {}) },
      { path: "privacidade", element: /* @__PURE__ */ jsx(PoliticaPrivacidade, {}) },
      { path: "termos", element: /* @__PURE__ */ jsx(TermosUso, {}) },
      { path: "cookies", element: /* @__PURE__ */ jsx(PoliticaCookies, {}) },
      { path: "sitemap", element: /* @__PURE__ */ jsx(Sitemap, {}) },
      // Category pages - all pre-rendered
      { path: "grupos-telegram-divulgacao", element: /* @__PURE__ */ jsx(GruposDivulgacao, {}) },
      { path: "grupos-telegram-vendas", element: /* @__PURE__ */ jsx(GruposVendas, {}) },
      { path: "grupos-telegram-promocoes", element: /* @__PURE__ */ jsx(GruposPromocoes, {}) },
      { path: "grupos-telegram-oportunidades", element: /* @__PURE__ */ jsx(GruposOportunidades, {}) },
      { path: "grupos-telegram-investimentos", element: /* @__PURE__ */ jsx(GruposInvestimentos, {}) },
      { path: "grupos-telegram-redes-sociais", element: /* @__PURE__ */ jsx(GruposRedesSociais, {}) },
      { path: "grupos-telegram-livros", element: /* @__PURE__ */ jsx(GruposLivros, {}) },
      { path: "grupos-telegram-estudos", element: /* @__PURE__ */ jsx(GruposEstudos, {}) },
      { path: "grupos-telegram-cursos", element: /* @__PURE__ */ jsx(GruposCursos, {}) },
      { path: "grupos-telegram-videos", element: /* @__PURE__ */ jsx(GruposVideos, {}) },
      { path: "grupos-telegram-musicas", element: /* @__PURE__ */ jsx(GruposMusicas, {}) },
      { path: "grupos-telegram-amizades", element: /* @__PURE__ */ jsx(GruposAmizades, {}) },
      { path: "grupos-telegram-namoros", element: /* @__PURE__ */ jsx(GruposNamoros, {}) },
      { path: "grupos-telegram-encontros", element: /* @__PURE__ */ jsx(GruposEncontros, {}) },
      { path: "grupos-telegram-liberais", element: /* @__PURE__ */ jsx(GruposLiberais, {}) },
      { path: "grupos-telegram-noticias", element: /* @__PURE__ */ jsx(GruposNoticias, {}) },
      { path: "grupos-telegram-esportes", element: /* @__PURE__ */ jsx(GruposEsportes, {}) },
      { path: "grupos-telegram-figurinhas", element: /* @__PURE__ */ jsx(GruposFigurinhas, {}) },
      { path: "grupos-telegram-receitas", element: /* @__PURE__ */ jsx(GruposReceitas, {}) },
      { path: "grupos-telegram-viagens", element: /* @__PURE__ */ jsx(GruposViagens, {}) },
      { path: "grupos-telegram-tecnologia", element: /* @__PURE__ */ jsx(GruposTecnologia, {}) },
      { path: "grupos-telegram-games", element: /* @__PURE__ */ jsx(GruposGames, {}) },
      { path: "grupos-telegram-cinema", element: /* @__PURE__ */ jsx(GruposCinema, {}) },
      { path: "grupos-telegram-pets", element: /* @__PURE__ */ jsx(GruposPets, {}) },
      { path: "grupos-telegram-estilo", element: /* @__PURE__ */ jsx(GruposEstilo, {}) },
      { path: "grupos-telegram-zoeira", element: /* @__PURE__ */ jsx(GruposZoeira, {}) },
      { path: "grupos-telegram-lgbtqia", element: /* @__PURE__ */ jsx(GruposLGBTQIA, {}) },
      // Dynamic pages - excluded from SSG
      { path: "auth", element: /* @__PURE__ */ jsx(Auth, {}), entry: "client" },
      { path: "dashboard", element: /* @__PURE__ */ jsx(Dashboard, {}), entry: "client" },
      { path: "admin", element: /* @__PURE__ */ jsx(AdminDashboard, {}), entry: "client" },
      { path: "admin/users", element: /* @__PURE__ */ jsx(UserManagement, {}), entry: "client" },
      { path: "grupo/:slug", element: /* @__PURE__ */ jsx(GroupDetails, {}), entry: "client" },
      { path: "grupo/:slug/stats", element: /* @__PURE__ */ jsx(GroupStats, {}), entry: "client" },
      // Catch-all
      { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  cn as c,
  createRoot,
  useToast as u
};
