import React, { useState, useRef, useEffect } from "react";
import Seo from "@/components/Seo";
import { RefreshCw, Maximize, Minimize } from "lucide-react";

// Same-site embed URL. Requires a DNS record (app.eexorigin.com → the
// DigitalOcean app) and a custom domain added on the DigitalOcean app —
// see the setup note below. Falls back to the direct DO URL if the
// subdomain isn't live yet or the iframe fails to load.
const EMBED_URL = "https://app.eexorigin.com";
const FALLBACK_URL = "https://energy-origin-nhtpj.ondigitalocean.app/";

const Dashboard = () => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div
      className="flex flex-col"
      style={{ height: "100vh", paddingTop: 64, overflow: "hidden" }}
    >
      <Seo title="Dashboard" description="Access the EEX Origin energy management dashboard — bills, PPAs, solar monitoring, and ESG reporting." path="/dashboard" />

      <div ref={containerRef} className="relative flex-grow" style={{ height: "100%", background: "#0f1623" }}>
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
              Open Dashboard
            </a>
          </div>
        )}

        {!failed && (
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit full screen" : "View full screen"}
            aria-label={isFullscreen ? "Exit full screen" : "View full screen"}
            className="absolute flex items-center justify-center"
            style={{
              top: 12,
              right: 12,
              zIndex: 20,
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.85)",
              cursor: "pointer",
            }}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        )}

        <iframe
          title="EEX Origin Energy Dashboard"
          src={EMBED_URL}
          className="w-full h-full"
          style={{ border: "none", display: failed ? "none" : "block" }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          allow="fullscreen; downloads"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Dashboard;
