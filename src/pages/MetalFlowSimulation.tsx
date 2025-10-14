import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import metalFlowImg from "../assets/Q.C. Measures/Metal flow simulation.png";

const MetalFlowSimulation = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Metal Flow Simulation</h1>
              <p className="text-xl text-white/95 drop-shadow-md">Advanced casting simulation for optimal results</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Metal Flow Simulation?</h2>
                <p className="text-gray-700 mb-4">
                  Metal flow simulation is a sophisticated computer-aided engineering (CAE) technique used to predict and optimize the flow of molten metal during the casting process. This advanced technology allows us to visualize the entire casting process before actual production begins.
                </p>
                <p className="text-gray-700 mb-6">
                  By simulating the metal flow, we can identify potential defects, optimize gating systems, and ensure uniform filling of the mold cavity, resulting in superior casting quality.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Prediction and prevention of casting defects before production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Optimization of gating and feeding systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Reduction in trial-and-error during die design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Improved yield and reduced material waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Shorter time-to-market for new products</span>
                  </li>
                </ul>
              </div>

              <div>
                <img 
                  src={metalFlowImg} 
                  alt="Metal Flow Simulation" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">What We Analyze</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Filling Pattern</h4>
                  <p className="text-gray-700">
                    Analysis of how molten metal flows through the mold cavity to identify cold shuts, misruns, and air entrapment issues.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Solidification</h4>
                  <p className="text-gray-700">
                    Evaluation of cooling patterns to predict shrinkage, porosity, and hot spots that could affect casting integrity.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Thermal Stress</h4>
                  <p className="text-gray-700">
                    Assessment of temperature gradients and thermal stresses to prevent cracking and warping during cooling.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center">Our Simulation Process</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Pre-Production Phase</h4>
                  <ol className="space-y-2 list-decimal list-inside text-gray-700">
                    <li>3D CAD model creation and import</li>
                    <li>Material property definition</li>
                    <li>Mesh generation and boundary conditions</li>
                    <li>Initial simulation runs</li>
                    <li>Design optimization based on results</li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Analysis Outputs</h4>
                  <ol className="space-y-2 list-decimal list-inside text-gray-700">
                    <li>Flow velocity and temperature distribution</li>
                    <li>Solidification time and sequence</li>
                    <li>Porosity and shrinkage predictions</li>
                    <li>Air entrapment locations</li>
                    <li>Optimization recommendations</li>
                  </ol>
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

export default MetalFlowSimulation;

