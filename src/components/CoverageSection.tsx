import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CoverageSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=500&fit=crop"
                alt="Logistics operations"
                className="rounded-lg shadow-xl w-full h-[300px] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=500&fit=crop"
                alt="Transport services"
                className="rounded-lg shadow-xl w-full h-[300px] object-cover mt-8"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-lg shadow-2xl animate-bounce-slow">
              <div className="text-5xl font-bold">18</div>
              <div className="text-sm mt-2">Years of<br />Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
              Welcome Here
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Total Coverage & Flexibility in Transport
            </h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              The Best Service for Business People Who Appreciate Time
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              There are many variations of simply free text passages of available but the majority have suffered alteration in some form. We provide comprehensive logistics solutions tailored to your needs.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg">Urgent transport solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-lg">Quality services at reasonable prices</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 transition-all hover:scale-105 hover:shadow-xl"
            >
              Discover More
            </Button>

            {/* CEO Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop"
                  alt="CEO"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-foreground">Aleesha Brown</div>
                  <div className="text-sm text-muted-foreground">CEO & CO Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
