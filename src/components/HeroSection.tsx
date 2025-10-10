import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "We're Global Logistics Providers",
    subtitle: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols.",
  },
  {
    title: "Reliable Transportation Services",
    subtitle: "Delivering excellence across borders with state-of-the-art logistics solutions and experienced professionals.",
  },
  {
    title: "Your Trusted Partner",
    subtitle: "30+ years of experience in providing world-class logistics and transportation services worldwide.",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image with transition */}
      <div 
        key={currentSlide}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-secondary/70"></div>
      </div>

      {/* Decorative Orange Shape with Animation */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block animate-slide-in">
        <svg viewBox="0 0 400 700" className="h-full w-full" preserveAspectRatio="none">
          <path d="M 0 0 Q 200 350 0 700 L 400 700 L 400 0 Z" fill="hsl(var(--primary))" opacity="0.9"/>
        </svg>
      </div>

      {/* Decorative Bottom Orange Shapes */}
      <div className="absolute left-0 bottom-0 w-32 h-32 bg-primary rounded-full -translate-x-1/2 translate-y-1/2 opacity-80"></div>
      <div className="absolute left-20 bottom-0 w-24 h-24 bg-primary/60 rounded-full translate-y-1/2"></div>

      {/* Content with slide animation */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex items-center h-full">
          <div key={currentSlide} className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {slides[currentSlide].subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-2xl opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-primary" : "w-2 bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
