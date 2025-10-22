import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Sparkles, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  const popularCategories = [
    { name: "Divulgação", count: 245, path: "/grupos-telegram-divulgacao" },
    { name: "Promoções", count: 189, path: "/grupos-telegram-promocoes" },
    { name: "Tecnologia", count: 156, path: "/grupos-telegram-tecnologia" },
    { name: "Games", count: 142, path: "/grupos-telegram-games" },
    { name: "Investimentos", count: 128, path: "/grupos-telegram-investimentos" }
  ];

  const blogTips = [
    { title: "Como encontrar grupos de qualidade", date: "22 Out 2025" },
    { title: "Dicas de segurança no Telegram", date: "20 Out 2025" },
    { title: "Melhores práticas para administradores", date: "18 Out 2025" },
    { title: "Como aumentar membros do seu grupo", date: "15 Out 2025" }
  ];

  return (
    <div className="space-y-6">
      {/* Categorias Populares */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <TrendingUp className="w-5 h-5 mr-2 text-telegram-blue" />
            Categorias Populares
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularCategories.map((category) => (
              <Link 
                key={category.name}
                to={category.path}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <span className="text-sm font-medium group-hover:text-telegram-blue transition-colors">
                  {category.name}
                </span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dicas do Blog */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Sparkles className="w-5 h-5 mr-2 text-telegram-blue" />
            Dicas do Blog
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blogTips.map((tip) => (
              <div key={tip.title} className="pb-3 border-b border-border last:border-0">
                <h4 className="text-sm font-medium mb-1 hover:text-telegram-blue transition-colors cursor-pointer">
                  {tip.title}
                </h4>
                <p className="text-xs text-muted-foreground">{tip.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Impulsione seu Grupo */}
      <Card className="bg-gradient-to-br from-telegram-blue/10 to-purple-500/10 border-telegram-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Megaphone className="w-5 h-5 mr-2 text-telegram-blue" />
            Impulsione seu Grupo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Destaque seu grupo e alcance milhares de usuários interessados!
          </p>
          <Link to="/impulsionar">
            <Button className="w-full bg-telegram-blue hover:bg-telegram-blue/90">
              Anunciar Agora
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
