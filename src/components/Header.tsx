import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);

  const whatWeServeItems = [
    { title: "Investment Casting", href: "/investment-casting" },
    { title: "SG/CI Casting", href: "/sg-ci-casting" },
    { title: "Forgings", href: "/forgings" },
    { title: "Precision Machined Components", href: "/precision-machined" },
    { title: "Aluminum Die Castings", href: "/aluminum-die-casting" },
    { title: "Hardware Components", href: "/hardware-components" },
  ];

  const testingInspectionItems = [
    { title: "Metal Flow Simulation", href: "/metal-flow-simulation" },
    { title: "3D Scanning", href: "/3d-scanning" },
    { title: "CMM", href: "/cmm" },
    { title: "PFMEA, CP, PFD", href: "/pfmea" },
    { title: "Final Inspection Reports", href: "/inspection-reports" },
    { title: "NDT Testing (DPT, MPI, UT, RT)", href: "/ndt-testing" },
    { title: "DT Testing (Tensile, Impact, Hardness)", href: "/dt-testing" },
    { title: "Microstructure Analysis", href: "/microstructure-analysis" },
    { title: "Spectro Analysis", href: "/spectro-analysis" },
    { title: "Corrosion Testing", href: "/corrosion-testing" },
    { title: "Salt Spray Test", href: "/salt-spray-test" },
  ];

  const qcMeasuresItems = [
    { title: "Certificates", href: "/certificates" },
    { title: "Testing & Inspection", href: "#", hasSubmenu: true },
  ];

  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);
    if (openMobileSubmenu !== menu) {
      setOpenNestedSubmenu(null);
    }
  };

  const toggleNestedSubmenu = (menu: string) => {
    setOpenNestedSubmenu(openNestedSubmenu === menu ? null : menu);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>380 St Kilda Road, Australia</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon - Sat: 8am - 5pm</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+92 (8800) 87890</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="Noventra Global Sourcing Logo" 
                className="h-32 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-gray-800 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              
              <Link to="/about" className="text-gray-800 hover:text-primary transition-colors font-medium">
                About Us
              </Link>

              {/* What We Serve Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-800 hover:text-primary transition-colors font-medium">
                  What We Serve <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {whatWeServeItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/process" className="text-gray-800 hover:text-primary transition-colors font-medium">
                Our Process
              </Link>

              {/* Q.C. Measures Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-800 hover:text-primary transition-colors font-medium">
                  QC Measures <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/certificates"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                    >
                      Certificates
                    </Link>
                    
                    {/* Testing & Inspection with nested submenu */}
                    <div className="relative group/nested">
                      <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors">
                        <span>Testing & Inspection</span>
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </button>
                      <div className="absolute left-full top-0 ml-1 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {testingInspectionItems.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="text-gray-800 hover:text-primary transition-colors font-medium">
                Contact Us
              </Link>

              <Link to="/product-gallery" className="text-gray-800 hover:text-primary transition-colors font-medium">
                Product Gallery
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Button variant="default" className="hidden md:block bg-primary hover:bg-primary/90">
                Get a Quote
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in">
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-gray-800 hover:text-primary transition-colors font-medium py-2">
                  Home
                </Link>
                
                <Link to="/about" className="text-gray-800 hover:text-primary transition-colors font-medium py-2">
                  About Us
                </Link>
                
                <Link to="/contact" className="text-gray-800 hover:text-primary transition-colors font-medium py-2">
                  Contact Us
                </Link>

                <Link to="/product-gallery" className="text-gray-800 hover:text-primary transition-colors font-medium py-2">
                  Product Gallery
                </Link>

                {/* What We Serve Mobile Submenu */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('what-we-serve')}
                    className="flex items-center justify-between w-full text-gray-800 hover:text-primary transition-colors font-medium py-2"
                  >
                    What We Serve
                    <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSubmenu === 'what-we-serve' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileSubmenu === 'what-we-serve' && (
                    <div className="pl-4 py-2 space-y-2">
                      {whatWeServeItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block text-sm text-gray-700 hover:text-primary transition-colors py-1"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/process" className="text-gray-800 hover:text-primary transition-colors font-medium py-2">
                  Our Process
                </Link>

                {/* Q.C. Measures Mobile Submenu */}
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu('qc-measures')}
                    className="flex items-center justify-between w-full text-gray-800 hover:text-primary transition-colors font-medium py-2"
                  >
                    QC Measures
                    <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSubmenu === 'qc-measures' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileSubmenu === 'qc-measures' && (
                    <div className="pl-4 py-2 space-y-2">
                      <Link
                        to="/certificates"
                        className="block text-sm text-gray-700 hover:text-primary transition-colors py-1"
                      >
                        Certificates
                      </Link>
                      
                      {/* Testing & Inspection nested submenu */}
                      <div>
                        <button
                          onClick={() => toggleNestedSubmenu('testing-inspection')}
                          className="flex items-center justify-between w-full text-sm text-gray-700 hover:text-primary transition-colors py-1"
                        >
                          Testing & Inspection
                          <ChevronDown className={`h-4 w-4 transition-transform ${openNestedSubmenu === 'testing-inspection' ? 'rotate-180' : ''}`} />
                        </button>
                        {openNestedSubmenu === 'testing-inspection' && (
                          <div className="pl-4 py-2 space-y-2">
                            {testingInspectionItems.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="block text-xs text-gray-700 hover:text-primary transition-colors py-1"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 mt-2">
                  Get a Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
