import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import { Users, TrendingUp, Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Group = Tables<"groups">;

const Index = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  
  const stats = [
    { icon: Users, value: "+12.500", label: "Grupos Ativos", color: "blue" as const },
    { icon: TrendingUp, value: "8.742", label: "Acessos Hoje", color: "green" as const },
    { icon: Star, value: "156", label: "Grupos Premium", color: "orange" as const },
    { icon: Clock, value: "23", label: "Novos Hoje", color: "gray" as const },
  ];

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase
          .from("groups")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        setGroups(data || []);
      } catch (error) {
        console.error("Error fetching groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-telegram-blue" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Grupos Mais Acessados</h2>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-telegram-blue hover:text-telegram-light-blue self-start sm:self-auto"
                onClick={() => navigate('/all-groups')}
              >
                Ver todos
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </Button>
            </div>

            {/* Groups Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {loading ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">Carregando grupos...</p>
                </div>
              ) : groups.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">Nenhum grupo disponível no momento.</p>
                </div>
              ) : (
                groups.slice(0, 8).map((group) => (
                  <GroupCard
                    key={group.id}
                    title={group.title}
                    description={group.description}
                    members={group.members || 0}
                    avatar={group.thumbnail_url}
                    category={group.category}
                    telegramLink={group.telegram_link}
                    slug={group.slug}
                  />
                ))
              )}
            </div>

            {/* Grupos Mais Recentes */}
            <div className="mt-12 sm:mt-16">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-telegram-blue" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Grupos Mais Recentes</h2>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-telegram-blue hover:text-telegram-light-blue self-start sm:self-auto"
                  onClick={() => navigate('/all-groups')}
                >
                  Ver todos
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {loading ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Carregando grupos...</p>
                  </div>
                ) : groups.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Nenhum grupo recente disponível.</p>
                  </div>
                ) : (
                  groups.slice(0, 4).map((group) => (
                    <GroupCard
                      key={`recent-${group.id}`}
                      title={group.title}
                      description={group.description}
                      members={group.members || 0}
                      avatar={group.thumbnail_url}
                      category={group.category}
                      telegramLink={group.telegram_link}
                      slug={group.slug}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Todos os Grupos */}
            <div className="mt-12 sm:mt-16">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-telegram-blue" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Todos os Grupos</h2>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-telegram-blue hover:text-telegram-light-blue self-start sm:self-auto"
                  onClick={() => navigate('/all-groups')}
                >
                  Ver todos
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {loading ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Carregando grupos...</p>
                  </div>
                ) : groups.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Nenhum grupo disponível.</p>
                  </div>
                ) : (
                  groups.slice(0, 12).map((group) => (
                    <GroupCard
                      key={`all-${group.id}`}
                      title={group.title}
                      description={group.description}
                      members={group.members || 0}
                      avatar={group.thumbnail_url}
                      category={group.category}
                      telegramLink={group.telegram_link}
                      slug={group.slug}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 w-full">
            <CategorySidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;