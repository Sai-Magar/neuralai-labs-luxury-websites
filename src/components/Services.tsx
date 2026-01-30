import { motion } from "framer-motion";
import { 
  Gem, 
  Building2, 
  ShoppingCart, 
  Wrench, 
  TrendingUp, 
  Bot,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Gem,
    title: "Premium Jewellery Websites",
    description: "Stunning showcase websites designed specifically for jewellers, featuring elegant galleries, product catalogs, and immersive visual experiences that highlight your craftsmanship.",
    features: ["HD Product Galleries", "360° Product Views", "Catalogue Integration"],
  },
  {
    icon: Building2,
    title: "Luxury Business Websites",
    description: "Sophisticated corporate websites for luxury brands that convey elegance, trust, and professionalism while driving meaningful business engagement.",
    features: ["Brand-Focused Design", "Lead Generation", "Multi-Language Support"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce with Payment Integration",
    description: "Complete online stores with secure payment gateways, inventory management, and seamless shopping experiences that convert browsers into buyers.",
    features: ["Payment Gateway", "Inventory System", "Order Management"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance & AMC",
    description: "Comprehensive maintenance packages to keep your website secure, updated, and performing at its best with 24/7 support and regular updates.",
    features: ["24/7 Support", "Security Updates", "Performance Monitoring"],
  },
  {
    icon: TrendingUp,
    title: "SEO & Local Business Growth",
    description: "Data-driven SEO strategies tailored for local jewellery businesses, helping you rank higher on Google and attract more customers from your city.",
    features: ["Local SEO", "Google My Business", "Analytics & Reports"],
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    description: "Leverage AI-powered chatbots, automated customer service, and smart analytics to streamline operations and enhance customer experience.",
    features: ["AI Chatbots", "Process Automation", "Smart Analytics"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Comprehensive Digital Solutions for{" "}
            <span className="text-gradient-gold">Luxury Brands</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From stunning websites to AI-powered automation, we provide everything your luxury business needs to thrive in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card variant="service" className="h-full p-6">
                <CardContent className="p-0">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
