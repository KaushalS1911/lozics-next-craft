import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import scanningImg from "../assets/Q.C. Measures/3d-scanning.png";

const ThreeDScanning = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">3D Scanning Technology</h1>
              <p className="text-xl text-white/95 drop-shadow-md">Precision dimensional verification and quality control</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={scanningImg} 
                  alt="3D Scanning" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Advanced 3D Scanning Inspection</h2>
                <p className="text-gray-700 mb-4">
                  Our state-of-the-art 3D scanning technology enables us to capture complete dimensional data of manufactured parts with exceptional accuracy. This non-contact measurement method provides comprehensive quality verification without the risk of part damage.
                </p>
                <p className="text-gray-700 mb-6">
                  The 3D scanning process creates a digital twin of the physical part, allowing for detailed comparison with CAD models and identification of any deviations from design specifications.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>First article inspection (FAI)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Production part approval process (PPAP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Reverse engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Tool and die verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Wear and deformation analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Key Features & Capabilities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">High Accuracy</h4>
                  <p className="text-gray-700">
                    Measurement accuracy up to ±0.01mm, ensuring precise verification of critical dimensions and complex geometries.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Fast Data Capture</h4>
                  <p className="text-gray-700">
                    Millions of data points captured in seconds, significantly reducing inspection time compared to traditional methods.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Complete Coverage</h4>
                  <p className="text-gray-700">
                    360-degree scanning capability captures all surfaces, including hard-to-reach areas and complex features.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Inspection Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <h4 className="font-semibold mb-2">Preparation</h4>
                  <p className="text-sm text-gray-700">Part cleaning and positioning on scanning platform</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <h4 className="font-semibold mb-2">Scanning</h4>
                  <p className="text-sm text-gray-700">High-resolution 3D data capture from multiple angles</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <h4 className="font-semibold mb-2">Processing</h4>
                  <p className="text-sm text-gray-700">Point cloud alignment and mesh generation</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                  <h4 className="font-semibold mb-2">Analysis</h4>
                  <p className="text-sm text-gray-700">CAD comparison and deviation reporting</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Deliverables</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold mb-1">Deviation Analysis Reports</h4>
                    <p className="text-gray-700">Color-coded maps showing deviations from nominal CAD geometry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">📐</span>
                  <div>
                    <h4 className="font-semibold mb-1">Dimensional Reports</h4>
                    <p className="text-gray-700">Complete dimensional verification with tolerance compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">🔍</span>
                  <div>
                    <h4 className="font-semibold mb-1">Cross-Section Analysis</h4>
                    <p className="text-gray-700">Internal feature verification and wall thickness measurement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">💾</span>
                  <div>
                    <h4 className="font-semibold mb-1">3D Data Files</h4>
                    <p className="text-gray-700">STL, OBJ, or other formats for archival and future reference</p>
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

export default ThreeDScanning;

