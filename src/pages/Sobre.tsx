import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Users,
  Lock,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  Code2,
  Briefcase,
  Megaphone,
  Palette,
  MessageSquare,
  Send,
  Globe,
  Github,
  Linkedin,
  Instagram,
  Quote,
  Star,
} from "lucide-react";
import autorFoto from "@/assets/autor-daniel-olimpio.jpg";
import autorBanner from "@/assets/autor-banner-code.jpg";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead
        title="Sobre o Grupos do Telegram: nossa missão e quem está por trás"
        description="Conheça a missão do Grupos do Telegram: ajudar brasileiros a usarem o Telegram com mais segurança, organização e propósito. Saiba quem cria o projeto."
        canonical="/sobre"
      />
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="text-center mb-12">
          <Badge className="bg-telegram-blue/10 text-telegram-blue hover:bg-telegram-blue/15 border-0 mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Nossa missão
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Sobre o Grupos do Telegram
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nascemos com um propósito simples, mas essencial: ajudar brasileiros a usarem o
            Telegram de forma mais <strong className="text-foreground">segura</strong>,{" "}
            <strong className="text-foreground">inteligente</strong> e{" "}
            <strong className="text-foreground">produtiva</strong>.
          </p>
        </section>

        {/* Plataforma independente */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-telegram-blue/10 rounded-xl flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-telegram-blue" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Plataforma 100% Independente
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Sem qualquer vínculo com o Telegram Group LLP ou a Telegram FZ-LLC.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Nosso foco não é apenas listar grupos — é oferecer{" "}
                  <strong>informação de qualidade</strong> sobre tudo o que envolve o ecossistema
                  do Telegram no Brasil: desde privacidade e segurança digital até ferramentas,
                  boas práticas de moderação, uso de canais, bots e gestão saudável de
                  comunidades.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Por que existimos */}
        <Card className="mb-8 border-amber-500/20 bg-amber-500/[0.03]">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold text-foreground">Por que existimos?</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Hoje, milhões de pessoas usam grupos e canais do Telegram para{" "}
              <strong>estudar</strong>, <strong>empreender</strong>, organizar comunidades,
              coordenar equipes, compartilhar hobbies ou manter laços familiares. Mas sem
              orientação, esses mesmos espaços podem virar caos: conflitos, vazamento de dados,
              spam, golpes ou simplesmente abandono.
            </p>
            <blockquote className="border-l-4 border-amber-500 bg-amber-500/[0.06] pl-4 py-3 rounded-r my-5">
              <p className="italic text-foreground/90 flex gap-2">
                <Quote className="w-5 h-5 text-amber-500 flex-shrink-0" />
                Nós acreditamos que tecnologia só faz sentido quando serve às pessoas com
                respeito e responsabilidade.
              </p>
            </blockquote>
            <p className="text-foreground/90 leading-relaxed">
              Por isso, criamos conteúdos práticos, atualizados e baseados em experiências
              reais — feitos por quem entende os desafios de administrar, participar e proteger
              comunidades digitais.
            </p>
          </CardContent>
        </Card>

        {/* O que você encontra */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <BookOpen className="w-6 h-6 text-telegram-blue" />
            <h2 className="text-2xl font-bold text-foreground">O que você encontra aqui?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Lock,
                title: "Privacidade e Segurança",
                desc: "Guias completos sobre configurações de privacidade e segurança no Telegram.",
                color: "text-emerald-500",
              },
              {
                icon: Users,
                title: "Moderação de Grupos",
                desc: "Estratégias éticas para organizar e moderar grupos sem estresse.",
                color: "text-telegram-blue",
              },
              {
                icon: Briefcase,
                title: "Telegram para Negócios",
                desc: "Dicas práticas para usar canais e bots em micro e pequenos negócios.",
                color: "text-purple-500",
              },
              {
                icon: Sparkles,
                title: "Novas Funcionalidades",
                desc: "Análises atualizadas de ferramentas e recursos do Telegram.",
                color: "text-pink-500",
              },
              {
                icon: BookOpen,
                title: "Conteúdo Original",
                desc: "100% em português, pensado para o contexto brasileiro.",
                color: "text-amber-500",
              },
              {
                icon: Megaphone,
                title: "Divulgação Curada",
                desc: "Cadastro gratuito de grupos e canais com revisão manual.",
                color: "text-rose-500",
              },
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-5">
                  <item.icon className={`w-6 h-6 mb-2 ${item.color}`} />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Compromisso */}
        <Card className="mb-10 border-emerald-500/20 bg-emerald-500/[0.03]">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <h2 className="text-xl font-bold text-foreground">Compromisso com a transparência</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {[
                "Não vendemos links",
                "Não promovemos grupos por pagamento",
                "Não coletamos dados além do necessário",
                "Nunca nos confundimos com o Telegram oficial",
              ].map((txt, i) => (
                <div key={i} className="flex items-center gap-2 text-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm">{txt}</span>
                </div>
              ))}
            </div>
            <p className="text-foreground/90 leading-relaxed text-sm">
              Nosso sucesso é medido pelo valor que entregamos — pelo administrador que
              conseguiu resolver um conflito, pelo empreendedor que vendeu mais com ética e pela
              família que se manteve conectada com segurança.
            </p>
          </CardContent>
        </Card>

        {/* Slogan */}
        <Card className="mb-12 bg-gradient-to-br from-telegram-blue/10 via-purple-500/5 to-pink-500/10 border-telegram-blue/20">
          <CardContent className="py-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Grupos do Telegram
            </h2>
            <p className="text-muted-foreground">
              Conexões reais. Informação útil. Telegram com responsabilidade.
            </p>
          </CardContent>
        </Card>

        {/* Conheça o Criador */}
        <section className="text-center mb-8">
          <Badge className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/15 border-0 mb-3">
            <Code2 className="w-3 h-3 mr-1" />
            Desenvolvedor
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Conheça o Criador</h2>
        </section>

        <Card className="overflow-hidden mb-12">
          {/* Banner */}
          <div
            className="h-40 sm:h-52 bg-cover bg-center"
            style={{ backgroundImage: `url(${autorBanner})` }}
          />
          {/* Header com avatar */}
          <div className="px-6 sm:px-8 pb-6 -mt-14 sm:-mt-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <Avatar className="h-28 w-28 sm:h-32 sm:w-32 ring-4 ring-background shadow-xl">
                <AvatarImage src={autorFoto} alt="Daniel Olimpio" />
                <AvatarFallback className="bg-telegram-blue text-white text-2xl">DO</AvatarFallback>
              </Avatar>
              <div className="pb-2">
                <h3 className="text-2xl font-bold text-foreground">Daniel Olimpio</h3>
                <p className="text-sm text-muted-foreground">Desenvolvedor Web</p>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <a href="#" aria-label="Instagram" className="hover:text-telegram-blue"><Instagram className="w-4 h-4" /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-telegram-blue"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" aria-label="GitHub" className="hover:text-telegram-blue"><Github className="w-4 h-4" /></a>
                  <a href="#" aria-label="Site pessoal" className="hover:text-telegram-blue"><Globe className="w-4 h-4" /></a>
                </div>
              </div>
            </div>

            {/* Sobre Mim */}
            <div className="mt-6">
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-telegram-blue" /> Sobre Mim
              </h4>
              <p className="text-foreground/90 leading-relaxed">
                Explorando o potencial do Telegram como plataforma de conexão, utilidade e
                negócios.
              </p>
            </div>

            {/* Jornada */}
            <div className="mt-6">
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-500" /> Minha Jornada com o Telegram
              </h4>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Desde que o Telegram ganhou força no Brasil, acompanho de perto sua evolução —
                não só como usuário, mas como profissional do ecossistema digital. Ao longo de
                mais de <strong>15 anos</strong>, testemunhei a transformação do app de uma
                simples ferramenta de mensagens em uma plataforma central de comunicação,
                comércio e comunidade para milhões de brasileiros.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Combinando minha experiência de mais de <strong>20 anos no mercado digital</strong>{" "}
                — em desenvolvimento web, design de interfaces e estratégia de produtos — passei
                a estudar, testar e documentar as melhores práticas para uso seguro, eficaz e
                ético do Telegram, tanto por indivíduos quanto por empresas e comunidades.
              </p>
            </div>

            {/* Especialização */}
            <div className="mt-6">
              <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-emerald-500" /> Minha Especialização
              </h4>
              <p className="text-foreground/90 leading-relaxed mb-3">
                Hoje, sou referência em soluções práticas para o ecossistema Telegram, com foco
                em:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { icon: Megaphone, label: "Estratégia e Uso Avançado do Telegram" },
                  { icon: Lock, label: "Privacidade e Segurança Digital" },
                  { icon: Users, label: "Moderação de Comunidades e Grupos" },
                  { icon: Briefcase, label: "Canais, Bots e Vendas por Mensagem" },
                  { icon: Palette, label: "UI/UX para Experiências de Conversação" },
                  { icon: MessageSquare, label: "Brand Identity para Comunicação Digital" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 border border-border/60"
                  >
                    <item.icon className="w-4 h-4 text-telegram-blue flex-shrink-0" />
                    <span className="text-sm text-foreground/90">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-foreground/90 leading-relaxed mt-6">
              Meu trabalho não é apenas técnico — é humano. Acredito que o Telegram, quando
              usado com consciência, pode fortalecer laços, impulsionar negócios e democratizar
              o acesso à informação. Por isso, crio conteúdos que traduzem complexidade em
              clareza, sempre com base em testes reais, atualizações oficiais e o contexto
              brasileiro.
            </p>

            {/* Compromisso */}
            <Card className="mt-6 border-telegram-blue/20 bg-telegram-blue/[0.04]">
              <CardContent className="pt-5">
                <h5 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                  <Send className="w-4 h-4 text-telegram-blue" /> Meu compromisso?
                </h5>
                <p className="italic text-foreground/90 leading-relaxed">
                  "Transformar o caos das notificações em conexões reais. Porque no fim das
                  contas, tecnologia só importa quando serve às pessoas — com segurança,
                  respeito e utilidade."
                </p>
              </CardContent>
            </Card>
          </div>
        </Card>

        {/* CTA Blog */}
        <Card className="bg-gradient-to-br from-telegram-blue/10 to-purple-500/10 border-telegram-blue/20">
          <CardContent className="py-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-foreground mb-1">
                Leia também o nosso blog
              </h3>
              <p className="text-sm text-muted-foreground">
                Conteúdos atualizados sobre canais, grupos, monetização e segurança no Telegram.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-telegram-blue text-white text-sm font-medium hover:bg-telegram-blue/90 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Ir para o Blog
            </Link>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;