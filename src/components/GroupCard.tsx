import { Users, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { sanitizeHTML } from "@/lib/sanitize";

interface GroupCardProps {
  id?: number;
  title: string;
  description: string;
  members: number;
  avatar: string;
  isNew?: boolean;
  category: string;
  slug?: string;
  telegramLink?: string;
}

const GroupCard = ({ id, title, description, members, avatar, isNew, category, slug, telegramLink }: GroupCardProps) => {
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
  const groupLink = telegramLink || '#';

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
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-4 pb-4 flex-1 flex flex-col text-center">
            <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2 group-hover:text-telegram-blue transition-colors line-clamp-2">
              {title}
            </h3>
            <div 
              className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-3 flex-1"
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
            />
            <div className="text-xs text-muted-foreground mb-3 truncate">{category}</div>
            
            <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-xs sm:text-sm">{formatMembers(members)} membros</span>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
              <Button 
                variant="telegram" 
                size="sm" 
                className="flex-1 text-xs sm:text-sm"
                onClick={() => window.location.href = `/grupo/${groupSlug}`}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Entrar
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="hover:bg-accent hover:text-accent-foreground sm:w-auto"
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;