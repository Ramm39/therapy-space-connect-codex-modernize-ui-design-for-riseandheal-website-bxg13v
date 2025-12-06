import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { motion } from "framer-motion";

import heroImage from "@/assets/Screenshot 2025-11-24 154144.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "If you’re feeling stuck, overwhelmed, or disconnected — or simply want to understand yourself better — therapy can help. We offer a free 15-minute consultation so you can ask questions and see if we’re a good fit before committing.",
  },
  {
    question: "I’m nervous about starting therapy. Is that normal?",
    answer:
      "Absolutely. Feeling nervous is completely natural — starting therapy means you’re doing something brave and new. Our sessions are a safe, judgment-free space where you can bring all your feelings, including uncertainty or fear. Taking that first step shows courage, not weakness.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can start by booking your free 15-minute consultation through our contact form or by emailing hello@riseandhealpsychotherapy.ca You’ll have a chance to share what’s bringing you to therapy, ask questions, and see if we’re the right fit.",
  },
  {
    question: "What can I expect during my first session?",
    answer:
      "Your first session is a gentle introduction — a space for us to get to know each other and explore what brings you to therapy. We’ll talk about your goals, past experiences, and what you’d like to change or understand better. You’re always free to share at your own pace — there’s no pressure to go deeper than you’re ready for.",
  },
  {
    question: "What are your fees?",
    renderAnswer: () => (
      <div className="space-y-3 text-gray-700">
        <ul className="list-disc pl-6 space-y-1">
          <li>Individual therapy (50 minutes): $120 CAD per session</li>
          <li>Sliding scale available upon request.</li>
          <li>Free 15-minute consultation to ensure a good fit. </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Does choosing a lower rate affect the quality of therapy?",
    renderAnswer: () => (
      <span>
        Not at all. Our goal is to make therapy accessible and equitable for
        everyone. Whether you pay the full fee or a sliding-scale rate, you’ll
        receive the same compassionate, professional care.{" "}
        <Link
          to="/affordable-therapy"
          className="font-semibold text-primary underline-offset-2 hover:underline"
        >
          Learn about our affordable therapy options here →
        </Link>
      </span>
    ),
  },
  {
    question: "Is therapy at Rise and Heal covered by my insurance?",
    answer:
      "Most likely, yes. Many insurance providers cover services by a Registered Psychotherapist or Registered Psychotherapist (Qualifying) with the CRPO. Check with your provider before beginning therapy to confirm your coverage for psychotherapy. If your plan doesn’t cover a Qualifying psychotherapist, we can issue receipts under our supervisor’s name to help ensure reimbursement.",
  },
  {
    question: "Is therapy covered by OHIP or provincial health plans?",
    answer:
      "Unfortunately, not at this time. OHIP and other provincial health plans only cover psychiatry or hospital-based programs. Many extended health benefit plans do cover psychotherapy.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require at least 24 hours’ notice to cancel or reschedule a session. Cancellations made within 24 hours will be charged the full session fee. If something unexpected happens, please reach out — we understand that life happens.",
  },
  {
    question: "Why are most sessions 50 minutes long?",
    answer:
      "A 50-minute session provides the perfect balance — enough time to explore deeply without emotional fatigue. The remaining 10 minutes are used for note-taking and reflection. Longer sessions (75–90 minutes) can be arranged upon request.",
  },
  {
    question: "How often should I book my sessions?",
    renderAnswer: () => (
      <div className="space-y-3 text-gray-700">
        <p>Therapy works best when it’s consistent:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            Weekly: Builds trust and momentum, especially at the beginning.
          </li>
          <li>Bi-weekly: Allows time to apply new insights and tools.</li>
          <li>Monthly: Ideal for maintenance and continued growth.</li>
        </ul>

        <p>Together, we’ll find a rhythm that fits your needs and lifestyle.</p>
      </div>
    ),
  },
  {
    question: "How long will therapy take?",
    answer:
      "Every person’s journey is different. Some begin noticing changes after 3–5 sessions; others prefer ongoing therapy for deeper growth. We’ll discuss your goals and tailor the duration to your needs.",
  },
  {
    question: "Will what I share remain confidential?",
    answer:
      "Yes — everything you share in therapy is strictly confidential unless there’s a legal obligation related to safety. Your privacy is always protected.",
  },
  {
    question: "What if I don’t want to talk about something?",
    answer:
      "That’s perfectly okay. You’re in control of what you share and when. We’ll move at your pace and create safety around sensitive topics. If something feels too heavy, we can explore it gently — or not at all until you’re ready.",
  },
  {
    question: "What does it mean that you have a supervisor?",
    answer:
      "As a Registered Psychotherapist (Qualifying), Urvashi works under the supervision of a senior psychotherapist. Supervision ensures clients receive the highest quality of care and supports ongoing professional growth. Everything discussed in supervision remains confidential and focuses only on improving care.",
  },
  {
    question: "Are you accepting practicum students?",
    answer:
      "Not at this time, but we appreciate your interest. Please feel free to reach out and we’ll keep your information on file should opportunities arise.",
  },
];

const FaqPage = () => {
  usePageMetadata({
    title: "FAQs | Rise and Heal Psychotherapy",
    description:
      "Find answers to common questions about therapy, fees, and getting started with Rise and Heal Psychotherapy.",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fbfa] to-[#ecf9f5]">
      <Navigation />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Calming nature background"
              className="h-full w-full object-cover"
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
              “Questions? We’ve got answers”
            </motion.blockquote>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="mt-8 text-base text-muted-foreground">
              Please reach us at{" "}
              <a
                href="mailto:hello@riseandhealpsychotherapy.ca"
                className="text-primary underline hover:text-primary/80 transition-colors duration-200"
              >
                hello@riseandhealpsychotherapy.ca
              </a>{" "}
              if you can’t find an answer to your question — we’re happy to
              help.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-12 rounded-[32px] border border-primary/10 bg-white/95 p-6 shadow-soft"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="overflow-hidden rounded-3xl border border-primary/10 bg-white/90 shadow-soft"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-base font-semibold text-foreground transition hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {"renderAnswer" in item && item.renderAnswer
                      ? item.renderAnswer()
                      : item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-10 rounded-3xl border border-primary/10 bg-primary/5 p-6 text-center text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">
                Still have questions?{" "}
                <a
                  href="mailto:hello@riseandhealpsychotherapy.ca"
                  className="text-primary underline hover:text-primary/80 transition-colors duration-200"
                >
                  hello@riseandhealpsychotherapy.ca
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
