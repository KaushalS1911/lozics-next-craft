import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Upload, User, Building, MessageSquare, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
      details: [
        "Floor No.: RS No. 236 P 3",
        "Plot No. 21/1, 22/1",
        "Paramdham Industrial Estate - 3",
        "Aji Ring Road, Near Murlidhar Kanta",
        "Rajkot, Gujarat - 360003",
        "Near National Highway"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@noventraglobal.com", "support@noventraglobal.com", "sales@noventraglobal.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 8:00am - 6:00pm", "Sun: Closed", "Emergency: 24/7"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to start your next manufacturing project? Get in touch with our team of experts.
            </p>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Information - Modern Design */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Modern Header */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Get in Touch</h2>
                        <p className="text-blue-100 text-sm">We're here to help</p>
                      </div>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      Ready to start your next manufacturing project? Our team of experts is standing by to assist you.
                    </p>
                  </div>
                </div>

                {/* Modern Contact Cards */}
                <div className="space-y-3">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const colors = [
                      'from-blue-500 to-blue-600',
                      'from-green-500 to-green-600', 
                      'from-purple-500 to-purple-600',
                      'from-orange-500 to-orange-600'
                    ];
                    const bgColors = [
                      'bg-blue-50 border-blue-200',
                      'bg-green-50 border-green-200',
                      'bg-purple-50 border-purple-200', 
                      'bg-orange-50 border-orange-200'
                    ];
                    const iconColors = [
                      'text-blue-600',
                      'text-green-600',
                      'text-purple-600',
                      'text-orange-600'
                    ];
                    
                    return (
                      <div key={index} className="group">
                        <div className={`relative overflow-hidden rounded-2xl border-2 ${bgColors[index]} transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]`}>
                          {/* Gradient overlay on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${colors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                          
                          <div className="relative p-4">
                            <div className="flex items-start gap-3">
                              {/* Modern Icon Container */}
                              <div className={`relative flex-shrink-0`}>
                                <div className={`w-14 h-14 bg-gradient-to-r ${colors[index]} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                                  <Icon className="w-7 h-7" />
                                </div>
                                {/* Subtle glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${colors[index]} rounded-2xl blur-lg opacity-30 scale-110 group-hover:opacity-50 transition-opacity duration-300`}></div>
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                                  {info.title}
                                </h3>
                                <div className="space-y-0.5">
                                  {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                                      {detail}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Modern Social Media Section */}
                <div className="mt-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.5 6.75V2.25h9v4.5H7.5zM7.5 21.75v-4.5h9v4.5H7.5zM2.25 7.5h4.5v9h-4.5v-9zM17.25 7.5h4.5v9h-4.5v-9z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Follow Us</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">Stay connected with our latest updates and news</p>
                    <div className="flex gap-3">
                      <a href="#" className="group relative w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </a>
                      <a href="#" className="group relative w-12 h-12 bg-gradient-to-r from-sky-400 to-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </a>
                      <a href="#" className="group relative w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </a>
                      <a href="#" className="group relative w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="mt-6">
                  <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-4 border border-primary/20">
                    <h4 className="font-bold text-gray-900 mb-2">Need immediate assistance?</h4>
                    <p className="text-gray-600 text-sm mb-4">Call us now for urgent inquiries</p>
                    <a href="tel:+919876543210" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                          Mobile <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            required
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your mobile number"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="designation" className="text-sm font-medium text-gray-700">
                          Designation
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="designation"
                            name="designation"
                            type="text"
                            value={formData.designation}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your job title"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                          Company Name <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="companyName"
                            name="companyName"
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="companyEmail" className="text-sm font-medium text-gray-700">
                          Company Email <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="companyEmail"
                            name="companyEmail"
                            type="email"
                            required
                            value={formData.companyEmail}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your company email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="file" className="text-sm font-medium text-gray-700">
                        File Upload
                      </Label>
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
                          className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors"
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
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="resize-none"
                        placeholder="Tell us about your project requirements, timeline, and any specific details..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <section className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit our manufacturing facility in Rajkot, Gujarat. We're conveniently located near the National Highway for easy access.
              </p>
            </div>

            {/* Google Map */}
            <div className="relative max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <div className="w-full h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.234567890123!2d70.8022!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Paramdham+Industrial+Estate+3,+Aji+Ring+Road,+Rajkot,+Gujarat+360003"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="NOVENTRA GLOBAL SOURCING Manufacturing Location - Rajkot, Gujarat"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Map Overlay Info */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-900">NOVENTRA GLOBAL SOURCING Manufacturing</span>
                </div>
              </div>

              {/* Quick Actions Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                <a 
                  href="https://maps.google.com/?q=Paramdham+Industrial+Estate+3,+Aji+Ring+Road,+Rajkot,+Gujarat+360003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Get Directions</span>
                </a>
                <a 
                  href="tel:+919876543210" 
                  className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call Now</span>
                </a>
              </div>
            </div>

            {/* Additional Location Info */}
            <div className="mt-8 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Strategic Location</h3>
                  <p className="text-gray-600 text-sm">Located near National Highway for easy transportation and logistics</p>
                </Card>

                <Card className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Building className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Industrial Zone</h3>
                  <p className="text-gray-600 text-sm">Situated in Paramdham Industrial Estate with modern infrastructure</p>
                </Card>

                <Card className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Easy Access</h3>
                  <p className="text-gray-600 text-sm">Well-connected roads with ample parking and loading facilities</p>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
