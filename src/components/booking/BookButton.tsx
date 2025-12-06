import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

export interface BookButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<MotionProps, "whileHover" | "whileTap"> {
  label: string;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary via-secondary to-primary/90 text-white shadow-[0_18px_50px_-20px_rgba(34,184,164,0.75)] hover:shadow-[0_22px_60px_-20px_rgba(34,184,164,0.75)]",
  secondary:
    "border border-primary/40 text-primary shadow-[0_12px_40px_-24px_rgba(34,184,164,0.55)] hover:border-primary/60 hover:bg-primary/5",
};

export const BookButton = forwardRef<HTMLButtonElement, BookButtonProps>(
  ({ label, variant = "primary", className, whileHover, whileTap, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        type={props.type ?? "button"}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "shadow-soft",
          variantStyles[variant],
          className,
        )}
        whileHover={whileHover ?? { scale: 1.05 }}
        whileTap={whileTap ?? { scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10">{label}</span>
        {variant === "primary" && (
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}
      </motion.button>
    );
  },
);

BookButton.displayName = "BookButton";

export default BookButton;
