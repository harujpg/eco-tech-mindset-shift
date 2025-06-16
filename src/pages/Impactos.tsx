
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Recycle } from "lucide-react";

const Impactos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Recycle className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Impactos Ambientais</h1>
              <p className="text-muted-foreground">Monitoramento dos efeitos da atividade humana nos oceanos</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Poluição</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Plásticos</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Químicos</span>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Óleo</span>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nível de Ameaça por Região</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Pesca predatória</span>
                    <div className="w-32 bg-gray-200 rounded-full h-4">
                      <div className="bg-cyan-500 h-4 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">75</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Mudança climática</span>
                    <div className="w-32 bg-gray-200 rounded-full h-4">
                      <div className="bg-cyan-500 h-4 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">80</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Poluição</span>
                    <div className="w-32 bg-gray-200 rounded-full h-4">
                      <div className="bg-cyan-500 h-4 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">90</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Impacto da Tecnologia nos Oceanos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Problemas Identificados</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Data centers costeiros afetam temperatura da água</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Cabos submarinos perturbam habitats marinhos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Resíduos eletrônicos contaminam ecossistemas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Mineração de lítio afeta bacias hidrográficas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Soluções Propostas</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Energia renovável para infraestrutura tech</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Reciclagem responsável de equipamentos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Código eficiente para reduzir consumo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Parcerias com ONGs de conservação marinha</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impactos;
