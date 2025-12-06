import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import floatingShapes from "@/assets/floating-shapes.svg";
import soothingWaves from "@/assets/soothing-waves.svg";
import { BookButton } from "@/components/booking/BookButton";
import { useBookingModal } from "@/hooks/useBookingModal";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { specialtyDetails } from "./SpecialtyDetailPage";

const SpecialtiesPage = () => {
  const { openModal } = useBookingModal();

  usePageMetadata({
    title: "Therapy Specialties | Rise and Heal Psychotherapy",
    description:
      "Explore Rise and Heal Psychotherapy's specialties including anxiety, depression, life transitions, cultural adjustment, and more. Discover how we support your healing journey.",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/10">
      <Navigation />
      <main className="flex-1">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-80 animate-soothing-waves"
              style={{
                backgroundImage: `url(${soothingWaves})`,
                backgroundSize: "cover",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-primary/25"
              aria-hidden
            />
            <div
              className="absolute inset-0 mix-blend-lighten opacity-60 animate-floating-shapes"
              style={{ backgroundImage: `url(${floatingShapes})` }}
              aria-hidden
            />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-soft"
            >
              Our Specialties
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-4xl font-bold text-foreground sm:text-5xl"
            >
              Support that meets every chapter of your healing journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
            >
              Rise and Heal Psychotherapy offers trauma-informed, culturally
              responsive therapy for anxiety, burnout, life transitions,
              identity exploration, and grief. Explore each specialty below to
              discover how we can work together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <BookButton
                label="Book a Free Consultation"
                onClick={() =>
                  window.open(
                    "https://riseandhealpsychotherapy.janeapp.com/",
                    "_blank"
                  )
                }
              />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-white/80 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-white"
              >
                Talk to Us About Your Needs
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-24">
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-primary/10"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
              {specialtyDetails.map((specialty, index) => (
                <motion.article
                  key={specialty.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-primary/10 bg-white/85 p-8 shadow-soft backdrop-blur-sm"
                >
                  <div>
                    <div className="flex items-center gap-2 text-primary">
                      <Sparkle className="h-5 w-5" aria-hidden />
                      <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                        Specialty
                      </p>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-foreground">
                      {specialty.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {specialty.summary}
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                      {specialty.focusAreas.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span
                            aria-hidden
                            className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center justify-between pt-4">
                    <Link
                      to={`/specialties/${specialty.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <BookButton
                      label="Book"
                      onClick={() =>
                        window.open(
                          "https://riseandhealpsychotherapy.janeapp.com/",
                          "_blank"
                        )
                      }
                      variant="secondary"
                      className="px-4 py-2 text-xs"
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-24 grid gap-12 rounded-[40px] border border-primary/10 bg-white/90 p-10 shadow-healing lg:grid-cols-[1.1fr,0.9fr]">
              <div>
                <h2 className="text-3xl font-semibold text-foreground">
                  Not sure where to start?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Healing is rarely linear. Whether you are navigating anxiety,
                  grief, or a life transition, we co-create a plan that balances
                  gentle exploration with practical skills. Every journey begins
                  with a free consultation so you feel confident and supported.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We welcome adults across Ontario, with evening and weekend
                  availability. All sessions are offered virtually for ease and
                  accessibility.
                </p>
              </div>
              <div className="flex flex-col gap-6 rounded-[32px] bg-gradient-to-br from-primary/10 via-secondary/10 to-white/95 p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground">
                  How we partner in healing
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="rounded-2xl bg-white/80 p-4 shadow-inner">
                    Evidence-based, trauma-informed therapy rooted in compassion
                  </li>
                  <li className="rounded-2xl bg-white/80 p-4 shadow-inner">
                    Culturally responsive care honouring intersectional
                    identities
                  </li>
                  <li className="rounded-2xl bg-white/80 p-4 shadow-inner">
                    Practical tools, worksheets, and between-session support
                  </li>
                </ul>
                <BookButton
                  label="Schedule a Consultation"
                  onClick={() =>
                    window.open(
                      "https://riseandhealpsychotherapy.janeapp.com/",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialtiesPage;
