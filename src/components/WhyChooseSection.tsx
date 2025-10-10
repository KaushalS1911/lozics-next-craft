import { CheckCircle2, Award, Users, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Reliable Service",
    description: "On-time delivery guaranteed with our proven track record",
  },
  {
    icon: Award,
    title: "Industry Experts",
    description: "Decades of experience in global logistics solutions",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Skilled professionals dedicated to your success",
  },
  {
    icon: Shield,
    title: "Secure Transport",
    description: "Advanced security measures for safe cargo handling",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Trusted Logistics Partner
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-block p-6 bg-primary rounded-full mb-6 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all">
                  <Icon className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-foreground/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
