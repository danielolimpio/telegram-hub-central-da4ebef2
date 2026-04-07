import { jsxs, jsx } from "react/jsx-runtime";
import { HelpCircle, ChevronDown, MessageCircle, Mail } from "lucide-react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BUhh-XFb.js";
import { B as Button } from "./button-CeG9Zf-X.js";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { useState } from "react";
import { H as Header, F as Footer } from "./Footer-cKFdrH7a.js";
import { S as SEOHead } from "./SEOHead-CwmPxazL.js";
import { F as FAQSchema, B as BreadcrumbSchema } from "./JsonLd-DQdzIALA.js";
import { m as mainPagesSEO } from "./seo-DxaWTmB0.js";
import "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "./client-Du4NYLEw.js";
import "@supabase/supabase-js";
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);
  const toggleItem = (index) => {
    setOpenItems(
      (prev) => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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
          answer: "Temos várias opções: E-mail (suporte@gruposdotelegram.com), Telegram (@gruposdotelegram), Central de Ajuda no site, ou formulário de contato. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h."
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-subtle", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: mainPagesSEO.faq.title,
        description: mainPagesSEO.faq.description,
        canonical: mainPagesSEO.faq.canonical
      }
    ),
    /* @__PURE__ */ jsx(FAQSchema, { items: faqSections.flatMap(
      (section) => section.faqs.map((faq) => ({
        question: faq.question,
        answer: faq.answer
      }))
    ) }),
    /* @__PURE__ */ jsx(BreadcrumbSchema, { items: [
      { name: "Início", url: "https://gruposdotelegram.org/" },
      { name: "FAQ", url: "https://gruposdotelegram.org/faq/" }
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-16 h-16 text-telegram-blue" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "FAQ - Perguntas Frequentes" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Separamos abaixo as dúvidas mais comuns sobre grupos do Telegram e nossa plataforma" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: faqSections.map((section, sectionIndex) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: section.title }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: section.faqs.map((faq, faqIndex) => {
          const itemIndex = sectionIndex * 100 + faqIndex;
          const isOpen = openItems.includes(itemIndex);
          return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(Collapsible, { children: [
            /* @__PURE__ */ jsx(
              CollapsibleTrigger,
              {
                className: "w-full",
                onClick: () => toggleItem(itemIndex),
                children: /* @__PURE__ */ jsx(CardHeader, { className: "hover:bg-muted/50 transition-colors", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between text-left", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-lg", children: faq.question }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: `w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`
                    }
                  )
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: faq.answer }) }) })
          ] }) }, faqIndex);
        }) })
      ] }, sectionIndex)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: "Não encontrou sua resposta?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Nossa equipe de suporte está pronta para ajudá-lo" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "default", className: "bg-green-500 hover:bg-green-600", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://wa.me/5511999999999?text=Olá, gostaria de falar sobre o Grupos do Telegram!",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4 mr-2" }),
                "Falar no Telegram"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxs("a", { href: "mailto:suporte@gruposdotelegram.com", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 mr-2" }),
            "Enviar Email"
          ] }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  FAQ as default
};
