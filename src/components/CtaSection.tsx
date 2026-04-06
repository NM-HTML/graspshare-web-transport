import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section className="py-20 bg-navy text-center">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-4">Book Your Next Trip Today</h2>
      <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
        Ready to travel? Get in touch and let us take care of the rest.
      </p>
      <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-[hsl(var(--gold-light))] text-base px-10">
        <a href="#contact">Get a Quote</a>
      </Button>
    </div>
  </section>
);

export default CtaSection;
