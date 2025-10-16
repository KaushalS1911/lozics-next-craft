import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import logo from "../assets/logo svg FINAL_122137.png";

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
                className="h-16 w-auto object-contain"
              />
            </Link>
            {/* Tagline */}
            <p className="text-lg font-semibold text-primary mb-3">
              Your Manufacturing Partner
            </p>
            {/* Description */}
            <p className="text-secondary-foreground/70 leading-relaxed">
              Leading provider of precision manufacturing parts including investment casting,
              aluminum die casting, shell moulding, forgings, and precision machined components
            </p>
          </div>

          {/* What We Serve (Admin) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">What We Serve</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/investment-casting" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Investment Casting
                </Link>
              </li>
              <li>
                <Link to="/aluminum-die-casting" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Aluminum Die Casting
                </Link>
              </li>
              <li>
                <Link to="/sg-ci-casting" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  SG & CI Casting
                </Link>
              </li>
              <li>
                <Link to="/forgings" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Forgings
                </Link>
              </li>
              <li>
                <Link to="/precision-machined" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Precision Machined Components
                </Link>
              </li>
              <li>
                <Link to="/hardware-components" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Hardware Components
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links (Admin) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Website Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Email Policy
                </a>
              </li>
              {/*<li>*/}
              {/*  <a href="#" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">*/}
              {/*    Presentation*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </div>

          {/* Company Details (Admin) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company Details</h3>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/70">
                  <p className="font-semibold mb-1 text-white">Address</p>
                  <p>RS No. 236 P 3, Plot No. 21/1, 22/1</p>
                  <p>Paramdham Industrial Estate - 3, Aji Ring Road, Near Murlidhar Kanta</p>
                  <p>Rajkot, Gujarat, India - 360003 </p>
                </div>
              </li>
              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/70">
                  <p className="font-semibold mb-1 text-white">Email</p>
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
