import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-silver/20 relative">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/50 shadow-gold">
                  <img src={logo} alt="NeuralAI Labs Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-display font-bold text-2xl text-foreground">
                  Neural<span className="text-gradient-gold-silver">AI</span> Labs
                </span>
              </a>
              <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
                Premium digital solutions for jewellers and luxury brands. We craft stunning websites 
                that captivate customers and drive business growth across India.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Follow us:</span>
                <div className="flex gap-3">
                  {["facebook", "instagram", "linkedin", "twitter"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-lg border border-silver/30 flex items-center justify-center text-silver hover:border-gold hover:text-gold transition-all duration-300"
                    >
                      <span className="text-xs uppercase">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Why Choose Us", href: "#why-us" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "Jewellery Websites",
                  "Luxury Business Sites",
                  "E-Commerce Solutions",
                  "Website Maintenance",
                  "SEO Services",
                  "AI Automation",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-silver/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} NeuralAI Labs. All rights reserved. Crafted with 💎 in India.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-gold hover:shadow-gold-strong hover:scale-110 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
