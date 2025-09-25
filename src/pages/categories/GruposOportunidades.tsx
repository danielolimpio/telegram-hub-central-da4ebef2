import { Briefcase, Target, TrendingUp, Star, Users, Eye, Heart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GroupCard from "@/components/GroupCard";

const GruposOportunidades = () => {
  const featuredGroups = [
    {
      id: 1,
      name: "Oportunidades de Negócio",
      description: "Descubra oportunidades reais de negócios, parcerias e investimentos. Networking profissional de qualidade.",
      category: "Oportunidades",
      members: 23450,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=31"
    },
    {
      id: 2,
      name: "Vagas de Emprego BR",
      description: "As melhores oportunidades de trabalho remoto e presencial. Vagas atualizadas diariamente.",
      category: "Oportunidades",
      members: 41200,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=32"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl">
              <Briefcase className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Grupos de Telegram de Oportunidades
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecte-se com as melhores oportunidades de carreira, negócios e investimentos. 
            Expanda sua rede profissional e encontre sua próxima grande chance.
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

export default GruposOportunidades;