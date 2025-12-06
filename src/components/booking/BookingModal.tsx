import { useEffect, useId, useMemo, useState, type FormEvent, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookButton } from "./BookButton";
import { toast } from "@/components/ui/sonner";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: 24 },
};

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [isRendering, setIsRendering] = useState(isOpen);

  const fieldClassName =
    "rounded-2xl border-primary/20 bg-white/70 px-4 py-3 text-sm shadow-inner transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white placeholder:text-muted-foreground/70";

  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsRendering(true);
      return;
    }

    const timeout = window.setTimeout(() => setIsRendering(false), 260);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Session request received", {
      description: "We’ll be in touch shortly to confirm the details.",
    });
    setFormState({ name: "", email: "", phone: "", date: "", message: "" });
    onClose();
  };

  const portalTarget = useMemo(() => (typeof document !== "undefined" ? document.body : null), []);

  if (!mounted || !portalTarget || !isRendering) {
    return null;
  }

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/35 backdrop-blur-sm"
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={overlayVariants}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onMouseDown={handleOverlayClick}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        variants={modalVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-xl rounded-3xl bg-white/90 p-8 shadow-[0_24px_80px_-20px_rgba(34,184,164,0.35)] backdrop-blur-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,184,164,0.18),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(45,212,191,0.18),_transparent_55%)]" />
            </div>
            <div className="relative flex flex-col gap-6">
              <header className="flex flex-col gap-2 text-left">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">Book a session</span>
                <h2 id={titleId} className="text-3xl font-semibold tracking-tight text-foreground">
                  Let’s create space for your healing
                </h2>
                <p id={descriptionId} className="text-sm text-muted-foreground">
                  Share your preferences below and our care team will connect with scheduling options that fit your rhythm.
                </p>
              </header>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="booking-name" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="booking-name"
                      required
                      value={formState.name}
                      onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                      className={fieldClassName}
                      placeholder="Alex Morgan"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="booking-email" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Email
                    </Label>
                    <Input
                      id="booking-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                      className={fieldClassName}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="booking-phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Phone (optional)
                    </Label>
                    <Input
                      id="booking-phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(event) => setFormState((prev) => ({ ...prev, phone: event.target.value }))}
                      className={fieldClassName}
                      placeholder="(555) 000-1234"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="booking-date" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Preferred Date & Time
                    </Label>
                    <Input
                      id="booking-date"
                      type="datetime-local"
                      required
                      value={formState.date}
                      onChange={(event) => setFormState((prev) => ({ ...prev, date: event.target.value }))}
                      className={fieldClassName}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="booking-message" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Message / Notes
                  </Label>
                  <Textarea
                    id="booking-message"
                    rows={4}
                    value={formState.message}
                    onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
                    className={fieldClassName}
                    placeholder="Anything you’d like us to know ahead of time?"
                  />
                </div>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <BookButton
                    type="button"
                    label="Cancel"
                    variant="secondary"
                    className="w-full sm:w-auto"
                    onClick={onClose}
                  />
                  <BookButton type="submit" label="Submit" className="w-full sm:w-auto" />
                </div>
              </form>
            </div>
      </motion.div>
    </motion.div>,
    portalTarget,
  );
};

export default BookingModal;
