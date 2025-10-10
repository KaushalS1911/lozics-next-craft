import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import aboutImg from "@/assets/about-img.jpg";

const CounterAnimation = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Logistics professionals working"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl">
              <div className="text-6xl font-bold">30</div>
              <div className="text-sm mt-2">Years of Cleaning<br />experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in">
            <div className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
              Get to know us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Moving products across borders
            </h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Create Opportunity to Reach Potential
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              There are many variations of passages of lorem Ipsum available majority have suffered ipsum even slightly believable.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              We Provide Full Range of Logistics Transportation Worldwide
            </h3>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
            >
              Discover More
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <CounterAnimation end={830} label="Projects Completed" />
              <CounterAnimation end={490} label="Happy Customers" />
              <CounterAnimation end={180} label="Expert Team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
