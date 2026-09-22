import React, { useEffect } from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Shield, Clock, BookOpen, PieChart } from "lucide-react";
import SparkDivider from "../components/SparkDivider";
import image1 from "../assets/medium-term-ppa.jpg";

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

const offerings = [
  { icon: Settings, title: "Contract Structuring", desc: "Tailored PPA terms based on your load profile, technology, and risk appetite." },
  { icon: Shield, title: "Price Hedging", desc: "Protect against market volatility with fixed or indexed pricing models." },
  { icon: Clock, title: "Flexible Tenure", desc: "Choose contract durations that align with your business cycles or project phases." },
  { icon: BookOpen, title: "Regulatory Guidance", desc: "Navigate policy and compliance requirements with ease." },
  { icon: PieChart, title: "Portfolio Management", desc: "Combine PPAs with short-term trading or green certificates for optimised returns." },
];

const audiences = [
  { title: "Corporate Buyers", desc: "Data centres, manufacturers, and commercial buildings seeking stable pricing." },
  { title: "Independent Power Producers", desc: "IPPs looking to secure revenue streams over medium horizons." },
  { title: "Distribution Utilities", desc: "Utilities balancing procurement portfolios with flexible contracts." },
  { title: "Green Energy Investors", desc: "Investors seeking structured returns from renewable energy projects." },
  { title: "ESCOs & Aggregators", desc: "Energy service companies optimising client portfolios." },
];

const MediumTermPPA = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Seo title="Medium Term PPA" description="Medium-term Power Purchase Agreement solutions for businesses seeking flexible energy procurement." path="/services/mtp" />
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden flex flex-col justify-center items-center text-center" style={{ minHeight: "55vh", paddingTop: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(46,139,192,0.06), transparent 70%)" }} />
        <div className="relative z-[2] px-6 max-w-3xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase mb-6 transition-colors reveal-up" style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-grid)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            ← Back to Services
          </Link>
          <p className="label-accent reveal-up">Our Services</p>
          <h1 className="h-display mb-5 mt-4 reveal-up" style={{ transitionDelay: "0.1s" }}>
            Medium Term <span className="serif-accent" style={{ color: "var(--blue-grid)" }}>PPA</span>
          </h1>
          <p className="body-lg mx-auto reveal-up" style={{ maxWidth: 560, transitionDelay: "0.2s" }}>
            Flexible energy contracts tailored for evolving business needs — the perfect balance between long-term stability and short-term agility.
          </p>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ IMAGE + INTRO ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl reveal-up" style={{ border: "1px solid var(--border-subtle)" }}>
              <img src={image1} alt="Medium Term PPA" className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(8,12,20,0.4), transparent 40%)" }} />
            </div>
            <div className="reveal-up" style={{ transitionDelay: "0.15s" }}>
              <p className="label-accent mb-3">Understanding MTPs</p>
              <h2 className="h-section mb-5">What is a Medium-Term <span className="serif-accent">PPA?</span></h2>
              <p className="text-[0.95rem] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                A Medium-Term PPA is a contractual agreement between an energy producer and a buyer to purchase electricity for a fixed or indexed price over a medium-duration period — typically 3 to 10 years.
              </p>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                These contracts are ideal for businesses looking for stable pricing without being locked into long-term commitments.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-[2px] w-12" style={{ background: "var(--blue-grid)" }} />
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--blue-grid)" }}>3–10 Year Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ WHAT WE OFFER ═══ */}
      <section className="py-24 md:py-28 relative z-[2]" style={{ background: "rgba(15,22,35,0.4)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">What We Offer</p>
            <h2 className="h-section reveal-up mt-2">Our Medium-Term PPA <span className="serif-accent">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((s, i) => (
              <div key={s.title} className="card-premium p-7 relative overflow-hidden group reveal-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,139,192,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-[1]">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(46,139,192,0.15)]" style={{ background: "rgba(46,139,192,0.08)", border: "1px solid rgba(46,139,192,0.2)" }}>
                    <s.icon className="w-5 h-5" style={{ color: "var(--blue-grid)" }} />
                  </div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ WHO IS IT FOR ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Ideal For</p>
            <h2 className="h-section reveal-up mt-2">Who is it <span className="serif-accent">for?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((a, i) => (
              <div key={a.title} className="flex gap-4 p-6 rounded-xl border transition-all hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] reveal-up group" style={{ borderColor: "var(--border-subtle)", transitionDelay: `${i * 0.08}s` }}>
                <div className="w-1.5 rounded-full flex-shrink-0 transition-all group-hover:shadow-[0_0_8px_rgba(46,139,192,0.3)]" style={{ background: "var(--blue-grid)" }} />
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
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(46,139,192,0.08), transparent)" }} />
        <div className="cta-glow" style={{ background: "rgba(46,139,192,0.12)", top: -150, left: "15%" }} />
        <div className="max-w-3xl mx-auto px-6 relative z-[1]">
          <h2 className="h-section reveal-up">Power Your Next <span className="serif-accent">Move.</span></h2>
          <p className="reveal-up mt-4 mx-auto" style={{ maxWidth: 420, color: "var(--text-secondary)" }}>
            Whether you're buying or selling energy, our medium-term PPAs help you lock in value while staying agile.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-8 reveal-up">
            <Link to="/contact" className="btn-primary">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediumTermPPA;
