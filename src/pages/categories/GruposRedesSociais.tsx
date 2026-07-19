import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import CategoryFAQ from "@/components/CategoryFAQ";
import SEOHead from "@/components/SEOHead";
import { CategorySchema, BreadcrumbSchema } from "@/components/JsonLd";
import { categorySEO } from "@/config/seo";
import { Users, TrendingUp, Star, Clock, Share2 } from "lucide-react";

const GruposRedesSociais = () => {

  const featuredGroups: any[] = [];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead
        title={categorySEO["redes-sociais"].title}
        description={categorySEO["redes-sociais"].description}
        canonical={categorySEO["redes-sociais"].canonical}
      />
      <CategorySchema name="Grupos do Telegram de Redes Sociais" description={categorySEO["redes-sociais"].description} url={`https://gruposdotelegram.org${categorySEO["redes-sociais"].canonical}/`} />
      <BreadcrumbSchema items={[{ name: "Início", url: "https://gruposdotelegram.org/" }, { name: "Redes Sociais", url: `https://gruposdotelegram.org${categorySEO["redes-sociais"].canonical}/` }]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Grupos do Telegram de Redes Sociais
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Conecte-se e aprenda estratégias para redes sociais
                  </p>
                </div>
              </div>
            </div>

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
            <CategoryFAQ categoryKey="redes" />

          </div>

          <div className="lg:w-80 w-full">
            <CategorySidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GruposRedesSociais;
