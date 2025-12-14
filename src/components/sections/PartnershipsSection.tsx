import { User, BookOpen, Settings, Globe } from "lucide-react";
import { PartnerCard } from "@/components/cards/SystemCard";

export function PartnershipsSection() {
  const partners = [
    {
      icon: User,
      iconBgColor: "bg-primary",
      title: "Self-Managed Professionals",
      description:
        "Independent consultants and professionals seeking structured methodology and professional credibility.",
      features: [
        "ODIEBOARD certification and methodology",
        "Professional tools and frameworks",
        "Network access and referrals",
        "Professional development opportunities",
      ],
      ctaLabel: "Become a Professional Partner",
      ctaHref: "/partnerships",
      ctaColor: "text-primary",
    },
    {
      icon: BookOpen,
      iconBgColor: "bg-accent",
      title: "Trainers & Mentors",
      description:
        "Experienced trainers and mentors looking to scale their expertise through structured systems.",
      features: [
        "Training platform access and support",
        "Revenue sharing opportunities",
        "Mentorship network participation",
        "Professional development resources",
      ],
      ctaLabel: "Become a Training Partner",
      ctaHref: "/partnerships",
      ctaColor: "text-accent",
    },
    {
      icon: Settings,
      iconBgColor: "bg-warning",
      title: "Platform Builders",
      description:
        "Technologists and platform developers building on federated infrastructure.",
      features: [
        "ODIECLOUD development access",
        "Technical documentation and APIs",
        "Collaborative development environment",
        "Revenue participation opportunities",
      ],
      ctaLabel: "Become a Technology Partner",
      ctaHref: "/partnerships",
      ctaColor: "text-warning",
    },
    {
      icon: Globe,
      iconBgColor: "bg-purple-accent",
      title: "Technology Partners",
      description:
        "Organizations seeking to integrate with federated systems and expand reach.",
      features: [
        "Integration partnerships",
        "Market access opportunities",
        "Co-development initiatives",
        "Strategic alignment",
      ],
      ctaLabel: "Become a Strategic Partner",
      ctaHref: "/partnerships",
      ctaColor: "text-purple-accent",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Bring your expertise. Plug into the system. Scale together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
