"use client";

import { Search, Users, BarChart3 } from "lucide-react";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "motion/react";

const services = [
  {
    icon: Search,
    title: "Google Ads Management",
    description:
      "We rebuild Google Ads accounts from the ground up—focusing on search terms that already convert, not guesswork keywords.",
    features: ["Search & Shopping Campaigns", "Smart Retargeting", "Conversion Optimization"],
  },
  {
    icon: BarChart3,
    title: "Paid Social Advertising",
    description:
      "Creative-first Facebook and Instagram campaigns engineered for maximum ROAS with relentless A/B testing.",
    features: ["Facebook & Instagram Ads", "Creative Strategy", "ROAS Focused"],
  },
  {
    icon: Users,
    title: "Social Media Management",
    description:
      "Strategic content that establishes authority, not just feed filler. We build communities that convert followers into customers.",
    features: ["Content Strategy", "Community Building", "Brand Authority"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-body font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Revenue Engines,{" "}
            <span className="text-gradient-gold">Not Vanity Metrics</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground font-body text-lg"
          >
            Every service is designed with one goal: measurable revenue growth.
            We combine data precision with creative excellence to build campaigns
            that actually move the needle.
          </motion.p>
        </div>

        {/* Services Grid with Focus Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FocusCards cards={services} />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
