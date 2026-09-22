import React, { useEffect, useState } from "react";
import Seo from "@/components/Seo";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Monitor } from "lucide-react";
import SparkDivider from "../components/SparkDivider";
import testImage from "../assets/long-term-ppa.jpg";
import image1 from "../assets/medium-term-ppa.jpg";
import image2 from "../assets/short-term-trading.jpg";
import image3 from "../assets/rpo-compliance.jpg";
import carbonImage from "../assets/carbon-credit-advisory.jpg";

/* ─── Scroll to a section named by the URL hash (e.g. /services#ppa-commercial-industrial) ─── */
function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    // Wait a tick for this page's content (and any lazy-loaded chunk) to
    // actually be in the DOM before trying to scroll to it.
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, [hash]);
}

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

/* ─── 3D tilt on service cards ─── */
function useTiltCards() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const cards = document.querySelectorAll(".svc-tilt-card");
    const onMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    };
    const onLeave = (e) => {
      e.currentTarget.style.transform = "";
    };
    cards.forEach((c) => {
      c.addEventListener("mousemove", onMove);
      c.addEventListener("mouseleave", onLeave);
    });
    return () => {
      cards.forEach((c) => {
        c.removeEventListener("mousemove", onMove);
        c.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
}

const services = [
  {
    title: "Carbon Advisory",
    desc: "Unlock carbon value with footprint assessments, net-zero roadmaps, and strategic carbon market guidance.",
    image: carbonImage,
    link: "/services/carbon-credit-advisory",
    accent: "var(--blue-grid)",
    category: "Sustainability Advisory",
  },
  {
    title: "Renewable Advisory",
    desc: "Stay compliant with RPO mandates through structured procurement, REC trading, and audit-ready reporting.",
    image: image3,
    link: "/services/rpo",
    accent: "var(--green-electric)",
    category: "Sustainability Advisory",
  },
  {
    title: "Long Term PPA",
    desc: "Secure predictable pricing and reliable energy supply over 10–25 years with expertly structured power purchase agreements.",
    image: testImage,
    link: "/services/ltp",
    accent: "var(--green-electric)",
    category: "PPA · Commercial & Industrial",
  },
  {
    title: "Medium Term PPA",
    desc: "Balance stability and flexibility with customised 3–10 year contracts tailored for evolving business needs.",
    image: image1,
    link: "/services/mtp",
    accent: "var(--blue-grid)",
    category: "PPA · Commercial & Industrial",
  },
  {
    title: "Short Term Energy Trading",
    desc: "Capitalise on real-time market dynamics with agile day-ahead and intra-day trading solutions.",
    image: image2,
    link: "/services/stp",
    accent: "var(--amber)",
    category: "PPA · Commercial & Industrial",
  },
];

const sustainabilityServices = services.filter((s) => s.category === "Sustainability Advisory");
const ppaServices = services.filter((s) => s.category.startsWith("PPA"));

/* ─── Reusable service card ─── */
function ServiceCard({ service, i, isLast, hoveredLink, setHoveredLink }) {
  const active = hoveredLink === service.link;
  return (
    <Link
      to={service.link}
      className={`svc-tilt-card card-premium overflow-hidden group block no-underline reveal-up ${
        isLast ? "md:col-span-2 md:max-w-lg md:mx-auto" : ""
      }`}
      style={{ transitionDelay: `${i * 0.08}s`, transformStyle: "preserve-3d" }}
      onMouseEnter={() => setHoveredLink(service.link)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      {/* Image with overlay */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={service.title}
          src={service.image}
          loading="lazy"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 transition-opacity duration-500" style={{ background: `linear-gradient(to top, rgba(8,12,20,0.9) 0%, rgba(8,12,20,0.3) 50%, transparent 100%)` }} />
        {/* Accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-500 origin-left" style={{ background: service.accent, transform: active ? "scaleX(1)" : "scaleX(0)" }} />
        {/* Number badge */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300" style={{ background: "rgba(8,12,20,0.7)", border: `1px solid ${active ? service.accent : "var(--border-subtle)"}`, color: active ? service.accent : "var(--text-muted)", backdropFilter: "blur(8px)" }}>
          {String(i + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: "var(--text-primary)" }}>
          {service.title}
        </h3>
        <p className="text-[0.85rem] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
          {service.desc}
        </p>
        <span className="inline-flex items-center text-sm font-semibold gap-2 transition-all group-hover:gap-3" style={{ color: service.accent }}>
          Learn more <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

const Services = () => {
  useScrollReveal();
  useTiltCards();
  useHashScroll();
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="min-h-screen">
      <Seo title="Services" description="Explore EEX Origin’s energy services: PPAs (long, medium, short term), renewable advisory, and carbon credit advisory." path="/services" />
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden flex flex-col justify-center items-center text-center" style={{ minHeight: "55vh", paddingTop: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(15,169,138,0.06), transparent 70%)" }} />

        <div className="relative z-[2] px-6 max-w-3xl mx-auto">
          <p className="label-accent reveal-up">Sustainability Advisory</p>
          <h1 className="h-display mb-5 mt-4 reveal-up" style={{ transitionDelay: "0.1s" }}>
            Carbon, renewables, and{" "}
            <span className="serif-accent" style={{ color: "var(--green-electric)" }}>PPA advisory.</span>
          </h1>
          <p className="body-lg mx-auto reveal-up" style={{ maxWidth: 560, transitionDelay: "0.2s" }}>
            Carbon Advisory, Renewable Advisory, and Power Purchase Agreements for Commercial & Industrial (C&I) consumers — one integrated sustainability practice.
          </p>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ SERVICES GRID ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-6xl mx-auto px-6">

          {/* ── Sustainability Advisory group ── */}
          <div id="sustainability-advisory" className="mb-8 reveal-up" style={{ scrollMarginTop: 100 }}>
            <p className="label-accent">Category</p>
            <h2 className="h-section mt-2">
              Sustainability <span className="serif-accent" style={{ color: "var(--green-electric)" }}>Advisory</span>
            </h2>
            <p className="mt-2" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: 520 }}>
              Carbon Advisory and Renewable Advisory — our core sustainability practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {sustainabilityServices.map((service, i) => (
              <ServiceCard key={service.link} service={service} i={i} hoveredLink={hoveredLink} setHoveredLink={setHoveredLink} />
            ))}
          </div>

          {/* ── PPA group ── */}
          <div id="ppa-commercial-industrial" className="mb-8 reveal-up" style={{ scrollMarginTop: 100 }}>
            <p className="label-accent">Category</p>
            <h2 className="h-section mt-2">
              PPA — <span className="serif-accent" style={{ color: "var(--green-electric)" }}>Commercial &amp; Industrial</span>
            </h2>
            <p className="mt-2" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: 520 }}>
              Power Purchase Agreements structured for C&amp;I consumers, across three contract horizons.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ppaServices.map((service, i) => (
              <ServiceCard
                key={service.link}
                service={service}
                i={i}
                isLast={i === ppaServices.length - 1}
                hoveredLink={hoveredLink}
                setHoveredLink={setHoveredLink}
              />
            ))}
          </div>

          {/* ── Technology Platform ── */}
          <div id="technology-platform" className="mb-8 mt-20 reveal-up" style={{ scrollMarginTop: 100 }}>
            <p className="label-accent">Category</p>
            <h2 className="h-section mt-2">
              Technology <span className="serif-accent" style={{ color: "var(--green-electric)" }}>Platform</span>
            </h2>
            <p className="mt-2" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: 520 }}>
              B2B SaaS tools built for industrial energy buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/dashboard"
              className="svc-tilt-card card-premium overflow-hidden group block no-underline reveal-up"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden flex items-center justify-center" style={{ height: 220, background: "linear-gradient(135deg, var(--brand-navy, #062848), var(--brand-blue, #0768A1))" }}>
                <Monitor size={72} style={{ color: "rgba(255,255,255,0.2)" }} strokeWidth={1.2} />
                <div className="absolute inset-0 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(8,12,20,0.6) 0%, transparent 100%)" }} />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: "var(--text-primary)" }}>
                  Energy Dashboard
                </h3>
                <p className="text-[0.85rem] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  A comprehensive platform with 11 modules — electricity bill analysis, demand forecasting, PPA portfolio management, open access cost comparison, RPO/REC tracking, solar feasibility, DG optimisation, and ESG reporting.
                </p>
                <span className="inline-flex items-center text-sm font-semibold gap-2 transition-all group-hover:gap-3" style={{ color: "var(--green-electric)" }}>
                  Explore Dashboard <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link
              to="/price-forecast"
              className="svc-tilt-card card-premium overflow-hidden group block no-underline reveal-up"
              style={{ transformStyle: "preserve-3d", transitionDelay: "0.08s" }}
            >
              <div className="relative overflow-hidden flex items-center justify-center" style={{ height: 220, background: "linear-gradient(135deg, #062848, #09987F)" }}>
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                <div className="absolute inset-0 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(8,12,20,0.6) 0%, transparent 100%)" }} />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ background: "rgba(15,169,138,0.2)", color: "var(--green-electric)", border: "1px solid rgba(15,169,138,0.3)" }}>Coming Soon</div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: "var(--text-primary)" }}>
                  Electricity Price Forecast
                </h3>
                <p className="text-[0.85rem] leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  A dedicated forecasting platform for India's GDAM, DAM, and RTM electricity markets — giving you a pricing edge for procurement decisions.
                </p>
                <span className="inline-flex items-center text-sm font-semibold gap-2 transition-all group-hover:gap-3" style={{ color: "var(--green-electric)" }}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      <SparkDivider />

      {/* ═══ PROCESS OVERVIEW ═══ */}
      <section className="py-24 md:py-28 relative z-[2]" style={{ background: "rgba(15,22,35,0.4)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Our Process</p>
            <h2 className="h-section reveal-up mt-2">How we deliver <span className="serif-accent">results.</span></h2>
          </div>
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {processSteps.map((step, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className="flex items-center justify-center py-2 md:py-0 md:px-1" style={{ color: "var(--green-electric)", fontSize: "1.2rem" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                )}
                <div className={`flex-1 p-8 text-center border border-[var(--border-subtle)] bg-[rgba(8,12,20,0.7)] transition-all hover:bg-[var(--bg-elevated)] hover:border-[var(--border-accent)] hover:-translate-y-1.5 relative overflow-hidden reveal-up ${i === 0 ? "rounded-t-[14px] md:rounded-l-[14px] md:rounded-tr-none" : ""} ${i === processSteps.length - 1 ? "rounded-b-[14px] md:rounded-r-[14px] md:rounded-bl-none" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                  <p className="text-[0.8rem]" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-28 relative z-[2] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(15,169,138,0.08), transparent)" }} />
        <div className="cta-glow" style={{ background: "rgba(15,169,138,0.12)", top: -150, left: "15%" }} />
        <div className="cta-glow" style={{ background: "rgba(46,139,192,0.1)", bottom: -150, right: "15%", animationDelay: "3s" }} />
        <div className="max-w-3xl mx-auto px-6 relative z-[1]">
          <h2 className="h-section reveal-up mx-auto" style={{ maxWidth: 500 }}>
            Not sure which service <span className="serif-accent">fits?</span>
          </h2>
          <p className="reveal-up mt-4 mx-auto" style={{ maxWidth: 420, color: "var(--text-secondary)" }}>
            Our energy experts will assess your requirements and recommend the optimal strategy for your business.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-8 reveal-up">
            <Link to="/contact" className="btn-primary">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+918838197744" className="btn-secondary">
              Call +91 88381 97744
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ═══ DATA ═══ */
const processSteps = [
  { icon: "🔍", title: "Assess", desc: "Understand your energy profile, costs, and objectives." },
  { icon: "📊", title: "Analyse", desc: "Market analysis, forecasting, and risk assessment." },
  { icon: "📋", title: "Structure", desc: "Design the optimal procurement strategy." },
  { icon: "⚡", title: "Execute", desc: "Contract negotiation, trading, and compliance." },
];

export default Services;
