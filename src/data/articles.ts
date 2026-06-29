import capaTelegramNovidades from "@/assets/blog/telegram-novidades-2026-capa.jpg";
import capaCriarCanal from "@/assets/blog/telegram-criar-canal-2026-capa.jpg";
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