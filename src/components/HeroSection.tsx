"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <AuroraBackground>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10 w-full">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-primary font-medium">
                Premium Digital Growth Partner
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Stop Wasting Ad Spend.{" "}
              <span className="text-gradient-gold">
                Start Building Revenue.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We build revenue engines for SaaS, eCommerce, and service brands spending $10k+/month on ads. Data-driven precision meets creative excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <ContactModal title="Scale Your Revenue" description="Tell us about your business and we'll create a custom growth strategy.">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Scale Your Revenue
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </ContactModal>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                View Case Studies
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl font-bold text-foreground">320%</p>
                  <p className="text-sm text-muted-foreground font-body">Avg. ROAS (last 12 mos)</p>
                </div>
              </div>

              <div className="w-px h-12 bg-border hidden md:block" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl font-bold text-foreground">$12M+</p>
                  <p className="text-sm text-muted-foreground font-body">Managed (eCom & SaaS)</p>
                </div>
              </div>

              <div className="w-px h-12 bg-border hidden md:block" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl font-bold text-foreground">150+</p>
                  <p className="text-sm text-muted-foreground font-body">Brands Scaled (since 2021)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
};

export default HeroSection;
