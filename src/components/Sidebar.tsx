
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Earth, 
  Leaf, 
  Lightbulb, 
  Recycle, 
  Trees, 
  TreePalm 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Earth,
  },
  {
    title: "Espécies",
    href: "/especies",
    icon: Leaf,
  },
  {
    title: "Mapas",
    href: "/mapas",
    icon: TreePalm,
  },
  {
    title: "Impactos",
    href: "/impactos",
    icon: Recycle,
  },
  {
    title: "Estatísticas",
    href: "/estatisticas",
    icon: Trees,
  },
  {
    title: "Conscientização",
    href: "/conscientizacao",
    icon: Lightbulb,
  },
];

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn("pb-12 min-h-screen", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center space-x-2 mb-8">
            <Earth className="h-8 w-8 text-accent" />
            <div>
              <h2 className="text-lg font-semibold text-sidebar-foreground">Ocean</h2>
              <p className="text-sm text-sidebar-foreground/70">Dashboard</p>
            </div>
          </div>
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={location.pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    location.pathname === item.href
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
