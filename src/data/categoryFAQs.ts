export interface CategoryFAQ {
  question: string;
  answer: string;
}

const f = (question: string, answer: string): CategoryFAQ => ({ question, answer });

export const categoryFAQs: Record<string, { label: string; faqs: CategoryFAQ[] }> = {
  amizades: {
    label: "Amizades",
    faqs: [
      f("Como entrar em grupos do Telegram de amizades grátis em 2026?", "Todos os grupos de amizade listados aqui são 100% gratuitos. Basta clicar em ‘Entrar no Grupo’ e o Telegram abrirá o convite automaticamente no app ou navegador."),
      f("Existem grupos de Telegram para fazer amizade por região ou cidade?", "Sim. Muitos grupos são segmentados por estado, capital ou bairro. Use o campo de busca com o nome da sua cidade para filtrar grupos de amizade locais."),
      f("Grupos do Telegram para fazer amigos são seguros?", "Os grupos aqui listados passam por moderação. Ainda assim, nunca compartilhe dados pessoais, endereço ou informações bancárias com desconhecidos."),
      f("Qual a diferença entre grupo e canal de amizades no Telegram?", "Grupos permitem conversa entre todos os membros. Canais são de mão única (só o admin posta). Para fazer amizades reais, prefira grupos."),
      f("Posso divulgar meu perfil pessoal nos grupos de amizade?", "Cada grupo tem regras próprias. Alguns permitem apresentação, outros não. Leia a mensagem fixada antes de postar para evitar banimento."),
      f("Existem grupos de amizade por faixa etária no Telegram?", "Sim, há grupos específicos para jovens, adultos +30, +40 e melhor idade. Filtre pelo termo da faixa etária desejada nos títulos."),
    ],
  },
  carros: {
    label: "Carros",
    faqs: [
      f("Onde encontro grupos do Telegram sobre carros e automóveis em 2026?", "Nossa categoria reúne dezenas de grupos ativos sobre carros nacionais, importados, tuning, rebaixados e mecânica em geral, todos com links atualizados."),
      f("Tem grupo de Telegram de compra e venda de carros usados?", "Sim, existem grupos regionais especializados em venda de carros seminovos, motos e peças. Verifique sempre a reputação do vendedor antes de negociar."),
      f("Grupos de Telegram sobre carros importados e clássicos existem?", "Sim, há comunidades dedicadas a BMW, Audi, Mercedes, Porsche, Mustang e clássicos brasileiros como Opala, Maverick e Fusca."),
      f("Como participar de grupos de rolês e encontros automotivos?", "Muitos grupos organizam encontros semanais em estados como SP, RJ, MG, RS e PR. Entre no grupo da sua região e acompanhe a agenda fixada."),
      f("Existem grupos do Telegram sobre mecânica DIY e tutoriais?", "Sim. Há grupos com mecânicos e entusiastas que compartilham diagramas, códigos OBD2, tutoriais em vídeo e dicas de manutenção preventiva."),
    ],
  },
  cidades: {
    label: "Cidades",
    faqs: [
      f("Como achar grupos do Telegram da minha cidade?", "Filtre pelo nome da cidade ou estado. Temos grupos ativos de São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Salvador, Recife, Fortaleza e muitas outras."),
      f("Existem grupos de Telegram por bairro?", "Sim, principalmente em capitais. São comunidades de vizinhança para trocar recomendações, alertas de segurança e eventos locais."),
      f("Grupos de cidades pequenas também estão listados?", "Sim. Adicionamos constantemente grupos de cidades do interior. Se sua cidade não estiver aqui, cadastre o grupo gratuitamente."),
      f("Tem grupo de Telegram para expatriados brasileiros por cidade?", "Sim, há grupos ativos de brasileiros em Lisboa, Porto, Miami, Orlando, Boston, Londres, Dublin, Tóquio, Sydney e outras cidades no exterior."),
      f("Posso divulgar meu comércio local no grupo da minha cidade?", "Depende das regras de cada grupo. Muitos têm dia específico para divulgação ou canal paralelo só para anúncios."),
    ],
  },
  cinema: {
    label: "Cinema",
    faqs: [
      f("Onde ficam os melhores grupos do Telegram sobre filmes e séries?", "Nesta categoria você acessa grupos e canais sobre lançamentos, críticas, streaming, Marvel, DC, animes, doramas e cinema clássico."),
      f("Grupos do Telegram indicam filmes por streaming (Netflix, Prime, Max)?", "Sim, muitos canais publicam diariamente novidades de Netflix, Prime Video, Max, Disney+, Apple TV+ e Globoplay com sinopse e trailer."),
      f("É legal compartilhar filmes piratas no Telegram?", "Não. Nossa plataforma não permite grupos com conteúdo pirata. Todos os grupos aqui listados focam em discussão, notícias e recomendações legais."),
      f("Tem grupo do Telegram sobre cinema nacional?", "Sim. Há comunidades sobre cinema brasileiro, festivais como Gramado, Cine Ceará e produções independentes."),
      f("Existem grupos para cinéfilos e clubes de cinema?", "Sim, com discussões semanais sobre um filme específico, votações e watch parties sincronizadas via Telegram."),
    ],
  },
  concursos: {
    label: "Concursos",
    faqs: [
      f("Como acompanhar editais de concursos públicos pelo Telegram?", "Nossos grupos e canais alertam sobre editais federais, estaduais e municipais assim que são publicados, incluindo INSS, Receita, Polícia e TJ."),
      f("Tem grupo do Telegram para trocar materiais de estudo para concursos?", "Sim, há grupos ativos com PDFs de resumos, mapas mentais, questões comentadas e simulados de bancas como Cebraspe, FGV, FCC e Vunesp."),
      f("Existem grupos por área (fiscal, tribunais, policiais)?", "Sim, cada nicho tem grupos dedicados: Auditor Fiscal, Analista Judiciário, PRF, PF, PM, Perito e mais."),
      f("Grupos do Telegram de concurso ajudam com correção de redação?", "Sim. Muitos possuem professores voluntários ou monitores que corrigem redações discursivas e dão feedback."),
      f("Posso divulgar meu curso preparatório nos grupos de concurso?", "Somente com autorização do admin. Divulgação sem permissão costuma resultar em banimento imediato."),
    ],
  },
  cursos: {
    label: "Cursos",
    faqs: [
      f("Onde encontrar cursos grátis pelo Telegram em 2026?", "Nossa categoria reúne grupos que compartilham cursos gratuitos e promocionais de Udemy, Coursera, edX, Alura e cursos oficiais liberados temporariamente."),
      f("Grupos do Telegram têm cupons de cursos pagos?", "Sim. Há canais que publicam cupons de 100% de desconto na Udemy, cupons Coursera Plus e promoções da Hotmart."),
      f("Como saber se um curso divulgado no Telegram é confiável?", "Verifique se o link leva para plataforma oficial (Udemy, Coursera, Hotmart, Domestika). Desconfie de links encurtados sem contexto."),
      f("Tem grupo do Telegram para cursos de programação, design e marketing?", "Sim, cada nicho tem grupos ativos: front-end, back-end, mobile, UX/UI, tráfego pago, SEO, dropshipping e IA generativa."),
      f("Existem grupos sobre certificações internacionais (AWS, Google, Microsoft)?", "Sim, com dumps legais, simulados e materiais para AWS, GCP, Azure, PMP, Scrum, ITIL e Cisco."),
    ],
  },
  divulgacao: {
    label: "Divulgação",
    faqs: [
      f("Como divulgar meu grupo do Telegram de forma gratuita?", "Cadastre seu grupo aqui em ‘Cadastrar Grupo’ e participe dos grupos de divulgação da nossa categoria para trocar links com outros admins."),
      f("Grupos de divulgação do Telegram funcionam para crescer?", "Sim, quando usados com moderação. Foque em grupos ativos, poste no horário permitido e evite spam para não ser banido."),
      f("Quais as regras mais comuns em grupos de divulgação?", "Um link por dia, sem repetição, sem conteúdo adulto, sem correntes e sempre respeitar o horário definido pela moderação."),
      f("Posso divulgar loja, Instagram e canal do Telegram no mesmo grupo?", "Depende. Alguns grupos aceitam qualquer link; outros são exclusivos para links do Telegram."),
      f("Existem grupos de divulgação por nicho (afiliados, dropshipping, MMN)?", "Sim, o que aumenta a conversão. Prefira grupos alinhados ao seu público-alvo em vez de grupos genéricos."),
    ],
  },
  empregos: {
    label: "Empregos",
    faqs: [
      f("Onde encontrar vagas de emprego pelo Telegram em 2026?", "Nossos grupos publicam vagas CLT, PJ, home office, estágios e trainee diariamente, incluindo posições em tecnologia, saúde, logística e varejo."),
      f("Tem grupo de Telegram para vagas home office e remotas?", "Sim, com vagas 100% remotas de empresas nacionais e internacionais que aceitam brasileiros, incluindo pagamento em dólar/euro."),
      f("Grupos do Telegram de vagas são gratuitos?", "Sim. Todos os grupos listados aqui são gratuitos. Desconfie de quem cobra para ‘liberar vagas’ — costuma ser golpe."),
      f("Existem grupos por área profissional (TI, saúde, engenharia)?", "Sim, com foco em desenvolvedores, designers, enfermeiros, médicos, engenheiros civis, contadores, advogados e áreas administrativas."),
      f("Posso divulgar meu currículo nos grupos de emprego?", "Alguns permitem em dia específico. Prefira canais de recrutadores que anunciam vagas segmentadas."),
    ],
  },
  encontros: {
    label: "Encontros",
    faqs: [
      f("Grupos do Telegram para encontros são seguros?", "Nossa moderação remove grupos com conduta suspeita. Ainda assim, sempre marque encontros em locais públicos e avise alguém de confiança."),
      f("Existem grupos de encontros por cidade e estado?", "Sim, com foco em SP, RJ, MG, BA, PR, RS e outras regiões. Filtre pela sua cidade para ver os mais ativos."),
      f("Como funcionam os grupos de encontros no Telegram?", "Membros se apresentam, trocam interesses e podem marcar encontros presenciais ou virtuais. Cada grupo tem suas regras de conduta."),
      f("Precisa pagar para entrar em grupos de encontros?", "Não. Todos os grupos listados nesta categoria são gratuitos. Cobrança para entrar geralmente indica golpe."),
      f("Grupos do Telegram de encontros aceitam LGBTQIA+?", "Sim, muitos são inclusivos. Também mantemos uma categoria específica LGBTQIA+ com grupos dedicados."),
    ],
  },
  esportes: {
    label: "Esportes",
    faqs: [
      f("Onde encontrar grupos do Telegram de futebol e outros esportes?", "Nesta categoria estão grupos de futebol brasileiro, europeu, Champions, Libertadores, além de MMA, F1, NBA, tênis, vôlei e esportes olímpicos."),
      f("Tem grupo de Telegram por time (Flamengo, Corinthians, Palmeiras, etc.)?", "Sim, cada torcida tem seus grupos. Também há grupos de rivalidade regional e de sócios-torcedores."),
      f("Existem grupos com transmissões e resenhas ao vivo?", "Sim. Muitos grupos comentam partidas em tempo real, com discussões táticas e enquetes."),
      f("Grupos do Telegram de apostas esportivas são permitidos?", "Aceitamos apenas grupos que respeitem legislação vigente. Fuja de grupos que prometem ‘tips 100% certeiros’ — não existe."),
      f("Tem grupo de Telegram de fantasy game (Cartola, LigaFut)?", "Sim, com dicas de escalação, mitos da rodada e ligas privadas para participar."),
    ],
  },
  estilo: {
    label: "Estilo",
    faqs: [
      f("Grupos do Telegram sobre moda e estilo existem?", "Sim, com foco em looks do dia, tendências, achados fashion, moda plus size, moda masculina e cuidados com o guarda-roupa."),
      f("Tem grupo do Telegram sobre beleza, skincare e maquiagem?", "Sim, com resenhas de produtos, dicas de skincare coreano, rotinas anti-idade e tutoriais de maquiagem."),
      f("Existem grupos de moda sustentável e brechó?", "Sim. Comunidades focadas em brechó online, upcycling, slow fashion e trocas de peças."),
      f("Grupos do Telegram indicam achados fashion baratos?", "Sim, com links de Shopee, SHEIN, AliExpress, Amazon e outlets nacionais."),
      f("Posso divulgar minha loja de roupas nos grupos de estilo?", "Verifique as regras. Muitos grupos têm dia de divulgação; outros são exclusivos para consumidoras."),
    ],
  },
  estudos: {
    label: "Estudos",
    faqs: [
      f("Onde encontrar grupos do Telegram para estudar em 2026?", "Nossa categoria reúne grupos de estudo colaborativo para ENEM, vestibular, faculdade, mestrado, idiomas e concursos."),
      f("Existem grupos de estudo por matéria (matemática, física, redação)?", "Sim, com resolução de exercícios, dicas de professores e revisões diárias."),
      f("Grupos do Telegram têm materiais de ENEM e vestibulares?", "Sim, com PDFs de resumos, videoaulas, provas antigas e simulados atualizados para 2026."),
      f("Como participar de grupos de estudo online via Telegram?", "Basta entrar pelo link do grupo, se apresentar e seguir a rotina de metas diárias/semanais."),
      f("Tem grupo de Telegram para estudar idiomas (inglês, espanhol, japonês)?", "Sim, com prática de conversação, correção de textos, indicação de séries no idioma e desafios de vocabulário."),
    ],
  },
  eventos: {
    label: "Eventos",
    faqs: [
      f("Onde acompanhar eventos, shows e festivais pelo Telegram?", "Nossos grupos publicam agenda de shows, festivais, feiras, congressos e eventos gratuitos por cidade e estado."),
      f("Tem grupo do Telegram para eventos gratuitos em 2026?", "Sim, com programação de eventos culturais, feiras de rua, workshops e cursos gratuitos em várias capitais."),
      f("Grupos do Telegram divulgam ingressos promocionais?", "Sim. Muitos canais alertam sobre pré-vendas, ingressos meia e cupons de plataformas como Sympla, Ingresse e Eventbrite."),
      f("Existem grupos de Telegram para eventos corporativos e networking?", "Sim, com foco em startups, tecnologia, marketing, RH e empreendedorismo."),
      f("Posso divulgar meu evento nos grupos de eventos?", "Sim, respeitando as regras de divulgação de cada grupo."),
    ],
  },
  fas: {
    label: "Fãs",
    faqs: [
      f("Grupos do Telegram de fãs de artistas e bandas existem?", "Sim, com fandoms de K-pop (BTS, BLACKPINK), pop internacional (Taylor Swift, Beyoncé), sertanejo, funk e rock nacional."),
      f("Tem grupo do Telegram para fãs de séries e animes?", "Sim, com comunidades ativas de One Piece, Naruto, Attack on Titan, Stranger Things, Wandinha, House of the Dragon e muito mais."),
      f("Existem grupos oficiais de fãs no Telegram?", "Alguns artistas mantêm canais oficiais. Verifique o selo de verificação e a bio do canal para confirmar."),
      f("Como participar de sorteios organizados por fandoms no Telegram?", "Muitos fandoms fazem sorteios de álbuns, ingressos e photocards. Fique atento às regras oficiais e nunca envie dinheiro."),
      f("Grupos de fãs indicam merchandising e onde comprar?", "Sim, com links para lojas oficiais, importados confiáveis e alerta contra falsificações."),
    ],
  },
  figurinhas: {
    label: "Figurinhas",
    faqs: [
      f("Onde baixar packs de figurinhas do Telegram grátis?", "Nossos canais e grupos publicam links para packs de stickers de memes, animes, filmes, políticos, celebridades e figurinhas animadas."),
      f("Como instalar figurinhas do Telegram no meu celular?", "Basta abrir o link do pack no app do Telegram e clicar em ‘Adicionar figurinhas’. Também funcionam no WhatsApp via export."),
      f("Posso criar minhas próprias figurinhas do Telegram?", "Sim, use o bot @Stickers dentro do Telegram para criar packs personalizados a partir de imagens PNG."),
      f("Existem figurinhas animadas e em vídeo?", "Sim, o Telegram suporta stickers estáticos, animados (.tgs) e em vídeo (.webm). Muitos packs vêm com efeitos sonoros."),
      f("Tem pack de figurinhas do Telegram para WhatsApp?", "Sim, muitos canais publicam packs compatíveis com o app Sticker.ly ou apps de exportação para WhatsApp."),
    ],
  },
  financas: {
    label: "Finanças",
    faqs: [
      f("Grupos do Telegram sobre finanças pessoais são confiáveis?", "Priorize grupos com foco em educação financeira e desconfie de qualquer promessa de ‘lucro garantido’ — costuma ser pirâmide ou golpe."),
      f("Tem grupo do Telegram sobre Tesouro Direto, CDB e renda fixa?", "Sim, com análises de rentabilidade, dicas de reserva de emergência e comparativos entre bancos e corretoras."),
      f("Existem grupos de finanças para iniciantes?", "Sim, com linguagem simples, planilhas de orçamento e método de metas 50-30-20."),
      f("Grupos do Telegram ajudam a sair das dívidas?", "Sim. Comunidades focadas em renegociação, Serasa Limpa Nome, Feirão da Serasa e método bola de neve."),
      f("Como identificar golpes financeiros no Telegram?", "Fuja de qualquer promessa de ‘dobrar dinheiro em 24h’, robôs milagrosos, sinais pagos sem CVM e mentorias com preço muito abaixo do mercado."),
    ],
  },
  frases: {
    label: "Frases",
    faqs: [
      f("Onde encontrar frases motivacionais e reflexões no Telegram?", "Nossos canais publicam diariamente frases de bom dia, reflexões, textos religiosos, poesias e mensagens para status."),
      f("Tem canal do Telegram com frases de amor e indiretas?", "Sim, com frases prontas para namoro, término, indiretas para ex e mensagens românticas."),
      f("Existem canais com frases em imagens prontas para compartilhar?", "Sim, com artes gratuitas em português para postar no Instagram, Status do WhatsApp e Facebook."),
      f("Posso usar frases dos canais comercialmente?", "Depende do canal. Prefira frases de autores em domínio público ou peça autorização ao criador original."),
      f("Tem canais de frases religiosas (bíblicas, orações)?", "Sim, com versículos diários, orações da noite, salmos e reflexões espirituais."),
    ],
  },
  games: {
    label: "Games",
    faqs: [
      f("Onde encontrar grupos do Telegram sobre games em 2026?", "Nossa categoria reúne grupos ativos de Free Fire, Fortnite, LoL, Valorant, CS2, PUBG, Roblox, Minecraft, GTA, FIFA e RPG."),
      f("Tem grupo do Telegram para procurar dupla ou squad?", "Sim, com jogadores buscando dupla de Free Fire, tríade de Valorant, party de LoL e clãs de MMO."),
      f("Grupos do Telegram publicam códigos de resgate e recompensas grátis?", "Sim, com códigos diários de Free Fire, Genshin Impact, Honkai, Wild Rift e muitos outros."),
      f("Existem grupos sobre jogos de PC, PlayStation e Xbox?", "Sim, cada plataforma tem grupos: Steam, PS5, PS4, Xbox Series, Nintendo Switch e jogos retrô."),
      f("Como saber se um download de jogo no Telegram é seguro?", "Nossa política proíbe pirataria. Sempre baixe games apenas em lojas oficiais (Steam, Epic, PSN, Xbox Store, Google Play, App Store)."),
    ],
  },
  humor: {
    label: "Humor",
    faqs: [
      f("Onde achar grupos do Telegram de humor e piadas em 2026?", "Nesta categoria estão grupos e canais com memes, piadas atualizadas, humor negro moderado, stand-up e vídeos engraçados."),
      f("Tem canal do Telegram com memes diários?", "Sim, com posts a cada hora, memes em alta, virais do TikTok e humor brasileiro clássico."),
      f("Grupos de humor no Telegram permitem qualquer tipo de piada?", "Não. Grupos sérios moderam conteúdo racista, homofóbico, gordofóbico ou que promova violência."),
      f("Existem grupos de humor por região (nordestino, mineiro, gaúcho)?", "Sim, com piadas típicas de cada estado e sotaques regionais."),
      f("Posso enviar meus próprios memes nos grupos?", "Sim, a maioria incentiva. Só evite repostar memes muito antigos ou repetir conteúdo já enviado."),
    ],
  },
  imobiliaria: {
    label: "Imobiliária",
    faqs: [
      f("Grupos do Telegram sobre imóveis funcionam para alugar ou comprar?", "Sim, com anúncios diretos de proprietários, corretores e imobiliárias, cobrindo aluguel, venda, temporada e leilão."),
      f("Tem grupo do Telegram para imóveis baratos e leilão?", "Sim, com editais da Caixa, Banco do Brasil, Santander e leilões judiciais atualizados."),
      f("Existem grupos por cidade (SP, RJ, BH, POA, CWB, REC)?", "Sim, com anúncios segmentados por bairro, tipo (casa, apto, kitnet) e faixa de preço."),
      f("Grupos imobiliários do Telegram cobram para participar?", "Não devem. Fuja de qualquer grupo que peça pagamento antecipado para acessar ‘lista VIP’ de imóveis."),
      f("Sou corretor, posso anunciar meus imóveis nos grupos?", "Sim, respeitando o formato de anúncio pedido pelo admin (fotos, endereço, valor e CRECI)."),
    ],
  },
  investimentos: {
    label: "Investimentos",
    faqs: [
      f("Grupos do Telegram sobre investimentos e bolsa são confiáveis?", "Priorize grupos com analistas certificados CVM. Fuja de ‘sinais garantidos’, bots milagrosos e promessas de lucro fixo."),
      f("Existem grupos do Telegram sobre ações, FIIs, ETFs e BDRs?", "Sim, com análise fundamentalista, gráfica, calendário de dividendos e comparativos entre corretoras."),
      f("Tem grupo do Telegram sobre criptomoedas (Bitcoin, Ethereum, altcoins)?", "Sim, com foco em análise técnica, DeFi, staking, NFTs e novidades de Layer 2."),
      f("Grupos de investimentos internacionais existem no Telegram?", "Sim, com stocks americanos (S&P 500, Nasdaq), REITs, ETFs globais e estratégias de proteção cambial."),
      f("Como identificar pirâmide financeira disfarçada de investimento?", "Rentabilidade fixa acima da média, indicação obrigatória, marketing multinível e ausência de registro na CVM são sinais claros."),
    ],
  },
  lgbtqia: {
    label: "LGBTQIA+",
    faqs: [
      f("Grupos do Telegram LGBTQIA+ são seguros e moderados?", "Nossa moderação prioriza grupos com regras claras contra discriminação, assédio e exposição indevida."),
      f("Existem grupos LGBTQIA+ por cidade e estado?", "Sim, com grupos ativos em SP, RJ, BH, POA, CWB, SSA, REC e outras capitais, além de grupos nacionais."),
      f("Tem grupo do Telegram para amizade LGBTQIA+ sem conteúdo adulto?", "Sim, muitos grupos são focados exclusivamente em amizade, cultura e apoio, com regras rígidas contra conteúdo sexual."),
      f("Grupos do Telegram LGBTQIA+ organizam eventos e Paradas?", "Sim, muitos divulgam agenda de Paradas, festas, encontros culturais e ações de apoio jurídico."),
      f("Existem grupos específicos para trans, não-binários e assexuais?", "Sim, cada letra da sigla tem grupos dedicados com foco em acolhimento e informação."),
    ],
  },
  liberais: {
    label: "Liberais",
    faqs: [
      f("Grupos do Telegram +18 têm verificação de idade?", "Todos os grupos +18 listados exigem confirmação de maioridade. É proibido qualquer conteúdo envolvendo menores — denuncie imediatamente."),
      f("Como participar de grupos liberais no Telegram com segurança?", "Nunca envie documentos, dados bancários ou fotos íntimas sem autorização. Configure privacidade máxima no seu perfil do Telegram."),
      f("Existem grupos liberais por região no Telegram?", "Sim, com grupos regionais para encontros consensuais entre adultos. Sempre priorize locais públicos e segurança pessoal."),
      f("Posso denunciar grupos com conteúdo ilegal?", "Sim. Use o botão ‘Denunciar’ diretamente no Telegram e também no nosso site. Conteúdo com menores é crime e será removido imediatamente."),
      f("Grupos liberais cobram para entrar?", "Todos os grupos listados aqui são gratuitos. Cobrança para acesso ou ‘conteúdo VIP’ costuma ser golpe."),
    ],
  },
  livros: {
    label: "Livros",
    faqs: [
      f("Grupos do Telegram sobre livros e leitura existem?", "Sim, com clubes de leitura, indicações, resenhas, lançamentos literários e discussões por gênero."),
      f("Tem canal do Telegram com PDFs de livros gratuitos legais?", "Sim, com obras em domínio público, livros liberados por autores e clássicos brasileiros e mundiais."),
      f("Existem grupos por gênero literário (fantasia, romance, autoajuda)?", "Sim, com clubes específicos de fantasia, ficção científica, romance, terror, biografias e autoajuda."),
      f("Grupos do Telegram indicam livros por streaming (Kindle Unlimited, Skoob)?", "Sim, com destaques mensais do Kindle Unlimited, Amazon Prime Reading, Skeelo e Skoob."),
      f("Como participar de clubes de leitura online via Telegram?", "Basta entrar no grupo, comprar ou baixar o livro do mês e participar das discussões semanais fixadas."),
    ],
  },
  memes: {
    label: "Memes",
    faqs: [
      f("Onde achar os melhores canais de memes do Telegram em 2026?", "Nossa categoria reúne canais e grupos com memes atualizados diariamente: memes brasileiros, virais, TikTok, Twitter/X e memes internacionais."),
      f("Tem canal do Telegram com memes por nicho (games, futebol, política)?", "Sim, com canais dedicados a memes de FIFA, LoL, Free Fire, futebol, política brasileira, séries e cotidiano."),
      f("Posso baixar figurinhas dos memes mais populares?", "Sim. Muitos canais publicam packs de figurinhas com memes clássicos e virais recentes."),
      f("Existem canais de memes que respeitam limites (sem racismo, homofobia)?", "Sim, priorize canais moderados. Nossa curadoria remove canais com conteúdo discriminatório."),
      f("Como enviar meu meme para ser publicado nos canais?", "Muitos canais têm bot de envio (@nomedocanalbot) para submissão anônima de memes."),
    ],
  },
  musicas: {
    label: "Músicas",
    faqs: [
      f("Grupos do Telegram sobre música existem por gênero?", "Sim, com grupos ativos de sertanejo, funk, pagode, rock, MPB, K-pop, rap, eletrônica e música gospel."),
      f("Tem grupo do Telegram para descobrir artistas independentes?", "Sim, com espaço para músicos autorais divulgarem lançamentos, EPs e álbuns no Spotify, Deezer e YouTube."),
      f("Existem grupos do Telegram sobre produção musical (beats, DJ, mixagem)?", "Sim, com tutoriais de FL Studio, Ableton, Logic Pro, sample packs gratuitos e tips de DJ."),
      f("Grupos do Telegram compartilham playlists do Spotify?", "Sim, com playlists colaborativas por gênero, humor, década e novidades semanais."),
      f("Posso divulgar minha música nos grupos?", "Sim, respeitando o dia de divulgação e o formato pedido (link Spotify, YouTube, capa e sinopse)."),
    ],
  },
  namoros: {
    label: "Namoros",
    faqs: [
      f("Grupos do Telegram para namoro sério funcionam em 2026?", "Sim, com grupos focados em relacionamento sério, casamento e conexões duradouras, com moderação contra perfis falsos."),
      f("Existem grupos de namoro por faixa etária e cidade?", "Sim, com grupos para jovens 18-25, adultos 30+, 40+, melhor idade e segmentação por estado e capital."),
      f("Como se proteger de golpes em grupos de namoro do Telegram?", "Desconfie de perfis muito bonitos que pedem dinheiro rápido, fotos íntimas ou dados bancários. Nunca envie Pix a desconhecidos."),
      f("Tem grupo do Telegram para namoro LGBTQIA+?", "Sim, com grupos dedicados a gays, lésbicas, bi e pan buscando relacionamento sério."),
      f("Grupos de namoro do Telegram substituem apps de relacionamento?", "Complementam. Muitos preferem o Telegram por ser gratuito, sem paywall e com conversa mais fluida em grupo."),
    ],
  },
  negocios: {
    label: "Negócios",
    faqs: [
      f("Grupos do Telegram sobre negócios e empreendedorismo existem?", "Sim, com foco em MEI, pequeno negócio, startups, franquias, negócios digitais e networking B2B."),
      f("Tem grupo do Telegram sobre marketing digital e vendas?", "Sim, com estratégias de tráfego pago (Meta Ads, Google Ads, TikTok Ads), SEO, copywriting e funis de venda."),
      f("Existem grupos do Telegram para donos de e-commerce e dropshipping?", "Sim, com fornecedores, plataformas (Shopify, Nuvemshop, Loja Integrada) e cases de sucesso."),
      f("Grupos de negócios do Telegram ajudam com fornecedores atacadistas?", "Sim, com listas de fornecedores nacionais (25 de Março, Feirinha da Madrugada, Brás) e importadores da China."),
      f("Como identificar mentorias falsas nos grupos de negócios?", "Fuja de promessas de faturamento garantido, provas sociais editadas e cursos com preço muito baixo que depois viram upsell agressivo."),
    ],
  },
  noticias: {
    label: "Notícias",
    faqs: [
      f("Onde acompanhar notícias em tempo real pelo Telegram?", "Nossos canais publicam notícias de última hora sobre política, economia, esportes, tecnologia, entretenimento e mundo."),
      f("Canais de notícia do Telegram são confiáveis?", "Prefira canais de veículos consolidados (G1, UOL, Folha, Estadão, BBC). Cheque sempre a fonte antes de compartilhar."),
      f("Tem canal do Telegram de notícias por cidade e estado?", "Sim, com canais regionais para SP, RJ, MG, RS, PR, BA, PE, CE e outras cidades brasileiras."),
      f("Como identificar fake news em canais do Telegram?", "Desconfie de manchetes muito sensacionalistas, ausência de fonte, imagens fora de contexto e datas antigas recicladas."),
      f("Existem canais de notícias internacionais em português?", "Sim, com resumos diários de EUA, Europa, Ásia e Oriente Médio traduzidos para o português."),
    ],
  },
  oportunidades: {
    label: "Oportunidades",
    faqs: [
      f("Onde encontrar grupos do Telegram sobre oportunidades em 2026?", "Nossa categoria reúne canais com bolsas de estudo, editais, freelas, vagas, cursos gratuitos e sorteios legítimos."),
      f("Tem canal do Telegram sobre bolsas de estudo no Brasil e exterior?", "Sim, com bolsas ProUni, FIES, Santander, DAAD, Chevening, Erasmus, Fulbright e outras oportunidades acadêmicas."),
      f("Existem grupos com oportunidades de freela e trabalho remoto?", "Sim, com projetos de Workana, 99Freelas, Upwork, Fiverr e vagas remotas internacionais."),
      f("Grupos de oportunidades do Telegram são gratuitos?", "Sim. Desconfie de canais que cobram para ‘liberar acesso VIP’ — oportunidade real é sempre pública."),
      f("Como diferenciar oportunidade real de golpe no Telegram?", "Verifique se há fonte oficial, se o link leva a domínio confiável e se não pedem pagamento antecipado."),
    ],
  },
  pets: {
    label: "Pets",
    faqs: [
      f("Grupos do Telegram sobre pets e animais existem?", "Sim, com foco em cachorros, gatos, aves, roedores, aquarismo, adoção responsável e cuidados veterinários."),
      f("Tem grupo do Telegram para adoção de cães e gatos?", "Sim, com ONGs, protetoras independentes e adoções por cidade em todo o Brasil."),
      f("Existem grupos por raça (Shih Tzu, Golden, Maine Coon)?", "Sim, cada raça popular tem seu grupo dedicado com dicas de criação, saúde e comportamento."),
      f("Grupos do Telegram indicam veterinários e petshops de confiança?", "Sim, com recomendações regionais, promoções de ração, banho, tosa e planos de saúde pet."),
      f("Posso denunciar maus-tratos em grupos de pets?", "Sim. Além de denunciar no grupo, acione a Polícia Ambiental — a Lei 14.064/2020 pune maus-tratos com prisão."),
    ],
  },
  profissoes: {
    label: "Profissões",
    faqs: [
      f("Grupos do Telegram por profissão ajudam no networking?", "Sim, com grupos de médicos, enfermeiros, advogados, engenheiros, arquitetos, contadores, professores e áreas administrativas."),
      f("Tem grupo do Telegram para autônomos e freelancers?", "Sim, com foco em designers, redatores, devs, tradutores, fotógrafos, videomakers e consultores."),
      f("Existem grupos por profissão para trocar experiências e materiais?", "Sim, com compartilhamento de protocolos, templates, planilhas e boas práticas."),
      f("Grupos de profissões cobram anuidade ou taxa?", "Todos os grupos aqui listados são gratuitos. Associações profissionais oficiais têm canais próprios de comunicação."),
      f("Como validar se o grupo é da minha profissão de verdade?", "Verifique regras fixadas, exigência de comprovação (CRM, OAB, CREA) e perfil dos administradores."),
    ],
  },
  promocoes: {
    label: "Promoções",
    faqs: [
      f("Onde encontrar promoções e ofertas relâmpago no Telegram?", "Nossos canais publicam ofertas diárias de Amazon, Mercado Livre, Magalu, Shopee, AliExpress, SHEIN, Casas Bahia e outras lojas."),
      f("Canais de promoção do Telegram funcionam com cashback?", "Sim, muitos combinam ofertas com Méliuz, Ame, Picpay e cupons exclusivos para maximizar economia."),
      f("Tem canal do Telegram com promoções de supermercado e delivery?", "Sim, com ofertas de iFood, Rappi, 99Food, Zé Delivery, Cornershop e cupons de supermercados online."),
      f("Como saber se a promoção do Telegram é real ou golpe?", "Sempre confira o preço direto no site oficial. Fuja de links encurtados sem contexto e domínios estranhos."),
      f("Existem canais de promoção por nicho (tech, moda, casa)?", "Sim, com foco em eletrônicos, informática, moda feminina, moda masculina, casa e decoração, brinquedos e mais."),
    ],
  },
  receitas: {
    label: "Receitas",
    faqs: [
      f("Grupos do Telegram sobre receitas e culinária existem?", "Sim, com receitas fáceis, gourmet, fit, low carb, doces, salgados, marmitas, veganas e vegetarianas."),
      f("Tem grupo do Telegram para confeitaria e vendas de doces?", "Sim, com receitas de bolos, tortas, brigadeiro gourmet, doces finos e dicas de precificação e delivery."),
      f("Existem grupos do Telegram sobre alimentação fitness e emagrecimento?", "Sim, com receitas hiperproteicas, marmita fit, receitas com whey, doces low carb e cardápios semanais."),
      f("Grupos do Telegram indicam onde comprar ingredientes especiais?", "Sim, com lista de emporios, feiras livres, importados asiáticos, veganos e sem glúten."),
      f("Como vender minhas receitas ou e-book pelo Telegram?", "Muitos grupos permitem em dia específico. Use um mini funil: canal de amostra grátis + venda pelo Hotmart, Kiwify ou PagSeguro."),
    ],
  },
  redes: {
    label: "Redes Sociais",
    faqs: [
      f("Grupos do Telegram sobre redes sociais (Instagram, TikTok, YouTube) existem?", "Sim, com estratégias de crescimento orgânico, tráfego pago, criação de conteúdo e monetização."),
      f("Tem grupo do Telegram para engajamento e trocas (follow, like)?", "Sim, mas cuidado: engajamento artificial viola termos de uso do Instagram/TikTok e pode banir sua conta."),
      f("Existem grupos do Telegram para criadores de conteúdo iniciantes?", "Sim, com dicas de roteiro, edição no CapCut/Premiere, iluminação básica e primeiros mil seguidores."),
      f("Grupos do Telegram ensinam monetização no YouTube e TikTok?", "Sim, com regras do AdSense, TikTok Creator Fund, Programa de Bônus do Kwai e parcerias com marcas."),
      f("Posso divulgar meu perfil social nos grupos de redes sociais?", "Sim, respeitando o dia e formato de divulgação. Evite spam para não ser banido."),
    ],
  },
  religiao: {
    label: "Religião",
    faqs: [
      f("Grupos do Telegram religiosos existem por denominação?", "Sim, com grupos católicos, evangélicos, espíritas, umbandistas, budistas, judaicos, islâmicos e de estudos interreligiosos."),
      f("Tem canal do Telegram com versículos, orações e pregações diárias?", "Sim, com envio diário de versículos bíblicos, orações, pregações em áudio e devocionais."),
      f("Existem grupos do Telegram para estudo bíblico e teológico?", "Sim, com material de exegese, hermenêutica, apologética e cursos de teologia gratuitos."),
      f("Grupos religiosos do Telegram organizam eventos e retiros?", "Sim, com agenda de cultos online, retiros presenciais, congressos e encontros de jovens."),
      f("Como identificar seitas ou grupos manipuladores no Telegram?", "Fuja de líderes que exigem dinheiro, isolamento familiar, obediência cega ou promessas de milagres em troca de contribuição."),
    ],
  },
  tecnologia: {
    label: "Tecnologia",
    faqs: [
      f("Grupos do Telegram sobre tecnologia e programação em 2026?", "Sim, com foco em IA, machine learning, front-end, back-end, mobile, DevOps, cloud, ciber segurança e blockchain."),
      f("Tem grupo do Telegram sobre inteligência artificial (ChatGPT, Gemini, Claude)?", "Sim, com prompts, casos de uso, comparativos entre modelos e novidades semanais de IA generativa."),
      f("Existem grupos por linguagem (Python, JavaScript, TypeScript, Go, Rust)?", "Sim, cada linguagem tem grupos ativos com discussão de bibliotecas, frameworks, dúvidas e vagas."),
      f("Grupos do Telegram sobre tecnologia indicam cursos gratuitos?", "Sim, com Alura, Rocketseat, Udemy grátis, YouTube EDU, cursos oficiais AWS e Google Cloud Skills Boost."),
      f("Tem grupo do Telegram sobre hardware, gadgets e smartphones?", "Sim, com reviews de iPhone, Galaxy, Xiaomi, gaming setups, PC gamer, Steam Deck, ROG Ally e VR."),
    ],
  },
  vendas: {
    label: "Vendas",
    faqs: [
      f("Grupos do Telegram de compra e venda funcionam em 2026?", "Sim, com anúncios de novos, seminovos, importados, colecionismo e trocas em geral, por região e nicho."),
      f("Tem grupo do Telegram para venda de eletrônicos usados?", "Sim, com celulares, notebooks, consoles, câmeras e áudio de qualidade. Sempre valide IMEI e nota fiscal."),
      f("Como negociar com segurança nos grupos de venda?", "Prefira encontros presenciais em locais públicos, use Mercado Pago com garantia ou Pix apenas após checar reputação do vendedor."),
      f("Existem grupos de venda por nicho (moda, decoração, ferramentas)?", "Sim, com foco em brechó, decoração usada, ferramentas de construção, itens de bebê e produtos artesanais."),
      f("Grupos de venda do Telegram cobram comissão?", "Não devem. Todos os grupos aqui listados são gratuitos para anunciar, respeitando regras de formato."),
    ],
  },
  viagens: {
    label: "Viagens",
    faqs: [
      f("Grupos do Telegram sobre viagens ajudam a economizar?", "Sim, com promoções relâmpago de passagens (Latam, Gol, Azul, Voepass), erros de tarifa e hotéis com descontos exclusivos."),
      f("Tem grupo do Telegram de milhas e pontos de programa fidelidade?", "Sim, com dicas de Smiles, Latam Pass, TudoAzul, Livelo, Esfera, Amex Membership Rewards e transferência bonificada."),
      f("Existem grupos do Telegram para mochileiros e viagem barata?", "Sim, com dicas de hostel, couchsurfing, carona solidária, roteiros econômicos e visto para brasileiros."),
      f("Grupos do Telegram indicam roteiros internacionais (Europa, EUA, Ásia)?", "Sim, com roteiros de Portugal, Espanha, França, Itália, Grécia, EUA, Japão, Coreia do Sul, Tailândia e mais."),
      f("Tem grupo do Telegram de intercâmbio e trabalho no exterior?", "Sim, com informação sobre visto de trabalho, estudo, working holiday no Canadá, Irlanda, Austrália e Nova Zelândia."),
    ],
  },
  videos: {
    label: "Vídeos",
    faqs: [
      f("Onde encontrar canais do Telegram com vídeos virais em 2026?", "Nossa categoria reúne canais com vídeos engraçados, curiosidades, life hacks, tutoriais, cortes de podcast e virais do TikTok/YouTube."),
      f("Canais de vídeo do Telegram publicam conteúdo original?", "Sim, muitos criadores compartilham conteúdo antes de subir para YouTube ou Instagram, gerando comunidade fiel."),
      f("Tem canal do Telegram com cortes de podcasts famosos?", "Sim, com melhores momentos do Flow, PodPah, Inteligência Ltda, Podcats, Ticaracaticast e outros."),
      f("Existem canais com tutoriais em vídeo (DIY, culinária, tecnologia)?", "Sim, cada nicho tem canais ativos com vídeos curtos objetivos e diretos ao ponto."),
      f("Como enviar meu vídeo para os canais publicarem?", "Muitos aceitam submissões via bot ou e-mail. Verifique a descrição do canal para instruções de envio."),
    ],
  },
  zoeira: {
    label: "Zoeira",
    faqs: [
      f("Grupos do Telegram de zoeira e memes existem em 2026?", "Sim, com bagunça saudável, memes, tretas engraçadas, pegadinhas e humor bem-humorado sem violar limites."),
      f("Grupos de zoeira do Telegram têm regras?", "Sim. Mesmo em grupos descontraídos, é proibido racismo, homofobia, gordofobia, exposição de menores e ameaças."),
      f("Tem grupo de zoeira por time de futebol ou fandom?", "Sim, com muita rivalidade saudável entre torcidas e fandoms de séries, animes e games."),
      f("Grupos de zoeira permitem qualquer tipo de conteúdo?", "Não. Grupos sérios moderam conteúdo ilegal, adulto (a menos que seja categoria específica +18) e conteúdo que promova violência."),
      f("Posso divulgar meu grupo de zoeira aqui?", "Sim, cadastre gratuitamente. A moderação avalia se está de acordo com as diretrizes da plataforma."),
    ],
  },
};
