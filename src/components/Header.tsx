import { useState, useEffect } from "react";
import { Search, Send, User, BookOpen, LogOut, LayoutDashboard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo-telegram.webp";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdmin(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdmin(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdmin = async (userId: string) => {
    const { data } = await supabase.rpc("is_admin", { _user_id: userId });
    setIsAdmin(!!data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Grupos do Telegram"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <div className="text-xl font-bold">
              <span className="text-foreground">Grupos do </span>
              <span className="text-telegram-blue">Telegram</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
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
            {user ? (
              <>
                <Button 
                  variant="telegram" 
                  size="sm" 
                  className="hidden sm:flex"
                  onClick={() => navigate('/dashboard')}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Grupo
                </Button>
                {isAdmin && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigate('/admin')}
                    className="hidden sm:flex"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/dashboard')}
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Sair</span>
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="telegram" 
                  size="sm" 
                  className="hidden sm:flex"
                  onClick={() => navigate('/auth')}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Grupo
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/auth')}
                >
                  <User className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
              </>
            )}
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
