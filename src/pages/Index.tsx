import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { VisionSection } from "@/components/sections/VisionSection";
import { SystemsSection } from "@/components/sections/SystemsSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { PartnershipsSection } from "@/components/sections/PartnershipsSection";
import { CTASection } from "@/components/sections/CTASection";

const trustItems = [
  "ODIEBOARD",
  "ODIECLOUD",
  "Federated Core",
  "Forever Young Tours",
  "Strategic Partners",
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustStrip items={trustItems} />
      <VisionSection />
      <SystemsSection />
      <AudienceSection />
      <HowItWorksSection />
      <CommunitySection />
      <PartnershipsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
