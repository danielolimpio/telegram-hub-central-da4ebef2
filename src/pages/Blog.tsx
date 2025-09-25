import { BookOpen, Calendar, User, Tag, TrendingUp, MessageCircle, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Como Criar um Grupo do Telegram de Sucesso: Guia Completo 2025",
      excerpt: "Descubra as melhores estratégias para criar e administrar grupos do Telegram que realmente engajam e crescem. Dicas práticas testadas por milhares de administradores.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      author: "Equipe Grupos do Telegram",
      date: "15/01/2025",
      readTime: "8 min",
      category: "Tutorial",
      tags: ["Telegram", "Grupos", "Tutorial"],
      featured: true
    },
    {
      id: 2,
      title: "Por Que Grupos Premium Têm Mais Sucesso",
      excerpt: "Entenda os benefícios de impulsionar seu grupo e como isso pode aumentar significativamente o engajamento e crescimento da sua comunidade.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
      author: "João Santos",
      date: "12/01/2025",
      readTime: "6 min",
      category: "Premium",
      tags: ["Premium", "Crescimento", "Visibilidade"],
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "10 Dicas de Segurança para Administradores de Grupos",
      excerpt: "Mantenha seu grupo seguro com essas dicas essenciais de segurança e moderação.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      author: "Maria Silva",
      date: "10/01/2025",
      readTime: "5 min",
      category: "Segurança",
      tags: ["Segurança", "Moderação", "Dicas"]
    },
    {
      id: 4,
      title: "Como Aumentar o Engajamento no Seu Grupo",
      excerpt: "Estratégias comprovadas para manter seus membros ativos e engajados.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      author: "Pedro Costa",
      date: "08/01/2025",
      readTime: "7 min",
      category: "Engajamento",
      tags: ["Engajamento", "Estratégia", "Comunidade"]
    },
    {
      id: 5,
      title: "Tendências de Grupos do Telegram em 2025",
      excerpt: "O que esperar do ecossistema de grupos do Telegram neste ano.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      author: "Ana Santos",
      date: "05/01/2025",
      readTime: "4 min",
      category: "Tendências",
      tags: ["Tendências", "2025", "Análise"]
    },
    {
      id: 6,
      title: "Moderação Eficiente: Ferramentas e Técnicas",
      excerpt: "Aprenda a moderar grupos grandes de forma eficiente usando bots e técnicas avançadas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      author: "Carlos Ferreira",
      date: "03/01/2025",
      readTime: "9 min",
      category: "Moderação",
      tags: ["Moderação", "Bots", "Automação"]
    }
  ];

  const categories = [
    { name: "Todos", count: 24, active: true },
    { name: "Tutorial", count: 8, active: false },
    { name: "Dicas", count: 6, active: false },
    { name: "Premium", count: 4, active: false },
    { name: "Segurança", count: 5, active: false },
    { name: "Engajamento", count: 3, active: false },
    { name: "Estratégia", count: 4, active: false }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Tutorial": return <BookOpen className="w-4 h-4" />;
      case "Premium": return <Zap className="w-4 h-4" />;
      case "Segurança": return <Shield className="w-4 h-4" />;
      case "Engajamento": return <TrendingUp className="w-4 h-4" />;
      default: return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tutorial": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Premium": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Segurança": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Engajamento": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={category.active ? "bg-telegram-blue hover:bg-telegram-blue/90" : ""}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-red-500">Destaque</Badge>
                    <Badge 
                      variant="secondary" 
                      className={getCategoryColor(post.category)}
                    >
                      <span className="flex items-center gap-1">
                        {getCategoryIcon(post.category)}
                        {post.category}
                      </span>
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">Ler Artigo</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Todos os Artigos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}
                  >
                    <span className="flex items-center gap-1">
                      {getCategoryIcon(post.category)}
                      {post.category}
                    </span>
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">Ler Artigo</Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
    </div>
  );
};

export default Blog;