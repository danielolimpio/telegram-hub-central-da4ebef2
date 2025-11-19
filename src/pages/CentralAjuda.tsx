import { HelpCircle, MessageCircle, Mail, Phone, Search, BookOpen, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CentralAjuda = () => {
  const helpCategories = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Participação em Grupos",
      description: "Como encontrar e entrar em grupos do Telegram",
      articles: [
        "Como encontrar grupos do meu interesse",
        "Como entrar em um grupo do Telegram",
        "O que fazer se o link do grupo não funcionar",
        "Como sair de um grupo",
        "Regras básicas de participação"
      ]
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      title: "Envio de Grupos",
      description: "Como cadastrar seu grupo na plataforma",
      articles: [
        "Como enviar meu grupo para análise",
        "Requisitos para aprovação",
        "Tempo de análise e aprovação",
        "Como editar informações do grupo",
        "Como remover meu grupo da plataforma"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Segurança e Moderação",
      description: "Proteção e segurança na plataforma",
      articles: [
        "Como denunciar conteúdo inadequado",
        "Políticas de moderação",
        "Como me proteger de golpes",
        "Configurações de privacidade recomendadas",
        "O que fazer em caso de spam"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      title: "Recursos da Plataforma",
      description: "Como usar todos os recursos disponíveis",
      articles: [
        "Como usar a busca avançada",
        "Sistema de categorias",
        "Como favoritar grupos",
        "Filtros de pesquisa",
        "Notificações e alertas"
      ]
    }
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "Telegram",
      description: "Suporte rápido pelo Telegram",
      action: "Enviar Mensagem",
      href: "https://t.me/gruposdotelegram"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: "E-mail",
      description: "suporte@gruposdotelegram.com",
      action: "Enviar E-mail",
      href: "mailto:suporte@gruposdotelegram.com"
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-orange-500" />,
      title: "FAQ",
      description: "Perguntas mais frequentes",
      action: "Ver FAQ",
      href: "/faq"
    }
  ];

  const quickAnswers = [
    {
      question: "Como encontrar grupos específicos?",
      answer: "Use a barra de pesquisa ou navegue pelas categorias na sidebar. Você pode filtrar por popularidade, novos grupos ou buscar por palavras-chave."
    },
    {
      question: "Meu grupo foi rejeitado, o que fazer?",
      answer: "Verifique se seu grupo atende às regras da comunidade. Você pode reenviar após fazer os ajustes necessários ou entrar em contato conosco."
    },
    {
      question: "Como impulsionar meu grupo?",
      answer: "Acesse a página 'Impulsionar Grupos' para ver os planos disponíveis e dar destaque ao seu grupo na plataforma."
    },
    {
      question: "A plataforma é gratuita?",
      answer: "Sim, encontrar e enviar grupos é totalmente gratuito. Cobramos apenas pelos serviços premium de destaque."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Central de Ajuda</h1>
          <p className="text-xl text-muted-foreground">
            Encontre respostas para suas dúvidas sobre o Grupos do Telegram
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Pesquisar na central de ajuda..."
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* Quick Answers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Respostas Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickAnswers.map((qa, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{qa.question}</h3>
                  <p className="text-sm text-muted-foreground">{qa.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Categorias de Ajuda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {category.icon}
                    <span>{category.title}</span>
                  </CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <button className="text-left text-sm text-telegram-blue hover:underline">
                          {article}
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Precisa de Mais Ajuda?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{option.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={option.href} target={option.href.startsWith('http') ? '_blank' : '_self'}>
                      {option.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Status da Plataforma</span>
              <Badge className="bg-green-500">Operacional</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Website</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Online</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Moderação de Grupos</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Funcionando</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sistema de Busca</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Operacional</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Esta página foi útil?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                👍 Sim, foi útil
              </Button>
              <Button variant="outline" size="sm">
                👎 Não, preciso de mais ajuda
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default CentralAjuda;