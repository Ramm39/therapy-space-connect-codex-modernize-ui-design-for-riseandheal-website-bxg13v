import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const PrivacyPolicyPage = () => {
  usePageMetadata({
    title: "Privacy Policy & Terms of Use | Rise and Heal Psychotherapy",
    description:
      "Learn how Rise and Heal Psychotherapy collects, protects, and uses your personal health information in compliance with PHIPA and CRPO standards."
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/10">
      <Navigation />
      <main className="mx-auto max-w-4xl space-y-12 px-6 py-24">
        <header className="space-y-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Privacy Policy & Terms of Use
          </p>
          <h1 className="text-4xl font-bold text-foreground">
            Rise and Heal Psychotherapy
          </h1>
          <p className="text-lg text-muted-foreground">
            Your privacy and confidentiality are our top priorities. This page explains how we
            collect, use, and protect your personal information in accordance with PHIPA and CRPO
            standards of practice.
          </p>
        </header>

        {/* 1. Introduction */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to Rise and Heal Psychotherapy. <br />
            Your privacy and confidentiality are our top priorities. This page explains how we
            collect, use, and protect your personal information in accordance with the Personal
            Health Information Protection Act (PHIPA) and the College of Registered Psychotherapists
            of Ontario (CRPO) standards of practice. <br />
            By using this website or our services, you agree to the terms outlined below.
          </p>
        </section>

        {/* 2. Privacy & Confidentiality */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">2. Privacy & Confidentiality</h2>
          <p className="text-muted-foreground">
            All personal and health information shared with Rise and Heal Psychotherapy is kept
            confidential and stored securely. Your information will never be shared without your
            written consent, except in cases where disclosure is required by law, including:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>When there is a risk of serious harm to yourself or others</li>
            <li>When there is suspicion of abuse or neglect of a child, elder, or vulnerable person</li>
            <li>When required by a court order or legal process</li>
          </ul>
          <p className="text-muted-foreground">
            All virtual sessions are conducted using PHIPA-compliant, encrypted platforms to ensure
            your information remains private and secure.
          </p>
        </section>

        {/* 3. Collection & Use of Information */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">
            3. Collection & Use of Information
          </h2>
          <p className="text-muted-foreground">
            We collect limited personal information, such as your name, contact details, and
            relevant background information, for the purpose of:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Providing psychotherapy and related services</li>
            <li>Scheduling appointments and sending confirmations</li>
            <li>Managing billing and receipts</li>
            <li>Maintaining accurate clinical records as required by the CRPO</li>
          </ul>
          <p className="text-muted-foreground">
            We do not share, sell, or distribute your personal data to third parties.
          </p>
        </section>

        {/* 4. Website Use & Cookies */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">4. Website Use & Cookies</h2>
          <p className="text-muted-foreground">
            This website may collect general information such as page visits, form submissions, and
            browser type for basic analytics and improvement. No personally identifiable health
            information is collected through the website.
          </p>
          <p className="text-muted-foreground">
            If you contact us via a form or email, please note that while every effort is made to
            maintain security, electronic communication may carry inherent risks.
          </p>
        </section>

        {/* 5. Limits of Service */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">5. Limits of Service</h2>
          <p className="text-muted-foreground">
            Rise and Heal Psychotherapy provides counselling and psychotherapy services to clients
            residing in Ontario, Canada. We are not a crisis or emergency service.
          </p>
          <p className="text-muted-foreground">
            If you are in crisis or require immediate help:
            <br />
            📞 Call Talk Suicide Canada at{" "}
            <a href="tel:18334564566" className="text-primary hover:text-primary/80">
              1-833-456-4566
            </a>
            <br />
            💬 Text CONNECT to{" "}
            <a href="sms:686868" className="text-primary hover:text-primary/80">
              686868
            </a>{" "}
            (Kids Help Phone)
            <br />
            🚨 Or call{" "}
            <a href="tel:911" className="text-primary hover:text-primary/80">
              911
            </a>{" "}
            for urgent medical or safety concerns.
          </p>
        </section>

        {/* 6. Terms of Use */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">6. Terms of Use</h2>
          <p className="text-muted-foreground">
            All content on this website (text, graphics, and materials) is for informational
            purposes only and should not be considered medical or mental health advice.
          </p>
          <p className="text-muted-foreground">
            Visiting this site or contacting us through email does not establish a therapeutic
            relationship until a formal agreement is made and consent is obtained.
          </p>
        </section>

        {/* 7. Record Retention */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">7. Record Retention</h2>
          <p className="text-muted-foreground">
            Client records are maintained securely for at least ten (10) years after the last
            contact date, or as required by CRPO and PHIPA guidelines. You may request access to
            your records in writing, subject to verification of identity and legal requirements.
          </p>
        </section>

        {/* 8. Your Rights */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">8. Your Rights</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Access your personal information</li>
            <li>Request corrections to inaccurate information</li>
            <li>
              Withdraw consent for the use or disclosure of your data (except where required by law)
            </li>
          </ul>
          <p className="text-muted-foreground">
            To make a request, please contact:
            <br />
            📧{" "}
            <a href="mailto:hello@riseandhealpsychotherapy.ca" className="text-primary hover:text-primary/80">
              hello@riseandhealpsychotherapy.ca
            </a>
          </p>
        </section>

        {/* 9. Updates to This Policy */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">9. Updates to This Policy</h2>
          <p className="text-muted-foreground">
            This Privacy Policy and Terms of Use may be updated periodically to reflect current laws
            and practice standards. The most recent version will always be available on our website.
          </p>
        </section>

        {/* 10. Contact */}
        <section className="space-y-4 rounded-[32px] border border-primary/10 bg-white/90 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">10. Contact</h2>
          <p className="text-muted-foreground">
            If you have questions or concerns about privacy, confidentiality, or how your
            information is handled, please contact:
          </p>
          <p className="text-muted-foreground">
            <strong>Urvashi Mendpara</strong>, Registered Psychotherapist (Qualifying)
            <br />
            College of Registered Psychotherapists of Ontario (CRPO)
            <br />
            📧{" "}
            <a href="mailto:hello@riseandhealpsychotherapy.ca" className="text-primary hover:text-primary/80">
              hello@riseandhealpsychotherapy.ca
            </a>
            <br />
            🌿 Serving clients virtually across Ontario
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
