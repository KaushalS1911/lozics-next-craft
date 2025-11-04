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
  Gauge
} from "lucide-react";
import investmentCastingBg from "../assets/what we serve/CS investment-casting.jpg";

const InvestmentCasting = () => {
  const navigate = useNavigate();
  
  const processSteps = [
    {
      step: "01",
      title: "Pattern Creation",
      description: "Wax patterns are created using injection molding or manual techniques to match the exact specifications of the final product."
    },
    {
      step: "02", 
      title: "Assembly",
      description: "Multiple wax patterns are assembled onto a wax tree, creating a complete casting assembly for efficient production."
    },
    {
      step: "03",
      title: "Ceramic Shell Building",
      description: "The wax assembly is repeatedly dipped in ceramic slurry and coated with refractory sand to build a strong ceramic shell."
    },
    {
      step: "04",
      title: "Dewaxing",
      description: "The ceramic shell is heated to melt and remove the wax, leaving a hollow ceramic mold ready for metal casting."
    },
    {
      step: "05",
      title: "Metal Casting",
      description: "Molten metal is poured into the preheated ceramic mold to create the final cast component with exceptional detail."
    },
    {
      step: "06",
      title: "Shell Removal & Finishing",
      description: "The ceramic shell is removed, and the cast components are cut from the tree and finished to meet specifications."
    }
  ];

  const advantages = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Precision & Detail",
      description: "Achieve complex geometries and intricate details that are difficult or impossible with other casting methods."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Superior Surface Finish",
      description: "Produce parts with excellent surface finish, reducing or eliminating the need for additional machining."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Material Versatility",
      description: "Cast a wide range of metals including steel, stainless steel, aluminum, and superalloys."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Cost Effective",
      description: "Reduce machining costs and material waste, especially for complex parts and small to medium production runs."
    }
  ];

  const applications = [
    "Aerospace Components",
    "Medical Devices", 
    "Automotive Parts",
    "Turbine Blades",
    "Jewelry & Art",
    "Firearms",
    "Industrial Equipment",
    "Marine Components"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${investmentCastingBg})`,
          }}
        ></div>
        <div className="absolute inset-0 glass-morphism-orange"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 glass-badge text-white font-semibold">
              Precision Manufacturing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Investment Casting
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
              Unlock the potential of complex geometries with our precision investment casting services. 
              Create intricate parts with exceptional detail and superior surface finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              >
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => {
                  navigate('/product-gallery#investment-casting');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              >
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Investment Casting Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our investment casting process combines traditional craftsmanship with modern technology 
              to deliver precision components with exceptional quality and detail.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Investment Casting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investment casting offers unique advantages for complex, high-precision components 
              that require exceptional detail and surface finish.
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
                Investment casting is ideal for components that require high precision, complex geometries, 
                and superior surface finish across a wide range of industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Superior Quality</h4>
                    <p className="text-sm opacity-90">Consistent, high-quality parts with excellent dimensional accuracy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Factory className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Design Flexibility</h4>
                    <p className="text-sm opacity-90">Produce complex shapes and intricate details with ease</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gauge className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Cost Efficiency</h4>
                    <p className="text-sm opacity-90">Reduce machining costs and material waste</p>
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
            Ready to Start Your Investment Casting Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our experts to discuss your requirements and get a detailed quote for your investment casting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Request Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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

export default InvestmentCasting;
