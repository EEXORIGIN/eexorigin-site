import React, { useEffect } from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, BarChart3, Globe, Award, TrendingUp, FileCheck, Target } from "lucide-react";
import SparkDivider from "../components/SparkDivider";
import carbonImage from "../assets/carbon-credit-advisory.jpg";

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

const services = [
  { icon: BarChart3, title: "Carbon Footprint Assessment", desc: "Measure and analyse greenhouse gas emissions across your operations." },
  { icon: TrendingUp, title: "Carbon Credit Opportunity Analysis", desc: "Identify eligible projects and maximise carbon credit generation potential." },
  { icon: Leaf, title: "Renewable Energy & Green Power Advisory", desc: "Support clean energy adoption through renewable sourcing strategies." },
  { icon: Award, title: "ESG & Sustainability Support", desc: "Strengthen environmental, social, and governance initiatives with expert guidance." },
  { icon: FileCheck, title: "REC and Green Energy Solutions", desc: "Assist in Renewable Energy Certificate procurement and green energy compliance." },
  { icon: Target, title: "Net-Zero Strategy Consulting", desc: "Develop practical roadmaps to achieve long-term carbon neutrality." },
  { icon: Globe, title: "Carbon Market Guidance", desc: "Navigate voluntary and compliance carbon markets with confidence." },
];

const benefits = [
  { title: "Reduce Environmental Impact", desc: "Lower your carbon footprint through strategic emission reduction." },
  { title: "Strengthen ESG Performance", desc: "Improve your environmental, social, and governance scores." },
  { title: "Support Sustainability Goals", desc: "Align operations with corporate sustainability commitments." },
  { title: "Enhance Brand Reputation", desc: "Build stakeholder trust through demonstrated environmental leadership." },
  { title: "Explore Carbon Revenue", desc: "Unlock new revenue streams from carbon credit markets." },
  { title: "Accelerate Net-Zero", desc: "Fast-track your journey to carbon neutrality with expert guidance." },
];

const CarbonCreditAdvisory = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Seo title="Carbon Advisory" description="Carbon credit advisory services helping businesses navigate carbon markets and sustainability compliance." path="/services/carbon-credit-advisory" />
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden flex flex-col justify-center items-center text-center" style={{ minHeight: "55vh", paddingTop: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(46,139,192,0.06), transparent 70%)" }} />
        <div className="relative z-[2] px-6 max-w-3xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase mb-6 transition-colors reveal-up" style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-grid)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            ← Back to Services
          </Link>
          <p className="label-accent reveal-up">Sustainability Advisory</p>
          <h1 className="h-display mb-5 mt-4 reveal-up" style={{ transitionDelay: "0.1s" }}>
            Carbon <span className="serif-accent" style={{ color: "var(--blue-grid)" }}>Advisory</span>
          </h1>
          <p className="body-lg mx-auto reveal-up" style={{ maxWidth: 560, transitionDelay: "0.2s" }}>
            Helping businesses achieve sustainability and unlock carbon value through strategic carbon management and renewable energy advisory.
          </p>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ IMAGE + INTRO ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl reveal-up" style={{ border: "1px solid var(--border-subtle)" }}>
              <img src={carbonImage} alt="Carbon Credit Advisory" className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(8,12,20,0.4), transparent 40%)" }} />
            </div>
            <div className="reveal-up" style={{ transitionDelay: "0.15s" }}>
              <p className="label-accent mb-3">Sustainability</p>
              <h2 className="h-section mb-5">Unlock your carbon <span className="serif-accent">value.</span></h2>
              <p className="text-[0.95rem] leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                Energy Exchange Origin supports industries in identifying carbon reduction opportunities, evaluating carbon credit potential, and navigating renewable energy and sustainability markets.
              </p>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Our team helps organisations reduce their carbon footprint while enhancing environmental compliance and ESG performance for long-term sustainability.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-[2px] w-12" style={{ background: "var(--blue-grid)" }} />
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "var(--blue-grid)" }}>Strategic Carbon Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ SERVICES ═══ */}
      <section className="py-24 md:py-28 relative z-[2]" style={{ background: "rgba(15,22,35,0.4)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">What We Offer</p>
            <h2 className="h-section reveal-up mt-2">Our Advisory <span className="serif-accent">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
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

      {/* ═══ BENEFITS ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Key Benefits</p>
            <h2 className="h-section reveal-up mt-2">Why invest in carbon <span className="serif-accent">advisory?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={b.title} className="flex gap-4 p-6 rounded-xl border transition-all hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] reveal-up group" style={{ borderColor: "var(--border-subtle)", transitionDelay: `${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(15,169,138,0.15)]" style={{ background: "var(--glow-green)", border: "1px solid var(--border-accent)" }}>
                  <Leaf className="w-4 h-4" style={{ color: "var(--green-electric)" }} />
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

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-28 relative z-[2] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(15,169,138,0.08), transparent)" }} />
        <div className="cta-glow" style={{ background: "rgba(15,169,138,0.12)", top: -150, left: "15%" }} />
        <div className="cta-glow" style={{ background: "rgba(46,139,192,0.1)", bottom: -150, right: "15%", animationDelay: "3s" }} />
        <div className="max-w-3xl mx-auto px-6 relative z-[1]">
          <h2 className="h-section reveal-up">Build a Sustainable <span className="serif-accent">Future.</span></h2>
          <p className="reveal-up mt-4 mx-auto" style={{ maxWidth: 420, color: "var(--text-secondary)" }}>
            Partner with EEX Origin to transform sustainability into a strategic business advantage.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-8 reveal-up">
            <Link to="/contact" className="btn-primary">
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarbonCreditAdvisory;
