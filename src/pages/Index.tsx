
import { IntegrationsGrid } from "@/components/IntegrationsGrid";

const Index = () => {
  return (
    <div className="min-h-screen tech-gradient flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-tech-purple/20 rounded-full animate-tech-rotate"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-tech-purple/10 rounded-lg animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-tech-purple-light/30 rounded-lg animate-glow-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-tech-purple-dark/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="text-center mb-16 max-w-4xl relative z-10 animate-tech-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tech-text-glow">
          <span className="text-tech-white bg-shimmer bg-clip-text animate-text-shimmer">
            Plug AI into your own data &
          </span>
          <br />
          <span className="text-tech-purple-light animate-glow-pulse">
            over 500 integrations
          </span>
        </h1>
        
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-tech-purple to-transparent mx-auto mb-8 animate-border-glow"></div>
        
        <p className="text-tech-white/80 text-lg md:text-xl animate-tech-slide-up" style={{animationDelay: '0.3s'}}>
          Connectez votre IA à plus de 500 intégrations avec une technologie ultramoderne
        </p>
      </div>
      
      <div className="animate-tech-slide-up" style={{animationDelay: '0.6s'}}>
        <IntegrationsGrid />
      </div>
      
      {/* Floating tech elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-purple rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-tech-purple-light rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-tech-purple/50 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
    </div>
  );
};

export default Index;
