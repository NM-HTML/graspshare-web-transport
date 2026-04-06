import { Clock, DollarSign, Star, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Reliable & On Time", desc: "We value your time—punctuality is our promise." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates without compromising quality." },
  { icon: Star, title: "Professional Service", desc: "Friendly, trained drivers committed to excellence." },
  { icon: ShieldCheck, title: "Safe & Comfortable", desc: "Well-maintained vehicles for a worry-free journey." },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-section">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-heading text-foreground">The Graspshare Difference</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center">
              <r.icon className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
