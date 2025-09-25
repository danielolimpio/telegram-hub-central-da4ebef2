import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List } from "lucide-react";

const AllGroups = () => {
  // Mock data com mais grupos
  const allGroups = [
    {
      title: "Grupo de Telegram Compra e Venda",
      description: "Marketplace para comprar e vender produtos com segurança",
      members: 2789,
      avatar: "https://ui-avatars.com/api/?name=Compras&background=0088cc&color=fff&size=128",
      category: "Compra e Venda"
    },
    {
      title: "Grupo de Telegram Renda Extra",
      description: "Oportunidades reais de renda extra e trabalhos online",
      members: 2134,
      avatar: "https://ui-avatars.com/api/?name=Renda&background=0088cc&color=fff&size=128",
      category: "Renda Extra",
      isNew: true
    },
    {
      title: "Grupo de Telegram Investimento",
      description: "Aprenda a investir e multiplique seu dinheiro",
      members: 1567,
      avatar: "https://ui-avatars.com/api/?name=Investir&background=0088cc&color=fff&size=128",
      category: "Investimento"
    },
    {
      title: "Grupo de Telegram Marketing Digital",
      description: "Estratégias de marketing digital e vendas online",
      members: 1834,
      avatar: "https://ui-avatars.com/api/?name=Marketing&background=0088cc&color=fff&size=128",
      category: "Marketing"
    },
    {
      title: "Grupo de Telegram Games",
      description: "Discussões sobre jogos, reviews e gameplay",
      members: 956,
      avatar: "https://ui-avatars.com/api/?name=Games&background=0088cc&color=fff&size=128",
      category: "Games"
    },
    {
      title: "Grupo de Telegram Tecnologia",
      description: "Últimas novidades do mundo tech e programação",
      members: 1420,
      avatar: "https://ui-avatars.com/api/?name=Tech&background=0088cc&color=fff&size=128",
      category: "Tecnologia",
      isNew: true
    },
    {
      title: "Grupo de Telegram Culinária",
      description: "Receitas, dicas culinárias e experiências gastronômicas",
      members: 876,
      avatar: "https://ui-avatars.com/api/?name=Food&background=0088cc&color=fff&size=128",
      category: "Culinária"
    },
    {
      title: "Grupo de Telegram Viagens",
      description: "Dicas de viagens, destinos e experiências pelo mundo",
      members: 1123,
      avatar: "https://ui-avatars.com/api/?name=Travel&background=0088cc&color=fff&size=128",
      category: "Viagens"
    },
    {
      title: "Grupo de Telegram Música",
      description: "Compartilhe suas músicas favoritas e descubra novos artistas",
      members: 789,
      avatar: "https://ui-avatars.com/api/?name=Music&background=0088cc&color=fff&size=128",
      category: "Música"
    },
    {
      title: "Grupo de Telegram Esportes",
      description: "Discussões sobre futebol, basquete e outros esportes",
      members: 1678,
      avatar: "https://ui-avatars.com/api/?name=Sports&background=0088cc&color=fff&size=128",
      category: "Esportes"
    },
    {
      title: "Grupo de Telegram Estudos",
      description: "Grupo para estudantes compartilharem materiais e dicas",
      members: 1345,
      avatar: "https://ui-avatars.com/api/?name=Study&background=0088cc&color=fff&size=128",
      category: "Estudos"
    },
    {
      title: "Grupo de Telegram Fotografia",
      description: "Compartilhe suas fotos e aprenda técnicas de fotografia",
      members: 567,
      avatar: "https://ui-avatars.com/api/?name=Photo&background=0088cc&color=fff&size=128",
      category: "Fotografia"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
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
              {allGroups.map((group, index) => (
                <GroupCard
                  key={index}
                  title={group.title}
                  description={group.description}
                  members={group.members}
                  avatar={group.avatar}
                  category={group.category}
                  isNew={group.isNew}
                />
              ))}
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