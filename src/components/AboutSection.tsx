import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import aboutImg from "@/assets/get_to_know_us.jpeg";
import {useNavigate} from "react-router-dom";

const CounterAnimation = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {count}+
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

export const AboutSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Precision manufacturing and supply chain operations"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl">
              <div className="text-6xl font-bold">3</div>
              <div className="text-sm mt-2">Years of Manufacturing<br />Excellence</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in">
            <div className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
              Get to know us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Trusted Manufacturing Partner
            </h2>

            <p className="text-muted-foreground mb-6 text-lg">
              Noventra Global Sourcing is a leading provider of precision manufacturing solutions, specializing in investment casting, aluminum die casting, forgings, and precision machined components. With over three decades of manufacturing excellence, we deliver low-risk, cost-effective, and sustainable global supply chain solutions to our clients worldwide.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Strategic Partnership for Engineered Components
            </h3>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
              onClick={() => navigate('/product-gallery')}
            >
              Discover More
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <CounterAnimation end={185} label="Projects Completed" />
              <CounterAnimation end={18} label="Global Clients" />
              <CounterAnimation end={3} label="Years of Excellence" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
