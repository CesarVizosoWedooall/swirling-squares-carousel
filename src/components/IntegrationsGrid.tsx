
import { IntegrationIcon } from "./IntegrationIcon";

const topRowIntegrations = [
  { name: "GitHub", icon: "github", color: "tech-gray" },
  { name: "Sequoia", icon: "triangle", color: "tech-purple" },
  { name: "CloudFlare", icon: "cloud", color: "tech-purple-dark" },
  { name: "Analytics", icon: "bar-chart-3", color: "tech-purple-light" },
  { name: "MindMeister", icon: "brain", color: "tech-gray" },
  { name: "TodoIst", icon: "check-square", color: "tech-purple" },
  { name: "Sparkle", icon: "sparkles", color: "tech-purple-light" },
  { name: "ClickUp", icon: "square", color: "tech-purple-dark" },
  { name: "NetSuite", icon: "grid-3x3", color: "tech-gray" },
  { name: "Mendeley", icon: "heart", color: "tech-purple" },
  { name: "Terminal", icon: "terminal", color: "tech-purple-light" },
  { name: "FigJam", icon: "figma", color: "tech-purple-dark" },
  { name: "NetSuite", icon: "database", color: "tech-gray" },
  { name: "Obsidian", icon: "hexagon", color: "tech-purple" },
  { name: "Microsoft", icon: "square", color: "tech-purple-light" },
  { name: "Office", icon: "file-text", color: "tech-purple-dark" },
  { name: "Whimsical", icon: "circle", color: "tech-gray" },
  { name: "Under Armour", icon: "zap", color: "tech-purple" },
];

const bottomRowIntegrations = [
  { name: "Notion", icon: "file-text", color: "tech-purple-dark" },
  { name: "Linear", icon: "zap", color: "tech-purple" },
  { name: "Mendeley", icon: "circle", color: "tech-gray" },
  { name: "MindMeister", icon: "brain", color: "tech-purple-light" },
  { name: "TodoIst", icon: "check-square", color: "tech-purple-dark" },
  { name: "Sparkle", icon: "sparkles", color: "tech-gray" },
  { name: "ClickUp", icon: "mouse-pointer", color: "tech-purple" },
  { name: "Mender", icon: "circle", color: "tech-purple-light" },
  { name: "Terminal", icon: "terminal", color: "tech-purple-dark" },
  { name: "FigJam", icon: "figma", color: "tech-gray" },
  { name: "NetSuite", icon: "grid-3x3", color: "tech-purple" },
  { name: "Obsidian", icon: "hexagon", color: "tech-purple-light" },
  { name: "Microsoft", icon: "square", color: "tech-purple-dark" },
  { name: "Office", icon: "file-text", color: "tech-gray" },
  { name: "Figma", icon: "figma", color: "tech-purple" },
  { name: "Buildkite", icon: "package", color: "tech-purple-light" },
  { name: "Whimsical", icon: "circle", color: "tech-purple-dark" },
  { name: "Brain", icon: "brain-circuit", color: "tech-gray" },
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
