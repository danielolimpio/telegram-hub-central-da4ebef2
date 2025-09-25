import { TrendingUp, DollarSign, BarChart3, PieChart } from "lucide-react";
import GroupCard from "@/components/GroupCard";

const GruposInvestimentos = () => {
  const featuredGroups = [
    {
      id: 1,
      name: "Investimentos Brasil",
      description: "Dicas e estratégias de investimento para iniciantes e experientes. Educação financeira de qualidade.",
      category: "Investimentos",
      members: 35670,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=41"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Grupos de Telegram de Investimentos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprenda a investir e multiplicar seu patrimônio com os melhores grupos de educação financeira e análise de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGroups.map((group) => (
            <GroupCard
              key={group.id}
              title={group.name}
              description={group.description}
              members={group.members}
              avatar={group.image}
              category={group.category}
              isNew={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GruposInvestimentos;