import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AllGroups from "./pages/AllGroups";
import SubmitGroup from "./pages/SubmitGroup";
import NotFound from "./pages/NotFound";
import ComoFunciona from "./pages/ComoFunciona";
import RegrasComunidade from "./pages/RegrasComunitariade";
import DicasSeguranca from "./pages/DicasSeguranca";
import ImpulsionarGrupos from "./pages/ImpulsionarGrupos";
import CentralAjuda from "./pages/CentralAjuda";
import ReportarProblema from "./pages/ReportarProblema";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import PoliticaCookies from "./pages/PoliticaCookies";
import GruposDivulgacao from "./pages/categories/GruposDivulgacao";
import GruposVendas from "./pages/categories/GruposVendas";
import GruposPromocoes from "./pages/categories/GruposPromocoes";
import GruposOportunidades from "./pages/categories/GruposOportunidades";

import GruposInvestimentos from "./pages/categories/GruposInvestimentos";

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
          <Route path="/submit-group" element={<SubmitGroup />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/regras" element={<RegrasComunidade />} />
          <Route path="/seguranca" element={<DicasSeguranca />} />
          <Route path="/impulsionar" element={<ImpulsionarGrupos />} />
          <Route path="/ajuda" element={<CentralAjuda />} />
          <Route path="/reportar" element={<ReportarProblema />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos" element={<TermosUso />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
          <Route path="/grupos-telegram-divulgacao" element={<GruposDivulgacao />} />
          <Route path="/grupos-telegram-vendas" element={<GruposVendas />} />
          <Route path="/grupos-telegram-promocoes" element={<GruposPromocoes />} />
          <Route path="/grupos-telegram-investimentos" element={<GruposInvestimentos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
