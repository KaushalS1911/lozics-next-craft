import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
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
  Thermometer,
  Layers,
  Cpu
} from "lucide-react";
import aluminumDieCastingBg from "../assets/what we serve/Alluminium die casting.jpg";

const AluminumDieCasting = () => {
  const navigate = useNavigate();
  
  const castingTypes = [
    {
      title: "High Pressure Die Casting",
      description: "High-speed, high-pressure aluminum casting for complex geometries and thin walls.",
      pressure: "100-1000 MPa",
      advantages: ["Fast cycle times", "Complex shapes", "Thin walls", "High volume"]
    },
    {
      title: "Low Pressure Die Casting",
      description: "Gentle filling process for components requiring superior mechanical properties.",
      pressure: "20-100 kPa",
      advantages: ["Better properties", "Reduced porosity", "Larger parts", "Superior finish"]
    },
    {
      title: "Vacuum Die Casting",
      description: "Advanced process with vacuum assistance for premium quality components.",
      pressure: "Vacuum Assisted",
      advantages: ["Minimal porosity", "Premium quality", "Complex geometries", "Superior finish"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Die Preparation",
      description: "Clean and prepare the die cavity, apply release agents, and ensure proper temperature control."
    },
    {
      step: "02", 
      title: "Metal Preparation",
      description: "Melt and prepare aluminum alloy to precise temperature and composition specifications."
    },
    {
      step: "03",
      title: "Injection",
      description: "Inject molten aluminum into the die cavity under controlled pressure and velocity."
    },
    {
      step: "04",
      title: "Solidification",
      description: "Allow the aluminum to solidify under controlled cooling conditions for optimal properties."
    },
    {
      step: "05",
      title: "Ejection",
      description: "Open the die and eject the solidified casting using ejector pins and mechanisms."
    },
    {
      step: "06",
      title: "Finishing",
      description: "Remove flash, trim excess material, and apply surface treatments as required."
    }
  ];

  const advantages = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "High Production Rate",
      description: "Achieve fast cycle times and high-volume production with automated die casting processes."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Complex Geometries",
      description: "Create intricate shapes with thin walls and fine details that are difficult with other methods."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Material Properties",
      description: "Aluminum offers excellent strength-to-weight ratio, corrosion resistance, and thermal conductivity."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Cost Effectiveness",
      description: "Reduce machining requirements and material waste while maintaining high dimensional accuracy."
    }
  ];

  const aluminumAlloys = [
    {
      name: "ADC12 (A383)",
      properties: ["Excellent castability", "Good corrosion resistance", "High strength"],
      applications: ["Automotive parts", "Electronic housings", "Consumer products"]
    },
    {
      name: "A380",
      properties: ["High strength", "Good machinability", "Excellent fluidity"],
      applications: ["Engine components", "Structural parts", "Industrial equipment"]
    },
    {
      name: "A356",
      properties: ["Heat treatable", "High strength", "Good ductility"],
      applications: ["Aerospace components", "Automotive wheels", "High-stress parts"]
    },
    {
      name: "ADC6 (A360)",
      properties: ["Excellent corrosion resistance", "Good castability", "Moderate strength"],
      applications: ["Marine components", "Outdoor equipment", "Decorative parts"]
    }
  ];

  const applications = [
    "Automotive Components",
    "Electronics & Telecommunications", 
    "Aerospace & Defense",
    "Consumer Products",
    "Industrial Equipment",
    "Medical Devices",
    "Lighting & Electrical",
    "Marine Equipment"
  ];

  const capabilities = [
    {
      title: "Part Weight",
      value: "10g - 50kg",
      description: "Wide range of component sizes"
    },
    {
      title: "Wall Thickness",
      value: "0.5mm - 25mm",
      description: "From thin walls to thick sections"
    },
    {
      title: "Dimensional Tolerance",
      value: "±0.05mm",
      description: "High precision casting"
    },
    {
      title: "Surface Finish",
      value: "Ra 0.8μm",
      description: "Excellent surface quality"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aluminumDieCastingBg})`,
          }}
        ></div>
        <div className="absolute inset-0 glass-morphism-orange"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 glass-badge text-white font-semibold">
              High-Volume Manufacturing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Aluminum Die Castings
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
              High-precision aluminum die casting solutions for high-volume production. 
              Complex geometries, thin walls, and superior surface finish with excellent cost-effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Casting Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Die Casting Process Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive aluminum die casting solutions including high pressure, 
              low pressure, and vacuum-assisted processes for diverse application requirements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {castingTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Gauge className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm font-medium text-gray-700">Pressure Range:</span>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {type.pressure}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-700">Key Advantages:</h4>
                    <div className="grid grid-cols-1 gap-2">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Die Casting Process Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent quality and optimal material properties 
              through every stage of the aluminum die casting process.
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

      {/* Aluminum Alloys Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Aluminum Alloys</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with a comprehensive range of aluminum alloys, each offering unique properties 
              optimized for specific applications and performance requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aluminumAlloys.map((alloy, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{alloy.name}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Key Properties
                    </h4>
                    <div className="space-y-2">
                      {alloy.properties.map((prop, propIndex) => (
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
                      {alloy.applications.map((app, appIndex) => (
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Aluminum Die Casting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aluminum die casting offers unique advantages for high-volume production 
              of complex components with excellent mechanical properties and cost-effectiveness.
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

      {/* Technical Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced die casting equipment and processes enable us to meet 
              demanding specifications for a wide range of aluminum components.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Gauge className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{capability.value}</h3>
                <h4 className="text-lg font-semibold mb-2">{capability.title}</h4>
                <p className="text-gray-600 text-sm">{capability.description}</p>
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
                Aluminum die castings are widely used across industries that require 
                lightweight, durable components with complex geometries and excellent surface finish.
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
            <div className="bg-gradient-to-br from-gray-700 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quality & Equipment</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Cpu className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Automated Systems</h4>
                    <p className="text-sm opacity-90">High-speed die casting machines with robotic automation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Thermometer className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Temperature Control</h4>
                    <p className="text-sm opacity-90">Precise temperature management for optimal casting quality</p>
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
                    <h4 className="font-semibold mb-1">Surface Treatments</h4>
                    <p className="text-sm opacity-90">Anodizing, painting, and other finishing options</p>
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
            Ready to Start Your Aluminum Die Casting Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our die casting experts to discuss your aluminum component requirements and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => navigate('/contact')}
            >
              Request Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AluminumDieCasting;
