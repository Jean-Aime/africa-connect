import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CommunitySection() {
  const stats = [
    { value: "15+", label: "Countries" },
    { value: "2,500+", label: "Active Builders" },
    { value: "15,000+", label: "Network Affiliates" },
    { value: "50+", label: "Systems Deployed" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Community & Scale
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A movement of operators, builders, and professionals across Africa and
                the diaspora, united by a shared commitment to federated systems and
                collective ownership.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-muted rounded-lg p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link to="/community">Join the Community</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-accent mb-4">🌍</div>
                <p className="text-muted-foreground">Community Network Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
