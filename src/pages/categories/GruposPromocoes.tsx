import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { CategorySchema, BreadcrumbSchema } from "@/components/JsonLd";
import { categorySEO } from "@/config/seo";
import { Users, TrendingUp, Star, Clock, Tag } from "lucide-react";

const GruposPromocoes = () => {

  const featuredGroups = [
    {
      title: "Promoções Relâmpago BR",
      description: "Melhores ofertas em tempo real. Descontos até 90%",
      members: 67890,
      avatar: "https://ui-avatars.com/api/?name=Promoções&background=0088cc&color=fff&size=128",
      category: "Promoções"
    },
    {
      title: "Cupons e Ofertas",
      description: "Cupons válidos e ofertas imperdíveis",
      members: 34560,
      avatar: "https://ui-avatars.com/api/?name=Cupons&background=0088cc&color=fff&size=128",
      category: "Promoções",
      isNew: true
    }
  ];

  const seo = categorySEO.promocoes;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead title={seo.title} description={seo.description} canonical={seo.canonical} />
      <CategorySchema name="Grupos do Telegram de Promoções" description={seo.description} url={`https://gruposdotelegram.org${seo.canonical}/`} />
      <BreadcrumbSchema items={[{ name: "Início", url: "https://gruposdotelegram.org/" }, { name: "Promoções", url: `https://gruposdotelegram.org${seo.canonical}/` }]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl mr-4">
                  <Tag className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Grupos do Telegram de Promoções
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Não perca nenhuma promoção! Ofertas, cupons e descontos exclusivos
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

export default GruposPromocoes;