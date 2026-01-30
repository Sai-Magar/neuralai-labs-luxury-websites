import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const phoneNumber = "+918888266360";
  const whatsappLink = `https://wa.me/${phoneNumber.replace("+", "")}?text=Hi%20NeuralAI%20Labs!%20I'm%20interested%20in%20your%20website%20services.`;

  return (
    <section id="contact" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Ready to Elevate Your{" "}
            <span className="text-gradient-gold">Digital Presence</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss how we can transform your business with a premium website. 
            Get a free consultation today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="font-display font-semibold text-2xl">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Call us directly</p>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    +91 88882 66360
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">WhatsApp us</p>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    +91 88882 66360
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Email us</p>
                  <span className="text-lg font-semibold">
                    hello@neuralailabs.in
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Working Hours</p>
                  <span className="text-lg font-semibold">
                    Mon - Sat: 10:00 AM - 7:00 PM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-charcoal-light/50 border border-primary/20 rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-display font-semibold text-2xl mb-4">
              Start Your Digital Journey
            </h3>
            <p className="text-muted-foreground mb-8">
              Ready to create a stunning website for your jewellery or luxury business? 
              Our team is here to help you every step of the way. Get your free consultation now!
            </p>

            <div className="space-y-4">
              <Button variant="gold" size="xl" className="w-full" asChild>
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-5 h-5" />
                  Call Now: +91 88882 66360
                </a>
              </Button>

              <Button variant="gold-outline" size="xl" className="w-full" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-6">
              💎 Free consultation • No obligations
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
