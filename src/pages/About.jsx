import React, { useEffect } from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Zap, Users, MapPin, Phone, Mail } from "lucide-react";
import SparkDivider from "../components/SparkDivider";

/* ─── Scroll reveal hook ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-up");
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const values = [
  {
    icon: Target,
    title: "Action",
    desc: "We move with urgency. Every engagement is driven by measurable outcomes, not just promises.",
    gradient: "linear-gradient(135deg, rgba(15,169,138,0.12), rgba(15,169,138,0.03))",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We embrace new ideas and technologies to stay ahead of industry trends and deliver smarter solutions.",
    gradient: "linear-gradient(135deg, rgba(46,139,192,0.12), rgba(46,139,192,0.03))",
  },
  {
    icon: Zap,
    title: "Mastery",
    desc: "Deep domain expertise across energy markets, regulation, and contract structuring powers everything we do.",
    gradient: "linear-gradient(135deg, rgba(245,166,35,0.12), rgba(245,166,35,0.03))",
  },
  {
    icon: Users,
    title: "Client First",
    desc: "Every solution is tailored to our client's energy demand, budget, and sustainability roadmap.",
    gradient: "linear-gradient(135deg, rgba(15,169,138,0.12), rgba(46,139,192,0.03))",
  },
];

const milestones = [
  { num: "01", title: "Market Analysis", desc: "Deep-dive into energy markets, tariff structures, and regulatory frameworks across Indian states." },
  { num: "02", title: "Strategy Design", desc: "Custom procurement strategies tailored to your consumption patterns and business objectives." },
  { num: "03", title: "Execution", desc: "End-to-end execution of PPAs, trading strategies, and compliance management." },
  { num: "04", title: "Continuous Optimisation", desc: "Ongoing monitoring, rebalancing, and cost optimisation across your entire energy portfolio." },
];

const About = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Seo title="About Us" description="Energy Exchange Origin LLP \u2014 our mission, values, and expertise in electricity procurement and advisory for Indian businesses." path="/about" />
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden flex flex-col justify-center items-center text-center" style={{ minHeight: "60vh", paddingTop: 80 }}>
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(15,169,138,0.06), transparent 70%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 50% at 80% 70%, rgba(46,139,192,0.04), transparent 60%)" }} />

        <div className="relative z-[2] px-6 max-w-3xl mx-auto">
          <p className="label-accent reveal-up">About EEX Origin</p>
          <h1 className="h-display mb-5 mt-4 reveal-up" style={{ transitionDelay: "0.1s" }}>
            Building India&apos;s most trusted{" "}
            <span className="serif-accent" style={{ color: "var(--green-electric)" }}>energy advisory.</span>
          </h1>
          <p className="body-lg mx-auto reveal-up" style={{ maxWidth: 560, transitionDelay: "0.2s" }}>
            EEX Origin is a next-gen energy exchange platform empowering stakeholders across the power value chain — from renewable energy generators to large consumers and utilities.
          </p>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ MISSION + WHAT WE DO ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="reveal-up">
              <p className="label-accent">Our Mission</p>
              <h2 className="h-section mt-3 mb-5">
                Powering smarter energy <span className="serif-accent">decisions.</span>
              </h2>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                To drive innovation in energy trading by enabling organizations to meet procurement goals, regulatory requirements, and sustainability commitments through smart, tech-powered solutions.
              </p>
              {/* Accent line */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-[2px] w-12" style={{ background: "var(--green-electric)" }} />
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--green-electric)" }}>Since founding</span>
              </div>
            </div>
            <div className="reveal-up" style={{ transitionDelay: "0.15s" }}>
              <p className="label-accent">What We Do</p>
              <h2 className="h-section mt-3 mb-5">
                Simplifying complex <span className="serif-accent">markets.</span>
              </h2>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We simplify complex energy contracts and compliance through intuitive digital infrastructure — structuring PPAs, managing RPO compliance, facilitating short-term trading, and advising on carbon credit strategies across India.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-[2px] w-12" style={{ background: "var(--blue-grid)" }} />
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--blue-grid)" }}>Full-spectrum energy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ LOCATION BAR ═══ */}
      <section className="py-10 relative z-[2]" style={{ background: "rgba(15,22,35,0.5)" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2.5 reveal-up">
            <MapPin className="w-4 h-4" style={{ color: "var(--green-electric)" }} />
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Coimbatore, Tamil Nadu</span>
          </div>
          <div className="w-px h-5 hidden sm:block" style={{ background: "var(--border-subtle)" }} />
          <div className="flex items-center gap-2.5 reveal-up" style={{ transitionDelay: "0.05s" }}>
            <MapPin className="w-4 h-4" style={{ color: "var(--green-electric)" }} />
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Bangalore, Karnataka</span>
          </div>
          <div className="w-px h-5 hidden sm:block" style={{ background: "var(--border-subtle)" }} />
          <div className="flex items-center gap-2.5 reveal-up" style={{ transitionDelay: "0.1s" }}>
            <Phone className="w-4 h-4" style={{ color: "var(--green-electric)" }} />
            <a href="tel:+918838197744" className="text-sm font-medium hover-green" style={{ color: "var(--text-primary)" }}>+91 88381 97744</a>
          </div>
          <div className="w-px h-5 hidden sm:block" style={{ background: "var(--border-subtle)" }} />
          <div className="flex items-center gap-2.5 reveal-up" style={{ transitionDelay: "0.2s" }}>
            <Mail className="w-4 h-4" style={{ color: "var(--green-electric)" }} />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@eexorigin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover-green" style={{ color: "var(--text-primary)" }}>info@eexorigin.com</a>
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ HOW WE WORK ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">How We Work</p>
            <h2 className="h-section reveal-up mt-2">A structured path to <span className="serif-accent">results.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            {/* Connector line */}
            <div className="journey-connector hidden md:block" />
            {milestones.map((step, i) => (
              <div
                key={i}
                className="p-10 border border-[var(--border-subtle)] relative transition-all hover:bg-[var(--bg-elevated)] hover:border-[var(--border-accent)] reveal-up group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl font-extrabold leading-none mb-3" style={{ background: "linear-gradient(135deg, rgba(15,169,138,0.15), rgba(46,139,192,0.1))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                <p className="text-[0.85rem]" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,169,138,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ VALUES ═══ */}
      <section className="py-24 md:py-28 relative z-[2]" style={{ background: "rgba(15,22,35,0.4)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Our Values</p>
            <h2 className="h-section reveal-up mt-2">What drives us <span className="serif-accent">every day.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-premium p-8 relative overflow-hidden group reveal-up"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: v.gradient }} />
                <div className="relative z-[1]">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(15,169,138,0.15)]" style={{ background: "var(--glow-green)", border: "1px solid var(--border-accent)" }}>
                    <v.icon className="w-5 h-5" style={{ color: "var(--green-electric)" }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ QUOTE / CTA ═══ */}
      <section className="py-24 md:py-28 relative z-[2] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(15,169,138,0.08), transparent)" }} />
        <div className="cta-glow" style={{ background: "rgba(15,169,138,0.12)", top: -150, left: "15%" }} />
        <div className="cta-glow" style={{ background: "rgba(46,139,192,0.1)", bottom: -150, right: "15%", animationDelay: "3s" }} />

        <div className="max-w-3xl mx-auto px-6 relative z-[1]">
          <p className="serif-accent text-2xl md:text-3xl leading-snug reveal-up" style={{ color: "var(--text-primary)" }}>
            &ldquo;Our goal is to make clean energy procurement as simple, transparent, and accessible as possible — for every business in India.&rdquo;
          </p>
          <p className="mt-6 text-xs font-semibold tracking-wider uppercase reveal-up" style={{ color: "var(--text-muted)", transitionDelay: "0.1s" }}>
            — The EEX Origin Team
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-10 reveal-up" style={{ transitionDelay: "0.2s" }}>
            <Link to="/contact" className="btn-primary">
              Talk to EEX Origin <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
