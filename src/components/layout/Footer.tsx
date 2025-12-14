import { Link } from "react-router-dom";

const footerLinks = {
  systems: [
    { label: "ODIEBOARD", href: "/odieboard" },
    { label: "ODIECLOUD", href: "/odiecloud" },
    { label: "Platform", href: "/platform" },
    { label: "Vision", href: "/vision" },
  ],
  community: [
    { label: "Join Network", href: "/join" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Community", href: "/community" },
    { label: "Affiliate Program", href: "/affiliate-program" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Training", href: "#" },
    { label: "Calendar", href: "/calendar" },
    { label: "Contact", href: "#" },
  ],
  portfolio: [
    { label: "Forever Young Tours", href: "/tours" },
    { label: "Portfolio", href: "#" },
    { label: "Case Studies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold text-secondary-foreground">Mylon Oderson Wason</span>
              <span className="block text-sm text-primary mt-1">The UnWilling Affiliate</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Building the distributed digital economy for Global Africa through federated systems and collective ownership.
            </p>
          </div>

          {/* Systems */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Systems</h4>
            <ul className="space-y-2">
              {footerLinks.systems.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Portfolio</h4>
            <ul className="space-y-2">
              {footerLinks.portfolio.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Mylon Oderson Wason. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
