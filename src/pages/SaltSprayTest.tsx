import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import saltSprayImg from "../assets/Q.C. Measures/SST-Salt-spray-test-for-corrosion.jpg";

const SaltSprayTest = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Salt Spray Test (SST)</h1>
              <p className="text-xl text-gray-600">Accelerated corrosion testing for coating and material evaluation</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={saltSprayImg} 
                  alt="Salt Spray Test" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Neutral Salt Spray Testing</h2>
                <p className="text-gray-700 mb-4">
                  The Salt Spray Test (SST), also known as the Salt Fog Test, is the most widely used accelerated corrosion test method in the world. It provides a controlled, reproducible environment to evaluate the corrosion resistance of materials and protective coatings.
                </p>
                <p className="text-gray-700 mb-6">
                  Our salt spray testing chamber creates a highly corrosive atmosphere by atomizing a salt water solution into a fine mist, simulating years of natural exposure in a matter of hours or days.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Test Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Paint and coating evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Electroplated surface verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Anodized aluminum assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Zinc and zinc-alloy coating testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Quality control and production monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Test Parameters & Standards</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">ASTM B117 (NSS)</h4>
                  <p className="text-gray-700 mb-3 font-semibold">Neutral Salt Spray</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Temperature: 35°C ± 2°C</li>
                    <li>• Solution: 5% NaCl (by weight)</li>
                    <li>• pH: 6.5 - 7.2</li>
                    <li>• Continuous fog exposure</li>
                    <li>• Collection rate: 1-2 ml/hr/80cm²</li>
                    <li>• Most common test method</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">ASTM G85 (CASS)</h4>
                  <p className="text-gray-700 mb-3 font-semibold">Copper-Accelerated Acetic Acid</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Temperature: 50°C ± 2°C</li>
                    <li>• Solution: 5% NaCl + glacial acetic acid</li>
                    <li>• pH: 3.0 - 3.2</li>
                    <li>• Copper chloride added</li>
                    <li>• Accelerated testing</li>
                    <li>• Decorative chrome, aluminum</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">ISO 9227</h4>
                  <p className="text-gray-700 mb-3 font-semibold">International Standard</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• NSS: Neutral salt spray</li>
                    <li>• AASS: Acetic acid salt spray</li>
                    <li>• CASS: Copper-accelerated</li>
                    <li>• Harmonized with ASTM</li>
                    <li>• Global acceptance</li>
                    <li>• European compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Test Procedure</h3>
              <div className="grid md:grid-cols-6 gap-3">
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">1</div>
                  <h4 className="font-semibold mb-1 text-xs">Preparation</h4>
                  <p className="text-xs text-gray-700">Clean and label specimens</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">2</div>
                  <h4 className="font-semibold mb-1 text-xs">Pre-test</h4>
                  <p className="text-xs text-gray-700">Document initial condition</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">3</div>
                  <h4 className="font-semibold mb-1 text-xs">Positioning</h4>
                  <p className="text-xs text-gray-700">Place in chamber</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">4</div>
                  <h4 className="font-semibold mb-1 text-xs">Exposure</h4>
                  <p className="text-xs text-gray-700">Continuous salt fog</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">5</div>
                  <h4 className="font-semibold mb-1 text-xs">Removal</h4>
                  <p className="text-xs text-gray-700">Gentle rinsing</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">6</div>
                  <h4 className="font-semibold mb-1 text-xs">Evaluation</h4>
                  <p className="text-xs text-gray-700">Visual assessment</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Typical Test Durations</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="p-3 text-left border">Material/Coating Type</th>
                      <th className="p-3 text-left border">Typical Duration</th>
                      <th className="p-3 text-left border">Common Standards</th>
                      <th className="p-3 text-left border">Acceptance Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-white">
                    <tr>
                      <td className="p-3 border">Zinc Electroplating</td>
                      <td className="p-3 border">8-96 hours</td>
                      <td className="p-3 border">ASTM B633</td>
                      <td className="p-3 border">No base metal corrosion</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border">Zinc-Nickel Plating</td>
                      <td className="p-3 border">96-500 hours</td>
                      <td className="p-3 border">ASTM B841</td>
                      <td className="p-3 border">White rust acceptable</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Nickel-Chrome Plating</td>
                      <td className="p-3 border">8-16 hours (CASS)</td>
                      <td className="p-3 border">ASTM B368</td>
                      <td className="p-3 border">No pitting or blisters</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border">Powder Coating</td>
                      <td className="p-3 border">240-1000 hours</td>
                      <td className="p-3 border">ASTM D5894</td>
                      <td className="p-3 border">Scribe creep ≤ 2mm</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">E-Coat Automotive</td>
                      <td className="p-3 border">240-480 hours</td>
                      <td className="p-3 border">SAE J2334</td>
                      <td className="p-3 border">Rating per standard</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border">Anodized Aluminum</td>
                      <td className="p-3 border">168-336 hours</td>
                      <td className="p-3 border">ASTM B117</td>
                      <td className="p-3 border">No pitting on surface</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Hot-Dip Galvanizing</td>
                      <td className="p-3 border">720-1000 hours</td>
                      <td className="p-3 border">ASTM A123</td>
                      <td className="p-3 border">5% red rust allowed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Evaluation & Rating Methods</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Visual Rating</h4>
                  <p className="text-gray-700 mb-3">Standardized visual assessment scales:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>ASTM D610:</strong> Degree of rusting on painted steel</li>
                    <li><strong>ASTM D714:</strong> Degree of blistering</li>
                    <li><strong>ASTM D1654:</strong> Degree of rusting on painted or uncoated specimens</li>
                    <li><strong>ISO 4628:</strong> Paint degradation rating</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Scribe Testing</h4>
                  <p className="text-gray-700 mb-3">Coating adhesion and protection:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Artificial defect created (scribe line)</li>
                    <li>• Measures coating protective ability</li>
                    <li>• Creep from scribe measured</li>
                    <li>• Typically ≤ 2mm acceptable</li>
                    <li>• Critical for automotive coatings</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Failure Modes</h4>
                  <p className="text-gray-700 mb-3">Common failure types observed:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Red rust (base metal corrosion)</li>
                    <li>• White rust (zinc corrosion)</li>
                    <li>• Blistering and delamination</li>
                    <li>• Pitting and perforation</li>
                    <li>• Color change and staining</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Correlation with Real-World Exposure</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Important Considerations:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Salt spray is an <strong>accelerated</strong> test, not a direct simulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Correlation varies by material and coating type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Results compare relative performance, not predict exact lifespan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Continuous exposure vs. cyclic wet/dry in nature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Best used as a quality control tool</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Approximate Correlations:</h4>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-sm">Mild Environment (Indoor):</p>
                      <p className="text-sm text-gray-700">1 hour SST ≈ 1-3 months</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-sm">Moderate (Outdoor Sheltered):</p>
                      <p className="text-sm text-gray-700">1 hour SST ≈ 2-4 weeks</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-sm">Severe (Marine/Industrial):</p>
                      <p className="text-sm text-gray-700">1 hour SST ≈ 1-2 weeks</p>
                    </div>
                    <p className="text-xs text-gray-600 italic mt-3">
                      *These are rough estimates only. Actual correlation depends on many factors including coating type, substrate, and specific environmental conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Test Report Contents</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Test Documentation:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Specimen identification and description</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Test standard and duration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Before and after photographs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Visual rating per applicable standard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Detailed failure description</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Pass/fail determination</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Quality Records:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Chamber temperature log</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Salt solution concentration and pH</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Fog collection rate verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Chamber calibration certificate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Test start and end times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Technician signature and date</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Our Testing Facility</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-4xl mb-2">🏭</div>
                  <h4 className="font-semibold mb-2">Large Capacity Chamber</h4>
                  <p className="text-sm text-gray-700">Multiple specimens tested simultaneously</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-4xl mb-2">🌡️</div>
                  <h4 className="font-semibold mb-2">Precision Control</h4>
                  <p className="text-sm text-gray-700">±1°C temperature stability</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-4xl mb-2">📊</div>
                  <h4 className="font-semibold mb-2">Continuous Monitoring</h4>
                  <p className="text-sm text-gray-700">24/7 data logging</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-4xl mb-2">✅</div>
                  <h4 className="font-semibold mb-2">Certified Standards</h4>
                  <p className="text-sm text-gray-700">ASTM, ISO compliance</p>
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

export default SaltSprayTest;

