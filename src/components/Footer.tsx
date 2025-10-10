import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary-foreground rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-primary-foreground">LOZICS</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Your trusted partner in global logistics and transportation services. Delivering excellence across borders for over 30 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group">
                <Facebook className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group">
                <Twitter className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group">
                <Instagram className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group">
                <Linkedin className="h-5 w-5 text-primary-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-foreground">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Road Freight</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Air Freight</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Warehousing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-foreground">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/80">380 St Kilda Road, Melbourne, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">+92 (8800) 87890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">info@lozics.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© 2025 LOZICS. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
