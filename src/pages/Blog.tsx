import { BookOpen, Wrench, Briefcase, Users, MessageCircle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";

const Blog = () => {
  const categories = [
    { name: "Todos", count: 0, active: true },
    { name: "Ferramentas", count: 0, active: false },
    { name: "Negócios", count: 0, active: false },
    { name: "Comunidade", count: 0, active: false },
    { name: "Grupos", count: 0, active: false },
    { name: "Privacidade", count: 0, active: false }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Ferramentas": return <Wrench className="w-4 h-4" />;
      case "Negócios": return <Briefcase className="w-4 h-4" />;
      case "Comunidade": return <Users className="w-4 h-4" />;
      case "Grupos": return <MessageCircle className="w-4 h-4" />;
      case "Privacidade": return <Shield className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Ferramentas": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Negócios": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Comunidade": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Grupos": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Privacidade": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Grupos do Telegram</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dicas, tutoriais e estratégias para criar, gerenciar e fazer crescer seus grupos do Telegram
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className={category.active ? "bg-telegram-blue hover:bg-telegram-blue/90" : ""}
                >
                  {getCategoryIcon(category.name)}
                  <span className="ml-1">{category.name}</span>
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Empty State */}
            <div className="mb-16">
              <Card className="text-center py-16">
                <CardContent>
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">Nenhum artigo publicado</h2>
                  <p className="text-muted-foreground">
                    Em breve teremos conteúdos incríveis sobre Telegram para você!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Newsletter */}
            <Card className="bg-gradient-to-r from-telegram-blue/10 to-purple-500/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Assine Nossa Newsletter</CardTitle>
                <p className="text-muted-foreground">
                  Receba os melhores conteúdos sobre grupos do Telegram diretamente no seu e-mail
                </p>
              </CardHeader>
              <CardContent>
                <div className="max-w-md mx-auto">
                  <div className="flex space-x-2">
                    <Input placeholder="Seu melhor e-mail" />
                    <Button className="bg-telegram-blue hover:bg-telegram-blue/90">
                      Assinar
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Enviamos apenas conteúdo relevante. Sem spam.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <BlogSidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;