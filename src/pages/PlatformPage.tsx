import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Cloud, Users, Zap, TrendingUp, Globe } from "lucide-react";

const platformFeatures = [
  {
    icon: Users,
    title: "Networked Distribution",
    description: "Connect with affiliates across Africa and the diaspora through structured relationship frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Participation",
    description: "Share in collective value creation through transparent revenue models and ownership structures.",
  },
  {
    icon: Shield,
    title: "Governance Framework",
    description: "Operate within clear accountability structures using ODIEBOARD governance systems.",
  },
  {
    icon: Cloud,
    title: "Federated Infrastructure",
    description: "Access self-hosted tools and systems through ODIECLOUD with full data sovereignty.",
  },
  {
    icon: Globe,
    title: "Continental Scale",
    description: "Leverage network effects across 54 African nations and the global diaspora.",
  },
  {
    icon: Zap,
    title: "Professional Tools",
    description: "Access curated resources, training, and methodologies for professional excellence.",
  },
];

const PlatformPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              The UnWilling Affiliate{" "}
              <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              A sovereign affiliate system built on federated infrastructure, structured
              ownership, and collective scale. This is not traditional affiliate marketing.
              This is networked distribution with real ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/join">Join the Platform</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/vision">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Platform Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to operate as a sovereign affiliate with real
              ownership and collective benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="system-card p-8 card-hover">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How the Platform Works
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 text-center border border-border">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Onboard</h3>
              <p className="text-muted-foreground">
                Complete structured onboarding with identity verification, system training,
                and governance orientation.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center border border-border">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent-foreground font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Operate</h3>
              <p className="text-muted-foreground">
                Use ODIEBOARD governance and ODIECLOUD infrastructure to build and
                scale your operations.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center border border-border">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Participate</h3>
              <p className="text-muted-foreground">
                Share in collective value creation through revenue participation and
                ownership structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join the Platform?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Enter the sovereign affiliate system and start building with collective
            infrastructure and shared ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join the Platform</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/odieboard">Explore ODIEBOARD</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlatformPage;
