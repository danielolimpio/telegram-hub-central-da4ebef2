import { FileText, Shield, Users, AlertTriangle, CheckCircle, XCircle, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUso = () => {
  const userResponsibilities = [
    "Fornecer informações verdadeiras e atualizadas",
    "Manter a segurança de sua conta e senha",
    "Usar a plataforma apenas para fins legítimos",
    "Respeitar os direitos de outros usuários",
    "Não violar direitos de propriedade intelectual",
    "Seguir as regras da comunidade estabelecidas"
  ];

  const prohibitedActivities = [
    "Enviar conteúdo ilegal, ofensivo ou inadequado",
    "Fazer spam ou envios em massa não solicitados",
    "Tentar acessar contas de outros usuários",
    "Usar bots ou automação não autorizados",
    "Interferir no funcionamento da plataforma",
    "Criar múltiplas contas para contornar restrições"
  ];

  const intellectualProperty = [
    {
      title: "Conteúdo da Plataforma",
      description: "O design, código, texto e outros elementos da plataforma são protegidos por direitos autorais."
    },
    {
      title: "Conteúdo do Usuário",
      description: "Você mantém os direitos sobre o conteúdo que envia, mas nos concede licença para usar na plataforma."
    },
    {
      title: "Marcas Registradas",
      description: "Nosso nome, logo e marcas são propriedade exclusiva e não podem ser usados sem autorização."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Scale className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Termos de Uso</h1>
          <p className="text-xl text-muted-foreground">
            Regras e condições para uso da plataforma Grupos do Telegram
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Última atualização: 25 de setembro de 2025
          </p>
        </div>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Importante:</strong> Ao usar nossa plataforma, você concorda automaticamente com estes termos. 
            Se não concorda, por favor, não use nossos serviços.
          </AlertDescription>
        </Alert>

        {/* Aceitação dos Termos */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-telegram-blue" />
              <span>Aceitação dos Termos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Bem-vindo ao Grupos do Telegram! Estes Termos de Uso estabelecem as regras para o uso de nossa 
              plataforma de descoberta de grupos do Telegram. Ao acessar ou usar nossos serviços, você concorda 
              em cumprir estes termos e todas as leis aplicáveis. Se você não concorda com qualquer parte destes 
              termos, não deve usar nossa plataforma.
            </p>
          </CardContent>
        </Card>

        {/* Descrição do Serviço */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-telegram-blue" />
              <span>Nossos Serviços</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              O Grupos do Telegram é uma plataforma que permite aos usuários:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">Descobrir grupos públicos do Telegram organizados por categorias</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">Enviar seus próprios grupos para moderação e aprovação</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">Pesquisar grupos por temas específicos de interesse</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">Acessar dicas de segurança e melhores práticas</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Responsabilidades do Usuário */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <Shield className="w-6 h-6" />
            <span>Suas Responsabilidades</span>
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {userResponsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{responsibility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Atividades Proibidas */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <XCircle className="w-6 h-6 text-red-500" />
            <span>Atividades Proibidas</span>
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Propriedade Intelectual */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Propriedade Intelectual</h2>
          <div className="space-y-4">
            {intellectualProperty.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Limitação de Responsabilidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Limitação de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Não nos responsabilizamos pelo conteúdo dos grupos listados em nossa plataforma. 
                Os usuários são inteiramente responsáveis pelas interações que ocorrem nos grupos do Telegram.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Modificações dos Termos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Podemos atualizar estes termos periodicamente. Notificaremos sobre mudanças significativas 
                e o uso continuado após as mudanças constitui aceitação dos novos termos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contato */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-telegram-blue" />
              <span>Dúvidas sobre os Termos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">E-mail Jurídico</h4>
                <p className="text-sm text-muted-foreground">legal@gruposdotelegram.com</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Central de Ajuda</h4>
                <p className="text-sm text-muted-foreground">
                  <a href="/ajuda" className="text-telegram-blue hover:underline">
                    Suporte online
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

export default TermosUso;