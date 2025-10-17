import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import ProductDevelopmentImg from '@/assets/product_development.avif';
import FeasibilityOfStudyImg from '@/assets/feasibility_of_study.jpeg';
import ManagementOfQualityImg from '@/assets/management_of_quality.jpeg';

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Feasibility Study",
      description: "Technical and Commercial Feasibility of parts and assemblies",
      details: [
        "Technical and Commercial Feasibility of parts and assemblies",
        "Recommendation of optimum process and material",
        "Study of material alternatives",
        "Scope clarifications",
        "Value Engineering",
        "Factory pre-qualification"
      ],
      image: FeasibilityOfStudyImg,
      gradient: "from-slate-700 to-slate-900"
    },
    {
      id: 2,
      title: "Quote & Finalisation",
      description: "Freeze technical specs prior to quote",
      details: [
        "Freeze technical specs prior to quote",
        "Clear quotations with clear scope",
        "Supply conditions",
        "Detailed contract review prior to start"
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80",
      gradient: "from-blue-700 to-blue-900"
    },
    {
      id: 3,
      title: "Product Development",
      description: "Project Management approach",
      details: [
        "Project Management approach",
        "Weekly updates of progress",
        "Complete qualification prior to Sample submission",
        "Acceptance criteria frozen"
      ],
      image: ProductDevelopmentImg,
      gradient: "from-indigo-700 to-indigo-900"
    },
    {
      id: 4,
      title: "Management of Quality",
      description: "Tight In-process quality control",
      details: [
        "Tight In-process quality control",
        "Acceptance standards implemented at factory",
        "Final inspection with material testing"
      ],
      image: ManagementOfQualityImg,
      gradient: "from-emerald-700 to-emerald-900"
    },
    {
      id: 5,
      title: "Suppliers & Logistics",
      description: "Supplier audits",
      details: [
        "Supplier audits",
        "Logistics management",
        "On-time delivery to your door"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
      gradient: "from-slate-700 to-slate-900"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
              Our Methodology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Our Process
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A systematic approach to excellence at every milestone
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 transform -translate-x-1/2"></div>
          
          {/* Timeline Items - Overlapping */}
          <div className="space-y-8 md:space-y-0 md:pb-32">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.id} 
                  className="relative group md:h-56"
                >
                  {/* Center Circle/Node */}
                  <div className="hidden md:block absolute left-1/2 top-12 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      {/* Outer pulsing ring */}
                      <div className="absolute inset-0 w-5 h-5 bg-primary/20 rounded-full animate-ping"></div>
                      {/* Main circle */}
                      <div className="relative w-5 h-5 bg-white border-3 border-primary rounded-full group-hover:scale-125 transition-transform duration-300">
                        <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Card */}
                    <div className={`${isEven ? 'md:col-start-1' : 'md:col-start-2'} mb-8 md:mb-0`}>
                      <Card className="relative bg-white border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden z-10">
                        {/* Step Number Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center font-bold text-base">
                            {step.id}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%] group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          
                          {/* Key Points */}
                          <div className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Connector Line (Horizontal from circle to card) */}
                    {/* <div className={`hidden md:block ${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}>
                      <div className={`relative h-24 flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                        <div className="w-8 h-[2px] bg-gray-300"></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4 text-sm">
            Want to learn more about our detailed process?
          </p>
          <Link to="/process">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 text-sm flex items-center gap-2 mx-auto transition-all duration-300 group">
              View Detailed Process
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ProcessSection };
