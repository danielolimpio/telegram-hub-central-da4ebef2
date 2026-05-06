import { Send, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CategorySidebar = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  const allCategories = [
    { name: "Grupos Telegram Amizades", path: "/grupos-telegram-amizades" },
    { name: "Grupos Telegram Cinema", path: "/grupos-telegram-cinema" },
    { name: "Grupos Telegram Cursos", path: "/grupos-telegram-cursos" },
    { name: "Grupos Telegram Divulgação", path: "/grupos-telegram-divulgacao" },
    { name: "Grupos Telegram Encontros", path: "/grupos-telegram-encontros" },
    { name: "Grupos Telegram Esportes", path: "/grupos-telegram-esportes" },
    { name: "Grupos Telegram Estilo", path: "/grupos-telegram-estilo" },
    { name: "Grupos Telegram Estudos", path: "/grupos-telegram-estudos" },
    { name: "Grupos Telegram Figurinhas", path: "/grupos-telegram-figurinhas" },
    { name: "Grupos Telegram Games", path: "/grupos-telegram-games" },
    { name: "Grupos Telegram Investimentos", path: "/grupos-telegram-investimentos" },
    { name: "Grupos Telegram LGBTQIA", path: "/grupos-telegram-lgbtqia" },
    { name: "Grupos Telegram Liberais", path: "/grupos-telegram-liberais" },
    { name: "Grupos Telegram Livros", path: "/grupos-telegram-livros" },
    { name: "Grupos Telegram Músicas", path: "/grupos-telegram-musicas" },
    { name: "Grupos Telegram Namoros", path: "/grupos-telegram-namoros" },
    { name: "Grupos Telegram Notícias", path: "/grupos-telegram-noticias" },
    { name: "Grupos Telegram Oportunidades", path: "/grupos-telegram-oportunidades" },
    { name: "Grupos Telegram Pets", path: "/grupos-telegram-pets" },
    { name: "Grupos Telegram Promoções", path: "/grupos-telegram-promocoes" },
    { name: "Grupos Telegram Receitas", path: "/grupos-telegram-receitas" },
    { name: "Grupos Telegram Redes Sociais", path: "/grupos-telegram-redes-sociais" },
    { name: "Grupos Telegram Tecnologia", path: "/grupos-telegram-tecnologia" },
    { name: "Grupos Telegram Vendas", path: "/grupos-telegram-vendas" },
    { name: "Grupos Telegram Viagens", path: "/grupos-telegram-viagens" },
    { name: "Grupos Telegram Vídeos", path: "/grupos-telegram-videos" },
    { name: "Grupos Telegram Zoeira", path: "/grupos-telegram-zoeira" }
  ];

  const displayedCategories = showAllCategories ? allCategories : allCategories.slice(0, 8);

  return (
    <aside className="space-y-4 sm:space-y-6">
      {/* WhatsApp Groups CTA */}
      <a
        href="https://gruposdewhats.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl p-[2px] shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
        }}
      >
        <div
          className="relative flex items-center justify-center gap-3 rounded-[10px] px-4 py-3.5 sm:py-4 text-white font-semibold transition-transform duration-300 group-hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #1EBE5D 50%, #128C7E 100%)",
          }}
        >
          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"
            aria-hidden="true"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 sm:w-7 sm:h-7 fill-white drop-shadow-sm animate-pulse-soft"
            aria-hidden="true"
          >
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.687.244-1.05 0-.43-1.766-.99-2.063-1.146 zM16.151 0C7.467 0 .326 7.146.326 15.831c0 2.95.832 5.85 2.4 8.342L0 32l8.058-2.575a15.832 15.832 0 0 0 7.534 1.92c8.69 0 15.833-7.146 15.833-15.83C31.425 7.146 24.282 0 16.151 0zm0 28.255c-2.45 0-4.842-.66-6.93-1.892l-.487-.288-5 1.61 1.625-4.87-.32-.5a13.155 13.155 0 0 1-2.064-7.087c0-7.262 5.92-13.18 13.176-13.18 7.257 0 13.176 5.918 13.176 13.18 0 7.262-5.92 13.027-13.176 13.027z"/>
          </svg>
          <span className="text-sm sm:text-base tracking-wide">Grupos de WhatsApp</span>
        </div>
      </a>

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