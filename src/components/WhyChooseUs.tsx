import { motion } from "framer-motion";
import { 
  Shield, 
  Award, 
  Zap, 
  HeadphonesIcon, 
  TrendingUp, 
  Palette 
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality Design",
    description: "We craft websites that reflect the elegance and prestige of luxury brands. Every pixel is designed to impress.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "With 100+ successful projects, we've built a reputation for delivering on our promises, every single time.",
  },
  {
    icon: Zap,
    title: "Fast & Optimized",
    description: "Lightning-fast websites that load in under 3 seconds, optimized for performance and user experience.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "Our websites are designed to convert visitors into customers, driving real business growth.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated support team available round the clock to address any issues or updates you need.",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "No templates. Every website is custom-designed to match your brand identity and business needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
              Built for{" "}
              <span className="text-gradient-gold">Trust</span>,{" "}
              <br className="hidden md:block" />
              Designed for{" "}
              <span className="text-gradient-gold">Growth</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At NeuralAI Labs, we understand that your website is more than just an online presence—it's 
              the digital face of your business. That's why we go beyond ordinary web development to create 
              experiences that truly represent your brand's value.
            </p>

            {/* Key Differentiators */}
            <div className="space-y-4">
              {[
                "Specializing in luxury & jewellery brands",
                "Deep understanding of Indian market",
                "AI-powered solutions for modern businesses",
                "Transparent pricing with no hidden costs",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Reasons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-5 rounded-xl border border-primary/10 bg-charcoal-light/30 hover:border-primary/30 hover:bg-charcoal-light/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
