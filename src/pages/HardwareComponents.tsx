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
  Wrench,
  Nut,
  Bolt,
  Screw
} from "lucide-react";

const HardwareComponents = () => {
  const componentTypes = [
    {
      title: "Fasteners",
      description: "Bolts, screws, nuts, washers, and rivets for secure assembly and structural integrity.",
      icon: <Bolt className="h-6 w-6" />,
      items: ["Hex Bolts", "Machine Screws", "Lock Nuts", "Flat Washers", "Rivets", "Self-Tapping Screws"]
    },
    {
      title: "Brackets & Mounts",
      description: "Custom brackets, mounting hardware, and support components for various applications.",
      icon: <Wrench className="h-6 w-6" />,
      items: ["Angle Brackets", "L-Brackets", "U-Brackets", "Mounting Plates", "Support Brackets", "Custom Brackets"]
    },
    {
      title: "Hinges & Hardware",
      description: "Door hardware, hinges, handles, and other mechanical components for functional assemblies.",
      icon: <Settings className="h-6 w-6" />,
      items: ["Door Hinges", "Cabinet Hardware", "Drawer Slides", "Handles", "Latches", "Hooks"]
    },
    {
      title: "Specialty Components",
      description: "Custom hardware components designed for specific applications and unique requirements.",
      icon: <Target className="h-6 w-6" />,
      items: ["Custom Fasteners", "Specialty Bolts", "Precision Components", "Assembly Hardware", "Industrial Parts", "Custom Designs"]
    }
  ];

  const manufacturingProcesses = [
    {
      step: "01",
      title: "Design & Engineering",
      description: "Analyze requirements and design hardware components with optimal geometry and material selection."
    },
    {
      step: "02", 
      title: "Material Selection",
      description: "Choose appropriate materials including steel, stainless steel, aluminum, or specialty alloys."
    },
    {
      step: "03",
      title: "Manufacturing",
      description: "Produce components using cutting, forming, machining, or casting processes as required."
    },
    {
      step: "04",
      title: "Surface Treatment",
      description: "Apply coatings, plating, or heat treatment for corrosion resistance and enhanced properties."
    },
    {
      step: "05",
      title: "Quality Control",
      description: "Perform dimensional inspection and mechanical testing to ensure compliance with specifications."
    },
    {
      step: "06",
      title: "Packaging & Delivery",
      description: "Package components securely and deliver with complete documentation and traceability."
    }
  ];

  const advantages = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Durability & Reliability",
      description: "Hardware components manufactured to exact specifications with superior materials and quality control."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Precision Manufacturing",
      description: "Achieve tight tolerances and consistent dimensions for reliable fit and assembly performance."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Custom Solutions",
      description: "Design and manufacture custom hardware components tailored to specific application requirements."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Versatile Applications",
      description: "Hardware components suitable for construction, automotive, electronics, and industrial applications."
    }
  ];

  const materials = [
    {
      name: "Carbon Steel",
      properties: ["High strength", "Cost effective", "Good machinability"],
      applications: ["Construction", "Automotive", "General hardware"]
    },
    {
      name: "Stainless Steel",
      properties: ["Corrosion resistance", "High strength", "Aesthetic appeal"],
      applications: ["Marine", "Food industry", "Outdoor equipment"]
    },
    {
      name: "Aluminum",
      properties: ["Lightweight", "Corrosion resistant", "Good conductivity"],
      applications: ["Aerospace", "Electronics", "Automotive"]
    },
    {
      name: "Brass",
      properties: ["Excellent machinability", "Corrosion resistant", "Decorative"],
      applications: ["Plumbing", "Electronics", "Decorative hardware"]
    }
  ];

  const applications = [
    "Construction & Building",
    "Automotive Industry", 
    "Electronics & Appliances",
    "Marine & Offshore",
    "Aerospace & Defense",
    "Furniture & Cabinetry",
    "Industrial Equipment",
    "Consumer Products"
  ];

  const specifications = [
    {
      title: "Size Range",
      value: "M2 - M50",
      description: "Wide range of fastener sizes"
    },
    {
      title: "Materials",
      value: "10+ Alloys",
      description: "Various material options"
    },
    {
      title: "Surface Treatments",
      value: "15+ Options",
      description: "Multiple coating choices"
    },
    {
      title: "Lead Time",
      value: "1-3 weeks",
      description: "Fast delivery times"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
              Precision Hardware Manufacturing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Hardware Components
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive hardware component solutions for all your assembly needs. 
              Fasteners, brackets, hinges, and custom components with superior quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Component Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Hardware Component Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manufacture a comprehensive range of hardware components, from standard fasteners 
              to custom-designed specialty parts for diverse industrial applications.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {componentTypes.map((type, index) => (
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
                    <h4 className="text-sm font-semibold mb-3 text-gray-700">Product Range:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {type.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{item}</span>
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

      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Manufacturing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent quality and optimal performance 
              through every stage of the hardware component manufacturing process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingProcesses.map((step, index) => (
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

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Materials & Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with a wide range of materials to meet specific application requirements 
              and environmental conditions for optimal component performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {materials.map((material, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{material.name}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Key Properties
                    </h4>
                    <div className="space-y-2">
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

          {/* Technical Specifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Gauge className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{spec.value}</h3>
                <h4 className="text-lg font-semibold mb-2">{spec.title}</h4>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Hardware Components?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hardware components offer superior quality, reliability, and performance 
              for critical applications across various industries.
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Applications & Industries</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our hardware components serve critical applications across industries 
                that require reliable, durable fastening and assembly solutions.
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
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quality Assurance</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">ISO Certified</h4>
                    <p className="text-sm opacity-90">ISO 9001:2015 quality management system</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Factory className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Manufacturing</h4>
                    <p className="text-sm opacity-90">CNC machining and precision forming capabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Material Testing</h4>
                    <p className="text-sm opacity-90">Comprehensive testing and inspection protocols</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Settings className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Custom Solutions</h4>
                    <p className="text-sm opacity-90">Tailored hardware solutions for specific needs</p>
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
            Ready to Source Your Hardware Components?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our hardware specialists to discuss your component requirements and get a detailed quote.
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

export default HardwareComponents;
