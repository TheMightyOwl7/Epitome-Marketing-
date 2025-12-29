"use client";

import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/moving-border";
import ContactModal from "@/components/ContactModal";

const CTASection = () => {
  return (
    <section id="contact" className="w-full relative overflow-hidden bg-black py-24 md:py-32">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        baseHue={45} // Gold/Yellow hue
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            Stop Leaving Money <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              On The Table
            </span>
          </h2>
          <p className="text-white/80 font-body text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Every day you wait is another day of lost revenue. Let's audit your
            funnel and find your hidden profit leakage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ContactModal title="Get Your Free Revenue Audit" description="Let's analyze your current performance and find hidden revenue opportunities.">
              <Button
                borderRadius="1.75rem"
                className="bg-background text-foreground border-neutral-200 dark:border-slate-800 font-display font-semibold text-lg"
                containerClassName="h-14 w-auto min-w-[200px]"
                borderClassName="bg-[radial-gradient(var(--gold)_40%,transparent_60%)]"
              >
                Get Your Free Audit
              </Button>
            </ContactModal>
          </div>
          <p className="mt-6 text-sm text-white/40 font-body">
            Limited spots available for this month.
          </p>
        </div>
      </Vortex>
    </section>
  );
};

export default CTASection;
