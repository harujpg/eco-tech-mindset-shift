
import { SpeciesCard } from "@/components/SpeciesCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const especies = [
  {
    name: "Tubarão-branco",
    location: "Oceano Atlântico",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    description: "Predador apex dos oceanos"
  },
  {
    name: "Baleia-jubarte",
    location: "Oceano Pacífico",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
    description: "Migração de longa distância"
  },
  {
    name: "Peixe-palhaço",
    location: "Recifes de coral",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
    description: "Vive em simbiose com anêmonas"
  },
  {
    name: "Tartaruga-marinha",
    location: "Áreas tropicais",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    description: "Espécie ameaçada de extinção"
  },
  {
    name: "Polvo-gigante",
    location: "Oceano profundo",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    description: "Inteligência excepcional"
  }
];

const Especies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Espécies Marinhas</h1>
              <p className="text-muted-foreground">Descobra a biodiversidade dos oceanos</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4 flex-1 max-w-md">
              <Input placeholder="Buscar espécie..." />
              <Button>Pesquisar</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {especies.map((especie, index) => (
              <SpeciesCard
                key={index}
                name={especie.name}
                location={especie.location}
                image={especie.image}
                description={especie.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Especies;
