
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Earth, Recycle, TreePalm, Lightbulb, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/especies?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      {/* Header */}
      <div className="ocean-gradient text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Explore os Mistérios do Oceano</h1>
          <p className="text-xl opacity-90">Dados científicos sobre a vida marinha mundial</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Metrics Grid - Dados reais baseados em fontes científicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Espécies Marinhas Conhecidas"
            value="~240,000"
            icon={Leaf}
            subtitle="Estimativa científica atual"
          />
          <MetricCard
            title="Temperatura Média Oceânica"
            value="17.5°C"
            icon={Earth}
            subtitle="NOAA 2023"
          />
          <MetricCard
            title="Lixo Plástico nos Oceanos"
            value="8 milhões"
            icon={Recycle}
            subtitle="toneladas/ano (ONU)"
          />
        </div>

        {/* Sustainability Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <TreePalm className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold text-primary">Sustentabilidade Digital</h2>
              <p className="text-muted-foreground">Como sua empresa pode ajudar a preservar os oceanos</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Impacto da Tecnologia nos Oceanos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Setor de TI representa 3,7% das emissões globais de carbono</li>
                <li>• Data centers consomem 1% da energia mundial</li>
                <li>• Resíduos eletrônicos: 54 milhões de toneladas/ano</li>
                <li>• Apenas 20% do e-waste é reciclado adequadamente</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Soluções Baseadas em Evidências</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Uso de energia renovável pode reduzir 45% das emissões</li>
                <li>• Virtualização reduz consumo energético em 80%</li>
                <li>• Economia circular pode gerar US$ 4,5 trilhões</li>
                <li>• Cloud computing é 93% mais eficiente energeticamente</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <Link to="/conscientizacao">
              <Button className="bg-primary hover:bg-primary/90">
                <Lightbulb className="mr-2 h-4 w-4" />
                Saiba Mais sobre Conscientização
              </Button>
            </Link>
            <Link to="/impactos">
              <Button variant="outline">
                Ver Métricas de Impacto
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Pesquisa Científica</h3>
          <div className="flex space-x-4">
            <Input 
              placeholder="Buscar espécie marinha..." 
              className="flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" />
              Pesquisar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
