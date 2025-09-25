import { Send, Heart, Mail, Globe, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-telegram rounded-full flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div className="text-xl font-bold">
                <span className="text-foreground">Grupos de </span>
                <span className="text-telegram-blue">Telegram</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A maior plataforma de descoberta de grupos do Telegram no Brasil. 
              Conecte-se com pessoas que compartilham seus interesses.
            </p>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-telegram-blue" />
              <span className="text-sm text-muted-foreground">+12.500 grupos ativos</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-telegram-blue transition-colors">Início</a></li>
              <li><a href="/all-groups" className="text-muted-foreground hover:text-telegram-blue transition-colors">Todos os Grupos</a></li>
              <li><a href="/submit-group" className="text-muted-foreground hover:text-telegram-blue transition-colors">Enviar Grupo</a></li>
              <li><a href="/categories" className="text-muted-foreground hover:text-telegram-blue transition-colors">Categorias</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-telegram-blue transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Categorias Populares */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categorias Populares</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/category/vendas" className="text-muted-foreground hover:text-telegram-blue transition-colors">Vendas</a></li>
              <li><a href="/category/marketing" className="text-muted-foreground hover:text-telegram-blue transition-colors">Marketing</a></li>
              <li><a href="/category/tecnologia" className="text-muted-foreground hover:text-telegram-blue transition-colors">Tecnologia</a></li>
              <li><a href="/category/investimentos" className="text-muted-foreground hover:text-telegram-blue transition-colors">Investimentos</a></li>
              <li><a href="/category/educacao" className="text-muted-foreground hover:text-telegram-blue transition-colors">Educação</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba os melhores grupos diretamente no seu e-mail
            </p>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Seu e-mail"
                  className="text-sm"
                />
                <Button variant="telegram" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Enviamos apenas conteúdo relevante, sem spam.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© {currentYear} Grupos do Telegram</span>
              <a href="/privacy" className="hover:text-telegram-blue transition-colors flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>Privacidade</span>
              </a>
              <a href="/terms" className="hover:text-telegram-blue transition-colors">Termos</a>
              <a href="/contact" className="hover:text-telegram-blue transition-colors flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>Contato</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>para a comunidade</span>
              <Globe className="w-4 h-4 text-telegram-blue" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;