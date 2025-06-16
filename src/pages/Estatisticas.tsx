
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
              <p className="text-muted-foreground">Dados consolidados sobre a saúde dos oceanos</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total de Espécies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">1,248</div>
                <p className="text-xs text-muted-foreground">+12% este mês</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Espécies Ameaçadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">234</div>
                <p className="text-xs text-muted-foreground">18.7% do total</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Áreas Protegidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">67</div>
                <p className="text-xs text-muted-foreground">milhões de km²</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Temperatura Média</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">24.5°C</div>
                <p className="text-xs text-muted-foreground">+0.3°C este ano</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Oceano</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Oceano Pacífico</span>
                    <span className="font-semibold">892 espécies</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '71%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Oceano Atlântico</span>
                    <span className="font-semibold">543 espécies</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '43%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Oceano Índico</span>
                    <span className="font-semibold">367 espécies</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '29%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tendências de Conservação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Espécies Recuperadas</h4>
                    <div className="text-3xl font-bold text-green-600 mb-1">23</div>
                    <p className="text-sm text-muted-foreground">nos últimos 5 anos</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Novas Áreas Protegidas</h4>
                    <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                    <p className="text-sm text-muted-foreground">criadas este ano</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Redução de Poluição</h4>
                    <div className="text-3xl font-bold text-primary mb-1">-15%</div>
                    <p className="text-sm text-muted-foreground">em áreas monitoradas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estatisticas;
