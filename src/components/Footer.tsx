import { Bus } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-dark py-10">
    <div className="container text-center">
      <div className="flex items-center justify-center gap-2 text-primary-foreground mb-4">
        <Bus className="h-5 w-5 text-gold" />
        <span className="font-heading">Graspshare Shuttles & Logistics</span>
      </div>
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} Graspshare Shuttles & Logistics Pty Ltd. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
