import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpecialtyCardProps {
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  index: number;
}

export const SpecialtyCard = ({ title, description, highlights, icon: Icon, index }: SpecialtyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.04 }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-primary/10 bg-white/75 p-8 shadow-[0_28px_90px_-50px_rgba(34,184,164,0.55)] backdrop-blur-2xl transition-transform duration-500"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-primary/12 via-secondary/10 to-primary/5" />
      </div>
      <div className="relative flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-[0_18px_45px_-28px_rgba(34,184,164,0.65)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_26px_70px_-30px_rgba(34,184,164,0.75)]">
            <Icon className="h-7 w-7" strokeWidth={1.6} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="group/title relative inline-flex items-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                {title}
              </span>
              <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary/70 transition-transform duration-500 group-hover:scale-x-100" />
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className={cn(
                "rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_12px_35px_-24px_rgba(34,184,164,0.65)] backdrop-blur-lg transition-colors duration-300",
                "group-hover:bg-gradient-to-r group-hover:from-primary/15 group-hover:via-secondary/20 group-hover:to-primary/10"
              )}
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default SpecialtyCard;
