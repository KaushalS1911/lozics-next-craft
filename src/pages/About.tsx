import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Award, 
  Users, 
  Clock, 
  Globe, 
  Target, 
  Shield, 
  CheckCircle, 
  Factory,
  Wrench,
  Zap,
  Truck
} from "lucide-react";
import heroBg from "../assets/Final Logo.png";

const About = () => {
  const navigate = useNavigate();
  
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "Global", label: "Supply Chain Network" },
    { icon: <Globe className="w-8 h-8" />, value: "Worldwide", label: "Market Presence" },
    { icon: <Award className="w-8 h-8" />, value: "2023", label: "Founded" },
    { icon: <Factory className="w-8 h-8" />, value: "India", label: "Foundation Base" },
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Innovation",
      description: "We stress on exploring new ideas and attempt breakthrough products & processes."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Low-Risk",
      description: "Our sustainable global supply chain footprint ensures reliable operations."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Repeatability",
      description: "Foundation in India ensures operations meet stringent customer requirements."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Strategic Partnership",
      description: "We transcend the conventional role of a supplier to be your strategic partner."
    }
  ];

  const capabilities = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Engineered Parts",
      description: "Made-to-print parts and assemblies sourced globally"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Supply Chain Solutions",
      description: "Comprehensive supply chain platform bridging global diversity"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "Most effective business solutions with competitive prices"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Quality & Delivery",
      description: "Superior Quality, Delivery & Services combination"
    }
  ];

  const certifications = [
    "Global Supply Chain Management",
    "Strategic Partnership Development",
    "Cost-Effective Sourcing Solutions",
    "Quality Assurance & Control",
    "Sustainable Operations"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          ></div>
          
          {/* Backdrop Filter Overlay */}
          <div className="absolute inset-0 glass-morphism-navy-orange"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                About Noventra Global Sourcing
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
                Creating a world-class supply chain platform that bridges global diversity in communication, distance, and culture.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2 glass-badge text-white font-semibold">
                  Global Sourcing
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2 glass-badge text-white font-semibold">
                  Strategic Partnership
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2 glass-badge text-white font-semibold">
                  Cost Effective
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full -translate-x-16 translate-y-16 blur-2xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full translate-x-12 -translate-y-12 blur-2xl"></div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-lg text-gray-600">
                    <p>
                      Founded in 2023, Noventra Global Sourcing was established in response to the growing need 
                      for a singular source for global supply chain needs. Our mission revolves around creating 
                      a world-class supply chain platform that bridges global diversity in communication, distance, and culture.
                    </p>
                    <p>
                      Our low-risk, cost-effective, and sustainable global supply chain footprint establishes 
                      strategic partnerships to source engineered, made-to-print parts and assemblies for our clients. 
                      The inception of Noventra Global Sourcing, as a subsidiary, further solidifies our commitment 
                      to repeatability and reliability.
                    </p>
                    <p>
                      This foundation in India ensures that our operations meet and surpass the stringent requirements 
                      of our customers across various processes and industries. We stress on exploring new ideas and 
                      attempt breakthrough products & processes to provide the most effective business solutions.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-96 flex items-center justify-center">
                    <Factory className="w-32 h-32 text-primary/30" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Global Presence
                </h2>
                <p className="text-xl text-gray-600">
                  Building strategic partnerships across diverse markets and cultures
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="text-primary mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg text-gray-600">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600">
                  The principles that guide everything we do
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-lg transition-all hover:-translate-y-2">
                    <div className="text-primary mb-6 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Capabilities
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive supply chain solutions and strategic sourcing capabilities
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((capability, index) => (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-primary flex-shrink-0 mt-1">
                        {capability.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {capability.title}
                        </h3>
                        <p className="text-gray-600">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Strengths
                </h2>
                <p className="text-xl text-gray-600">
                  Core competencies that drive our success in global sourcing
                </p>
              </div>
              
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Trust Noventra Global Sourcing for excellence, innovation, and an unwavering 
                commitment to your success in navigating the complexities of the global supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => navigate('/contact')}
                >
                  Get a Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
