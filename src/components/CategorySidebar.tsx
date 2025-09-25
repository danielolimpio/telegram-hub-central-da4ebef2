import { Send, BookOpen, Zap, Star, Crown, Users, TrendingUp } from "lucide-react";

const CategorySidebar = () => {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <div className="bg-card rounded-lg p-6 border border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Send className="w-5 h-5 mr-2 text-telegram-blue" />
          Categorias Populares
        </h3>
        <div className="space-y-2">
          {[
            "Vendas & Marketing",
            "Renda Extra",
            "Investimentos",
            "Tecnologia", 
            "Educação & Cursos",
            "Namoro & Relacionamentos",
            "Games & Entretenimento",
            "Culinária & Receitas",
            "Música & Arte",
            "Esportes",
            "Estudos & Concursos"
          ].map((category) => (
            <a
              key={category}
              href={`/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'e')}`}
              className="block py-2 px-3 text-sm text-muted-foreground hover:text-telegram-blue hover:bg-muted/50 rounded transition-colors"
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* Dicas do Blog */}
      <div className="bg-card rounded-lg p-6 border border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-telegram-blue" />
          Dicas do Blog
        </h3>
        <div className="space-y-4">
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
            <article key={index} className="border-b border-border/30 pb-3 last:border-0">
              <h4 className="font-medium text-foreground text-sm mb-1 hover:text-telegram-blue cursor-pointer">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-1">{post.excerpt}</p>
              <span className="text-xs text-telegram-blue">{post.readTime} de leitura</span>
            </article>
          ))}
        </div>
        <div className="mt-4">
          <a href="/blog" className="text-sm text-telegram-blue hover:text-telegram-light-blue font-medium">
            Ver mais dicas →
          </a>
        </div>
      </div>

      {/* Anúncio Premium */}
      <div className="bg-gradient-to-br from-telegram-blue/10 to-telegram-light-blue/10 rounded-lg p-6 border border-telegram-blue/20 relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <Crown className="w-5 h-5 text-yellow-500" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-telegram-blue" />
          Impulse seu Grupo
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Destaque seu grupo no topo da lista e alcance milhares de novos membros!
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-muted-foreground">Posição prioritária</span>
          </div>
          <div className="flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-muted-foreground">+500% mais visualizações</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="w-4 h-4 text-telegram-blue mr-2" />
            <span className="text-muted-foreground">Selo Premium</span>
          </div>
        </div>
        <button className="w-full bg-gradient-telegram text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
          Impulsionar Grupo
        </button>
        <p className="text-xs text-muted-foreground text-center mt-2">
          A partir de R$ 29,90/mês
        </p>
      </div>

      {/* Stats */}
      <div className="bg-card rounded-lg p-6 border border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-4">Estatísticas</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Grupos Ativos</span>
            <span className="text-sm font-medium text-telegram-blue">12.500+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Membros Total</span>
            <span className="text-sm font-medium text-telegram-blue">2.8M+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Novos Hoje</span>
            <span className="text-sm font-medium text-green-500">+23</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;