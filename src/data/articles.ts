import capaTelegramNovidades from "@/assets/blog/telegram-novidades-2026-capa.jpg";

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
  };
  publishedAt: string; // ISO
  publishedLabel: string; // pt-BR
  readingTime: string;
  path: string;
}

export const articles: Article[] = [
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
    author: {
      name: "Rafael Monteiro",
      role: "Editor de tecnologia e criador de comunidades no Telegram desde 2017",
      initials: "RM",
    },
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