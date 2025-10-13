import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import dtImg from "../assets/Q.C. Measures/DT-Testing.png";

const DTTesting = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Destructive Testing (DT)</h1>
              <p className="text-xl text-gray-600">Tensile, Impact & Hardness Testing</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={dtImg} 
                  alt="Destructive Testing" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Mechanical Property Verification</h2>
                <p className="text-gray-700 mb-4">
                  Destructive Testing (DT) involves subjecting test specimens to controlled failure conditions to determine material properties and mechanical characteristics. These tests provide critical data for material qualification and product validation.
                </p>
                <p className="text-gray-700 mb-6">
                  Our state-of-the-art testing laboratory is equipped with calibrated instruments and operated by trained technicians to perform comprehensive mechanical testing according to international standards.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Why Destructive Testing?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Verify material mechanical properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Ensure heat treatment effectiveness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Material certification and qualification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Compliance with customer specifications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Our Testing Capabilities</h3>
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Tensile Testing */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-4 text-primary">Tensile Testing</h4>
                  <p className="text-gray-700 mb-4">
                    Determines the material's behavior under axial tensile loading, measuring strength, ductility, and elastic properties.
                  </p>
                  
                  <h5 className="font-semibold mb-3">Properties Measured:</h5>
                  <ul className="text-sm text-gray-700 space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Ultimate Tensile Strength (UTS):</strong> Maximum stress before failure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Yield Strength:</strong> Stress at onset of plastic deformation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Elongation:</strong> Percentage increase in length</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Reduction in Area:</strong> Cross-section reduction at fracture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Elastic Modulus:</strong> Stiffness of material</span>
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm font-semibold mb-1">Standards:</p>
                    <p className="text-sm text-gray-700">ASTM E8, ISO 6892, EN 10002</p>
                    <p className="text-sm font-semibold mt-2 mb-1">Capacity:</p>
                    <p className="text-sm text-gray-700">Up to 100 kN (10 tons)</p>
                  </div>
                </div>

                {/* Impact Testing */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-4 text-primary">Impact Testing</h4>
                  <p className="text-gray-700 mb-4">
                    Evaluates material toughness and resistance to sudden shock or impact loading, critical for safety-critical applications.
                  </p>
                  
                  <h5 className="font-semibold mb-3">Test Methods:</h5>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Charpy V-Notch Test:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Impact energy absorption</li>
                      <li>• Ductile-brittle transition temperature</li>
                      <li>• Notch sensitivity evaluation</li>
                      <li>• Temperature-dependent testing (-196°C to +200°C)</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Izod Test:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cantilever beam configuration</li>
                      <li>• Material notch toughness</li>
                      <li>• Polymer and composite testing</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm font-semibold mb-1">Standards:</p>
                    <p className="text-sm text-gray-700">ASTM E23, ISO 148, EN 10045</p>
                    <p className="text-sm font-semibold mt-2 mb-1">Energy Range:</p>
                    <p className="text-sm text-gray-700">0-300 Joules</p>
                  </div>
                </div>

                {/* Hardness Testing */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-4 text-primary">Hardness Testing</h4>
                  <p className="text-gray-700 mb-4">
                    Quick, non-destructive assessment of material resistance to permanent indentation, correlating with strength and wear resistance.
                  </p>
                  
                  <h5 className="font-semibold mb-3">Test Methods Available:</h5>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="font-semibold text-sm">Rockwell Hardness (HR):</p>
                      <p className="text-xs text-gray-700">Most common, scales: HRC, HRB, HRA</p>
                      <p className="text-xs text-gray-700 italic">ASTM E18, ISO 6508</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-sm">Brinell Hardness (HB):</p>
                      <p className="text-xs text-gray-700">Large indentation, heterogeneous materials</p>
                      <p className="text-xs text-gray-700 italic">ASTM E10, ISO 6506</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-sm">Vickers Hardness (HV):</p>
                      <p className="text-xs text-gray-700">Micro-hardness, precise measurements</p>
                      <p className="text-xs text-gray-700 italic">ASTM E384, ISO 6507</p>
                    </div>

                    <div>
                      <p className="font-semibold text-sm">Shore Hardness:</p>
                      <p className="text-xs text-gray-700">Polymers, elastomers, rubbers</p>
                      <p className="text-xs text-gray-700 italic">ASTM D2240</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm font-semibold mb-1">Equipment:</p>
                    <p className="text-sm text-gray-700">Digital hardness testers with automated readings</p>
                    <p className="text-sm font-semibold mt-2 mb-1">Calibration:</p>
                    <p className="text-sm text-gray-700">Certified test blocks, annual calibration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Additional Mechanical Tests</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-2">Compression Test</h4>
                  <p className="text-sm text-gray-700">Material behavior under compressive loading</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-2">Bend Test</h4>
                  <p className="text-sm text-gray-700">Ductility and formability evaluation</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-2">Fatigue Test</h4>
                  <p className="text-sm text-gray-700">Cyclic loading endurance limit</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-2">Shear Test</h4>
                  <p className="text-sm text-gray-700">Resistance to shear stress</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Typical Test Matrix for Castings</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="p-3 text-left border">Material Type</th>
                      <th className="p-3 text-left border">Tensile</th>
                      <th className="p-3 text-left border">Impact</th>
                      <th className="p-3 text-left border">Hardness</th>
                      <th className="p-3 text-left border">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-white">
                    <tr>
                      <td className="p-3 border">Steel Castings</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">Per heat/lot</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border">Stainless Steel</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">✓ If specified</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">Per heat</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Aluminum</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">- Not typical</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">Per lot</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border">Cast Iron (SG/CI)</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">- Not typical</td>
                      <td className="p-3 border">✓ Required</td>
                      <td className="p-3 border">Per shift/heat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Test Report Deliverables</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Report Contents:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Test specimen identification and traceability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Complete test data and measurements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Stress-strain curves (tensile test)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Fracture photographs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Comparison with specification requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Test equipment calibration certificates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Technician signatures and approvals</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Quality Assurance:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>ISO/IEC 17025 accredited laboratory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Calibrated equipment with traceability to NIST</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Controlled temperature environment (23°C ±2°C)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Regular proficiency testing participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Documented test procedures and work instructions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Trained and certified technicians</span>
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

export default DTTesting;

