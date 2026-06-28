import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { getRecentArticles, getArticlesByCategory } from "@/data/articles";

const BlogSidebar = () => {
  const blogCategories = [
    { name: "Ferramentas", slug: "ferramentas", path: "/blog/ferramentas" },
    { name: "Negócios", slug: "negocios", path: "/blog/negocios" },
    { name: "Comunidade", slug: "comunidade", path: "/blog/comunidade" },
    { name: "Grupos", slug: "grupos", path: "/blog/grupos" },
    { name: "Privacidade", slug: "privacidade", path: "/blog/privacidade" }
  ].map((c) => ({ ...c, count: getArticlesByCategory(c.slug).length }));
  const recent = getRecentArticles(3);

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
          {recent.length === 0 ? (
            <p className="text-sm text-muted-foreground">Nenhum artigo publicado ainda.</p>
          ) : (
            <ul className="space-y-4">
              {recent.map((a) => (
                <li key={a.slug}>
                  <Link to={a.path} className="flex gap-3 group">
                    <img
                      src={a.cover}
                      alt={a.title}
                      loading="lazy"
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0 ring-1 ring-border"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug line-clamp-3 group-hover:text-telegram-blue transition-colors">
                        {a.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{a.publishedLabel}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
