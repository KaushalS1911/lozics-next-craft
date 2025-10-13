import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import pfmeaImg from "../assets/Q.C. Measures/PFMEA-CP-PFD.png";

const PFMEA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Quality Control & Testing
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">PFMEA, CP & PFD</h1>
              <p className="text-xl text-gray-600">Comprehensive process quality planning and risk management</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Process Quality Excellence</h2>
                <p className="text-gray-700 mb-4">
                  Our comprehensive quality planning approach integrates three critical tools: Process Failure Mode and Effects Analysis (PFMEA), Control Plans (CP), and Process Flow Diagrams (PFD). Together, these methodologies ensure robust process control and risk mitigation.
                </p>
                <p className="text-gray-700 mb-6">
                  This systematic approach helps us identify potential failures before they occur, establish effective controls, and maintain consistent product quality throughout the manufacturing process.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Key Components</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Proactive risk identification and mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Systematic process control documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Clear process visualization and workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Continuous improvement framework</span>
                  </li>
                </ul>
              </div>

              <div>
                <img 
                  src={pfmeaImg} 
                  alt="PFMEA, CP, PFD Documentation" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Our Quality Planning Tools</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">PFMEA</h4>
                  <p className="text-gray-700 mb-4">
                    Process Failure Mode and Effects Analysis identifies potential failures, their causes, and effects. We assign Risk Priority Numbers (RPN) to prioritize corrective actions.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Failure mode identification</li>
                    <li>• Severity assessment</li>
                    <li>• Occurrence probability</li>
                    <li>• Detection capability</li>
                    <li>• RPN calculation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Control Plan (CP)</h4>
                  <p className="text-gray-700 mb-4">
                    Detailed documentation of all process controls, inspection methods, and reaction plans to ensure consistent quality output.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Process parameters</li>
                    <li>• Product characteristics</li>
                    <li>• Measurement methods</li>
                    <li>• Sample size & frequency</li>
                    <li>• Reaction plans</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Process Flow Diagram</h4>
                  <p className="text-gray-700 mb-4">
                    Visual representation of the complete manufacturing process, showing all steps, decision points, and control measures.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Process sequence</li>
                    <li>• Inspection points</li>
                    <li>• Material flow</li>
                    <li>• Decision criteria</li>
                    <li>• Rework loops</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">PFMEA Development Process</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <h4 className="font-semibold mb-2 text-sm">Process Review</h4>
                  <p className="text-xs text-gray-700">Analyze each process step</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <h4 className="font-semibold mb-2 text-sm">Identify Failures</h4>
                  <p className="text-xs text-gray-700">Potential failure modes</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <h4 className="font-semibold mb-2 text-sm">Assess Risk</h4>
                  <p className="text-xs text-gray-700">Calculate RPN values</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                  <h4 className="font-semibold mb-2 text-sm">Define Actions</h4>
                  <p className="text-xs text-gray-700">Preventive measures</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">5</div>
                  <h4 className="font-semibold mb-2 text-sm">Monitor & Update</h4>
                  <p className="text-xs text-gray-700">Continuous improvement</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Control Plan Levels</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-xl font-semibold mb-3">Prototype</h4>
                  <p className="text-gray-700">
                    Controls for prototype builds and initial product development, focusing on dimensional and functional verification.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-xl font-semibold mb-3">Pre-Launch</h4>
                  <p className="text-gray-700">
                    Enhanced controls during pilot production runs, including additional measurements and 100% inspection of critical characteristics.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-xl font-semibold mb-3">Production</h4>
                  <p className="text-gray-700">
                    Optimized controls for full production, balancing quality assurance with manufacturing efficiency and cost effectiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Documentation & Benefits</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">What's Included</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Complete PFMEA with RPN calculations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Multi-level control plans (Prototype, Pre-Launch, Production)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Detailed process flow diagrams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Inspection and test procedures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Reaction plans for out-of-control situations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Reduced defect rates and customer complaints</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Lower warranty and rework costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Improved process capability and consistency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Enhanced team communication and knowledge sharing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>IATF 16949 and PPAP compliance</span>
                    </li>
                  </ul>
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

export default PFMEA;

