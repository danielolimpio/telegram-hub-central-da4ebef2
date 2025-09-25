import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Briefcase, 
  ShoppingBag, 
  Instagram, 
  Heart,
  Gamepad2,
  GraduationCap,
  Music,
  Camera,
  BookOpen
} from "lucide-react";

const CategorySidebar = () => {
  const categories = [
    { name: "Todos os Grupos", icon: Users, count: null, active: true },
    { name: "Grupo de Telegram Vendas", icon: DollarSign, count: null },
    { name: "Grupo de Telegram Renda Extra", icon: TrendingUp, count: null },
    { name: "Grupo de Telegram Marketing", icon: Briefcase, count: null },
    { name: "Grupo de Telegram Investimento", icon: TrendingUp, count: null },
    { name: "Grupo de Telegram Empreendedores", icon: Briefcase, count: null },
    { name: "Grupo de Telegram Afiliados", icon: Users, count: null },
    { name: "Grupo de Telegram Compra e Venda", icon: ShoppingBag, count: null },
    { name: "Grupo de Telegram Instagram", icon: Instagram, count: null },
    { name: "Grupo de Telegram OLX", icon: ShoppingBag, count: null },
    { name: "Grupo de Telegram Divulgação", icon: Users, count: null },
    { name: "Grupo de Telegram Seguidores Insta...", icon: Instagram, count: null },
    { name: "Grupo de Telegram Namoro", icon: Heart, count: null },
    { name: "Grupo de Telegram Games", icon: Gamepad2, count: null },
    { name: "Grupo de Telegram Educação", icon: GraduationCap, count: null },
    { name: "Grupo de Telegram Música", icon: Music, count: null },
    { name: "Grupo de Telegram Fotografia", icon: Camera, count: null },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Users className="w-5 h-5 text-telegram-blue" />
          <span>Categorias</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1 max-h-96 overflow-y-auto">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "telegram" : "ghost"}
              className={`w-full justify-start px-4 py-2 h-auto text-left ${
                category.active 
                  ? "bg-gradient-telegram text-white shadow-telegram/20" 
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
              size="sm"
            >
              <category.icon className="w-4 h-4 mr-3 flex-shrink-0" />
              <span className="text-sm truncate">{category.name}</span>
              {category.count && (
                <span className="ml-auto text-xs bg-muted rounded-full px-2 py-0.5">
                  {category.count}
                </span>
              )}
            </Button>
          ))}
        </div>
        
        <div className="p-4 border-t border-border mt-4">
          <Button variant="outline" className="w-full text-sm" size="sm">
            <BookOpen className="w-4 h-4 mr-2" />
            Ver Todas as Categorias
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategorySidebar;