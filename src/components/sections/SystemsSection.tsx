import { Shield, Cloud, Users } from "lucide-react";
import { SystemCard } from "@/components/cards/SystemCard";

export function SystemsSection() {
  const systems = [
    {
      icon: Shield,
      iconBgColor: "bg-primary",
      title: "ODIEBOARD",
      description:
        "Governance architecture for scalable organizations. Divisions, departments, and accountability systems that scale from individual professionals to enterprise-level operations across Africa.",
      features: [
        "Divisional structure management",
        "Department-level accountability",
        "Role-based access control",
        "Performance tracking and reporting",
      ],
      ctaLabel: "View OrgBoard",
      ctaHref: "/odieboard",
      ctaVariant: "default" as const,
    },
    {
      icon: Cloud,
      iconBgColor: "bg-accent",
      title: "ODIECLOUD",
      description:
        "Self-hosted infrastructure with data sovereignty. Secure collaboration platforms and federated systems that ensure privacy, security, and organizational control across distributed networks.",
      features: [
        "Self-hosted collaboration",
        "Data sovereignty assurance",
        "Federated network architecture",
        "Secure communication systems",
      ],
      ctaLabel: "Explore Federated Core",
      ctaHref: "/odiecloud",
      ctaVariant: "accent" as const,
    },
    {
      icon: Users,
      iconBgColor: "bg-warning",
      title: "The UnWilling Affiliate Platform",
      description:
        "Networked distribution with revenue participation. Collective scale through structured affiliate relationships, shared resources, and distributed ownership across Global Africa.",
      features: [
        "Structured affiliate relationships",
        "Revenue participation models",
        "Shared resources and tools",
        "Distributed ownership frameworks",
      ],
      ctaLabel: "Join the Platform",
      ctaHref: "/platform",
      ctaVariant: "warning" as const,
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three interconnected systems providing the infrastructure for federated
            governance, secure collaboration, and collective scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <SystemCard key={index} {...system} />
          ))}
        </div>
      </div>
    </section>
  );
}
