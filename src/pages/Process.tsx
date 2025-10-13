import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, HandHeart, Settings, CheckCircle, Truck, ArrowRight, Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Process = () => {
  // TODO: Replace placeholder image divs with actual images
  // Example: <img src="/path/to/your/image.jpg" alt="Step description" className="w-full h-80 object-cover rounded-lg shadow-lg" />
  const processSteps = [
    {
      id: 1,
      title: "Feasibility Study",
      icon: Search,
      description: "We begin with a comprehensive analysis to ensure your project's success",
      details: [
        "Technical and Commercial Feasibility of parts and assemblies",
        "Recommendation of optimum process and material",
        "Study of material alternatives",
        "Scope clarifications",
        "Value Engineering",
        "Factory pre-qualification"
      ],
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700"
    },
    {
      id: 2,
      title: "Quote & Finalisation",
      icon: HandHeart,
      description: "Transparent pricing and clear agreements for your peace of mind",
      details: [
        "Freeze technical specs prior to quote",
        "Clear quotations with clear scope",
        "Supply conditions",
        "Detailed contract review prior to start"
      ],
      color: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700"
    },
    {
      id: 3,
      title: "Product Development",
      icon: Settings,
      description: "Systematic development with regular updates and quality control",
      details: [
        "Project Management approach",
        "Weekly updates of progress",
        "Complete qualification prior to Sample submission",
        "Acceptance criteria frozen"
      ],
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700"
    },
    {
      id: 4,
      title: "Management of Quality",
      icon: CheckCircle,
      description: "Rigorous quality control at every stage of production",
      details: [
        "Tight In-process quality control",
        "Acceptance standards implemented at factory",
        "Final inspection with material testing"
      ],
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700"
    },
    {
      id: 5,
      title: "Suppliers & Logistics",
      icon: Truck,
      description: "Reliable delivery and supplier management for complete satisfaction",
      details: [
        "Supplier audits",
        "Logistics management",
        "On-time delivery to your door"
      ],
      color: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700"
    }
  ];

  const benefits = [
    {
      title: "Quality Assurance",
      description: "Every step is monitored to ensure the highest quality standards",
      icon: CheckCircle
    },
    {
      title: "Transparent Communication",
      description: "Regular updates and clear communication throughout the process",
      icon: HandHeart
    },
    {
      title: "Cost Optimization",
      description: "Value engineering to deliver the best solution at optimal cost",
      icon: Settings
    },
    {
      title: "On-Time Delivery",
      description: "Reliable logistics management ensures timely delivery",
      icon: Truck
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Process</h1>
            <p className="text-xl text-blue-100 mb-8">
              A systematic approach to manufacturing excellence, ensuring quality, efficiency, and customer satisfaction at every step of your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Quality Assured
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Check className="w-4 h-4 mr-2" />
                Transparent Process
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <ArrowRight className="w-4 h-4 mr-2" />
                On-Time Delivery
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">
            {/* Process Overview */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 5-Step Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From initial feasibility study to final delivery, our structured approach ensures consistent quality and customer satisfaction.
                </p>
              </div>

              {/* Main Process Overview Image */}
              <div className="mb-16">
                <div className="w-full h-96 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <Settings className="w-10 h-10" />
                    </div>
                    <p className="text-gray-500 font-medium text-lg">Process Overview Image</p>
                    <p className="text-gray-400 text-sm">Add your main process flowchart image here</p>
                  </div>
                </div>
              </div>

            {/* Process Steps */}
            <div className="space-y-16">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    {/* Content */}
                    <div className="flex-1">
                      <Card className={`${step.bgColor} ${step.borderColor} border-2 shadow-lg`}>
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <CardTitle className={`text-2xl ${step.textColor}`}>
                                Step {step.id}: {step.title}
                              </CardTitle>
                            </div>
                          </div>
                          <p className="text-gray-700 text-lg">{step.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className={`w-2 h-2 ${step.color} rounded-full mt-2 flex-shrink-0`}></div>
                                <span className="text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Image Container */}
                    <div className="flex-1">
                      <div className="relative">
                        {/* Main Image placeholder - replace with actual image */}
                        <div className="w-full h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center border-2 border-dashed border-gray-300 mb-4">
                          <div className="text-center">
                            <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <p className="text-gray-500 font-medium">{step.title} - Main Image</p>
                            <p className="text-gray-400 text-sm">Add your process image here</p>
                          </div>
                        </div>

                        {/* Optional: Additional images grid for steps that need multiple images */}
                        {step.id === 1 && (
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                              <div className="text-center">
                                <p className="text-gray-400 text-xs">Additional Image 1</p>
                              </div>
                            </div>
                            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                              <div className="text-center">
                                <p className="text-gray-400 text-xs">Additional Image 2</p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Step number badge */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                          <span className="text-gray-900 font-bold text-lg">{step.id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <section className="bg-gray-50 py-16 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Process?</h2>
              <p className="text-xl text-gray-600">
                Our systematic approach delivers exceptional results for every project
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Let us guide you through our proven process to deliver exceptional manufacturing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Get a Quote
                </button>
                <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Process;
