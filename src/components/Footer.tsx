import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Intro (Admin) */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo}
                alt="Noventra Global Sourcing Logo" 
                className="h-32 w-auto object-contain"
              />
            </Link>
            {/* Tagline */}
            <p className="text-lg font-semibold text-primary-foreground mb-3">
              Your Manufacturing Partner
            </p>
            {/* Description */}
            <p className="text-secondary-foreground/80 leading-relaxed">
              Leading provider of precision manufacturing solutions including investment casting, 
              aluminum die casting, forgings, and precision machined components. Quality and 
              excellence delivered since 1990.
            </p>
          </div>

          {/* What We Serve (Admin) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-foreground">What We Serve</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/investment-casting" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Investment Casting
                </Link>
              </li>
              <li>
                <Link to="/aluminum-die-casting" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Aluminum Die Casting
                </Link>
              </li>
              <li>
                <Link to="/sg-ci-casting" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  SG & CI Casting
                </Link>
              </li>
              <li>
                <Link to="/forgings" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Forgings
                </Link>
              </li>
              <li>
                <Link to="/precision-machined" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Precision Machined Components
                </Link>
              </li>
              <li>
                <Link to="/hardware-components" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Hardware Components
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links (Admin) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Website Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Email Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Presentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company Details (Admin) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-foreground">Company Details</h3>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  <p className="font-medium mb-1">Address</p>
                  <p>RS No. 236 P 3, Plot No. 21/1, 22/1</p>
                  <p>Paramdham Industrial Estate - 3, Aji Ring Road, Near Murlidhar Kanta</p>
                  <p>Rajkot, Gujarat, India - 360003 </p>
                </div>
              </li>
              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:info@noventraglobal.com" className="hover:text-primary transition-colors">
                    info@noventraglobal.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© 2025 NOVENTRA GLOBAL SOURCING. All rights reserved.</p>
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
