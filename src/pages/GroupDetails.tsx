import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  ExternalLink, 
  Heart, 
  Share2, 
  CheckCircle,
  Star,
  MessageCircle
} from "lucide-react";
import { sanitizeHTML } from "@/lib/sanitize";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Group {
  id: string;
  title: string;
  description: string;
  members: number;
  thumbnail_url: string | null;
  category: string;
  telegram_link: string;
  created_at: string;
  slug: string;
}

const GroupDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);
  const [acceptedRules, setAcceptedRules] = useState(false);
  const [views, setViews] = useState(3);

  useEffect(() => {
    const fetchGroup = async () => {
      if (!slug) return;

      try {
        const { data, error } = await supabase
          .from('groups')
          .select('*')
          .eq('slug', slug)
          .eq('status', 'approved')
          .single();

        if (error) {
          console.error('Error fetching group:', error);
          toast.error('Grupo não encontrado');
          navigate('/');
          return;
        }

        setGroup(data);
      } catch (error) {
        console.error('Error:', error);
        toast.error('Erro ao carregar grupo');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [slug, navigate]);

  const handleJoinGroup = () => {
    if (!group || !acceptedRules) {
      toast.error('Você precisa concordar com as regras antes de continuar');
      return;
    }
    window.open(group.telegram_link, '_blank');
  };

  const handleShare = async (platform: string) => {
    if (!group) return;

    const url = window.location.href;
    const text = `${group.title} - ${group.description}`;

    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const formatMembers = (count: number) => {
    return count.toLocaleString('pt-BR');
  };

  const communityRules = [
    { 
      text: "Respeite a privacidade alheia: Não compartilhe dados pessoais de outras pessoas sem autorização explícita.",
      icon: CheckCircle
    },
    { 
      text: "Compartilhe com responsabilidade: Envie apenas links de grupos públicos e apropriados para um público geral.",
      icon: CheckCircle
    },
    { 
      text: "Evite conteúdo impróprio: Não publique ou promova materiais que violem leis, direitos autorais ou políticas de plataformas como WhatsApp e Google.",
      icon: CheckCircle
    },
    { 
      text: "Verifique antes de enviar: Certifique-se de que os links e conteúdos sejam seguros, funcionais e livres de riscos digitais.",
      icon: CheckCircle
    },
    { 
      text: "Seja gentil e respeitoso: Use uma linguagem cordial e evite mensagens que possam ofender, discriminar ou perturbar outros usuários.",
      icon: CheckCircle
    },
    { 
      text: "Mantenha a relevância: Evite repetições excessivas ou publicações fora do tema. Qualidade sempre vem antes da quantidade!",
      icon: CheckCircle
    },
    { 
      text: "Siga as políticas oficiais: Todos os grupos devem estar em conformidade com os Termos de Serviço do WhatsApp e as Políticas do Programa Google AdSense.",
      icon: CheckCircle
    },
    { 
      text: "Ajude a manter o ambiente saudável: Se for administrador, modere seu grupo com cuidado e incentive um espaço positivo para todos.",
      icon: CheckCircle
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="text-center">Carregando...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!group) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="text-center">Grupo não encontrado</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Card */}
        <Card className="border-border/50 mb-6">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mb-4 border-4 border-telegram-blue/20">
                <AvatarImage 
                  src={group.thumbnail_url || ""} 
                  alt={group.title}
                  className="object-cover"
                />
                <AvatarFallback className="bg-telegram-blue text-white text-3xl font-bold">
                  {group.title.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {group.title}
              </h1>

              {/* Description */}
              <div 
                className="text-muted-foreground mb-4 max-w-3xl leading-relaxed"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(group.description) }}
              />

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6">
                <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5">
                  <MessageCircle className="w-4 h-4" />
                  {group.category}
                </Badge>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{views} acessos</span>
                </div>
                <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 text-yellow-600 border-yellow-600">
                  <Star className="w-4 h-4 fill-yellow-600" />
                  Premium
                </Badge>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="border-t border-border pt-6 mt-6">
              <p className="text-sm font-medium mb-3 flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Compartilhar este grupo:
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('whatsapp')}
                  className="gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                  className="gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                  className="gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Rules */}
        <Card className="border-border/50 mb-6">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              📋 Regras e Boas Práticas da Comunidade
            </h2>
            <div className="space-y-4 mb-6">
              {communityRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">{rule.text.split(':')[0]}:</span>
                    {rule.text.split(':').slice(1).join(':')}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground flex items-start gap-2">
                <span className="text-lg">⚠️</span>
                <span>
                  <strong>Ao seguir essas práticas, você contribui para uma comunidade mais confiável, inclusiva e útil para todos!</strong>
                </span>
              </p>
            </div>

            {/* Acceptance Checkbox */}
            <div className="bg-muted/30 border border-border rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="accept-rules"
                  checked={acceptedRules}
                  onCheckedChange={(checked) => setAcceptedRules(checked as boolean)}
                  className="mt-1"
                />
                <label 
                  htmlFor="accept-rules" 
                  className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                >
                  <strong className="text-foreground">Li e concordo com as regras da comunidade.</strong> Entendo que devo respeitar todas as diretrizes acima ao participar deste grupo.
                </label>
              </div>
            </div>

            {/* Join Button */}
            <Button
              variant="telegram"
              size="lg"
              className="w-full text-lg py-6"
              onClick={handleJoinGroup}
              disabled={!acceptedRules}
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Aceite as regras para continuar
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-3">
              Você precisa concordar com as regras antes de entrar no grupo
            </p>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default GroupDetails;
