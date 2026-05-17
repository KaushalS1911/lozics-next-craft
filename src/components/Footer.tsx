import { Link } from "react-router-dom";
import { MapPin, Mail, Building2 } from "lucide-react";
import logo from "../assets/Final Logo.png";

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
            <a
              href="https://www.linkedin.com/company/noventraglobalsourcing/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Noventra Global Sourcing on LinkedIn"
              className="inline-flex items-center gap-2 mt-4 text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
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
                  Sand Casting
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
                <Link to="/privacy-policy" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/email-policy" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Email Policy
                </Link>
              </li>
              <li>
                <Link to="/website-disclaimer" className="text-secondary-foreground/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">
                  Website Disclaimer
                </Link>
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
              {/* Rajkot Address */}
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/70">
                  <p className="font-semibold mb-1 text-white">Rajkot Facility</p>
                  <p>22/1, Paramdham Industrial Estate - 3, Aji Ring Road, Rajkot, Gujarat, India</p>
                </div>
              </li>
              {/* Germany Office */}
              <li className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/70">
                  <p className="font-semibold mb-1 text-white">Germany Corporate Office</p>
                  <p>Ulmenweg 11, 88046 Friedrichshafen</p>
                  <p>
                    <a href="tel:+4915901475825" className="hover:text-primary transition-colors">
                      +49 159 01475825
                    </a>
                  </p>
                </div>
              </li>
              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/70">
                  <p className="font-semibold mb-1 text-white">Email</p>
                  <div className="space-y-1">
                    <p>
                      <a href="mailto:info@noventrasourcing.com" className="hover:text-primary transition-colors break-all">
                        info@noventrasourcing.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:sales@noventrasourcing.com" className="hover:text-primary transition-colors break-all">
                        sales@noventrasourcing.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:raxitrola@noventrasourcing.com" className="hover:text-primary transition-colors break-all">
                        raxitrola@noventrasourcing.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:noventrasourcing@gmail.com" className="hover:text-primary transition-colors break-all">
                        noventrasourcing@gmail.com
                      </a>
                    </p>
                  </div>
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
