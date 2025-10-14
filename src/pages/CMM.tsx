import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import cmmImg from "../assets/Q.C. Measures/CMM.jpg";

const CMM = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Coordinate Measuring Machine (CMM)</h1>
              <p className="text-xl text-white/95 drop-shadow-md">Ultra-precise dimensional measurement and inspection</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Precision Measurement with CMM</h2>
                <p className="text-gray-700 mb-4">
                  Our Coordinate Measuring Machines (CMM) represent the gold standard in dimensional metrology. These sophisticated instruments provide highly accurate 3D measurements of manufactured parts, ensuring strict adherence to design specifications.
                </p>
                <p className="text-gray-700 mb-6">
                  Equipped with touch-trigger probes and advanced software, our CMMs can measure complex geometries with micron-level precision, making them essential for quality control in critical applications.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Measurement Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Precision: ±0.001mm (1 micron)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Temperature-controlled environment (20°C ±1°C)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Multi-axis measurement capability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Automated inspection programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>CAD-based inspection and reporting</span>
                  </li>
                </ul>
              </div>

              <div>
                <img 
                  src={cmmImg} 
                  alt="CMM Inspection" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">What We Measure</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Geometric Features</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Points and coordinates</li>
                    <li>• Lines and edges</li>
                    <li>• Circles and arcs</li>
                    <li>• Planes and surfaces</li>
                    <li>• Cylinders and cones</li>
                    <li>• Spheres</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Dimensions</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Linear distances</li>
                    <li>• Diameters (inner/outer)</li>
                    <li>• Wall thickness</li>
                    <li>• Hole positions</li>
                    <li>• Thread parameters</li>
                    <li>• Step heights</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">GD&T Parameters</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Flatness</li>
                    <li>• Straightness</li>
                    <li>• Roundness/Circularity</li>
                    <li>• Cylindricity</li>
                    <li>• Perpendicularity</li>
                    <li>• Position tolerance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Inspection Standards & Compliance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Industry Standards</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>ISO 10360 - CMM acceptance and reverification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>ASME Y14.5 - Geometric Dimensioning & Tolerancing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>ISO 1101 - Geometrical tolerancing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>VDI/VDE 2617 - Accuracy of CMMs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Quality Assurance</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Regular calibration with certified standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Traceability to national standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Measurement uncertainty analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Documented measurement procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Typical Applications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">First Article Inspection</h4>
                  <p className="text-sm text-gray-700">Complete verification of initial production samples</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">In-Process Control</h4>
                  <p className="text-sm text-gray-700">Critical dimension verification during manufacturing</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Final Inspection</h4>
                  <p className="text-sm text-gray-700">Pre-shipment quality verification</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Reverse Engineering</h4>
                  <p className="text-sm text-gray-700">Detailed measurement for CAD model creation</p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Inspection Report Package</h3>
              <p className="text-gray-700 mb-4 text-center">
                Each CMM inspection includes a comprehensive report package featuring:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">✓ Dimensional data with tolerances</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">✓ GD&T verification results</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">✓ Statistical process control charts</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">✓ CAD comparison overlay</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">✓ Measurement uncertainty</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold">✓ Calibration certificates</p>
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

export default CMM;

