import React from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const EFFECTIVE_DATE = "September 22, 2026";

const Section = ({ heading, children }) => (
  <div className="mb-10">
    <h2 className="heading-serif text-xl md:text-2xl mb-3">{heading}</h2>
    <div className="text-sm text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Privacy Policy"
        description="How EEX Origin collects, uses, and protects the personal data you share with us, in line with India's Digital Personal Data Protection Act, 2023."
        path="/privacy-policy"
      />

      <section className="bg-green-pale py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-eyebrow">Legal</p>
          <h1 className="heading-serif text-3xl md:text-5xl mt-4">Privacy Policy</h1>
          <p className="mt-4 text-sm text-gray-500">Effective {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section heading="Who we are">
            <p>
              This Privacy Policy applies to the website operated by Energy
              Exchange Origin LLP ("EEX Origin", "we", "us", or "our"),
              registered at 703-1, 3rd Floor, Oppanakara Street, Coimbatore,
              Tamil Nadu — 641001, India.
            </p>
          </Section>

          <Section heading="What information we collect">
            <p>
              <strong>Information you give us directly.</strong> When you use
              the contact form on this site, we collect your name, email
              address, phone number, the service you're interested in, and
              the details you write in your message.
            </p>
            <p>
              <strong>Information collected automatically.</strong> We use
              Firebase Analytics to understand how visitors use this site —
              this can include general usage data such as pages visited and
              approximate device/browser information. We do not use this
              data to identify you personally, and this site does not run
              third-party advertising trackers.
            </p>
          </Section>

          <Section heading="Why we collect it">
            <p>
              We use the information from the contact form solely to respond
              to your enquiry and to follow up about the services you asked
              about. We use analytics data only to understand and improve
              how the site is used.
            </p>
          </Section>

          <Section heading="How we store and protect it">
            <p>
              Contact form submissions are stored using Firebase (a Google
              Cloud service). We take reasonable technical and
              organisational measures to protect your information, but no
              method of storage or transmission over the internet is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section heading="Who we share it with">
            <p>
              We do not sell your personal information, and we do not share
              it with third parties for their own marketing purposes. Your
              information is accessible to our team for the purpose of
              responding to your enquiry, and is processed by Google/Firebase
              as the infrastructure provider that hosts our database on our
              behalf.
            </p>
          </Section>

          <Section heading="How long we keep it">
            <p>
              We don't currently apply a fixed automatic deletion schedule —
              we retain contact form submissions for as long as reasonably
              needed to respond to your enquiry and keep basic business
              records. You can ask us to delete your information at any time
              (see "Your rights" below), and we will do so unless we have a
              legitimate reason to retain it.
            </p>
          </Section>

          <Section heading="Your rights">
            <p>
              Under India's Digital Personal Data Protection Act, 2023, you
              have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ask us what personal data we hold about you</li>
              <li>Ask us to correct inaccurate or incomplete data</li>
              <li>Ask us to erase your data</li>
              <li>Withdraw any consent you've given, at any time</li>
              <li>Raise a grievance about how we've handled your data</li>
            </ul>
            <p>
              To exercise any of these rights, contact us using the details
              below. We'll respond within a reasonable timeframe.
            </p>
          </Section>

          <Section heading="Cookies">
            <p>
              This site does not use advertising or tracking cookies. Firebase
              Analytics may use minimal, privacy-focused mechanisms to
              measure site usage in aggregate.
            </p>
          </Section>

          <Section heading="Children's privacy">
            <p>
              This site is intended for businesses and professionals. We do
              not knowingly collect personal data from children.
            </p>
          </Section>

          <Section heading="Changes to this policy">
            <p>
              We may update this policy from time to time. The "Effective"
              date at the top of this page reflects the most recent version.
            </p>
          </Section>

          <Section heading="Contact us">
            <p>
              For any privacy question, request, or concern, contact us at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@eexorigin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--green-deep)" }}
              >
                info@eexorigin.com
              </a>{" "}
              or through our{" "}
              <Link to="/contact" style={{ color: "var(--green-deep)" }}>
                Contact page
              </Link>
              .
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
