import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Building2, MessageCircle, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import metalFabrication from "../assets/Home page Slides/4. metal-fabrication.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    companyName: "",
    companyEmail: "",
    message: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form Data:", formData);
    console.log("Selected File:", selectedFile);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      companyName: "",
      companyEmail: "",
      message: ""
    });
    setSelectedFile(null);
    setIsSubmitting(false);
    
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Floor No.: RS No. 236 P 3, Plot No. 21/1, 22/1, Paramdham Industrial Estate - 3, Aji Ring Road, Near Murlidhar Kanta, Rajkot, Gujarat - 360003"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+92 (8800) 87890"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@noventraglobal.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Saturday: 8:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Modern & Clean */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${metalFabrication})` }}
        ></div>
        
        {/* Backdrop Filter Overlay */}
        <div className="absolute inset-0 glass-morphism-navy-orange"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="glass-badge text-white px-4 py-2 rounded-full text-sm font-semibold">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Ready to talk?
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
              Our team is here to answer your queries
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Contact Form - Left Side */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Name *
                        </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                          className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                          className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                          Mobile *
                        </label>
                          <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            required
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Enter your mobile number"
                          className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                      </div>
                      
                      <div>
                        <label htmlFor="designation" className="block text-sm font-semibold text-gray-700 mb-2">
                          Designation
                        </label>
                          <Input
                            id="designation"
                            name="designation"
                            type="text"
                            value={formData.designation}
                            onChange={handleInputChange}
                            placeholder="Enter your job title"
                          className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name *
                        </label>
                          <Input
                            id="companyName"
                            name="companyName"
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                          className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                      </div>
                      
                      <div>
                        <label htmlFor="companyEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Email *
                        </label>
                          <Input
                            id="companyEmail"
                            name="companyEmail"
                            type="email"
                            required
                            value={formData.companyEmail}
                            onChange={handleInputChange}
                            placeholder="Enter your company email"
                          className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <label htmlFor="file" className="block text-sm font-semibold text-gray-700 mb-2">
                        File Upload
                      </label>
                      <div className="relative">
                        <input
                          id="file"
                          name="file"
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx"
                        />
                        <label
                          htmlFor="file"
                          className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                        >
                          <Upload className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              {selectedFile ? selectedFile.name : "Click to upload file"}
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, DOC, DOCX, JPG, PNG, XLS, XLSX (Max 10MB)
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Tell us about your project requirements, timeline, and any specific details..."
                        className="resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full"
                      >
                        {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                        )}
                      </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information - Right Side */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-8">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div 
                        key={index}
                        className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Social Media Links */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Us</h3>
                    <div className="flex gap-3">
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

          {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us On Map</h2>
              <p className="text-xl text-gray-600">
                Visit our manufacturing facility in Rajkot, Gujarat
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.234567890123!2d70.8022!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Paramdham+Industrial+Estate+3,+Aji+Ring+Road,+Rajkot,+Gujarat+360003"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  title="NOVENTRA GLOBAL SOURCING Manufacturing Location"
                    ></iframe>
              </div>

              {/* Map Overlay */}
              <div className="absolute top-6 right-6">
                <a 
                  href="https://maps.google.com/?q=Paramdham+Industrial+Estate+3,+Aji+Ring+Road,+Rajkot,+Gujarat+360003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl font-semibold"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Strategic Location</h3>
                <p className="text-gray-600">Near National Highway for easy access</p>
                  </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Modern Facility</h3>
                <p className="text-gray-600">State-of-the-art manufacturing plant</p>
                  </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <MessageCircle className="w-8 h-8" />
                  </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-600">Always available for urgent queries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
