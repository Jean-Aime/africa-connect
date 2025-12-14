import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/cards/SystemCard";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center justify-center text-foreground pt-8">
      <div className="container-max text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up">
            Building the{" "}
            <span className="text-gradient">Distributed Digital Economy</span>{" "}
            for Global Africa
          </h1>

          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The UnWilling Affiliate is a movement for builders, networkers, and professionals
            who refuse dependency — and choose federated systems, structured ownership,
            and collective scale across Africa and the diaspora.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join the Network</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <a href="#vision">Explore the Vision</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <StatCard value="1,000,000+" label="Target Affiliates" sublabel="Across Africa & Diaspora" />
            <StatCard value="54" label="African Countries" sublabel="Continental Coverage" />
            <StatCard value="15" label="Countries Active" sublabel="Current Operations" />
          </div>
        </div>
      </div>
    </section>
  );
}
