import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";

const SEARCH_INDEX = [
  { title: "Home", path: "/", desc: "Electricity procurement, market intelligence, and energy advisory.", keywords: "home homepage overview electricity procurement energy advisory" },
  { title: "All Services", path: "/services", desc: "Sustainability advisory and PPA services, in one place.", keywords: "services all services sustainability ppa overview" },
  { title: "Long Term PPA", path: "/services/ltp", desc: "10–25 year power purchase agreements for predictable pricing.", keywords: "long term power purchase agreement ppa 10-25 years energy contract" },
  { title: "Medium Term PPA", path: "/services/mtp", desc: "3–10 year contracts balancing stability and flexibility.", keywords: "medium term ppa 3-10 years power purchase agreement" },
  { title: "Short Term Energy Trading", path: "/services/stp", desc: "Short-term trading and procurement strategy.", keywords: "short term trading energy market" },
  { title: "Renewable Advisory", path: "/services/rpo", desc: "RPO compliance, REC trading, and audit-ready reporting.", keywords: "rpo renewable purchase obligation compliance rec renewable advisory" },
  { title: "Carbon Advisory", path: "/services/carbon-credit-advisory", desc: "Footprint assessments and carbon market guidance.", keywords: "carbon credit advisory net-zero sustainability carbon market" },
  { title: "About Us", path: "/about", desc: "Who EEX Origin is, and how we work.", keywords: "about company mission team coimbatore bangalore" },
  { title: "Dashboard", path: "/dashboard", desc: "Energy management dashboard — bills, PPAs, solar, ESG.", keywords: "dashboard energy management app bills solar esg tracking" },
  { title: "Electricity Price Forecast", path: "/price-forecast", desc: "GDAM, DAM, and RTM forecasting — coming soon.", keywords: "price forecast gdam dam rtm coming soon electricity market" },
  { title: "Contact", path: "/contact", desc: "Get in touch with our energy consultants.", keywords: "contact enquiry get in touch phone email talk" },
  { title: "Privacy Policy", path: "/privacy-policy", desc: "How we handle the data you share with us.", keywords: "privacy policy data protection dpdp" },
];

export default function SiteSearch({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      // Wait a tick so the element is actually in the DOM before focusing.
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SEARCH_INDEX;
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.keywords.includes(q)
    );
  }, [query]);

  if (!open) return null;

  return (
    <div className="site-search-overlay" onClick={onClose}>
      <div
        className="site-search-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="site-search-input-row">
          <Search size={18} className="site-search-icon" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages and services..."
            className="site-search-input"
            aria-label="Search"
          />
          <button className="site-search-close" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        <div className="site-search-results">
          {results.length === 0 ? (
            <p className="site-search-empty">No pages match "{query}".</p>
          ) : (
            results.map((item) => (
              <Link key={item.path} to={item.path} className="site-search-result" onClick={onClose}>
                <div>
                  <p className="site-search-result-title">{item.title}</p>
                  <p className="site-search-result-desc">{item.desc}</p>
                </div>
                <ArrowRight size={16} className="site-search-result-arrow" />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
