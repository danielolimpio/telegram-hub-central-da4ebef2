import { useEffect, useState } from "react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import { Users, TrendingUp, Star, Clock, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Group = Tables<"groups">;

const GruposEncontros = () => {
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
          .eq("category", "Grupos do Telegram de Encontros")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setGroups(data || []);
      } catch (error) {
        console.error("Erro ao buscar grupos:", error);
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
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl mr-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Grupos do Telegram de Encontros
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Participe eventos sociais e conheça pessoas interessantes
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-telegram-blue mr-2" />
                Grupos de Encontros
              </h2>
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Carregando grupos...</p>
                </div>
              ) : groups.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Nenhum grupo encontrado nesta categoria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  {groups.map((group) => (
                    <GroupCard
                      key={group.id}
                      title={group.title}
                      description={group.description}
                      members={group.members || 0}
                      avatar={group.thumbnail_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(group.title)}&background=0088cc&color=fff&size=128`}
                      category={group.category}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-80 w-full">
            <CategorySidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GruposEncontros;
