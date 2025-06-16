
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Earth, Recycle, TreePalm, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      {/* Header */}
      <div className="ocean-gradient text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Explore os Mistérios do Oceano</h1>
          <p className="text-xl opacity-90">Dados em tempo real sobre a vida marinha mundial</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Espécies Catalogadas"
            value="1248"
            icon={Leaf}
            subtitle="Oceano Atlântico"
          />
          <MetricCard
            title="Temperatura Média"
            value="24.5°C"
            icon={Earth}
            subtitle="Recifes de coral"
          />
          <MetricCard
            title="Poluição Detectada"
            value="18%"
            icon={Recycle}
            subtitle="Áreas monitoradas"
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
                <li>• Data centers consomem energia que pode afetar ecossistemas marinhos</li>
                <li>• Cabos submarinos impactam habitats oceânicos</li>
                <li>• Resíduos eletrônicos chegam aos oceanos via poluição</li>
                <li>• Mineração de terras raras afeta bacias hidrográficas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Soluções Sustentáveis</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Energia renovável para data centers</li>
                <li>• Programas de reciclagem de equipamentos</li>
                <li>• Otimização de código para reduzir consumo</li>
                <li>• Parcerias com organizações de conservação marinha</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <Button className="bg-primary hover:bg-primary/90">
              <Lightbulb className="mr-2 h-4 w-4" />
              Saiba Mais sobre Conscientização
            </Button>
            <Button variant="outline">
              Ver Métricas de Impacto
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Monitoramento Rápido</h3>
          <div className="flex space-x-4">
            <Input placeholder="Buscar espécie..." className="flex-1" />
            <Button>Pesquisar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
