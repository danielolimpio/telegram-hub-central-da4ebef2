import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { mainPagesSEO } from "@/config/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Map, 
  Home, 
  Users, 
  Shield, 
  HelpCircle, 
  BookOpen, 
  FileText, 
  Folder,
  ExternalLink,
  Megaphone,
  ShoppingCart,
  Tag,
  Briefcase,
  TrendingUp,
  Share2,
  BookMarked,
  GraduationCap,
  Video,
  Music,
  Heart,
  Flame,
  Users2,
  Newspaper,
  Trophy,
  Image,
  ChefHat,
  Plane,
  Cpu,
  Gamepad2,
  Film,
  PawPrint,
  Shirt,
  Laugh,
  Rainbow,
  Wrench,
  Building,
  Lock,
  Car,
  MapPin,
  ClipboardList,
  HardHat,
  CalendarDays,
  Crown,
  Coins,
  Quote,
  SmilePlus,
  Building2,
  Camera,
  Handshake,
  Church
} from "lucide-react";

const Sitemap = () => {
  const mainPages = [
    { name: "Página Inicial", url: "/", icon: Home },
    { name: "Todos os Grupos", url: "/todos-grupos", icon: Users },
    { name: "Como Funciona", url: "/como-funciona", icon: HelpCircle },
    { name: "Regras da Comunidade", url: "/regras", icon: Shield },
    { name: "Dicas de Segurança", url: "/seguranca", icon: Lock },
    { name: "Blog", url: "/blog", icon: BookOpen },
  ];

  const supportPages = [
    { name: "Central de Ajuda", url: "/ajuda", icon: HelpCircle },
    { name: "Reportar Problema", url: "/reportar", icon: Shield },
    { name: "Perguntas Frequentes (FAQ)", url: "/faq", icon: HelpCircle },
  ];

  const legalPages = [
    { name: "Política de Privacidade", url: "/privacidade", icon: Shield },
    { name: "Termos de Uso", url: "/termos", icon: FileText },
    { name: "Política de Cookies", url: "/cookies", icon: FileText },
  ];

  const groupCategories = [
    { name: "Grupos de Divulgação", url: "/grupos-telegram-divulgacao", icon: Megaphone },
    { name: "Grupos de Vendas", url: "/grupos-telegram-vendas", icon: ShoppingCart },
    { name: "Grupos de Promoções", url: "/grupos-telegram-promocoes", icon: Tag },
    { name: "Grupos de Oportunidades", url: "/grupos-telegram-oportunidades", icon: Briefcase },
    { name: "Grupos de Investimentos", url: "/grupos-telegram-investimentos", icon: TrendingUp },
    { name: "Grupos de Redes Sociais", url: "/grupos-telegram-redes-sociais", icon: Share2 },
    { name: "Grupos de Livros", url: "/grupos-telegram-livros", icon: BookMarked },
    { name: "Grupos de Estudos", url: "/grupos-telegram-estudos", icon: GraduationCap },
    { name: "Grupos de Cursos", url: "/grupos-telegram-cursos", icon: GraduationCap },
    { name: "Grupos de Vídeos", url: "/grupos-telegram-videos", icon: Video },
    { name: "Grupos de Músicas", url: "/grupos-telegram-musicas", icon: Music },
    { name: "Grupos de Amizades", url: "/grupos-telegram-amizades", icon: Heart },
    { name: "Grupos de Namoros", url: "/grupos-telegram-namoros", icon: Heart },
    { name: "Grupos de Encontros", url: "/grupos-telegram-encontros", icon: Flame },
    { name: "Grupos Liberais", url: "/grupos-telegram-liberais", icon: Users2 },
    { name: "Grupos de Notícias", url: "/grupos-telegram-noticias", icon: Newspaper },
    { name: "Grupos de Esportes", url: "/grupos-telegram-esportes", icon: Trophy },
    { name: "Grupos de Figurinhas", url: "/grupos-telegram-figurinhas", icon: Image },
    { name: "Grupos de Receitas", url: "/grupos-telegram-receitas", icon: ChefHat },
    { name: "Grupos de Viagens", url: "/grupos-telegram-viagens", icon: Plane },
    { name: "Grupos de Tecnologia", url: "/grupos-telegram-tecnologia", icon: Cpu },
    { name: "Grupos de Games", url: "/grupos-telegram-games", icon: Gamepad2 },
    { name: "Grupos de Cinema", url: "/grupos-telegram-cinema", icon: Film },
    { name: "Grupos de Pets", url: "/grupos-telegram-pets", icon: PawPrint },
    { name: "Grupos de Estilo", url: "/grupos-telegram-estilo", icon: Shirt },
    { name: "Grupos de Zoeira", url: "/grupos-telegram-zoeira", icon: Laugh },
    { name: "Grupos LGBTQIA+", url: "/grupos-telegram-lgbtqia", icon: Rainbow },
    { name: "Grupos de Carros", url: "/grupos-telegram-carros", icon: Car },
    { name: "Grupos de Cidades", url: "/grupos-telegram-cidades", icon: MapPin },
    { name: "Grupos de Concursos", url: "/grupos-telegram-concursos", icon: ClipboardList },
    { name: "Grupos de Empregos", url: "/grupos-telegram-empregos", icon: HardHat },
    { name: "Grupos de Eventos", url: "/grupos-telegram-eventos", icon: CalendarDays },
    { name: "Grupos de Fãs", url: "/grupos-telegram-fas", icon: Crown },
    { name: "Grupos de Finanças", url: "/grupos-telegram-financas", icon: Coins },
    { name: "Grupos de Frases", url: "/grupos-telegram-frases", icon: Quote },
    { name: "Grupos de Humor", url: "/grupos-telegram-humor", icon: SmilePlus },
    { name: "Grupos de Imobiliária", url: "/grupos-telegram-imobiliaria", icon: Building2 },
    { name: "Grupos de Memes", url: "/grupos-telegram-memes", icon: Camera },
    { name: "Grupos de Negócios", url: "/grupos-telegram-negocios", icon: Handshake },
    { name: "Grupos de Profissões", url: "/grupos-telegram-profissoes", icon: Wrench },
    { name: "Grupos de Religião", url: "/grupos-telegram-religiao", icon: Church },
  ];

  const blogCategories = [
    { name: "Ferramentas", url: "/blog/ferramentas", icon: Wrench },
    { name: "Negócios", url: "/blog/negocios", icon: Building },
    { name: "Comunidade", url: "/blog/comunidade", icon: Users },
    { name: "Grupos", url: "/blog/grupos", icon: Users2 },
    { name: "Privacidade", url: "/blog/privacidade", icon: Lock },
  ];

  const SitemapSection = ({ 
    title, 
    items, 
    icon: SectionIcon 
  }: { 
    title: string; 
    items: { name: string; url: string; icon: any }[]; 
    icon: any;
  }) => (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <SectionIcon className="w-5 h-5 text-telegram-blue" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <li key={index}>
                <a 
                  href={item.url}
                  className="flex items-center gap-2 text-muted-foreground hover:text-telegram-blue transition-colors group py-1"
                >
                  <ItemIcon className="w-4 h-4 text-muted-foreground/70 group-hover:text-telegram-blue transition-colors" />
                  <span className="flex-1">{item.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEOHead
        title={mainPagesSEO.sitemap.title}
        description={mainPagesSEO.sitemap.description}
        canonical={mainPagesSEO.sitemap.canonical}
      />
      <BreadcrumbSchema items={[{ name: "Início", url: "https://gruposdotelegram.org/" }, { name: "Mapa do Site", url: "https://gruposdotelegram.org/sitemap/" }]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-telegram mb-6">
            <Map className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mapa do Site
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navegue por todas as páginas e seções do Grupos do Telegram. 
            Encontre rapidamente o que você procura.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SitemapSection 
            title="Páginas Principais" 
            items={mainPages} 
            icon={Home} 
          />
          
          <SitemapSection 
            title="Suporte" 
            items={supportPages} 
            icon={HelpCircle} 
          />
          
          <SitemapSection 
            title="Páginas Legais" 
            items={legalPages} 
            icon={FileText} 
          />
          
          <SitemapSection 
            title="Categorias do Blog" 
            items={blogCategories} 
            icon={BookOpen} 
          />
        </div>

        {/* Categories Section - Full Width */}
        <div className="mt-8">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Folder className="w-5 h-5 text-telegram-blue" />
                Categorias de Grupos ({groupCategories.length} categorias)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {groupCategories.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <a 
                      key={index}
                      href={item.url}
                      className="flex items-center gap-2 text-muted-foreground hover:text-telegram-blue transition-colors group py-2 px-3 rounded-lg hover:bg-telegram-blue/5"
                    >
                      <ItemIcon className="w-4 h-4 text-muted-foreground/70 group-hover:text-telegram-blue transition-colors flex-shrink-0" />
                      <span className="text-sm truncate">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-card/80 border border-border/50 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-telegram-blue">{mainPages.length + supportPages.length + legalPages.length}</div>
              <div className="text-sm text-muted-foreground">Páginas</div>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-telegram-blue">{groupCategories.length}</div>
              <div className="text-sm text-muted-foreground">Categorias de Grupos</div>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-telegram-blue">{blogCategories.length}</div>
              <div className="text-sm text-muted-foreground">Categorias do Blog</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
