import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/vision", label: "Vision" },
  { href: "/odieboard", label: "ODIEBOARD" },
  { href: "/community", label: "Community" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/affiliate-program", label: "Affiliate" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-xl font-bold">
              <span className="text-foreground">Mylon Oderson Wason</span>
              <span className="block text-xs text-primary font-medium">The UnWilling Affiliate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link text-sm",
                  location.pathname === link.href && "text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="default" size="sm">
              <Link to="/join">Join the Network</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container-max py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "block py-2 text-foreground hover:text-primary transition-colors",
                location.pathname === link.href && "text-primary font-medium"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button asChild className="w-full" size="sm">
              <Link to="/join" onClick={() => setIsOpen(false)}>
                Join the Network
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
