import { Shield, Eye, Lock, AlertTriangle, CheckCircle, UserX, MessageSquare, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DicasSeguranca = () => {
  const securityTips = [
    {
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      title: "Verifique o Grupo Antes de Entrar",
      description: "Leia a descrição, verifique o número de membros e observe se há moderadores ativos.",
      tips: [
        "Confira se o tema do grupo corresponde ao seu interesse",
        "Observe a qualidade das mensagens recentes",
        "Verifique se há administradores identificados",
        "Desconfie de grupos com poucos membros mas muitas mensagens"
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      title: "Proteja Suas Informações Pessoais",
      description: "Nunca compartilhe dados sensíveis em grupos públicos do Telegram.",
      tips: [
        "Não divulgue seu número de telefone completo",
        "Evite compartilhar endereço residencial",
        "Não envie fotos de documentos pessoais",
        "Cuidado com informações financeiras",
        "Use apelidos ao invés do nome completo"
      ]
    },
    {
      icon: <UserX className="w-6 h-6 text-red-500" />,
      title: "Identifique Golpes Comuns",
      description: "Aprenda a reconhecer tentativas de fraude em grupos do Telegram.",
      tips: [
        "Desconfie de promoções 'imperdíveis' ou muito boas",
        "Cuidado com pedidos de pagamento antecipado",
        "Não clique em links suspeitos",
        "Esquemas de 'dinheiro fácil' são quase sempre golpes",
        "Verifique a veracidade de ofertas de emprego"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      title: "Práticas de Comunicação Segura",
      description: "Como se comunicar de forma segura em grupos do Telegram.",
      tips: [
        "Pense duas vezes antes de enviar mensagens",
        "Não responda a provocações ou discussões",
        "Use mensagens privadas para assuntos pessoais",
        "Denuncie comportamentos inadequados",
        "Mantenha conversas respeitosas"
      ]
    }
  ];

  const warningSignals = [
    {
      signal: "Pedidos de dinheiro urgentes",
      description: "Golpistas frequentemente criam senso de urgência"
    },
    {
      signal: "Ofertas de investimento garantido",
      description: "Nenhum investimento é 100% garantido"
    },
    {
      signal: "Solicitação de dados bancários",
      description: "Bancos nunca pedem dados por mensagem"
    },
    {
      signal: "Links suspeitos ou encurtados",
      description: "Podem levar a sites maliciosos"
    },
    {
      signal: "Pessoas se passando por autoridades",
      description: "Órgãos oficiais não fazem contato por Telegram"
    }
  ];

  const privacySettings = [
    {
      setting: "Número de Telefone",
      recommendation: "Visível apenas para contatos",
      icon: <Lock className="w-4 h-4" />
    },
    {
      setting: "Foto do Perfil",
      recommendation: "Visível para todos ou apenas contatos",
      icon: <Eye className="w-4 h-4" />
    },
    {
      setting: "Último Acesso",
      recommendation: "Visível apenas para contatos",
      icon: <Shield className="w-4 h-4" />
    },
    {
      setting: "Grupos e Canais",
      recommendation: "Apenas contatos podem adicionar você",
      icon: <Settings className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Dicas de Segurança</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantenha-se seguro ao participar de grupos do Telegram com nossas dicas essenciais de segurança
          </p>
        </div>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Lembre-se:</strong> Sua segurança é responsabilidade compartilhada. 
            Sempre use o bom senso e desconfie de ofertas muito boas para ser verdade.
          </AlertDescription>
        </Alert>

        {/* Dicas Principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {securityTips.map((tip, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  {tip.icon}
                  <span>{tip.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{tip.description}</p>
                <ul className="space-y-2">
                  {tip.tips.map((tipItem, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tipItem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sinais de Alerta */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Sinais de Alerta para Golpes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSignals.map((warning, index) => (
              <Card key={index} className="border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{warning.signal}</h3>
                      <p className="text-sm text-muted-foreground">{warning.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Configurações de Privacidade */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Configurações de Privacidade Recomendadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privacySettings.map((setting, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {setting.icon}
                      <h3 className="font-semibold text-foreground">{setting.setting}</h3>
                    </div>
                    <Badge variant="secondary">Recomendado</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{setting.recommendation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Como Denunciar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              <span>Como Denunciar Problemas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Se você encontrar atividades suspeitas ou comportamentos inadequados:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <h4 className="font-semibold mb-2">No Telegram</h4>
                  <p className="text-sm text-muted-foreground">
                    Use a função "Reportar" dentro do próprio aplicativo
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Em Nossa Plataforma</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href="/reportar" className="text-telegram-blue hover:underline">
                      Acesse nossa página de denúncia
                    </a>
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Autoridades</h4>
                  <p className="text-sm text-muted-foreground">
                    Em casos graves, procure órgãos competentes
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default DicasSeguranca;