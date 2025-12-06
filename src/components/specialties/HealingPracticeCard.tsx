import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface HealingPracticeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const HealingPracticeCard = ({ title, description, icon: Icon, index }: HealingPracticeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[28px] border border-primary/10 bg-white/75 p-8 text-left shadow-[0_24px_70px_-40px_rgba(34,184,164,0.45)] backdrop-blur-2xl transition-transform duration-500"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-secondary/12 to-primary/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-secondary shadow-[0_16px_40px_-26px_rgba(34,184,164,0.55)] transition-transform duration-500 group-hover:-translate-y-1">
            <Icon className="h-6 w-6" strokeWidth={1.6} />
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">{title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default HealingPracticeCard;
