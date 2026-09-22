import React from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { TrendingUp, Mail } from "lucide-react";

const features = [
  "Day-Ahead Market (DAM) price forecasts",
  "Green Day-Ahead Market (GDAM) price forecasts",
  "Real-Time Market (RTM) price forecasts",
  "Forecast ranges to support procurement timing",
];

const PriceForecast = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ paddingTop: 64 }}>
      <Seo title="Electricity Price Forecast" description="A dedicated electricity price forecasting platform for India\u2019s GDAM, DAM, and RTM markets \u2014 currently in development." path="/price-forecast" />
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-3"
        style={{ borderBottom: "1px solid var(--border-subtle)", background: "rgba(15,22,35,0.6)" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--text-muted)" }} />
          <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            In development
          </span>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold"
          style={{ color: "var(--green-electric)" }}
        >
          Get notified <Mail className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="relative flex-grow flex items-center justify-center px-6 py-16" style={{ minHeight: "70vh" }}>
        <div className="text-center max-w-xl mx-auto">
          <span className="coming-soon-badge" style={{ marginBottom: 24 }}>
            Coming Soon
          </span>
          <div className="flex items-center justify-center mb-6" style={{ marginTop: 8 }}>
            <TrendingUp size={56} style={{ color: "var(--green-electric)" }} strokeWidth={1.5} />
          </div>
          <h1 className="h-display mb-4">Electricity Price Forecast</h1>
          <p className="body-lg mb-10 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: 480 }}>
            A dedicated forecasting platform for India&apos;s electricity markets, currently in development.
            It&apos;s built to give you data-driven visibility into where prices are headed, so procurement
            decisions can be made ahead of the market rather than after it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 mx-auto" style={{ maxWidth: 480 }}>
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--green-electric)", flexShrink: 0 }}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-primary">
            Request Early Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceForecast;
