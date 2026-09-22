import React, { useState } from "react";
import Seo from "@/components/Seo";
import { ExternalLink, RefreshCw } from "lucide-react";

// Same-site embed URL. Requires a DNS record (app.eexorigin.com → the
// DigitalOcean app) and a custom domain added on the DigitalOcean app —
// see the setup note below. Falls back to the direct DO URL if the
// subdomain isn't live yet or the iframe fails to load.
const EMBED_URL = "https://app.eexorigin.com";
const FALLBACK_URL = "https://energy-origin-nhtpj.ondigitalocean.app/";

const Dashboard = () => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ paddingTop: 64 }}>
      <Seo title="Dashboard" description="Access the EEX Origin energy management dashboard \u2014 bills, PPAs, solar monitoring, and ESG reporting." path="/dashboard" />
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-3"
        style={{ borderBottom: "1px solid var(--border-subtle)", background: "rgba(15,22,35,0.6)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: loaded && !failed ? "var(--green-electric)" : "var(--text-muted)" }}
          />
          <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            {failed ? "Dashboard unavailable in embedded view" : loaded ? "Live" : "Connecting…"}
          </span>
        </div>
        <a
          href={FALLBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold"
          style={{ color: "var(--green-electric)" }}
        >
          Open in new tab <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="relative flex-grow" style={{ minHeight: "70vh" }}>
        {!loaded && !failed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <RefreshCw className="w-5 h-5 animate-spin" style={{ color: "var(--text-muted)" }} />
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Loading your dashboard…</p>
          </div>
        )}

        {failed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-sm max-w-sm" style={{ color: "var(--text-secondary)" }}>
              The embedded dashboard couldn&apos;t load here. You can still open it directly.
            </p>
            <a href={FALLBACK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Open Dashboard <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

        <iframe
          title="EEX Origin Energy Dashboard"
          src={EMBED_URL}
          className="w-full h-full"
          style={{ border: "none", display: failed ? "none" : "block", minHeight: "70vh" }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
