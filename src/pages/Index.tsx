
import { IntegrationsGrid } from "@/components/IntegrationsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-16 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Plug AI into your own data &</span>
          <br />
          <span className="text-orange-400">over 500 integrations</span>
        </h1>
      </div>
      
      <IntegrationsGrid />
    </div>
  );
};

export default Index;
