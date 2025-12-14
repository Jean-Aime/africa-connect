import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StepCard } from "@/components/cards/SystemCard";

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Join the Network",
      description:
        "Enter the sovereign affiliate system with identity verification and structured onboarding.",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      number: 2,
      title: "Learn the Systems",
      description:
        "Master ODIEBOARD governance and ODIECLOUD infrastructure through structured training.",
      bgColor: "bg-accent",
      textColor: "text-accent-foreground",
    },
    {
      number: 3,
      title: "Activate Locally",
      description:
        "Deploy systems in your local market with regional support and structured methodology.",
      bgColor: "bg-warning",
      textColor: "text-white",
    },
    {
      number: 4,
      title: "Scale Regionally",
      description:
        "Expand operations across regions using federated infrastructure and collective resources.",
      bgColor: "bg-purple-accent",
      textColor: "text-white",
    },
    {
      number: 5,
      title: "Build Global Africa",
      description:
        "Contribute to the federated economic system and collective ownership across the continent.",
      bgColor: "bg-indigo-accent",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Five steps from joining the network to building Global Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="hero" size="lg">
            <Link to="/join">Start Here</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
