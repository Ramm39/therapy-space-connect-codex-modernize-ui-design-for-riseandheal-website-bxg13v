import { useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/rise-and-heal-logo.png";
import { BookButton } from "@/components/booking/BookButton";
import { useBookingModal } from "@/hooks/useBookingModal";
import { AnimatePresence, motion } from "framer-motion";

const homeLink = { label: "Home", to: "/" };

const simpleLinks = [
  { label: "Specialties", to: "/specialties" },
  { label: "Affordable Therapy", to: "/affordable-therapy" },
  { label: "Contact", to: "/contact" },
];

const therapistLinks = [
  { label: "Urvashi Mendpara", to: "/therapists/urvashi-mendpara" },
];

const aboutLinks = [
  { label: "Our Story", to: "/about/our-story" },
  { label: "FAQs", to: "/about/faqs" },
  { label: "Resources", to: "/about/resources" },
  { label: "Blog", to: "/about/blog" },
];

const exploreLinks = [
  homeLink,
  // { label: "About Us", to: "/about" },
  ...simpleLinks,
];

const useHoverMenu = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const hideTimeoutRef = useRef<number | null>(null);

  const clearTimers = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const openMenu = () => {
    clearTimers();
    if (!visible) {
      setVisible(true);
    }
    window.requestAnimationFrame(() => setOpen(true));
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      hideTimeoutRef.current = window.setTimeout(() => {
        setVisible(false);
        hideTimeoutRef.current = null;
      }, 200);
    }, 200);
  };

  const closeImmediately = () => {
    clearTimers();
    setOpen(false);
    setVisible(false);
  };

  useEffect(() => () => clearTimers(), []);

  const toggleMenu = () => {
    if (open) {
      scheduleClose();
    } else {
      openMenu();
    }
  };

  const handleFocus = () => {
    openMenu();
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocus = event.relatedTarget as Node | null;
    if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
      scheduleClose();
    }
  };

  return {
    open,
    visible,
    openMenu,
    scheduleClose,
    toggleMenu,
    handleFocus,
    handleBlur,
    closeImmediately,
  };
};

const Navigation = () => {
  const { openModal } = useBookingModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const therapistMenu = useHoverMenu();
  const aboutMenu = useHoverMenu();

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex max-w-[240px] flex-shrink-0 items-center gap-3"
          aria-label="Rise and Heal Psychotherapy home"
        >
          <div className="flex h-16 w-25 items-center justify-center overflow-hidden shadow-soft transition-all duration-300 hover:shadow-healing focus-visible:outline-none">
            <img
              src={logo}
              alt="Rise and Heal Psychotherapy logo"
              className="h-[110%] w-[110%] object-contain scale-120 -translate-y-[2px]"
            />
          </div>
        </Link>

        <div className="hidden flex-nowrap items-center gap-6 whitespace-nowrap lg:flex lg:gap-6 xl:gap-8 2xl:gap-10">
          <NavLink
            key={homeLink.to}
            to={homeLink.to}
            end
            className={({ isActive }) =>
              `relative rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-300 hover:text-primary hover:underline hover:decoration-teal-500 focus-visible:outline-none ${
                isActive ? "text-primary" : "text-foreground/80"
              }`
            }
          >
            {homeLink.label}
          </NavLink>

          <div
            className="relative flex items-center gap-1"
            onMouseEnter={therapistMenu.openMenu}
            onMouseLeave={therapistMenu.scheduleClose}
            onFocus={therapistMenu.handleFocus}
            onBlur={therapistMenu.handleBlur}
          >
            <button
              type="button"
              onClick={therapistMenu.toggleMenu}
              aria-haspopup="true"
              aria-expanded={therapistMenu.open}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:text-primary hover:underline hover:decoration-teal-500 focus-visible:outline-none"
            >
              Therapists
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  therapistMenu.open ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
            <AnimatePresence>
              {therapistMenu.visible && (
                <motion.div
                  key="therapist-menu"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{
                    opacity: therapistMenu.open ? 1 : 0,
                    y: therapistMenu.open ? 0 : -5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full z-50 w-64 rounded-3xl border border-primary/10 bg-white/95 p-4 shadow-healing backdrop-blur-md"
                  onMouseEnter={therapistMenu.openMenu}
                  onMouseLeave={therapistMenu.scheduleClose}
                >
                  <ul className="space-y-1 text-sm text-foreground">
                    {therapistLinks.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          onClick={therapistMenu.closeImmediately}
                          className={({ isActive }) =>
                            `block rounded-2xl px-4 py-2 transition-all duration-200 hover:bg-primary/10 hover:underline hover:decoration-teal-500 ${
                              isActive ? "text-primary" : "text-foreground/80"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative flex items-center gap-1"
            onMouseEnter={aboutMenu.openMenu}
            onMouseLeave={aboutMenu.scheduleClose}
            onFocus={aboutMenu.handleFocus}
            onBlur={aboutMenu.handleBlur}
          >
            <button
              type="button"
              onClick={aboutMenu.toggleMenu}
              aria-haspopup="true"
              aria-expanded={aboutMenu.open}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:text-primary hover:underline hover:decoration-teal-500 focus-visible:outline-none"
            >
              About
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  aboutMenu.open ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
            <AnimatePresence>
              {aboutMenu.visible && (
                <motion.div
                  key="about-menu"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{
                    opacity: aboutMenu.open ? 1 : 0,
                    y: aboutMenu.open ? 0 : -5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full z-50 w-64 rounded-3xl border border-primary/10 bg-white/95 p-4 shadow-healing backdrop-blur-md"
                  onMouseEnter={aboutMenu.openMenu}
                  onMouseLeave={aboutMenu.scheduleClose}
                >
                  <ul className="space-y-1 text-sm text-foreground">
                    {aboutLinks.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          onClick={aboutMenu.closeImmediately}
                          className={({ isActive }) =>
                            `block rounded-2xl px-4 py-2 transition-all duration-200 hover:bg-primary/10 hover:underline hover:decoration-teal-500 ${
                              isActive ? "text-primary" : "text-foreground/80"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {simpleLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-300 hover:text-primary hover:underline hover:decoration-teal-500 focus-visible:outline-none ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <BookButton
            label="Book"
            onClick={() =>
              window.open(
                "https://riseandhealpsychotherapy.janeapp.com/",
                "_blank"
              )
            }
            className="px-4 py-2 text-xs"
          />
          <button
            type="button"
            onClick={toggleMobile}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex items-center justify-center rounded-xl border border-primary/20 bg-white/80 p-2 text-foreground shadow-soft transition hover:border-primary/40"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-primary/10 bg-white/95 px-4 py-6 shadow-soft">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Therapists
              </p>
              <ul className="mt-3 space-y-1">
                {therapistLinks.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-primary/10 ${
                          isActive ? "text-primary" : "text-foreground/80"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                About Us
              </p>
              <ul className="mt-3 space-y-1">
                {aboutLinks.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-primary/10 ${
                          isActive ? "text-primary" : "text-foreground/80"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Explore
              </p>
              <ul className="mt-3 space-y-1">
                {exploreLinks.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-primary/10 ${
                          isActive ? "text-primary" : "text-foreground/80"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* <BookButton
              label="Book Session"
              onClick={() => {
                closeMobile();
                openModal();
              }}
              className="w-full justify-center"
            /> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
