import { Shield, Eye, Lock, Cookie, FileText, Users, Database, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  const dataCollected = [
    {
      type: "Informações de Conta",
      description: "Nome, e-mail e dados básicos do perfil quando você se cadastra",
      icon: <Users className="w-5 h-5 text-telegram-blue" />
    },
    {
      type: "Dados de Navegação",
      description: "Como você usa nossa plataforma, páginas visitadas e tempo de permanência",
      icon: <Eye className="w-5 h-5 text-telegram-blue" />
    },
    {
      type: "Informações de Dispositivo",
      description: "Tipo de dispositivo, navegador e endereço IP para segurança",
      icon: <Globe className="w-5 h-5 text-telegram-blue" />
    },
    {
      type: "Cookies",
      description: "Pequenos arquivos para melhorar sua experiência e funcionalidade do site",
      icon: <Cookie className="w-5 h-5 text-telegram-blue" />
    }
  ];

  const dataUsage = [
    "Fornecer e melhorar nossos serviços",
    "Personalizar sua experiência na plataforma",
    "Comunicar sobre atualizações e novos recursos",
    "Garantir a segurança e prevenir fraudes",
    "Cumprir obrigações legais e regulamentares",
    "Analisar o uso da plataforma para melhorias"
  ];

  const userRights = [
    {
      right: "Acesso aos Dados",
      description: "Solicite uma cópia de todos os dados que temos sobre você"
    },
    {
      right: "Correção de Dados",
      description: "Corrija informações incorretas ou desatualizadas"
    },
    {
      right: "Exclusão de Dados",
      description: "Solicite a remoção completa de seus dados pessoais"
    },
    {
      right: "Portabilidade",
      description: "Transfira seus dados para outras plataformas quando aplicável"
    },
    {
      right: "Restrição de Processamento",
      description: "Limite como processamos seus dados em certas circunstâncias"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Privacidade</h1>
          <p className="text-xl text-muted-foreground">
            Como coletamos, usamos e protegemos suas informações pessoais
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Última atualização: 25 de setembro de 2025
          </p>
        </div>

        {/* Introdução */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-telegram-blue" />
              <span>Compromisso com sua Privacidade</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              No Grupos do Telegram, levamos sua privacidade muito a sério. Esta política explica de forma 
              clara e transparente como coletamos, usamos, armazenamos e protegemos suas informações pessoais. 
              Estamos comprometidos em manter a confidencialidade de seus dados e cumprir todas as leis 
              aplicáveis de proteção de dados, incluindo a LGPD (Lei Geral de Proteção de Dados).
            </p>
          </CardContent>
        </Card>

        {/* Dados Coletados */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <Database className="w-6 h-6" />
            <span>Informações que Coletamos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataCollected.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.type}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Como Usamos os Dados */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="w-6 h-6 text-telegram-blue" />
              <span>Como Usamos suas Informações</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dataUsage.map((usage, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-telegram-blue rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">{usage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Seus Direitos */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Seus Direitos</h2>
          <div className="space-y-4">
            {userRights.map((right, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{right.right}</h3>
                  <p className="text-sm text-muted-foreground">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Segurança e Compartilhamento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Segurança dos Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
                suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Compartilhamento de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para operar nossos serviços ou por exigência legal.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contato */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-telegram-blue" />
              <span>Entre em Contato</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre esta política ou quiser exercer seus direitos de proteção de dados:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">E-mail</h4>
                <p className="text-sm text-muted-foreground">privacidade@gruposdotelegram.com</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Central de Ajuda</h4>
                <p className="text-sm text-muted-foreground">
                  <a href="/ajuda" className="text-telegram-blue hover:underline">
                    Formulário de contato
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

export default PoliticaPrivacidade;