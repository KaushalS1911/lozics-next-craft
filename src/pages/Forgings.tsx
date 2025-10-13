import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight, 
  Factory, 
  Target, 
  Zap, 
  Shield,
  Users,
  Award,
  Settings,
  Gauge,
  Hammer,
  Thermometer,
  Layers
} from "lucide-react";

const Forgings = () => {
  const forgingTypes = [
    {
      title: "Hot Forging",
      description: "Heated metal is shaped using dies at high temperatures, ideal for complex geometries and large components.",
      temperature: "800°C - 1200°C",
      advantages: ["Superior grain structure", "Complex shapes", "Large components", "Cost effective"]
    },
    {
      title: "Cold Forging",
      description: "Metal is shaped at room temperature, providing excellent dimensional accuracy and surface finish.",
      temperature: "Room Temperature",
      advantages: ["High precision", "Excellent finish", "No oxidation", "Energy efficient"]
    },
    {
      title: "Warm Forging",
      description: "Intermediate temperature forging that balances the benefits of hot and cold forging processes.",
      temperature: "400°C - 800°C",
      advantages: ["Balanced properties", "Reduced forces", "Good precision", "Flexible process"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Material Selection",
      description: "Choose appropriate steel, aluminum, or other alloys based on application requirements and mechanical properties needed."
    },
    {
      step: "02", 
      title: "Heating (Hot/Warm Forging)",
      description: "Heat the material to optimal forging temperature for improved workability and grain structure refinement."
    },
    {
      step: "03",
      title: "Die Preparation",
      description: "Prepare and install forging dies designed to create the desired component shape and dimensions."
    },
    {
      step: "04",
      title: "Forging Operation",
      description: "Apply controlled pressure to shape the metal using mechanical or hydraulic presses or hammers."
    },
    {
      step: "05",
      title: "Trimming & Cleaning",
      description: "Remove excess material (flash) and clean the forged component to prepare for finishing operations."
    },
    {
      step: "06",
      title: "Heat Treatment",
      description: "Apply appropriate heat treatment to achieve desired mechanical properties and microstructure."
    }
  ];

  const advantages = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Superior Strength",
      description: "Forged components have superior mechanical properties due to refined grain structure and work hardening."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Dimensional Accuracy",
      description: "Achieve tight tolerances and consistent dimensions, reducing machining requirements."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Material Efficiency",
      description: "Minimize material waste compared to machining, with better material utilization and grain flow."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Design Flexibility",
      description: "Create complex shapes and features that would be difficult or impossible to machine."
    }
  ];

  const applications = [
    "Automotive Components",
    "Aerospace Parts", 
    "Oil & Gas Equipment",
    "Construction Machinery",
    "Railway Components",
    "Defense & Military",
    "Power Generation",
    "Marine Equipment"
  ];

  const materials = [
    "Carbon Steel",
    "Alloy Steel",
    "Stainless Steel",
    "Aluminum Alloys",
    "Titanium",
    "Copper Alloys",
    "Nickel Alloys"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
              Metal Forming Excellence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Precision Forgings
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform raw metal into high-strength components with our advanced forging capabilities. 
              Hot, cold, and warm forging solutions for demanding applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Forging Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Forging Process Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive forging solutions including hot, cold, and warm forging 
              to meet diverse application requirements and performance criteria.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {forgingTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Hammer className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Thermometer className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm font-medium text-gray-700">Temperature Range:</span>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {type.temperature}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-gray-700">Key Advantages:</h4>
                    <div className="space-y-1">
                      {type.advantages.map((advantage, advIndex) => (
                        <div key={advIndex} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Forging Process Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent quality and optimal material properties 
              through every stage of the forging process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Forging?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Forging offers unique advantages for components that require superior strength, 
              reliability, and performance under demanding conditions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Materials */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Materials We Work With</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We forge a wide range of materials to meet specific application requirements 
                and performance criteria across various industries.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Applications & Industries</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Forged components are essential in industries that demand high reliability, 
                strength, and performance under extreme conditions.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art forging facilities and experienced team deliver 
              components that meet the most demanding specifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Gauge className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Size Range</h3>
              <p className="text-gray-600">0.1kg to 50kg components</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tolerances</h3>
              <p className="text-gray-600">±0.1mm to ±0.5mm</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production Capacity</h3>
              <p className="text-gray-600">Up to 10,000 pieces/month</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Standards</h3>
              <p className="text-gray-600">ISO 9001:2015 certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Forging Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our forging experts to discuss your component requirements and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Request Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Forgings;
