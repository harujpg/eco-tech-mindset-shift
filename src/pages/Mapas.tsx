
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreePalm } from "lucide-react";
import { LeafletMap } from "@/components/LeafletMap";

const Mapas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <TreePalm className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Biodiversidade Marinha Global</h1>
              <p className="text-muted-foreground">Dados científicos de hotspots de biodiversidade oceânica</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Estatísticas Globais</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">71%</p>
                <p className="text-muted-foreground">da superfície terrestre é oceano</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">~240,000</p>
                <p className="text-muted-foreground">espécies marinhas conhecidas</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">8%</p>
                <p className="text-muted-foreground">dos oceanos são protegidos</p>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Mapa de Hotspots de Biodiversidade Marinha</CardTitle>
              <p className="text-sm text-muted-foreground">
                Clique nos marcadores para ver informações detalhadas sobre cada região
              </p>
            </CardHeader>
            <CardContent>
              <LeafletMap height="400px" />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Oceano Atlântico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">~85,000</p>
                <p className="text-sm text-muted-foreground">espécies marinhas estimadas</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Fonte: Ocean Biogeographic Information System
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Oceano Pacífico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">~120,000</p>
                <p className="text-sm text-muted-foreground">espécies marinhas estimadas</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Maior diversidade devido ao tamanho
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Oceano Índico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">~70,000</p>
                <p className="text-sm text-muted-foreground">espécies marinhas estimadas</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Rica em espécies endêmicas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapas;
