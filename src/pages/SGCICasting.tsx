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
  Layers,
  Thermometer
} from "lucide-react";

const SGCICasting = () => {
  const processSteps = [
    {
      step: "01",
      title: "Pattern Making",
      description: "Create wooden or metal patterns that define the shape and size of the final casting with proper allowances for shrinkage."
    },
    {
      step: "02", 
      title: "Mold Preparation",
      description: "Sand molds are prepared using the patterns, creating cavities that will form the cast components."
    },
    {
      step: "03",
      title: "Core Making",
      description: "Sand cores are created to form internal cavities and complex internal geometries in the casting."
    },
    {
      step: "04",
      title: "Mold Assembly",
      description: "Cores are positioned in the mold, and the mold halves are assembled securely for casting."
    },
    {
      step: "05",
      title: "Metal Pouring",
      description: "Molten SG iron or gray cast iron is poured into the prepared mold cavity at controlled temperatures."
    },
    {
      step: "06",
      title: "Cooling & Shakeout",
      description: "The casting is allowed to cool, then the sand mold is broken away to reveal the finished component."
    }
  ];

  const advantages = [
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Versatile Materials",
      description: "Work with Spheroidal Graphite (SG) iron and Gray Cast Iron for various mechanical properties."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Cost Effective",
      description: "Economical for medium to large production runs with excellent material utilization."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Excellent Properties",
      description: "SG iron offers high strength and ductility, while gray iron provides excellent damping and machinability."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Design Flexibility",
      description: "Create complex shapes and large components with internal cavities and varying wall thicknesses."
    }
  ];

  const materialTypes = [
    {
      name: "Spheroidal Graphite (SG) Iron",
      properties: ["High strength", "Good ductility", "Excellent toughness", "Corrosion resistance"],
      applications: ["Automotive components", "Pump housings", "Valve bodies", "Machine tool parts"]
    },
    {
      name: "Gray Cast Iron",
      properties: ["Excellent machinability", "Good damping properties", "Thermal conductivity", "Cost effective"],
      applications: ["Engine blocks", "Machine bases", "Brake discs", "Cookware"]
    }
  ];

  const applications = [
    "Automotive Industry",
    "Pump & Valve Manufacturing", 
    "Machine Tool Components",
    "Agricultural Equipment",
    "Construction Machinery",
    "Railway Components",
    "Marine Equipment",
    "General Engineering"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-orange-800 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
              Sand Casting Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              SG/CI Casting
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Expert sand casting services for Spheroidal Graphite Iron and Gray Cast Iron components. 
              Delivering robust, reliable castings for demanding applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">SG/CI Casting Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our sand casting process combines traditional foundry expertise with modern quality control 
              to produce reliable SG iron and gray cast iron components.
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

      {/* Material Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Material Types & Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in both Spheroidal Graphite Iron and Gray Cast Iron, 
              each offering unique properties for different applications.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {materialTypes.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">{material.name}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Key Properties
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {material.properties.map((prop, propIndex) => (
                        <div key={propIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{prop}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Factory className="h-5 w-5 mr-2 text-primary" />
                      Common Applications
                    </h4>
                    <div className="space-y-1">
                      {material.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{app}</span>
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

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose SG/CI Casting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sand casting offers unique advantages for medium to large components 
              that require reliable mechanical properties and cost-effective production.
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

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Applications & Industries</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SG/CI casting is widely used across industries that require durable, 
                reliable components with excellent mechanical properties and cost-effectiveness.
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
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Technical Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Thermometer className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Temperature Control</h4>
                    <p className="text-sm opacity-90">Precise pouring temperatures for optimal casting quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gauge className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Size Range</h4>
                    <p className="text-sm opacity-90">Components from 1kg to several tons</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-sm opacity-90">Comprehensive testing and inspection protocols</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Layers className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Material Expertise</h4>
                    <p className="text-sm opacity-90">Specialized knowledge in SG iron and gray iron</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your SG/CI Casting Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our foundry experts to discuss your SG iron or gray cast iron casting requirements.
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

export default SGCICasting;
