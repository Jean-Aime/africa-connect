import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            This is not about followers.
            <br />
            <span className="text-gradient">
              It is about federated ownership and collective execution.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join the Network</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
