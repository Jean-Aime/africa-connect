import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, BookOpen, Settings, Globe } from "lucide-react";

const partnerTypes = [
  {
    icon: User,
    iconBgColor: "bg-primary",
    title: "Self-Managed Professionals",
    description: "Independent consultants and professionals seeking structured methodology and professional credibility.",
    benefits: [
      "ODIEBOARD certification and methodology",
      "Professional tools and frameworks",
      "Network access and referrals",
      "Professional development opportunities",
      "Revenue participation models",
    ],
    ideal: "Consultants, coaches, and independent professionals in Africa and the diaspora.",
  },
  {
    icon: BookOpen,
    iconBgColor: "bg-accent",
    title: "Trainers & Mentors",
    description: "Experienced trainers and mentors looking to scale their expertise through structured systems.",
    benefits: [
      "Training platform access and support",
      "Revenue sharing opportunities",
      "Mentorship network participation",
      "Professional development resources",
      "Curriculum development support",
    ],
    ideal: "Business trainers, executive coaches, and educational professionals.",
  },
  {
    icon: Settings,
    iconBgColor: "bg-warning",
    title: "Platform Builders",
    description: "Technologists and platform developers building on federated infrastructure.",
    benefits: [
      "ODIECLOUD development access",
      "Technical documentation and APIs",
      "Collaborative development environment",
      "Revenue participation opportunities",
      "Open source contribution recognition",
    ],
    ideal: "Software developers, platform architects, and technology entrepreneurs.",
  },
  {
    icon: Globe,
    iconBgColor: "bg-purple-accent",
    title: "Strategic Partners",
    description: "Organizations seeking to integrate with federated systems and expand reach across Africa.",
    benefits: [
      "Integration partnerships",
      "Market access opportunities",
      "Co-development initiatives",
      "Strategic alignment",
      "Joint venture opportunities",
    ],
    ideal: "Enterprises, NGOs, and institutions seeking to scale across African markets.",
  },
];

const PartnershipsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Partner{" "}
              <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Bring your expertise. Plug into the system. Scale together across
              Africa and the diaspora.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-background">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partnership Pathways
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Multiple pathways to participate in the federated economy, each
              designed for different expertise and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-border shadow-card card-hover">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${partner.iconBgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <partner.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{partner.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{partner.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Benefits</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Ideal For</h4>
                  <p className="text-sm text-muted-foreground">{partner.ideal}</p>
                </div>

                <Button asChild className="w-full">
                  <Link to="/join">Apply as {partner.title.split(" ")[0]} Partner</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Partner?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the movement building the distributed digital economy for Global Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Start Partnership Application</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/affiliate-program">Learn About Equity Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnershipsPage;
