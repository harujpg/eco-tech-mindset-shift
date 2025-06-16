
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Earth, Recycle, TreePalm, Leaf } from "lucide-react";

const Conscientizacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="ocean-gradient text-white p-8 rounded-lg mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="h-10 w-10" />
              <div>
                <h1 className="text-4xl font-bold">Conscientização para Empresas de Tecnologia</h1>
                <p className="text-xl opacity-90 mt-2">Transformando o setor tech em aliado dos oceanos</p>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
              <CardHeader>
                <Earth className="h-8 w-8 text-primary mx-auto" />
                <CardTitle className="text-lg">Consumo Energético</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">4%</div>
                <p className="text-sm text-muted-foreground">do consumo global</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Recycle className="h-8 w-8 text-primary mx-auto" />
                <CardTitle className="text-lg">E-waste</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">54M</div>
                <p className="text-sm text-muted-foreground">toneladas/ano</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TreePalm className="h-8 w-8 text-primary mx-auto" />
                <CardTitle className="text-lg">Pegada de Carbono</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">1.8Gt</div>
                <p className="text-sm text-muted-foreground">CO2 equivalente</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Leaf className="h-8 w-8 text-primary mx-auto" />
                <CardTitle className="text-lg">Potencial Verde</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">20%</div>
                <p className="text-sm text-muted-foreground">redução possível</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Problems Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-red-600">
                  Como a Tecnologia Afeta os Oceanos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Data Centers Costeiros</h4>
                  <p className="text-sm text-muted-foreground">
                    Refrigeração inadequada pode aquecer águas próximas, afetando ecossistemas marinhos locais.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Cabos Submarinos</h4>
                  <p className="text-sm text-muted-foreground">
                    Instalação e manutenção perturbam habitats no fundo oceânico e rotas migratórias.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Resíduos Eletrônicos</h4>
                  <p className="text-sm text-muted-foreground">
                    Metais pesados e componentes tóxicos chegam aos oceanos via descarte inadequado.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold">Mineração para Tech</h4>
                  <p className="text-sm text-muted-foreground">
                    Extração de lítio e terras raras contamina bacias hidrográficas que deságuam no mar.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Solutions Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">
                  Soluções Sustentáveis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Energia Renovável</h4>
                  <p className="text-sm text-muted-foreground">
                    Migrar data centers para energia solar, eólica e outras fontes limpas.
                  </p>
                  <Badge variant="secondary" className="mt-1">Impacto: -70% CO2</Badge>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Economia Circular</h4>
                  <p className="text-sm text-muted-foreground">
                    Programas de reciclagem, refurbishing e design para durabilidade.
                  </p>
                  <Badge variant="secondary" className="mt-1">Impacto: -50% E-waste</Badge>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold">Código Eficiente</h4>
                  <p className="text-sm text-muted-foreground">
                    Otimização de algoritmos e arquiteturas para reduzir consumo computacional.
                  </p>
                  <Badge variant="secondary" className="mt-1">Impacto: -30% Energia</Badge>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold">Parcerias Oceânicas</h4>
                  <p className="text-sm text-muted-foreground">
                    Colaboração com ONGs de conservação marinha e financiamento de projetos.
                  </p>
                  <Badge variant="secondary" className="mt-1">Impacto: +Conservação</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Plan */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Plano de Ação para Sua Empresa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Auditoria Ambiental</h3>
                  <p className="text-sm text-muted-foreground">
                    Avalie o impacto atual da sua infraestrutura tecnológica nos oceanos
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Implementação Verde</h3>
                  <p className="text-sm text-muted-foreground">
                    Adote práticas sustentáveis em desenvolvimento, infraestrutura e operações
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Monitoramento</h3>
                  <p className="text-sm text-muted-foreground">
                    Meça e reporte o progresso em redução de impacto ambiental
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Comprometa-se com os Oceanos</CardTitle>
              <p className="text-muted-foreground">
                Junte-se ao movimento de empresas tech que protegem a vida marinha
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome da Empresa</label>
                    <Input placeholder="Sua empresa..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email para Contato</label>
                    <Input type="email" placeholder="contato@empresa.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tamanho da Empresa</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Startup (1-10 funcionários)</option>
                      <option>Pequena (11-50 funcionários)</option>
                      <option>Média (51-200 funcionários)</option>
                      <option>Grande (200+ funcionários)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Áreas de Interesse</label>
                    <Textarea placeholder="Descreva quais práticas sustentáveis sua empresa gostaria de implementar..." />
                  </div>
                  <Button className="w-full" size="lg">
                    <Earth className="mr-2 h-4 w-4" />
                    Comprometer-se com a Sustentabilidade Oceânica
                  </Button>
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
