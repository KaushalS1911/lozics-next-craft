import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SandCastingImg from '../assets/manufacturing excellence/sand_casting.jpeg'
import ForgingImg from '../assets/manufacturing excellence/forging.jpeg'
import InvestmentCastingImg from '../assets/manufacturing excellence/investment_casting.jpeg'
import PrecisionMachiningImg from '../assets/manufacturing excellence/precision_machining.jpeg'
import AluminiumCastingImg from '../assets/manufacturing excellence/aluminium_die_casting.jpeg'
import HardwareImg from '../assets/manufacturing excellence/hardware.jpeg'

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Investment Casting",
      category: "casting",
      description: "Precision investment casting for complex geometries and superior surface finish",
      image: InvestmentCastingImg,
      stats: { projects: "35+", accuracy: "±0.01mm" },
      link: "/investment-casting"
    },
    {
      id: 2,
      title: "Precision Machining",
      category: "machining",
      description: "CNC machining with tight tolerances for automotive and aerospace components",
      image: PrecisionMachiningImg,
      stats: { projects: "18+", accuracy: "±0.01mm" },
      link: "/precision-machined"
    },
    {
      id: 3,
      title: "Forging",
      category: "forging",
      description: "High-strength forged components for industrial and automotive applications",
      image: ForgingImg,
      stats: { projects: "32+", "weight": "0.08 - 45 kg" },
      link: "/forgings"
    },
    {
      id: 4,
      title: "Sand Casting",
      category: "casting",
      description: "Ductile iron castings for pump parts, automotive, and general engineering",
      image: SandCastingImg,
      stats: { projects: "23+", weight: "Up to 420kg" },
      link: "/sg-ci-casting"
    },
    {
      id: 5,
      title: "Aluminum Die Casting",
      category: "casting",
      description: "Lightweight, high-volume aluminum pressure die castings",
      image: AluminiumCastingImg,
      stats: { projects: "12+", weight: "0.150 - 38 kg" },
      link: "/aluminum-die-casting"
    },
    {
      id: 6,
      title: "Hardware Components",
      category: "hardware",
      description: "Custom hardware manufacturing for diverse industrial applications",
      image: HardwareImg,
      stats: { projects: "13+", variety: "Wide Range" },
      link: "/hardware-components"
    }
  ];

  const categories = [
    { id: "all", label: "All Works" },
    { id: "casting", label: "Casting" },
    { id: "machining", label: "Machining" },
    { id: "forging", label: "Forging" },
    { id: "hardware", label: "Hardware" }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
              Our Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Manufacturing Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Precision-engineered components across diverse manufacturing processes
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredItems.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link to={item.link}>
                    <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-500 h-[480px] bg-white">
                      {/* Image Container */}
                      <div className="relative h-full overflow-hidden">
                        {/* Background Image */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0"
                        />
                        
                        {/* Professional Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500"></div>
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                          {/* Top Badge */}
                          <div className="flex justify-between items-start">
                            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 text-gray-900 text-xs font-medium uppercase tracking-wider">
                              {item.category}
                            </div>
                            <div className="w-9 h-9 bg-white/95 text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Bottom Content */}
                          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-2xl font-bold mb-3 text-white">
                              {item.title}
                            </h3>
                            <p className="text-white/80 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                              {item.description}
                            </p>
                            
                            {/* Stats */}
                            <div className="flex gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {Object.entries(item.stats).map(([key, value], idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm px-3 py-2 border border-white/20">
                                  <div className="text-xs text-white/60 uppercase tracking-wide mb-0.5">{key}</div>
                                  <div className="text-sm font-semibold text-white">{value}</div>
                                </div>
                              ))}
                            </div>

                            {/* View More Link */}
                            <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                              <span className="text-white">View Details</span>
                              <div className="w-5 h-[1px] bg-white group-hover:w-8 transition-all duration-300"></div>
                            </div>
                          </div>
                        </div>

                        {/* Subtle Border on Hover */}
                        <div className="absolute inset-0 border-2 border-gray-900/0 group-hover:border-gray-900/10 transition-colors duration-500 pointer-events-none"></div>
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 border-t border-gray-200 pt-12">
          <p className="text-gray-600 mb-6 text-base">
            Discuss your manufacturing requirements with our team
          </p>
          <Link to="/contact">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 flex items-center gap-2 mx-auto transition-all duration-300 group">
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { PortfolioSection };

