
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreePalm } from "lucide-react";

const Mapas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <TreePalm className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Biodiversidade Global</h1>
              <p className="text-muted-foreground">Mapeamento das espécies marinhas pelo mundo</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-2">
              <Button variant="default">Todas</Button>
              <Button variant="outline">Ameaçadas</Button>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Mapa Interativo de Biodiversidade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 h-96 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center">
                  <TreePalm className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-primary mb-2">Mapa Interativo</p>
                  <p className="text-muted-foreground">
                    Visualização das espécies marinhas catalogadas por região
                  </p>
                  <Button className="mt-4">Carregar Mapa</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Oceano Atlântico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">543</p>
                <p className="text-sm text-muted-foreground">espécies catalogadas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Oceano Pacífico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">892</p>
                <p className="text-sm text-muted-foreground">espécies catalogadas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Oceano Índico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">367</p>
                <p className="text-sm text-muted-foreground">espécies catalogadas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapas;
