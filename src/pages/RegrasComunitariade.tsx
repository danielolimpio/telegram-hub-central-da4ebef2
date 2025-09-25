import { Shield, AlertTriangle, CheckCircle, XCircle, Users, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const RegrasComunidade = () => {
  const allowedContent = [
    "Grupos educacionais e de aprendizado",
    "Comunidades de hobbies e interesses",
    "Grupos profissionais e networking",
    "Comunidades de suporte e ajuda mútua",
    "Grupos de discussão respeitosa",
    "Canais informativos e notícias",
    "Grupos de vendas legítimas (sem spam)",
    "Comunidades de entretenimento saudável"
  ];

  const prohibitedContent = [
    "Conteúdo adulto ou pornográfico",
    "Promoção de atividades ilegais",
    "Discurso de ódio ou discriminação",
    "Spam ou conteúdo promocional excessivo",
    "Grupos de pirataria ou conteúdo protegido",
    "Esquemas de pirâmide ou golpes",
    "Conteúdo violento ou perturbador",
    "Grupos que promovem automutilação"
  ];

  const communityGuidelines = [
    {
      title: "Respeito Mútuo",
      description: "Trate todos os membros com cortesia e respeito, independente de suas opiniões ou características pessoais."
    },
    {
      title: "Conteúdo Relevante",
      description: "Mantenha as discussões focadas no tema do grupo e evite spam ou mensagens repetitivas."
    },
    {
      title: "Privacidade",
      description: "Não compartilhe informações pessoais de outros membros sem permissão explícita."
    },
    {
      title: "Moderação",
      description: "Respeite as decisões dos moderadores e administradores do grupo."
    }
  ];

  const consequences = [
    {
      level: "Advertência",
      description: "Primeira violação menor das regras",
      action: "Notificação e orientação sobre as regras"
    },
    {
      level: "Suspensão Temporária",
      description: "Violações repetidas ou moderadas",
      action: "Remoção temporária da plataforma por 7-30 dias"
    },
    {
      level: "Banimento Permanente",
      description: "Violações graves ou repetidas após suspensão",
      action: "Remoção permanente da plataforma"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Regras da Comunidade</h1>
          <p className="text-xl text-muted-foreground">
            Diretrizes para manter nossa comunidade segura e respeitosa para todos
          </p>
        </div>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Importante:</strong> Todos os grupos passam por moderação antes de serem aprovados. 
            O não cumprimento destas regras pode resultar na rejeição do grupo ou banimento da plataforma.
          </AlertDescription>
        </Alert>

        {/* Conteúdo Permitido */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span>Conteúdo Permitido</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {allowedContent.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conteúdo Proibido */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <XCircle className="w-6 h-6 text-red-500" />
              <span>Conteúdo Proibido</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {prohibitedContent.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Diretrizes da Comunidade */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <Users className="w-6 h-6" />
            <span>Diretrizes da Comunidade</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityGuidelines.map((guideline, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{guideline.title}</h3>
                  <p className="text-muted-foreground text-sm">{guideline.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Consequências */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <MessageCircle className="w-6 h-6" />
            <span>Consequências por Violações</span>
          </h2>
          <div className="space-y-4">
            {consequences.map((consequence, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{consequence.level}</h3>
                    <Badge variant={index === 0 ? "secondary" : index === 1 ? "default" : "destructive"}>
                      Nível {index + 1}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{consequence.description}</p>
                  <p className="text-sm font-medium">{consequence.action}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Processo de Denúncia */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              <span>Como Denunciar Violações</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Se você encontrar conteúdo que viola nossas regras, pode denunciá-lo através dos seguintes canais:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">E-mail</h4>
                  <p className="text-sm text-muted-foreground">denuncia@gruposdotelegram.com</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Formulário</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href="/reportar" className="text-telegram-blue hover:underline">
                      Página de denúncia
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegrasComunidade;