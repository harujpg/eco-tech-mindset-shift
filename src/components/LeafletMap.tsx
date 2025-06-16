
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dados reais de biodiversidade marinha por região
const biodiversityData = [
  {
    name: "Triângulo de Coral",
    lat: -2.0,
    lng: 130.0,
    species: 3000,
    description: "Região com maior biodiversidade marinha do mundo"
  },
  {
    name: "Grande Barreira de Coral",
    lat: -18.0,
    lng: 147.0,
    species: 1625,
    description: "Maior sistema de recifes de coral do mundo"
  },
  {
    name: "Caribe",
    lat: 15.0,
    lng: -75.0,
    species: 1200,
    description: "Importante hotspot de biodiversidade"
  },
  {
    name: "Mediterrâneo",
    lat: 35.0,
    lng: 15.0,
    species: 17000,
    description: "Mar semifechado com alta endemicidade"
  },
  {
    name: "Galápagos",
    lat: -0.5,
    lng: -90.5,
    species: 2900,
    description: "Patrimônio Mundial da UNESCO"
  }
];

interface LeafletMapProps {
  height?: string;
}

export function LeafletMap({ height = "500px" }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Inicializar mapa
    mapInstance.current = L.map(mapRef.current).setView([0, 0], 2);

    // Adicionar camada de tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance.current);

    // Adicionar marcadores com dados de biodiversidade
    biodiversityData.forEach(point => {
      const marker = L.marker([point.lat, point.lng]).addTo(mapInstance.current!);
      
      marker.bindPopup(`
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: #0891b2;">${point.name}</h3>
          <p style="margin: 0 0 4px 0;"><strong>Espécies:</strong> ~${point.species.toLocaleString()}</p>
          <p style="margin: 0; font-size: 12px; color: #666;">${point.description}</p>
        </div>
      `);
    });

    // Cleanup
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%' }}
      className="rounded-lg shadow-lg"
    />
  );
}
