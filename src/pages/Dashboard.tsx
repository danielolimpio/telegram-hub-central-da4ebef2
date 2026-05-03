import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, CheckCircle, Clock, Eye, Heart, Star, User, Send, Upload, LogOut, Camera, BarChart3 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RichTextEditor } from "@/components/RichTextEditor";
import { Badge } from "@/components/ui/badge";
import { groupSchema } from "@/lib/validation";
import { CATEGORIES, getCategoryLabel } from "@/config/categories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [myGroups, setMyGroups] = useState<any[]>([]);
  const [favoriteGroups, setFavoriteGroups] = useState<any[]>([]);
  
  // Group form states
  const [groupTitle, setGroupTitle] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupCategory, setGroupCategory] = useState("");
  const [groupMembers, setGroupMembers] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [groupThumbnail, setGroupThumbnail] = useState("");
  const [adminContact, setAdminContact] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Profile form states
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState("");

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/auth");
      return;
    }
    setUser(user);
    
    // Load profile
    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();
    
    if (profileData) {
      setProfile(profileData);
      setDisplayName(profileData.display_name || "");
      setBio(profileData.bio || "");
      setAvatarPreview(profileData.avatar_url || "");
    }

    // Load user's groups
    const { data: groupsData } = await supabase
      .from("groups")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (groupsData) {
      setMyGroups(groupsData);
    }

    // Load favorites
    const { data: favData } = await supabase
      .from("favorites")
      .select("group_id, groups(*)")
      .eq("user_id", user.id);

    if (favData) {
      setFavoriteGroups(favData.map((f: any) => f.groups).filter(Boolean));
    }
    
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const fetchTelegramThumbnail = async (link: string) => {
    if (!link.includes("t.me/")) {
      setGroupThumbnail("");
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('fetch-telegram-thumbnail', {
        body: { telegramLink: link }
      });

      if (error) throw error;

      if (data?.thumbnailUrl) {
        setGroupThumbnail(data.thumbnailUrl);
      } else {
        const username = link.split("t.me/")[1]?.replace(/^@/, "").split("/")[0];
        setGroupThumbnail(`https://ui-avatars.com/api/?name=${username}&background=0088cc&color=fff&size=128`);
      }
    } catch (error) {
      console.error("Error fetching thumbnail:", error);
      const username = link.split("t.me/")[1]?.replace(/^@/, "").split("/")[0];
      setGroupThumbnail(`https://ui-avatars.com/api/?name=${username}&background=0088cc&color=fff&size=128`);
    }
  };

  const handleSubmitGroup = async () => {
    const validation = groupSchema.safeParse({
      title: groupTitle,
      description: groupDescription,
      telegram_link: telegramLink,
      members: groupMembers,
      category: groupCategory
    });

    if (!validation.success) {
      toast({
        title: "Dados inválidos",
        description: validation.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    try {
      const slug = groupTitle
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      const { error } = await supabase.from("groups").insert({
        user_id: user.id,
        title: validation.data.title,
        description: validation.data.description,
        category: validation.data.category,
        members: validation.data.members,
        telegram_link: validation.data.telegram_link,
        slug,
        thumbnail_url: groupThumbnail,
        status: "pending"
      });

      if (error) throw error;

      toast({
        title: "Grupo enviado!",
        description: "Seu grupo está aguardando aprovação."
      });

      setGroupTitle("");
      setGroupDescription("");
      setGroupCategory("");
      setGroupMembers("");
      setTelegramLink("");
      setGroupThumbnail("");
      setAdminContact("");
      
      await checkUser();
    } catch (error: any) {
      toast({
        title: "Erro ao enviar grupo",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "Arquivo muito grande",
        description: "O tamanho máximo do avatar é 5MB.",
        variant: "destructive"
      });
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Tipo de arquivo inválido",
        description: "Por favor, selecione uma imagem (JPEG, PNG, GIF ou WebP).",
        variant: "destructive"
      });
      return;
    }

    setAvatarFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    setSubmitting(true);
    try {
      let avatarUrl = profile?.avatar_url;

      if (avatarFile) {
        const fileExt = avatarFile.name.split(".").pop();
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(fileName, avatarFile, { upsert: true });

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("avatars")
          .getPublicUrl(fileName);
        
        avatarUrl = urlData.publicUrl;
      }

      const { error } = await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          display_name: displayName,
          bio,
          avatar_url: avatarUrl
        });

      if (error) throw error;

      toast({
        title: "Perfil atualizado!",
        description: "Suas informações foram salvas."
      });

      await checkUser();
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar perfil",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleRemoveFavorite = async (groupId: string) => {
    if (!user) return;
    const { error } = await supabase
      .from("favorites")
      .delete()
      .eq("user_id", user.id)
      .eq("group_id", groupId);

    if (!error) {
      setFavoriteGroups(prev => prev.filter(g => g.id !== groupId));
      toast({ title: "Removido dos favoritos" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  const approvedCount = myGroups.filter(g => g.status === 'approved').length;
  const pendingCount = myGroups.filter(g => g.status === 'pending').length;
  const totalViews = myGroups.reduce((sum, g) => sum + (g.views || 0), 0);

  const stats = [
    { icon: MessageSquare, label: "Total de Grupos", value: String(myGroups.length), color: "text-blue-500" },
    { icon: CheckCircle, label: "Aprovados", value: String(approvedCount), color: "text-green-500" },
    { icon: Clock, label: "Pendentes", value: String(pendingCount), color: "text-yellow-500" },
    { icon: Eye, label: "Total de Acessos", value: String(totalViews), color: "text-purple-500" },
    { icon: Heart, label: "Favoritos", value: String(favoriteGroups.length), color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Logout */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={avatarPreview} />
              <AvatarFallback>
                <User className="w-8 h-8" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Bem-vindo, {profile?.display_name || user?.email}</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
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
                  {myGroups.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Você ainda não enviou nenhum grupo.</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Clique na aba "Enviar Grupo" para adicionar seu primeiro grupo.
                      </p>
                    </div>
                  ) : (
                    myGroups.slice(0, 5).map((group) => (
                      <div
                        key={group.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={group.thumbnail_url || ""} />
                            <AvatarFallback className="bg-telegram-blue text-white">
                              {group.title.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{group.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{getCategoryLabel(group.category)}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {group.views || 0} acessos
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {new Date(group.created_at).toLocaleDateString('pt-BR')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge variant={group.status === 'approved' ? 'default' : group.status === 'pending' ? 'secondary' : 'destructive'}>
                          {group.status === 'approved' ? 'Aprovado' : group.status === 'pending' ? 'Pendente' : 'Rejeitado'}
                        </Badge>
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
                <CardDescription>{myGroups.length} grupos cadastrados</CardDescription>
              </CardHeader>
              <CardContent>
                {myGroups.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    Você ainda não enviou nenhum grupo.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {myGroups.map((group) => (
                      <div key={group.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={group.thumbnail_url || ""} />
                            <AvatarFallback className="bg-telegram-blue text-white">
                              {group.title.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-foreground">{group.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={group.status === 'approved' ? 'default' : group.status === 'pending' ? 'secondary' : 'destructive'}>
                                {group.status === 'approved' ? 'Aprovado' : group.status === 'pending' ? 'Pendente' : 'Rejeitado'}
                              </Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {group.views || 0} visualizações
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {group.status === 'approved' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => navigate(`/grupo/${group.slug}/stats`)}
                            >
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Estatísticas
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(group.telegram_link, '_blank')}
                          >
                            Ver Grupo
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favoritos */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Grupos Favoritos</CardTitle>
                <CardDescription>{favoriteGroups.length} grupos salvos</CardDescription>
              </CardHeader>
              <CardContent>
                {favoriteGroups.length === 0 ? (
                  <div className="text-center py-8">
                    <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">Você ainda não tem grupos favoritos.</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Clique no ❤️ nos cards de grupos para salvá-los aqui.
                    </p>
                    <Button variant="outline" className="mt-4" onClick={() => navigate("/todos-grupos")}>
                      Explorar Grupos
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {favoriteGroups.map((group) => (
                      <div key={group.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={group.thumbnail_url || ""} />
                            <AvatarFallback className="bg-telegram-blue text-white">
                              {group.title.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-foreground">{group.title}</h3>
                            <p className="text-sm text-muted-foreground">{getCategoryLabel(group.category)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/grupo/${group.slug}`)}
                          >
                            Ver Grupo
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive"
                            onClick={() => handleRemoveFavorite(group.id)}
                          >
                            <Heart className="w-4 h-4 fill-current" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
                    value={groupTitle}
                    onChange={(e) => setGroupTitle(e.target.value)}
                    required
                  />
                </div>

                <RichTextEditor
                  label="Descrição *"
                  content={groupDescription}
                  onChange={setGroupDescription}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria *</Label>
                    <Select value={groupCategory} onValueChange={setGroupCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((category) => (
                          <SelectItem key={category} value={category}>
                            {getCategoryLabel(category)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="members">Número de Membros</Label>
                    <Input
                      id="members"
                      type="text"
                      inputMode="numeric"
                      placeholder="Ex: 92.707"
                      value={groupMembers}
                      onChange={(e) => setGroupMembers(e.target.value)}
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
                      fetchTelegramThumbnail(e.target.value);
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
                    value={adminContact}
                    onChange={(e) => setAdminContact(e.target.value)}
                  />
                </div>

                <Button 
                  variant="telegram" 
                  size="lg" 
                  className="w-full"
                  onClick={handleSubmitGroup}
                  disabled={submitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {submitting ? "Enviando..." : "Enviar Grupo"}
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
                <CardDescription>
                  Personalize suas informações públicas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={avatarPreview} />
                      <AvatarFallback>
                        <User className="w-16 h-16" />
                      </AvatarFallback>
                    </Avatar>
                    <label 
                      htmlFor="avatar-upload"
                      className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-colors"
                    >
                      <Camera className="w-4 h-4" />
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarChange}
                      />
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground">Clique no ícone para alterar sua foto</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="displayName">Nome de Exibição</Label>
                  <Input
                    id="displayName"
                    placeholder="Como você quer ser chamado?"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Conte um pouco sobre você..."
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    value={user?.email || ""}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">O email não pode ser alterado</p>
                </div>

                <Button 
                  onClick={handleUpdateProfile}
                  disabled={submitting}
                  className="w-full"
                >
                  {submitting ? "Salvando..." : "Salvar Alterações"}
                </Button>
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
