import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, CheckCircle, Clock, Eye, Heart, Star, User } from "lucide-react";

const Dashboard = () => {
  const [userName] = useState("Usuário");

  const stats = [
    { icon: MessageSquare, label: "Total de Grupos", value: "25", color: "text-blue-500" },
    { icon: CheckCircle, label: "Aprovados", value: "25", color: "text-green-500" },
    { icon: Clock, label: "Pendentes", value: "0", color: "text-yellow-500" },
    { icon: Eye, label: "Total de Acessos", value: "1", color: "text-purple-500" },
    { icon: Heart, label: "Favoritos", value: "0", color: "text-red-500" },
  ];

  const recentGroups = [
    {
      title: "Círculo de Amizades Leves e Autenticas",
      category: "Grupos do Telegram Amizades",
      status: "Aprovado",
      views: 0,
      date: "18/10/2025",
      canPromote: false
    },
    {
      title: "ZEUS STORE",
      category: "Grupos do Telegram Cinema",
      status: "Aprovado",
      views: 0,
      date: "18/10/2025",
      canPromote: false
    },
    {
      title: "TADALAFLIX",
      category: "Grupos do Telegram Cinema",
      status: "Aprovado",
      views: 0,
      date: "18/10/2025",
      canPromote: false
    },
    {
      title: "Clube da Resenha",
      category: "Grupos do Telegram Zoeiras",
      status: "Aprovado",
      views: 0,
      date: "18/10/2025",
      canPromote: true
    },
    {
      title: "GS OFERTAS RELAMPAGOS",
      category: "Grupos do Telegram Oportunidades",
      status: "Aprovado",
      views: 0,
      date: "18/10/2025",
      canPromote: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Bem-vindo, {userName}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="groups">Meus Grupos</TabsTrigger>
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
            <TabsTrigger value="promote">Anunciar Grupo</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
          </TabsList>

          {/* Visão Geral */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Meus Grupos Recentes</CardTitle>
                <p className="text-sm text-muted-foreground">Últimos grupos que você enviou</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGroups.map((group, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{group.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{group.category}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {group.views} acessos
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {group.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-sm text-green-500">
                          <CheckCircle className="w-4 h-4" />
                          {group.status}
                        </span>
                        {group.canPromote && (
                          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600">
                            <Star className="w-4 h-4 mr-1" />
                            Anunciar
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Meus Grupos */}
          <TabsContent value="groups">
            <Card>
              <CardHeader>
                <CardTitle>Todos os Meus Grupos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Lista completa dos seus grupos...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favoritos */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Grupos Favoritos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Você ainda não tem grupos favoritos.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Anunciar Grupo */}
          <TabsContent value="promote">
            <Card>
              <CardHeader>
                <CardTitle>Anunciar Grupo</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Destaque seu grupo e alcance mais pessoas
                </p>
              </CardHeader>
              <CardContent>
                <Link to="/submit-group">
                  <Button className="bg-telegram-blue hover:bg-telegram-blue/90">
                    Enviar Novo Grupo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Perfil */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Meu Perfil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Configurações do perfil...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
