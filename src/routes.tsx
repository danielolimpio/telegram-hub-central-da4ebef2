import type { RouteRecord } from 'vite-react-ssg';
import { lazyWithRetry as lazy } from '@/lib/lazyWithRetry';
import App from './App';
import { getGroupStaticPaths, groupDetailsLoader } from './pages/GroupDetails';

// Lazy load all pages for better code splitting
const Index = lazy(() => import('./pages/Index'));
const AllGroups = lazy(() => import('./pages/AllGroups'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ComoFunciona = lazy(() => import('./pages/ComoFunciona'));
const RegrasComunidade = lazy(() => import('./pages/RegrasComunitariade'));
const DicasSeguranca = lazy(() => import('./pages/DicasSeguranca'));
const CentralAjuda = lazy(() => import('./pages/CentralAjuda'));
const ReportarProblema = lazy(() => import('./pages/ReportarProblema'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const PoliticaPrivacidade = lazy(() => import('./pages/PoliticaPrivacidade'));
const TermosUso = lazy(() => import('./pages/TermosUso'));
const PoliticaCookies = lazy(() => import('./pages/PoliticaCookies'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Category pages
const GruposDivulgacao = lazy(() => import('./pages/categories/GruposDivulgacao'));
const GruposVendas = lazy(() => import('./pages/categories/GruposVendas'));
const GruposPromocoes = lazy(() => import('./pages/categories/GruposPromocoes'));
const GruposOportunidades = lazy(() => import('./pages/categories/GruposOportunidades'));
const GruposInvestimentos = lazy(() => import('./pages/categories/GruposInvestimentos'));
const GruposRedesSociais = lazy(() => import('./pages/categories/GruposRedesSociais'));
const GruposLivros = lazy(() => import('./pages/categories/GruposLivros'));
const GruposEstudos = lazy(() => import('./pages/categories/GruposEstudos'));
const GruposCursos = lazy(() => import('./pages/categories/GruposCursos'));
const GruposVideos = lazy(() => import('./pages/categories/GruposVideos'));
const GruposMusicas = lazy(() => import('./pages/categories/GruposMusicas'));
const GruposAmizades = lazy(() => import('./pages/categories/GruposAmizades'));
const GruposNamoros = lazy(() => import('./pages/categories/GruposNamoros'));
const GruposEncontros = lazy(() => import('./pages/categories/GruposEncontros'));
const GruposLiberais = lazy(() => import('./pages/categories/GruposLiberais'));
const GruposNoticias = lazy(() => import('./pages/categories/GruposNoticias'));
const GruposEsportes = lazy(() => import('./pages/categories/GruposEsportes'));
const GruposFigurinhas = lazy(() => import('./pages/categories/GruposFigurinhas'));
const GruposReceitas = lazy(() => import('./pages/categories/GruposReceitas'));
const GruposViagens = lazy(() => import('./pages/categories/GruposViagens'));
const GruposTecnologia = lazy(() => import('./pages/categories/GruposTecnologia'));
const GruposGames = lazy(() => import('./pages/categories/GruposGames'));
const GruposCinema = lazy(() => import('./pages/categories/GruposCinema'));
const GruposPets = lazy(() => import('./pages/categories/GruposPets'));
const GruposEstilo = lazy(() => import('./pages/categories/GruposEstilo'));
const GruposZoeira = lazy(() => import('./pages/categories/GruposZoeira'));
const GruposLGBTQIA = lazy(() => import('./pages/categories/GruposLGBTQIA'));
const GruposCarros = lazy(() => import('./pages/categories/GruposCarros'));
const GruposCidades = lazy(() => import('./pages/categories/GruposCidades'));
const GruposConcursos = lazy(() => import('./pages/categories/GruposConcursos'));
const GruposEmpregos = lazy(() => import('./pages/categories/GruposEmpregos'));
const GruposEventos = lazy(() => import('./pages/categories/GruposEventos'));
const GruposFas = lazy(() => import('./pages/categories/GruposFas'));
const GruposFinancas = lazy(() => import('./pages/categories/GruposFinancas'));
const GruposFrases = lazy(() => import('./pages/categories/GruposFrases'));
const GruposHumor = lazy(() => import('./pages/categories/GruposHumor'));
const GruposImobiliaria = lazy(() => import('./pages/categories/GruposImobiliaria'));
const GruposMemes = lazy(() => import('./pages/categories/GruposMemes'));
const GruposNegocios = lazy(() => import('./pages/categories/GruposNegocios'));
const GruposProfissoes = lazy(() => import('./pages/categories/GruposProfissoes'));
const GruposReligiao = lazy(() => import('./pages/categories/GruposReligiao'));

// Auth and dashboard pages (not pre-rendered)
const Auth = lazy(() => import('./pages/Auth'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const UserManagement = lazy(() => import('./pages/UserManagement'));
const GroupDetails = lazy(() => import('./pages/GroupDetails'));
const GroupStats = lazy(() => import('./pages/GroupStats'));

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: 'todos-grupos', element: <AllGroups /> },
      { path: 'all-groups', element: <AllGroups /> },
      { path: 'como-funciona', element: <ComoFunciona /> },
      { path: 'regras', element: <RegrasComunidade /> },
      { path: 'seguranca', element: <DicasSeguranca /> },
      { path: 'ajuda', element: <CentralAjuda /> },
      { path: 'reportar', element: <ReportarProblema /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/ferramentas', element: <Blog /> },
      { path: 'blog/negocios', element: <Blog /> },
      { path: 'blog/comunidade', element: <Blog /> },
      { path: 'blog/grupos', element: <Blog /> },
      { path: 'blog/privacidade', element: <Blog /> },
      { path: 'privacidade', element: <PoliticaPrivacidade /> },
      { path: 'termos', element: <TermosUso /> },
      { path: 'cookies', element: <PoliticaCookies /> },
      { path: 'sitemap', element: <Sitemap /> },
      
      // Category pages - all pre-rendered
      { path: 'grupos-telegram-divulgacao', element: <GruposDivulgacao /> },
      { path: 'grupos-telegram-vendas', element: <GruposVendas /> },
      { path: 'grupos-telegram-promocoes', element: <GruposPromocoes /> },
      { path: 'grupos-telegram-oportunidades', element: <GruposOportunidades /> },
      { path: 'grupos-telegram-investimentos', element: <GruposInvestimentos /> },
      { path: 'grupos-telegram-redes-sociais', element: <GruposRedesSociais /> },
      { path: 'grupos-telegram-livros', element: <GruposLivros /> },
      { path: 'grupos-telegram-estudos', element: <GruposEstudos /> },
      { path: 'grupos-telegram-cursos', element: <GruposCursos /> },
      { path: 'grupos-telegram-videos', element: <GruposVideos /> },
      { path: 'grupos-telegram-musicas', element: <GruposMusicas /> },
      { path: 'grupos-telegram-amizades', element: <GruposAmizades /> },
      { path: 'grupos-telegram-namoros', element: <GruposNamoros /> },
      { path: 'grupos-telegram-encontros', element: <GruposEncontros /> },
      { path: 'grupos-telegram-liberais', element: <GruposLiberais /> },
      { path: 'grupos-telegram-noticias', element: <GruposNoticias /> },
      { path: 'grupos-telegram-esportes', element: <GruposEsportes /> },
      { path: 'grupos-telegram-figurinhas', element: <GruposFigurinhas /> },
      { path: 'grupos-telegram-receitas', element: <GruposReceitas /> },
      { path: 'grupos-telegram-viagens', element: <GruposViagens /> },
      { path: 'grupos-telegram-tecnologia', element: <GruposTecnologia /> },
      { path: 'grupos-telegram-games', element: <GruposGames /> },
      { path: 'grupos-telegram-cinema', element: <GruposCinema /> },
      { path: 'grupos-telegram-pets', element: <GruposPets /> },
      { path: 'grupos-telegram-estilo', element: <GruposEstilo /> },
      { path: 'grupos-telegram-zoeira', element: <GruposZoeira /> },
      { path: 'grupos-telegram-lgbtqia', element: <GruposLGBTQIA /> },
      { path: 'grupos-telegram-carros', element: <GruposCarros /> },
      { path: 'grupos-telegram-cidades', element: <GruposCidades /> },
      { path: 'grupos-telegram-concursos', element: <GruposConcursos /> },
      { path: 'grupos-telegram-empregos', element: <GruposEmpregos /> },
      { path: 'grupos-telegram-eventos', element: <GruposEventos /> },
      { path: 'grupos-telegram-fas', element: <GruposFas /> },
      { path: 'grupos-telegram-financas', element: <GruposFinancas /> },
      { path: 'grupos-telegram-frases', element: <GruposFrases /> },
      { path: 'grupos-telegram-humor', element: <GruposHumor /> },
      { path: 'grupos-telegram-imobiliaria', element: <GruposImobiliaria /> },
      { path: 'grupos-telegram-memes', element: <GruposMemes /> },
      { path: 'grupos-telegram-negocios', element: <GruposNegocios /> },
      { path: 'grupos-telegram-profissoes', element: <GruposProfissoes /> },
      { path: 'grupos-telegram-religiao', element: <GruposReligiao /> },
      
      // Dynamic pages - excluded from SSG
      { path: 'auth', element: <Auth /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'admin', element: <AdminDashboard /> },
      { path: 'admin/users', element: <UserManagement /> },
      { path: 'grupo/:slug', element: <GroupDetails />, loader: groupDetailsLoader, getStaticPaths: getGroupStaticPaths },
      { path: 'grupo/:slug/stats', element: <GroupStats /> },
      
      // Catch-all
      { path: '*', element: <NotFound /> },
    ],
  },
];
