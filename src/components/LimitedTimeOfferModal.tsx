import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { BookButton } from "@/components/booking/BookButton";
import { useBookingModal } from "@/hooks/useBookingModal";

const SESSION_STORAGE_KEY = "riseheal_session_id";
const ACTIVE_SESSION_KEY = "riseheal_active_session";
const OFFER_SHOWN_KEY = "riseheal_offer_shown";

const ensureSession = () => {
  if (typeof window === "undefined") return undefined;

  let sessionId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  }

  const activeSession = window.localStorage.getItem(ACTIVE_SESSION_KEY);
  if (activeSession !== sessionId) {
    window.localStorage.removeItem(OFFER_SHOWN_KEY);
    window.localStorage.setItem(ACTIVE_SESSION_KEY, sessionId);
  }

  return sessionId;
};

export const LimitedTimeOfferModal = () => {
  const { openModal: openBooking } = useBookingModal();
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const animationTimeoutRef = useRef<number>();
  const triggerHandledRef = useRef(false);
  const delayTimeoutRef = useRef<number>();
  const sessionIdRef = useRef<string | undefined>();

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    sessionIdRef.current = ensureSession();
    const sessionId = sessionIdRef.current;

    if (!sessionId) return undefined;

    if (window.localStorage.getItem(OFFER_SHOWN_KEY) === sessionId) {
      return undefined;
    }

    const openOffer = () => {
      if (triggerHandledRef.current) return;
      triggerHandledRef.current = true;
      window.removeEventListener("click", handleFirstInteraction);
      if (delayTimeoutRef.current) {
        window.clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = undefined;
      }

      window.localStorage.setItem(OFFER_SHOWN_KEY, sessionId);
      setShouldRender(true);
      requestAnimationFrame(() => setIsOpen(true));
    };

    const handleFirstInteraction = () => {
      openOffer();
    };

    delayTimeoutRef.current = window.setTimeout(openOffer, 2000);

    window.addEventListener("click", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      if (delayTimeoutRef.current) {
        window.clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = undefined;
      }
    };
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (animationTimeoutRef.current) {
      window.clearTimeout(animationTimeoutRef.current);
    }
    animationTimeoutRef.current = window.setTimeout(() => {
      setShouldRender(false);
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const handleBookSession = useCallback(() => {
    closeModal();
    openBooking();
  }, [closeModal, openBooking]);

  if (!shouldRender) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <motion.div
        role="presentation"
        onClick={closeModal}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="limited-offer-heading"
        aria-describedby="limited-offer-body"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-white/95 p-6 text-slate-700 shadow-xl backdrop-blur-md"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
          aria-label="Close limited time offer"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex flex-col gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Limited Time Offer
          </span>
          <h3
            id="limited-offer-heading"
            className="text-xl font-semibold text-slate-800"
          >
            Your first 50 minutes consultation with{" "}
            <a
              href="/therapists/urvashi-mendpara"
              className="text-primary underline hover:text-primary/80"
            >
              Urvashi Mendpara
            </a>{" "}
            is Completely free!
          </h3>
          <p className="text-xs text-slate-500 font-semibold">
            Book now to secure your spot
          </p>
          <BookButton
            label="Book now"
            onClick={() =>
              window.open(
                "https://riseandhealpsychotherapy.janeapp.com/",
                "_blank"
              )
            }
            className="mx-auto min-w-[12rem]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LimitedTimeOfferModal;
