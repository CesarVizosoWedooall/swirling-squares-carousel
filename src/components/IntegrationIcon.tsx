
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface IntegrationIconProps {
  name: string;
  icon: string;
  color: string;
}

export const IntegrationIcon = ({ name, icon, color }: IntegrationIconProps) => {
  // Get the icon component dynamically
  const IconComponent = (Icons as any)[icon.replace(/-./g, (x) => x[1].toUpperCase())] as LucideIcon;
  
  return (
    <div className="group cursor-pointer">
      <div 
        className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20`}
      >
        {IconComponent ? (
          <IconComponent className="w-8 h-8 text-white" />
        ) : (
          <Icons.Package className="w-8 h-8 text-white" />
        )}
      </div>
    </div>
  );
};
