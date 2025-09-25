import { ShoppingCart, TrendingUp, DollarSign, Package, Users, Eye, Heart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GroupCard from "@/components/GroupCard";

const GruposVendas = () => {
  const featuredGroups = [
    {
      id: 1,
      name: "Vendas Diretas Brasil",
      description: "Grupo exclusivo para vendas de produtos variados com regras claras e moderação ativa. Apenas vendedores sérios.",
      category: "Vendas",
      members: 28450,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=11"
    },
    {
      id: 2,
      name: "Marketplace Telegram",
      description: "O maior marketplace do Telegram Brasil. Compre e venda com segurança. Vendedores verificados.",
      category: "Vendas",
      members: 45600,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=12"
    },
    {
      id: 3,
      name: "Atacado & Varejo BR",
      description: "Grupo focado em vendas no atacado e varejo. Produtos com preços competitivos e qualidade garantida.",
      category: "Vendas",
      members: 19800,
      isVerified: false,
      image: "https://picsum.photos/400/200?random=13"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Grupos de Telegram de Vendas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre os melhores grupos para comprar e vender produtos no Telegram. 
            Conecte-se com vendedores verificados e descubra ofertas exclusivas.
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

export default GruposVendas;