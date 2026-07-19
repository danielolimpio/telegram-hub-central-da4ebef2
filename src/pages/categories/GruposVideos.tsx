import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import CategoryFAQ from "@/components/CategoryFAQ";
import SEOHead from "@/components/SEOHead";
import { CategorySchema, BreadcrumbSchema } from "@/components/JsonLd";
import { categorySEO } from "@/config/seo";
import { Users, TrendingUp, Star, Clock, Video } from "lucide-react";

const GruposVideos = () => {

  const featuredGroups: any[] = [];

  const seo = categorySEO.videos;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead title={seo.title} description={seo.description} canonical={seo.canonical} />
      <CategorySchema
        name="Grupos do Telegram de Vídeos"
        description={seo.description}
        url={`https://gruposdotelegram.org${seo.canonical}/`}
      />
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://gruposdotelegram.org/" },
        { name: "Vídeos", url: `https://gruposdotelegram.org${seo.canonical}/` }
      ]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl mr-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Grupos do Telegram de Vídeos
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Compartilhe e assista aos melhores vídeos
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
            <CategoryFAQ categoryKey="videos" />

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

export default GruposVideos;
