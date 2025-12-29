import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">E</span>
              </div>
              <span className="text-foreground font-display text-xl font-semibold tracking-tight">
                Epitome Marketing
              </span>
            </a>
            <p className="text-muted-foreground font-body text-sm max-w-sm leading-relaxed mb-6">
              Premium digital marketing for businesses that demand results.
              We build revenue engines, not vanity metrics.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@epitome.marketing"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
              >
                <Mail className="w-4 h-4" />
                hello@epitome.marketing
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                <MapPin className="w-4 h-4" />
                Hillcrest, South Africa
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4 mt-6">
              <div className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-semibold text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Google Partner
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-semibold text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Meta Ads Certified
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {["Google Ads", "Facebook Ads", "Instagram Ads", "Social Media"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["About Us", "Case Studies", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {currentYear} Epitome Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
