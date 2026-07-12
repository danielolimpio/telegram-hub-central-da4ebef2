import capaTelegramNovidades from "@/assets/blog/telegram-novidades-2026-capa.jpg";
import capaCriarCanal from "@/assets/blog/telegram-criar-canal-2026-capa.jpg";
import capaGanharDinheiro from "@/assets/blog/telegram-ganhar-dinheiro-2026-capa.jpg";
import capaMiniApps from "@/assets/blog/telegram-mini-apps-2026-capa.jpg";
import capaBusiness from "@/assets/blog/telegram-business-2026-capa.jpg";
import capaBots from "@/assets/blog/telegram-bots-2026-capa.jpg";
import avatarDanielOlimpio from "@/assets/autor-daniel-olimpio.jpg";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  cover: string;
  category: "Ferramentas" | "Negócios" | "Comunidade" | "Grupos" | "Privacidade";
  categorySlug: string;
  author: {
    name: string;
    role: string;
    initials: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string; // ISO
  publishedLabel: string; // pt-BR
  readingTime: string;
  path: string;
}

const danielOlimpio = {
  name: "Daniel Olimpio",
  role: "Desenvolvedor Web e especialista em comunidades digitais",
  initials: "DO",
  avatar: avatarDanielOlimpio,
  bio:
    "Desenvolvedor web há mais de 15 anos, acompanha de perto a evolução do Telegram no Brasil. Escreve sobre canais, grupos, bots e monetização com base em testes reais, sem hype e sem fórmulas mágicas.",
};

export const articles: Article[] = [
  {
    slug: "telegram-para-empresas-2026-business-atendimento-automacao",
    title:
      "Telegram para Empresas em 2026: o Guia Definitivo de Telegram Business, Atendimento no Chat e Automação Inteligente",
    excerpt:
      "Perfil comercial, respostas rápidas, etiquetas, bots de atendimento, integração com CRM e Stars para receber pagamentos. Tudo o que uma pequena, média ou grande empresa precisa para vender e atender pelo Telegram em 2026 — com estratégia, sem achismo.",
    description:
      "Guia completo do Telegram para empresas em 2026: como usar Telegram Business, montar atendimento no chat, automatizar respostas com bots e integrar com CRM sem perder o toque humano.",
    cover: capaBusiness,
    category: "Negócios",
    categorySlug: "negocios",
    author: danielOlimpio,
    publishedAt: "2026-06-30",
    publishedLabel: "30 de junho de 2026",
    readingTime: "15 min de leitura",
    path: "/blog/telegram-para-empresas-2026-business-atendimento-automacao",
  },
  {
    slug: "bots-telegram-2026-como-criar-usar-escalar",
    title:
      "Bots no Telegram em 2026: Como Criar, Usar e Escalar Automações Inteligentes (Guia Definitivo com IA, API e Boas Práticas)",
    excerpt:
      "De BotFather a integrações com IA e pagamentos em Stars: um guia longo, honesto e prático sobre bots do Telegram em 2026. Como escolher, como criar, como monetizar e como não ser bloqueado no processo.",
    description:
      "Guia completo sobre bots do Telegram em 2026: como criar via BotFather, integrar com IA, monetizar com Stars e TON, evitar bloqueios e escalar automação sem parecer robô.",
    cover: capaBots,
    category: "Ferramentas",
    categorySlug: "ferramentas",
    author: danielOlimpio,
    publishedAt: "2026-06-30",
    publishedLabel: "30 de junho de 2026",
    readingTime: "16 min de leitura",
    path: "/blog/bots-telegram-2026-como-criar-usar-escalar",
  },
  {
    slug: "como-ganhar-dinheiro-telegram-2026-stars-ton",
    title:
      "Como Ganhar Dinheiro no Telegram em 2026: Stars, TON e o Guia Definitivo da Monetização",
    excerpt:
      "Stars, Toncoin, posts pagos, assinaturas, afiliados e Mini Apps: tudo o que funciona de verdade para monetizar no Telegram em 2026, com números, exemplos reais e os erros que ainda esvaziam contas todos os dias.",
    description:
      "Guia completo para ganhar dinheiro no Telegram em 2026: como usar Stars, TON, posts pagos, assinaturas e afiliados, quanto dá para faturar e como sacar com segurança.",
    cover: capaGanharDinheiro,
    category: "Negócios",
    categorySlug: "negocios",
    author: danielOlimpio,
    publishedAt: "2026-06-30",
    publishedLabel: "30 de junho de 2026",
    readingTime: "13 min de leitura",
    path: "/blog/como-ganhar-dinheiro-telegram-2026-stars-ton",
  },
  {
    slug: "telegram-mini-apps-2026-guia-completo",
    title:
      "Telegram Mini Apps em 2026: o Guia Completo para Usar, Criar e Faturar com a Nova Loja de Apps Dentro do Chat",
    excerpt:
      "Os Mini Apps viraram a maior revolução do Telegram desde os canais. Veja como eles funcionam, quais usar agora, como criar o seu e por que viraram o caminho mais curto para ganhar dinheiro com TON em 2026.",
    description:
      "Mini Apps do Telegram em 2026 explicados: o que são, quais valem a pena, como criar o seu, integração com TON, monetização, segurança e tendências para o próximo ano.",
    cover: capaMiniApps,
    category: "Ferramentas",
    categorySlug: "ferramentas",
    author: danielOlimpio,
    publishedAt: "2026-06-30",
    publishedLabel: "30 de junho de 2026",
    readingTime: "14 min de leitura",
    path: "/blog/telegram-mini-apps-2026-guia-completo",
  },
  {
    slug: "como-criar-canal-no-telegram-2026-monetizar-inscritos",
    title:
      "Como Criar um Canal no Telegram em 2026: o Guia Definitivo para Atrair Inscritos, Monetizar com Stars e Não Ser Bloqueado",
    excerpt:
      "Passo a passo honesto para abrir, configurar e crescer um canal do Telegram em 2026 — com monetização nativa por Stars, bots essenciais e os erros que ainda derrubam contas novas todos os dias.",
    description:
      "Guia 2026 para criar canal no Telegram do zero: configuração, link público, monetização por Stars, primeiros inscritos, bots indispensáveis e os erros que levam ao bloqueio.",
    cover: capaCriarCanal,
    category: "Ferramentas",
    categorySlug: "ferramentas",
    author: danielOlimpio,
    publishedAt: "2026-06-29",
    publishedLabel: "29 de junho de 2026",
    readingTime: "12 min de leitura",
    path: "/blog/como-criar-canal-no-telegram-2026-monetizar-inscritos",
  },
  {
    slug: "telegram-novidades-2026-recursos-canais-pagamentos",
    title:
      "Telegram em 2026: as novidades que mudaram a forma de conversar, criar comunidades e ganhar dinheiro pelo app",
    excerpt:
      "Stars, mini apps, canais monetizados, IA dentro do chat e novas camadas de privacidade. Um guia honesto, escrito por quem usa o Telegram todos os dias, sobre o que realmente vale a pena testar agora.",
    description:
      "Descubra as principais novidades do Telegram em 2026: pagamentos com Stars, mini apps, monetização de canais, IA integrada, Stories e atualizações de privacidade que estão atraindo milhões de brasileiros.",
    cover: capaTelegramNovidades,
    category: "Ferramentas",
    categorySlug: "ferramentas",
    author: danielOlimpio,
    publishedAt: "2026-06-27",
    publishedLabel: "27 de junho de 2026",
    readingTime: "11 min de leitura",
    path: "/blog/telegram-novidades-2026-recursos-canais-pagamentos",
  },
];

export const getRecentArticles = (limit = 3) =>
  [...articles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const getRelatedArticles = (slug: string, limit = 3) =>
  articles.filter((a) => a.slug !== slug).slice(0, limit);

export const getArticlesByCategory = (categorySlug: string) =>
  articles.filter((a) => a.categorySlug === categorySlug);