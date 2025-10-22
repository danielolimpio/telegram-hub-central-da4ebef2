import { Cookie, Settings, Shield, Eye, BarChart, Globe, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Sempre habilitado
    analytics: true,
    marketing: false,
    personalization: true
  });

  const cookieTypes = [
    {
      name: "Cookies Essenciais",
      key: "essential",
      required: true,
      description: "Necessários para o funcionamento básico do site. Não podem ser desabilitados.",
      examples: "Autenticação, preferências de idioma, carrinho de compras",
      icon: <Shield className="w-5 h-5 text-green-500" />
    },
    {
      name: "Cookies de Analytics",
      key: "analytics",
      required: false,
      description: "Nos ajudam a entender como você usa o site para melhorar a experiência.",
      examples: "Google Analytics, estatísticas de uso, métricas de performance",
      icon: <BarChart className="w-5 h-5 text-telegram-blue" />
    },
    {
      name: "Cookies de Marketing",
      key: "marketing", 
      required: false,
      description: "Usados para exibir anúncios relevantes e medir a eficácia das campanhas.",
      examples: "Google Ads, Facebook Pixel, remarketing",
      icon: <Eye className="w-5 h-5 text-purple-500" />
    },
    {
      name: "Cookies de Personalização",
      key: "personalization",
      required: false,
      description: "Permitem personalizar sua experiência com base em suas preferências.",
      examples: "Tema escuro/claro, grupos salvos, recomendações personalizadas",
      icon: <Settings className="w-5 h-5 text-orange-500" />
    }
  ];

  const thirdPartyCookies = [
    {
      service: "Google Analytics",
      purpose: "Análise de tráfego e comportamento dos usuários",
      data: "Páginas visitadas, tempo de sessão, origem do tráfego",
      retention: "26 meses"
    },
    {
      service: "Google Ads",
      purpose: "Remarketing e otimização de campanhas publicitárias",
      data: "Interações com anúncios, conversões",
      retention: "90 dias"
    },
    {
      service: "Hotjar",
      purpose: "Análise de experiência do usuário e mapas de calor",
      data: "Movimentos do mouse, cliques, rolagem da página",
      retention: "365 dias"
    }
  ];

  const handlePreferenceChange = (key: string, value: boolean) => {
    if (key === 'essential') return; // Não pode desabilitar cookies essenciais
    
    setCookiePreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const savePreferences = () => {
    // Aqui você salvaria as preferências no localStorage ou enviaria para o servidor
    console.log('Preferências salvas:', cookiePreferences);
    // Mostrar toast de sucesso
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Cookie className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Cookies</h1>
          <p className="text-xl text-muted-foreground">
            Como usamos cookies para melhorar sua experiência em nossa plataforma
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Última atualização: 25 de setembro de 2025
          </p>
        </div>

        {/* O que são Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-telegram-blue" />
              <span>O que são Cookies?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, tablet ou celular) 
              quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais 
              eficiente, bem como fornecer informações aos proprietários do site sobre como os usuários interagem com suas páginas.
            </p>
          </CardContent>
        </Card>

        {/* Tipos de Cookies */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Tipos de Cookies que Usamos</h2>
          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      {type.icon}
                      <span>{type.name}</span>
                      {type.required && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Obrigatório
                        </span>
                      )}
                    </CardTitle>
                    <Switch
                      checked={cookiePreferences[type.key as keyof typeof cookiePreferences]}
                      onCheckedChange={(checked) => handlePreferenceChange(type.key, checked)}
                      disabled={type.required}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{type.description}</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Exemplos:</strong> {type.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Controles de Cookie */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-6 h-6 text-telegram-blue" />
              <span>Suas Preferências de Cookie</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Você pode controlar quais cookies aceita. Note que desabilitar certos cookies pode afetar 
              a funcionalidade do site.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={savePreferences}
                className="bg-telegram-blue hover:bg-telegram-blue/90"
              >
                Salvar Preferências
              </Button>
              <Button 
                variant="outline"
                onClick={() => setCookiePreferences({
                  essential: true,
                  analytics: false,
                  marketing: false,
                  personalization: false
                })}
              >
                Aceitar Apenas Essenciais
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Cookies de Terceiros */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Cookies de Terceiros</h2>
          <p className="text-muted-foreground mb-4">
            Também utilizamos serviços de terceiros que podem definir seus próprios cookies:
          </p>
          <div className="space-y-4">
            {thirdPartyCookies.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{service.service}</h4>
                      <p className="text-xs text-muted-foreground">Serviço</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{service.purpose}</p>
                      <p className="text-xs text-muted-foreground">Finalidade</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{service.data}</p>
                      <p className="text-xs text-muted-foreground">Dados Coletados</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{service.retention}</p>
                      <p className="text-xs text-muted-foreground">Retenção</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Como Gerenciar Cookies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gerenciar no Navegador</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Você pode controlar cookies através das configurações do seu navegador:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Chrome: Configurações → Privacidade → Cookies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Firefox: Preferências → Privacidade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Safari: Preferências → Privacidade</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Opt-out de Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Para opt-out de serviços específicos:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-3 h-3 text-red-500" />
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-telegram-blue hover:underline">
                    Google Analytics Opt-out
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="w-3 h-3 text-red-500" />
                  <a href="https://www.hotjar.com/legal/compliance/opt-out" className="text-telegram-blue hover:underline">
                    Hotjar Opt-out
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contato */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cookie className="w-6 h-6 text-telegram-blue" />
              <span>Dúvidas sobre Cookies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre nossa política de cookies:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">E-mail</h4>
                <p className="text-sm text-muted-foreground">cookies@gruposdotelegram.com</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Central de Ajuda</h4>
                <p className="text-sm text-muted-foreground">
                  <a href="/ajuda" className="text-telegram-blue hover:underline">
                    Suporte técnico
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;