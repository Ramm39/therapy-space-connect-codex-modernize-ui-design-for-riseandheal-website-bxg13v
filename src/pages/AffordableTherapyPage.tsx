import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import floatingShapes from "@/assets/floating-shapes.svg";
import heroImage from "@/assets/hero-therapy.jpg";
import { BookButton } from "@/components/booking/BookButton";
import { useBookingModal } from "@/hooks/useBookingModal";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8 },
};

const AffordableTherapyPage = () => {
  const { openModal } = useBookingModal();

  usePageMetadata({
    title: "Affordable Therapy & Sliding Scale | Rise and Heal Psychotherapy",
    description:
      "Accessible online therapy across Ontario with flexible sliding scale pricing. Rise and Heal Psychotherapy ensures quality care for all—because your healing should never depend on your income.",
  });

  const handleConsultationClick = () => {
    openModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d7f2ef] via-[#e8f5f1] to-[#f9fbfa]">
      <Navigation />
      <main className="flex-1">
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
            “Healing deserves to be within everyone’s reach.”
          </motion.h1>
        </section>
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT IMAGE */}
            <div className="relative">
              <img
                src={heroImage} // <-- replace with your second image
                alt="Affordable therapy"
                className="w-full h-[420px] object-cover rounded-3xl shadow-soft"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                At Rise and Heal Psychotherapy, we offer affordable and
                sliding-scale online therapy—so financial barriers never stand
                between you and your wellbeing.
                <p>
                  Because healing isn’t just for those who can afford it—it’s
                  for anyone ready to rise, grow, and feel whole again.
                </p>
              </p>

              <h2 className="text-2xl font-semibold text-gray-900">
                Why We Offer Affordable Therapy.....
              </h2>

              <p>
                We understand that mental health care can feel out of reach for
                many people.
                <p>
                  Whether you’re a student, a new parent, an immigrant starting
                  over, or someone navigating financial stress, you deserve
                  access to quality support.
                </p>{" "}
              </p>

              <p>
                Our sliding-scale rates are designed to make therapy more
                accessible— without compromising the quality of care.
              </p>

              <p className="font-medium italic">
                We believe financial circumstances shouldn’t be a barrier to
                emotional healing.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-24">
          <div className="absolute inset-0" aria-hidden>
            <div className="mx-auto h-full max-w-5xl rounded-[40px] bg-white/80 shadow-healing" />
          </div>
          <div className="relative mx-auto flex max-w-5xl flex-col gap-16 px-6 mt-4">
            <div className="grid gap-12 lg:grid-cols-2 mt-6">
              <motion.div
                {...fadeIn}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="rounded-[32px] border border-primary/10 bg-white/95 p-10 shadow-soft"
              >
                <h2 className="text-2xl font-semibold text-foreground">
                  Our Rates
                </h2>
                <ul className="mt-6 space-y-4 text-left text-muted-foreground">
                  {[
                    "Standard Individual Therapy (50 minutes): $120 CAD per session",
                    "Sliding Scale Range: $50 – $120 CAD per session",
                    "Free 15-Minute Consultation: Always available to explore fit and options",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-3xl bg-white/90 p-4 shadow-soft"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-muted-foreground">
                  There’s no complicated application process. If you need a
                  reduced rate, simply let us know during your consultation—no
                  proof of income, no judgment, just understanding.
                </p>
              </motion.div>

              <motion.div
                {...fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-[32px] border border-primary/10 bg-white/95 p-10 shadow-soft"
              >
                <h2 className="text-2xl font-semibold text-foreground">
                  Who Qualifies for the Sliding Scale
                </h2>
                <ul className="mt-6 space-y-4 text-left text-muted-foreground">
                  {[
                    "Are students or early in their careers",
                    "Have limited or no insurance coverage",
                    "Are navigating life transitions or financial hardship",
                    "Are immigrants or newcomers adjusting to new beginnings",
                    "Are seeking care but worried about affordability",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-3xl bg-white/90 p-4 shadow-soft"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-muted-foreground">
                  We kindly ask that you choose this option only if you truly
                  need it, so we can continue to make therapy accessible for
                  those facing financial challenges.
                </p>
              </motion.div>
            </div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-[36px] border border-primary/10 bg-white/95 p-10 shadow-soft"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                How It Works
              </h2>
              <ol className="mt-6 space-y-4 text-left text-muted-foreground">
                {[
                  {
                    title: "Book a Free 15-Minute Consultation",
                    description:
                      "We’ll connect to discuss your needs, availability, and goals for therapy.",
                  },
                  {
                    title: "Share Your Budget Range",
                    description:
                      "During your consultation, you can let us know what feels affordable right now.",
                  },
                  {
                    title: "Start Your Therapy Journey",
                    description:
                      "Once we’ve found the right fit, you can begin your sessions—confident that your care meets both your emotional and financial needs.",
                  },
                ].map((item, index) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4 rounded-3xl bg-white/90 p-4 shadow-soft"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-[32px] border border-primary/10 bg-white/95 p-10 text-left shadow-soft"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Why It Matters
              </h2>
              <p className="mt-4 text-muted-foreground">
                We know therapy is more than an expense—it’s an investment in
                yourself. By offering flexible and compassionate pricing, we’re
                making sure that support is available when you need it most.
                Because your healing should never depend on your income.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-[36px] border border-primary/10 bg-gradient-to-br from-white/95 via-primary/5 to-secondary/10 p-10 text-center shadow-soft"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                Ready to Begin?
              </h2>
              <p className="mt-4 text-muted-foreground">
                If you’re ready to explore therapy but worried about the cost,
                we’re here to help.
                <br />
                hello@riseandhealpsychotherapy.ca
              </p>
              <div className="mt-8 flex justify-center">
                <BookButton
                  label="Book Your Free 15-Minute Consultation"
                  onClick={() =>
                    window.open(
                      "https://riseandhealpsychotherapy.janeapp.com/",
                      "_blank"
                    )
                  }
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AffordableTherapyPage;
