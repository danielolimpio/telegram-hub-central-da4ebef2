import { jsxs, jsx } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-BUhh-XFb.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-9cq_VkaS.js";
import { ArrowLeft, Eye, Clock, Calendar, TrendingUp, Users } from "lucide-react";
import { s as supabase } from "./client-Du4NYLEw.js";
import { toast } from "sonner";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, BarChart, Bar } from "recharts";
import { startOfDay, subDays, parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "@supabase/supabase-js";
const GroupStats = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState("30");
  useEffect(() => {
    const fetchGroupAndStats = async () => {
      if (!slug) return;
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          toast.error("Você precisa estar logado para ver estatísticas");
          navigate("/auth");
          return;
        }
        const { data: groupData, error: groupError } = await supabase.from("groups").select("id, title, slug, views, user_id").eq("slug", slug).single();
        if (groupError || !groupData) {
          toast.error("Grupo não encontrado");
          navigate("/dashboard");
          return;
        }
        if (groupData.user_id !== user.id) {
          toast.error("Você não tem permissão para ver estas estatísticas");
          navigate("/dashboard");
          return;
        }
        setGroup(groupData);
        const days = parseInt(period);
        const startDate = startOfDay(subDays(/* @__PURE__ */ new Date(), days));
        const { data: viewsData, error: viewsError } = await supabase.from("group_views").select("viewed_at").eq("group_id", groupData.id).gte("viewed_at", startDate.toISOString()).order("viewed_at", { ascending: true });
        if (viewsError) {
          console.error("Error fetching views:", viewsError);
          toast.error("Erro ao carregar estatísticas");
          return;
        }
        const now = /* @__PURE__ */ new Date();
        const todayStart = startOfDay(now);
        const weekStart = subDays(todayStart, 7);
        const monthStart = subDays(todayStart, 30);
        const viewsToday = (viewsData == null ? void 0 : viewsData.filter(
          (v) => parseISO(v.viewed_at) >= todayStart
        ).length) || 0;
        const viewsWeek = (viewsData == null ? void 0 : viewsData.filter(
          (v) => parseISO(v.viewed_at) >= weekStart
        ).length) || 0;
        const viewsMonth = (viewsData == null ? void 0 : viewsData.filter(
          (v) => parseISO(v.viewed_at) >= monthStart
        ).length) || 0;
        const dailyMap = /* @__PURE__ */ new Map();
        for (let i = 0; i < days; i++) {
          const date = format(subDays(now, days - i - 1), "yyyy-MM-dd");
          dailyMap.set(date, 0);
        }
        viewsData == null ? void 0 : viewsData.forEach((view) => {
          const date = format(parseISO(view.viewed_at), "yyyy-MM-dd");
          dailyMap.set(date, (dailyMap.get(date) || 0) + 1);
        });
        const dailyViews = Array.from(dailyMap.entries()).map(([date, views]) => ({
          date: format(parseISO(date), "dd/MM", { locale: ptBR }),
          views
        }));
        const hourlyMap = /* @__PURE__ */ new Map();
        for (let i = 0; i < 24; i++) {
          hourlyMap.set(i, 0);
        }
        viewsData == null ? void 0 : viewsData.forEach((view) => {
          const hour = parseISO(view.viewed_at).getHours();
          hourlyMap.set(hour, (hourlyMap.get(hour) || 0) + 1);
        });
        const hourlyViews = Array.from(hourlyMap.entries()).map(([hour, views]) => ({
          hour,
          views,
          label: `${hour}h`
        }));
        setStats({
          total: groupData.views,
          today: viewsToday,
          week: viewsWeek,
          month: viewsMonth,
          dailyViews,
          hourlyViews
        });
      } catch (error) {
        console.error("Error:", error);
        toast.error("Erro ao carregar estatísticas");
      } finally {
        setLoading(false);
      }
    };
    fetchGroupAndStats();
  }, [slug, navigate, period]);
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "max-w-7xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: "Carregando estatísticas..." }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  if (!group || !stats) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "max-w-7xl mx-auto px-4 py-8", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: "Estatísticas não encontradas" }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            onClick: () => navigate("/dashboard"),
            className: "mb-4",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
              "Voltar"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold text-foreground mb-2", children: [
              "Estatísticas: ",
              group.title
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Acompanhe o desempenho do seu grupo" })
          ] }),
          /* @__PURE__ */ jsx(Tabs, { value: period, onValueChange: (v) => setPeriod(v), children: /* @__PURE__ */ jsxs(TabsList, { children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "7", children: "7 dias" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "30", children: "30 dias" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "90", children: "90 dias" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
        /* @__PURE__ */ jsx(Card, { className: "border-border/50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Total" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-foreground", children: stats.total.toLocaleString("pt-BR") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-telegram-blue/10 rounded-lg", children: /* @__PURE__ */ jsx(Eye, { className: "w-6 h-6 text-telegram-blue" }) })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { className: "border-border/50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Hoje" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-foreground", children: stats.today.toLocaleString("pt-BR") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-green-500/10 rounded-lg", children: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 text-green-500" }) })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { className: "border-border/50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Esta Semana" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-foreground", children: stats.week.toLocaleString("pt-BR") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500/10 rounded-lg", children: /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-blue-500" }) })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { className: "border-border/50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Este Mês" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-foreground", children: stats.month.toLocaleString("pt-BR") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-500/10 rounded-lg", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-purple-500" }) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs(Card, { className: "border-border/50", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-telegram-blue" }),
            "Visualizações por Dia"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxs(LineChart, { data: stats.dailyViews, children: [
            /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
            /* @__PURE__ */ jsx(
              XAxis,
              {
                dataKey: "date",
                stroke: "hsl(var(--muted-foreground))",
                fontSize: 12
              }
            ),
            /* @__PURE__ */ jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 12 }),
            /* @__PURE__ */ jsx(
              Tooltip,
              {
                contentStyle: {
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }
              }
            ),
            /* @__PURE__ */ jsx(Legend, {}),
            /* @__PURE__ */ jsx(
              Line,
              {
                type: "monotone",
                dataKey: "views",
                stroke: "hsl(var(--telegram-blue))",
                strokeWidth: 2,
                name: "Visualizações"
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "border-border/50", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-telegram-blue" }),
            "Horários de Pico"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxs(BarChart, { data: stats.hourlyViews, children: [
            /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
            /* @__PURE__ */ jsx(
              XAxis,
              {
                dataKey: "label",
                stroke: "hsl(var(--muted-foreground))",
                fontSize: 12
              }
            ),
            /* @__PURE__ */ jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 12 }),
            /* @__PURE__ */ jsx(
              Tooltip,
              {
                contentStyle: {
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }
              }
            ),
            /* @__PURE__ */ jsx(Legend, {}),
            /* @__PURE__ */ jsx(
              Bar,
              {
                dataKey: "views",
                fill: "hsl(var(--telegram-blue))",
                name: "Visualizações",
                radius: [4, 4, 0, 0]
              }
            )
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "border-border/50", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-telegram-blue" }),
          "Insights"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mt-1", children: "💡" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground mb-1", children: "Horário de maior acesso" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: (() => {
                const maxHour = stats.hourlyViews.reduce(
                  (max, curr) => curr.views > max.views ? curr : max
                );
                return `${maxHour.label} com ${maxHour.views} visualizações`;
              })() })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mt-1", children: "📊" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground mb-1", children: "Média diária" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
                Math.round(stats.dailyViews.reduce((sum, day) => sum + day.views, 0) / stats.dailyViews.length),
                " visualizações por dia"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mt-1", children: "🚀" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground mb-1", children: "Crescimento" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
                stats.today > 0 ? `+${stats.today}` : stats.today,
                " visualizações hoje"
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  GroupStats as default
};
