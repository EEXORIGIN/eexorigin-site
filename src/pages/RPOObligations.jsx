import React, { useEffect } from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, RefreshCw, MapPin, ClipboardCheck, BarChart3 } from "lucide-react";
import SparkDivider from "../components/SparkDivider";
import image3 from "../assets/rpo-compliance.jpg";

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

const rpoTypes = [
  { label: "Solar RPO", desc: "Mandatory procurement from solar energy sources" },
  { label: "Non-Solar RPO", desc: "Wind, biomass, and other renewable sources" },
  { label: "Hydro Purchase Obligation", desc: "Procurement from hydroelectric projects" },
];

const solutions = [
  { icon: RefreshCw, title: "Renewable Energy Procurement", desc: "Secure power from solar, wind, or hydro projects via open access, green energy exchanges, or PPAs." },
  { icon: BarChart3, title: "REC Trading", desc: "Meet RPO targets by procuring Renewable Energy Certificates from recognised exchanges (IEX, PXIL)." },
  { icon: FileCheck, title: "RPO Strategy & Advisory", desc: "Custom compliance planning based on your load, location, and regulatory requirements." },
  { icon: ClipboardCheck, title: "End-to-End Compliance", desc: "From registration to documentation and submission to state nodal agencies — we handle it all." },
  { icon: MapPin, title: "Audit-Ready Reporting", desc: "Maintain accurate records and reports for regulatory inspections and audits." },
];

const audiences = [
  { title: "DISCOMs", desc: "Distribution Companies fulfilling state-mandated RPO targets." },
  { title: "Captive Power Operators", desc: "Captive Power Plant operators with renewable purchase mandates." },
  { title: "Open Access Consumers", desc: "Consumers procuring power through open access channels." },
  { title: "Industrial & Commercial Units", desc: "Large units with significant electricity consumption and RPO obligations." },
];

const RPOObligations = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Seo title="Renewable Advisory" description="Renewable Purchase Obligation (RPO) compliance and renewable energy advisory for Indian businesses." path="/services/rpo" />
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden flex flex-col justify-center items-center text-center" style={{ minHeight: "55vh", paddingTop: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(15,169,138,0.06), transparent 70%)" }} />
        <div className="relative z-[2] px-6 max-w-3xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase mb-6 transition-colors reveal-up" style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green-electric)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            ← Back to Services
          </Link>
          <p className="label-accent reveal-up">Sustainability Advisory</p>
          <h1 className="h-display mb-5 mt-4 reveal-up" style={{ transitionDelay: "0.1s" }}>
            Renewable <span className="serif-accent" style={{ color: "var(--green-electric)" }}>Advisory</span>
          </h1>
          <p className="body-lg mx-auto reveal-up" style={{ maxWidth: 560, transitionDelay: "0.2s" }}>
            Simplifying Renewable Purchase Obligation (RPO) compliance for your business through structured, cost-effective, and fully managed solutions.
          </p>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ IMAGE + INTRO ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl reveal-up" style={{ border: "1px solid var(--border-subtle)" }}>
              <img src={image3} alt="RPO Obligations" className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(8,12,20,0.4), transparent 40%)" }} />
            </div>
            <div className="reveal-up" style={{ transitionDelay: "0.15s" }}>
              <p className="label-accent mb-3">Regulatory Compliance</p>
              <h2 className="h-section mb-5">What is <span className="serif-accent">RPO?</span></h2>
              <p className="text-[0.95rem] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                Renewable Purchase Obligation is a regulatory mandate requiring certain entities to purchase a specified percentage of their total electricity consumption from renewable energy sources.
              </p>
              <div className="space-y-3">
                {rpoTypes.map((t) => (
                  <div key={t.label} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "var(--glow-green)", border: "1px solid var(--border-accent)" }}>
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--green-electric)" }} />
                    <div>
                      <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>{t.label}</p>
                      <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SparkDivider />

      {/* ═══ SOLUTIONS ═══ */}
      <section className="py-24 md:py-28 relative z-[2]" style={{ background: "rgba(15,22,35,0.4)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Our Solutions</p>
            <h2 className="h-section reveal-up mt-2">Renewable Advisory <span className="serif-accent">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s, i) => (
              <div key={s.title} className="card-premium p-7 relative overflow-hidden group reveal-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,169,138,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-[1]">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(15,169,138,0.15)]" style={{ background: "var(--glow-green)", border: "1px solid var(--border-accent)" }}>
                    <s.icon className="w-5 h-5" style={{ color: "var(--green-electric)" }} />
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

      {/* ═══ WHO NEEDS THIS ═══ */}
      <section className="py-24 md:py-28 relative z-[2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="label-accent reveal-up">Who Needs This</p>
            <h2 className="h-section reveal-up mt-2">Who needs RPO <span className="serif-accent">services?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((a, i) => (
              <div key={a.title} className="flex gap-4 p-6 rounded-xl border transition-all hover:border-[var(--border-accent)] hover:bg-[var(--bg-elevated)] reveal-up group" style={{ borderColor: "var(--border-subtle)", transitionDelay: `${i * 0.08}s` }}>
                <div className="w-1.5 rounded-full flex-shrink-0 transition-all group-hover:shadow-[0_0_8px_rgba(15,169,138,0.3)]" style={{ background: "var(--green-electric)" }} />
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
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(15,169,138,0.08), transparent)" }} />
        <div className="cta-glow" style={{ background: "rgba(15,169,138,0.12)", top: -150, left: "15%" }} />
        <div className="max-w-3xl mx-auto px-6 relative z-[1]">
          <h2 className="h-section reveal-up">Stay Compliant, Stay <span className="serif-accent">Ahead.</span></h2>
          <p className="reveal-up mt-4 mx-auto" style={{ maxWidth: 420, color: "var(--text-secondary)" }}>
            Let EEX Origin be your trusted partner in fulfilling RPO obligations with ease, efficiency, and integrity.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-8 reveal-up">
            <Link to="/contact" className="btn-primary">
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RPOObligations;
