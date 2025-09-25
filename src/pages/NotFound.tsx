import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, Send } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Telegram Icon */}
        <div className="w-24 h-24 bg-gradient-telegram rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-12 h-12 text-white" />
        </div>
        
        {/* 404 Text */}
        <div className="mb-4">
          <h1 className="text-6xl font-bold text-telegram-blue mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Página não encontrada</h2>
          <p className="text-muted-foreground mb-8">
            Ops! A página que você procura não existe ou foi movida.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            variant="telegram" 
            size="lg" 
            className="w-full"
            onClick={() => window.location.href = '/'}
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar ao Início
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full"
            onClick={() => window.location.href = '/all-groups'}
          >
            <Search className="w-5 h-5 mr-2" />
            Buscar Grupos
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Você também pode:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/all-groups" className="hover:text-telegram-blue transition-colors">
              Ver todos os grupos
            </a>
            <span>•</span>
            <a href="/submit-group" className="hover:text-telegram-blue transition-colors">
              Enviar um grupo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
