
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
  
  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case 'tech-purple':
        return 'bg-tech-purple hover:bg-tech-purple-light';
      case 'tech-purple-dark':
        return 'bg-tech-purple-dark hover:bg-tech-purple';
      case 'tech-purple-light':
        return 'bg-tech-purple-light hover:bg-tech-purple';
      case 'tech-gray':
        return 'bg-tech-gray hover:bg-tech-purple-dark';
      default:
        return 'bg-tech-purple hover:bg-tech-purple-light';
    }
  };
  
  return (
    <div className="group cursor-pointer tech-hover-lift">
      <div 
        className={`w-16 h-16 ${getColorClasses(color)} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 tech-border-glow animate-glow-pulse backdrop-blur-sm`}
        style={{ animationDelay: `${Math.random() * 2}s` }}
      >
        {IconComponent ? (
          <IconComponent className="w-8 h-8 text-tech-white group-hover:text-tech-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
        ) : (
          <Icons.Package className="w-8 h-8 text-tech-white group-hover:text-tech-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
        )}
      </div>
    </div>
  );
};
