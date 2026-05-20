import { useParams, useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
  MessageCircle,
  Eye
} from "lucide-react";
import ShadowHTML from "@/components/ShadowHTML";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import SEOHead from "@/components/SEOHead";
import { ItemPageSchema, BreadcrumbSchema } from "@/components/JsonLd";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { toast } from "sonner";

type Group = Tables<"groups">;

const SUPABASE_URL = "https://fsfrpjsuakhkpbmqgibf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZnJwanN1YWtoa3BibXFnaWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MDcyOTAsImV4cCI6MjA3NDM4MzI5MH0.Z4sFNkScO7rjFigMrbJsV-8vP4spjhadL-z28_AX37M";

const supabaseRestHeaders = {
  apikey: SUPABASE_PUBLISHABLE_KEY,
  Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
};

const buildGroupsUrl = (params: Record<string, string>) => {
  const url = new URL(`${SUPABASE_URL}/rest/v1/groups`);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
};

const fetchApprovedGroupBySlug = async (slug: string): Promise<Group | null> => {
  const response = await fetch(
    buildGroupsUrl({
      select: "*",
      slug: `eq.${slug}`,
      status: "eq.approved",
      limit: "1",
    }),
    {
      headers: supabaseRestHeaders,
    }
  );

  if (!response.ok) {
    throw new Error(`Falha ao buscar grupo ${slug}`);
  }

  const data = (await response.json()) as Group[];
  return data[0] ?? null;
};

export const getGroupStaticPaths = async (): Promise<string[]> => {
  try {
    const response = await fetch(
      buildGroupsUrl({
        select: "slug",
        status: "eq.approved",
        order: "created_at.desc",
      }),
      {
        headers: supabaseRestHeaders,
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao gerar rotas estáticas dos grupos");
    }

    const data = (await response.json()) as Array<Pick<Group, "slug">>;
    return data.map((group) => `grupo/${group.slug}`);
  } catch (error) {
    console.error("Error generating static group paths:", error);
    return [];
  }
};

export const groupDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.slug) {
    return null;
  }

  try {
    return await fetchApprovedGroupBySlug(params.slug);
  } catch (error) {
    console.error("Error loading group details:", error);
    return null;
  }
};

const GroupDetails = () => {
  const { slug } = useParams();
  const loaderGroup = useLoaderData() as Group | null;
  const [group, setGroup] = useState<Group | null>(loaderGroup);
  const [loading, setLoading] = useState(Boolean(slug && !loaderGroup));
  const [acceptedRules, setAcceptedRules] = useState(false);
  const [relatedGroups, setRelatedGroups] = useState<Group[]>([]);
  const trackedSlugRef = useRef<string | null>(null);

  useEffect(() => {
    setGroup(loaderGroup);
    setLoading(Boolean(slug && !loaderGroup));
  }, [loaderGroup, slug]);

  useEffect(() => {
    if (!slug || loaderGroup) return;

    let cancelled = false;

    const fetchGroup = async () => {
      try {
        const data = await fetchApprovedGroupBySlug(slug);

        if (!data) {
          if (!cancelled) {
            setGroup(null);
            toast.error('Grupo não encontrado');
          }
          return;
        }

        if (!cancelled) {
          setGroup(data);
        }
      } catch (error) {
        console.error('Error:', error);
        if (!cancelled) {
          toast.error('Erro ao carregar grupo');
          setGroup(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchGroup();

    return () => {
      cancelled = true;
    };
  }, [slug, loaderGroup]);

  useEffect(() => {
    if (!slug || !group || trackedSlugRef.current === slug || typeof navigator === 'undefined') {
      return;
    }

    trackedSlugRef.current = slug;

    const incrementViews = async () => {
      try {
        const userAgent = navigator.userAgent;
        const { data: viewsData, error: viewsError } = await supabase
          .rpc('increment_group_views', {
            group_slug: slug,
            user_agent_str: userAgent,
          });

        if (viewsError) {
          console.error('Error incrementing views:', viewsError);
          return;
        }

        setGroup((currentGroup) =>
          currentGroup
            ? {
                ...currentGroup,
                views: viewsData || currentGroup.views || 0,
              }
            : currentGroup
        );
      } catch (error) {
        console.error('Error incrementing views:', error);
      }
    };

    incrementViews();
  }, [slug, group]);

  useEffect(() => {
    if (!group?.id) {
      setRelatedGroups([]);
      return;
    }

    let cancelled = false;

    const fetchRelated = async () => {
      // Try same-category first
      let results: Group[] = [];
      if (group.category) {
        const { data, error } = await supabase
          .from("groups")
          .select("id, title, description, members, views, thumbnail_url, category, telegram_link, slug, created_at")
          .eq("status", "approved")
          .eq("category", group.category)
          .neq("id", group.id)
          .order("created_at", { ascending: false })
          .limit(20);
        if (error) {
          console.error("Error loading related groups:", error);
        } else {
          results = (data ?? []) as Group[];
        }
      }

      // Fallback: if no same-category groups, show other approved groups
      if (results.length === 0) {
        const { data, error } = await supabase
          .from("groups")
          .select("id, title, description, members, views, thumbnail_url, category, telegram_link, slug, created_at")
          .eq("status", "approved")
          .neq("id", group.id)
          .order("created_at", { ascending: false })
          .limit(20);
        if (error) {
          console.error("Error loading fallback related groups:", error);
        } else {
          results = (data ?? []) as Group[];
        }
      }

      if (!cancelled) {
        setRelatedGroups(results);
      }
    };

    fetchRelated();

    return () => {
      cancelled = true;
    };
  }, [group?.category, group?.id]);

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
      text: "Evite conteúdo impróprio: Não publique ou promova materiais que violem leis, direitos autorais ou políticas de plataformas como Telegram e Google.",
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
      text: "Siga as políticas oficiais: Todos os grupos devem estar em conformidade com os Termos de Serviço do Telegram e as Políticas do Programa Google AdSense.",
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

  const plainDescription = (() => {
    const raw = (group.description || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const fallback = `Entre no grupo ${group.title} no Telegram${group.category ? ` (${group.category})` : ""}. Link ativo e verificado.`;
    const base = raw || fallback;
    return base.length > 157 ? base.slice(0, 157).trimEnd() + "..." : base;
  })();

  const pageUrl = `https://gruposdotelegram.org/grupo/${group.slug}`;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead
        title={`${group.title} | Grupo do Telegram${group.category ? ` de ${group.category}` : ""}`.slice(0, 60)}
        description={plainDescription}
        canonical={`/grupo/${group.slug}`}
        ogImage={group.thumbnail_url || undefined}
      />
      <ItemPageSchema
        name={group.title}
        description={plainDescription}
        url={pageUrl}
        image={group.thumbnail_url || undefined}
        category={group.category || undefined}
      />
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://gruposdotelegram.org/" },
          { name: "Todos os Grupos", url: "https://gruposdotelegram.org/todos-grupos" },
          { name: group.title, url: pageUrl }
        ]}
      />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 min-w-0">
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

              {/* Members count below title */}
              {typeof group.members === "number" && group.members > 0 && (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span>{formatMembers(group.members)} {group.members === 1 ? 'membro' : 'membros'}</span>
                </div>
              )}

              {/* Description (rendered in Shadow DOM to isolate user CSS) */}
              <ShadowHTML
                html={group.description}
                className="text-muted-foreground mb-4 w-full max-w-3xl leading-relaxed text-left"
              />

              {/* Stats — views appear after description */}
              <div className="flex items-center gap-6 mb-6">
                <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5">
                  <MessageCircle className="w-4 h-4" />
                  {group.category}
                </Badge>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span>{formatMembers(group.views)} {group.views === 1 ? 'acesso' : 'acessos'}</span>
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

        {relatedGroups.length > 0 && (
        <section className="pb-4">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              {group.category ? "Grupos recomendados" : "Outros grupos"}
            </h2>
            {group.category && (
              <p className="text-sm text-muted-foreground mt-1">
                Outros grupos da categoria <span className="font-medium">{group.category}</span>
              </p>
            )}
          </div>

          <Carousel
            opts={{ align: "start", loop: false, slidesToScroll: 1 }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {relatedGroups.map((rg) => (
                <CarouselItem
                  key={rg.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                >
                  <GroupCard
                    id={rg.id}
                    title={rg.title}
                    description={rg.description}
                    members={rg.members ?? 0}
                    views={rg.views ?? 0}
                    avatar={rg.thumbnail_url || ""}
                    category={rg.category}
                    slug={rg.slug}
                    telegramLink={rg.telegram_link}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-12" />
          </Carousel>
        </section>
        )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 lg:flex-shrink-0">
            <CategorySidebar />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GroupDetails;
