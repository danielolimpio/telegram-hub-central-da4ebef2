import { useState } from "react";
import { Heart, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { sanitizeHTML } from "@/lib/sanitize";
import { useFavorites } from "@/hooks/useFavorites";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface GroupCardProps {
  id?: string;
  title: string;
  description: string;
  members: number;
  views?: number;
  avatar: string;
  isNew?: boolean;
  category: string;
  slug?: string;
  telegramLink?: string;
  priority?: boolean;
}

const GroupCard = ({ id, title, description, members, views, avatar, isNew, category, slug, telegramLink, priority }: GroupCardProps) => {
  const { isFavorite, toggleFavorite, isLoggedIn } = useFavorites();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const formatMembers = (count: number) => {
    return count.toLocaleString('pt-BR');
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const groupSlug = slug || generateSlug(title);
  const isFav = id ? isFavorite(id) : false;

  // Strip HTML tags and truncate for card preview to keep layout consistent
  const previewText = (() => {
    const text = (description || "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const max = 140;
    return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
  })();

  const handleFavorite = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      toast.info("Faça login para salvar favoritos");
      navigate("/auth");
      return;
    }
    if (!id) return;
    const added = await toggleFavorite(id);
    toast.success(added ? "Adicionado aos favoritos!" : "Removido dos favoritos");
  };

  return (
    <Card className="group hover:shadow-telegram transition-all duration-300 border-border/50 hover:border-telegram-blue/30 overflow-hidden h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative flex-1 flex flex-col">
          {isNew && (
            <Badge className="absolute top-3 right-3 z-10 bg-success text-success-foreground text-xs">
              Novo
            </Badge>
          )}
          
          {/* Avatar at the top center */}
          <div className="flex justify-center pt-6 pb-4">
            <div className="relative">
              {priority ? (
                avatar && !imgError ? (
                  <img
                    src={avatar}
                    alt={title}
                    width={80}
                    height={80}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    onError={() => setImgError(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-telegram-blue/20"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-telegram-blue text-white text-2xl font-bold flex items-center justify-center border-2 border-telegram-blue/20">
                    {title.substring(0, 2).toUpperCase()}
                  </div>
                )
              ) : (
                <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-telegram-blue/20">
                  <AvatarImage
                    src={avatar || ""}
                    alt={title}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-telegram-blue text-white text-2xl font-bold">
                    {title.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-4 pb-4 flex-1 flex flex-col text-center">
            <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2 group-hover:text-telegram-blue transition-colors line-clamp-1">
              {title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-3 flex-1">
              {previewText}
            </p>
            <div className="text-xs text-muted-foreground mb-3 truncate">{category}</div>
            
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground mb-4">
              {typeof views === "number" && views > 0 && (
                <span className="inline-flex items-center" title="Acessos">
                  <Eye className="w-4 h-4 mr-1" />
                  <span className="text-xs sm:text-sm">{formatMembers(views)}</span>
                </span>
              )}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
              <Button 
                variant="telegram" 
                size="sm" 
                className="flex-1 text-xs sm:text-sm h-10 sm:h-9"
                onClick={() => window.location.href = `/grupo/${groupSlug}`}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Entrar
              </Button>
              <Button
                variant="outline"
                size="sm"
                className={`hover:bg-accent hover:text-accent-foreground sm:w-auto h-10 sm:h-9 ${isFav ? 'text-red-500 border-red-500/50' : ''}`}
                onClick={handleFavorite}
                aria-label={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              >
                <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isFav ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
