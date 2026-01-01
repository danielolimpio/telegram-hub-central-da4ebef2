import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  const blogCategories = [
    { name: "Ferramentas", count: 0, path: "/blog/ferramentas" },
    { name: "Negócios", count: 0, path: "/blog/negocios" },
    { name: "Comunidade", count: 0, path: "/blog/comunidade" },
    { name: "Grupos", count: 0, path: "/blog/grupos" },
    { name: "Privacidade", count: 0, path: "/blog/privacidade" }
  ];

  return (
    <div className="space-y-6">
      {/* Categorias do Blog */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <TrendingUp className="w-5 h-5 mr-2 text-telegram-blue" />
            Categorias do Blog
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {blogCategories.map((category) => (
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

      {/* Artigos Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Sparkles className="w-5 h-5 mr-2 text-telegram-blue" />
            Artigos Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Nenhum artigo publicado ainda.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
