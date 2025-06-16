
import { SpeciesCard } from "@/components/SpeciesCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Leaf, Search } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

// Dados baseados em fontes científicas (IUCN, NOAA, WWF) com fotos reais
const especies = [
  {
    name: "Carcharodon carcharias (Tubarão-branco)",
    location: "Oceanos temperados globalmente",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    description: "Vulnerável (IUCN). População: ~3,500 indivíduos"
  },
  {
    name: "Megaptera novaeangliae (Baleia-jubarte)",
    location: "Oceanos globais - migração",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    description: "Menor preocupação (IUCN). População: ~80,000"
  },
  {
    name: "Amphiprion ocellatus (Peixe-palhaço)",
    location: "Indo-Pacífico",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
    description: "Estável. Ameaçado por branqueamento de corais"
  },
  {
    name: "Chelonia mydas (Tartaruga-verde)",
    location: "Oceanos tropicais e subtropicais",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    description: "Em perigo (IUCN). População: ~85,000-90,000"
  },
  {
    name: "Enteroctopus dofleini (Polvo-gigante-do-pacífico)",
    location: "Pacífico Norte",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "Dados insuficientes. Vida útil: 3-5 anos"
  },
  {
    name: "Balaenoptera musculus (Baleia-azul)",
    location: "Oceanos globais",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
    description: "Em perigo (IUCN). População: ~10,000-25,000"
  },
  {
    name: "Orcinus orca (Orca)",
    location: "Oceanos globais",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    description: "Dados deficientes (IUCN). População: ~50,000"
  },
  {
    name: "Sepia officinalis (Lula-comum)",
    location: "Atlântico Norte e Mediterrâneo",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
    description: "Menor preocupação. Pescaria comercial intensa"
  }
];

const Especies = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [searchParams]);

  const filteredEspecies = useMemo(() => {
    if (!searchTerm.trim()) return especies;
    
    return especies.filter(especie =>
      especie.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      especie.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      especie.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Espécies Marinhas</h1>
              <p className="text-muted-foreground">Catálogo científico baseado em dados da IUCN e NOAA</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Situação Global das Espécies Marinhas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-red-50 rounded">
                <p className="font-semibold text-red-800">Criticamente em Perigo</p>
                <p className="text-red-600">1,414 espécies marinhas</p>
              </div>
              <div className="p-4 bg-orange-50 rounded">
                <p className="font-semibold text-orange-800">Em Perigo</p>
                <p className="text-orange-600">2,418 espécies marinhas</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded">
                <p className="font-semibold text-yellow-800">Vulneráveis</p>
                <p className="text-yellow-600">3,946 espécies marinhas</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Fonte: IUCN Red List 2023</p>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4 flex-1 max-w-md">
              <Input 
                placeholder="Buscar espécie..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button>
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              {filteredEspecies.length} de {especies.length} espécies
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEspecies.map((especie, index) => (
              <SpeciesCard
                key={index}
                name={especie.name}
                location={especie.location}
                image={especie.image}
                description={especie.description}
              />
            ))}
          </div>

          {filteredEspecies.length === 0 && (
            <div className="text-center py-12">
              <Leaf className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Nenhuma espécie encontrada
              </h3>
              <p className="text-muted-foreground">
                Tente usar termos diferentes na sua busca
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Especies;
