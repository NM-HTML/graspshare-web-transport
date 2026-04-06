import { Shield } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">About Us</p>
      <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">Who We Are</h2>
      <div className="flex justify-center mb-6">
        <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center">
          <Shield className="h-7 w-7 text-gold" />
        </div>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Graspshare Shuttles & Logistics Pty Ltd is a proudly South African transport company based in Bela-Bela, Limpopo.
        We are committed to providing safe, reliable, and affordable shuttle and logistics services to individuals and businesses alike.
        Whether you need a local ride or a long-distance trip, our professional team is here to get you there comfortably and on time.
      </p>
    </div>
  </section>
);

export default AboutSection;
