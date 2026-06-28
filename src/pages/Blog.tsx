import { BookOpen, Wrench, Briefcase, Users, MessageCircle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { mainPagesSEO, blogCategoriesSEO } from "@/config/seo";
import { articles as allArticles, getArticlesByCategory } from "@/data/articles";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const { categoria } = useParams();
  
  const categories = [
    { name: "Todos", slug: "", count: allArticles.length },
    { name: "Ferramentas", slug: "ferramentas", count: getArticlesByCategory("ferramentas").length },
    { name: "Negócios", slug: "negocios", count: getArticlesByCategory("negocios").length },
    { name: "Comunidade", slug: "comunidade", count: getArticlesByCategory("comunidade").length },
    { name: "Grupos", slug: "grupos", count: getArticlesByCategory("grupos").length },
    { name: "Privacidade", slug: "privacidade", count: getArticlesByCategory("privacidade").length },
  ];
  
  const activeCategory = categoria || "";

  const visibleArticles = activeCategory
    ? getArticlesByCategory(activeCategory)
    : allArticles;

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

  // Determine SEO based on category
  const getSEO = () => {
    if (activeCategory && blogCategoriesSEO[activeCategory]) {
      return blogCategoriesSEO[activeCategory];
    }
    return mainPagesSEO.blog;
  };

  const seo = getSEO();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
      />
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://gruposdotelegram.org/" },
        { name: "Blog", url: "https://gruposdotelegram.org/blog/" }
      ]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Grupos do Telegram</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dicas, tutoriais e estratégias para Telegram: como baixar Telegram para PC, criar canal do Telegram, usar Telegram Web e Telegram Desktop, e gerenciar telegrupos com segurança.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category.slug ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === category.slug ? "bg-telegram-blue hover:bg-telegram-blue/90" : ""}
                  asChild
                >
                  <Link to={category.slug ? `/blog/${category.slug}` : "/blog"}>
                    {getCategoryIcon(category.name)}
                    <span className="ml-1">{category.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </Link>
                </Button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="mb-16">
              {visibleArticles.length === 0 ? (
                <Card className="text-center py-16">
                  <CardContent>
                    <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-foreground mb-2">Nenhum artigo nesta categoria</h2>
                    <p className="text-muted-foreground">
                      Em breve traremos novos conteúdos sobre Telegram para você!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {visibleArticles.map((article) => (
                    <Link key={article.slug} to={article.path} className="group">
                      <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video overflow-hidden bg-muted">
                          <img
                            src={article.cover}
                            alt={article.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="pt-5">
                          <Badge className={`${getCategoryColor(article.category)} mb-3`}>
                            {getCategoryIcon(article.category)}
                            <span className="ml-1">{article.category}</span>
                          </Badge>
                          <h2 className="text-xl font-bold text-foreground leading-snug mb-2 group-hover:text-telegram-blue transition-colors line-clamp-3">
                            {article.title}
                          </h2>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <CalendarDays className="w-3.5 h-3.5" />
                                {article.publishedLabel}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {article.readingTime}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-telegram-blue group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
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