import { HelpCircle, ChevronDown, MessageCircle, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqSections = [
    {
      title: "🔹 Sobre o portal",
      faqs: [
        {
          question: "O que é o Grupos do Telegram?",
          answer: "O Grupos do Telegram é a maior plataforma brasileira para descoberta de grupos do Telegram. Conectamos pessoas com interesses similares através de uma comunidade organizada e segura, com mais de 12.500 grupos ativos em mais de 25 categorias diferentes."
        },
        {
          question: "O site é gratuito?",
          answer: "Sim! Nossa plataforma é 100% gratuita para encontrar e enviar grupos. Cobramos apenas pelos serviços premium de destaque e impulsionamento, que são opcionais."
        },
        {
          question: "O site é confiável e seguro?",
          answer: "Absolutamente! Todos os grupos passam por moderação manual, seguimos rigorosas políticas de segurança e privacidade, e temos uma equipe dedicada para garantir a qualidade da comunidade. Operamos há anos conectando milhares de pessoas com segurança."
        }
      ]
    },
    {
      title: "🔹 Cadastro e gerenciamento",
      faqs: [
        {
          question: "Como cadastrar meu grupo do Telegram no portal?",
          answer: "É simples! Acesse a página 'Enviar Grupo', preencha as informações (nome, descrição, categoria, link), e envie para análise. Certifique-se de que seu grupo atende às nossas diretrizes da comunidade."
        },
        {
          question: "Quanto tempo demora para aprovar meu grupo?",
          answer: "Normalmente entre 24 a 48 horas. O tempo pode variar dependendo do volume de submissões e da complexidade da análise. Grupos que seguem todas as diretrizes são aprovados mais rapidamente."
        },
        {
          question: "Por que meu grupo pode ser reprovado?",
          answer: "Grupos são reprovados se violarem nossas regras: conteúdo adulto, atividades ilegais, spam excessivo, discurso de ódio, informações falsas ou incompletas. Revise nossas diretrizes antes de enviar."
        },
        {
          question: "Como editar informações de um grupo já enviado?",
          answer: "Entre em contato conosco através do e-mail suporte@gruposdotelegram.com com o link do seu grupo e as informações que deseja alterar. Processamos alterações em até 24 horas."
        },
        {
          question: "Como remover ou cancelar um grupo que enviei?",
          answer: "Envie um e-mail para suporte@gruposdotelegram.com solicitando a remoção, incluindo o link do grupo e confirmando que você é o administrador. A remoção é processada em até 24 horas."
        }
      ]
    },
    {
      title: "🔹 Divulgação e destaque",
      faqs: [
        {
          question: "Como faço para destacar meu grupo no portal?",
          answer: "Acesse a página 'Impulsionar Grupos' e escolha um dos nossos planos: Destaque Básico (R$ 19,90/7 dias), Premium (R$ 39,90/15 dias) ou Super Premium (R$ 69,90/30 dias). Cada plano oferece benefícios específicos."
        },
        {
          question: "O que é um grupo Premium?",
          answer: "Grupos Premium recebem destaque especial: selo Premium, posição privilegiada nos resultados, aparição na seção de destaques, estatísticas avançadas e suporte prioritário. É a melhor forma de acelerar o crescimento do seu grupo."
        },
        {
          question: "Quanto custa para impulsionar um grupo?",
          answer: "Oferecemos 3 planos: Básico R$ 19,90 (7 dias), Premium R$ 39,90 (15 dias) e Super Premium R$ 69,90 (30 dias). Todos incluem garantia de 7 dias de satisfação ou seu dinheiro de volta."
        },
        {
          question: "Quais são as formas de pagamento?",
          answer: "Aceitamos PIX (desconto de 5%), cartão de crédito, cartão de débito e boleto bancário. O PIX é processado instantaneamente, cartões em até 2 horas, e boleto em até 3 dias úteis."
        },
        {
          question: "Como impulsionar meu grupo?",
          answer: "1) Escolha o plano na página 'Impulsionar Grupos', 2) Faça o pagamento, 3) Seu grupo recebe destaque em até 2 horas, 4) Acompanhe os resultados no painel de estatísticas."
        }
      ]
    },
    {
      title: "🔹 Participação em grupos",
      faqs: [
        {
          question: "Como entrar em um grupo listado no portal?",
          answer: "Clique no botão 'Entrar' do grupo desejado. Você será redirecionado para o Telegram. Se o link não funcionar, pode ser que o grupo esteja temporariamente indisponível ou tenha atingido o limite de membros."
        },
        {
          question: "Posso enviar qualquer tipo de grupo?",
          answer: "Não. Aceitamos apenas grupos que seguem nossas diretrizes: sem conteúdo adulto, atividades ilegais, discurso de ódio ou spam excessivo. Priorizamos grupos educacionais, profissionais, hobbies e comunidades saudáveis."
        }
      ]
    },
    {
      title: "🔹 Dúvidas sobre o Telegram",
      faqs: [
        {
          question: "Como criar um grupo no Telegram?",
          answer: "No Telegram: 1) Toque no ícone de lápis, 2) Selecione 'Novo Grupo', 3) Adicione membros iniciais, 4) Escolha nome e foto, 5) Configure as permissões. Para grupos públicos, crie um link de convite nas configurações."
        },
        {
          question: "Como convidar pessoas para o meu grupo?",
          answer: "Nas configurações do grupo, gere um link de convite e compartilhe. Você também pode adicionar contatos diretamente ou compartilhar o link em outras plataformas (respeitando as regras de cada local)."
        },
        {
          question: "Como sair de um grupo no Telegram?",
          answer: "Abra o grupo, toque no nome do grupo no topo, role para baixo e selecione 'Sair do grupo'. Você pode silenciar notificações antes de sair se preferir."
        },
        {
          question: "Como denunciar um grupo no Telegram?",
          answer: "No grupo, toque no nome, depois nos três pontos (...) e selecione 'Denunciar'. Escolha o motivo e envie. Você também pode nos denunciar através da nossa página 'Reportar Problema'."
        }
      ]
    },
    {
      title: "🔹 Suporte",
      faqs: [
        {
          question: "Como entrar em contato com o suporte do portal?",
          answer: "Temos várias opções: E-mail (suporte@gruposdotelegram.com), WhatsApp (+55 11 99999-9999), Central de Ajuda no site, ou formulário de contato. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-16 h-16 text-telegram-blue" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">FAQ - Perguntas Frequentes</h1>
          <p className="text-xl text-muted-foreground">
            Separamos abaixo as dúvidas mais comuns sobre grupos do Telegram e nossa plataforma
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
              <div className="space-y-4">
                {section.faqs.map((faq, faqIndex) => {
                  const itemIndex = sectionIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <Card key={faqIndex}>
                      <Collapsible>
                        <CollapsibleTrigger 
                          className="w-full"
                          onClick={() => toggleItem(itemIndex)}
                        >
                          <CardHeader className="hover:bg-muted/50 transition-colors">
                            <CardTitle className="flex items-center justify-between text-left">
                              <span className="text-lg">{faq.question}</span>
                              <ChevronDown 
                                className={`w-5 h-5 text-muted-foreground transition-transform ${
                                  isOpen ? 'rotate-180' : ''
                                }`} 
                              />
                            </CardTitle>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Não encontrou sua resposta?</CardTitle>
              <p className="text-muted-foreground">
                Nossa equipe de suporte está pronta para ajudá-lo
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" className="bg-green-500 hover:bg-green-600">
                  <a 
                    href="https://wa.me/5511999999999?text=Olá, gostaria de falar sobre o Grupos do Telegram!" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:suporte@gruposdotelegram.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;