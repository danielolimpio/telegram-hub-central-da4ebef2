import { useEffect, useState } from "react";
import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { CategorySchema, BreadcrumbSchema } from "@/components/JsonLd";
import { categorySEO } from "@/config/seo";
import { Users, TrendingUp, Star, Clock, Crown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Group = Tables<"groups">;

const GruposFas = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase
          .from("groups")
          .select("*")
          .eq("status", "approved")
          .eq("category", "Grupos do Telegram de Fãs e Fandoms")
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

  const seo = categorySEO["fas"];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead title={seo.title} description={seo.description} canonical={seo.canonical} />
      <CategorySchema name="Grupos do Telegram de Fãs e Fandoms" description={seo.description} url={`https://gruposdotelegram.org${seo.canonical}/`} />
      <BreadcrumbSchema items={[{ name: "Início", url: "https://gruposdotelegram.org/" }, { name: "Fãs", url: `https://gruposdotelegram.org${seo.canonical}/` }]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl mr-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Grupos do Telegram de Fãs e Fandoms
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Fandoms de artistas, séries, bandas e personagens favoritos
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-telegram-blue mr-2" />
                Grupos de Fãs
              </h2>
              {loading ? (
                <div className="text-center py-12"><p className="text-muted-foreground">Carregando grupos...</p></div>
              ) : groups.length === 0 ? (
                <div className="text-center py-12"><p className="text-muted-foreground">Nenhum grupo encontrado nesta categoria.</p></div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  {groups.map((group) => (
                    <GroupCard
                      key={group.id}
                      id={group.id}
                      slug={group.slug}
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

export default GruposFas;
