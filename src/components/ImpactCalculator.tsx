
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Zap, Server, Recycle } from "lucide-react";

interface CalculationResult {
  energyConsumption: number;
  carbonEmissions: number;
  waterUsage: number;
  costSavings: number;
}

export function ImpactCalculator() {
  const [employees, setEmployees] = useState<number>(0);
  const [servers, setServers] = useState<number>(0);
  const [cloudUsage, setCloudUsage] = useState<number>(0);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateImpact = () => {
    // Cálculos baseados em dados da IEA e EPA
    const energyPerEmployee = 3500; // kWh/ano por funcionário
    const energyPerServer = 8760; // kWh/ano por servidor (24h/dia)
    const cloudEfficiency = 0.35; // Cloud é 65% mais eficiente

    const totalEnergy = (employees * energyPerEmployee) + (servers * energyPerServer);
    const optimizedEnergy = totalEnergy * (1 - (cloudUsage / 100) * cloudEfficiency);
    
    // 1 kWh = 0.385 kg CO2 (média global)
    const carbonEmissions = optimizedEnergy * 0.385;
    
    // 1 kWh = 0.25 litros de água (data centers)
    const waterUsage = optimizedEnergy * 0.25;
    
    // Economia com práticas sustentáveis (R$ 0.65/kWh média Brasil)
    const costSavings = (totalEnergy - optimizedEnergy) * 0.65;

    setResult({
      energyConsumption: Math.round(optimizedEnergy),
      carbonEmissions: Math.round(carbonEmissions),
      waterUsage: Math.round(waterUsage),
      costSavings: Math.round(costSavings)
    });
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="h-6 w-6 text-primary" />
          <span>Calculadora de Impacto Ambiental</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Calcule o impacto ambiental da sua empresa de tecnologia
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="employees">Número de Funcionários</Label>
            <Input
              id="employees"
              type="number"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              placeholder="Ex: 50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="servers">Servidores Próprios</Label>
            <Input
              id="servers"
              type="number"
              value={servers}
              onChange={(e) => setServers(Number(e.target.value))}
              placeholder="Ex: 10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cloud">Uso de Cloud (%)</Label>
            <Input
              id="cloud"
              type="number"
              value={cloudUsage}
              onChange={(e) => setCloudUsage(Number(e.target.value))}
              placeholder="Ex: 70"
              max="100"
            />
          </div>
        </div>

        <Button onClick={calculateImpact} className="w-full">
          <Calculator className="mr-2 h-4 w-4" />
          Calcular Impacto
        </Button>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Zap className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-semibold">Consumo Energético</p>
                <p className="text-2xl font-bold text-blue-600">
                  {result.energyConsumption.toLocaleString()} kWh/ano
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
              <Recycle className="h-8 w-8 text-red-600" />
              <div>
                <p className="font-semibold">Emissões de CO₂</p>
                <p className="text-2xl font-bold text-red-600">
                  {result.carbonEmissions.toLocaleString()} kg/ano
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-cyan-50 rounded-lg">
              <Server className="h-8 w-8 text-cyan-600" />
              <div>
                <p className="font-semibold">Uso de Água</p>
                <p className="text-2xl font-bold text-cyan-600">
                  {result.waterUsage.toLocaleString()} L/ano
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <Calculator className="h-8 w-8 text-green-600" />
              <div>
                <p className="font-semibold">Economia Potencial</p>
                <p className="text-2xl font-bold text-green-600">
                  R$ {result.costSavings.toLocaleString()}/ano
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
