import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  ExternalLink, 
  Heart, 
  Share2, 
  AlertCircle,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";
import { sanitizeHTML } from "@/lib/sanitize";

const GroupDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - isso será substituído por dados reais do Supabase
  const group = {
    id: 1,
    title: "Grupo de Telegram Exemplo",
    description: "Este é um grupo de exemplo para demonstrar a página de detalhes. Aqui você encontrará conteúdo relevante e discussões interessantes sobre diversos tópicos.",
    longDescription: "Descrição completa do grupo com mais detalhes sobre o que é discutido, regras e expectativas. Este é um espaço para compartilhar conhecimento, fazer networking e crescer junto com a comunidade.",
    members: 1234,
    avatar: "https://ui-avatars.com/api/?name=Exemplo&background=0088cc&color=fff&size=256",
    category: "Geral",
    telegramLink: "https://t.me/exemplo",
    isNew: true,
    createdAt: "2025-01-15",
    rules: [
      "Seja respeitoso com todos os membros",
      "Não compartilhe conteúdo ofensivo ou ilegal",
      "Mantenha as discussões no tópico",
      "Não faça spam ou autopromoção excessiva"
    ],
    tags: ["Networking", "Comunidade", "Aprendizado"],
    adminContact: "@admin_exemplo"
  };

  useEffect(() => {
    // Aqui você buscaria os dados reais do grupo do Supabase
    // usando o slug da URL
    console.log("Loading group with slug:", slug);
  }, [slug]);

  const handleJoinGroup = () => {
    window.open(group.telegramLink, '_blank');
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: group.title,
          text: group.description,
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  const formatMembers = (count: number) => {
    return count.toLocaleString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <button onClick={() => navigate('/')} className="hover:text-telegram-blue">
            Início
          </button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/all-groups')} className="hover:text-telegram-blue">
            Todos os Grupos
          </button>
          <span className="mx-2">/</span>
          <span className="text-foreground">{group.title}</span>
        </div>

        {/* Main Card */}
        <Card className="border-border/50 mb-6">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar and Quick Actions */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-4">
                  <img
                    src={group.avatar}
                    alt={group.title}
                    className="w-32 h-32 rounded-2xl object-cover border-4 border-telegram-blue/20"
                  />
                  {group.isNew && (
                    <Badge className="absolute -top-2 -right-2 bg-success text-success-foreground">
                      Novo
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2 w-full md:w-auto">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleToggleFavorite}
                    className={isFavorite ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleShare}
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Group Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      {group.title}
                    </h1>
                    <Badge variant="secondary" className="mb-3">
                      {group.category}
                    </Badge>
                  </div>
                </div>

                <div 
                  className="text-muted-foreground mb-4"
                  dangerouslySetInnerHTML={{ __html: sanitizeHTML(group.description) }}
                />

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-telegram-blue" />
                    <span className="font-semibold">{formatMembers(group.members)}</span>
                    <span className="text-muted-foreground">membros</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-telegram-blue" />
                    <span className="text-muted-foreground">
                      Criado em {new Date(group.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  {group.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="telegram" 
                  size="lg" 
                  className="w-full md:w-auto"
                  onClick={handleJoinGroup}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Entrar no Grupo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* About */}
          <Card className="md:col-span-2 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-telegram-blue" />
                Sobre o Grupo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(group.longDescription) }}
              />
            </CardContent>
          </Card>

          {/* Group Info */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-telegram-blue" />
                Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Administrador</p>
                <p className="font-medium">{group.adminContact}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Categoria</p>
                <p className="font-medium">{group.category}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Link</p>
                <a 
                  href={group.telegramLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-telegram-blue hover:underline text-sm break-all"
                >
                  {group.telegramLink}
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Rules */}
          <Card className="md:col-span-3 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-telegram-blue" />
                Regras do Grupo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {group.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-telegram-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-telegram-blue font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{rule}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GroupDetails;
