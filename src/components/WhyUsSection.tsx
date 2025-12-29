"use client";

import { Shield, LineChart, Users2, Clock } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "motion/react";

const differentiators = [
  {
    icon: LineChart,
    title: "Revenue-First Approach",
    description:
      "We measure success by your bottom line, not vanity metrics. Every campaign is optimized for actual sales and profit, not just clicks and impressions.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description:
      "No more confusing dashboards or hidden data. Get clear, actionable reports that show exactly where your money goes and what it generates.",
  },
  {
    icon: Users2,
    title: "Dedicated Strategists",
    description:
      "You're not just another account number. Work directly with senior strategists who understand your business and are invested in your growth.",
  },
  {
    icon: Clock,
    title: "Rapid Optimization",
    description:
      "We don't wait for monthly reviews. Our team monitors and optimizes campaigns daily, ensuring maximum efficiency at all times.",
  },
];

const testimonials = [
  {
    quote:
      "They cut our CPA by 52% in the first quarter while scaling spend. Finally, an agency that actually delivers revenue, not just reports.",
    name: "Sarah Mitchell",
    designation: "CEO at TechScale",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was flawless and the results were immediate. We saw a noticeable increase in lead quality within the first 2 weeks.",
    name: "Michael Rodriguez",
    designation: "Founder at LuxeHomes",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The layout and design are stunning, but the strategy is what keeps us here. Our ROAS has never been higher.",
    name: "Emily Chen",
    designation: "CMO at FashionForward",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "From B2B lead gen to brand awareness, Epitome handles it all with a level of professionalism that is rare in this industry.",
    name: "David Park",
    designation: "Director at SaaSify",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <p className="text-primary font-body font-semibold text-sm tracking-wider uppercase mb-4">
              Why Epitome
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Marketing Partner{" "}
              <span className="text-gradient-gold">You Deserve</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              Tired of agencies that promise the world and deliver spreadsheets?
              We get it. That's why we built Epitome to be different—focused on
              one thing: making you money.
            </p>

            {/* Comparison */}
            <div className="mb-10 bg-card/50 rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-2 text-sm font-semibold border-b border-border bg-muted/30">
                <div className="p-3 text-muted-foreground">Typical Agency</div>
                <div className="p-3 text-primary bg-primary/5">Epitome</div>
              </div>
              <div className="grid grid-cols-2 text-sm border-b border-border/50">
                <div className="p-3 text-muted-foreground">Monthly Reports</div>
                <div className="p-3 font-medium bg-primary/5">Daily Optimization</div>
              </div>
              <div className="grid grid-cols-2 text-sm border-b border-border/50">
                <div className="p-3 text-muted-foreground">Junior Account Managers</div>
                <div className="p-3 font-medium bg-primary/5">Senior Strategists Only</div>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <div className="p-3 text-muted-foreground">Vanity Metrics (Clicks)</div>
                <div className="p-3 font-medium bg-primary/5">Revenue & Profit</div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-12 md:mt-0">
              <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
