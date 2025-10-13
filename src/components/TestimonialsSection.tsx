import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, Global Trade Co.",
    content: "Outstanding service! Their logistics solutions have streamlined our international shipping operations significantly.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Manager",
    content: "Reliable, professional, and efficient. We've been working with NOVENTRA GLOBAL SOURCING for over 5 years and they never disappoint.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Supply Chain Director",
    content: "The best logistics partner we've ever had. Their attention to detail and customer service is unmatched.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
