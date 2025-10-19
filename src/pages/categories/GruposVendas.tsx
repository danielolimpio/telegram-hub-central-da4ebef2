import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import { Users, TrendingUp, Star, Clock, ShoppingCart } from "lucide-react";

const GruposVendas = () => {
  const stats = [
    { icon: Users, value: "+12.500", label: "Grupos Ativos", color: "blue" as const },
    { icon: TrendingUp, value: "8.742", label: "Acessos Hoje", color: "green" as const },
    { icon: Star, value: "156", label: "Grupos Premium", color: "orange" as const },
    { icon: Clock, value: "23", label: "Novos Hoje", color: "gray" as const },
  ];

  const featuredGroups = [
    {
      title: "Vendas Diretas Brasil",
      description: "Exclusivo para vendas com regras claras e moderação ativa",
      members: 28450,
      avatar: "https://ui-avatars.com/api/?name=Vendas&background=0088cc&color=fff&size=128",
      category: "Vendas"
    },
    {
      title: "Marketplace Telegram",
      description: "Maior marketplace. Compre e venda com segurança",
      members: 45600,
      avatar: "https://ui-avatars.com/api/?name=Marketplace&background=0088cc&color=fff&size=128",
      category: "Vendas",
      isNew: true
    },
    {
      title: "Atacado & Varejo BR",
      description: "Vendas no atacado e varejo com preços competitivos",
      members: 19800,
      avatar: "https://ui-avatars.com/api/?name=Atacado&background=0088cc&color=fff&size=128",
      category: "Vendas"
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
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mr-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Grupos do Telegram de Vendas
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Encontre os melhores grupos para comprar e vender produtos
                  </p>
                </div>
              </div>
            </div>

            {/* Groups Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-telegram-blue mr-2" />
                Grupos em Destaque
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {featuredGroups.map((group, index) => (
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

export default GruposVendas;