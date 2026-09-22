import React, { useEffect, useRef, useState } from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { Zap, Monitor, Shield, Clock, Activity, Box, ArrowRight, TrendingUp } from "lucide-react";
import ExchangeMarquee from "@/components/ExchangeMarquee";
import imgLongTerm from "@/assets/long-term-ppa.jpg";
import imgMediumTerm from "@/assets/medium-term-ppa.jpg";
import imgShortTerm from "@/assets/short-term-trading.jpg";
import imgRpo from "@/assets/rpo-compliance.jpg";
import imgCarbon from "@/assets/carbon-credit-advisory.jpg";
import heroVideo from "@/assets/hero-transmission.mp4";
import heroPoster from "@/assets/hero-poster.jpg";

/* ── Skip the hero video on mobile / slow connections / reduced-motion ── */
function useCanPlayHeroVideo() {
  const [canPlay, setCanPlay] = useState(false);
  useEffect(() => {
    const isNarrow = window.matchMedia("(max-width: 768px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    const slowConn = navigator.connection && ["slow-2g", "2g", "3g"].includes(navigator.connection.effectiveType);
    setCanPlay(!isNarrow && !reducedMotion && !saveData && !slowConn);
  }, []);
  return canPlay;
}

/* ── Scroll reveal hook ── */
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Data ── */
const stats = [
  { icon: Zap, number: "5+", label: "Core Service Verticals" },
  { icon: Monitor, number: "11", label: "Dashboard Modules" },
  { icon: Clock, number: "24/7", label: "Market Monitoring" },
];

const coverage = [
  { icon: Shield, tag: "CERC", label: "Regulatory Compliance" },
  { icon: Activity, tag: "IEX", label: "Exchange Trading" },
  { icon: Box, tag: "RPO", label: "Obligation Management" },
];

const services = [
  {
    title: "Carbon Advisory",
    desc: "Expert guidance on carbon credit registration, verification, and trading to monetise sustainability efforts.",
    image: imgCarbon,
    to: "/services/carbon-credit-advisory",
    category: "Sustainability Advisory",
  },
  {
    title: "Renewable Advisory",
    desc: "Navigate Renewable Purchase Obligation regulations — procurement strategy, REC trading, and compliance reporting.",
    image: imgRpo,
    to: "/services/rpo",
    category: "Sustainability Advisory",
  },
  {
    title: "Long Term PPA",
    desc: "Secure stable energy pricing through long-term Power Purchase Agreements with generators across India.",
    image: imgLongTerm,
    to: "/services/ltp",
    category: "PPA · Commercial & Industrial",
  },
  {
    title: "Medium Term PPA",
    desc: "Flexible 1–5 year agreements balancing pricing stability with cost efficiency.",
    image: imgMediumTerm,
    to: "/services/mtp",
    category: "PPA · Commercial & Industrial",
  },
  {
    title: "Short Term Trading",
    desc: "Day-ahead and real-time trading on IEX and PXIL — strategic bidding at competitive prices.",
    image: imgShortTerm,
    to: "/services/stp",
    category: "PPA · Commercial & Industrial",
  },
];

const markets = [
  { icon: "⚡", title: "Day-Ahead Market", sub: "IEX & PXIL" },
  { icon: "📋", title: "Term-Ahead Market", sub: "Intra-day & Contingency" },
  { icon: "🌿", title: "Green Market", sub: "GTAM & REC" },
  { icon: "📑", title: "Bilateral Contracts", sub: "Open Access PPA" },
];

const steps = [
  { n: 1, title: "Assess", desc: "Analyse your current energy portfolio, tariffs, and consumption patterns" },
  { n: 2, title: "Strategise", desc: "Design an optimal sustainable procurement strategy across market segments" },
  { n: 3, title: "Execute", desc: "Handle exchange registration, bidding, PPA negotiation, and compliance" },
  { n: 4, title: "Monitor", desc: "Ongoing tracking via our dashboard with real-time alerts and reporting" },
];

const dashboardModules = [
  "Electricity Bill Parsing & Analysis",
  "Demand & Load Forecasting",
  "PPA Portfolio Management",
  "Open Access Cost Comparison",
  "RPO Tracker & REC Manager",
  "Solar Rooftop Feasibility",
  "DG Usage & Cost Optimisation",
  "ESG Scope 2 Emissions Reporting",
];

const industries = [
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🧪", name: "Chemicals" },
  { icon: "🧵", name: "Textiles" },
  { icon: "🏗️", name: "Cement & Steel" },
  { icon: "🍶", name: "Food Processing" },
  { icon: "💊", name: "Pharmaceuticals" },
  { icon: "🖥️", name: "IT & Data Centres" },
  { icon: "🏢", name: "Commercial Real Estate" },
];

const faqs = [
  {
    q: "What is Open Access energy procurement?",
    a: "Open Access lets eligible industrial and commercial consumers buy electricity directly from generators or power exchanges, instead of only through their local distribution company — giving more control over cost and energy mix.",
  },
  {
    q: "How does short-term trading on IEX work?",
    a: "Short-term trading covers Day-Ahead and Term-Ahead contracts on exchanges like IEX and PXIL. We handle bidding strategy and execution so you can procure power for near-term delivery at competitive prices.",
  },
  {
    q: "What are RPO obligations for HT consumers?",
    a: "Renewable Purchase Obligation (RPO) requires certain high-tension consumers to source a share of their electricity from renewable sources. We help track your obligation and meet it through renewable PPAs or REC purchases.",
  },
  {
    q: "How can carbon credits benefit my business?",
    a: "If your operations reduce emissions, carbon credits let you register, verify, and trade those reductions — turning sustainability investments into an additional revenue stream.",
  },
  {
    q: "What does the Energy Dashboard include?",
    a: "Modules covering electricity bill analysis, demand & load forecasting, PPA portfolio management, open access cost comparison, RPO/REC tracking, solar rooftop feasibility, DG cost optimisation, and ESG emissions reporting.",
  },
  {
    q: "How do I get started with EEX Origin?",
    a: "Reach out through our Contact page for a Business Enquiry. We start with an assessment of your current energy portfolio, then design and execute a procurement strategy tailored to your consumption and goals.",
  },
];

const barHeights = [45, 62, 38, 80, 55, 72, 48, 90, 60, 75, 42, 68];

/* ── Component ── */
export default function Home() {
  const pageRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);
  const canPlayHeroVideo = useCanPlayHeroVideo();

  return (
    <div ref={pageRef}>
      <Seo />
      {/* ━━━ TICKER BAR ━━━ */}
      <div className="ticker-bar">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <a href="#solutions"><span className="sep">●</span> Sustainable Energy Advisory</a>
              <a href="#markets"><span className="sep">●</span> IEX Day-Ahead Market</a>
              <a href="#solutions"><span className="sep">●</span> RPO Compliance Advisory</a>
              <a href="#solutions"><span className="sep">●</span> Carbon Credit Trading</a>
              <a href="#solutions"><span className="sep">●</span> Long Term PPA Solutions</a>
              <a href="#dashboard"><span className="sep">●</span> Energy Dashboard — 11 Modules</a>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ━━━ HERO ━━━ */}
      <section className="hero-section">
        <div className="hero-bg">
          {canPlayHeroVideo ? (
            <video
              className="hero-bg-media"
              autoPlay
              muted
              loop
              playsInline
              poster={heroPoster}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          ) : (
            <img className="hero-bg-media" src={heroPoster} alt="" />
          )}
          <div className="hero-bg-tint" />
          <div className="hero-grid-overlay" />
        </div>
        <div className="hero-content reveal">
          <div className="hero-label">Energy Procurement &amp; Market Intelligence</div>
          <h1 className="hero-title">
            Smarter Decisions Across<br />
            <span className="accent">India's Energy Markets</span>
          </h1>
          <p className="hero-sub">
            Advisory and technology for industrial energy buyers — spanning open-access procurement,
            exchange-based trading, renewable PPAs, and regulatory compliance.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn-primary">Explore EEX Origin <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-outline-hero">Talk to Our Energy Team</Link>
          </div>
        </div>
      </section>

      {/* ━━━ MARQUEE ━━━ */}
      <ExchangeMarquee />

      {/* ━━━ STATS ━━━ */}
      <section className="cm-section" style={{ background: "var(--white)" }}>
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 60 }}>
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title">Advisory Across the Full Energy Value Chain</h2>
            <p className="section-desc">Procurement, trading, compliance, and renewables — end-to-end support for industrial energy buyers in India.</p>
          </div>
          <div className="stats-grid reveal">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-icon"><s.icon size={24} /></div>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="coverage-row reveal">
            {coverage.map((c, i) => (
              <div className="coverage-item" key={i}>
                <div className="coverage-icon"><c.icon size={18} /></div>
                <div>
                  <div className="coverage-tag">{c.tag}</div>
                  <div className="coverage-label">{c.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SOLUTIONS ━━━ */}
      <section className="cm-section solutions-section" id="solutions">
        <div className="section-inner">
          <div className="section-header-row reveal">
            <div>
              <span className="section-label">Solutions</span>
              <h2 className="section-title">Energy Procurement &amp; Trading Services</h2>
              <p className="section-desc">End-to-end support across India's open access energy markets — procurement, trading, compliance, and renewables.</p>
            </div>
            <Link to="/services" className="view-all-btn">View All Services</Link>
          </div>

          <div className="solutions-grid">
            {services.map((s, i) => (
              <Link to={s.to} className="solution-card reveal" key={i}>
                <div className="solution-img">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="solution-body">
                  <p className="solution-category">{s.category}</p>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="solution-link">Learn More →</span>
                </div>
              </Link>
            ))}

            {/* Featured dashboard card */}
            <Link to="/dashboard" className="solution-card solution-featured reveal">
              <div className="solution-img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Monitor size={64} style={{ color: "rgba(255,255,255,0.25)" }} strokeWidth={1.5} />
              </div>
              <div className="solution-body">
                <h3>Energy Dashboard</h3>
                <p>A comprehensive B2B SaaS platform with 11 modules — from bill analysis and demand forecasting to PPA management and ESG sustainability reporting. Built for HT industrial consumers.</p>
                <span className="solution-link" style={{ color: "var(--green-light)" }}>Explore Dashboard →</span>
              </div>
            </Link>

            {/* Coming soon: Electricity Price Forecast platform */}
            <Link to="/price-forecast" className="solution-card solution-featured is-coming-soon reveal">
              <div className="solution-img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp size={64} style={{ color: "rgba(255,255,255,0.25)" }} strokeWidth={1.5} />
              </div>
              <div className="solution-body">
                <span className="coming-soon-badge">Coming Soon</span>
                <h3>Electricity Price Forecast</h3>
                <p>A dedicated forecasting platform for India&apos;s GDAM, DAM, and RTM electricity markets — currently in development to give you a pricing edge for procurement decisions.</p>
                <span className="solution-link" style={{ color: "var(--green-light)" }}>Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ MARKETS ━━━ */}
      <section className="cm-section" id="markets" style={{ background: "var(--white)" }}>
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 60 }}>
            <span className="section-label">Markets</span>
            <h2 className="section-title">Where We Operate</h2>
            <p className="section-desc">Active across India's key energy exchanges and regulatory frameworks for sustainable energy procurement.</p>
          </div>
          <div className="markets-grid reveal">
            {markets.map((m, i) => (
              <div className="market-card" key={i}>
                <div className="market-icon">{m.icon}</div>
                <h4>{m.title}</h4>
                <p>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS ━━━ */}
      <section className="cm-section process-section">
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 60 }}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Our Advisory Process</h2>
            <p className="section-desc">A structured approach to achieving your sustainability and energy cost goals.</p>
          </div>
          <div className="process-grid reveal">
            {steps.map((s) => (
              <div className="process-step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DASHBOARD SHOWCASE ━━━ */}
      <section className="cm-section dashboard-section" id="dashboard">
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 60 }}>
            <span className="section-label">Platform</span>
            <h2 className="section-title">Energy Intelligence Dashboard</h2>
            <p className="section-desc">A full-stack analytics platform purpose-built for HT industrial consumers pursuing sustainability.</p>
          </div>
          <div className="dashboard-layout reveal">
            <div className="dash-features">
              {dashboardModules.map((m, i) => (
                <div className="dash-feature" key={i}>
                  <div className="dash-check">✓</div>
                  <span>{m}</span>
                </div>
              ))}
            </div>
            <div className="dash-mockup">
              <div className="dash-mockup-bar"><span /><span /><span /></div>
              <div className="dash-chart">
                {barHeights.map((h, i) => (
                  <div className="dash-bar" key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="dash-mini-cards">
                <div className="dash-mini"><div className="val">—</div><div className="lbl">Avg. Rate</div></div>
                <div className="dash-mini"><div className="val">—</div><div className="lbl">Peak Load</div></div>
                <div className="dash-mini"><div className="val">—</div><div className="lbl">Power Factor</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ INDUSTRIES ━━━ */}
      <section className="cm-section" style={{ background: "var(--white)" }}>
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 60 }}>
            <span className="section-label">Industries</span>
            <h2 className="section-title">Who We Serve</h2>
            <p className="section-desc">Tailored sustainable energy solutions for high-consumption industrial consumers across India.</p>
          </div>
          <div className="industries-grid reveal">
            {industries.map((ind, i) => (
              <div className="industry-card" key={i}>
                <div className="industry-icon">{ind.icon}</div>
                <h4>{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="cm-section faq-section">
        <div className="section-inner">
          <div className="reveal" style={{ marginBottom: 60 }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid reveal">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div className={open ? "faq-item faq-item-open" : "faq-item"} key={i}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <h4>{item.q}</h4>
                    <span className="faq-chevron">›</span>
                  </button>
                  {open && <p className="faq-answer">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
