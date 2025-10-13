import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import spectroImg from "../assets/Q.C. Measures/Spectro-Metal Analysis.jpeg";

const SpectroAnalysis = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Spectro Analysis</h1>
              <p className="text-xl text-gray-600">Precise chemical composition verification</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={spectroImg} 
                  alt="Spectro Metal Analysis" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Optical Emission Spectrometry</h2>
                <p className="text-gray-700 mb-4">
                  Spectrometric analysis, also known as Optical Emission Spectroscopy (OES), is a rapid and accurate method for determining the chemical composition of metallic materials. This technique is essential for material verification, quality control, and ensuring compliance with specifications.
                </p>
                <p className="text-gray-700 mb-6">
                  Our advanced spectrometer analyzes the elemental composition of metals by measuring the wavelengths of light emitted from a sample when excited by an electrical arc or spark, providing results in seconds with high precision.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Rapid analysis (30-60 seconds per sample)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Non-destructive testing (minimal surface damage)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>High accuracy (±0.01% for major elements)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Simultaneous multi-element analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Material grade verification and identification</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Detectable Elements</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Major Elements</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Carbon (C)</li>
                    <li>• Silicon (Si)</li>
                    <li>• Manganese (Mn)</li>
                    <li>• Phosphorus (P)</li>
                    <li>• Sulfur (S)</li>
                    <li>• Chromium (Cr)</li>
                    <li>• Nickel (Ni)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Alloying Elements</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Molybdenum (Mo)</li>
                    <li>• Copper (Cu)</li>
                    <li>• Aluminum (Al)</li>
                    <li>• Titanium (Ti)</li>
                    <li>• Vanadium (V)</li>
                    <li>• Tungsten (W)</li>
                    <li>• Cobalt (Co)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Trace Elements</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Boron (B)</li>
                    <li>• Niobium (Nb)</li>
                    <li>• Tin (Sn)</li>
                    <li>• Lead (Pb)</li>
                    <li>• Zinc (Zn)</li>
                    <li>• Arsenic (As)</li>
                    <li>• Zirconium (Zr)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Non-Ferrous</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Magnesium (Mg)</li>
                    <li>• Iron (Fe)</li>
                    <li>• Bismuth (Bi)</li>
                    <li>• Antimony (Sb)</li>
                    <li>• Cadmium (Cd)</li>
                    <li>• Lithium (Li)</li>
                    <li>• Rare earth elements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Analysis Process</h3>
              <div className="grid md:grid-cols-6 gap-3">
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">1</div>
                  <h4 className="font-semibold mb-1 text-xs">Sample Prep</h4>
                  <p className="text-xs text-gray-700">Clean, flat surface</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">2</div>
                  <h4 className="font-semibold mb-1 text-xs">Calibration</h4>
                  <p className="text-xs text-gray-700">Standard verification</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">3</div>
                  <h4 className="font-semibold mb-1 text-xs">Excitation</h4>
                  <p className="text-xs text-gray-700">Spark generation</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">4</div>
                  <h4 className="font-semibold mb-1 text-xs">Detection</h4>
                  <p className="text-xs text-gray-700">Light spectrum capture</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">5</div>
                  <h4 className="font-semibold mb-1 text-xs">Analysis</h4>
                  <p className="text-xs text-gray-700">Data processing</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">6</div>
                  <h4 className="font-semibold mb-1 text-xs">Report</h4>
                  <p className="text-xs text-gray-700">Results generation</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Applications in Manufacturing</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-xl font-semibold mb-3">Incoming Inspection</h4>
                  <p className="text-gray-700 mb-3">
                    Verification of raw material chemistry before processing.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Bar stock verification</li>
                    <li>• Plate and sheet confirmation</li>
                    <li>• Casting alloy verification</li>
                    <li>• Grade identification (PMI)</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-xl font-semibold mb-3">Process Control</h4>
                  <p className="text-gray-700 mb-3">
                    In-process monitoring to ensure consistent alloy composition.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Melt composition control</li>
                    <li>• Heat-to-heat verification</li>
                    <li>• Alloying element monitoring</li>
                    <li>• Scrap sorting and verification</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-xl font-semibold mb-3">Final Certification</h4>
                  <p className="text-gray-700 mb-3">
                    Complete chemical analysis for material test certificates.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Material Test Reports (MTR)</li>
                    <li>• Mill certificate verification</li>
                    <li>• Compliance documentation</li>
                    <li>• Traceability records</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Material Coverage</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Ferrous Metals</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-semibold mb-1">Carbon & Alloy Steels</p>
                      <p className="text-sm text-gray-700">Low, medium, and high carbon grades; AISI/SAE designations</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-semibold mb-1">Stainless Steels</p>
                      <p className="text-sm text-gray-700">Austenitic (300 series), Ferritic (400 series), Duplex, Martensitic</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-semibold mb-1">Cast Irons</p>
                      <p className="text-sm text-gray-700">Gray iron, ductile iron (SG), white iron, malleable iron</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-semibold mb-1">Tool Steels</p>
                      <p className="text-sm text-gray-700">High-speed steel, die steels, special purpose grades</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Non-Ferrous Metals</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-semibold mb-1">Aluminum Alloys</p>
                      <p className="text-sm text-gray-700">Cast and wrought aluminum alloys, 2xxx, 6xxx, 7xxx series</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-semibold mb-1">Copper Alloys</p>
                      <p className="text-sm text-gray-700">Brass, bronze, copper-nickel, beryllium copper</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-semibold mb-1">Nickel Alloys</p>
                      <p className="text-sm text-gray-700">Inconel, Monel, Hastelloy, nickel-based superalloys</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-semibold mb-1">Other Alloys</p>
                      <p className="text-sm text-gray-700">Titanium, zinc, magnesium, cobalt-based alloys</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Spectrometer Report Includes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Chemical Composition Data:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Percentage of each detected element</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Specification limits and tolerances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Comparison with standard grades (e.g., ASTM, EN, JIS)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Material grade identification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Pass/fail status for each element</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Quality Documentation:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Sample identification and traceability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Test date, time, and operator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Instrument model and serial number</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Calibration standard reference</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Digital signature and approval</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Quality Assurance</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-4xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-2">Certified Standards</h4>
                  <p className="text-sm text-gray-700">NIST-traceable reference materials</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-4xl mb-2">🔧</div>
                  <h4 className="font-semibold mb-2">Regular Calibration</h4>
                  <p className="text-sm text-gray-700">Daily standardization checks</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-4xl mb-2">📊</div>
                  <h4 className="font-semibold mb-2">Quality Control</h4>
                  <p className="text-sm text-gray-700">Control sample verification</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-4xl mb-2">👨‍🔬</div>
                  <h4 className="font-semibold mb-2">Trained Operators</h4>
                  <p className="text-sm text-gray-700">Certified technicians</p>
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

export default SpectroAnalysis;

