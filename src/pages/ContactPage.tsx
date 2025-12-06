import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import floatingShapes from "@/assets/floating-shapes.svg";
import soothingWaves from "@/assets/soothing-waves.svg";
import { motion } from "framer-motion";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const ContactPage = () => {
  usePageMetadata({
    title: "Contact | Rise and Heal Psychotherapy",
    description:
      "Reach out to Rise and Heal Psychotherapy for a free 15-minute consultation. We're here to answer questions about online therapy, availability, and sliding-scale rates."
  });

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-primary/10">
      <Navigation />
      <main className="flex-1">
        <section className="relative overflow-hidden py-24">
          <div
            className="absolute inset-0 opacity-70"
            style={{ backgroundImage: `url(${soothingWaves})`, backgroundSize: "cover" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/30" aria-hidden />
          <div
            className="absolute inset-0 mix-blend-lighten opacity-45"
            style={{ backgroundImage: `url(${floatingShapes})` }}
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
            >
              Connect With Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl font-bold text-foreground md:text-6xl"
            >
              Let's begin your healing conversation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl text-lg text-muted-foreground"
            >
              Reach out to book a free consultation, ask questions about therapy, or explore how our sliding-scale rates can support your care. We'll respond within two business days.
            </motion.p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
