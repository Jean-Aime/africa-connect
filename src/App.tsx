import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ODIEBOARDPage from "./pages/ODIEBOARDPage";
import AffiliateProgramPage from "./pages/AffiliateProgramPage";
import VisionPage from "./pages/VisionPage";
import JoinPage from "./pages/JoinPage";
import CommunityPage from "./pages/CommunityPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import PlatformPage from "./pages/PlatformPage";
import CalendarPage from "./pages/CalendarPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/odieboard" element={<ODIEBOARDPage />} />
          <Route path="/affiliate-program" element={<AffiliateProgramPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/tours" element={<CalendarPage />} />
          <Route path="/odiecloud" element={<VisionPage />} />
          <Route path="/how-it-works" element={<VisionPage />} />
          <Route path="/resources" element={<CommunityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
