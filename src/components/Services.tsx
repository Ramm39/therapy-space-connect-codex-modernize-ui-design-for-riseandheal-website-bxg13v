import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  BrainCog,
  HeartPulse,
  Puzzle,
  ShieldCheck,
  Users
} from "lucide-react";
import soothingPattern from "@/assets/soothing-waves.svg";
import servicesHeaderImage from "@/assets/our-therapy-services.svg";

export const services = [
  {
    icon: BrainCog,
    title: "Comprehensive Mental Health Assessments",
    description:
      "Collaborative evaluations that clarify diagnoses, identify strengths, and translate insight into an actionable treatment roadmap.",
    focus: "Clarify what is happening and where to focus next.",
    experience:
      "Integrative biopsychosocial interviews, standardized measures, and collaborative formulation that ends with a personalized plan you can trust.",
    idealFor: "Adults who want clinical clarity about symptoms, diagnoses, or how to coordinate care across providers.",
    modalities: ["Biopsychosocial Interviewing", "DSM-5 & ICD-11 Measures", "Collaborative Formulation"]
  },
  {
    icon: Brain,
    title: "Mood & Anxiety Therapy",
    description:
      "Personalized support to reduce overwhelm, stabilize mood, and build habits that protect your mental health between sessions.",
    focus: "Reduce distress and restore emotional steadiness.",
    experience:
      "Weekly 50-minute sessions blending CBT, mindfulness, and nervous-system regulation practices tailored to your symptoms and lifestyle.",
    idealFor: "Individuals navigating persistent worry, panic cycles, or depressive episodes that disrupt daily life.",
    modalities: ["CBT", "Mindfulness-Based Stress Reduction", "Behavioral Activation"]
  },
  {
    icon: Puzzle,
    title: "Personality Integration Therapy",
    description:
      "Depth-oriented work that gently unwinds long-standing patterns, strengthens identity cohesion, and nurtures self-compassion.",
    focus: "Transform entrenched patterns into flexible, values-led choices.",
    experience:
      "Schema therapy, parts work, and experiential exercises supported by psychodynamic exploration and structured home practices.",
    idealFor: "Adults working through personality disorder diagnoses or chronic relational themes that feel hard to shift.",
    modalities: ["Schema Therapy", "Parts Work", "Emotion-Focused Techniques"]
  },
  {
    icon: HeartPulse,
    title: "Dialectical Behavior Therapy Skills",
    description:
      "Hands-on coaching to build emotional regulation, mindfulness, interpersonal effectiveness, and distress tolerance capacities.",
    focus: "Practice skills that create stability during life's most intense moments.",
    experience:
      "Skills sessions, diary card reviews, and between-session coaching that reinforce new coping strategies in real time.",
    idealFor: "People managing intense emotions, self-harm urges, or Borderline Personality Disorder.",
    modalities: ["DBT Skills Training", "Mindfulness", "Coaching & Diary Cards"]
  },
  {
    icon: ShieldCheck,
    title: "Trauma & Resilience Therapy",
    description:
      "Trauma-informed care that releases stored survival responses and rebuilds trust in your body, relationships, and future.",
    focus: "Create safety, integration, and a renewed sense of possibility.",
    experience:
      "EMDR, somatic grounding, and narrative processing paced to your nervous system and readiness for change.",
    idealFor: "Survivors of trauma who experience flashbacks, hypervigilance, or dissociation tied to past events.",
    modalities: ["EMDR", "Somatic Experiencing", "Narrative Processing"]
  },
  {
    icon: Users,
    title: "Interpersonal Growth Groups",
    description:
      "Supportive group spaces that rehearse new relational skills, strengthen boundaries, and cultivate authentic connection.",
    focus: "Build confidence practicing new ways of relating in real time.",
    experience:
      "Facilitated 90-minute sessions combining process feedback, psychoeducation, and structured skill rehearsal.",
    idealFor: "Adults seeking community while redefining attachment patterns, communication, and belonging.",
    modalities: ["Group Process", "Interpersonal Effectiveness", "Attachment Repair"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-gradient" />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url(${soothingPattern})` }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="sr-only">Our Therapy Services</h2>
          <div className="flex justify-center mb-6">
            <img
              src={servicesHeaderImage}
              alt="Our Therapy Services"
              className="w-full max-w-3xl drop-shadow-lg"
            />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a range of specialized therapy services tailored to your unique needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group text-center hover:shadow-healing transition-all duration-500 hover:-translate-y-3 transform-3d backdrop-blur-sm bg-card/90 border-2 border-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
                  <service.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-500" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
