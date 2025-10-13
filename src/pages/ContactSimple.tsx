import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ContactSimple = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">This is a simplified contact page to test loading.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSimple;
