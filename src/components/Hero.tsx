import { motion } from "framer-motion";
import heroImage from "@/assets/hero-therapy.jpg";
import beachPhoto from "@/assets/download.jpeg";
import { BookButton } from "@/components/booking/BookButton";
import { useBookingModal } from "@/hooks/useBookingModal";

const Hero = () => {
  const { openModal } = useBookingModal();

  return (
    <section className="w-full">
      {/* =========================== */}
      {/*       HERO IMAGE ONLY       */}
      {/* =========================== */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={beachPhoto}
          alt="Therapy space"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/17 to-black/10" />

        {/* Top Badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-5 py-3 text-sm font-semibold text-primary shadow-soft ring-1 ring-black/5 backdrop-blur">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            <span>No waitlist! Accepting new clients. No referral needed.</span>
          </div>
        </div>

        {/* Center Title (ONLY title, like Our Story) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white font-semibold leading-snug 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
               max-w-4xl mx-auto"
          >
            AFFORDABLE COUNSELLING
            <br />
            ONLINE THERAPY
            <br />
            ACROSS ONTARIO
          </motion.h1>
        </div>
      </div>

      {/* =========================== */}
      {/*   CONTENT BELOW THE IMAGE   */}
      {/* =========================== */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          A safe, inclusive space to rise, heal, and reconnect with yourself —
          supporting adults, women, and immigrants through life’s emotional
          challenges.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
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
        </motion.div>

        {/* Long Paragraph Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mt-16 rounded-[40px] border border-primary/10 bg-white/90 p-10 shadow-soft backdrop-blur max-w-5xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Rise and Heal Psychotherapy, we believe healing is an act of
            courage — a choice to rise above pain, rediscover your strength, and
            create meaningful change. We offer affordable online counselling
            across Ontario, supporting adults, women, and immigrants who are
            navigating anxiety, depression, trauma, chronic stress, grief, and
            major life transitions.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-5">
            At Rise and Heal Psychotherapy, our sessions offer a safe,
            inclusive, and culturally sensitive space for people of all
            backgrounds, identities, and orientations. Here, you can slow down,
            breathe, and reconnect with your inner resilience.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            Therapy is a warm, collaborative, and holistic process — one that
            supports you in finding balance, confidence, and peace, at your own
            pace and in your own way.
          </p>
          <blockquote className="rounded-2xl mt-4 bg-white/70 p-6 text-lg font-medium italic text-primary shadow-inner">
            You don’t have to walk this path alone. Your rise begins here...
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
