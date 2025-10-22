import { Send, BookOpen, Zap, Star, Crown, Users, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CategorySidebar = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  const allCategories = [
    { name: "Grupos Telegram Divulgação", path: "/grupos-telegram-divulgacao" },
    { name: "Grupos Telegram Vendas", path: "/grupos-telegram-vendas" },
    { name: "Grupos Telegram Promoções", path: "/grupos-telegram-promocoes" },
    { name: "Grupos Telegram Oportunidades", path: "/grupos-telegram-oportunidades" },
    { name: "Grupos Telegram Investimentos", path: "/grupos-telegram-investimentos" },
    { name: "Grupos Telegram Redes Sociais", path: "/grupos-telegram-redes-sociais" },
    { name: "Grupos Telegram Livros", path: "/grupos-telegram-livros" },
    { name: "Grupos Telegram Estudos", path: "/grupos-telegram-estudos" },
    { name: "Grupos Telegram Cursos", path: "/grupos-telegram-cursos" },
    { name: "Grupos Telegram Vídeos", path: "/grupos-telegram-videos" },
    { name: "Grupos Telegram Músicas", path: "/grupos-telegram-musicas" },
    { name: "Grupos Telegram Amizades", path: "/grupos-telegram-amizades" },
    { name: "Grupos Telegram Namoros", path: "/grupos-telegram-namoros" },
    { name: "Grupos Telegram Encontros", path: "/grupos-telegram-encontros" },
    { name: "Grupos Telegram Liberais", path: "/grupos-telegram-liberais" },
    { name: "Grupos Telegram Notícias", path: "/grupos-telegram-noticias" },
    { name: "Grupos Telegram Esportes", path: "/grupos-telegram-esportes" },
    { name: "Grupos Telegram Figurinhas", path: "/grupos-telegram-figurinhas" },
    { name: "Grupos Telegram Receitas", path: "/grupos-telegram-receitas" },
    { name: "Grupos Telegram Viagens", path: "/grupos-telegram-viagens" },
    { name: "Grupos Telegram Tecnologia", path: "/grupos-telegram-tecnologia" },
    { name: "Grupos Telegram Games", path: "/grupos-telegram-games" },
    { name: "Grupos Telegram Cinema", path: "/grupos-telegram-cinema" },
    { name: "Grupos Telegram Pets", path: "/grupos-telegram-pets" },
    { name: "Grupos Telegram Estilo", path: "/grupos-telegram-estilo" },
    { name: "Grupos Telegram Zoeira", path: "/grupos-telegram-zoeira" },
    { name: "Grupos Telegram LGBTQIA", path: "/grupos-telegram-lgbtqia" }
  ];

  const displayedCategories = showAllCategories ? allCategories : allCategories.slice(0, 8);

  return (
    <aside className="space-y-4 sm:space-y-6">
      {/* Categories */}
      <div className="bg-card rounded-lg p-4 sm:p-6 border border-border/50">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
          <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-telegram-blue" />
          Categorias Populares
        </h3>
        <div className="space-y-1 sm:space-y-2">
          {displayedCategories.map((category) => (
            <a
              key={category.name}
              href={category.path}
              className="block py-2 px-2 sm:px-3 text-xs sm:text-sm text-muted-foreground hover:text-telegram-blue hover:bg-muted/50 rounded transition-colors truncate"
              title={category.name}
            >
              {category.name}
            </a>
          ))}
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="w-full flex items-center justify-center py-2 px-2 sm:px-3 text-xs sm:text-sm text-telegram-blue hover:bg-muted/50 rounded transition-colors font-medium"
          >
            {showAllCategories ? (
              <>
                Ver menos <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </>
            ) : (
              <>
                Ver mais categorias <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Dicas do Blog */}
      <div className="bg-card rounded-lg p-4 sm:p-6 border border-border/50">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-telegram-blue" />
          Dicas do Blog
        </h3>
        <div className="space-y-3 sm:space-y-4">
          {[
            {
              title: "Como criar grupos seguros no Telegram",
              excerpt: "Dicas essenciais para manter seu grupo protegido",
              readTime: "3 min"
            },
            {
              title: "10 regras fundamentais para comunidades",
              excerpt: "Estabeleça diretrizes claras para seu grupo",
              readTime: "5 min"
            },
            {
              title: "Estratégias de crescimento orgânico",
              excerpt: "Aumente seus membros de forma natural",
              readTime: "4 min"
            }
          ].map((post, index) => (
            <article key={index} className="border-b border-border/30 pb-2 sm:pb-3 last:border-0">
              <h4 className="font-medium text-foreground text-xs sm:text-sm mb-1 hover:text-telegram-blue cursor-pointer line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-1 line-clamp-2">{post.excerpt}</p>
              <span className="text-xs text-telegram-blue">{post.readTime} de leitura</span>
            </article>
          ))}
        </div>
        <div className="mt-3 sm:mt-4">
          <a href="/blog" className="text-xs sm:text-sm text-telegram-blue hover:text-telegram-light-blue font-medium">
            Ver mais dicas →
          </a>
        </div>
      </div>

      {/* Anúncio Premium */}
      <div className="bg-gradient-to-br from-telegram-blue/10 to-telegram-light-blue/10 rounded-lg p-4 sm:p-6 border border-telegram-blue/20 relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center">
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-telegram-blue" />
          Impulse seu Grupo
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          Destaque seu grupo no topo da lista e alcance milhares de novos membros!
        </p>
        <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
          <div className="flex items-center text-xs sm:text-sm">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mr-2" />
            <span className="text-muted-foreground">Posição prioritária</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
            <span className="text-muted-foreground">+500% mais visualizações</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-telegram-blue mr-2" />
            <span className="text-muted-foreground">Selo Premium</span>
          </div>
        </div>
        <button className="w-full bg-gradient-telegram text-white py-2 px-3 sm:px-4 rounded-lg font-medium hover:shadow-lg transition-all text-xs sm:text-sm">
          Impulsionar Grupo
        </button>
        <p className="text-xs text-muted-foreground text-center mt-2">
          A partir de R$ 29,90/mês
        </p>
      </div>

      {/* Stats */}
      <div className="bg-card rounded-lg p-4 sm:p-6 border border-border/50">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Estatísticas</h3>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex justify-between">
            <span className="text-xs sm:text-sm text-muted-foreground">Grupos Ativos</span>
            <span className="text-xs sm:text-sm font-medium text-telegram-blue">12.500+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs sm:text-sm text-muted-foreground">Membros Total</span>
            <span className="text-xs sm:text-sm font-medium text-telegram-blue">2.8M+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs sm:text-sm text-muted-foreground">Novos Hoje</span>
            <span className="text-xs sm:text-sm font-medium text-green-500">+23</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;