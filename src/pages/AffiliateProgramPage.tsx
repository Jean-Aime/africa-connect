import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Zap,
  TrendingUp,
  Monitor,
  DollarSign,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Governance Excellence",
    description: "Standardized governance framework ensuring compliance, risk management, and operational excellence across all business functions.",
    features: [
      "Compliance framework implementation",
      "Risk management protocols",
      "Audit and reporting systems",
      "Policy standardization",
    ],
  },
  {
    icon: Zap,
    title: "Operational Support",
    description: "Comprehensive operational assistance including restructuring, performance optimization, and process improvement initiatives.",
    features: [
      "Operational restructuring",
      "Process optimization",
      "Performance management",
      "Best practice implementation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Acceleration",
    description: "Strategic support for market expansion, customer acquisition, and revenue optimization across African markets.",
    features: [
      "Market expansion strategy",
      "Customer acquisition support",
      "Revenue optimization",
      "Partnership development",
    ],
  },
  {
    icon: Monitor,
    title: "Technology Platform",
    description: "Access to ODIEBOARD platform with comprehensive organizational management and performance tracking capabilities.",
    features: [
      "ODIEBOARD platform access",
      "Performance dashboards",
      "Automated reporting",
      "Integration capabilities",
    ],
  },
  {
    icon: DollarSign,
    title: "Capital Access",
    description: "Enhanced access to capital markets, investor networks, and funding opportunities for growth initiatives.",
    features: [
      "Investor network access",
      "Capital market connections",
      "Funding opportunity alerts",
      "Financial advisory services",
    ],
  },
  {
    icon: Users,
    title: "Network Effects",
    description: "Access to ODERSON's extensive network of partners, customers, and industry experts across Africa.",
    features: [
      "Partner ecosystem access",
      "Industry expert connections",
      "Customer referral network",
      "Knowledge sharing forums",
    ],
  },
];

const equitySteps = [
  { label: "Base Partnership", value: "10%", color: "text-accent" },
  { label: "Revenue Milestone (+$1M ARR)", value: "+2%", color: "text-primary" },
  { label: "Compliance Score (95%+)", value: "+1.5%", color: "text-success" },
  { label: "EBITDA Margin (25%+)", value: "+1.5%", color: "text-warning" },
  { label: "Maximum Potential", value: "15%", color: "text-foreground font-bold" },
];

const AffiliateProgramPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="dark-gradient pt-24 pb-16 text-secondary-foreground">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Equity-Affiliate
                <span className="block text-2xl md:text-3xl text-accent mt-2">
                  Partnership Program
                </span>
              </h1>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                Join Africa's premier governance and growth platform. Strategic partnerships
                combining capital, expertise, and operational excellence to accelerate
                growth across African markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link to="/join">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="#benefits">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-video bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center border border-accent/30">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-secondary-foreground/80">African Business Partnership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partnership Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support system designed to accelerate growth and maximize value creation
              for African businesses across all sectors and stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-6">{benefit.description}</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-20 bg-background">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partnership Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexible equity structure with performance-based incentives designed
              to align interests and drive mutual success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Equity Framework
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Minimum 10% Equity</h4>
                    <p className="text-muted-foreground">
                      ODERSON retains a minimum 10% equity stake in each affiliate
                      in exchange for ODIEBOARD deployment and governance services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Performance Ratchets</h4>
                    <p className="text-muted-foreground">
                      Additional 2-5% equity based on milestone achievement including
                      revenue targets, compliance scores, and EBITDA margins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-secondary-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Founder-Friendly Terms</h4>
                    <p className="text-muted-foreground">
                      Vesting schedules and buyback options designed to protect
                      founder interests while ensuring alignment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-8">
              <h4 className="text-xl font-semibold text-foreground mb-6">Example Structure</h4>
              <div className="space-y-4">
                {equitySteps.map((step, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{step.label}</span>
                    <span className={`font-semibold ${step.color}`}>{step.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join Africa's premier governance and growth platform and accelerate
            your business across African markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Apply Now</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/odieboard">Learn About ODIEBOARD</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AffiliateProgramPage;
