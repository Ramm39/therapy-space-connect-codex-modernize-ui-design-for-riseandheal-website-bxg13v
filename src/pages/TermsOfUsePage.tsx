import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const TermsOfUsePage = () => {
  usePageMetadata({
    title: "Terms of Use | Rise and Heal Psychotherapy",
    description: "Review the terms for accessing Rise and Heal Psychotherapy's website and online services."
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/10">
      <Navigation />
      <main className="mx-auto max-w-4xl space-y-12 px-6 py-24">
        <header className="space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Terms of Use
          </p>
          <h1 className="text-4xl font-bold text-foreground">Guidelines for Using Our Website</h1>
          <p className="text-lg text-muted-foreground">
            By visiting riseandheal.ca you agree to the following terms that ensure a safe, respectful, and ethical experience for everyone.
          </p>
        </header>

        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Not a Crisis Service</h2>
          <p className="text-muted-foreground">
            Rise and Heal Psychotherapy provides psychotherapy for adults in Ontario. This website is not intended for crisis intervention. If you are in immediate danger or experiencing a mental health crisis, contact 911 or the nearest emergency department.
          </p>
        </section>

        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Jurisdiction</h2>
          <p className="text-muted-foreground">
            Services are provided by a Registered Psychotherapist (Qualifying) and are available to individuals physically located in Ontario, Canada. We do not offer therapy in jurisdictions where we are not licensed to practise.
          </p>
        </section>

        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Website Content</h2>
          <p className="text-muted-foreground">
            Content on this website is for educational and informational purposes. It should not replace medical, psychological, or legal advice. We strive to keep information current but do not guarantee accuracy or completeness.
          </p>
        </section>

        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Confidentiality & Communication</h2>
          <p className="text-muted-foreground">
            Email and website contact forms are used for scheduling and general inquiries. Please avoid sharing detailed clinical information via email. Secure virtual session platforms are used for psychotherapy appointments.
          </p>
        </section>

        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Updates</h2>
          <p className="text-muted-foreground">
            Terms may be updated without notice. Continued use of the website indicates acceptance of any changes. Questions can be directed to hello@riseandhealpsychotherapy.ca hello@riseandhealpsychotherapy.ca .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;

