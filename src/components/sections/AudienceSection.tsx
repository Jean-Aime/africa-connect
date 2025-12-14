import { Zap, User, Settings, BookOpen } from "lucide-react";
import { FeatureCard } from "@/components/cards/SystemCard";

export function AudienceSection() {
  const audiences = [
    {
      icon: Zap,
      iconBgColor: "bg-primary",
      title: "Networkers & Affiliates",
      description:
        "Professional affiliate relationships with revenue participation, clear governance, and collective ownership of the infrastructure.",
      features: [
        "Revenue participation beyond commissions",
        "Structured growth pathways",
        "Collective ownership models",
        "Professional development opportunities",
      ],
    },
    {
      icon: User,
      iconBgColor: "bg-accent",
      title: "Professionals & Consultants",
      description:
        "ODIEBOARD governance systems, professional certification, and structured client management tools with industry recognition.",
      features: [
        "Professional methodology and tools",
        "Industry-recognized certification",
        "Scalable client management",
        "Network effects and referrals",
      ],
    },
    {
      icon: Settings,
      iconBgColor: "bg-warning",
      title: "Builders & Technologists",
      description:
        "ODIECLOUD federated infrastructure, comprehensive technical documentation, and collaborative development environments.",
      features: [
        "Federated infrastructure access",
        "Technical documentation and support",
        "Collaborative development environment",
        "Contribution to global systems",
      ],
    },
    {
      icon: BookOpen,
      iconBgColor: "bg-purple-accent",
      title: "Community Leaders",
      description:
        "Leadership frameworks, regional partnership opportunities, and scalable methodologies for community impact and economic development.",
      features: [
        "Leadership frameworks and tools",
        "Regional partnership opportunities",
        "Scalable impact methodologies",
        "Economic development resources",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who This Is For
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Structured systems for professionals who want ownership, not dependency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <FeatureCard key={index} {...audience} />
          ))}
        </div>
      </div>
    </section>
  );
}
