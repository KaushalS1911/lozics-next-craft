import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from "lucide-react";

const PrivacyPolicy = () => {
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
                Legal & Compliance
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Privacy Policy</h1>
              <p className="text-xl text-white/95 drop-shadow-md">How we collect, use, and protect your personal information</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Your Privacy Matters</h2>
                <p className="text-xl text-gray-600">
                  At Noventra Global Sourcing, we are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Lock className="w-6 h-6 mr-3 text-primary" />
                    Information We Collect
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <UserCheck className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Personal Information</h4>
                        <p className="text-gray-700">Name, email address, phone number, company details, and other information you provide when contacting us or requesting quotes.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Database className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Usage Information</h4>
                        <p className="text-gray-700">Information about how you use our website, including pages visited, time spent, and interactions with our content.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Eye className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Technical Information</h4>
                        <p className="text-gray-700">IP address, browser type, device information, and other technical data collected automatically.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Database className="w-6 h-6 mr-3 text-primary" />
                    How We Use Your Information
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>To provide and improve our sourcing and manufacturing services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>To respond to your inquiries and provide customer support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>To send you relevant information about our services and industry updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>To analyze website usage and improve user experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>To comply with legal obligations and protect our rights</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    Data Protection & Security
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Encryption</h4>
                        <p className="text-sm text-gray-700">All data is encrypted during transmission and storage</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Access Control</h4>
                        <p className="text-sm text-gray-700">Limited access to authorized personnel only</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Regular Audits</h4>
                        <p className="text-sm text-gray-700">Regular security assessments and updates</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Secure Servers</h4>
                        <p className="text-sm text-gray-700">Data stored on secure, monitored servers</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <UserCheck className="w-6 h-6 mr-3 text-primary" />
                    Your Rights
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Right to access your personal information</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Right to correct inaccurate information</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Right to request deletion of your data</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Right to object to processing of your data</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">Right to data portability</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                    Cookies & Tracking
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">Essential cookies for website functionality</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">Analytics cookies to understand user behavior</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">Marketing cookies for personalized content</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> info@noventrasourcing.com</p>
                    <p><strong>Phone:</strong> +91 9106697517</p>
                    <p><strong>Address:</strong> 21/1, 22/1 Paramdham Industrial Estate - 3, Aji Ring Road, Rajkot, India</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Last Updated:</strong> January 2025 | This Privacy Policy is effective as of the date of publication and may be updated from time to time.
                  </p>
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

export default PrivacyPolicy;
