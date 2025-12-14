import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              What is "The UnWilling Affiliate"?
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Sovereign Philosophy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A sovereign affiliate philosophy built on systems, not personalities.
                  Designed for Africa-scale replication with ownership-driven, not
                  dependency-driven relationships. Long-term, generational thinking for
                  sustainable economic federation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Core Principles
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Federated Systems: Self-hosted infrastructure with data sovereignty",
                    "Structured Ownership: Clear governance and accountability frameworks",
                    "Collective Scale: Network effects for Africa-wide impact",
                    "Generational Thinking: Long-term value creation and sustainability",
                  ].map((principle, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Movement Foundation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built by operators, for operators. This is not about followers. It is
                  about federated ownership and collective execution across Global Africa.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link to="/vision">Learn How It Works</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary mb-4">∞</div>
                <p className="text-muted-foreground">Federated Digital Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
