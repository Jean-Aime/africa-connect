import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VisionPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              The Vision for{" "}
              <span className="text-gradient">Global Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Building a federated economic system that empowers builders, networkers,
              and professionals across Africa and the diaspora through structured
              ownership and collective execution.
            </p>
          </div>
        </div>
      </section>

      {/* Core Vision */}
      <section className="py-20 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Federated Sovereignty
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The UnWilling Affiliate movement is founded on the principle that
                economic empowerment comes through ownership, not dependency. We build
                systems that allow individuals and communities to participate in the
                digital economy on their own terms.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our federated approach means that each node in the network maintains
                sovereignty while benefiting from collective infrastructure, shared
                resources, and network effects.
              </p>
              <ul className="space-y-3">
                {[
                  "Self-hosted infrastructure with data sovereignty",
                  "Distributed ownership models",
                  "Collective governance frameworks",
                  "Revenue participation across the network",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Africa-Scale Replication
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our systems are designed for replication across diverse African markets.
                From Lagos to Nairobi, from Accra to Johannesburg, the same governance
                frameworks, operational standards, and technological infrastructure can
                be deployed and adapted to local contexts.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This is not about creating dependencies on a single platform or entity.
                It's about building the rails that allow African businesses and
                professionals to connect, collaborate, and compete on a global stage.
              </p>
              <ul className="space-y-3">
                {[
                  "Standardized operating procedures",
                  "Localized implementation support",
                  "Cross-border collaboration frameworks",
                  "Continental network effects",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Generational Thinking */}
      <section className="py-20 bg-muted/50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Generational Thinking
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We think in decades, not quarters. The systems we build today are
              designed to create value for generations to come. This long-term
              perspective shapes every decision, from technology choices to
              partnership structures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="text-4xl font-bold text-primary mb-4">10+</div>
                <div className="text-foreground font-semibold mb-2">Years Horizon</div>
                <p className="text-sm text-muted-foreground">
                  Our strategic planning operates on decade-long cycles
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="text-4xl font-bold text-accent mb-4">54</div>
                <div className="text-foreground font-semibold mb-2">African Nations</div>
                <p className="text-sm text-muted-foreground">
                  Continental coverage is our ultimate goal
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="text-4xl font-bold text-warning mb-4">1M+</div>
                <div className="text-foreground font-semibold mb-2">Target Affiliates</div>
                <p className="text-sm text-muted-foreground">
                  Scaling to one million networked operators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Be Part of the Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the movement building the distributed digital economy for Global Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join the Network</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/platform">Explore the Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisionPage;
