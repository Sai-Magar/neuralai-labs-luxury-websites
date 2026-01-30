import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Business-Focused",
      description: "We don't just build websites—we create digital assets that drive real business growth.",
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge AI technology to automate and optimize your business operations.",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep understanding of Indian jewellery market and luxury consumer behavior.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
              Your Partner in{" "}
              <span className="text-gradient-gold">Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <span className="font-semibold text-foreground">NeuralAI Labs</span> is a business-focused digital 
              solutions company dedicated to helping jewellers, luxury brands, and high-value businesses 
              establish a powerful online presence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We combine stunning design with AI-powered technology to create websites that not only 
              look premium but also convert visitors into loyal customers. Our deep understanding of 
              the Indian market ensures your brand resonates with your target audience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "100+", label: "Projects" },
                { value: "95%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group p-6 rounded-xl border border-primary/10 bg-charcoal-light/50 hover:border-primary/30 hover:shadow-gold transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
