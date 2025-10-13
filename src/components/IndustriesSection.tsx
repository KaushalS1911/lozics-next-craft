import { useNavigate } from "react-router-dom";
import { Card } from "./ui/card";

const industries = [
  {
    id: 1,
    title: "Transportation",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        <rect x="2" y="9" width="6" height="6" rx="1" />
        <circle cx="5" cy="12" r="1" />
        <circle cx="5" cy="15" r="1" />
      </svg>
    ),
    description: "Rail, road, and multimodal transportation solutions"
  },
  {
    id: 2,
    title: "Plumbing",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v16M16 4v16" />
        <circle cx="8" cy="6" r="2" />
        <circle cx="16" cy="6" r="2" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="16" cy="18" r="2" />
      </svg>
    ),
    description: "Commercial and residential plumbing systems"
  },
  {
    id: 3,
    title: "Pumps & Valves",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" />
        <circle cx="12" cy="8" r="2" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
    description: "Industrial pumps and valve systems"
  },
  {
    id: 4,
    title: "Energy",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12" />
      </svg>
    ),
    description: "Power generation and energy distribution"
  },
  {
    id: 5,
    title: "Mining",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="8" r="1" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    description: "Mining equipment and extraction systems"
  },
  {
    id: 6,
    title: "General Engineering",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: "Comprehensive engineering solutions"
  },
  {
    id: 7,
    title: "Oil & Gas",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    description: "Petroleum and natural gas industry solutions"
  },
  {
    id: 8,
    title: "Automotive Manufacturing",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        <circle cx="9" cy="9" r="2" />
        <circle cx="15" cy="9" r="2" />
      </svg>
    ),
    description: "Automotive production and assembly systems"
  },
  {
    id: 9,
    title: "Hardware",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Hardware components and systems"
  },
  {
    id: 10,
    title: "Commercial Plumbing",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: "Large-scale commercial plumbing systems"
  },
  {
    id: 11,
    title: "Hydraulic",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    description: "Hydraulic systems and components"
  },
  {
    id: 12,
    title: "Agricultural Equipment",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2-2 3 3 4-4" />
      </svg>
    ),
    description: "Farm machinery and agricultural systems"
  }
];

export const IndustriesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Served
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With decades of experience, we provide comprehensive solutions across diverse industries, 
            delivering excellence and reliability to meet your specific needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Card 
              key={industry.id}
              className="group p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-white"
            >
              <div className="flex flex-col items-center">
                {/* Icon Container */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary group-hover:text-primary/80 transition-colors duration-300">
                    {industry.icon}
                  </div>
                </div>
                
                {/* Industry Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                
                {/* Industry Description */}
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your industry? We're always expanding our expertise.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1" onClick={() => navigate("/contact")}>
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};
