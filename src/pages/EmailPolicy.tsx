import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Shield, AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react";

const EmailPolicy = () => {
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
                Communication Policy
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Email Policy</h1>
              <p className="text-xl text-white/95 drop-shadow-md">Our guidelines for email communication and anti-spam practices</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Mail className="w-20 h-20 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Email Communication Guidelines</h2>
                <p className="text-xl text-gray-600">
                  At Noventra Global Sourcing, we are committed to responsible email communication and respect your inbox.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                    Our Email Practices
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Permission-Based Communication</h4>
                        <p className="text-gray-700">We only send emails to individuals who have explicitly opted in or have an existing business relationship with us.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Clear Identification</h4>
                        <p className="text-gray-700">All emails clearly identify Noventra Global Sourcing as the sender with our complete contact information.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Easy Unsubscribe</h4>
                        <p className="text-gray-700">Every email includes a clear and easy way to unsubscribe from future communications.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Relevant Content</h4>
                        <p className="text-gray-700">We only send emails with content relevant to our sourcing and manufacturing services.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <XCircle className="w-6 h-6 mr-3 text-red-600" />
                    What We Don't Do
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">No Spam</h4>
                        <p className="text-gray-700">We never send unsolicited bulk emails or spam messages.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">No Misleading Subject Lines</h4>
                        <p className="text-gray-700">We use clear, honest subject lines that accurately describe the email content.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">No Hidden Costs</h4>
                        <p className="text-gray-700">We never send emails promoting hidden fees or misleading offers.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">No Third-Party Sharing</h4>
                        <p className="text-gray-700">We never sell, rent, or share your email address with third parties without your consent.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-primary" />
                    Email Frequency
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We respect your time and inbox. Our email frequency is designed to provide value without overwhelming you:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Service Updates</h4>
                        <p className="text-sm text-gray-700">Important updates about your projects and orders</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Industry News</h4>
                        <p className="text-sm text-gray-700">Monthly newsletter with industry insights and trends</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Quote Responses</h4>
                        <p className="text-sm text-gray-700">Immediate responses to your quote requests</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Marketing</h4>
                        <p className="text-sm text-gray-700">Occasional updates about new services and capabilities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    Data Protection
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We take the protection of your email address and personal information seriously:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Your email address is stored securely and encrypted</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>We use industry-standard security measures to protect your data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Access to your information is limited to authorized personnel only</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>We regularly audit our systems to ensure data security</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                    Unsubscribe & Opt-Out
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      You have complete control over your email preferences:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray-700">Unsubscribe from all marketing emails with one click</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray-700">Choose specific types of emails you want to receive</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray-700">Update your email preferences at any time</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray-700">Contact us directly to modify your communication preferences</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our email practices or want to update your preferences:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> info@noventraglobal.com</p>
                    <p><strong>Phone:</strong> +91 9106697517</p>
                    <p><strong>Address:</strong> 21/1, 22/1 Paramdham Industrial Estate - 3, Aji Ring Road, Rajkot, India</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Last Updated:</strong> January 2025 | This Email Policy is effective as of the date of publication and may be updated from time to time.
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

export default EmailPolicy;
