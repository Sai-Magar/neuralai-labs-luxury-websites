import { motion } from "framer-motion";
import { Check, Star, Sparkles, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter Pack",
    price: "₹11,999",
    description: "Perfect for small jewellers starting their digital journey",
    icon: Sparkles,
    features: [
      "5-Page Responsive Website",
      "Mobile-Optimized Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "1 Month Free Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium Pack",
    price: "₹49,999+",
    description: "For established jewellers wanting a premium online presence",
    icon: Star,
    features: [
      "10+ Page Custom Website",
      "Premium UI/UX Design",
      "Advanced SEO Optimization",
      "Product Catalogue System",
      "Lead Capture Forms",
      "WhatsApp Integration",
      "Analytics Dashboard",
      "3 Months Free Support",
    ],
    cta: "Choose Premium",
    popular: true,
  },
  {
    name: "E-Commerce Pack",
    price: "₹89,999+",
    description: "Complete online store with secure payment integration",
    icon: Rocket,
    features: [
      "Full E-Commerce Website",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking System",
      "Customer Accounts",
      "Multi-Category Support",
      "SMS/Email Notifications",
      "Admin Dashboard",
      "6 Months Free Support",
    ],
    cta: "Go E-Commerce",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Transparent Pricing for{" "}
            <span className="text-gradient-gold">Every Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the perfect package for your business needs. All plans include premium design and dedicated support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={plan.popular ? "lg:-mt-4 lg:mb-4" : ""}
            >
              <Card 
                variant={plan.popular ? "pricing-featured" : "pricing"}
                className="h-full flex flex-col"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-gold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-display font-bold text-gradient-gold">
                      {plan.price}
                    </span>
                    {plan.price.includes("+") && (
                      <span className="text-muted-foreground text-sm ml-1">onwards</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant={plan.popular ? "gold" : "gold-outline"} 
                    className="w-full"
                    asChild
                  >
                    <a href="#contact">{plan.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12 text-muted-foreground"
        >
          Need a custom solution?{" "}
          <a href="#contact" className="text-primary hover:underline font-medium">
            Contact us for a personalized quote
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
