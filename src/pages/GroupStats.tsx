import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  TrendingUp,
  Users,
  Clock,
  Calendar,
  Eye
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { format, subDays, startOfDay, endOfDay, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Group {
  id: string;
  title: string;
  slug: string;
  views: number;
}

interface ViewStats {
  total: number;
  today: number;
  week: number;
  month: number;
  dailyViews: { date: string; views: number }[];
  hourlyViews: { hour: number; views: number; label: string }[];
}

const GroupStats = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState<Group | null>(null);
  const [stats, setStats] = useState<ViewStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<"7" | "30" | "90">("30");

  useEffect(() => {
    const fetchGroupAndStats = async () => {
      if (!slug) return;

      try {
        // Check if user is authenticated and owns this group
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          toast.error("Você precisa estar logado para ver estatísticas");
          navigate('/auth');
          return;
        }

        // Fetch group
        const { data: groupData, error: groupError } = await supabase
          .from('groups')
          .select('id, title, slug, views, user_id')
          .eq('slug', slug)
          .single();

        if (groupError || !groupData) {
          toast.error("Grupo não encontrado");
          navigate('/dashboard');
          return;
        }

        // Check if user owns this group
        if (groupData.user_id !== user.id) {
          toast.error("Você não tem permissão para ver estas estatísticas");
          navigate('/dashboard');
          return;
        }

        setGroup(groupData);

        // Fetch view statistics
        const days = parseInt(period);
        const startDate = startOfDay(subDays(new Date(), days));
        
        const { data: viewsData, error: viewsError } = await supabase
          .from('group_views')
          .select('viewed_at')
          .eq('group_id', groupData.id)
          .gte('viewed_at', startDate.toISOString())
          .order('viewed_at', { ascending: true });

        if (viewsError) {
          console.error('Error fetching views:', viewsError);
          toast.error("Erro ao carregar estatísticas");
          return;
        }

        // Calculate statistics
        const now = new Date();
        const todayStart = startOfDay(now);
        const weekStart = subDays(todayStart, 7);
        const monthStart = subDays(todayStart, 30);

        const viewsToday = viewsData?.filter(v => 
          parseISO(v.viewed_at) >= todayStart
        ).length || 0;

        const viewsWeek = viewsData?.filter(v => 
          parseISO(v.viewed_at) >= weekStart
        ).length || 0;

        const viewsMonth = viewsData?.filter(v => 
          parseISO(v.viewed_at) >= monthStart
        ).length || 0;

        // Group by day
        const dailyMap = new Map<string, number>();
        for (let i = 0; i < days; i++) {
          const date = format(subDays(now, days - i - 1), 'yyyy-MM-dd');
          dailyMap.set(date, 0);
        }

        viewsData?.forEach(view => {
          const date = format(parseISO(view.viewed_at), 'yyyy-MM-dd');
          dailyMap.set(date, (dailyMap.get(date) || 0) + 1);
        });

        const dailyViews = Array.from(dailyMap.entries()).map(([date, views]) => ({
          date: format(parseISO(date), 'dd/MM', { locale: ptBR }),
          views
        }));

        // Group by hour
        const hourlyMap = new Map<number, number>();
        for (let i = 0; i < 24; i++) {
          hourlyMap.set(i, 0);
        }

        viewsData?.forEach(view => {
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
        console.error('Error:', error);
        toast.error("Erro ao carregar estatísticas");
      } finally {
        setLoading(false);
      }
    };

    fetchGroupAndStats();
  }, [slug, navigate, period]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">Carregando estatísticas...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!group || !stats) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">Estatísticas não encontradas</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Estatísticas: {group.title}
              </h1>
              <p className="text-muted-foreground">
                Acompanhe o desempenho do seu grupo
              </p>
            </div>
            
            <Tabs value={period} onValueChange={(v) => setPeriod(v as "7" | "30" | "90")}>
              <TabsList>
                <TabsTrigger value="7">7 dias</TabsTrigger>
                <TabsTrigger value="30">30 dias</TabsTrigger>
                <TabsTrigger value="90">90 dias</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total</p>
                  <p className="text-3xl font-bold text-foreground">{stats.total.toLocaleString('pt-BR')}</p>
                </div>
                <div className="p-3 bg-telegram-blue/10 rounded-lg">
                  <Eye className="w-6 h-6 text-telegram-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Hoje</p>
                  <p className="text-3xl font-bold text-foreground">{stats.today.toLocaleString('pt-BR')}</p>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Clock className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Esta Semana</p>
                  <p className="text-3xl font-bold text-foreground">{stats.week.toLocaleString('pt-BR')}</p>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Este Mês</p>
                  <p className="text-3xl font-bold text-foreground">{stats.month.toLocaleString('pt-BR')}</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Daily Views Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-telegram-blue" />
                Visualizações por Dia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={stats.dailyViews}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="views" 
                    stroke="hsl(var(--telegram-blue))" 
                    strokeWidth={2}
                    name="Visualizações"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Hourly Views Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-telegram-blue" />
                Horários de Pico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stats.hourlyViews}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="label" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="views" 
                    fill="hsl(var(--telegram-blue))"
                    name="Visualizações"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Insights */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-telegram-blue" />
              Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">💡</Badge>
                <div>
                  <p className="font-medium text-foreground mb-1">Horário de maior acesso</p>
                  <p className="text-sm text-muted-foreground">
                    {(() => {
                      const maxHour = stats.hourlyViews.reduce((max, curr) => 
                        curr.views > max.views ? curr : max
                      );
                      return `${maxHour.label} com ${maxHour.views} visualizações`;
                    })()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">📊</Badge>
                <div>
                  <p className="font-medium text-foreground mb-1">Média diária</p>
                  <p className="text-sm text-muted-foreground">
                    {Math.round(stats.dailyViews.reduce((sum, day) => sum + day.views, 0) / stats.dailyViews.length)} visualizações por dia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">🚀</Badge>
                <div>
                  <p className="font-medium text-foreground mb-1">Crescimento</p>
                  <p className="text-sm text-muted-foreground">
                    {stats.today > 0 ? `+${stats.today}` : stats.today} visualizações hoje
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default GroupStats;