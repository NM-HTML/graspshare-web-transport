import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-16">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Shuttle on the road" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-navy-dark/75" />
      </div>
      <div className="container relative z-10 text-center py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight max-w-4xl mx-auto animate-fade-in-up">
          Reliable Shuttle & Logistics Services <span className="text-gold">You Can Trust</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Affordable short and long distance transport solutions based in Bela-Bela.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-[hsl(var(--gold-light))] text-base px-8">
            <a href="#contact">Get a Quote</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
