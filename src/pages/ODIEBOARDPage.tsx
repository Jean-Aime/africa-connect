import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Settings, 
  DollarSign, 
  UserPlus,
  Target,
  FileText,
  Shield
} from "lucide-react";

const divisions = [
  {
    icon: Users,
    title: "Executive (Div-7)",
    description: "Strategic leadership, governance, and overall business direction.",
    features: ["Strategic planning", "Board management", "Stakeholder relations", "Corporate governance"],
    bgColor: "bg-secondary",
  },
  {
    icon: MessageSquare,
    title: "Communications (Div-1)",
    description: "Internal and external communications, brand management.",
    features: ["Brand management", "Internal communications", "PR and media relations", "Content strategy"],
    bgColor: "bg-accent",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Sales",
    description: "Revenue generation, customer acquisition, and market expansion.",
    features: ["Lead generation", "Sales operations", "Customer success", "Market analysis"],
    bgColor: "bg-primary",
  },
  {
    icon: Settings,
    title: "Product & Delivery",
    description: "Product development, service delivery, and quality assurance.",
    features: ["Product development", "Service delivery", "Quality assurance", "Project management"],
    bgColor: "bg-purple-accent",
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Financial management, reporting, and capital allocation.",
    features: ["Financial reporting", "Budget management", "Capital allocation", "Investor relations"],
    bgColor: "bg-success",
  },
  {
    icon: UserPlus,
    title: "People",
    description: "Human resources, talent management, and organizational development.",
    features: ["Talent acquisition", "Performance management", "Organizational development", "Culture building"],
    bgColor: "bg-pink-500",
  },
];

const modules = [
  {
    icon: Target,
    title: "Strategy OS",
    description: "Strategic planning and execution management with OKRs, initiatives, and risk tracking.",
    features: [
      "Objectives & Key Results (OKRs)",
      "Strategic initiatives tracking",
      "Risk management dashboard",
      "Performance analytics",
    ],
  },
  {
    icon: DollarSign,
    title: "Finance OS",
    description: "Financial management with real-time dashboards, covenants, and reporting.",
    features: [
      "Real-time financial dashboards",
      "Covenant monitoring",
      "Automated reporting",
      "Multi-currency support",
    ],
  },
  {
    icon: Users,
    title: "People OS",
    description: "Human capital management with talent tracking and development.",
    features: [
      "Talent management",
      "Performance reviews",
      "Training and development",
      "Succession planning",
    ],
  },
  {
    icon: FileText,
    title: "Governance OS",
    description: "Policy and compliance management with audit trails.",
    features: [
      "Policy management",
      "Compliance tracking",
      "Audit trails",
      "Document management",
    ],
  },
];

const ODIEBOARDPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="dark-gradient pt-24 pb-16 text-secondary-foreground">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ODIEBOARD™
                <span className="block text-2xl md:text-3xl text-accent mt-2">
                  Organizational Management System
                </span>
              </h1>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                Comprehensive platform combining governance, growth, and operational excellence
                to scale businesses across Africa's diverse markets through standardized
                operating procedures and performance management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link to="/join">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="#modules">Explore Modules</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-video bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center border border-accent/30">
                <div className="text-center p-8">
                  <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
                  <p className="text-secondary-foreground/80">Platform Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-20 bg-background">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Seven-Division Operating Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ODIEBOARD organizes all business functions into seven core divisions,
              ensuring comprehensive coverage of organizational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <div key={index} className="system-card p-8 card-hover">
                <div className={`w-16 h-16 ${division.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <division.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{division.title}</h3>
                <p className="text-muted-foreground mb-4">{division.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {division.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section id="modules" className="py-20 bg-muted/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Platform Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Five integrated modules providing comprehensive organizational management
              and performance tracking capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-card card-hover border border-border">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mr-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{module.description}</p>
                <div className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Deploy ODIEBOARD to bring governance excellence and operational discipline
            to your organization across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Request Demo</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/affiliate-program">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ODIEBOARDPage;
