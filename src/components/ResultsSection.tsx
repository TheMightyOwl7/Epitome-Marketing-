const stats = [
  {
    value: "320%",
    label: "Average ROAS",
    description: "Return on ad spend across all managed accounts",
  },
  {
    value: "$12M+",
    label: "Ad Spend Managed",
    description: "Trusted with substantial media budgets",
  },
  {
    value: "150+",
    label: "Brands Scaled",
    description: "From startups to established enterprises",
  },
  {
    value: "45%",
    label: "Avg. Cost Reduction",
    description: "Lower CPAs through optimization",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-wider uppercase mb-4">
            Proven Results
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Numbers That{" "}
            <span className="text-gradient-gold">Speak for Themselves</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            We're obsessed with metrics that matter. Not impressions. Not clicks. 
            Revenue, ROAS, and profit margins.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </p>
              <p className="font-display text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
