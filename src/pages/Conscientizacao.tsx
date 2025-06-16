
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Lightbulb, Leaf, Globe, Recycle, Building, TrendingUp } from "lucide-react";

const Conscientizacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Lightbulb className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Conscientização Empresarial</h1>
              <p className="text-muted-foreground">Sustentabilidade Digital para Empresas de Tecnologia</p>
            </div>
          </div>

          {/* Impacto do Setor de TI */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building className="h-5 w-5" />
                <span>Impacto do Setor de TI nos Oceanos</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">Dados da Agência Internacional de Energia (IEA) e estudos científicos</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">3.7%</div>
                  <p className="text-sm text-red-700">das emissões globais de CO₂</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">200 TWh</div>
                  <p className="text-sm text-orange-700">energia anual de data centers</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">54 Mt</div>
                  <p className="text-sm text-yellow-700">resíduos eletrônicos/ano</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">20%</div>
                  <p className="text-sm text-red-700">taxa de reciclagem de e-waste</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Conexão com os Oceanos</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Emissões de CO₂ causam acidificação oceânica (-0.1 pH desde 1800)</li>
                  <li>• Aquecimento global eleva temperatura dos oceanos (+0.6°C desde 1969)</li>
                  <li>• Resíduos eletrônicos contaminam ecossistemas marinhos</li>
                  <li>• Mineração para componentes afeta bacias hidrográficas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Soluções Práticas */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="h-5 w-5" />
                <span>Soluções Práticas para Empresas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Eficiência Energética</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Cloud Computing</span>
                        <span className="text-sm font-medium">65% menos energia</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">vs. infraestrutura local</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Virtualização</span>
                        <span className="text-sm font-medium">80% redução</span>
                      </div>
                      <Progress value={80} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">consumo de servidores</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Energia Renovável</span>
                        <span className="text-sm font-medium">90% menos CO₂</span>
                      </div>
                      <Progress value={90} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">vs. combustíveis fósseis</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Economia Circular</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Reciclagem de Equipamentos</h4>
                      <p className="text-sm text-green-700">Potencial de recuperar 95% dos materiais valiosos</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Código Eficiente</h4>
                      <p className="text-sm text-blue-700">Otimização pode reduzir 30% do consumo energético</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Design Sustentável</h4>
                      <p className="text-sm text-purple-700">Produtos duráveis reduzem substituições em 50%</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Retorno sobre Investimento */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Retorno sobre Investimento em Sustentabilidade</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">Dados do McKinsey Global Institute e Boston Consulting Group</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-green-600 mb-2">$4.5 tri</div>
                  <p className="text-sm text-green-700">potencial da economia circular</p>
                  <p className="text-xs text-muted-foreground mt-2">até 2030</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Recycle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-blue-600 mb-2">25-30%</div>
                  <p className="text-sm text-blue-700">redução de custos operacionais</p>
                  <p className="text-xs text-muted-foreground mt-2">com eficiência energética</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Building className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-600 mb-2">15%</div>
                  <p className="text-sm text-purple-700">aumento no valor das ações</p>
                  <p className="text-xs text-muted-foreground mt-2">empresas ESG líderes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plano de Ação */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Plano de Ação para Sua Empresa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Passos Imediatos (0-6 meses)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <span className="text-sm">Auditoria energética dos sistemas atuais</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <span className="text-sm">Migração para provedores de cloud verde</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <span className="text-sm">Programa de reciclagem de equipamentos</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <span className="text-sm">Treinamento da equipe em coding eficiente</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Metas de Longo Prazo (6-24 meses)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                      <span className="text-sm">Neutralidade de carbono certificada</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                      <span className="text-sm">Implementação de métricas ESG</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
                      <span className="text-sm">Parcerias com ONGs de conservação</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">8</div>
                      <span className="text-sm">Relatório anual de sustentabilidade</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calculadora de Impacto */}
          <Card>
            <CardHeader>
              <CardTitle>Calculadora de Impacto</CardTitle>
              <p className="text-sm text-muted-foreground">Estime o impacto ambiental da sua empresa</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Número de funcionários</label>
                    <Input type="number" placeholder="ex: 50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Servidores próprios</label>
                    <Input type="number" placeholder="ex: 10" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Consumo mensal de energia (kWh)</label>
                    <Input type="number" placeholder="ex: 5000" />
                  </div>
                  <Button className="w-full">Calcular Impacto</Button>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Estimativa de Impacto Anual</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Emissões CO₂:</span>
                      <span className="font-semibold">-- toneladas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Equivalente marinho:</span>
                      <span className="font-semibold">-- m³ acidificados</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Custo ambiental:</span>
                      <span className="font-semibold">-- USD</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Preencha os campos para ver sua estimativa
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Conscientizacao;
