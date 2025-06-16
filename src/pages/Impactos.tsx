
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
              <p className="text-muted-foreground">Dados científicos sobre ameaças aos oceanos</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Principais Ameaças aos Oceanos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Poluição por Plástico</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 8 milhões de toneladas/ano entram nos oceanos</li>
                  <li>• 5 trilhões de pedaços de plástico flutuando</li>
                  <li>• 90% das aves marinhas têm plástico no estômago</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mudanças Climáticas</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Temperatura dos oceanos +0.6°C desde 1969</li>
                  <li>• pH dos oceanos diminuiu 0.1 unidades</li>
                  <li>• Nível do mar subiu 21-24 cm desde 1880</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Composição do Lixo Marinho</CardTitle>
                <p className="text-sm text-muted-foreground">Dados da Ocean Conservancy</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Plásticos</span>
                      <span className="text-sm text-muted-foreground">73%</span>
                    </div>
                    <Progress value={73} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Papel/Papelão</span>
                      <span className="text-sm text-muted-foreground">12%</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Metal</span>
                      <span className="text-sm text-muted-foreground">8%</span>
                    </div>
                    <Progress value={8} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Vidro</span>
                      <span className="text-sm text-muted-foreground">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Outros</span>
                      <span className="text-sm text-muted-foreground">2%</span>
                    </div>
                    <Progress value={2} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Espécies Ameaçadas por Região</CardTitle>
                <p className="text-sm text-muted-foreground">Fonte: IUCN Red List</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Mediterrâneo</span>
                      <span className="text-sm text-muted-foreground">41% ameaçadas</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{width: '41%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Atlântico Norte</span>
                      <span className="text-sm text-muted-foreground">35% ameaçadas</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{width: '35%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Pacífico</span>
                      <span className="text-sm text-muted-foreground">28% ameaçadas</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full" style={{width: '28%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Impacto da Indústria de Tecnologia</CardTitle>
              <p className="text-sm text-muted-foreground">Dados da Agência Internacional de Energia</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Problemas Quantificados</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Setor TI: 3,7% das emissões globais de CO₂</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Data centers: 200 TWh de energia/ano</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>E-waste: 54 milhões de toneladas/ano</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Apenas 20% do e-waste é reciclado</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Soluções Baseadas em Dados</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Cloud computing: 65% menos energia</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Energia renovável: redução de 90% CO₂</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Economia circular: potencial de US$ 4,5 tri</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Eficiência energética: redução de 50%</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Meta Global:</strong> Reduzir emissões de TI em 45% até 2030 para limitar aquecimento a 1,5°C (Acordo de Paris)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impactos;
