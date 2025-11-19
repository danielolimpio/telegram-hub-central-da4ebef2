import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import StatsCard from "@/components/StatsCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  Users, 
  Search,
  ShieldX,
  Crown,
  FolderOpen,
  ArrowLeft,
  Trash2,
  CheckCircle,
  Badge as BadgeIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface UserData {
  id: string;
  email: string;
  display_name: string | null;
  created_at: string;
  groupCount: number;
  isPremium: boolean;
}

const UserManagement = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    blockedUsers: 0,
    premiumUsers: 0,
    totalGroups: 0,
  });

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Acesso negado",
          description: "Você precisa estar logado para acessar esta página.",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }

      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError || !roleData) {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão para acessar esta página.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      fetchUsers();
      fetchStats();
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      // Get all profiles with their associated group counts
      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("id, display_name, created_at");

      if (profilesError) throw profilesError;

      // Get auth users data
      const { data: { users: authUsers }, error: authError } = await supabase.auth.admin.listUsers();
      
      if (authError) throw authError;

      // Get group counts for each user
      const { data: groupCounts, error: groupError } = await supabase
        .from("groups")
        .select("user_id");

      if (groupError) throw groupError;

      // Count groups per user
      const groupCountMap = groupCounts?.reduce((acc, group) => {
        acc[group.user_id] = (acc[group.user_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      // Merge data
      const usersData: UserData[] = authUsers.map(authUser => {
        const profile = profiles?.find(p => p.id === authUser.id);
        return {
          id: authUser.id,
          email: authUser.email || "N/A",
          display_name: profile?.display_name || null,
          created_at: authUser.created_at,
          groupCount: groupCountMap[authUser.id] || 0,
          isPremium: false, // TODO: Implement premium logic
        };
      });

      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os usuários.",
        variant: "destructive",
      });
    }
  };

  const fetchStats = async () => {
    try {
      // Total users
      const { count: totalUsers } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true });

      // Total groups
      const { count: totalGroups } = await supabase
        .from("groups")
        .select("*", { count: "exact", head: true });

      setStats({
        totalUsers: totalUsers || 0,
        blockedUsers: 0, // TODO: Implement blocked users logic
        premiumUsers: 0, // TODO: Implement premium users logic
        totalGroups: totalGroups || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUserId) return;

    try {
      const { error } = await supabase.auth.admin.deleteUser(deleteUserId);
      
      if (error) throw error;

      toast({
        title: "Usuário excluído",
        description: "O usuário foi excluído com sucesso.",
      });

      setDeleteUserId(null);
      fetchUsers();
      fetchStats();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir o usuário.",
        variant: "destructive",
      });
    }
  };

  const filteredUsers = users.filter(user => {
    const searchLower = searchQuery.toLowerCase();
    return (
      user.email.toLowerCase().includes(searchLower) ||
      user.display_name?.toLowerCase().includes(searchLower)
    );
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">Carregando...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-telegram-blue/10 p-3 rounded-lg">
              <Users className="w-8 h-8 text-telegram-blue" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Gerenciamento de Usuários
              </h1>
              <p className="text-muted-foreground">
                Visualize e gerencie todos os usuários cadastrados
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => navigate("/admin")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Painel
            </Button>
            <Badge variant="destructive" className="gap-1.5">
              <BadgeIcon className="w-3 h-3" />
              Administrador
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            label="Total de Usuários"
            value={stats.totalUsers.toString()}
            icon={Users}
            color="blue"
          />
          <StatsCard
            label="Usuários Bloqueados"
            value={stats.blockedUsers.toString()}
            icon={ShieldX}
            color="gray"
          />
          <StatsCard
            label="Usuários Premium"
            value={stats.premiumUsers.toString()}
            icon={Crown}
            color="orange"
          />
          <StatsCard
            label="Total de Grupos"
            value={stats.totalGroups.toString()}
            icon={FolderOpen}
            color="green"
          />
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-xl font-bold">Buscar Usuário</h2>
            </div>
            <Input
              placeholder="Buscar por nome, email ou telefone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-4"
            />
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">
              Usuários Cadastrados ({filteredUsers.length})
            </h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telegram</TableHead>
                    <TableHead className="text-center">Grupos</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead>Cadastro</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                        Nenhum usuário encontrado
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          {user.display_name || "N/A"}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>N/A</TableCell>
                        <TableCell className="text-center">{user.groupCount}</TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className="gap-1.5 text-success border-success">
                            <CheckCircle className="w-3 h-3" />
                            Ativo
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {format(new Date(user.created_at), "dd/MM/yyyy")}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => setDeleteUserId(user.id)}
                            className="gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            Excluir
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteUserId} onOpenChange={() => setDeleteUserId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita e todos os dados do usuário serão removidos permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteUser} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default UserManagement;
