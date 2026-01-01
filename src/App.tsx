import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AllGroups from "./pages/AllGroups";
import NotFound from "./pages/NotFound";
import ComoFunciona from "./pages/ComoFunciona";
import RegrasComunidade from "./pages/RegrasComunitariade";
import DicasSeguranca from "./pages/DicasSeguranca";

import CentralAjuda from "./pages/CentralAjuda";
import ReportarProblema from "./pages/ReportarProblema";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import PoliticaCookies from "./pages/PoliticaCookies";
import Sitemap from "./pages/Sitemap";
import GruposDivulgacao from "./pages/categories/GruposDivulgacao";
import GruposVendas from "./pages/categories/GruposVendas";
import GruposPromocoes from "./pages/categories/GruposPromocoes";
import GruposOportunidades from "./pages/categories/GruposOportunidades";

import GruposInvestimentos from "./pages/categories/GruposInvestimentos";
import GruposRedesSociais from "./pages/categories/GruposRedesSociais";
import GruposLivros from "./pages/categories/GruposLivros";
import GruposEstudos from "./pages/categories/GruposEstudos";
import GruposCursos from "./pages/categories/GruposCursos";
import GruposVideos from "./pages/categories/GruposVideos";
import GruposMusicas from "./pages/categories/GruposMusicas";
import GruposAmizades from "./pages/categories/GruposAmizades";
import GruposNamoros from "./pages/categories/GruposNamoros";
import GruposEncontros from "./pages/categories/GruposEncontros";
import GruposLiberais from "./pages/categories/GruposLiberais";
import GruposNoticias from "./pages/categories/GruposNoticias";
import GruposEsportes from "./pages/categories/GruposEsportes";
import GruposFigurinhas from "./pages/categories/GruposFigurinhas";
import GruposReceitas from "./pages/categories/GruposReceitas";
import GruposViagens from "./pages/categories/GruposViagens";
import GruposTecnologia from "./pages/categories/GruposTecnologia";
import GruposGames from "./pages/categories/GruposGames";
import GruposCinema from "./pages/categories/GruposCinema";
import GruposPets from "./pages/categories/GruposPets";
import GruposEstilo from "./pages/categories/GruposEstilo";
import GruposZoeira from "./pages/categories/GruposZoeira";
import GruposLGBTQIA from "./pages/categories/GruposLGBTQIA";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/UserManagement";
import GroupDetails from "./pages/GroupDetails";
import GroupStats from "./pages/GroupStats";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/all-groups" element={<AllGroups />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/regras" element={<RegrasComunidade />} />
          <Route path="/seguranca" element={<DicasSeguranca />} />
          
          <Route path="/ajuda" element={<CentralAjuda />} />
          <Route path="/reportar" element={<ReportarProblema />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:categoria" element={<Blog />} />
          <Route path="/privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos" element={<TermosUso />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/grupos-telegram-divulgacao" element={<GruposDivulgacao />} />
          <Route path="/grupos-telegram-vendas" element={<GruposVendas />} />
          <Route path="/grupos-telegram-promocoes" element={<GruposPromocoes />} />
          <Route path="/grupos-telegram-oportunidades" element={<GruposOportunidades />} />
          <Route path="/grupos-telegram-investimentos" element={<GruposInvestimentos />} />
          <Route path="/grupos-telegram-redes-sociais" element={<GruposRedesSociais />} />
          <Route path="/grupos-telegram-livros" element={<GruposLivros />} />
          <Route path="/grupos-telegram-estudos" element={<GruposEstudos />} />
          <Route path="/grupos-telegram-cursos" element={<GruposCursos />} />
          <Route path="/grupos-telegram-videos" element={<GruposVideos />} />
          <Route path="/grupos-telegram-musicas" element={<GruposMusicas />} />
          <Route path="/grupos-telegram-amizades" element={<GruposAmizades />} />
          <Route path="/grupos-telegram-namoros" element={<GruposNamoros />} />
          <Route path="/grupos-telegram-encontros" element={<GruposEncontros />} />
          <Route path="/grupos-telegram-liberais" element={<GruposLiberais />} />
          <Route path="/grupos-telegram-noticias" element={<GruposNoticias />} />
          <Route path="/grupos-telegram-esportes" element={<GruposEsportes />} />
          <Route path="/grupos-telegram-figurinhas" element={<GruposFigurinhas />} />
          <Route path="/grupos-telegram-receitas" element={<GruposReceitas />} />
          <Route path="/grupos-telegram-viagens" element={<GruposViagens />} />
          <Route path="/grupos-telegram-tecnologia" element={<GruposTecnologia />} />
          <Route path="/grupos-telegram-games" element={<GruposGames />} />
          <Route path="/grupos-telegram-cinema" element={<GruposCinema />} />
          <Route path="/grupos-telegram-pets" element={<GruposPets />} />
          <Route path="/grupos-telegram-estilo" element={<GruposEstilo />} />
          <Route path="/grupos-telegram-zoeira" element={<GruposZoeira />} />
          <Route path="/grupos-telegram-lgbtqia" element={<GruposLGBTQIA />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/grupo/:slug" element={<GroupDetails />} />
          <Route path="/grupo/:slug/stats" element={<GroupStats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
