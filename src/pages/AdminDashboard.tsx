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
  UserCheck,
  Check,
  X,
  RefreshCw,
  Edit,
  Trash2,
  Image
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Group = Tables<"groups">;

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0
  });

  useEffect(() => {
    checkAdminAccess();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      fetchGroups();
    }
  }, [isAdmin]);

  const fetchGroups = async () => {
    try {
      const { data, error } = await supabase
        .from("groups")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      
      setGroups(data || []);
      
      // Calculate stats
      const total = data?.length || 0;
      const approved = data?.filter(g => g.status === 'approved').length || 0;
      const pending = data?.filter(g => g.status === 'pending').length || 0;
      const rejected = data?.filter(g => g.status === 'rejected').length || 0;
      
      setStats({ total, approved, pending, rejected });
    } catch (error) {
      console.error("Error fetching groups:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os grupos.",
        variant: "destructive",
      });
    }
  };

  const handleApproveGroup = async (groupId: string) => {
    try {
      const { error } = await supabase
        .from("groups")
        .update({ status: "approved" })
        .eq("id", groupId);
      
      if (error) throw error;
      
      toast({
        title: "Grupo aprovado",
        description: "O grupo foi aprovado com sucesso.",
      });
      
      fetchGroups();
    } catch (error) {
      console.error("Error approving group:", error);
      toast({
        title: "Erro",
        description: "Não foi possível aprovar o grupo.",
        variant: "destructive",
      });
    }
  };

  const handleRejectGroup = async (groupId: string) => {
    try {
      const { error } = await supabase
        .from("groups")
        .update({ status: "rejected" })
        .eq("id", groupId);
      
      if (error) throw error;
      
      toast({
        title: "Grupo rejeitado",
        description: "O grupo foi rejeitado.",
      });
      
      fetchGroups();
    } catch (error) {
      console.error("Error rejecting group:", error);
      toast({
        title: "Erro",
        description: "Não foi possível rejeitar o grupo.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteGroup = async (groupId: string) => {
    if (!confirm("Tem certeza que deseja excluir este grupo? Esta ação não pode ser desfeita.")) {
      return;
    }

    try {
      const { error } = await supabase
        .from("groups")
        .delete()
        .eq("id", groupId);
      
      if (error) throw error;
      
      toast({
        title: "Grupo excluído",
        description: "O grupo foi excluído com sucesso.",
      });
      
      fetchGroups();
    } catch (error) {
      console.error("Error deleting group:", error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir o grupo.",
        variant: "destructive",
      });
    }
  };

  const handleRefreshThumbnail = async (groupId: string, telegramLink: string) => {
    setLoading(true);
    
    try {
      toast({
        title: "Atualizando miniatura...",
        description: "Buscando nova imagem do Telegram.",
      });

      const { data, error } = await supabase.functions.invoke('fetch-telegram-thumbnail', {
        body: { link: telegramLink }
      });

      if (error) throw error;

      const thumbnailUrl = data?.thumbnailUrl;

      const { error: updateError } = await supabase
        .from("groups")
        .update({ thumbnail_url: thumbnailUrl })
        .eq("id", groupId);

      if (updateError) throw updateError;

      toast({
        title: "Miniatura atualizada!",
        description: "A imagem do grupo foi atualizada com sucesso.",
      });

      fetchGroups();
    } catch (error) {
      console.error("Error refreshing thumbnail:", error);
      toast({
        title: "Erro ao atualizar miniatura",
        description: "Não foi possível atualizar a imagem. Verifique o link do Telegram.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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

  const statsCards = [
    { icon: MessageSquare, label: "Total de Grupos", value: stats.total.toString(), color: "text-blue-500" },
    { icon: CheckCircle, label: "Aprovados", value: stats.approved.toString(), color: "text-green-500" },
    { icon: Clock, label: "Pendentes", value: stats.pending.toString(), color: "text-yellow-500" },
    { icon: XCircle, label: "Rejeitados", value: stats.rejected.toString(), color: "text-red-500" },
  ];


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
          <Button
            onClick={fetchGroups}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Recarregar
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsCards.map((stat) => (
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
                  {groups.filter(g => g.status === 'pending').length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">Nenhum grupo pendente</p>
                  ) : (
                    groups.filter(g => g.status === 'pending').map((group) => (
                      <div
                        key={group.id}
                        className="flex items-center gap-4 p-4 border rounded-lg"
                      >
                        <Avatar className="w-12 h-12 flex-shrink-0">
                          <AvatarImage src={group.thumbnail_url || ""} alt={group.title} />
                          <AvatarFallback className="bg-telegram-blue text-white">
                            {group.title.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1 truncate">{group.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                            <Badge variant="outline">{group.category}</Badge>
                            <span>{group.members || 0} membros</span>
                            <span>{new Date(group.created_at).toLocaleDateString('pt-BR')}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-purple-500 hover:bg-purple-500/10"
                            onClick={() => handleRefreshThumbnail(group.id, group.telegram_link)}
                            disabled={loading}
                            title="Recarregar miniatura"
                          >
                            <Image className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-500 hover:bg-green-500/10"
                            onClick={() => handleApproveGroup(group.id)}
                          >
                            <Check className="w-4 h-4 mr-1" />
                            Aprovar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-500 hover:bg-red-500/10"
                            onClick={() => handleRejectGroup(group.id)}
                          >
                            <X className="w-4 h-4 mr-1" />
                            Rejeitar
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
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
                <div className="space-y-4">
                  {groups.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">Nenhum grupo cadastrado</p>
                  ) : (
                    groups.map((group) => (
                      <div
                        key={group.id}
                        className="flex items-center gap-4 p-4 border rounded-lg"
                      >
                        <Avatar className="w-12 h-12 flex-shrink-0">
                          <AvatarImage src={group.thumbnail_url || ""} alt={group.title} />
                          <AvatarFallback className="bg-telegram-blue text-white">
                            {group.title.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1 truncate">{group.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                            <Badge variant="outline">{group.category}</Badge>
                            <Badge 
                              variant={group.status === 'approved' ? 'default' : group.status === 'pending' ? 'secondary' : 'destructive'}
                            >
                              {group.status === 'approved' ? 'Aprovado' : group.status === 'pending' ? 'Pendente' : 'Rejeitado'}
                            </Badge>
                            <span>{group.members || 0} membros</span>
                            <span>{new Date(group.created_at).toLocaleDateString('pt-BR')}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-purple-500 hover:bg-purple-500/10"
                            onClick={() => handleRefreshThumbnail(group.id, group.telegram_link)}
                            disabled={loading}
                            title="Recarregar miniatura"
                          >
                            <Image className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-500 hover:bg-blue-500/10"
                            onClick={() => navigate(`/grupo/${group.slug}`)}
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Editar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-500 hover:bg-red-500/10"
                            onClick={() => handleDeleteGroup(group.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Excluir
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
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
                <p className="text-center text-muted-foreground py-8">
                  Funcionalidade de gerenciamento de usuários em desenvolvimento
                </p>
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
