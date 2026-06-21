import Header from "@/components/Header";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { OrganizationSchema, WebSiteSchema, BreadcrumbSchema, FAQSchema, SiteNavigationSchema } from "@/components/JsonLd";
import { Users, TrendingUp, Star, Clock, ArrowRight, Shield, CheckCircle, XCircle, MessageCircle, UserCheck, AlertTriangle, Lock, BookOpen, HelpCircle, Sparkles, Zap, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

type Group = Tables<"groups">;

declare global {
  interface Window {
    __GROUPS_HOME_PREFETCH__?: Promise<any[] | null>;
  }
}

const Index = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "O que é o Grupos do Telegram?",
      answer: "O Grupos do Telegram é o maior diretório brasileiro 100% dedicado a reunir, organizar e divulgar grupos do Telegram em diversas categorias. Funcionamos como um catálogo verificado onde você encontra comunidades sobre amizade, namoro, estudos, investimentos, tecnologia, esportes, entretenimento, promoções e muito mais — tudo em um só lugar e totalmente gratuito."
    },
    {
      question: "O Grupos do Telegram é gratuito?",
      answer: "Sim, o Grupos do Telegram é 100% gratuito para todos os usuários. Você pode navegar pelas categorias, pesquisar grupos, acessar links e entrar em qualquer comunidade sem precisar pagar nada e sem necessidade de cadastro para navegar."
    },
    {
      question: "Como funciona o Grupos do Telegram?",
      answer: "É simples: escolha uma categoria de interesse (como Amizade, Investimentos, Estudos, Games), navegue pelos grupos disponíveis, leia a descrição e o número de membros e clique em 'Entrar no Grupo'. Você é redirecionado direto para o Telegram, onde confirma sua entrada na comunidade em segundos."
    },
    {
      question: "Os grupos listados são oficiais do Telegram?",
      answer: "Não. Os grupos listados não são oficiais de nenhuma marca, empresa ou do próprio Telegram. Todos são criados e administrados por usuários independentes que optaram por divulgá-los aqui. Atuamos exclusivamente como um diretório de indexação, sem qualquer vínculo ou afiliação com o Telegram ou com os administradores dos grupos cadastrados."
    },
    {
      question: "Como adicionar meu grupo do Telegram no diretório?",
      answer: "Para adicionar seu grupo, basta criar uma conta gratuita, acessar o painel e clicar em 'Anunciar Grupo'. Informe o nome, uma descrição detalhada, selecione a categoria adequada e cole o link de convite do Telegram. Após o envio, nossa equipe analisa as informações e, estando tudo correto, o grupo é publicado e fica visível para milhares de usuários."
    },
    {
      question: "O Grupos do Telegram é seguro?",
      answer: "Sim. Todos os grupos passam por um processo de moderação humana antes de serem publicados, e links suspeitos, conteúdos ilegais ou que violem nossas diretrizes são removidos. Oferecemos também um sistema de denúncia para que os próprios usuários reportem grupos impróprios. Ainda assim, mantenha sempre cautela e nunca compartilhe dados pessoais sensíveis dentro dos grupos."
    },
    {
      question: "Posso denunciar um grupo do Telegram?",
      answer: "Sim. Em cada página de grupo existe um botão de denúncia. Se você encontrar um grupo com conteúdo impróprio, ilegal, spam ou que viole nossas políticas, basta clicar e informar o motivo. Nossa equipe de moderação analisa cada denúncia e toma as providências cabíveis, incluindo a remoção do grupo da plataforma."
    },
    {
      question: "Com que frequência os grupos são atualizados?",
      answer: "Nossa base é atualizada constantemente. Novos grupos são adicionados continuamente por usuários de todo o Brasil, e nossa equipe realiza verificações periódicas para remover links expirados, grupos inativos ou conteúdos que violem as diretrizes. Isso garante que você sempre encontre comunidades ativas e relevantes."
    },
    {
      question: "Preciso criar conta para entrar nos grupos do Telegram?",
      answer: "Não. Você não precisa criar conta para navegar pelo site nem para entrar nos grupos listados. Qualquer pessoa pode acessar o diretório, explorar as categorias e clicar nos links de forma totalmente gratuita. A criação de conta é necessária apenas para quem deseja adicionar um novo grupo ou utilizar o painel de controle."
    },
    {
      question: "Por que alguns links de grupos do Telegram não funcionam?",
      answer: "Existem algumas razões: o administrador pode ter revogado o link de convite, o grupo pode ter sido excluído, ou pode ter sido removido pelo próprio Telegram por violar políticas. Embora façamos verificações periódicas para remover links expirados, devido ao volume de grupos pode haver um intervalo até a atualização. Se encontrar um link quebrado, use o botão de denúncia para nos avisar."
    },
    {
      question: "Quantos membros cabem em um grupo do Telegram?",
      answer: "O Telegram permite até 200.000 membros em um único grupo — muito mais do que outras plataformas. Comunidades menores (de 50 a 500 pessoas) costumam ser mais interativas, enquanto grupos gigantes oferecem mais variedade de conteúdo. Escolha conforme o tipo de conexão que você busca."
    },
    {
      question: "É possível usar o Telegram sem expor meu número de telefone?",
      answer: "Sim. O Telegram permite definir um nome de usuário (@username) e configurar a privacidade para que seu número não seja visível para outros membros do grupo. Acesse Configurações > Privacidade e Segurança > Número de Telefone e selecione 'Ninguém' para ocultar seu contato dos demais."
    }
  ];

  const { data: groups = [], isLoading: loading } = useQuery({
    queryKey: ["groups", "approved", "home"],
    queryFn: async () => {
      // Use the inline <head> prefetch if it resolved already — saves a full round-trip.
      if (typeof window !== "undefined" && window.__GROUPS_HOME_PREFETCH__) {
        try {
          const prefetched = await window.__GROUPS_HOME_PREFETCH__;
          if (prefetched && Array.isArray(prefetched)) {
            window.__GROUPS_HOME_PREFETCH__ = undefined;
            return prefetched as any;
          }
        } catch {}
      }
      const { data, error } = await supabase
        .from("groups")
        .select("id,title,description,members,thumbnail_url,category,telegram_link,slug,created_at,views,pinned")
        .eq("status", "approved")
        .order("pinned", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(12);
      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead
        title="Grupos do Telegram | Canais Verificados e Links Ativos 2026"
        description="Encontre grupos e canais do Telegram confiáveis em 2026. Telegrupos verificados, links testados, categorias organizadas e dicas de segurança para usar o Telegram app, Telegram Web e Telegram Desktop."
        canonical="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://gruposdotelegram.org/" }
      ]} />
      <SiteNavigationSchema items={[
        { name: "Início", url: "https://gruposdotelegram.org/", description: "Diretório de grupos e canais do Telegram verificados" },
        { name: "Todos os Grupos", url: "https://gruposdotelegram.org/todos-grupos/", description: "Catálogo completo de grupos do Telegram" },
        { name: "Blog", url: "https://gruposdotelegram.org/blog/", description: "Guias, tutoriais e dicas sobre Telegram" },
        { name: "Como Funciona", url: "https://gruposdotelegram.org/como-funciona/", description: "Entenda como participar dos grupos" },
        { name: "Central de Ajuda", url: "https://gruposdotelegram.org/ajuda/", description: "Suporte e respostas para Telegram" },
        { name: "FAQ", url: "https://gruposdotelegram.org/faq/", description: "Perguntas frequentes sobre Telegram" },
        { name: "Dicas de Segurança", url: "https://gruposdotelegram.org/seguranca/", description: "Como usar o Telegram com segurança" },
        { name: "Regras da Comunidade", url: "https://gruposdotelegram.org/regras/", description: "Diretrizes da plataforma" },
        { name: "Reportar Problema", url: "https://gruposdotelegram.org/reportar/", description: "Denunciar grupos ou conteúdo" },
        { name: "Política de Privacidade", url: "https://gruposdotelegram.org/privacidade/", description: "Como tratamos seus dados" },
        { name: "Termos de Uso", url: "https://gruposdotelegram.org/termos/", description: "Termos e condições" },
        { name: "Mapa do Site", url: "https://gruposdotelegram.org/sitemap/", description: "Todas as páginas do site" }
      ]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* SEO Hero — compact, centered title; intro/keywords moved near cards and into long-form sections below */}
        <section
          aria-label="O Maior Diretório de Grupos do Telegram do Brasil em 2026"
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-telegram-blue/5 via-background to-purple-500/5 border border-telegram-blue/15 px-4 py-4 sm:py-5 mb-6 text-center"
        >
          <div className="relative">
            <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground leading-snug tracking-tight">
              O Maior Diretório de Grupos do Telegram do Brasil em 2026
            </h1>
          </div>
        </section>

        {/* Stats Section */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Todos os Grupos */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-telegram-blue" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Todos os Grupos</h2>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-telegram-blue hover:text-telegram-light-blue self-start sm:self-auto"
                  onClick={() => navigate('/todos-grupos')}
                >
                  Ver todos
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </Button>
              </div>

              {/* Short SEO description below section title */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                Diretório de <strong className="text-foreground">grupos do Telegram</strong> e <strong className="text-foreground">canais do Telegram</strong> verificados em 27 categorias — amizade, namoro, investimentos, promoções, estudos, tecnologia, esportes e games. Acesse direto pelo Telegram app, Telegram Web ou Telegram Desktop, 100% gratuito e sem cadastro.
              </p>

              {/* Trust badges integrated above the cards */}
              <div className="flex flex-wrap gap-2 mb-5 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Atualizado diariamente
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-telegram-blue/10 text-telegram-blue border border-telegram-blue/20 font-medium">
                  <Zap className="w-3.5 h-3.5" />
                  Centenas de grupos ativos
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Links verificados
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {loading ? (
                  Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`sk-${i}`}
                      className="rounded-lg border border-border/50 bg-card p-4 flex flex-col items-center"
                    >
                      <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-full mb-1" />
                      <Skeleton className="h-3 w-2/3 mb-3" />
                      <Skeleton className="h-3 w-1/2 mb-3" />
                      <Skeleton className="h-8 w-full mt-auto" />
                    </div>
                  ))
                ) : groups.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Nenhum grupo disponível.</p>
                  </div>
                ) : (
                  groups.slice(0, 12).map((group, idx) => (
                    <GroupCard
                      key={group.id}
                      id={group.id}
                      title={group.title}
                      description={group.description}
                      members={group.members || 0}
                      views={group.views || 0}
                      avatar={group.thumbnail_url}
                      category={group.category}
                      telegramLink={group.telegram_link}
                      slug={group.slug}
                      priority={idx < 8}
                    />
                  ))
                )}
              </div>

              {/* CTA: Ver todos os grupos */}
              <div className="flex justify-center mt-8">
                <Button
                  variant="telegram"
                  size="lg"
                  onClick={() => navigate('/todos-grupos')}
                  className="font-semibold"
                >
                  Todos os Grupos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Premium Content Section */}
            <div className="mt-16 space-y-12">
              {/* Hero Content Block */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-telegram-blue/5 via-background to-purple-500/5 border-telegram-blue/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-telegram-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-telegram-blue/10 rounded-xl">
                      <Shield className="w-8 h-8 text-telegram-blue" />
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                      Conexões Reais, Seguras e com Propósito
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Grupos do Telegram são espaços poderosos para criar conexões humanas autênticas, trocar conhecimento e construir comunidades vibrantes. Mas, assim como em qualquer ambiente digital, existem riscos reais: <strong className="text-foreground">golpes financeiros, vazamento de dados, bots maliciosos</strong> e ambientes tóxicos que podem prejudicar sua experiência online.
                  </p>
                  <div className="p-6 bg-telegram-blue/5 rounded-2xl border border-telegram-blue/10">
                    <p className="text-lg font-medium text-foreground mb-2">Por isso, criamos este espaço como seu aliado de confiança.</p>
                    <p className="leading-relaxed">
                      Não somos apenas um diretório de links. Somos uma <strong className="text-telegram-blue">plataforma de curadoria humana</strong>, onde cada grupo passa por verificação criteriosa antes de ser publicado. Nossa missão é simples: conectar você a comunidades reais, respeitosas e alinhadas com seus verdadeiros interesses, sempre priorizando sua segurança e bem-estar digital.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Guide Section */}
              <Card className="border-2 border-dashed border-muted-foreground/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-500/10 rounded-xl">
                      <BookOpen className="w-7 h-7 text-green-600" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      Guia Essencial para Usar Grupos do Telegram com Segurança e Inteligência
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Guide Item 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Lock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Como entrar sem expor seu número?</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        No Telegram, seu número de telefone não é visível publicamente — a menos que você configure isso nas configurações de privacidade. Ao usar links de convite (como os que oferecemos aqui), você entra diretamente no grupo sem revelar seu contato a estranhos.
                      </p>
                      <div className="flex items-start gap-2 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-700 dark:text-amber-400">
                          <strong>Dica importante:</strong> evite usar seu número como nome de usuário público ou compartilhá-lo em descrições de perfil ou comentários.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Guide Item 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Quantas pessoas cabem em um grupo em 2025?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        O Telegram permite até <strong className="text-foreground">200.000 membros</strong> em um grupo! No entanto, comunidades menores (de 20 a 100 pessoas) costumam ser mais interativas e acolhedoras, enquanto grupos gigantes tendem a ser mais anônimos e menos moderados. Escolha de acordo com o tipo de conexão que você busca.
                      </p>
                    </div>
                  </div>

                  {/* Guide Item 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Como identificar se um grupo é sério ou golpe?</h3>
                      <p className="text-muted-foreground mb-4">Fique atento a três sinais de alerta:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Falta de regras claras ou descrição genérica (ex: "grupo legal", "entre já!");</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Administração oculta ou sem qualquer identificação;</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Excesso de promoções, mensagens automáticas, promessas de "ganhe dinheiro rápido" ou links suspeitos.</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-muted-foreground">
                        Grupos legítimos têm propósito definido, moderação ativa e transparência sobre suas intenções.
                      </p>
                    </div>
                  </div>

                  {/* Guide Item 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Como sair de um grupo com educação?</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        No Telegram, você pode sair sem notificar ninguém — basta tocar em "Sair do grupo". Se desejar, pode enviar uma mensagem breve antes, como:
                      </p>
                      <div className="p-4 bg-muted/50 rounded-lg border border-border italic text-foreground">
                        "Obrigado pela troca! Estou saindo para focar em outros espaços. Desejo sucesso a todos!"
                      </div>
                      <p className="mt-3 text-muted-foreground">
                        Mas lembre-se: <strong className="text-foreground">sua paz digital vem primeiro</strong>. Não há obrigação de justificar sua saída.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust & Safety Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* What We Require */}
                <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-green-500/10 rounded-xl">
                        <Shield className="w-7 h-7 text-green-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        Nosso Compromisso com a Curadoria
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Todos os grupos listados aqui passam por verificação manual. Exigimos que cada comunidade tenha:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-foreground">Regras claras e visíveis</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-foreground">Administração identificável</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-foreground">Propósito legítimo e alinhado com nossos valores</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* What We Prohibit */}
                <Card className="bg-gradient-to-br from-red-500/5 to-rose-500/5 border-red-500/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-red-500/10 rounded-xl">
                        <XCircle className="w-7 h-7 text-red-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        Proibimos Rigorosamente
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Se um grupo violar nossos critérios ou receber denúncias consistentes, é removido em até 24 horas:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-foreground">Conteúdo impróprio ou ilegal</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-foreground">Spam e automações abusivas</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-foreground">Golpes, pirâmides ou exploração</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                      Nossa curadoria é humana, não automatizada — porque acreditamos que confiança não pode ser gerada por algoritmos.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Blog CTA */}
              <Card className="relative overflow-hidden bg-gradient-to-r from-telegram-blue via-telegram-blue to-blue-600 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                <CardContent className="relative py-8 px-6 sm:px-8">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-shrink-0 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl font-bold mb-2">Quer Ir Além dos Links? Explore Nosso Blog!</h3>
                      <p className="text-white/80 mb-4">
                        No nosso blog, você encontra guias práticos e avançados para dominar o Telegram com consciência.
                      </p>
                      <ul className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm text-white/90 mb-4">
                        <li className="flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Proteção de privacidade
                        </li>
                        <li className="flex items-center gap-2">
                          <UserCheck className="w-4 h-4" />
                          Moderação de grupos
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          Identificação de golpes
                        </li>
                      </ul>
                    </div>
                    <Link to="/blog">
                      <Button size="lg" className="bg-white text-telegram-blue hover:bg-white/90 font-semibold">
                        Acessar o Blog
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* What is + How it works (long-form SEO content) */}
              <Card className="bg-gradient-to-br from-background to-telegram-blue/5 border-telegram-blue/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-telegram-blue/10 rounded-xl">
                      <Compass className="w-7 h-7 text-telegram-blue" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      O que é o Grupos do Telegram?
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O <strong className="text-foreground">Grupos do Telegram</strong> é a maior e mais completa plataforma brasileira 100% dedicada a reunir, organizar e divulgar <strong className="text-foreground">grupos do Telegram</strong> de todo o Brasil. Com 27 categorias cuidadosamente curadas — incluindo amizade, namoro, promoções, oportunidades, estudos, tecnologia, esportes, games, investimentos, livros, receitas, viagens, pets e muitas outras — conectamos diariamente milhares de pessoas a comunidades ativas e relevantes.
                  </p>
                  <p>
                    Nossa missão é ser o ponto de encontro definitivo para quem busca <strong className="text-foreground">novos grupos do Telegram</strong> em qualquer nicho ou interesse. Todos os grupos são revisados por nossa equipe de moderação humana, garantindo uma experiência mais segura e confiável. Seja você um usuário buscando fazer novas amizades, encontrar oportunidades de emprego, aprender um novo idioma, descobrir promoções imperdíveis ou simplesmente se divertir, este é o lugar certo.
                  </p>
                  <p>
                    A plataforma é <strong className="text-foreground">100% gratuita</strong>, não exige cadastro para navegar e acessar os grupos, e funciona perfeitamente em qualquer dispositivo — computadores, tablets e smartphones. Nosso acervo é atualizado constantemente com novos links enviados por usuários de todas as regiões do Brasil, tornando o site o diretório mais completo e atualizado de grupos do Telegram do país.
                  </p>
                </CardContent>
              </Card>

              {/* How it works — 3 steps */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <Sparkles className="w-7 h-7 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      Como funciona em 3 passos simples
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="relative p-5 rounded-2xl bg-telegram-blue/5 border border-telegram-blue/10">
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-telegram-blue text-white font-bold flex items-center justify-center text-lg shadow-md">1</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 mt-2">Escolha uma categoria</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Navegue pelas 27 categorias disponíveis ou use a barra de busca para encontrar grupos sobre o assunto que mais lhe interessa — de Amizade a Tecnologia, de Investimentos a Games.
                      </p>
                    </div>
                    <div className="relative p-5 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-lg shadow-md">2</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 mt-2">Encontre o grupo ideal</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Explore os grupos disponíveis, leia suas descrições, confira o número de membros e visualizações. Grupos verificados possuem selo especial de confiabilidade.
                      </p>
                    </div>
                    <div className="relative p-5 rounded-2xl bg-green-500/5 border border-green-500/10">
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-lg shadow-md">3</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 mt-2">Entre no grupo</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ao encontrar o grupo desejado, clique em "Entrar no Grupo". Você será redirecionado direto para o Telegram, onde confirma sua entrada na comunidade em segundos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Termos mais buscados — long-tail SEO content for Google */}
              <Card className="bg-gradient-to-br from-background to-purple-500/5 border-purple-500/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <Compass className="w-7 h-7 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      Termos mais buscados sobre Grupos do Telegram
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Reunimos abaixo os principais termos que as pessoas pesquisam no Google, Bing e Yandex para encontrar <strong className="text-foreground">grupos do Telegram</strong>, <strong className="text-foreground">canais do Telegram</strong>, <strong className="text-foreground">links de grupos telegram 2026</strong>, <strong className="text-foreground">telegrupos</strong> e comunidades de todos os nichos. Use essa lista como um mapa para descobrir novos grupos e explorar todo o conteúdo do <strong className="text-foreground">gruposdotelegram.org</strong>.
                  </p>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Buscas gerais por grupos do Telegram</h3>
                    <p>
                      grupos do telegram, grupos telegram, grupos de telegram, grupo do telegram, grupo de telegram, grupo telegram, telegram grupos, telegram grupo, telegrupos, gruposdotelegram, gruposdotelegram.org, gruposdotelegram.com.br, gruposdotelegram br, www.gruposdotelegram, grupos do telegram 2026, grupos telegram 2026, grupos de telegram 2026, grupo telegram 2026, melhores grupos do telegram, melhores grupos telegram 2026, melhores grupos de telegram, melhores grupos telegram brasil 2026, os melhores grupos do telegram, grupos telegram brasil, grupos no telegram, grupos para telegram, grupos do telegram links, grupos e links telegram, links de grupos do telegram, links de grupos de telegram, links grupos telegram, links de grupos telegram 2026, links de grupos do telegram 2026, links de grupo telegram 2026, link de grupos telegram 2026, link grupos telegram 2026, link grupo do telegram, links telegram 2026, telegram links grupos, telegram grupos 🔥, grupos telegram 🔥.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Categorias mais procuradas</h3>
                    <p>
                      <Link to="/grupos-telegram-amizades" className="text-telegram-blue hover:underline">grupos do telegram de amizades</Link>, grupo telegram amizade, amizade telegram grupo, grupo de amizade telegram 2026, grupos para fazer amizade telegram,{" "}
                      <Link to="/grupos-telegram-namoros" className="text-telegram-blue hover:underline">grupos do telegram de namoro</Link>, grupos telegram namoro, grupo telegram namoro, grupos de relacionamento telegram,{" "}
                      <Link to="/grupos-telegram-encontros" className="text-telegram-blue hover:underline">grupos do telegram de encontros</Link>, encontros telegram, grupos telegram encontros, grupos para encontros telegram,{" "}
                      <Link to="/grupos-telegram-estudos" className="text-telegram-blue hover:underline">grupos do telegram de estudos</Link>, grupo de estudos telegram, grupos de estudos telegram,{" "}
                      <Link to="/grupos-telegram-concursos" className="text-telegram-blue hover:underline">grupos do telegram de concursos</Link>, grupo telegram concursos, grupos telegram concursos públicos, grupos concurseiros telegram,{" "}
                      <Link to="/grupos-telegram-cursos" className="text-telegram-blue hover:underline">grupos do telegram de cursos</Link>, grupo telegram cursos, grupos telegram cursos, grupo telegram cursos drive, grupos de cursos telegram, grupo de cursos telegram, telegram grupo de cursos, grupo cursos telegram, cursos telegram 2026,{" "}
                      <Link to="/grupos-telegram-investimentos" className="text-telegram-blue hover:underline">grupos do telegram de investimentos</Link>, grupo telegram investimentos, grupos telegram criptomoedas, grupos telegram bitcoin, grupos telegram trader, grupos telegram day trade,{" "}
                      <Link to="/grupos-telegram-financas" className="text-telegram-blue hover:underline">grupos do telegram de finanças pessoais</Link>, grupos telegram educação financeira,{" "}
                      <Link to="/grupos-telegram-promocoes" className="text-telegram-blue hover:underline">grupos do telegram de promoções</Link>, grupos telegram promoções, grupos telegram cupons, grupos telegram ofertas, grupos telegram achadinhos shopee, grupos telegram amazon promoções, grupos telegram mercado livre promoções,{" "}
                      <Link to="/grupos-telegram-oportunidades" className="text-telegram-blue hover:underline">grupos do telegram de oportunidades</Link>, grupos telegram renda extra, grupos telegram ganhar dinheiro, grupos de telegram ganhar dinheiro,{" "}
                      <Link to="/grupos-telegram-empregos" className="text-telegram-blue hover:underline">grupos do telegram de empregos</Link>, grupos telegram vagas, grupos telegram emprego clt, grupos telegram home office, grupos telegram vagas ti,{" "}
                      <Link to="/grupos-telegram-vendas" className="text-telegram-blue hover:underline">grupos do telegram de vendas</Link>, grupos telegram revenda, grupos telegram dropshipping,{" "}
                      <Link to="/grupos-telegram-negocios" className="text-telegram-blue hover:underline">grupos do telegram de negócios</Link>, grupos telegram empreendedorismo, grupos telegram networking,{" "}
                      <Link to="/grupos-telegram-tecnologia" className="text-telegram-blue hover:underline">grupos do telegram de tecnologia</Link>, grupos telegram programação, grupos telegram desenvolvedores, grupos telegram javascript, grupos telegram python, grupos telegram inteligência artificial, grupos telegram chatgpt, grupos telegram ia,{" "}
                      <Link to="/grupos-telegram-games" className="text-telegram-blue hover:underline">grupos do telegram de games</Link>, grupos telegram free fire, grupos telegram fortnite, grupos telegram valorant, grupos telegram lol, grupos telegram cs2, grupos telegram dota, grupos telegram minecraft, grupos telegram roblox, grupos telegram gta, grupos telegram pubg, grupos telegram clash royale, grupos telegram mobile legends,{" "}
                      <Link to="/grupos-telegram-cinema" className="text-telegram-blue hover:underline">grupos do telegram de filmes e séries</Link>, grupos telegram filmes, grupos telegram séries, grupos telegram animes, grupos telegram dorama, grupos telegram netflix, grupos telegram prime video, grupos telegram disney plus, grupos telegram hbo, grupos telegram lançamentos,{" "}
                      <Link to="/grupos-telegram-musicas" className="text-telegram-blue hover:underline">grupos do telegram de músicas</Link>, grupos telegram funk, grupos telegram sertanejo, grupos telegram rock, grupos telegram pagode, grupos telegram k-pop, grupos telegram bts, grupos telegram rap, grupos telegram trap, grupos telegram eletrônica,{" "}
                      <Link to="/grupos-telegram-livros" className="text-telegram-blue hover:underline">grupos do telegram de livros</Link>, grupos no telegram de livros, grupos telegram pdf, grupos telegram ebooks, grupos telegram literatura, grupos telegram leitura,{" "}
                      <Link to="/grupos-telegram-esportes" className="text-telegram-blue hover:underline">grupos do telegram de esportes</Link>, grupos telegram futebol, grupos telegram flamengo, grupos telegram corinthians, grupos telegram palmeiras, grupos telegram são paulo, grupos telegram brasileirão, grupos telegram libertadores, grupos telegram champions, grupos telegram mma, grupos telegram ufc, grupos telegram nba, grupos telegram basquete,{" "}
                      <Link to="/grupos-telegram-noticias" className="text-telegram-blue hover:underline">grupos do telegram de notícias</Link>, grupos telegram política, grupos telegram jornalismo,{" "}
                      <Link to="/grupos-telegram-religiao" className="text-telegram-blue hover:underline">grupos do telegram de religião</Link>, grupos telegram evangélicos, grupos telegram católicos, grupos telegram orações, grupos telegram bíblicos, grupos telegram espiritismo, grupos telegram umbanda,{" "}
                      <Link to="/grupos-telegram-receitas" className="text-telegram-blue hover:underline">grupos do telegram de receitas</Link>, grupos telegram culinária, grupos telegram confeitaria, grupos telegram low carb, grupos telegram fit,{" "}
                      <Link to="/grupos-telegram-viagens" className="text-telegram-blue hover:underline">grupos do telegram de viagens</Link>, grupos telegram milhas, grupos telegram passagens promocionais, grupos telegram intercâmbio,{" "}
                      <Link to="/grupos-telegram-pets" className="text-telegram-blue hover:underline">grupos do telegram de pets</Link>, grupos telegram cachorros, grupos telegram gatos, grupos telegram adoção pets,{" "}
                      <Link to="/grupos-telegram-estilo" className="text-telegram-blue hover:underline">grupos do telegram de estilo e moda</Link>, grupos telegram moda, grupos telegram beleza, grupos telegram maquiagem,{" "}
                      <Link to="/grupos-telegram-humor" className="text-telegram-blue hover:underline">grupos do telegram de humor</Link>,{" "}
                      <Link to="/grupos-telegram-memes" className="text-telegram-blue hover:underline">grupos do telegram de memes</Link>, melhores memes telegram,{" "}
                      <Link to="/grupos-telegram-zoeira" className="text-telegram-blue hover:underline">grupos do telegram de zoeira</Link>,{" "}
                      <Link to="/grupos-telegram-figurinhas" className="text-telegram-blue hover:underline">grupos do telegram de figurinhas</Link>, grupos telegram stickers, grupos telegram figurinhas whatsapp,{" "}
                      <Link to="/grupos-telegram-frases" className="text-telegram-blue hover:underline">grupos do telegram de frases</Link>, grupos telegram motivacionais, grupos telegram reflexões,{" "}
                      <Link to="/grupos-telegram-redes-sociais" className="text-telegram-blue hover:underline">grupos do telegram de redes sociais</Link>, grupos telegram instagram, grupos telegram tiktok, grupos telegram youtube, grupos telegram seguidores,{" "}
                      <Link to="/grupos-telegram-divulgacao" className="text-telegram-blue hover:underline">grupos do telegram de divulgação</Link>, grupos telegram divulgação, divulgação telegram, divulgar telegram, divulgar grupo telegram, divulga telegram, grupo divulgação telegram, grupo de divulgação telegram, grupos de divulgação telegram, grupos telegram divulgação de links, grupo telegram divulgação, grupo telegram divulgação de links, grupo de divulgação de links telegram, grupos de divulgação de links telegram, grupos no telegram de divulgação, grupo de divulgação no telegram, divulgação de grupos telegram, telegram divulgação, telegram divulgação total, grupo de divulgação telegram aberto, liga dos links telegram, grupos para divulgar telegram,{" "}
                      <Link to="/grupos-telegram-imobiliaria" className="text-telegram-blue hover:underline">grupos do telegram de imóveis</Link>, grupos telegram aluguel, grupos telegram comprar casa,{" "}
                      <Link to="/grupos-telegram-carros" className="text-telegram-blue hover:underline">grupos do telegram de carros</Link>, grupos telegram automóveis, grupos telegram tuning, grupos telegram motos,{" "}
                      <Link to="/grupos-telegram-cidades" className="text-telegram-blue hover:underline">grupos do telegram de cidades</Link>, grupos telegram são paulo, grupos telegram rio de janeiro, grupos telegram belo horizonte, grupos telegram brasília, grupos telegram curitiba, grupos telegram porto alegre, grupos telegram salvador, grupos telegram recife, grupos telegram fortaleza, grupos telegram manaus, grupos telegram belém, grupos telegram goiânia, grupos telegram natal rn, grupos telegram serra es, telegram recife,{" "}
                      <Link to="/grupos-telegram-eventos" className="text-telegram-blue hover:underline">grupos do telegram de eventos</Link>, telegram festas, festas telegram, festinhas telegram, telegram para eventos,{" "}
                      <Link to="/grupos-telegram-fas" className="text-telegram-blue hover:underline">grupos do telegram de fãs e fandoms</Link>, grupos telegram bts, grupos telegram blackpink, grupos telegram taylor swift, grupos telegram kpop, grupos telegram anime,{" "}
                      <Link to="/grupos-telegram-profissoes" className="text-telegram-blue hover:underline">grupos do telegram de profissões</Link>, grupos telegram médicos, grupos telegram advogados, grupos telegram engenheiros, grupos telegram designers, grupos telegram professores, grupos telegram enfermagem,{" "}
                      <Link to="/grupos-telegram-videos" className="text-telegram-blue hover:underline">grupos do telegram de vídeos</Link>,{" "}
                      <Link to="/grupos-telegram-lgbtqia" className="text-telegram-blue hover:underline">grupos do telegram LGBTQIA+</Link>, grupos telegram gays, grupos telegram lésbicas, grupos telegram bi, grupos telegram trans,{" "}
                      <Link to="/grupos-telegram-liberais" className="text-telegram-blue hover:underline">grupos do telegram liberais</Link>, grupos telegram +18, grupos telegram adultos, grupos liberais telegram.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Como usar e baixar o Telegram</h3>
                    <p>
                      telegram web, telegram desktop, telegram app, telegram para pc, telegram para windows, telegram para mac, telegram para linux, telegram para android, telegram para ios, telegram para iphone, baixar telegram, baixar telegram para pc, baixar telegram windows, baixar telegram para android, baixar telegram para iphone, instalar telegram, atualizar telegram, telegram apk, telegram x, como usar telegram, como entrar no telegram, como criar conta telegram, telegram cadastro, telegram login, telegram entrar, telegram fazer login, telegram web entrar, telegram código, telegram sem número, telegram com número virtual, telegram premium, telegram premium grátis, telegram stories,{" "}
                      <Link to="/blog/como-baixar-telegram-pc" className="text-telegram-blue hover:underline">como baixar telegram para pc</Link>,{" "}
                      <Link to="/como-funciona" className="text-telegram-blue hover:underline">como funciona o telegram</Link>,{" "}
                      <Link to="/ajuda" className="text-telegram-blue hover:underline">suporte telegram</Link>, telegram suporte, suporte telegram brasil, perguntas frequentes telegram.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Criar, divulgar e gerenciar grupos no Telegram</h3>
                    <p>
                      como criar grupo no telegram, como criar canal no telegram, como criar grupo telegram pelo celular, como criar grupo telegram pelo pc, como adicionar bot no telegram, como divulgar grupo telegram, como divulgar canal telegram, onde divulgar grupo telegram, sites para divulgar grupo telegram, divulgar telegram grátis, divulgar canal telegram grátis, como crescer grupo telegram, como atrair membros telegram, comprar membros telegram, ganhar membros telegram, como ganhar membros no telegram, como administrar grupo telegram, bot telegram, melhores bots telegram, bot anti spam telegram, bot de música telegram, como criar bot no telegram, telegram api, telegram open source, telegram com link, link de convite telegram, como gerar link de convite telegram, telegram qr code.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Segurança, privacidade e dicas no Telegram</h3>
                    <p>
                      <Link to="/seguranca" className="text-telegram-blue hover:underline">grupos de telegram seguros</Link>, telegram seguro, telegram é seguro, dicas de segurança telegram, golpes no telegram, como evitar golpes telegram, telegram esconder número, telegram sem expor número, configurar privacidade telegram, telegram autodestruição, mensagens secretas telegram, chat secreto telegram, telegram criptografia, telegram dados pessoais, telegram bloquear usuário, telegram denunciar grupo,{" "}
                      <Link to="/reportar" className="text-telegram-blue hover:underline">reportar grupo telegram</Link>,{" "}
                      <Link to="/regras" className="text-telegram-blue hover:underline">regras grupos telegram</Link>,{" "}
                      <Link to="/faq" className="text-telegram-blue hover:underline">perguntas frequentes telegram</Link>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Variações de busca, erros de digitação e termos relacionados</h3>
                    <p>
                      gruposdetelegram, gruposdotelegram.com, gruposdotelegram.com.br, gruposdotelegram com br, gruposdotelegram br com, gruposdotelegrambr, gruposdotelegram br, gruposdotelegram.combr, gruposdotelegram.com.b, gruposdotelegram.com.b4, gruposdotelegram.com.vr, gruposdotelegram com.br, gruposdotelegram. com, gruposdotelegram. br, gruposdotelegram.br.com, gruposdotelegram.c, gruposdotelegram.ckm, gruposdotelegram links, gruposdostelegram, grupodotelegram, grupodostelegram, grouposdotelegram, grupoadotelegram, grupostelegram, grupos do.telegram, grupos do telegrama, grupos do telegam, grupos do telegam, grupos no telegram, grupos para telegram, grupos tele, grupos telegra, grupos telegra., grupos telegram brasil, grupos telegram links, grupos telegram secretos, grupos telegram privados, grupos privados telegram, grupos vip telegram, grupos telegram gratis, telegram grupos gratis, telegram grupo gratis, grupo gratis telegram, grupo gratuito telegram, grupo telegram gratuito, grupo telegram free, grupo free telegram, grupo link telegram, link grupo telegram, link grupos telegram, links grupos telegram, links telegran, telegramgrupo, telegramgrupos, tegram grupos, telegram grupos secretos, telegram grupos secretos 2026, previas telegram 2026, prévias telegram 2026, telegram previas 2026, melhores sites para encontrar grupos telegram 2026, melhores grupos telegram, melhores grupos telegram 2025, grupos de telegram 2026, novos grupos telegram, grupos atualizados telegram, lista de grupos telegram, catálogo de grupos telegram, diretório de grupos telegram, indexador de grupos telegram, buscador de grupos telegram, encontrar grupos telegram, achar grupos telegram, descobrir grupos telegram, melhores comunidades telegram, comunidades telegram brasil.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground/80 italic">
                    A relação acima é constantemente expandida com base nas buscas reais dos usuários no Google Search Console, ajudando você a navegar pelo nosso diretório e descobrir <strong>novos grupos do Telegram</strong> todos os dias.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ Section — expanded for FAQPage rich snippets */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-telegram-blue/10 rounded-xl">
                      <HelpCircle className="w-7 h-7 text-telegram-blue" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      Perguntas Frequentes sobre Grupos do Telegram
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, idx) => (
                      <AccordionItem key={idx} value={`faq-${idx}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 w-full">
            <CategorySidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
