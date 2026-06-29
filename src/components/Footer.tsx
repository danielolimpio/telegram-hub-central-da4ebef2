import { Send, Heart, Mail, Globe, Users, Shield, Info, HelpCircle, BookOpen, Lock, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-telegram.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
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

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><Info className="w-3 h-3 mr-1" />Início</a></li>
              <li><a href="/sobre" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><Info className="w-3 h-3 mr-1" />Sobre</a></li>
              <li><a href="/como-funciona" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><HelpCircle className="w-3 h-3 mr-1" />Como funciona</a></li>
              <li><a href="/regras" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><Shield className="w-3 h-3 mr-1" />Regras da comunidade</a></li>
              <li><a href="/seguranca" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><Lock className="w-3 h-3 mr-1" />Dicas de segurança</a></li>
              
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/ajuda" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><HelpCircle className="w-3 h-3 mr-1" />Central de ajuda</a></li>
              <li><a href="/reportar" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><Shield className="w-3 h-3 mr-1" />Reportar problema</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><Info className="w-3 h-3 mr-1" />FAQ</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-telegram-blue transition-colors flex items-center"><BookOpen className="w-3 h-3 mr-1" />Blog</a></li>
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
                <Button variant="telegram" size="sm" aria-label="Inscrever-se na newsletter">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Enviamos apenas conteúdo relevante, sem spam.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a href="/privacidade" className="hover:text-telegram-blue transition-colors flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>Política de Privacidade</span>
              </a>
              <a href="/termos" className="hover:text-telegram-blue transition-colors flex items-center space-x-1">
                <Info className="w-3 h-3" />
                <span>Termos de Uso</span>
              </a>
              <a href="/cookies" className="hover:text-telegram-blue transition-colors flex items-center space-x-1">
                <Cookie className="w-3 h-3" />
                <span>Política de Cookies</span>
              </a>
              <a href="/sitemap" className="hover:text-telegram-blue transition-colors flex items-center space-x-1">
                <Globe className="w-3 h-3" />
                <span>Sitemap</span>
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© {currentYear} Grupos do Telegram | Todos os direitos reservados</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Desenvolvido por</span>
              <a 
                href="https://danielolimpio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-telegram-blue transition-colors font-medium"
              >
                <Heart className="w-4 h-4 text-red-500" />
                <span>DanielOlimpio</span>
                <Globe className="w-4 h-4 text-telegram-blue" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;