import { Tag, Percent, Gift, Zap, Users, Eye, Heart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GroupCard from "@/components/GroupCard";

const GruposPromocoes = () => {
  const featuredGroups = [
    {
      id: 1,
      name: "Promoções Relâmpago BR",
      description: "As melhores ofertas e promoções em tempo real. Descontos de até 90% em produtos selecionados.",
      category: "Promoções",
      members: 67890,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=21"
    },
    {
      id: 2,
      name: "Cupons e Ofertas",
      description: "Cupons de desconto válidos e ofertas imperdíveis de lojas nacionais e internacionais.",
      category: "Promoções", 
      members: 34560,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=22"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl">
              <Tag className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Grupos de Telegram de Promoções
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não perca nenhuma promoção! Encontre os melhores grupos com ofertas, cupons 
            e descontos exclusivos para economizar nas suas compras.
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

export default GruposPromocoes;