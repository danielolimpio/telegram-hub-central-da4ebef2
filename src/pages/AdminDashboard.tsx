import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield,
  XCircle,
  Star,
  Ban,
  UserCheck
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      // Check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        toast({
          title: "Acesso negado",
          description: "Você precisa estar logado para acessar esta página.",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }

      // Check if user has admin role using the security definer function
      const { data: hasAdminRole, error: roleError } = await supabase
        .rpc('is_admin', { _user_id: user.id });

      if (roleError) {
        console.error("Error checking admin role:", roleError);
        toast({
          title: "Erro ao verificar permissões",
          description: "Ocorreu um erro ao verificar suas permissões.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      if (!hasAdminRole) {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão para acessar o painel administrativo.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      console.error("Error in checkAdminAccess:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-12 h-12 text-telegram-blue animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const stats = [
    { icon: MessageSquare, label: "Total de Grupos", value: "1.247", color: "text-blue-500" },
    { icon: CheckCircle, label: "Aprovados", value: "1.180", color: "text-green-500" },
    { icon: Clock, label: "Pendentes", value: "47", color: "text-yellow-500" },
    { icon: Users, label: "Usuários Ativos", value: "3.542", color: "text-purple-500" },
  ];

  const pendingGroups = [
    {
      id: 1,
      title: "Grupo de Tecnologia Avançada",
      category: "Tecnologia",
      user: "João Silva",
      date: "22/10/2025",
      members: 150,
    },
    {
      id: 2,
      title: "Promoções Imperdíveis",
      category: "Promoções",
      user: "Maria Santos",
      date: "22/10/2025",
      members: 320,
    },
  ];

  const users = [
    {
      id: 1,
      name: "João Silva",
      email: "joao@email.com",
      groups: 15,
      status: "active",
      isPremium: true,
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@email.com",
      groups: 8,
      status: "active",
      isPremium: false,
    },
  ];

  const handleApprove = (groupId: number) => {
    toast({
      title: "Grupo aprovado!",
      description: "O grupo foi aprovado e está visível para todos.",
    });
  };

  const handleReject = (groupId: number) => {
    toast({
      title: "Grupo rejeitado",
      description: "O grupo foi rejeitado e o usuário foi notificado.",
      variant: "destructive",
    });
  };

  const handleBlockUser = (userId: number) => {
    toast({
      title: "Usuário bloqueado",
      description: "O usuário não poderá mais enviar grupos.",
      variant: "destructive",
    });
  };

  const handleTogglePremium = (userId: number) => {
    toast({
      title: "Status premium atualizado",
      description: "As configurações do usuário foram atualizadas.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Shield className="w-8 h-8 text-telegram-blue" />
              Painel do Administrador
            </h1>
            <p className="text-muted-foreground mt-1">Gerencie grupos e usuários da plataforma</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">Grupos Pendentes</TabsTrigger>
            <TabsTrigger value="all-groups">Todos os Grupos</TabsTrigger>
            <TabsTrigger value="users">Gerenciar Usuários</TabsTrigger>
          </TabsList>

          {/* Grupos Pendentes */}
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  Grupos Aguardando Aprovação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingGroups.map((group) => (
                    <div
                      key={group.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{group.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="outline">{group.category}</Badge>
                          <span>Por: {group.user}</span>
                          <span>{group.members} membros</span>
                          <span>{group.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-green-500 hover:bg-green-500/10"
                          onClick={() => handleApprove(group.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Aprovar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-500 hover:bg-red-500/10"
                          onClick={() => handleReject(group.id)}
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Rejeitar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Todos os Grupos */}
          <TabsContent value="all-groups">
            <Card>
              <CardHeader>
                <CardTitle>Todos os Grupos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Lista completa de todos os grupos da plataforma...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gerenciar Usuários */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Gerenciar Usuários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{user.name}</h3>
                          {user.isPremium && (
                            <Badge className="bg-yellow-500">
                              <Star className="w-3 h-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{user.email}</span>
                          <span>{user.groups} grupos</span>
                          <Badge variant={user.status === "active" ? "default" : "destructive"}>
                            {user.status === "active" ? "Ativo" : "Bloqueado"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className={user.isPremium ? "text-gray-500" : "text-yellow-500"}
                          onClick={() => handleTogglePremium(user.id)}
                        >
                          <Star className="w-4 h-4 mr-1" />
                          {user.isPremium ? "Desativar" : "Ativar"} Premium
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-500 hover:bg-red-500/10"
                          onClick={() => handleBlockUser(user.id)}
                        >
                          <Ban className="w-4 h-4 mr-1" />
                          Bloquear
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
