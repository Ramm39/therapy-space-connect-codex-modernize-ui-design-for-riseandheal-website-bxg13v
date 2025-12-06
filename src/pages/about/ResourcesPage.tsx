import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { motion } from "framer-motion";

const resources = [
  {
    name: "Barrett Centre for Crisis Support",
    details: "905-529-7878 or 1-844-777-3571 (24/7)"
  },
  {
    name: "Canada Suicide Prevention Service",
    details: "1-833-456-4566 or text 45645 (24/7)"
  },
  {
    name: "COAST Crisis Outreach & Support Team",
    details: "905-972-8338 or 1-844-972-8338"
  },
  {
    name: "Indigenous Hope for Wellness Hotline",
    details: "1-855-242-3310"
  },
  {
    name: "Kids Help Phone",
    details: "1-800-668-6868"
  },
  {
    name: "Sexual Assault Centre (SACHA)",
    details: "905-525-4162 (24/7)"
  },
  {
    name: "Trans Line (Trans peer support)",
    details: "1-877-565-8860"
  },
  {
    name: "Women’s Services Crisis",
    details: "905-523-6277"
  }
];

const ResourcesPage = () => {
  usePageMetadata({
    title: "Resources | Rise and Heal Psychotherapy",
    description:
      "Find crisis and support resources available 24/7 for immediate help across Ontario and Canada."
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fbfa] to-[#e7f7f1]">
      <Navigation />
      <main className="flex-1 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Resources</h1>
            <p className="mt-4 text-base text-muted-foreground">
              Crisis Support
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              If you or someone you know is in crisis, please reach out immediately to one of these 24/7 services:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {resources.map((resource) => (
              <div
                key={resource.name}
                className="rounded-3xl border border-primary/15 bg-white/95 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-healing"
              >
                <p className="text-lg font-semibold text-primary">{resource.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{resource.details}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
