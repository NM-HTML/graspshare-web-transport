import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Quote Request from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:graspshareshuttles@outlook.com?subject=${subject}&body=${body}`);
    toast({ title: "Opening your email client…", description: "Send the pre-filled email to complete your request." });
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent("Hi Graspshare, I'd like to enquire about your shuttle services.")}`;

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gold" />
              <a href="mailto:graspshareshuttles@outlook.com" className="text-foreground hover:text-gold transition-colors">
                graspshareshuttles@outlook.com
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity w-fit"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <p className="text-muted-foreground text-sm">Based in Bela-Bela, Limpopo, South Africa</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button type="submit" size="lg" className="bg-gold text-accent-foreground hover:bg-[hsl(var(--gold-light))]">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
