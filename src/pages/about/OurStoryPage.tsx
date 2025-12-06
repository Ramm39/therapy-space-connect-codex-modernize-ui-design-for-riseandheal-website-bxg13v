import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useBookingModal } from "@/hooks/useBookingModal";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import heroImage from "@/assets/hero-therapy.jpg";
import { motion } from "framer-motion";

const storyParagraphs = [
  "At Rise and Heal Psychotherapy, we believe healing is an act of courage — a choice to rise above pain, rediscover your strength, and create meaningful change.",
  "Founded by Urvashi Mendpara, Registered Psychotherapist (Qualifying), our practice was built on the belief that quality mental-health care should be accessible, compassionate, and culturally sensitive.",
  "The name Rise and Heal reflects our philosophy: we rise through awareness, heal through connection, and grow through understanding.",
  "Urvashi’s own journey — from practicing medicine in India to becoming a psychotherapist in Canada — inspires our mission to support others through life transitions, identity challenges, and emotional healing.",
  "We offer affordable online counselling across Ontario for adults, women, immigrants, and young professionals experiencing anxiety, depression, life transitions, trauma, chronic stress, and self-esteem challenges.",
  "Our practice is also LGBTQ+ affirming — a safe, inclusive space where every identity, story, and experience is respected.",
  "Our goal is to help you feel grounded, connected, and confident in who you are becoming. Because healing isn’t about being perfect — it’s about finding your strength, your balance, and your way back to yourself.",
];

const OurStoryPage = () => {
  const { openModal } = useBookingModal();

  usePageMetadata({
    title: "Our Story | Rise and Heal Psychotherapy",
    description:
      "Discover the story of Rise and Heal Psychotherapy — an accessible, compassionate, and culturally sensitive online therapy practice founded by Urvashi Mendpara.",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fdfa] to-[#e8fdf7]">
      <Navigation />
      <main className="flex-1 pt-24">
        <section className="relative flex min-h-[50vh] h-[60vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Calming natural landscape representing the Rise and Heal Psychotherapy story"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/40"
              aria-hidden
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-6 text-center text-4xl font-semibold text-white sm:text-5xl"
          >
            Our Story
          </motion.h1>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-12 space-y-6 leading-relaxed text-gray-700">
          {storyParagraphs.map((paragraph) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </section>

        <section className="px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-teal-50 to-green-50 py-10 text-center shadow-soft"
          >
            <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
            <p className="px-6 text-base leading-relaxed text-muted-foreground">
              If you’re ready to take the first step toward healing, we’re here
              to walk beside you.
            </p>
            <p className="mt-4 font-medium text-foreground">
              📧{" "}
              <a
                href="mailto:hello@riseandhealpsychotherapy.ca"
                className="text-primary underline hover:text-primary/80 transition-colors duration-200"
              >
                hello@riseandhealpsychotherapy.ca
              </a>
            </p>
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://riseandhealpsychotherapy.janeapp.com/",
                  "_blank"
                )
              }
              className="mt-6 inline-block rounded-lg bg-teal-500 px-6 py-3 font-medium text-white shadow hover:bg-teal-600 transition"
            >
              Book a Free 15-Minute Consultation →
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStoryPage;
