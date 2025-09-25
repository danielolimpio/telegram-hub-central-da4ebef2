import { Megaphone, Users, TrendingUp, Share2, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GroupCard from "@/components/GroupCard";

const GruposDivulgacao = () => {
  // Dados de exemplo para grupos de divulgação
  const featuredGroups = [
    {
      id: 1,
      name: "Divulgação Premium Brasil",
      description: "O melhor espaço para divulgar produtos, serviços e conteúdo no Brasil. Regras claras e moderação ativa.",
      category: "Divulgação",
      members: 15420,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=1"
    },
    {
      id: 2,
      name: "Empreendedores Brasil",
      description: "Rede de networking para empreendedores. Divulgue seu negócio e conecte-se com outros empresários.",
      category: "Divulgação",
      members: 8950,
      isVerified: true,
      image: "https://picsum.photos/400/200?random=2"
    },
    {
      id: 3,
      name: "Marketing Digital BR",
      description: "Grupo focado em marketing digital, divulgação estratégica e crescimento de negócios online.",
      category: "Divulgação", 
      members: 12300,
      isVerified: false,
      image: "https://picsum.photos/400/200?random=3"
    }
  ];

  const categoryStats = [
    { label: "Total de Grupos", value: "2,341", icon: <Users className="w-5 h-5" /> },
    { label: "Membros Ativos", value: "+180K", icon: <Eye className="w-5 h-5" /> },
    { label: "Posts Diários", value: "15K+", icon: <Share2 className="w-5 h-5" /> },
    { label: "Taxa de Engajamento", value: "94%", icon: <Heart className="w-5 h-5" /> }
  ];

  const popularSubcategories = [
    "Produtos Físicos",
    "Serviços Digitais", 
    "Cursos Online",
    "E-commerce",
    "Marketing de Afiliados",
    "Dropshipping",
    "Freelancers",
    "Consultoria"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-telegram-blue to-purple-600 rounded-2xl">
              <Megaphone className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Grupos de Telegram de Divulgação
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Encontre os melhores grupos do Telegram para divulgar produtos, serviços e conteúdo. 
            Conecte-se com sua audiência e expanda seu alcance de forma eficiente.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSubcategories.map((subcat, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {subcat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categoryStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center text-telegram-blue mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sobre a Categoria */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-telegram-blue" />
              <span>Por que Grupos de Divulgação são Essenciais?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Vantagens para Empresas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-telegram-blue rounded-full mt-2"></div>
                    <span>Alcance direcionado para seu público-alvo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-telegram-blue rounded-full mt-2"></div>
                    <span>Custo-benefício superior a anúncios pagos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-telegram-blue rounded-full mt-2"></div>
                    <span>Interação direta com potenciais clientes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-telegram-blue rounded-full mt-2"></div>
                    <span>Feedback imediato sobre produtos e serviços</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Tipos de Divulgação</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                    <span>Produtos físicos e digitais</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                    <span>Serviços profissionais e consultoria</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                    <span>Conteúdo educacional e cursos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                    <span>Eventos e workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grupos em Destaque */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Grupos em Destaque</h2>
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

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-telegram-blue/10 to-purple-600/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Pronto para Expandir seu Alcance?
          </h2>
          <p className="text-muted-foreground mb-6">
            Junte-se aos melhores grupos de divulgação e aumente sua visibilidade no mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-telegram-blue hover:bg-telegram-blue/90">
              Ver Todos os Grupos
            </Button>
            <Button size="lg" variant="outline">
              Enviar Meu Grupo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GruposDivulgacao;