import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { mainPagesSEO } from "@/config/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Group = Tables<"groups">;

const AllGroups = () => {
  const [allGroups, setAllGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase
          .from("groups")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        setAllGroups(data || []);
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
      <SEOHead
        title={mainPagesSEO.allGroups.title}
        description={mainPagesSEO.allGroups.description}
        canonical={mainPagesSEO.allGroups.canonical}
      />
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://gruposdotelegram.org/" },
        { name: "Todos os Grupos", url: "https://gruposdotelegram.org/todos-grupos/" }
      ]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Todos os Grupos</h1>
          <p className="text-muted-foreground">Explore nossa coleção completa de grupos do Telegram</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Filters and Search */}
            <div className="bg-card rounded-lg p-6 mb-6 border border-border/50">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Buscar grupos..."
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as categorias</SelectItem>
                      <SelectItem value="vendas">Vendas</SelectItem>
                      <SelectItem value="renda">Renda Extra</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="investimento">Investimento</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="members">Mais membros</SelectItem>
                      <SelectItem value="recent">Mais recentes</SelectItem>
                      <SelectItem value="name">Nome A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="icon">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* View Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-muted-foreground">
                Mostrando {allGroups.length} grupos
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Grid className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {loading ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">Carregando grupos...</p>
                </div>
              ) : allGroups.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">Nenhum grupo cadastrado ainda. Seja o primeiro a enviar seu grupo!</p>
                </div>
              ) : (
                allGroups.map((group) => (
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

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>Anterior</Button>
                <Button variant="telegram">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Próximo</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <CategorySidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllGroups;