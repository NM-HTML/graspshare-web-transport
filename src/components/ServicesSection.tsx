import { MapPin, Route, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: MapPin,
    title: "Local Shuttle Services",
    description: "Convenient and reliable local shuttle services around Bela-Bela and surrounding areas for your daily commute.",
  },
  {
    icon: Route,
    title: "Long Distance Trips",
    description: "Comfortable long distance transport to major cities across South Africa, with flexible scheduling and competitive rates.",
  },
  {
    icon: Truck,
    title: "Logistics & Transport Solutions",
    description: "Efficient and secure logistics services for businesses and individuals, ensuring your goods arrive safely and on time.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Card key={s.title} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="pt-8 pb-8 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center">
                  <s.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
