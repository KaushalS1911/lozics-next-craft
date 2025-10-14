import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import inspectionImg from "../assets/Q.C. Measures/Inspection Reports.jpeg";

const InspectionReports = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Final Inspection Reports</h1>
              <p className="text-xl text-white/95 drop-shadow-md">Comprehensive quality verification and documentation</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={inspectionImg} 
                  alt="Final Inspection Reports" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Complete Quality Documentation</h2>
                <p className="text-gray-700 mb-4">
                  Our Final Inspection Reports provide comprehensive documentation of all quality checks performed on finished products. These detailed reports serve as objective evidence of product conformity and quality assurance.
                </p>
                <p className="text-gray-700 mb-6">
                  Each report is systematically compiled to meet industry standards and customer requirements, ensuring full traceability and transparency in our quality control processes.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Report Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Complete dimensional verification data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Material certification and test results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Visual inspection findings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Functional and performance test data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Digital photographs and documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Report Components</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Dimensional Data</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• CMM measurement results</li>
                    <li>• Caliper & micrometer readings</li>
                    <li>• Thread verification</li>
                    <li>• Surface finish measurements</li>
                    <li>• Geometric tolerance verification</li>
                    <li>• Pass/Fail status for each dimension</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Material Verification</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Material test certificates (MTC)</li>
                    <li>• Chemical composition analysis</li>
                    <li>• Mechanical property test results</li>
                    <li>• Heat treatment certifications</li>
                    <li>• Hardness test data</li>
                    <li>• Material traceability</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Quality Checks</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Visual inspection checklist</li>
                    <li>• Surface defect evaluation</li>
                    <li>• Functional testing results</li>
                    <li>• Packaging inspection</li>
                    <li>• Label and marking verification</li>
                    <li>• Final approval signatures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Inspection Process Flow</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <h4 className="font-semibold mb-2 text-sm">Receiving</h4>
                  <p className="text-xs text-gray-700">Parts received from production</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <h4 className="font-semibold mb-2 text-sm">Visual Check</h4>
                  <p className="text-xs text-gray-700">Surface and appearance inspection</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <h4 className="font-semibold mb-2 text-sm">Dimensional</h4>
                  <p className="text-xs text-gray-700">Measurement and verification</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                  <h4 className="font-semibold mb-2 text-sm">Documentation</h4>
                  <p className="text-xs text-gray-700">Report compilation</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">5</div>
                  <h4 className="font-semibold mb-2 text-sm">Approval</h4>
                  <p className="text-xs text-gray-700">QC manager sign-off</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Standard Report Formats</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-4">PPAP Documentation</h4>
                  <p className="text-gray-700 mb-3">
                    Production Part Approval Process (PPAP) package including:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Design Records & Engineering Changes</li>
                    <li>• Process Flow Diagrams</li>
                    <li>• PFMEA & Control Plans</li>
                    <li>• Dimensional Results (Full layout inspection)</li>
                    <li>• Material Test Reports</li>
                    <li>• Performance Test Results</li>
                    <li>• MSA (Measurement System Analysis)</li>
                    <li>• PSW (Part Submission Warrant)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-4">FAI Report</h4>
                  <p className="text-gray-700 mb-3">
                    First Article Inspection (FAI) per AS9102 including:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Form 1: Part Number Accountability</li>
                    <li>• Form 2: Product Accountability</li>
                    <li>• Form 3: Characteristic Accountability</li>
                    <li>• Dimensional measurement data</li>
                    <li>• Material certifications</li>
                    <li>• Special process certifications</li>
                    <li>• Functional test results</li>
                    <li>• Engineering approval</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Digital Capabilities</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-4xl mb-2">📊</div>
                  <h4 className="font-semibold mb-2">Digital Reports</h4>
                  <p className="text-sm text-gray-700">PDF format with searchable data</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-4xl mb-2">📸</div>
                  <h4 className="font-semibold mb-2">Photo Documentation</h4>
                  <p className="text-sm text-gray-700">High-resolution images embedded</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-4xl mb-2">📈</div>
                  <h4 className="font-semibold mb-2">Statistical Data</h4>
                  <p className="text-sm text-gray-700">Cpk, Cp, and SPC charts</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-4xl mb-2">🔒</div>
                  <h4 className="font-semibold mb-2">Secure Archive</h4>
                  <p className="text-sm text-gray-700">Cloud-based record retention</p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Quality Standards Compliance</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold mb-2">ISO 9001:2015</h4>
                  <p className="text-sm text-gray-700">Quality management system documentation requirements</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold mb-2">IATF 16949</h4>
                  <p className="text-sm text-gray-700">Automotive quality management and PPAP</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold mb-2">AS9100</h4>
                  <p className="text-sm text-gray-700">Aerospace quality and FAI requirements</p>
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

export default InspectionReports;

