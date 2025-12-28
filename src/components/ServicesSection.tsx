import { Search, Users, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Google Ads Management",
    description:
      "High-intent search campaigns, shopping ads, and precision retargeting that captures buyers at the moment of decision.",
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
      "Strategic content, community building, and organic growth that establishes your brand as the authority in your market.",
    features: ["Content Strategy", "Community Building", "Brand Authority"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Revenue Engines,{" "}
            <span className="text-gradient-gold">Not Vanity Metrics</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Every service is designed with one goal: measurable revenue growth. 
            We combine data precision with creative excellence to build campaigns 
            that actually move the needle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-gold animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground font-body"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
