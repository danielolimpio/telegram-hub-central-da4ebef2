import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import GroupCard from "@/components/GroupCard";
import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { OrganizationSchema, WebSiteSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { Users, TrendingUp, Star, Clock, ArrowRight, Shield, CheckCircle, XCircle, MessageCircle, UserCheck, AlertTriangle, Lock, BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Group = Tables<"groups">;

const Index = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  
  const stats = [
    { icon: Users, value: "+12.500", label: "Grupos Ativos", color: "blue" as const },
    { icon: TrendingUp, value: "8.742", label: "Acessos Hoje", color: "green" as const },
    { icon: Star, value: "156", label: "Grupos Premium", color: "orange" as const },
    { icon: Clock, value: "23", label: "Novos Hoje", color: "gray" as const },
  ];

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const { data, error } = await supabase
          .from("groups")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        setGroups(data || []);
      } catch (error) {
        console.error("Error fetching groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead
        title="Grupos do Telegram - Encontre os Melhores Grupos em 2025"
        description="Descubra e participe dos melhores grupos do Telegram. Milhares de grupos verificados em diversas categorias. Conecte-se com pessoas que compartilham seus interesses de forma segura."
        canonical="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbSchema items={[
        { name: "Início", url: "https://gruposdotelegram.org/" }
      ]} />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>

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
                  onClick={() => navigate('/all-groups')}
                >
                  Ver todos
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {loading ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Carregando grupos...</p>
                  </div>
                ) : groups.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">Nenhum grupo disponível.</p>
                  </div>
                ) : (
                  groups.slice(0, 12).map((group) => (
                    <GroupCard
                      key={group.id}
                      title={group.title}
                      description={group.description}
                      members={group.members || 0}
                      avatar={group.thumbnail_url}
                      category={group.category}
                      telegramLink={group.telegram_link}
                      slug={group.slug}
                    />
                  ))
                )}
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

              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-telegram-blue/10 rounded-xl">
                      <HelpCircle className="w-7 h-7 text-telegram-blue" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      Perguntas Frequentes
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left font-medium">
                        Onde posso encontrar grupos confiáveis?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Navegue pelas categorias acima ou use nossa busca. Todos os grupos são verificados por humanos antes da publicação.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left font-medium">
                        Como entro em um grupo?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Clique no grupo desejado, leia a descrição e as regras, depois toque em "Entrar no Grupo". Você será redirecionado automaticamente para o Telegram.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left font-medium">
                        É seguro participar dos grupos listados?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Sim. Todos são pré-aprovados e monitorados. Ainda assim, mantenha o bom senso: nunca compartilhe dados sensíveis (CPF, senhas, comprovantes, etc.) em grupos, mesmo os verificados.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left font-medium">
                        Posso cadastrar meu próprio grupo?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Com certeza! Clique em "Anunciar Grupo" no menu, preencha as informações e aguarde a análise. O cadastro é 100% gratuito, e seu grupo pode alcançar milhares de pessoas em busca de comunidades reais.
                      </AccordionContent>
                    </AccordionItem>
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
