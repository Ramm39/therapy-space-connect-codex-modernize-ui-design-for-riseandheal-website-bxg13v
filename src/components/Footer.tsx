import { Link } from "react-router-dom";
import { useBookingModal } from "@/hooks/useBookingModal";
import logo from "@/assets/rise-and-heal-logo.png";
import lgbt from "@/assets/vecteezy_lgbtq-heart-shape-love-circle-sticker-sign-pride-in-diversity_7747309-removebg-preview (1).png";

const Footer = () => {
  const { openModal } = useBookingModal();

  return (
    <footer className="relative mt-24 border-t border-primary/10 bg-white/95">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:px-12 lg:grid-cols-2 lg:items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
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
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Providing secure, PHIPA-compliant online therapy across Ontario.
            </p>
            <Link
              to="/privacy-policy"
              className="mt-2 inline-block text-sm text-primary underline hover:text-primary/80 transition-colors duration-200"
            >
              Privacy Policy & Terms of Use
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <a
              href="https://riseandhealpsychotherapy.janeapp.com/"
              target="_blank"
              className="rounded-full bg-[#8C8CA8] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#7c7c98]"
            >
              Client Portal
            </a>
          </div>
          {/* Crisis Notice */}
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">
              Please note that Rise and Heal Psychotherapy is{" "}
              <u>not a crisis service.</u>
            </p>
            <p>
              If you are in crisis or need immediate support:
              <br />
              📞 <strong>Talk:</strong>{" "}
              <a
                href="tel:18334564566"
                className="text-primary hover:text-primary/80"
              >
                1-833-456-4566
              </a>{" "}
              (Talk Suicide Canada Line)
              <br />
              💬 <strong>Text:</strong>{" "}
              <a
                href="sms:45645"
                className="text-primary hover:text-primary/80"
              >
                45645
              </a>{" "}
              or text <strong>CONNECT</strong> to{" "}
              <a
                href="sms:686868"
                className="text-primary hover:text-primary/80"
              >
                686868
              </a>{" "}
              (Kids Help Phone)
              <br />
              🚨 <strong>If you are in danger</strong> or need urgent help, call{" "}
              <a href="tel:911" className="text-primary hover:text-primary/80">
                911
              </a>{" "}
              or go to your nearest emergency department.
            </p>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col justify-between space-y-10 lg:items-end">
          {/* Right Column */}
          <div className="flex flex-col justify-between space-y-10 lg:items-end">
            {/* Explore Links */}
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Explore
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about/our-story" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/specialties" className="hover:text-primary">
                    Specialties
                  </Link>
                </li>
                <li>
                  <Link to="/affordable-therapy" className="hover:text-primary">
                    Affordable Therapy
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/therapists/urvashi-mendpara"
                    className="hover:text-primary"
                  >
                    About Urvashi Mendpara
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info — Newly Added */}
            <div className="space-y-3 text-sm text-muted-foreground lg:text-right">
              {/* Phone */}
              <a
                href="tel:5197012310
"
                className="flex items-center gap-2 lg:justify-end hover:text-primary transition"
              >
                <i className="fa-solid fa-phone text-primary text-lg"></i>
                <span>5197012310</span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@riseandhealpsychotherapy.ca"
                className="flex items-center gap-2 lg:justify-end hover:text-primary transition"
              >
                <i className="fa-solid fa-envelope text-primary text-lg"></i>
                <span>hello@riseandhealpsychotherapy.ca</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col items-center lg:items-end space-y-4">
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#8C8CA8] text-white"
                >
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#8C8CA8] text-white"
                >
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#8C8CA8] text-white"
                >
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#8C8CA8] text-white"
                >
                  <i className="fa-brands fa-youtube text-lg"></i>
                </a>
              </div>

              {/* LGBTQ Badge if needed */}
              {/* <img src={lgbt} alt="LGBTQ Friendly" className="h-32 w-auto" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-primary/10 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © 2025 Rise and Heal Psychotherapy | Urvashi Mendpara, Registered
            Psychotherapist (Qualifying), College of Registered Psychotherapists
            of Ontario (CRPO)
            <br />
            Practicing under the supervision of a Registered Psychotherapist in
            good standing with the CRPO.
          </p>
        </div>
      </div> */}

      {/* Floating Button (Mobile) */}
      {/* <div className="pointer-events-none fixed bottom-6 right-6 z-40 flex justify-end lg:hidden">
        <div className="pointer-events-auto rounded-3xl bg-white/95 p-3 shadow-healing">
          <BookButton label="Book Session" onClick={openModal} />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
