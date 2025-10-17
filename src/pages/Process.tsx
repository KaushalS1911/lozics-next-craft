import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, HandHeart, Settings, CheckCircle, Truck, ArrowRight, Check, Star, Clock, Users, Shield, Zap, Factory, Wrench, Target, Globe, Award, FileText, BarChart3, Cog, Package, QualityCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import precisionMachining from "../assets/Home page Slides/3. precision_machining.jpg";

const Process = () => {
  // Enhanced process steps with detailed information
  const processSteps = [
    {
      id: 1,
      title: "Feasibility Study & Analysis",
      icon: Search,
      description: "Comprehensive technical and commercial analysis to ensure project viability and optimal outcomes",
      subProcesses: [
        {
          title: "Technical Assessment",
          description: "Deep dive into technical requirements and constraints",
          details: ["Material compatibility analysis", "Manufacturing process evaluation", "Tolerance and specification review", "Design for manufacturability assessment"]
        },
        {
          title: "Commercial Evaluation", 
          description: "Cost-benefit analysis and market positioning",
          details: ["Cost modeling and optimization", "Market demand analysis", "Competitive pricing research", "ROI projections"]
        },
        {
          title: "Risk Assessment",
          description: "Identification and mitigation of potential project risks",
          details: ["Technical risk evaluation", "Supply chain risk analysis", "Timeline risk assessment", "Quality risk mitigation"]
        }
      ],
      deliverables: ["Technical feasibility report", "Cost analysis document", "Risk mitigation plan", "Recommended process selection"],
      duration: "2-3 weeks",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Quote & Contract Finalization",
      icon: FileText,
      description: "Detailed pricing and comprehensive contract agreements ensuring clarity and mutual understanding",
      subProcesses: [
        {
          title: "Technical Specification Freeze",
          description: "Finalizing all technical requirements before pricing",
          details: ["Drawing and specification review", "Material selection confirmation", "Process parameter finalization", "Quality standard establishment"]
        },
        {
          title: "Pricing & Quotation",
          description: "Transparent and detailed cost breakdown",
          details: ["Material cost calculation", "Manufacturing cost analysis", "Tooling and setup costs", "Logistics and handling fees"]
        },
        {
          title: "Contract Development",
          description: "Comprehensive legal and commercial agreements",
          details: ["Terms and conditions review", "Payment terms establishment", "Delivery schedule agreement", "Quality assurance clauses"]
        }
      ],
      deliverables: ["Detailed quotation", "Technical specifications document", "Supply agreement", "Quality standards document"],
      duration: "1-2 weeks",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Product Development & Engineering",
      icon: Cog,
      description: "Systematic product development with rigorous project management and continuous quality control",
      subProcesses: [
        {
          title: "Project Management",
          description: "Structured approach to project execution and monitoring",
          details: ["Project timeline development", "Resource allocation planning", "Milestone establishment", "Progress tracking systems"]
        },
        {
          title: "Design & Engineering",
          description: "Technical design and engineering optimization",
          details: ["CAD modeling and analysis", "Prototype development", "Design validation", "Engineering change management"]
        },
        {
          title: "Sample Development",
          description: "Pre-production sample creation and validation",
          details: ["First article inspection", "Sample approval process", "Customer feedback integration", "Final specification confirmation"]
        }
      ],
      deliverables: ["Project management plan", "Engineering drawings", "Approved samples", "Production readiness report"],
      duration: "4-8 weeks",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: 4,
      title: "Quality Management & Control",
      icon: Shield,
      description: "Comprehensive quality assurance system ensuring consistent excellence throughout production",
      subProcesses: [
        {
          title: "In-Process Quality Control",
          description: "Continuous monitoring and control during manufacturing",
          details: ["Real-time quality monitoring", "Statistical process control", "Defect prevention systems", "Quality checkpoints"]
        },
        {
          title: "Testing & Inspection",
          description: "Rigorous testing and inspection protocols",
          details: ["Dimensional inspection", "Material testing", "Performance validation", "Non-destructive testing"]
        },
        {
          title: "Quality Documentation",
          description: "Comprehensive documentation and certification",
          details: ["Inspection reports", "Test certificates", "Material certificates", "Quality compliance records"]
        }
      ],
      deliverables: ["Quality control plan", "Inspection reports", "Test certificates", "Quality assurance documentation"],
      duration: "Ongoing",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "Supply Chain & Logistics Management",
      icon: Truck,
      description: "End-to-end supply chain optimization ensuring reliable delivery and complete customer satisfaction",
      subProcesses: [
        {
          title: "Supplier Management",
          description: "Strategic supplier selection and relationship management",
          details: ["Supplier qualification audits", "Performance monitoring", "Capacity planning", "Risk management"]
        },
        {
          title: "Production Planning",
          description: "Optimized production scheduling and resource allocation",
          details: ["Production scheduling", "Inventory management", "Capacity optimization", "Lead time management"]
        },
        {
          title: "Logistics & Delivery",
          description: "Efficient logistics coordination and timely delivery",
          details: ["Shipping coordination", "Customs clearance", "Delivery tracking", "On-time delivery assurance"]
        }
      ],
      deliverables: ["Supply chain strategy", "Production schedule", "Logistics plan", "Delivery confirmation"],
      duration: "Ongoing",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const benefits = [
    {
      title: "Quality Excellence",
      description: "Rigorous quality control at every stage ensures consistent excellence and customer satisfaction",
      icon: Shield,
      stats: "99.8% Quality Rate"
    },
    {
      title: "Transparent Communication",
      description: "Regular updates, clear documentation, and open communication throughout the entire process",
      icon: Users,
      stats: "24/7 Support"
    },
    {
      title: "Cost Optimization",
      description: "Value engineering and process optimization deliver the best solution at optimal cost",
      icon: Zap,
      stats: "15-30% Cost Savings"
    },
    {
      title: "On-Time Delivery",
      description: "Advanced logistics management and supply chain optimization ensure timely delivery",
      icon: Clock,
      stats: "98% On-Time Delivery"
    },
    {
      title: "Global Reach",
      description: "Extensive supplier network and global logistics capabilities for worldwide delivery",
      icon: Globe,
      stats: "50+ Countries"
    },
    {
      title: "Technical Expertise",
      description: "Deep technical knowledge and engineering capabilities across multiple manufacturing processes",
      icon: Award,
      stats: "20+ Years Experience"
    }
  ];

  const processStats = [
    { icon: <Factory className="w-8 h-8" />, value: "185+", label: "Projects Completed" },
    { icon: <Globe className="w-8 h-8" />, value: "50+", label: "Countries Served" },
    { icon: <Shield className="w-8 h-8" />, value: "99.8%", label: "Quality Rate" },
    { icon: <Clock className="w-8 h-8" />, value: "98%", label: "On-Time Delivery" },
    { icon: <Users className="w-8 h-8" />, value: "200+", label: "Expert Engineers" },
    { icon: <Award className="w-8 h-8" />, value: "20+", label: "Years Experience" }
  ];

  // Animation hooks for different sections
  const heroAnimation = useScrollAnimation(0.1);
  const overviewAnimation = useScrollAnimation(0.2);
  const processAnimation = useScrollAnimation(0.1);
  const benefitsAnimation = useScrollAnimation(0.2);
  const statsAnimation = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative text-white py-24 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${precisionMachining})` }}
        ></div>
        
        {/* Enhanced Backdrop Filter Overlay */}
        <div className="absolute inset-0 glass-morphism-navy-orange"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={heroAnimation.ref}
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-block mb-4">
              <Badge variant="secondary" className="glass-badge text-white px-4 py-2 font-semibold text-sm uppercase tracking-widest">
                Our Methodology
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Our Process
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md max-w-4xl mx-auto leading-relaxed">
              A comprehensive 5-step systematic approach to manufacturing excellence, ensuring quality, efficiency, 
              and customer satisfaction at every stage of your project from concept to delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="glass-badge text-white px-6 py-3 font-semibold text-base">
                <Star className="w-5 h-5 mr-2" />
                Quality Assured
              </Badge>
              <Badge variant="secondary" className="glass-badge text-white px-6 py-3 font-semibold text-base">
                <Check className="w-5 h-5 mr-2" />
                Transparent Process
              </Badge>
              <Badge variant="secondary" className="glass-badge text-white px-6 py-3 font-semibold text-base">
                <ArrowRight className="w-5 h-5 mr-2" />
                On-Time Delivery
              </Badge>
            </div>
            
            {/* Process Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="glass-badge p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-sm text-white/80">Process Steps</div>
              </div>
              <div className="glass-badge p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">99.8%</div>
                <div className="text-sm text-white/80">Quality Rate</div>
              </div>
              <div className="glass-badge p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/80">On-Time Delivery</div>
              </div>
              <div className="glass-badge p-4 rounded-lg">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full -translate-x-20 translate-y-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full translate-x-16 -translate-y-16 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Process Overview Section */}
          <section 
            ref={overviewAnimation.ref}
            className={`mb-20 transition-all duration-1000 delay-200 ${
              overviewAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Badge variant="outline" className="px-4 py-2 font-semibold text-primary border-primary">
                  Process Overview
                </Badge>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our 5-Step Excellence Process</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From initial feasibility study to final delivery, our structured approach ensures consistent quality, 
                transparent communication, and complete customer satisfaction at every milestone.
              </p>
            </div>

            {/* Interactive Process Flow */}
            <div className="relative max-w-6xl mx-auto mb-16">
              {/* Process Flow Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="relative group">
                      {/* Connection Line */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform translate-x-2 z-0"></div>
                      )}
                      
                      {/* Step Card */}
                      <Card className="relative bg-white border-2 border-gray-200 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          {/*<div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">*/}
                          {/*  {step.id}*/}
                          {/*</div>*/}
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {step.description.substring(0, 80)}...
                          </p>
                          {/*<div className="text-xs text-primary font-semibold">*/}
                          {/*  {step.duration}*/}
                          {/*</div>*/}
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>

              {/* Process Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {processStats.slice(0, 4).map((stat, index) => (
                  <Card key={index} className="p-6 text-center bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="text-primary mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </Card>
                ))}
                  </div>
                </div>
          </section>

          {/* Detailed Process Steps Section */}
          <section 
            ref={processAnimation.ref}
            className={`transition-all duration-1000 delay-400 ${
              processAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <Badge variant="outline" className="px-4 py-2 font-semibold text-primary border-primary">
                  Detailed Process
                </Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Step-by-Step Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each step is meticulously designed to ensure maximum efficiency, quality, and customer satisfaction
              </p>
              </div>

            {/* Process Steps with Enhanced Design */}
            <div className="space-y-20">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                const stepAnimation = useScrollAnimation(0.1);
                
                return (
                  <div 
                    key={step.id} 
                    ref={stepAnimation.ref}
                    className={`transition-all duration-1000 delay-${index * 200} ${
                      stepAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    {/* Content */}
                    <div className="flex-1">
                        <Card className="bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                          {/* Step Header */}
                          <CardHeader className="pb-4">
                          <div className="flex items-center gap-4 mb-4">
                              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg relative overflow-hidden">
                                <Icon className="w-8 h-8 relative z-10" />
                            </div>
                            <div>
                                <CardTitle className="text-3xl text-gray-800 mb-2">
                                Step {step.id}: {step.title}
                              </CardTitle>
                                {/*<div className="flex items-center gap-2">*/}
                                {/*  <Clock className="w-4 h-4 text-gray-500" />*/}
                                {/*  <span className="text-gray-600 font-medium">{step.duration}</span>*/}
                                {/*</div>*/}
                              </div>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                          </CardHeader>

                          {/* Sub-Processes */}
                          <CardContent className="space-y-6">
                            <div className="space-y-4">
                              {step.subProcesses.map((subProcess, subIndex) => (
                                <div key={subIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    {subProcess.title}
                                  </h4>
                                  <p className="text-gray-600 text-sm mb-3">{subProcess.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {subProcess.details.map((detail, detailIndex) => (
                                      <div key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-3 h-3 text-gray-600 mt-1 flex-shrink-0" />
                                        <span>{detail}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                          </div>

                            {/* Deliverables */}
                            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Package className="w-4 h-4 text-gray-700" />
                                Key Deliverables
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {step.deliverables.map((deliverable, deliverableIndex) => (
                                  <div key={deliverableIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                    <FileText className="w-3 h-3 text-gray-600" />
                                    <span>{deliverable}</span>
                              </div>
                            ))}
                              </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                      {/* Visual Content */}
                    <div className="flex-1">
                      <div className="relative">
                          {/* Main Visual */}
                          <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden group">
                            <div className="aspect-video bg-gray-50 flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                  <Icon className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm max-w-xs mx-auto">{step.description.substring(0, 100)}...</p>
                              </div>
                            </div>
                            
                            {/* Animated Background Elements */}
                            <div className="absolute inset-0 opacity-10">
                              <div className="absolute top-4 right-4 w-8 h-8 bg-gray-600 rounded-full animate-bounce"></div>
                              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gray-600 rounded-full animate-pulse"></div>
                              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gray-600 rounded-full animate-ping"></div>
                            </div>
                          </div>

                          {/* Step Number Badge */}
                          <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gray-800">
                            <span className="text-gray-800 font-bold text-2xl">{step.id}</span>
                              </div>

                          {/* Progress Indicator */}
                          <div className="absolute -bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg border">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="font-medium">Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          </div>

          {/* Enhanced Benefits Section */}
          <section 
            ref={benefitsAnimation.ref}
            className={`bg-gradient-to-br from-gray-50 to-gray-100 py-20 rounded-3xl transition-all duration-1000 delay-600 ${
              benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <Badge variant="outline" className="px-4 py-2 font-semibold text-primary border-primary">
                    Why Choose Us
                  </Badge>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Our Process?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our systematic approach delivers exceptional results for every project, combining cutting-edge 
                  technology with proven methodologies to ensure your success.
              </p>
            </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                  const benefitAnimation = useScrollAnimation(0.1);
                return (
                    <div
                      key={index}
                      ref={benefitAnimation.ref}
                      className={`transition-all duration-700 delay-${index * 100} ${
                        benefitAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                    >
                      <Card className="text-center bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden group">
                        <CardContent className="p-8 relative">
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Icon with Animation */}
                          <div className="relative z-10">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                              <Icon className="w-10 h-10 relative z-10" />
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                            
                            {/* Stats Badge */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                              <BarChart3 className="w-4 h-4" />
                              {benefit.stats}
                            </div>
                      </div>
                    </CardContent>
                  </Card>
                    </div>
                );
              })}
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section 
            ref={statsAnimation.ref}
            className={`bg-gradient-to-r from-primary to-primary/90 text-white py-20 rounded-3xl relative overflow-hidden transition-all duration-1000 delay-800 ${
              statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-block mb-6">
                  <Badge variant="secondary" className="glass-badge text-white px-6 py-3 font-semibold text-base">
                    Get Started Today
                  </Badge>
                </div>
                <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Let us guide you through our proven 5-step process to deliver exceptional manufacturing solutions. 
                  Our expert team is ready to transform your ideas into reality with precision and excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  >
                    <FileText className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Get a Detailed Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Schedule Consultation
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="glass-badge p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white mb-1">24h</div>
                    <div className="text-sm text-white/80">Response Time</div>
                  </div>
                  <div className="glass-badge p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white mb-1">Free</div>
                    <div className="text-sm text-white/80">Initial Consultation</div>
                  </div>
                  <div className="glass-badge p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white mb-1">Global</div>
                    <div className="text-sm text-white/80">Delivery Network</div>
                  </div>
                  <div className="glass-badge p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white mb-1">ISO</div>
                    <div className="text-sm text-white/80">Quality Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;
