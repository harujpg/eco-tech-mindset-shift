
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SpeciesCardProps {
  name: string;
  location: string;
  image: string;
  description?: string;
}

export function SpeciesCard({ name, location, image, description }: SpeciesCardProps) {
  return (
    <Card className="transition-all duration-200 hover:shadow-lg hover:scale-105">
      <div className="aspect-video bg-gradient-to-br from-cyan-100 to-teal-100 rounded-t-lg flex items-center justify-center">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop";
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardHeader>
      {description && (
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      )}
    </Card>
  );
}
