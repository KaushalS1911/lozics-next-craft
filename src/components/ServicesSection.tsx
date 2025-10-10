import { Truck, Ship, Plane, Package, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Truck,
    title: "Road Freight",
    description: "Reliable ground transportation services across all major routes with real-time tracking.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Comprehensive sea freight solutions for international cargo with competitive rates.",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and secure air cargo services for time-sensitive shipments worldwide.",
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "State-of-the-art storage facilities with advanced inventory management systems.",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Seamless cross-border logistics with customs clearance and documentation support.",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Time-critical delivery services with guaranteed on-time performance.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-none bg-card cursor-pointer overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                    <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
