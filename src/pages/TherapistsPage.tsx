import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { therapists } from "@/components/Therapists";
import floatingShapes from "@/assets/floating-shapes.svg";
import soothingWaves from "@/assets/soothing-waves.svg";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const TherapistsPage = () => {
  usePageMetadata({
    title: "Therapists | Rise and Heal Psychotherapy",
    description: "Meet the compassionate therapists at Rise and Heal Psychotherapy and discover their specialties and approaches."
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-primary/10">
      <Navigation />
      <main className="flex-1">
        <section className="relative overflow-hidden py-24">
          <div
            className="absolute inset-0 opacity-70"
            style={{ backgroundImage: `url(${soothingWaves})`, backgroundSize: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/30" />
          <div className="absolute inset-0 pointer-events-none mix-blend-lighten opacity-50" style={{ backgroundImage: `url(${floatingShapes})` }} />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold tracking-wide uppercase text-xs">
              Meet the Team
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-foreground">
              Compassionate therapists committed to your growth
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Every specialist at Rise and Heal brings years of experience, evidence-based training, and a heartfelt commitment to holding space for your healing journey.
            </p>
          </div>
        </section>

        <section className="relative py-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5" />
          <div className="absolute -left-32 top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-orbit" />
          <div className="absolute -right-16 bottom-20 w-72 h-72 rounded-3xl bg-secondary/10 blur-3xl animate-orbit" style={{ animationDelay: "1.6s" }} />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid gap-10 lg:grid-cols-2">
              {therapists.map((therapist) => (
                <div
                  key={therapist.name}
                  className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-card/90 shadow-soft transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="grid md:grid-cols-[280px,1fr] gap-0">
                    <div className="relative h-72 md:h-full overflow-hidden">
                      <img src={therapist.image} alt={therapist.name} className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold text-foreground">{therapist.name}</h2>
                        <p className="mt-1 text-sm uppercase tracking-wide text-secondary font-semibold">{therapist.title}</p>
                        <p className="mt-4 text-muted-foreground">{therapist.experience}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          {therapist.specializations.map((spec) => (
                            <span
                              key={spec}
                              className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary shadow-inner"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          "{therapist.name.split(" ")[0]} believes in creating a safe space where your story is heard, your emotions are honored, and your goals lead the work we do together."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TherapistsPage;
