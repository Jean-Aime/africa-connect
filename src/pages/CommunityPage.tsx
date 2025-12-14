import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Globe, MessageSquare } from "lucide-react";

const CommunityPage = () => {
  const stats = [
    { value: "15+", label: "Countries" },
    { value: "2,500+", label: "Active Builders" },
    { value: "15,000+", label: "Network Affiliates" },
    { value: "50+", label: "Systems Deployed" },
  ];

  const activities = [
    {
      icon: Users,
      title: "Masterminds",
      description: "Regular mastermind sessions with fellow operators, builders, and networkers.",
      bgColor: "bg-primary",
    },
    {
      icon: Calendar,
      title: "Workshops",
      description: "Hands-on training workshops on ODIEBOARD, ODIECLOUD, and affiliate systems.",
      bgColor: "bg-accent",
    },
    {
      icon: Globe,
      title: "Regional Meetups",
      description: "Connect with local community members and build regional networks.",
      bgColor: "bg-warning",
    },
    {
      icon: MessageSquare,
      title: "Online Forums",
      description: "24/7 access to discussion forums, Q&A, and knowledge sharing.",
      bgColor: "bg-purple-accent",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Community &{" "}
              <span className="text-gradient">Scale</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A movement of operators, builders, and professionals across Africa and
              the diaspora, united by a shared commitment to federated systems and
              collective ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Community Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Engage with the community through various activities designed to support
              your growth and connect you with fellow operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-card rounded-xl p-8 text-center border border-border shadow-subtle card-hover">
                <div className={`w-16 h-16 ${activity.bgColor} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{activity.title}</h3>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built by Operators, for Operators
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This is not about followers. It is about federated ownership and
                collective execution. Every member of our community is an operator
                with real stakes in the system's success.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We share knowledge, resources, and opportunities because our success
                is interconnected. When one node in the network grows, the entire
                ecosystem benefits.
              </p>
              <Button asChild>
                <Link to="/join">Join the Community</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌍</div>
                  <p className="text-muted-foreground">Global Africa Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Connect?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join a community of builders, networkers, and professionals building
            the federated economy across Global Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join the Network</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/calendar">View Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityPage;
