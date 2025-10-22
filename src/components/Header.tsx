import { Search, Send, Zap, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-gradient-telegram rounded-full flex items-center justify-center">
              <Send className="w-5 h-5 text-white" />
            </div>
            <div className="text-xl font-bold">
              <span className="text-foreground">Grupos do </span>
              <span className="text-telegram-blue">Telegram</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Faça sua busca..."
                className="pl-10 bg-secondary/50 border-none focus:bg-background transition-colors"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="telegram" 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => navigate('/submit-group')}
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Grupo
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Zap className="w-4 h-4 mr-2" />
              Impulsionar
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => navigate('/blog')}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Blog
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;