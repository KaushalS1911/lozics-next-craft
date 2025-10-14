import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import corrosionImg from "../assets/Q.C. Measures/Corrosion Test.jpg";

const CorrosionTesting = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Corrosion Testing</h1>
              <p className="text-xl text-white/95 drop-shadow-md">Comprehensive corrosion resistance evaluation</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Understanding Corrosion Resistance</h2>
                <p className="text-gray-700 mb-4">
                  Corrosion testing is essential for evaluating how materials perform in various environmental conditions. These tests simulate real-world exposure to corrosive environments, helping predict product lifespan and ensure reliability in demanding applications.
                </p>
                <p className="text-gray-700 mb-6">
                  Our comprehensive corrosion testing program includes multiple test methods to assess resistance to atmospheric corrosion, chemical attack, galvanic corrosion, and stress corrosion cracking.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Why Corrosion Testing?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Predict product service life</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Validate coating and surface treatment effectiveness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Compare material alternatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Meet industry specifications and standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Quality control for manufacturing processes</span>
                  </li>
                </ul>
              </div>

              <div>
                <img 
                  src={corrosionImg} 
                  alt="Corrosion Testing" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Types of Corrosion Tests</h3>
              <div className="grid md:grid-cols-2 gap-8">
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-3 text-primary">Salt Spray (Fog) Test</h4>
                  <p className="text-gray-700 mb-4">
                    Accelerated corrosion test using a salt-laden fog to evaluate coating performance and material corrosion resistance.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Test Conditions:</h5>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>• Temperature: 35°C ±2°C</li>
                    <li>• Salt concentration: 5% NaCl solution</li>
                    <li>• pH: 6.5-7.2</li>
                    <li>• Continuous spray exposure</li>
                    <li>• Duration: 24 to 1000+ hours</li>
                  </ul>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-sm"><strong>Standards:</strong> ASTM B117, ISO 9227</p>
                    <p className="text-sm"><strong>Applications:</strong> Painted surfaces, plated parts, coatings</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-3 text-primary">Cyclic Corrosion Test</h4>
                  <p className="text-gray-700 mb-4">
                    More realistic test that alternates between different environmental conditions to better simulate real-world exposure.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Typical Cycles Include:</h5>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>• Salt spray exposure</li>
                    <li>• Humidity phases (95% RH)</li>
                    <li>• Dry-off periods</li>
                    <li>• Ambient temperature exposure</li>
                    <li>• Optional UV exposure</li>
                  </ul>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-sm"><strong>Standards:</strong> SAE J2334, GMW 14872, VDA 233-102</p>
                    <p className="text-sm"><strong>Applications:</strong> Automotive, outdoor equipment</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-3 text-primary">Humidity Testing</h4>
                  <p className="text-gray-700 mb-4">
                    Evaluates material and coating performance under constant high-humidity conditions without salt exposure.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Test Parameters:</h5>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>• Relative humidity: 85-100%</li>
                    <li>• Temperature: 40°C or 85°C</li>
                    <li>• Continuous or cyclic exposure</li>
                    <li>• Duration: 48 to 1000+ hours</li>
                  </ul>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-sm"><strong>Standards:</strong> ASTM D2247, ISO 6270</p>
                    <p className="text-sm"><strong>Applications:</strong> Electronics, coatings, adhesives</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-3 text-primary">Immersion Testing</h4>
                  <p className="text-gray-700 mb-4">
                    Direct immersion in corrosive solutions to evaluate material resistance to specific chemical environments.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Test Solutions:</h5>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>• Acidic solutions (HCl, H₂SO₄)</li>
                    <li>• Alkaline solutions (NaOH)</li>
                    <li>• Salt solutions (various concentrations)</li>
                    <li>• Industrial chemicals</li>
                    <li>• Seawater or synthetic seawater</li>
                  </ul>

                  <div className="bg-primary/10 p-3 rounded">
                    <p className="text-sm"><strong>Standards:</strong> ASTM G31, ASTM G1</p>
                    <p className="text-sm"><strong>Applications:</strong> Chemical processing, marine applications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Evaluation Methods</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Visual Assessment</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Rust/corrosion grading (ASTM D610)</li>
                    <li>• Blister rating (ASTM D714)</li>
                    <li>• Pitting evaluation</li>
                    <li>• Color change assessment</li>
                    <li>• Photographic documentation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Weight Loss</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Pre-test specimen weighing</li>
                    <li>• Post-test cleaning and weighing</li>
                    <li>• Corrosion rate calculation (mpy, mm/year)</li>
                    <li>• Statistical analysis</li>
                    <li>• Comparison with acceptance criteria</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Coating Adhesion</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Cross-hatch adhesion test</li>
                    <li>• Tape test (ASTM D3359)</li>
                    <li>• Pull-off adhesion (ASTM D4541)</li>
                    <li>• Scribe creep measurement</li>
                    <li>• Delamination assessment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Specialized Corrosion Tests</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Intergranular Corrosion</h4>
                  <p className="text-sm text-gray-700">Susceptibility testing for stainless steels (ASTM A262)</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Pitting Resistance</h4>
                  <p className="text-sm text-gray-700">Electrochemical testing for localized corrosion</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Stress Corrosion Cracking</h4>
                  <p className="text-sm text-gray-700">Combined stress and corrosive environment (ASTM G36)</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Galvanic Corrosion</h4>
                  <p className="text-sm text-gray-700">Dissimilar metal compatibility testing</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Industry-Specific Requirements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Automotive</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• GMW3286 - Cyclic corrosion test</li>
                    <li>• SAE J2334 - Cosmetic corrosion</li>
                    <li>• ISO 11474 - Corrosion test for wheeled vehicles</li>
                    <li>• 480-1000 hours typical duration</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Aerospace</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• RTCA DO-160 - Environmental testing</li>
                    <li>• MIL-STD-810 - Salt fog exposure</li>
                    <li>• Boeing and Airbus specifications</li>
                    <li>• Extended duration requirements</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">Marine</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• ASTM B117 - 1000+ hours</li>
                    <li>• ISO 12944 - Corrosivity categories</li>
                    <li>• DNV standards for offshore</li>
                    <li>• Seawater immersion tests</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Test Report Package</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Comprehensive Documentation:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Test parameters and conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Before and after photographs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Visual rating per standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Weight loss data (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Coating adhesion test results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Pass/fail determination</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Quality Assurance:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Chamber calibration certificates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Solution pH and concentration verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Temperature and humidity monitoring charts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Specimen preparation procedures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Test duration log</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Certified technician signatures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Our Testing Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">🔬</span>
                  <div>
                    <h4 className="font-semibold mb-1">Multiple Test Chambers</h4>
                    <p className="text-gray-700">Capacity for simultaneous testing of various conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">📏</span>
                  <div>
                    <h4 className="font-semibold mb-1">Calibrated Equipment</h4>
                    <p className="text-gray-700">Regular calibration to national standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">📋</span>
                  <div>
                    <h4 className="font-semibold mb-1">Standard Compliance</h4>
                    <p className="text-gray-700">ASTM, ISO, SAE, and custom protocols</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">⏱️</span>
                  <div>
                    <h4 className="font-semibold mb-1">Extended Duration Testing</h4>
                    <p className="text-gray-700">Capability for tests exceeding 2000 hours</p>
                  </div>
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

export default CorrosionTesting;

