import { Zap, TrendingUp, Star, Users, Eye, Crown, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ImpulsionarGrupos = () => {
  const plans = [
    {
      name: "Destaque Básico",
      price: "R$ 19,90",
      period: "7 dias",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      benefits: [
        "Aparece na seção de destaques",
        "Selo 'Destaque' no grupo",
        "Prioridade nos resultados de busca",
        "Estatísticas básicas"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "R$ 39,90",
      period: "15 dias",
      icon: <Crown className="w-6 h-6 text-purple-500" />,
      benefits: [
        "Tudo do plano Básico",
        "Posição fixa no topo da categoria",
        "Selo 'Premium' destacado",
        "Estatísticas avançadas",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Super Premium",
      price: "R$ 69,90",
      period: "30 dias",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      benefits: [
        "Tudo do plano Premium",
        "Aparece na página inicial",
        "Newsletter dedicada",
        "Relatórios detalhados",
        "Consultoria personalizada"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Mais Visibilidade",
      description: "Seu grupo aparece em posições privilegiadas e ganha destaque visual especial."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Crescimento Acelerado",
      description: "Grupos impulsionados têm em média 300% mais novos membros."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: "Maior Alcance",
      description: "Apareça nos primeiros resultados de busca e na página inicial."
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Credibilidade",
      description: "Selos de destaque aumentam a confiança dos usuários no seu grupo."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Escolha o Plano",
      description: "Selecione o plano que melhor atende suas necessidades e orçamento."
    },
    {
      step: 2,
      title: "Faça o Pagamento",
      description: "Processo seguro com PIX, cartão de crédito ou boleto bancário."
    },
    {
      step: 3,
      title: "Ativação Imediata",
      description: "Seu grupo recebe o impulso em até 2 horas após confirmação do pagamento."
    },
    {
      step: 4,
      title: "Acompanhe Resultados",
      description: "Monitore o crescimento através do painel de estatísticas."
    }
  ];

  const stats = [
    { number: "300%", label: "Mais membros em média" },
    { number: "5x", label: "Mais visualizações" },
    { number: "48h", label: "Ativação máxima" },
    { number: "97%", label: "Satisfação dos clientes" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Zap className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Impulsionar Grupos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dê destaque ao seu grupo do Telegram e acelere o crescimento da sua comunidade
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-telegram-blue">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Por que Impulsionar seu Grupo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Escolha seu Plano
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-telegram-blue shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-telegram-blue">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{plan.icon}</div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <span className="text-3xl font-bold text-telegram-blue">{plan.price}</span>
                    <p className="text-muted-foreground">por {plan.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-telegram-blue hover:bg-telegram-blue/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Escolher Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* How it Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-telegram-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Quando meu grupo ficará em destaque?</h4>
                <p className="text-sm text-muted-foreground">
                  Em até 2 horas após a confirmação do pagamento seu grupo receberá o destaque.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Posso renovar o plano?</h4>
                <p className="text-sm text-muted-foreground">
                  Sim, você pode renovar quantas vezes quiser, inclusive com desconto.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Há garantia de resultados?</h4>
                <p className="text-sm text-muted-foreground">
                  Oferecemos 7 dias de garantia ou seu dinheiro de volta.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quais formas de pagamento?</h4>
                <p className="text-sm text-muted-foreground">
                  Aceitamos PIX, cartão de crédito, débito e boleto bancário.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Pronto para Acelerar o Crescimento?
          </h2>
          <p className="text-muted-foreground mb-6">
            Junte-se a centenas de grupos que já impulsionaram seu crescimento conosco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-telegram-blue hover:bg-telegram-blue/90">
              <Clock className="w-4 h-4 mr-2" />
              Impulsionar Agora
            </Button>
            <Button size="lg" variant="outline">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpulsionarGrupos;