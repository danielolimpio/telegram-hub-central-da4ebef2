import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Term {
  term: string;
  slug: string;
  definition: string;
  link?: string;
}

interface Section {
  letter: string;
  terms: Term[];
}

const sections: Section[] = [
  {
    letter: "A",
    terms: [
      { term: "Administrador de grupo do Telegram", slug: "administrador-grupo-telegram", definition: "Usuário com permissões para editar informações, adicionar membros, gerenciar mensagens e configurar bots dentro de um grupo do Telegram." },
      { term: "Amizades no Telegram", slug: "amizades-telegram", definition: "Comunidades voltadas a conhecer novas pessoas, trocar conversas e criar laços afetivos por afinidade regional ou temática.", link: "/grupos-telegram-amizades" },
      { term: "Anti-spam (bots)", slug: "antispam-telegram", definition: "Bots utilizados por moderadores para bloquear links maliciosos, mensagens repetidas e usuários automatizados em grupos do Telegram." },
    ],
  },
  {
    letter: "B",
    terms: [
      { term: "Bot do Telegram", slug: "bot-telegram", definition: "Conta automatizada baseada na API oficial do Telegram que executa tarefas como enviar notícias, moderar grupos, aceitar pagamentos e integrar serviços externos.", link: "/blog/bots-telegram-2026-como-criar-usar-escalar" },
      { term: "BotFather", slug: "botfather", definition: "Bot oficial do Telegram usado para criar novos bots, gerar tokens de acesso e configurar comandos personalizados." },
      { term: "Buscador de grupos do Telegram", slug: "buscador-grupos-telegram", definition: "Ferramenta ou diretório (como o gruposdotelegram.org) que indexa grupos verificados por categoria para facilitar a descoberta." },
    ],
  },
  {
    letter: "C",
    terms: [
      { term: "Canal do Telegram", slug: "canal-telegram", definition: "Modalidade de transmissão unidirecional em que apenas administradores publicam e milhares de inscritos recebem o conteúdo.", link: "/blog/como-criar-canal-no-telegram-2026-monetizar-inscritos" },
      { term: "Carros e motos no Telegram", slug: "carros-telegram", definition: "Comunidades de entusiastas de veículos, tuning, mecânica, compra, venda e eventos automotivos.", link: "/grupos-telegram-carros" },
      { term: "Chat secreto", slug: "chat-secreto-telegram", definition: "Conversa criptografada de ponta a ponta com opção de autodestruição de mensagens, disponível apenas entre dois usuários." },
      { term: "Cidades no Telegram", slug: "cidades-telegram", definition: "Grupos regionais para trocar informações locais sobre eventos, comércio, empregos e serviços da sua cidade.", link: "/grupos-telegram-cidades" },
      { term: "Cinema, filmes e séries", slug: "cinema-telegram", definition: "Grupos que discutem lançamentos, indicações, análises e curiosidades sobre filmes, séries, animes e doramas.", link: "/grupos-telegram-cinema" },
      { term: "Concursos públicos", slug: "concursos-telegram", definition: "Comunidades de concurseiros que compartilham editais, materiais de estudo, gabaritos e cronogramas.", link: "/grupos-telegram-concursos" },
      { term: "Criptografia do Telegram", slug: "criptografia-telegram", definition: "Modelo de segurança baseado em MTProto que protege chats padrão em nuvem e chats secretos com ponta a ponta." },
      { term: "Cursos no Telegram", slug: "cursos-telegram", definition: "Grupos e canais que reúnem cursos gratuitos, materiais de estudo e trilhas de aprendizado.", link: "/grupos-telegram-cursos" },
    ],
  },
  {
    letter: "D",
    terms: [
      { term: "Divulgação de grupos", slug: "divulgacao-telegram", definition: "Grupos abertos para administradores anunciarem seus próprios canais, grupos e serviços em troca de visibilidade.", link: "/grupos-telegram-divulgacao" },
      { term: "Diretório de grupos do Telegram", slug: "diretorio-telegram", definition: "Site que cataloga, categoriza e valida grupos e canais do Telegram para descoberta pública." },
    ],
  },
  {
    letter: "E",
    terms: [
      { term: "Empregos e vagas", slug: "empregos-telegram", definition: "Grupos e canais que divulgam vagas CLT, PJ, home office, freelas e oportunidades por área de atuação.", link: "/grupos-telegram-empregos" },
      { term: "Encontros no Telegram", slug: "encontros-telegram", definition: "Comunidades para marcar encontros presenciais entre pessoas com interesses ou localizações compatíveis.", link: "/grupos-telegram-encontros" },
      { term: "Esportes no Telegram", slug: "esportes-telegram", definition: "Grupos de torcidas, palpiteiros, apostas esportivas responsáveis e discussões sobre modalidades diversas.", link: "/grupos-telegram-esportes" },
      { term: "Estilo e moda", slug: "estilo-telegram", definition: "Comunidades sobre tendências, dicas de beleza, maquiagem, cabelo e consumo consciente de moda.", link: "/grupos-telegram-estilo" },
      { term: "Estudos e vestibular", slug: "estudos-telegram", definition: "Grupos para trocar resumos, tirar dúvidas e formar squads de estudo para ENEM, faculdade e certificações.", link: "/grupos-telegram-estudos" },
      { term: "Eventos no Telegram", slug: "eventos-telegram", definition: "Grupos que divulgam festas, shows, feiras, congressos e encontros temáticos regionais ou online.", link: "/grupos-telegram-eventos" },
    ],
  },
  {
    letter: "F",
    terms: [
      { term: "Fãs e fandoms", slug: "fas-telegram", definition: "Grupos dedicados a artistas, bandas, séries, jogos e celebridades como BTS, BLACKPINK, Taylor Swift e K-pop em geral.", link: "/grupos-telegram-fas" },
      { term: "FAQ do Telegram", slug: "faq-telegram", definition: "Perguntas frequentes sobre uso do app, cadastro, segurança e recursos.", link: "/faq" },
      { term: "Figurinhas (stickers)", slug: "figurinhas-telegram", definition: "Pacotes de imagens animadas ou estáticas usadas em conversas — o Telegram é referência mundial no formato.", link: "/grupos-telegram-figurinhas" },
      { term: "Finanças pessoais", slug: "financas-telegram", definition: "Grupos de educação financeira, controle de gastos, quitação de dívidas e planejamento familiar.", link: "/grupos-telegram-financas" },
      { term: "Frases e reflexões", slug: "frases-telegram", definition: "Canais que compartilham mensagens motivacionais, pensamentos, textos e reflexões diárias.", link: "/grupos-telegram-frases" },
    ],
  },
  {
    letter: "G",
    terms: [
      { term: "Games no Telegram", slug: "games-telegram", definition: "Grupos de jogadores de Free Fire, Fortnite, Valorant, LoL, CS2, Minecraft, Roblox, GTA, PUBG e mais.", link: "/grupos-telegram-games" },
      { term: "Grupo do Telegram", slug: "grupo-telegram", definition: "Conversa em grupo com até 200 mil membros, focada em interação em tempo real com múltiplos participantes." },
      { term: "Grupo privado", slug: "grupo-privado-telegram", definition: "Grupo acessível apenas por link de convite ou aprovação do administrador; não aparece em buscas públicas." },
      { term: "Grupo público", slug: "grupo-publico-telegram", definition: "Grupo com nome de usuário (@) próprio, pesquisável dentro do Telegram e acessível por qualquer pessoa." },
    ],
  },
  {
    letter: "H",
    terms: [
      { term: "Humor no Telegram", slug: "humor-telegram", definition: "Grupos e canais para rir com piadas, memes, vídeos engraçados e conteúdo leve do cotidiano.", link: "/grupos-telegram-humor" },
    ],
  },
  {
    letter: "I",
    terms: [
      { term: "Imóveis e imobiliária", slug: "imobiliaria-telegram", definition: "Grupos de aluguel, compra e venda de imóveis diretos com o proprietário ou via corretores.", link: "/grupos-telegram-imobiliaria" },
      { term: "Investimentos", slug: "investimentos-telegram", definition: "Canais sobre bolsa, renda fixa, criptomoedas, Bitcoin, day trade e análises de mercado.", link: "/grupos-telegram-investimentos" },
    ],
  },
  {
    letter: "L",
    terms: [
      { term: "LGBTQIA+", slug: "lgbtqia-telegram", definition: "Comunidades inclusivas voltadas ao público LGBTQIA+ para amizades, discussões e acolhimento.", link: "/grupos-telegram-lgbtqia" },
      { term: "Liberais", slug: "liberais-telegram", definition: "Grupos +18 para maiores de idade, com regras rígidas de conduta e consentimento.", link: "/grupos-telegram-liberais" },
      { term: "Link de convite", slug: "link-convite-telegram", definition: "URL única (t.me/joinchat/... ou t.me/+...) usada para entrar em um grupo ou canal privado." },
      { term: "Livros e leitura", slug: "livros-telegram", definition: "Grupos que trocam PDFs, resenhas, ebooks e recomendações literárias por gênero.", link: "/grupos-telegram-livros" },
    ],
  },
  {
    letter: "M",
    terms: [
      { term: "Memes", slug: "memes-telegram", definition: "Grupos dedicados a compartilhar os melhores memes brasileiros e internacionais atualizados diariamente.", link: "/grupos-telegram-memes" },
      { term: "Mini Apps", slug: "mini-apps-telegram", definition: "Aplicativos web executados dentro do Telegram, geralmente integrados à TON, jogos ou serviços.", link: "/blog/telegram-mini-apps-2026-guia-completo" },
      { term: "Moderação", slug: "moderacao-telegram", definition: "Conjunto de práticas e ferramentas (bots, regras, admins) que mantêm a qualidade e segurança de um grupo." },
      { term: "Músicas", slug: "musicas-telegram", definition: "Grupos de funk, sertanejo, rock, pagode, K-pop, rap, trap e outros gêneros.", link: "/grupos-telegram-musicas" },
    ],
  },
  {
    letter: "N",
    terms: [
      { term: "Namoro no Telegram", slug: "namoros-telegram", definition: "Comunidades para conhecer pessoas com intenções de relacionamento sério ou casual.", link: "/grupos-telegram-namoros" },
      { term: "Negócios e empreendedorismo", slug: "negocios-telegram", definition: "Grupos de networking, sócios, cases de sucesso e mentoria para empreendedores.", link: "/grupos-telegram-negocios" },
      { term: "Notícias", slug: "noticias-telegram", definition: "Canais de jornalismo, política, economia e informação atualizada em tempo real.", link: "/grupos-telegram-noticias" },
    ],
  },
  {
    letter: "O",
    terms: [
      { term: "Oportunidades e renda extra", slug: "oportunidades-telegram", definition: "Grupos que compartilham freelas, indicações, monetização e formas legítimas de ganhar dinheiro extra.", link: "/grupos-telegram-oportunidades" },
    ],
  },
  {
    letter: "P",
    terms: [
      { term: "Pets", slug: "pets-telegram", definition: "Grupos de tutores de cachorros, gatos, adoção responsável e cuidados veterinários.", link: "/grupos-telegram-pets" },
      { term: "Premium do Telegram", slug: "premium-telegram", definition: "Assinatura oficial que libera limites maiores de upload, reações exclusivas, stickers e sem anúncios." },
      { term: "Prévias do Telegram", slug: "previas-telegram", definition: "Termo popular para conteúdos de demonstração ou amostras dentro de canais e grupos." },
      { term: "Profissões", slug: "profissoes-telegram", definition: "Comunidades por categoria profissional: médicos, advogados, engenheiros, designers, professores e enfermagem.", link: "/grupos-telegram-profissoes" },
      { term: "Promoções", slug: "promocoes-telegram", definition: "Canais que avisam ofertas relâmpago, cupons, achadinhos da Shopee, Amazon e Mercado Livre.", link: "/grupos-telegram-promocoes" },
    ],
  },
  {
    letter: "R",
    terms: [
      { term: "Receitas", slug: "receitas-telegram", definition: "Grupos de culinária, confeitaria, low carb, receitas fit e comida caseira.", link: "/grupos-telegram-receitas" },
      { term: "Redes sociais", slug: "redes-sociais-telegram", definition: "Grupos de troca e crescimento de seguidores em Instagram, TikTok e YouTube.", link: "/grupos-telegram-redes-sociais" },
      { term: "Religião e fé", slug: "religiao-telegram", definition: "Comunidades evangélicas, católicas, espíritas, umbanda e de outras vertentes.", link: "/grupos-telegram-religiao" },
    ],
  },
  {
    letter: "S",
    terms: [
      { term: "Segurança no Telegram", slug: "seguranca-telegram", definition: "Boas práticas para evitar golpes, proteger seu número e configurar privacidade da conta.", link: "/seguranca" },
      { term: "Stars (Telegram Stars)", slug: "telegram-stars", definition: "Moeda interna do Telegram usada para pagamentos em bots, mini apps e conteúdo premium.", link: "/blog/como-ganhar-dinheiro-telegram-2026-stars-ton" },
      { term: "Supergrupo", slug: "supergrupo-telegram", definition: "Grupo com recursos avançados (histórico completo, tópicos, permissões granulares) e até 200 mil membros." },
    ],
  },
  {
    letter: "T",
    terms: [
      { term: "Tecnologia", slug: "tecnologia-telegram", definition: "Grupos de programação, IA, ChatGPT, JavaScript, Python e desenvolvimento de software.", link: "/grupos-telegram-tecnologia" },
      { term: "Telegram Business", slug: "telegram-business", definition: "Recursos oficiais para empresas: perfil comercial, respostas rápidas, etiquetas e horários de atendimento.", link: "/blog/telegram-para-empresas-2026-business-atendimento-automacao" },
      { term: "Telegram Web", slug: "telegram-web", definition: "Versão do Telegram acessível pelo navegador em web.telegram.org, sincronizada com o app do celular." },
      { term: "TON (The Open Network)", slug: "ton-telegram", definition: "Blockchain oficialmente integrada ao Telegram para transações, NFTs e usernames tokenizados." },
      { term: "Tópicos (Fóruns)", slug: "topicos-telegram", definition: "Recurso que divide um supergrupo em subseções temáticas, semelhantes a canais de um servidor." },
    ],
  },
  {
    letter: "V",
    terms: [
      { term: "Vendas", slug: "vendas-telegram", definition: "Grupos de revenda, dropshipping, atacado e vendas diretas por consultores independentes.", link: "/grupos-telegram-vendas" },
      { term: "Viagens", slug: "viagens-telegram", definition: "Comunidades sobre milhas, passagens promocionais, intercâmbio e roteiros de viagem.", link: "/grupos-telegram-viagens" },
      { term: "Vídeos", slug: "videos-telegram", definition: "Canais que publicam vídeos curtos, tutoriais e cortes de podcasts para consumo rápido.", link: "/grupos-telegram-videos" },
    ],
  },
  {
    letter: "Z",
    terms: [
      { term: "Zoeira", slug: "zoeira-telegram", definition: "Grupos de humor pesado, brincadeiras, trollagens e conteúdo descontraído entre amigos.", link: "/grupos-telegram-zoeira" },
    ],
  },
];

const allTerms = sections.flatMap((s) => s.terms);

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glossário de Grupos do Telegram",
  description:
    "Dicionário de termos, categorias e recursos relacionados a grupos e canais do Telegram.",
  url: "https://gruposdotelegram.org/glossario",
  hasDefinedTerm: allTerms.map((t) => ({
    "@type": "DefinedTerm",
    "@id": `https://gruposdotelegram.org/glossario#${t.slug}`,
    name: t.term,
    description: t.definition,
  })),
};

const Glossario = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Glossário do Telegram — Dicionário de Grupos, Canais e Recursos | 2026"
        description="Dicionário completo de termos sobre grupos e canais do Telegram: categorias, bots, Stars, TON, privacidade, moderação e muito mais. Guia A–Z atualizado para 2026."
        canonical="/glossario"
      />
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://gruposdotelegram.org/" },
          { name: "Glossário", url: "https://gruposdotelegram.org/glossario" },
        ]}
      />
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(definedTermSchema)}
        </script>
      </Head>
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-telegram-blue/10 rounded-xl">
            <BookOpen className="w-7 h-7 text-telegram-blue" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Glossário do Telegram
            </h1>
            <p className="text-muted-foreground mt-1">
              Dicionário A–Z de grupos, canais, categorias e recursos do Telegram.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Este glossário reúne, em ordem alfabética, os principais termos que aparecem no universo dos <strong className="text-foreground">grupos do Telegram</strong> — de <em>bots</em> e <em>canais</em> a <em>Stars</em>, <em>TON</em>, <em>Mini Apps</em> e cada uma das nossas categorias. Use como referência rápida ou como ponto de partida para navegar pelo diretório.
        </p>

        {/* A–Z quick nav */}
        <nav aria-label="Navegação alfabética" className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border">
          {sections.map((s) => (
            <a
              key={s.letter}
              href={`#letra-${s.letter}`}
              className="w-9 h-9 flex items-center justify-center rounded-md bg-muted hover:bg-telegram-blue hover:text-white text-sm font-semibold transition-colors"
            >
              {s.letter}
            </a>
          ))}
        </nav>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.letter} id={`letra-${section.letter}`}>
              <h2 className="text-2xl font-bold text-telegram-blue mb-4">
                {section.letter}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.terms.map((t) => (
                  <Card key={t.slug} id={t.slug} className="scroll-mt-24">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-semibold text-foreground">
                        {t.link ? (
                          <Link to={t.link} className="hover:text-telegram-blue transition-colors">
                            {t.term}
                          </Link>
                        ) : (
                          t.term
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t.definition}
                      </p>
                      {t.link && (
                        <Link
                          to={t.link}
                          className="inline-block mt-2 text-xs font-medium text-telegram-blue hover:underline"
                        >
                          Explorar categoria →
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Glossario;