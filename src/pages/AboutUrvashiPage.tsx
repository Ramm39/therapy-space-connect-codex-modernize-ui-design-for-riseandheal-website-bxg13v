import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/therapy-page.jpeg";
import profileImage from "@/assets/therapist-3.jpg";
import { BookButton } from "@/components/booking/BookButton";
import { useBookingModal } from "@/hooks/useBookingModal";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const sectionFade = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const cardFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const AboutUrvashiPage = () => {
  const { openModal } = useBookingModal();

  usePageMetadata({
    title:
      "About Urvashi Mendpara | Registered Psychotherapist (Qualifying) | Rise and Heal Psychotherapy",
    description:
      "Discover Urvashi Mendpara's story, therapeutic approach, and availability for compassionate online counselling across Ontario.",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/10">
      <Navigation />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Calming nature background"
              className="h-full w-full object-cover opacity-150" // increased visibility
            />
            <div
              className="absolute inset-0 bg-white/20" // lighter overlay for more visibility
              aria-hidden
            />
          </div>

          {/* Content */}
          <div className="relative mx-auto flex min-h-[500px] md:min-h-[650px] max-w-5xl items-center justify-center px-6 py-32 text-center">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl text-4xl font-semibold leading-snug text-gray-800 md:text-[2.85rem]"
            >
              “Healing begins when we find the courage to listen to ourselves.”
            </motion.blockquote>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20">
          <motion.section
            {...sectionFade}
            className="mt-16 rounded-3xl bg-white/85 px-8 py-12 shadow-soft backdrop-blur"
          >
            {/* TOP — FULL WIDTH CENTERED HEADING */}
            <div className="w-full text-center flex flex-col items-center mb-10">
              <div className="flex items-center gap-3">
                {/* <span className="inline-block h-3 w-3 rounded-full bg-primary"></span> */}
                <h1 className="text-3xl md:text-4xl font-semibold text-primary">
                  Urvashi Mendapara
                </h1>
              </div>

              <h2 className="mt-1 text-sm font-semibold text-gray-900">
                Registered Psychotherapist (Qualifying)
              </h2>

              <div className="mt-3 h-1 w-24 bg-primary rounded-full"></div>
            </div>

            {/* 2-COLUMN LAYOUT — FIRST TWO PARAGRAPHS + PHOTO */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* LEFT — TEXT CONTENT */}
              <div className="space-y-6 text-lg leading-relaxed text-gray-800 pl-16">
                <p>
                  Have you been feeling anxious, overwhelmed, or stuck in a
                  cycle you can’t seem to break? Maybe you’ve been carrying the
                  weight of expectations— trying to hold everything together
                  while quietly feeling lost, disconnected, or unsure of who
                  you’re becoming.
                </p>

                <p>
                  I’m <strong>Urvashi Mendpara</strong>, a Registered
                  Psychotherapist (Qualifying) with the College of Registered
                  Psychotherapists of Ontario (CRPO) and the founder of Rise and
                  Heal Psychotherapy.
                </p>
              </div>

              {/* RIGHT — PHOTO */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={profileImage}
                    alt="Urvashi Mendpara"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* CLEAN SECTION DIVIDER FOR PERFECT STRUCTURE */}
            <div className="mt-10 mb-6 h-[1px] w-full bg-gray-200/60"></div>

            {/* FULL-WIDTH THIRD PARAGRAPH */}
            <div className="text-lg leading-relaxed text-gray-800 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900">My Story</h2>
              <div className="mb-8 mt-3 h-1 w-24 rounded-full bg-primary" />
              <p>
                Before becoming a psychotherapist, I spent over five years
                practicing medicine in India, where I witnessed how deeply our
                emotions influence our physical wellbeing. After immigrating to
                Canada, I experienced the challenges of starting over—rebuilding
                identity, purpose, and belonging in a new culture. These
                experiences shaped how I show up in therapy—with empathy,
                authenticity, and cultural understanding. I understand the
                pressure of doing it all, the loneliness of transition, and the
                courage it takes to begin again.
              </p>

              <blockquote className="rounded-2xl bg-white/70 p-6 text-lg font-medium italic text-gray-800 shadow-inner mt-6">
                My goal is to help you feel grounded, empowered, and confident
                in who you are becoming—to rise from your challenges and create
                meaningful, lasting change.
              </blockquote>

              <h2 className="text-2xl font-semibold text-gray-900 mt-6">
                When I’m Not Counselling…
              </h2>
              <div className="mb-8 mt-3 h-1 w-24 rounded-full bg-primary" />
              <p className="mt-4">
                Outside of my work, I find joy in nature walks, meditation,
                journaling, and cooking for my family. I’m married and a proud
                mother to a young boy who reminds me daily that healing and
                growth often begin in the smallest, quietest moments.
              </p>
              <blockquote className="rounded-2xl bg-white/70 p-6 text-lg font-medium italic text-gray-800 shadow-inner mt-6">
                “I believe therapy is not about fixing what’s broken—it’s about
                rediscovering who you already are.”
              </blockquote>
            </div>
          </motion.section>

          <motion.section
            {...sectionFade}
            className="mt-16 rounded-3xl bg-white/85 px-8 py-12 shadow-soft backdrop-blur"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              My Approach
            </h2>
            <div className="mb-8 mt-3 h-1 w-24 rounded-full bg-primary" />
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              {/* Center paragraph */}
              <p className=" px-4">
                Therapy with me is collaborative, holistic, and personalized. I
                draw from evidence-based approaches including:
              </p>
              {/* Bullet list */}
              <ul className="list-disc pl-8 space-y-2 text-gray-700">
                <li>Cognitive Behavioural Therapy (CBT)</li>
                <li>Dialectical Behaviour Therapy (DBT)</li>
                <li>Solution-Focused Therapy</li>
                <li>Mindfulness-Based Practices</li>
                <li>Psychodynamic Therapy</li>
                <li>Trauma-Informed Therapy</li>
                <li>Person-Centred Therapy</li>
              </ul>
              <p className=" px-4">
                My approach is warm, empowering, culturally sensitive, and
                LGBTQ+ affirming, creating a safe space where you can explore
                your story, reconnect with your strength, and move toward
                meaningful change.
              </p>
            </div>
          </motion.section>

          {/* === Combined 3-Column Section === */}
          <motion.section
            {...sectionFade}
            className="mt-16 rounded-3xl bg-white/85 px-8 py-12 shadow-soft backdrop-blur"
          >
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Fees, Credentials & Availability
            </h2>
            <div className="mx-auto mb-10 mt-3 h-1 w-24 rounded-full bg-primary" />

            {/* 3 Column Grid */}
            <div className="grid gap-10 md:grid-cols-3">
              {/* Fees Box */}
              <motion.div
                {...cardFade}
                className="rounded-3xl border border-primary/20 bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl font-semibold text-gray-900">Fees</h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 text-base leading-relaxed">
                  <li>Individual Therapy (50 minutes): $120 CAD</li>
                  <li>Sliding scale available on request</li>
                  <li>Free 15-minute meet & greet</li>
                </ul>

                <p className="mt-4 text-base text-gray-700">
                  <a
                    href="/affordable-therapy"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Learn more about sliding scale →
                  </a>
                </p>
              </motion.div>

              {/* Credentials Box */}
              <motion.div
                {...cardFade}
                className="rounded-3xl border border-primary/20 bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Credentials
                </h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 text-base leading-relaxed">
                  <li>Registered Psychotherapist (Qualifying), CRPO</li>
                  <li>
                    Master’s in Counselling Psychotherapy – Yorkville University
                  </li>
                  <li>Languages: English, Hindi, Gujarati, Urdu</li>
                </ul>
              </motion.div>

              {/* Availability Box */}
              <motion.div
                {...cardFade}
                className="rounded-3xl border border-primary/20 bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Availability
                </h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 text-base leading-relaxed">
                  <li>Virtual sessions across Ontario</li>
                  <li>Tuesday–Saturday: mornings, afternoons, evenings</li>
                  <li>Clients: Individuals (18+)</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            {...sectionFade}
            className="mt-16 rounded-3xl bg-white/85 px-8 py-12 shadow-soft backdrop-blur"
          >
            <div className="flex flex-col items-center text-center space-y-5 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-gray-700 max-w-2xl">
                Taking the first step toward therapy is a courageous act of
                self-care. During our consultation, we’ll talk about what brings
                you here, what you’re hoping for, and how we can work together
                in a way that feels supportive and sustainable. There’s no
                pressure to commit—just a compassionate conversation to see if
                it feels like a good fit.
              </p>

              <BookButton
                label="Book Your Free Consultation →"
                onClick={() =>
                  window.open(
                    "https://riseandhealpsychotherapy.janeapp.com/",
                    "_blank"
                  )
                }
                className="w-full max-w-md justify-center"
              />
            </div>
          </motion.section>
          <motion.section
            {...sectionFade}
            className="mt-20 rounded-3xl bg-gradient-to-r from-[#e9fdf7] to-[#f9fdfa] px-8 py-14 text-center shadow-soft"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Let’s Begin Your Journey
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
              When you’re ready to explore therapy, we’ll walk beside you with
              compassion and care. Reach out at{" "}
              <a
                href="mailto:hello@riseandhealpsychotherapy.ca"
                className="text-primary underline hover:text-primary/80"
              >
                hello@riseandhealpsychotherapy.ca
              </a>
              .
            </p>
            <BookButton
              label="Book Your Free Consultation →"
              onClick={() =>
                window.open(
                  "https://riseandhealpsychotherapy.janeapp.com/",
                  "_blank"
                )
              }
              className="mt-6"
            />
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUrvashiPage;
