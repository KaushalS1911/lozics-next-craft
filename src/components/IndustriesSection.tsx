import { useNavigate } from "react-router-dom";
import {
  ArrowUpDown,
  Car,
  Cylinder,
  Factory,
  Fuel,
  Gauge,
  Hammer,
  Pickaxe,
  Plane,
  Tractor,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Card } from "./ui/card";

const iconClass = "w-12 h-12";

const industries: {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}[] = [
  {
    id: 3,
    title: "Pumps & Valves",
    icon: Gauge,
    description: "Industrial pumps and valve systems",
  },
  {
    id: 6,
    title: "General Engineering",
    icon: Factory,
    description: "Comprehensive engineering solutions",
  },
  {
    id: 7,
    title: "Oil & Gas",
    icon: Fuel,
    description: "Petroleum and natural gas industry solutions",
  },
  {
    id: 8,
    title: "Automobile",
    icon: Car,
    description: "Automotive production and assembly systems",
  },
  {
    id: 9,
    title: "Hardware",
    icon: Hammer,
    description: "Hardware components and systems",
  },
  {
    id: 5,
    title: "Mining",
    icon: Pickaxe,
    description: "Mining equipment and extraction systems",
  },
  {
    id: 10,
    title: "Pipes and Fittings",
    icon: Cylinder,
    description: "Large-scale commercial plumbing systems",
  },
  {
    id: 11,
    title: "Hydraulic",
    icon: ArrowUpDown,
    description: "Hydraulic systems and components",
  },
  {
    id: 12,
    title: "Agricultural Equipment",
    icon: Tractor,
    description: "Farm machinery and agricultural systems",
  },
  {
    id: 4,
    title: "Energy",
    icon: Zap,
    description: "Power generation and energy distribution",
  },
  {
    id: 13,
    title: "Defence & Aerospace",
    icon: Plane,
    description: "Military and aerospace component manufacturing",
  },
];

export const IndustriesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Served
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With decades of experience, we provide comprehensive solutions across diverse industries,
            delivering excellence and reliability to meet your specific needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.id}
                className="group p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-white"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon
                      className={`${iconClass} text-primary group-hover:text-primary/80 transition-colors duration-300`}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {industry.title}
                  </h3>

                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your industry? We're always expanding our expertise.
          </p>
          <button
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};
