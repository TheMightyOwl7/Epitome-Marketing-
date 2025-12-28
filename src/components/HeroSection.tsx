"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Decorative gold orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse animation-delay-500" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary font-medium">
              Premium Digital Growth Partner
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up animation-delay-100">
            Stop Wasting Ad Spend.{" "}
            <span className="text-gradient-gold">
              Start Building Revenue.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
            We don't just run ads—we build revenue engines. Data-driven precision
            meets creative excellence to deliver measurable growth that actually
            impacts your bottom line.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
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
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display text-2xl font-bold text-foreground">320%</p>
                <p className="text-sm text-muted-foreground font-body">Avg. ROAS</p>
              </div>
            </div>

            <div className="w-px h-12 bg-border hidden md:block" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display text-2xl font-bold text-foreground">$12M+</p>
                <p className="text-sm text-muted-foreground font-body">Ad Spend Managed</p>
              </div>
            </div>

            <div className="w-px h-12 bg-border hidden md:block" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display text-2xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground font-body">Brands Scaled</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
