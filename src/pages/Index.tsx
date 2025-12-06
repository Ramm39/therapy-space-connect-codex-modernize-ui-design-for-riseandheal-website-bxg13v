import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import homeBackground from "@/assets/hero-therapy.jpg";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const Index = () => {
  const location = useLocation();

  usePageMetadata({
    title:
      "Rise and Heal Psychotherapy | Online Therapy for Anxiety, Burnout, and Life Transitions",
    description:
      "Book a free consultation with Rise and Heal Psychotherapy. Compassionate online therapy for adults, women, Gen Z, millennials, and immigrant communities across Ontario.",
  });

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const section = document.getElementById(elementId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
