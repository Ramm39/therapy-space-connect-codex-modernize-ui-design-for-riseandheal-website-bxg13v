import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sectionBackgrounds: Record<"aurora" | "mist" | "sky", string> = {
  aurora:
    "bg-[radial-gradient(circle_at_top,_hsla(172,68%,70%,0.22),_transparent_58%),radial-gradient(circle_at_bottom,_hsla(189,60%,82%,0.28),_transparent_62%)]",
  mist:
    "bg-[radial-gradient(circle_at_20%_20%,_hsla(176,64%,82%,0.4),_transparent_55%),radial-gradient(circle_at_80%_80%,_hsla(198,70%,88%,0.35),_transparent_55%)]",
  sky:
    "bg-[radial-gradient(circle_at_center,_hsla(190,62%,90%,0.45),_transparent_60%)]"
};

interface SpecialtySectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  background?: keyof typeof sectionBackgrounds;
  className?: string;
  children: ReactNode;
  align?: "left" | "center";
}

export const SpecialtySection = ({
  id,
  eyebrow,
  title,
  description,
  background = "aurora",
  className,
  children,
  align = "center"
}: SpecialtySectionProps) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden py-20 sm:py-24",
        sectionBackgrounds[background],
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/55 to-white/40 backdrop-blur-[1.5px]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-16 right-24 h-40 w-40 rounded-full bg-secondary/25 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6"
      >
        {(eyebrow || title || description) && (
          <div className={cn("mx-auto flex max-w-3xl flex-col gap-4", alignment)}>
            {eyebrow && (
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 shadow-[0_8px_30px_-12px_rgba(24,167,167,0.35)] backdrop-blur-md">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base text-muted-foreground sm:text-lg">{description}</p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default SpecialtySection;
