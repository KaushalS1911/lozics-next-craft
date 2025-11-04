import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle, Shield, FileText, Scale, Info } from "lucide-react";

const WebsiteDisclaimer = () => {
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
                Legal Information
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Website Disclaimer</h1>
              <p className="text-xl text-white/95 drop-shadow-md">Important legal information about the use of our website</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <AlertTriangle className="w-20 h-20 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Website Terms & Conditions</h2>
                <p className="text-xl text-gray-600">
                  Please read this disclaimer carefully before using our website and services.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Info className="w-6 h-6 mr-3 text-primary" />
                    General Information
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      This website is owned and operated by Noventra Global Sourcing. By accessing and using this website, 
                      you accept and agree to be bound by the terms and provision of this disclaimer.
                    </p>
                    <p className="text-gray-700">
                      The information contained on this website is for general information purposes only. While we endeavor 
                      to keep the information up to date and correct, we make no representations or warranties of any kind, 
                      express or implied, about the completeness, accuracy, reliability, suitability, or availability of the 
                      website or the information, products, services, or related graphics contained on the website.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                    Limitation of Liability
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      In no event shall Noventra Global Sourcing, its directors, employees, or agents be liable for any 
                      direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                      loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Important Notice</h4>
                      <p className="text-red-700 text-sm">
                        Any reliance you place on such information is therefore strictly at your own risk. We shall not be 
                        liable for any loss or damage including without limitation, indirect or consequential loss or damage, 
                        or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection 
                        with, the use of this website.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-primary" />
                    Content Accuracy
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      While we strive to provide accurate and up-to-date information, we make no warranties or representations 
                      about the accuracy, reliability, completeness, or timeliness of the content on this website.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Product specifications and capabilities may change without notice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Pricing information is subject to change and should be confirmed with our team</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Technical information is provided for general guidance only</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Case studies and examples are for illustrative purposes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    Third-Party Links
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Through this website, you are able to link to other websites which are not under the control of 
                      Noventra Global Sourcing. We have no control over the nature, content, and availability of those sites.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">External Links Disclaimer</h4>
                      <p className="text-yellow-700 text-sm">
                        The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed 
                        within them. We are not responsible for the content, privacy policies, or practices of any third-party websites.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Scale className="w-6 h-6 mr-3 text-primary" />
                    Intellectual Property
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      All content on this website, including but not limited to text, graphics, logos, images, audio clips, 
                      video clips, digital downloads, data compilations, and software, is the property of Noventra Global Sourcing 
                      or its content suppliers and is protected by copyright laws.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">You may not reproduce, distribute, or transmit any content without written permission</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">Trademarks and logos are the property of their respective owners</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">Unauthorized use may result in legal action</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                    Service Availability
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We strive to maintain the availability of our website and services, but we cannot guarantee uninterrupted access.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Website Maintenance</h4>
                        <p className="text-sm text-gray-700">Scheduled maintenance may temporarily affect website availability</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Technical Issues</h4>
                        <p className="text-sm text-gray-700">We are not liable for technical difficulties or server downtime</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Force Majeure</h4>
                        <p className="text-sm text-gray-700">Events beyond our control may affect service availability</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Updates</h4>
                        <p className="text-sm text-gray-700">We reserve the right to modify or discontinue services</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-primary" />
                    Governing Law
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      This disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes 
                      arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Legal Jurisdiction</h4>
                      <p className="text-blue-700 text-sm">
                        By using this website, you agree that any legal action or proceeding arising out of or relating to 
                        this disclaimer shall be brought exclusively in the courts of Rajkot, Gujarat, India.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this disclaimer or our website terms:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Company:</strong> Noventra Global Sourcing</p>
                    <p><strong>Email:</strong> info@noventrasourcing.com</p>
                    <p><strong>Phone:</strong> +91 9106697517</p>
                    <p><strong>Address:</strong> 21/1, 22/1 Paramdham Industrial Estate - 3, Aji Ring Road, Rajkot, India</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Last Updated:</strong> January 2025 | This Website Disclaimer is effective as of the date of publication and may be updated from time to time.
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

export default WebsiteDisclaimer;



