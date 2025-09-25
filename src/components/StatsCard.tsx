import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: "blue" | "green" | "orange" | "gray";
}

const StatsCard = ({ icon: Icon, value, label, color = "blue" }: StatsCardProps) => {
  const colorClasses = {
    blue: "text-telegram-blue bg-primary/10",
    green: "text-success bg-success/10",
    orange: "text-orange-500 bg-orange-50",
    gray: "text-muted-foreground bg-muted/50"
  };

  return (
    <Card className="p-6 text-center hover:shadow-card transition-all duration-300 border-border/50 hover:border-telegram-blue/20">
      <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </Card>
  );
};

export default StatsCard;