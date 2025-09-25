import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import { Users, TrendingUp, Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const stats = [
    { icon: Users, value: "+12.500", label: "Grupos Ativos", color: "blue" as const },
    { icon: TrendingUp, value: "8.742", label: "Acessos Hoje", color: "green" as const },
    { icon: Star, value: "156", label: "Grupos Premium", color: "orange" as const },
    { icon: Clock, value: "23", label: "Novos Hoje", color: "gray" as const },
  ];

  const featuredGroups = [
    {
      title: "Grupo de Telegram Compra e Venda",
      description: "Marketplace para comprar e vender produtos com segurança",
      members: 2789,
      avatar: "https://ui-avatars.com/api/?name=Compras&background=0088cc&color=fff&size=128",
      category: "Grupo de Telegram Compra e Venda"
    },
    {
      title: "Grupo de Telegram Renda Extra",
      description: "Oportunidades reais de renda extra e trabalhos online",
      members: 2134,
      avatar: "https://ui-avatars.com/api/?name=Renda&background=0088cc&color=fff&size=128",
      category: "Grupo de Telegram Renda Extra",
      isNew: true
    },
    {
      title: "Grupo de Telegram Investimento",
      description: "Aprenda a investir e multiplique seu dinheiro",
      members: 1567,
      avatar: "https://ui-avatars.com/api/?name=Investir&background=0088cc&color=fff&size=128",
      category: "Grupo de Telegram Investimento"
    },
    {
      title: "Grupo de Telegram Marketing Digital",
      description: "Estratégias de marketing digital e vendas online",
      members: 1834,
      avatar: "https://ui-avatars.com/api/?name=Marketing&background=0088cc&color=fff&size=128",
      category: "Grupo de Telegram Marketing"
    },
    {
      title: "Grupo de Telegram Vendas SP",
      description: "Melhores oportunidades de vendas e negócios em São Paulo",
      members: 1256,
      avatar: "https://ui-avatars.com/api/?name=Vendas&background=0088cc&color=fff&size=128",
      category: "Grupo de Telegram Vendas"
    },
    {
      title: "Grupo de Telegram Concurso",
      description: "Preparação para concursos públicos e dicas de estudo",
      members: 1876,
      avatar: "https://ui-avatars.com/api/?name=Concurso&background=0088cc&color=fff&size=128",
      category: "Grupo de Telegram Concurso",
      isNew: true
    },
    {
      title: "Grupo de Telegram Inglês",
      description: "Pratique inglês diariamente com falantes nativos",
      members: 1456,
      avatar: "https://ui-avatars.com/api/?name=English&background=0088cc&color=fff&size=128",
      category: "Grupo de Telegram Inglês"
    },
    {
      title: "Grupo de Telegram Namoro",
      description: "Encontre relacionamentos sérios e verdadeiro amor",
      members: 1234,
      avatar: "https://ui-avatars.com/api/?name=Namoro&background=0088cc&color=fff&size=128",
      category: "Grupo de Telegram Namoro"
    }
  ];

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
              {featuredGroups.slice(0, 8).map((group, index) => (
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
                {featuredGroups.filter(group => group.isNew).slice(0, 4).map((group, index) => (
                  <GroupCard
                    key={`recent-${index}`}
                    title={group.title}
                    description={group.description}
                    members={group.members}
                    avatar={group.avatar}
                    category={group.category}
                    isNew={group.isNew}
                  />
                ))}
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
                {featuredGroups.slice(0, 12).map((group, index) => (
                  <GroupCard
                    key={`all-${index}`}
                    title={group.title}
                    description={group.description}
                    members={group.members}
                    avatar={group.avatar}
                    category={group.category}
                    isNew={group.isNew}
                  />
                ))}
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