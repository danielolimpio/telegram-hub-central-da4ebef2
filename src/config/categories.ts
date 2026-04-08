// Canonical category names used in the database
// Dashboard, Admin, and category pages must all use these exact values
export const CATEGORIES = [
  "Grupos do Telegram de Amizades",
  "Grupos do Telegram de Filmes e Cinema",
  "Grupos do Telegram de Cursos",
  "Grupos do Telegram de Divulgação",
  "Grupos do Telegram de Encontros",
  "Grupos do Telegram de Esportes",
  "Grupos do Telegram de Estilo e Moda",
  "Grupos do Telegram de Estudos",
  "Grupos do Telegram de Figurinhas",
  "Grupos do Telegram de Games",
  "Grupos do Telegram de Investimentos",
  "Grupos do Telegram de LGBTQIA+",
  "Grupos do Telegram de Liberais",
  "Grupos do Telegram de Livros",
  "Grupos do Telegram de Músicas",
  "Grupos do Telegram de Namoros",
  "Grupos do Telegram de Notícias",
  "Grupos do Telegram de Oportunidades",
  "Grupos do Telegram de Pets",
  "Grupos do Telegram de Promoções",
  "Grupos do Telegram de Receitas",
  "Grupos do Telegram de Redes Sociais",
  "Grupos do Telegram de Tecnologia",
  "Grupos do Telegram de Vendas",
  "Grupos do Telegram de Viagens",
  "Grupos do Telegram de Vídeos",
  "Grupos do Telegram de Zoeira",
] as const;

// Short display label for each category
export const getCategoryLabel = (fullName: string): string => {
  return fullName.replace("Grupos do Telegram de ", "");
};
