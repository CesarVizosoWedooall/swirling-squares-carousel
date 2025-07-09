
import { IntegrationIcon } from "./IntegrationIcon";

const topRowIntegrations = [
  { name: "GitHub", icon: "github", color: "bg-gray-800" },
  { name: "Sequoia", icon: "triangle", color: "bg-orange-500" },
  { name: "CloudFlare", icon: "cloud", color: "bg-orange-400" },
  { name: "Analytics", icon: "bar-chart-3", color: "bg-blue-600" },
  { name: "MindMeister", icon: "brain", color: "bg-red-500" },
  { name: "TodoIst", icon: "check-square", color: "bg-red-600" },
  { name: "Sparkle", icon: "sparkles", color: "bg-purple-500" },
  { name: "ClickUp", icon: "square", color: "bg-purple-600" },
  { name: "NetSuite", icon: "grid-3x3", color: "bg-blue-500" },
  { name: "Mendeley", icon: "heart", color: "bg-red-400" },
  { name: "Terminal", icon: "terminal", color: "bg-blue-400" },
  { name: "FigJam", icon: "figma", color: "bg-green-500" },
  { name: "NetSuite", icon: "database", color: "bg-blue-600" },
  { name: "Obsidian", icon: "hexagon", color: "bg-purple-400" },
  { name: "Microsoft", icon: "square", color: "bg-blue-700" },
  { name: "Office", icon: "file-text", color: "bg-blue-500" },
  { name: "Whimsical", icon: "circle", color: "bg-green-400" },
  { name: "Under Armour", icon: "zap", color: "bg-gray-700" },
];

const bottomRowIntegrations = [
  { name: "Notion", icon: "file-text", color: "bg-gray-700" },
  { name: "Linear", icon: "zap", color: "bg-purple-600" },
  { name: "Mendeley", icon: "circle", color: "bg-red-500" },
  { name: "MindMeister", icon: "brain", color: "bg-blue-600" },
  { name: "TodoIst", icon: "check-square", color: "bg-red-600" },
  { name: "Sparkle", icon: "sparkles", color: "bg-purple-500" },
  { name: "ClickUp", icon: "mouse-pointer", color: "bg-gray-600" },
  { name: "Mender", icon: "circle", color: "bg-red-400" },
  { name: "Terminal", icon: "terminal", color: "bg-blue-400" },
  { name: "FigJam", icon: "figma", color: "bg-green-500" },
  { name: "NetSuite", icon: "grid-3x3", color: "bg-blue-500" },
  { name: "Obsidian", icon: "hexagon", color: "bg-purple-400" },
  { name: "Microsoft", icon: "square", color: "bg-blue-700" },
  { name: "Office", icon: "file-text", color: "bg-orange-500" },
  { name: "Figma", icon: "figma", color: "bg-green-400" },
  { name: "Buildkite", icon: "package", color: "bg-green-600" },
  { name: "Whimsical", icon: "circle", color: "bg-teal-400" },
  { name: "Brain", icon: "brain-circuit", color: "bg-gray-600" },
];

export const IntegrationsGrid = () => {
  return (
    <div className="w-full max-w-7xl overflow-hidden">
      {/* Top row - scrolling left */}
      <div className="flex mb-4 animate-scroll-left">
        <div className="flex gap-4 min-w-max">
          {[...topRowIntegrations, ...topRowIntegrations].map((integration, index) => (
            <IntegrationIcon
              key={`top-${index}`}
              name={integration.name}
              icon={integration.icon}
              color={integration.color}
            />
          ))}
        </div>
      </div>

      {/* Bottom row - scrolling right */}
      <div className="flex animate-scroll-right">
        <div className="flex gap-4 min-w-max">
          {[...bottomRowIntegrations, ...bottomRowIntegrations].map((integration, index) => (
            <IntegrationIcon
              key={`bottom-${index}`}
              name={integration.name}
              icon={integration.icon}
              color={integration.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
