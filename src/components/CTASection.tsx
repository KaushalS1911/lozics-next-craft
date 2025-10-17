import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import forkliftImg from "@/assets/get_started.jpeg";

export const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today for a free consultation and discover how we can optimize your logistics operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                onClick={() => navigate('/contact')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
                onClick={() => navigate('/contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
            <div className="flex flex-col gap-3 text-primary-foreground/90">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span className="text-lg">+91 9106697517</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span className="text-lg">info@noventraglobal.com</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src={forkliftImg} 
              alt="Forklift" 
              className="w-full max-w-md mx-auto drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
