import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import microImg from "../assets/Q.C. Measures/microstructure-analysis.webp";

const MicrostructureAnalysis = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Microstructure Analysis</h1>
              <p className="text-xl text-gray-600">Metallographic examination and grain structure evaluation</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Understanding Material Microstructure</h2>
                <p className="text-gray-700 mb-4">
                  Microstructure analysis is a critical metallurgical examination technique that reveals the internal structure of materials at the microscopic level. This analysis provides vital information about grain size, phase distribution, inclusions, and defects that directly influence mechanical properties.
                </p>
                <p className="text-gray-700 mb-6">
                  Our state-of-the-art metallography laboratory is equipped with advanced optical and digital microscopes, enabling us to examine materials at magnifications up to 1000X and provide detailed metallurgical reports.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Heat treatment verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Casting quality evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Failure analysis investigation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Material qualification and approval</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Process control and optimization</span>
                  </li>
                </ul>
              </div>

              <div>
                <img 
                  src={microImg} 
                  alt="Microstructure Analysis" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Examination Process</h3>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <h4 className="font-semibold mb-2 text-sm">Sampling</h4>
                  <p className="text-xs text-gray-700">Representative section extraction</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <h4 className="font-semibold mb-2 text-sm">Mounting</h4>
                  <p className="text-xs text-gray-700">Hot or cold resin mounting</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <h4 className="font-semibold mb-2 text-sm">Grinding & Polishing</h4>
                  <p className="text-xs text-gray-700">Multi-step surface preparation</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                  <h4 className="font-semibold mb-2 text-sm">Etching</h4>
                  <p className="text-xs text-gray-700">Chemical revelation of structure</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">5</div>
                  <h4 className="font-semibold mb-2 text-sm">Microscopy</h4>
                  <p className="text-xs text-gray-700">Examination and documentation</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">What We Analyze</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Grain Structure</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Grain size determination (ASTM E112)</li>
                    <li>• Grain boundary characteristics</li>
                    <li>• Grain orientation and texture</li>
                    <li>• Equiaxed vs columnar grains</li>
                    <li>• Abnormal grain growth</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Phase Identification</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Ferrite, pearlite, martensite</li>
                    <li>• Austenite retention</li>
                    <li>• Carbide distribution</li>
                    <li>• Intermetallic phases</li>
                    <li>• Secondary phase particles</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Defect Detection</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Porosity and voids</li>
                    <li>• Non-metallic inclusions</li>
                    <li>• Shrinkage cavities</li>
                    <li>• Cracks and microcracks</li>
                    <li>• Segregation bands</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Material-Specific Analysis</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Cast Iron Analysis</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Graphite Shape:</strong> Nodularity count (SG iron), flake size and distribution (gray iron)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Matrix Structure:</strong> Ferrite-pearlite ratio, carbide presence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Nodularity:</strong> ASTM A247 rating (SG iron)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Nodule Count:</strong> Per mm² measurement</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Steel & Stainless Steel</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Heat Treatment:</strong> Verification of hardening, tempering, annealing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Decarburization:</strong> Surface carbon depletion depth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Case Depth:</strong> Carburized or hardened layer thickness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Sigma Phase:</strong> Detection in stainless steels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Standards & Specifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">ASTM E3</h4>
                  <p className="text-sm text-gray-700">Standard guide for preparation of metallographic specimens</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">ASTM E112</h4>
                  <p className="text-sm text-gray-700">Determining average grain size</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">ASTM E45</h4>
                  <p className="text-sm text-gray-700">Determining inclusion content of steel</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">ISO 945</h4>
                  <p className="text-sm text-gray-700">Microstructure of cast irons</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Advanced Techniques</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Digital Microscopy</h4>
                  <p className="text-gray-700 mb-3">
                    High-resolution digital imaging with advanced image analysis software for quantitative measurements.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Automated grain size measurement</li>
                    <li>• Phase fraction quantification</li>
                    <li>• Inclusion rating and classification</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Polarized Light</h4>
                  <p className="text-gray-700 mb-3">
                    Specialized illumination for enhanced contrast of certain phases and structures in specific materials.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Cast iron graphite imaging</li>
                    <li>• Grain structure enhancement</li>
                    <li>• Ceramic and composite analysis</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">SEM Analysis</h4>
                  <p className="text-gray-700 mb-3">
                    Scanning Electron Microscopy for ultra-high magnification and elemental analysis (when required).
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fracture surface examination</li>
                    <li>• Particle identification</li>
                    <li>• EDS elemental mapping</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Metallography Report Includes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Documentation:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>High-resolution micrographs at multiple magnifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Detailed description of microstructural features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Quantitative measurements (grain size, phase %, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Comparison with specification requirements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Quality Information:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Etching procedure and reagents used</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Microscope type and magnification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Analyst credentials and signature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Pass/fail assessment against criteria</span>
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

export default MicrostructureAnalysis;

