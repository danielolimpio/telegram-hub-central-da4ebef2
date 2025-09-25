import { Users, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GroupCardProps {
  title: string;
  description: string;
  members: number;
  avatar: string;
  isNew?: boolean;
  category: string;
}

const GroupCard = ({ title, description, members, avatar, isNew, category }: GroupCardProps) => {
  const formatMembers = (count: number) => {
    return count.toLocaleString('pt-BR');
  };

  return (
    <Card className="group hover:shadow-telegram transition-all duration-300 border-border/50 hover:border-telegram-blue/30 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          {isNew && (
            <Badge className="absolute top-3 right-3 z-10 bg-success text-success-foreground">
              Novo
            </Badge>
          )}
          
          <div className="p-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative">
                <img
                  src={avatar}
                  alt={title}
                  className="w-16 h-16 rounded-full object-cover border-2 border-telegram-blue/20"
                />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-telegram-blue transition-colors">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                  {description}
                </p>
                <div className="text-xs text-muted-foreground mb-3">{category}</div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{formatMembers(members)} membros</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="telegram" 
                size="sm" 
                className="flex-1"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;