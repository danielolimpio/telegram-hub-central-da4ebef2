import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, CheckCircle, Clock, Eye, Heart, Star, User, Send, Upload, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState("Usuário");
  const [telegramLink, setTelegramLink] = useState("");
  const [groupThumbnail, setGroupThumbnail] = useState("");

  const categories = [
    "Amizades", "Cinema", "Cursos", "Divulgação", "Encontros", "Esportes",
    "Estilo", "Estudos", "Figurinhas", "Games", "Investimentos", "LGBTQIA+",
    "Liberais", "Livros", "Músicas", "Namoros", "Notícias", "Oportunidades",
    "Pets", "Promoções", "Receitas", "Redes Sociais", "Tecnologia", "Vendas",
    "Viagens", "Vídeos", "Zoeira"
  ];

  const stats = [
    { icon: MessageSquare, label: "Total de Grupos", value: "25", color: "text-blue-500" },
    { icon: CheckCircle, label: "Aprovados", value: "25", color: "text-green-500" },
    { icon: Clock, label: "Pendentes", value: "0", color: "text-yellow-500" },
    { icon: Eye, label: "Total de Acessos", value: "1", color: "text-purple-500" },
    { icon: Heart, label: "Favoritos", value: "0", color: "text-red-500" },
  ];

  const recentGroups: any[] = [];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Logout */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Bem-vindo, {userName}</p>
          </div>
          <Button variant="outline" onClick={() => navigate('/')}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
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
            <TabsTrigger value="promote">Enviar Grupo</TabsTrigger>
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
                  {recentGroups.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Você ainda não enviou nenhum grupo.</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Clique na aba "Enviar Grupo" para adicionar seu primeiro grupo.
                      </p>
                    </div>
                  ) : (
                    recentGroups.map((group, index) => (
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
                    ))
                  )}
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

          {/* Enviar Grupo */}
          <TabsContent value="promote">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-telegram-blue" />
                  <span>Enviar Novo Grupo</span>
                </CardTitle>
                <CardDescription>
                  Preencha as informações do seu grupo do Telegram
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="groupName">Nome do Grupo *</Label>
                  <Input
                    id="groupName"
                    placeholder="Ex: Grupo de Marketing Digital"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="groupDescription">Descrição *</Label>
                  <Textarea
                    id="groupDescription"
                    placeholder="Descreva do que se trata seu grupo..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="members">Número de Membros</Label>
                    <Input
                      id="members"
                      type="number"
                      placeholder="Ex: 150"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telegramLink">Link do Telegram *</Label>
                  <Input
                    id="telegramLink"
                    placeholder="https://t.me/seugrupo"
                    value={telegramLink}
                    onChange={(e) => {
                      setTelegramLink(e.target.value);
                      // Gera uma thumbnail placeholder baseada no nome do grupo
                      // Em produção, isso seria substituído por uma chamada à API do Telegram
                      if (e.target.value.includes('t.me/')) {
                        const groupName = e.target.value.split('t.me/')[1] || 'Grupo';
                        setGroupThumbnail(`https://ui-avatars.com/api/?name=${groupName}&background=0088cc&color=fff&size=128`);
                      } else {
                        setGroupThumbnail("");
                      }
                    }}
                    required
                  />
                  {groupThumbnail && (
                    <div className="mt-4 flex items-center gap-3 p-3 border rounded-lg bg-muted/30">
                      <img 
                        src={groupThumbnail} 
                        alt="Preview do grupo" 
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-foreground">Preview da miniatura</p>
                        <p className="text-xs">Miniatura do grupo será carregada aqui</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adminContact">Contato do Administrador</Label>
                  <Input
                    id="adminContact"
                    placeholder="@seuusuario ou email@exemplo.com"
                  />
                </div>

                <Button variant="telegram" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Grupo
                </Button>
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
    </div>
  );
};

export default Dashboard;
