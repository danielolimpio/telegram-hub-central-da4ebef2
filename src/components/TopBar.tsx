import { Users, TrendingUp, Clock } from "lucide-react";

const TopBar = () => {
  const items = [
    { icon: Users, value: "+12.500", label: "Grupos Ativos" },
    { icon: TrendingUp, value: "8.742", label: "Acessos Hoje" },
    { icon: Clock, value: "23", label: "Novos Hoje" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-telegram-blue via-telegram-light-blue to-telegram-blue text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center sm:justify-end gap-4 sm:gap-8">
        {items.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-1.5 sm:gap-2">
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-90" />
            <span className="font-semibold">{value}</span>
            <span className="opacity-90 hidden xs:inline sm:inline">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;