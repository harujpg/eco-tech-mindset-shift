
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import Index from "./pages/Index";
import Especies from "./pages/Especies";
import Mapas from "./pages/Mapas";
import Impactos from "./pages/Impactos";
import Estatisticas from "./pages/Estatisticas";
import Conscientizacao from "./pages/Conscientizacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex w-full">
            <div className="w-64 bg-sidebar border-r border-sidebar-border">
              <Sidebar />
            </div>
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/especies" element={<Especies />} />
                <Route path="/mapas" element={<Mapas />} />
                <Route path="/impactos" element={<Impactos />} />
                <Route path="/estatisticas" element={<Estatisticas />} />
                <Route path="/conscientizacao" element={<Conscientizacao />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
