import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/Home page Slides/1. Investment Casting.jpg";
import slide2 from "@/assets/Home page Slides/2. Forging.jpg";
import slide3 from "@/assets/Home page Slides/3. precision_machining.jpg";
import slide4 from "@/assets/Home page Slides/4. metal-fabrication.webp";
import slide5 from "@/assets/Home page Slides/5. laser-cutting.jpg";

const slides = [
  {
    title: "Casting Excellence",
    subtitle: "Precision investment casting, Sand Casting, Shell Moulding, HPDC for complex geometries and superior surface finishes across industries.",
    image: slide1,
  },
  {
    title: "Premium Forging Services",
    subtitle: "High-strength forged components manufactured with advanced techniques for automotive and industrial applications.",
    image: slide2,
  },
  {
    title: "Precision Machining Solutions",
    subtitle: "State-of-the-art CNC machining capabilities delivering tight tolerances and exceptional quality for critical components.",
    image: slide3,
  },
  {
    title: "Metal Fabrication Expertise",
    subtitle: "Comprehensive metal fabrication services combining cutting-edge technology with skilled craftsmanship.",
    image: slide4,
  },
  {
    title: "Advanced Laser Cutting",
    subtitle: "High-precision laser cutting technology for intricate designs and clean edges across various materials.",
    image: slide5,
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
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-secondary/70"></div>
      </div>

      {/* Content with slide animation */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex items-center h-full pl-12 md:pl-16">
          <div key={currentSlide} className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-primary text-white p-3 rounded-full transition-all border border-white/30 hover:border-primary shadow-lg hover:shadow-xl hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-primary text-white p-3 rounded-full transition-all border border-white/30 hover:border-primary shadow-lg hover:shadow-xl hover:scale-110"
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
            className={`h-2 rounded-full transition-all shadow-md ${
              index === currentSlide ? "w-12 bg-primary" : "w-2 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
