import { MessageCircle, Search, Shield, CheckCircle, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ComoFunciona = () => {
  const steps = [
    {
      icon: <Users className="w-8 h-8 text-telegram-blue" />,
      title: "1. Cadastre-se",
      description: "Crie sua conta gratuita para começar a enviar grupos ou acesse grupos públicos sem cadastro."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-telegram-blue" />,
      title: "2. Envie seu Grupo",
      description: "Adicione o link do seu grupo do Telegram com nome, categoria e descrição detalhada."
    },
    {
      icon: <Shield className="w-8 h-8 text-telegram-blue" />,
      title: "3. Moderação",
      description: "Nossa equipe analisa todos os grupos para garantir qualidade e segurança da comunidade."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-telegram-blue" />,
      title: "4. Aprovação",
      description: "Grupos aprovados ficam visíveis para todos os usuários da plataforma."
    },
    {
      icon: <Search className="w-8 h-8 text-telegram-blue" />,
      title: "5. Descubra Grupos",
      description: "Explore milhares de grupos organizados por mais de 25 categorias diferentes."
    },
    {
      icon: <Heart className="w-8 h-8 text-telegram-blue" />,
      title: "6. Conecte-se",
      description: "Entre nos grupos que interessam você e conecte-se com pessoas que compartilham seus interesses."
    }
  ];

  const advantages = [
    "Acesso gratuito a milhares de grupos",
    "Grupos organizados por mais de 25 categorias",
    "Moderação ativa para garantir qualidade",
    "Interface simples e intuitiva",
    "Atualização constante de novos grupos",
    "Comunidade segura e confiável"
  ];

  const faqs = [
    {
      question: "É gratuito?",
      answer: "Sim! Nossa plataforma é 100% gratuita para encontrar e enviar grupos do Telegram."
    },
    {
      question: "Como os grupos são moderados?",
      answer: "Cada grupo passa por análise manual para verificar se atende nossas diretrizes de comunidade e não contém conteúdo inadequado."
    },
    {
      question: "Posso enviar quantos grupos quiser?",
      answer: "Sim, não há limite para envio de grupos, desde que sigam nossas regras e diretrizes da comunidade."
    },
    {
      question: "Quanto tempo leva para aprovar um grupo?",
      answer: "Normalmente entre 24 a 48 horas, dependendo do volume de submissões e complexidade da análise."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Como Funciona</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como nossa plataforma conecta pessoas através de grupos do Telegram organizados e seguros
          </p>
        </div>

        {/* Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16" />

        {/* Vantagens */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Vantagens da Nossa Plataforma
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Por que escolher nossa plataforma para encontrar grupos do Telegram
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                <CheckCircle className="w-5 h-5 text-telegram-blue flex-shrink-0" />
                <span className="text-foreground">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* FAQ */}
        <div>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Tire suas principais dúvidas sobre o funcionamento
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-3">
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-telegram-blue hover:bg-telegram-blue/90">
            <a href="/submit">Enviar Meu Grupo</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComoFunciona;