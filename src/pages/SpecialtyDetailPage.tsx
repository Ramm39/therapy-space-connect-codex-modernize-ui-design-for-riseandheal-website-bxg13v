import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import floatingShapes from "@/assets/floating-shapes.svg";
import soothingWaves from "@/assets/soothing-waves.svg";
import { BookButton } from "@/components/booking/BookButton";
import { useBookingModal } from "@/hooks/useBookingModal";
import { usePageMetadata } from "@/hooks/usePageMetadata";

export type SpecialtyContent = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  focusAreas: string[];
  support: string[];
  closing: string;
};

export const specialtyDetails: SpecialtyContent[] = [
  {
    slug: "anxiety-stress-overthinking",
    name: "Anxiety, Stress & Overthinking",
    summary:
      "Regain calm, soften spiralling thoughts, and rebuild trust with your nervous system.",
    intro:
      "Anxiety can feel like an endless loop of worry, muscle tension, and future-tripping. Together we practise grounding skills, explore root causes, and gently release the pressure to be perfect.",
    focusAreas: [
      "Generalized anxiety, panic, and chronic stress",
      "Perfectionism, people-pleasing, and high-functioning anxiety",
      "Racing thoughts, sleep disruption, and burnout recovery",
    ],
    support: [
      "Mind-body regulation techniques tailored to your daily life",
      "Practical CBT + DBT tools for calming spirals and unhooking from anxious thoughts",
      "Compassionate exploration of identity, culture, and expectations that keep anxiety in place",
    ],
    closing:
      "You deserve a pace of life that honours your energy. Sessions help you create rituals of rest, set boundaries, and move from survival mode into grounded presence.",
  },
  {
    slug: "depression-burnout",
    name: "Depression & Burnout",
    summary:
      "Reconnect with purpose, energy, and the parts of you that feel numbed out by exhaustion.",
    intro:
      "Depression and burnout often show up as heaviness, disconnection, and the feeling that your spark is missing. We collaborate to understand your nervous system and the systems you move through, so healing feels sustainable.",
    focusAreas: [
      "Low motivation, grief, and emotional fatigue",
      "Burnout from caregiving, school, or demanding workplaces",
      "Shame, self-criticism, and loss of identity",
    ],
    support: [
      "Compassionate pacing that honours low energy days",
      "Behavioural activation blended with nervous-system-friendly routines",
      "Narrative therapy to reconnect you with meaning and hope",
    ],
    closing:
      "We move slowly and intentionally, creating space for softness and relief. Healing is possible—even when life feels dim.",
  },
  {
    slug: "life-transitions-identity",
    name: "Life Transitions & Identity Challenges",
    summary:
      "Feel grounded through change, from career pivots to migration, relationships, and rediscovering yourself.",
    intro:
      "Life transitions can stir grief, uncertainty, and excitement all at once. Therapy offers a space to witness every part of the transition while building skills to move forward with clarity.",
    focusAreas: [
      "Career pivots, school changes, and big decisions",
      "Migration, relocation, and cultural identity shifts",
      "Questions of belonging, values, and personal direction",
    ],
    support: [
      "Values-aligned decision making and future planning",
      "Grounding strategies to navigate uncertainty and overwhelm",
      "Exploration of cultural narratives and family expectations",
    ],
    closing:
      "We co-create a roadmap that honours your story and helps you step into the next chapter with confidence and compassion.",
  },
  {
    slug: "gen-z-millennial-mental-health",
    name: "Gen Z & Millennial Mental Health",
    summary:
      "Therapy that meets you where you are—online, inclusive, and responsive to modern stressors.",
    intro:
      "You juggle academic pressures, career uncertainty, identity, and social media. Sessions provide a relatable space to unpack it all without judgment.",
    focusAreas: [
      "Academic stress, early career challenges, and burnout",
      "Relationship dynamics, boundaries, and digital fatigue",
      "Exploring identity, neurodiversity, and intersectional experiences",
    ],
    support: [
      "Tools for emotional regulation, procrastination, and motivation",
      "Skill-building for boundaries, communication, and self-advocacy",
      "Affirming space for multicultural, immigrant, and first-gen narratives",
    ],
    closing:
      "Together we build a toolkit that keeps you resourced, confident, and aligned with your values in a rapidly changing world.",
  },
  {
    slug: "womens-mental-health",
    name: "Women’s Mental Health & Empowerment",
    summary:
      "Honouring your voice, needs, and boundaries across every season of womanhood.",
    intro:
      "Women carry layered expectations and responsibilities. Therapy creates space for you to be witnessed, to rest, and to cultivate agency without guilt.",
    focusAreas: [
      "Stress, anxiety, and burnout in caregiving and leadership roles",
      "Reproductive mental health, fertility journeys, and postpartum experiences",
      "Cultural, faith-based, and generational narratives that shape identity",
    ],
    support: [
      "Feminist, trauma-informed, and culturally aware therapy",
      "Empowerment-focused coaching for boundaries and self-trust",
      "Mindfulness and somatic practices to reconnect with your body",
    ],
    closing:
      "You deserve a healing space where your intuition leads. Together we practise setting boundaries, speaking needs, and rewriting the stories that no longer serve you.",
  },
  {
    slug: "childhood-trauma-emotional-healing",
    name: "Childhood Trauma & Emotional Healing",
    summary:
      "Gently tend to past wounds so you can create secure, nurturing relationships today.",
    intro:
      "Surviving childhood trauma can impact how you relate, trust, and care for yourself. Therapy is a supportive container to process memories, regulate emotions, and build self-compassion.",
    focusAreas: [
      "Emotional neglect, parentification, and enmeshment",
      "Attachment wounds and relationship triggers",
      "Inner child healing and self-compassion work",
    ],
    support: [
      "Pacing that centres nervous system safety and choice",
      "Parts work, inner child exploration, and narrative repair",
      "Building routines that nurture self-worth and inner security",
    ],
    closing:
      "You are not defined by what happened to you. Together we create new patterns rooted in safety, softness, and dignity.",
  },
  {
    slug: "cultural-adjustment-immigrant-experiences",
    name: "Cultural Adjustment & Immigrant Experiences",
    summary:
      "Culturally responsive therapy that honours migration stories, intergenerational wisdom, and belonging.",
    intro:
      "Navigating multiple cultures can be joyful and exhausting. Therapy offers a space to explore identity, grief, and the complexities of building home in new places.",
    focusAreas: [
      "Acculturation stress, homesickness, and identity conflict",
      "Family expectations, boundaries, and intergenerational healing",
      "Language, belonging, and community integration",
    ],
    support: [
      "Narrative therapy to honour migration stories and resilience",
      "Coping skills for microaggressions and systemic barriers",
      "Support in balancing cultural values with personal needs",
    ],
    closing:
      "Your story is powerful. We honour where you come from while supporting the life you are creating here.",
  },
  {
    slug: "grief-loss-relationship-challenges",
    name: "Grief, Loss & Relationship Challenges",
    summary:
      "Hold space for grief while nurturing relationships with yourself and others.",
    intro:
      "Loss shows up in many forms—bereavement, separation, changing identities. Therapy supports you in naming the grief, accessing support, and moving forward with tenderness.",
    focusAreas: [
      "Bereavement, anticipatory grief, and complicated loss",
      "Relationship transitions, boundaries, and repair",
      "Self-compassion and meaning making after change",
    ],
    support: [
      "Rituals, storytelling, and legacy-building to honour loss",
      "Attachment-focused work to strengthen current relationships",
      "Somatic grounding techniques to process waves of emotion",
    ],
    closing:
      "We slow down to meet your grief with care, allowing you to stay connected to what matters most while rebuilding hope.",
  },
];

const SpecialtyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useBookingModal();

  const specialty = useMemo(
    () => specialtyDetails.find((item) => item.slug === slug),
    [slug]
  );

  usePageMetadata({
    title: specialty
      ? `${specialty.name} | Rise and Heal Psychotherapy`
      : "Specialty | Rise and Heal Psychotherapy",
    description: specialty?.summary,
  });

  if (!specialty) {
    return <Navigate to="/specialties" replace />;
  }

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
              className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/30"
              aria-hidden
            />
            <div
              className="absolute inset-0 mix-blend-soft-light opacity-60 animate-floating-shapes"
              style={{ backgroundImage: `url(${floatingShapes})` }}
              aria-hidden
            />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-soft">
              Specialty Support
            </span>
            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl">
              {specialty.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {specialty.summary}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
                to="/specialties"
                className="rounded-2xl border border-primary/30 bg-white/80 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-white"
              >
                Back to Specialties
              </Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-primary/10"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[0.8fr,1.2fr]">
            <div className="space-y-6 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-foreground">
                What We Explore
              </h2>
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {specialty.focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-white/90 p-6 text-left shadow-soft">
                <h3 className="text-lg font-semibold text-foreground">
                  How Support Looks
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {specialty.support.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-white/80 p-4 shadow-inner"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 rounded-[32px] border border-primary/10 bg-white/95 p-10 shadow-healing">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Therapy With Rise and Heal
                </h2>
                <p className="text-muted-foreground">
                  Sessions blend compassionate listening with actionable skills.
                  We move at a pace that feels respectful of your nervous system
                  and your lived reality.
                </p>
                <p className="text-muted-foreground">{specialty.intro}</p>
              </div>
              <div className="space-y-3 rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/10 to-white/90 p-6 text-sm text-muted-foreground shadow-soft">
                <p>
                  Appointments are offered online for adults (18+) living
                  anywhere in Ontario. Choose weekly or bi-weekly sessions, with
                  flexible evening availability Tuesday through Saturday.
                </p>
                <p>{specialty.closing}</p>
              </div>
              <BookButton label="Begin Your Healing" onClick={openModal} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialtyDetailPage;
