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
  Cpu,
  RotateCcw,
  Square
} from "lucide-react";
import precisionMachiningBg from "../assets/what we serve/Precision machining.jpg";

const PrecisionMachined = () => {
  const navigate = useNavigate();
  
  const machiningTypes = [
    {
      title: "CNC Milling",
      description: "Computer-controlled milling operations for complex 3D geometries and high-precision components.",
      icon: <Square className="h-6 w-6" />,
      advantages: ["Complex geometries", "High accuracy", "Repeatability", "Efficient production"]
    },
    {
      title: "CNC Turning",
      description: "Precision turning operations for cylindrical components with excellent surface finish and dimensional accuracy.",
      icon: <RotateCcw className="h-6 w-6" />,
      advantages: ["Cylindrical parts", "Excellent finish", "High productivity", "Cost effective"]
    },
    {
      title: "Multi-Axis Machining",
      description: "Advanced 5-axis machining capabilities for complex components requiring multiple operations.",
      icon: <Cpu className="h-6 w-6" />,
      advantages: ["Complex shapes", "Single setup", "Reduced handling", "Superior accuracy"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Design Analysis",
      description: "Analyze engineering drawings and specifications to determine optimal machining strategy and tooling requirements."
    },
    {
      step: "02", 
      title: "Programming",
      description: "Create CNC programs using CAD/CAM software to generate efficient toolpaths and machining sequences."
    },
    {
      step: "03",
      title: "Tooling Setup",
      description: "Select and setup appropriate cutting tools, fixtures, and workholding devices for optimal performance."
    },
    {
      step: "04",
      title: "Machining Operations",
      description: "Execute precision machining operations with continuous monitoring and quality control checkpoints."
    },
    {
      step: "05",
      title: "Inspection & Measurement",
      description: "Perform dimensional inspection using advanced measuring equipment to ensure compliance with specifications."
    },
    {
      step: "06",
      title: "Finishing & Assembly",
      description: "Apply surface treatments, deburring, and final assembly operations as required."
    }
  ];

  const advantages = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Ultra-High Precision",
      description: "Achieve tolerances as tight as ±0.001mm with our advanced CNC machining centers and measuring systems."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Superior Surface Finish",
      description: "Produce components with exceptional surface finish quality, reducing or eliminating post-processing requirements."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Material Versatility",
      description: "Machine a wide range of materials including aluminum, steel, titanium, plastics, and exotic alloys."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Complex Geometries",
      description: "Create intricate shapes and features that would be impossible with conventional manufacturing methods."
    }
  ];

  const applications = [
    "Aerospace Components",
    "Medical Devices", 
    "Automotive Parts",
    "Electronics & Semiconductors",
    "Optics & Photonics",
    "Defense & Military",
    "Industrial Equipment",
    "Consumer Products"
  ];

  const materials = [
    "Aluminum Alloys",
    "Stainless Steel",
    "Carbon Steel",
    "Titanium",
    "Brass & Copper",
    "Engineering Plastics",
    "Exotic Alloys",
    "Ceramics"
  ];

  const capabilities = [
    {
      title: "Tolerances",
      value: "±0.001mm",
      description: "Ultra-precise machining capabilities"
    },
    {
      title: "Surface Finish",
      value: "Ra 0.1μm",
      description: "Mirror-like surface finishes"
    },
    {
      title: "Size Range",
      value: "1mm - 2000mm",
      description: "Micro to large components"
    },
    {
      title: "Lead Time",
      value: "2-5 days",
      description: "Fast turnaround times"
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
            backgroundImage: `url(${precisionMachiningBg})`,
          }}
        ></div>
        <div className="absolute inset-0 glass-morphism-orange"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 glass-badge text-white font-semibold">
              Advanced Manufacturing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Precision Machined Components
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
              Advanced CNC machining services delivering ultra-high precision components 
              with exceptional quality and reliability for demanding applications.
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

      {/* Machining Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Machining Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive machining capabilities cover all major manufacturing processes 
              with state-of-the-art CNC equipment and advanced tooling.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {machiningTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <div className="text-primary">
                        {type.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-700">Key Advantages:</h4>
                    <div className="grid grid-cols-2 gap-2">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Machining Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent quality and optimal performance 
              through every stage of the precision machining process.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Precision Machining?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision machining offers unmatched capabilities for components that require 
              exceptional accuracy, surface finish, and dimensional consistency.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced machining centers and measuring equipment enable us to meet 
              the most demanding precision requirements across various industries.
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

      {/* Materials & Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Materials */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Materials We Machine</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We work with a comprehensive range of materials, from common alloys 
                to exotic materials used in specialized applications.
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
                Our precision machined components serve critical applications across 
                industries that demand the highest levels of accuracy and reliability.
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

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our comprehensive quality management system ensures every component 
                meets or exceeds specifications through rigorous inspection and testing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Metrology</h4>
                    <p className="text-sm text-gray-600">CMM, optical measurement, and surface finish analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Factory className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-1">Process Control</h4>
                    <p className="text-sm text-gray-600">Continuous monitoring and statistical process control</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-1">Certifications</h4>
                    <p className="text-sm text-gray-600">ISO 9001:2015, AS9100D aerospace certification</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Equipment & Technology</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Cpu className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">CNC Machining Centers</h4>
                    <p className="text-sm opacity-90">Multi-axis machining with advanced tooling</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Measuring Equipment</h4>
                    <p className="text-sm opacity-90">CMM, optical comparators, surface roughness testers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Settings className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">CAD/CAM Software</h4>
                    <p className="text-sm opacity-90">Advanced programming and simulation capabilities</p>
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
            Ready to Start Your Precision Machining Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our machining experts to discuss your precision component requirements and get a detailed quote.
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

export default PrecisionMachined;
