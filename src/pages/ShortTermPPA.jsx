import React, { useEffect } from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import SparkDivider from "../components/SparkDivider";
import image2 from "../assets/short-term-trading.jpg";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-up");
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const markets = [
  { icon: Clock, title: "Day-Ahead Market (DAM)", desc: "Trades conducted one day before delivery with hourly pricing based on supply and demand forecasts." },
  { icon: Zap, title: "Intra-Day Market (IDM)", desc: "Trade electricity within the same day — ideal for adjusting schedules based on real-time factors." },
  { icon: BarChart3, title: "Real-Time / Balancing Market", desc: "Managed by grid operators to ensure system stability, settling deviations with real-time prices." },
];

const benefits = [
  { icon: TrendingUp, title: "Market Expertise", desc: "Leverage our deep knowledge of regional and international energy markets." },
  { icon: BarChart3, title: "Advanced Forecasting", desc: "Optimise trading decisions using real-time data and predictive analytics." },
  { icon: Shield, title: "Regulatory Compliance", desc: "Seamless integration with market rules and dispatch systems." },
  { icon: Zap, title: "Revenue Optimisation", desc: "Capture value from price volatility and renewable variability." },
];

const audiences = [
  { title: "Power Producers", desc: "Renewable & thermal power producers looking to monetise surplus." },
  { title: "Utilities & DISCOMs", desc: "Distribution companies managing demand-supply balance." },
  { title: "Energy Aggregators", desc: "Aggregators and traders optimising portfolio positions." },
  { title: "Industrial Consumers", desc: "Large consumers capitalising on favourable market windows." },
  { title: "Grid Operators", desc: "Operators ensuring system balance and frequency stability." },
];

const ShortTermPPA = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Seo title="Short Term Energy Trading" description="Short-term energy trading and procurement strategies for businesses navigating volatile electricity markets." path="/services/stp" />
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden flex flex-col justify-center items-center text-center" style={{ minHeight: "55vh", paddingTop: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(245,166,35,0.06), transparent 70%)" }} />
        <div className="relative z-[2] px-6 max-w-3xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase mb-6 transition-colors reveal-up" style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--amber)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            ← Back to Services
          </Link>
          <p className="label-accent reveal-up">Our Services</p>
          <h1 className="h-display mb-5 mt-4 reveal-up" style={{ transitionDelay: "0.1s" }}>
            Short Term Energy <span className="serif-accent" style={{ color: "var(--amber)" }}>Trading</span>
          </h1>
          <p className="body-lg mx-auto reveal-up" style={{ maxWidth: 560, transitionDelay: "0.2s" }}>
            Agile solutions to manage surplus or deficit energy with dynamic, real-time market access.
          </p>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ IMAGE + INTRO ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl reveal-up" style={{ border: "1px solid var(--border-subtle)" }}>
              <img src={image2} alt="Short Term Energy Trading" className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(8,12,20,0.4), transparent 40%)" }} />
            </div>
            <div className="reveal-up" style={{ transitionDelay: "0.15s" }}>
              <p className="label-accent mb-3">Real-Time Markets</p>
              <h2 className="h-section mb-5">What is Short-Term <span className="serif-accent">Trading?</span></h2>
              <p className="text-[0.95rem] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                Short-term electricity trading involves buying and selling power over short timeframes — from day-ahead to real-time markets.
              </p>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                This plays a key role in modern power systems, helping balance fluctuating demand and renewable generation while capturing market opportunities.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-[2px] w-12" style={{ background: "var(--amber)" }} />
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--amber)" }}>Day-Ahead & Intra-Day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ MARKET TYPES ═══ */}
      <section className="py-24 md:py-28 relative z-[2]" style={{ background: "rgba(15,22,35,0.4)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Markets We Operate In</p>
            <h2 className="h-section reveal-up mt-2">Types of Short-Term <span className="serif-accent">Markets</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {markets.map((m, i) => (
              <div key={m.title} className="card-premium p-7 relative overflow-hidden group reveal-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-[1]">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,166,35,0.15)]" style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.2)" }}>
                    <m.icon className="w-5 h-5" style={{ color: "var(--amber)" }} />
                  </div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{m.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ WHY EEX ORIGIN ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Why EEX Origin</p>
            <h2 className="h-section reveal-up mt-2">Our competitive <span className="serif-accent">edge.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={b.title} className="flex gap-4 p-6 rounded-xl border transition-all hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] reveal-up group" style={{ borderColor: "var(--border-subtle)", transitionDelay: `${i * 0.08}s` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110" style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.2)" }}>
                  <b.icon className="w-5 h-5" style={{ color: "var(--amber)" }} />
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>{b.title}</h3>
                  <p className="text-[0.85rem]" style={{ color: "var(--text-secondary)" }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ WHO IS IT FOR ═══ */}
      <section className="py-24 md:py-28 relative z-[2]" style={{ background: "rgba(15,22,35,0.4)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Ideal For</p>
            <h2 className="h-section reveal-up mt-2">Who benefits from <span className="serif-accent">short-term trading?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((a, i) => (
              <div key={a.title} className="flex gap-4 p-6 rounded-xl border transition-all hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] reveal-up group" style={{ borderColor: "var(--border-subtle)", transitionDelay: `${i * 0.08}s` }}>
                <div className="w-1.5 rounded-full flex-shrink-0 transition-all group-hover:shadow-[0_0_8px_rgba(245,166,35,0.3)]" style={{ background: "var(--amber)" }} />
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>{a.title}</h3>
                  <p className="text-[0.85rem]" style={{ color: "var(--text-secondary)" }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-28 relative z-[2] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(245,166,35,0.08), transparent)" }} />
        <div className="cta-glow" style={{ background: "rgba(245,166,35,0.12)", top: -150, left: "15%" }} />
        <div className="max-w-3xl mx-auto px-6 relative z-[1]">
          <h2 className="h-section reveal-up">Ready to trade <span className="serif-accent">smarter?</span></h2>
          <p className="reveal-up mt-4 mx-auto" style={{ maxWidth: 420, color: "var(--text-secondary)" }}>
            Access real-time markets and optimise your energy portfolio with EEX Origin.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-8 reveal-up">
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortTermPPA;
