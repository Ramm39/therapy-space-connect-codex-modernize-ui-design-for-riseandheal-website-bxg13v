import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SpecialtiesPage from "./pages/SpecialtiesPage";
import SpecialtyDetailPage from "./pages/SpecialtyDetailPage";
import AboutUrvashiPage from "./pages/AboutUrvashiPage";
import OurStoryPage from "./pages/about/OurStoryPage";
import FaqPage from "./pages/about/FaqPage";
import ResourcesPage from "./pages/about/ResourcesPage";
import BlogPage from "./pages/BlogPage";
import AffordableTherapyPage from "./pages/AffordableTherapyPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import AdminDashboard from "./pages/AdminDashboard";
import { BookingProvider } from "./hooks/useBookingModal";
import { LimitedTimeOfferModal } from "./components/LimitedTimeOfferModal";
import FloatingBookButton from "./components/FloatingBookButton";
import { BlogProvider } from "./context/BlogContext";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BlogProvider>
        <BookingProvider>
          <LimitedTimeOfferModal />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/specialties" element={<SpecialtiesPage />} />
              <Route
                path="/specialties/:slug"
                element={<SpecialtyDetailPage />}
              />
              <Route path="/about/our-story" element={<OurStoryPage />} />
              <Route path="/about/faqs" element={<FaqPage />} />
              <Route path="/about/resources" element={<ResourcesPage />} />
              <Route path="/about/blog" element={<BlogPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route
                path="/therapists/urvashi-mendpara"
                element={<AboutUrvashiPage />}
              />
              <Route
                path="/about-urvashi-mendpara"
                element={<Navigate to="/therapists/urvashi-mendpara" replace />}
              />
              <Route
                path="/affordable-therapy"
                element={<AffordableTherapyPage />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingBookButton />
          </BrowserRouter>
        </BookingProvider>
      </BlogProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
