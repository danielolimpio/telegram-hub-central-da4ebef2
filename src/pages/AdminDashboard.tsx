import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RichTextEditor } from "@/components/RichTextEditor";
import { 
  Shield,
  Search,
  Clock,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  RefreshCw,
  Users,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import sanitizeHtml from "dompurify";
import { groupSchema } from "@/lib/validation";

type Group = Tables<"groups">;

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"pending" | "approved" | "rejected">("pending");
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);
  const [editForm, setEditForm] = useState({
    title: "",
    category: "",
    description: "",
    telegram_link: "",
    thumbnail_url: ""
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

  const handleRefreshThumbnail = async (telegramLink: string) => {
    try {
      toast({
        title: "Atualizando miniatura...",
        description: "Buscando nova imagem do Telegram.",
      });

      const { data, error } = await supabase.functions.invoke('fetch-telegram-thumbnail', {
        body: { telegramLink }
      });

      if (error) throw error;

      const thumbnailUrl = data?.thumbnailUrl as string | undefined;
      setEditForm(prev => ({ ...prev, thumbnail_url: thumbnailUrl || "" }));

      toast({
        title: "Miniatura atualizada!",
        description: "A imagem do grupo foi atualizada com sucesso.",
      });
    } catch (error) {
      console.error("Error refreshing thumbnail:", error);
      toast({
        title: "Erro ao atualizar miniatura",
        description: "Não foi possível atualizar a imagem.",
        variant: "destructive",
      });
    }
  };

  const handleEditGroup = (group: Group) => {
    setEditingGroup(group);
    setEditForm({
      title: group.title,
      category: group.category,
      description: group.description,
      telegram_link: group.telegram_link,
      thumbnail_url: group.thumbnail_url || ""
    });
  };

  const handleSaveEdit = async () => {
    if (!editingGroup) return;

    // Validate inputs before updating
    const validation = groupSchema.safeParse({
      title: editForm.title,
      description: editForm.description,
      telegram_link: editForm.telegram_link,
      members: null,
      category: editForm.category
    });

    if (!validation.success) {
      toast({
        title: "Dados inválidos",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from("groups")
        .update({
          title: editForm.title,
          category: editForm.category,
          description: editForm.description,
          telegram_link: editForm.telegram_link,
          thumbnail_url: editForm.thumbnail_url
        })
        .eq("id", editingGroup.id);

      if (error) throw error;

      toast({
        title: "Grupo atualizado!",
        description: "As alterações foram salvas com sucesso.",
      });

      setEditingGroup(null);
      fetchGroups();
    } catch (error) {
      console.error("Error updating group:", error);
      toast({
        title: "Erro ao atualizar",
        description: "Não foi possível salvar as alterações.",
        variant: "destructive",
      });
    }
  };

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        navigate("/auth");
        return;
      }

      const { data: isAdminResult, error: adminError } = await supabase.rpc("is_admin", {
        _user_id: user.id,
      });

      if (adminError) {
        console.error("Error checking admin role:", adminError);
        toast({
          title: "Erro ao verificar permissões",
          description: "Ocorreu um erro ao verificar suas permissões.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      if (!isAdminResult) {
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

  const categories = [
    "Grupos do Telegram de Promoções",
    "Grupos do Telegram de Vendas",
    "Grupos do Telegram de Oportunidades",
    "Grupos do Telegram de Namoros",
    "Grupos do Telegram de Amizades",
    "Grupos do Telegram de Encontros",
    "Grupos do Telegram de Games",
    "Grupos do Telegram de Esportes",
    "Grupos do Telegram de Tecnologia",
    "Grupos do Telegram de Estudos",
    "Grupos do Telegram de Cursos",
    "Grupos do Telegram de Notícias",
    "Grupos do Telegram de Músicas",
    "Grupos do Telegram de Filmes e Cinema",
    "Grupos do Telegram de Livros",
    "Grupos do Telegram de Receitas",
    "Grupos do Telegram de Pets",
    "Grupos do Telegram de Viagens",
    "Grupos do Telegram de Investimentos",
    "Grupos do Telegram de Figurinhas",
    "Grupos do Telegram de Zoeira",
    "Grupos do Telegram de Divulgação",
    "Grupos do Telegram de Redes Sociais",
    "Grupos do Telegram de Vídeos",
    "Grupos do Telegram de LGBTQIA+",
    "Grupos do Telegram de Estilo e Moda",
    "Grupos do Telegram de Liberais"
  ];

  const filteredGroups = groups
    .filter(g => g.status === statusFilter)
    .filter(g => 
      searchQuery === "" ||
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.user_id.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-destructive" />
          <h2 className="text-2xl font-bold mb-2">Acesso Negado</h2>
          <p className="text-muted-foreground mb-4">
            Você não tem permissão para acessar o painel administrativo.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/10">
              <Shield className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Painel Administrativo</h1>
              <p className="text-sm text-muted-foreground">Gerencie grupos e moderação de conteúdo</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => navigate("/admin/users")}
            >
              <Users className="w-4 h-4" />
              Gerenciar Usuários
            </Button>
            <Button variant="destructive">Administrador</Button>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Filtros e Busca</h2>
          </div>
          
          <div className="flex gap-4 items-center flex-wrap">
            <Input
              placeholder="Buscar por nome, categoria ou usuário..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-[300px]"
            />
            
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "pending" ? "default" : "outline"}
                onClick={() => setStatusFilter("pending")}
                className={statusFilter === "pending" ? "bg-green-500 hover:bg-green-600" : ""}
              >
                <Clock className="w-4 h-4 mr-2" />
                Pendentes
              </Button>
              <Button
                variant={statusFilter === "approved" ? "default" : "outline"}
                onClick={() => setStatusFilter("approved")}
                className={statusFilter === "approved" ? "bg-green-500 hover:bg-green-600" : ""}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Aprovados
              </Button>
              <Button
                variant={statusFilter === "rejected" ? "default" : "outline"}
                onClick={() => setStatusFilter("rejected")}
                className={statusFilter === "rejected" ? "bg-green-500 hover:bg-green-600" : ""}
              >
                <XCircle className="w-4 h-4 mr-2" />
                Rejeitados
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredGroups.length === 0 ? (
            <div className="bg-card border rounded-lg p-12 text-center">
              <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Nenhum grupo encontrado com o status "{statusFilter}"
              </p>
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.id} className="bg-card border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{group.title}</h3>
                      <Badge 
                        variant={group.status === "approved" ? "default" : "secondary"}
                        className={group.status === "approved" ? "bg-green-500/10 text-green-500" : ""}
                      >
                        {group.status === "approved" ? (
                          <><CheckCircle className="w-3 h-3 mr-1" />Aprovado</>
                        ) : group.status === "pending" ? (
                          <><Clock className="w-3 h-3 mr-1" />Pendente</>
                        ) : (
                          <><XCircle className="w-3 h-3 mr-1" />Rejeitado</>
                        )}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <p><strong>Categoria:</strong> {group.category}</p>
                      <p><strong>ID do Usuário:</strong> {group.user_id}</p>
                      <p><strong>Criado em:</strong> {new Date(group.created_at).toLocaleDateString('pt-BR', { 
                        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                      })}</p>
                    </div>

                    <div 
                      className="prose prose-sm max-w-none mb-3"
                      dangerouslySetInnerHTML={{ __html: sanitizeHtml.sanitize(group.description) }}
                    />
                    <p className="text-sm text-muted-foreground">Acessos: 0</p>
                  </div>

                  <div className="flex gap-2 ml-4">
                    {group.status === "pending" && (
                      <>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600" onClick={() => handleApproveGroup(group.id)}>
                          <CheckCircle className="w-4 h-4 mr-1" />Aprovar
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleRejectGroup(group.id)}>
                          <XCircle className="w-4 h-4 mr-1" />Rejeitar
                        </Button>
                      </>
                    )}
                    <Button size="sm" variant="outline" onClick={() => handleEditGroup(group)}>
                      <Edit className="w-4 h-4 mr-1" />Editar
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive" onClick={() => handleDeleteGroup(group.id)}>
                      <Trash2 className="w-4 h-4 mr-1" />Excluir
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Avatar className="w-16 h-16 rounded">
                    <AvatarImage src={group.thumbnail_url || ""} alt={group.title} />
                    <AvatarFallback className="rounded text-xs">
                      {group.title.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open(group.telegram_link, '_blank')}>
                    Ver Link do Telegram
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Dialog open={!!editingGroup} onOpenChange={() => setEditingGroup(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Grupo</DialogTitle>
            <p className="text-sm text-muted-foreground">Faça as alterações necessárias no grupo</p>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Nome do Grupo</label>
              <Input value={editForm.title} onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))} />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Categoria</label>
              <Select value={editForm.category} onValueChange={(value) => setEditForm(prev => ({ ...prev, category: value }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (<SelectItem key={cat} value={cat}>{cat}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <RichTextEditor
                label="Descrição"
                content={editForm.description}
                onChange={(value) => setEditForm(prev => ({ ...prev, description: value }))}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Link do Telegram</label>
              <Input value={editForm.telegram_link} onChange={(e) => setEditForm(prev => ({ ...prev, telegram_link: e.target.value }))} />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Imagem do Grupo</label>
              {editForm.thumbnail_url && (
                <div className="mb-3 flex items-center gap-3">
                  <Avatar className="w-16 h-16 rounded">
                    <AvatarImage src={editForm.thumbnail_url} />
                    <AvatarFallback>IMG</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">Imagem atual</span>
                </div>
              )}
              
              <div className="flex gap-2 mb-3">
                <Button type="button" variant="outline" size="sm" onClick={() => document.getElementById('file-upload')?.click()}>
                  Escolher arquivo
                </Button>
                <input id="file-upload" type="file" accept="image/*" className="hidden" />
                <Button type="button" variant="outline" size="sm" onClick={() => handleRefreshThumbnail(editForm.telegram_link)} className="gap-2">
                  <RefreshCw className="w-4 h-4" />Atualizar do Telegram
                </Button>
              </div>

              <label className="text-sm text-muted-foreground mb-2 block">Ou cole a URL da imagem</label>
              <Input value={editForm.thumbnail_url} onChange={(e) => setEditForm(prev => ({ ...prev, thumbnail_url: e.target.value }))} />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={() => setEditingGroup(null)}>Cancelar</Button>
            <Button className="bg-green-500 hover:bg-green-600" onClick={handleSaveEdit}>Salvar Alterações</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
