import { Shield, LineChart, Users2, Clock } from "lucide-react";

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

            {/* Quote */}
            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="font-display text-xl text-foreground italic mb-3">
                "They cut our CPA by 52% in the first quarter while scaling spend. 
                Finally, an agency that actually delivers."
              </p>
              <p className="font-body text-sm text-muted-foreground">
                — Sarah Mitchell, CEO at TechScale
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
