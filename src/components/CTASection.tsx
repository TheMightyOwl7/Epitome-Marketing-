"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Your{" "}
            <span className="text-gradient-gold">Revenue Engine?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-2xl mx-auto">
            Stop leaving money on the table. Let's discuss how we can optimize
            your digital marketing for maximum ROI. No obligations, just insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactModal>
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </ContactModal>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              View Our Work
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground font-body">
            Free 30-minute consultation • No hard sells • Actionable insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
