import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Phone, Mail, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please provide a valid email."),
  message: z.string().min(10, "Share a few words about what brings you here."),
  consent: z.boolean().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    toast.success("Session request received", {
      description:
        "Thank you for reaching out. We will respond within 1-2 business days.",
    });
    reset();
    return values;
  });

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-primary/10"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="flex flex-col gap-6 rounded-[32px] border border-primary/10 bg-white/90 p-10 shadow-soft">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Get in touch
          </span>
          <h2 className="text-3xl font-semibold text-foreground">
            Let's begin your healing conversation
          </h2>
          <p className="text-muted-foreground">
            Share what you are moving through and we'll reach out within two
            business days. We offer free 15-minute consultations to help you
            feel confident before committing to sessions.
          </p>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" aria-hidden />
              <span>5197012310
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" aria-hidden />
              <a
                href="mailto:hello@riseandhealpsychotherapy.ca "
                className="underline-offset-4 hover:underline"
              >
                hello@riseandhealpsychotherapy.ca
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare
                className="mt-1 h-5 w-5 text-primary"
                aria-hidden
              />
              <p>
                Secure, PHIPA-compliant virtual sessions for adults 18+ across
                Ontario. Evening and weekend appointments available.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 rounded-[32px] border border-primary/10 bg-white/95 p-10 shadow-healing"
          aria-label="Contact form"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-foreground"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full rounded-2xl border border-primary/20 bg-white/90 px-4 py-3 text-sm text-foreground shadow-inner focus:border-primary"
              placeholder="Your full name"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full rounded-2xl border border-primary/20 bg-white/90 px-4 py-3 text-sm text-foreground shadow-inner focus:border-primary"
              placeholder="you@email.com"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-foreground"
            >
              Message / Notes
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className="w-full rounded-2xl border border-primary/20 bg-white/90 px-4 py-3 text-sm text-foreground shadow-inner focus:border-primary"
              placeholder="How can we support you?"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p className="text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1 h-4 w-4 rounded border border-primary/30 text-primary focus:ring-primary"
            />
            <span>
              I consent to be contacted via email in accordance with PHIPA
              standards.
            </span>
          </label>

          <button
            disabled={isSubmitting}
            onClick={() =>
              window.open(
                "https://riseandhealpsychotherapy.janeapp.com/",
                "_blank"
              )
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
