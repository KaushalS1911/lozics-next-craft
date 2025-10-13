import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ndtImg from "../assets/Q.C. Measures/NDT Testing.jpg";

const NDTTesting = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">NDT Testing</h1>
              <p className="text-xl text-gray-600">Non-Destructive Testing: DPT, MPI, UT & RT</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Non-Destructive Testing (NDT)</h2>
                <p className="text-gray-700 mb-4">
                  Non-Destructive Testing (NDT) is a critical quality control method that allows us to inspect materials and components for internal and surface defects without causing any damage to the part. This ensures product integrity while maintaining part usability.
                </p>
                <p className="text-gray-700 mb-6">
                  Our facility is equipped with advanced NDT equipment and certified Level II technicians to perform various testing methods according to international standards.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Why NDT?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Detect internal and surface defects non-invasively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>100% inspection without part destruction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Early defect detection prevents field failures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Compliance with industry safety standards</span>
                  </li>
                </ul>
              </div>

              <div>
                <img 
                  src={ndtImg} 
                  alt="NDT Testing" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Our NDT Methods</h3>
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* DPT */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-3 text-primary">DPT - Dye Penetrant Testing</h4>
                  <p className="text-gray-700 mb-4">
                    Liquid penetrant inspection (LPI) or dye penetrant inspection (DPI) is used to detect surface-breaking defects in non-porous materials.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Process:</h5>
                  <ol className="text-sm text-gray-700 space-y-1 mb-4 list-decimal list-inside">
                    <li>Pre-cleaning of test surface</li>
                    <li>Application of penetrant dye</li>
                    <li>Dwell time for penetration</li>
                    <li>Removal of excess penetrant</li>
                    <li>Developer application</li>
                    <li>Inspection under UV or white light</li>
                  </ol>

                  <h5 className="font-semibold mb-2">Detects:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Surface cracks</li>
                    <li>• Porosity</li>
                    <li>• Laps and seams</li>
                    <li>• Cold shuts</li>
                    <li>• Lack of fusion</li>
                  </ul>

                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <p className="text-sm"><strong>Standard:</strong> ASTM E1417, ISO 3452</p>
                    <p className="text-sm"><strong>Sensitivity:</strong> Can detect defects as small as 0.1mm</p>
                  </div>
                </div>

                {/* MPI */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-3 text-primary">MPI - Magnetic Particle Inspection</h4>
                  <p className="text-gray-700 mb-4">
                    Magnetic particle inspection is used to detect surface and near-surface discontinuities in ferromagnetic materials.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Process:</h5>
                  <ol className="text-sm text-gray-700 space-y-1 mb-4 list-decimal list-inside">
                    <li>Surface preparation and cleaning</li>
                    <li>Magnetization of the part</li>
                    <li>Application of magnetic particles</li>
                    <li>Inspection under appropriate lighting</li>
                    <li>Demagnetization (if required)</li>
                    <li>Post-cleaning</li>
                  </ol>

                  <h5 className="font-semibold mb-2">Detects:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Surface cracks</li>
                    <li>• Subsurface voids</li>
                    <li>• Inclusions</li>
                    <li>• Seams and laps</li>
                    <li>• Fatigue cracks</li>
                  </ul>

                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <p className="text-sm"><strong>Standard:</strong> ASTM E1444, ISO 9934</p>
                    <p className="text-sm"><strong>Material:</strong> Ferromagnetic materials only</p>
                  </div>
                </div>

                {/* UT */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-3 text-primary">UT - Ultrasonic Testing</h4>
                  <p className="text-gray-700 mb-4">
                    Ultrasonic testing uses high-frequency sound waves to detect internal flaws and measure material thickness in metals and composites.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Process:</h5>
                  <ol className="text-sm text-gray-700 space-y-1 mb-4 list-decimal list-inside">
                    <li>Surface preparation</li>
                    <li>Coupling gel application</li>
                    <li>Transducer placement</li>
                    <li>Signal generation and reception</li>
                    <li>Waveform analysis</li>
                    <li>Defect characterization</li>
                  </ol>

                  <h5 className="font-semibold mb-2">Detects:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Internal cracks and voids</li>
                    <li>• Porosity and inclusions</li>
                    <li>• Delamination</li>
                    <li>• Lack of fusion in welds</li>
                    <li>• Thickness variations</li>
                  </ul>

                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <p className="text-sm"><strong>Standard:</strong> ASTM E114, ISO 16810</p>
                    <p className="text-sm"><strong>Depth:</strong> Can inspect through entire thickness</p>
                  </div>
                </div>

                {/* RT */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <h4 className="text-2xl font-semibold mb-3 text-primary">RT - Radiographic Testing</h4>
                  <p className="text-gray-700 mb-4">
                    Radiographic testing uses X-rays or gamma rays to create images of the internal structure of components, revealing internal defects.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Process:</h5>
                  <ol className="text-sm text-gray-700 space-y-1 mb-4 list-decimal list-inside">
                    <li>Safety setup and area clearance</li>
                    <li>Film or digital detector placement</li>
                    <li>Radiation source positioning</li>
                    <li>Exposure</li>
                    <li>Film processing or digital image capture</li>
                    <li>Image interpretation by certified radiographer</li>
                  </ol>

                  <h5 className="font-semibold mb-2">Detects:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Internal porosity</li>
                    <li>• Cracks and voids</li>
                    <li>• Inclusions</li>
                    <li>• Weld defects</li>
                    <li>• Density variations</li>
                  </ul>

                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <p className="text-sm"><strong>Standard:</strong> ASTM E1742, ISO 17636</p>
                    <p className="text-sm"><strong>Image:</strong> Permanent record for future reference</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Method Selection Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="p-3 text-left">Method</th>
                      <th className="p-3 text-left">Best For</th>
                      <th className="p-3 text-left">Material</th>
                      <th className="p-3 text-left">Defect Location</th>
                      <th className="p-3 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold">DPT</td>
                      <td className="p-3">Surface cracks, simple shapes</td>
                      <td className="p-3">Non-porous materials</td>
                      <td className="p-3">Surface only</td>
                      <td className="p-3">Low</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold">MPI</td>
                      <td className="p-3">Ferrous parts, fatigue cracks</td>
                      <td className="p-3">Ferromagnetic only</td>
                      <td className="p-3">Surface & near-surface</td>
                      <td className="p-3">Low-Medium</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold">UT</td>
                      <td className="p-3">Thick sections, welds</td>
                      <td className="p-3">Most metals</td>
                      <td className="p-3">Internal & through thickness</td>
                      <td className="p-3">Medium</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold">RT</td>
                      <td className="p-3">Complex internal defects</td>
                      <td className="p-3">All materials</td>
                      <td className="p-3">Internal, complete view</td>
                      <td className="p-3">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Certification & Compliance</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3">Technician Certification</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• ASNT Level II certified technicians</li>
                    <li>• ISO 9712 qualified personnel</li>
                    <li>• Regular re-certification and training</li>
                    <li>• Method-specific expertise</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3">Industry Standards</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• ASTM standards compliance</li>
                    <li>• ISO testing procedures</li>
                    <li>• ASME Boiler & Pressure Vessel Code</li>
                    <li>• AWS welding standards</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-3">Documentation</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Detailed test reports</li>
                    <li>• Defect location mapping</li>
                    <li>• Radiographic films/digital images</li>
                    <li>• Acceptance criteria documentation</li>
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

export default NDTTesting;

