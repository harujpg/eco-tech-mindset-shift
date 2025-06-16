
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees } from "lucide-react";

const Estatisticas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Trees className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Estatísticas Oceânicas</h1>
              <p className="text-muted-foreground">Dados científicos sobre a saúde dos oceanos</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Espécies Marinhas Conhecidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">~240,000</div>
                <p className="text-xs text-muted-foreground">Estimativa científica atual</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Espécies Ameaçadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">7,778</div>
                <p className="text-xs text-muted-foreground">marinhas na Lista Vermelha IUCN</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Áreas Marinhas Protegidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">8%</div>
                <p className="text-xs text-muted-foreground">dos oceanos protegidos</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Temperatura Oceânica</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">+0.6°C</div>
                <p className="text-xs text-muted-foreground">aumento desde 1969</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Espécies por Oceano</CardTitle>
                <p className="text-sm text-muted-foreground">Dados do OBIS (Ocean Biogeographic Information System)</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Oceano Pacífico</span>
                    <span className="font-semibold">~120,000 espécies</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Oceano Atlântico</span>
                    <span className="font-semibold">~85,000 espécies</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Oceano Índico</span>
                    <span className="font-semibold">~70,000 espécies</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '29%'}}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Oceano Ártico</span>
                    <span className="font-semibold">~5,500 espécies</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Indicadores de Saúde Oceânica</CardTitle>
                <p className="text-sm text-muted-foreground">Fontes: NOAA, IPCC, UNEP</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Acidificação Oceânica</h4>
                    <div className="text-3xl font-bold text-red-600 mb-1">-0.1 pH</div>
                    <p className="text-sm text-muted-foreground">desde a era pré-industrial</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Oxigênio Dissolvido</h4>
                    <div className="text-3xl font-bold text-orange-600 mb-1">-2%</div>
                    <p className="text-sm text-muted-foreground">redução desde 1960</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Nível do Mar</h4>
                    <div className="text-3xl font-bold text-blue-600 mb-1">+21cm</div>
                    <p className="text-sm text-muted-foreground">elevação desde 1880</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Metas de Conservação Global</CardTitle>
              <p className="text-sm text-muted-foreground">Baseado nas Metas de Aichi e ODS 14</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Meta 2030</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">30%</p>
                  <p className="text-sm text-blue-700">dos oceanos protegidos</p>
                  <p className="text-xs text-blue-600 mt-2">Progresso atual: 8%</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-green-800">Pesca Sustentável</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">65%</p>
                  <p className="text-sm text-green-700">dos estoques são sustentáveis</p>
                  <p className="text-xs text-green-600 mt-2">Meta: 100% até 2030</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-purple-800">Poluição Marinha</h4>
                  <p className="text-2xl font-bold text-purple-600 mb-2">-50%</p>
                  <p className="text-sm text-purple-700">redução até 2030</p>
                  <p className="text-xs text-purple-600 mt-2">foco em plásticos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Estatisticas;
