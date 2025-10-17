import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, CheckCircle, FileCheck } from "lucide-react";
import isoCertificate from "../assets/certificates/ISO.pdf";
import importExportCertificate from "../assets/certificates/ImportExport.pdf";
import msmeCertificate from "../assets/certificates/MSME.pdf";

const Certificates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 glass-morphism-orange"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-2 glass-badge text-white rounded-full text-sm font-semibold mb-4">
                Quality Control & Testing
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Quality Certificates & Certifications</h1>
              <p className="text-xl text-white/95 drop-shadow-md">Industry-recognized quality standards and certifications</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Award className="w-20 h-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Committed to Quality Excellence</h2>
              <p className="text-gray-700 text-lg">
                Our certifications demonstrate our commitment to maintaining the highest standards of quality, safety, and environmental responsibility in manufacturing.
              </p>
            </div>

            <div className="flex justify-center mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">ISO 9001:2015</h3>
                <p className="text-gray-700">
                  Quality Management System certification ensuring consistent product quality and customer satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <FileCheck className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Certificates Gallery</h3>
                <p className="text-gray-700">Our official certifications and licenses</p>
              </div>

              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow max-w-md">
                  <h4 className="text-lg font-semibold mb-4 text-center">ISO 9001:2015</h4>
                  <p className="text-sm text-gray-600 text-center mb-4">Quality Management System</p>
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <iframe 
                      src={isoCertificate}
                      className="w-full h-full border-0"
                      title="ISO 9001:2015 Certificate"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-center">Our Quality Commitment</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Continuous Improvement</h4>
                  <p className="text-gray-700">
                    We are committed to continuous improvement in all aspects of our operations, from manufacturing processes to customer service.
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Customer Focus</h4>
                  <p className="text-gray-700">
                    Our certifications reflect our dedication to understanding and meeting customer requirements and expectations.
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Regulatory Compliance</h4>
                  <p className="text-gray-700">
                    We maintain compliance with all applicable industry regulations and standards across all our manufacturing facilities.
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Employee Training</h4>
                  <p className="text-gray-700">
                    Regular training and skill development programs ensure our team stays current with best practices and standards.
                  </p>
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

export default Certificates;

