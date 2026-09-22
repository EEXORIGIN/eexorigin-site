import React, { useEffect, useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

const LOADING_SESSION_KEY = "eex-loaded";

const LoadingScreen = ({ onComplete }) => {
  const alreadyLoaded = (() => {
    try {
      return sessionStorage.getItem(LOADING_SESSION_KEY) === "1";
    } catch {
      return false;
    }
  })();

  const [progress, setProgress] = useState(alreadyLoaded ? 100 : 0);
  const [phase, setPhase] = useState(alreadyLoaded ? "done" : "loading"); // loading → reveal → done

  useEffect(() => {
    if (alreadyLoaded) {
      onComplete?.();
      return;
    }

    let frame;
    let start = null;
    const duration = 1100; // ms

    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const raw = Math.min(elapsed / duration, 1);
      // ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        // Start reveal phase
        setPhase("reveal");
        try {
          sessionStorage.setItem(LOADING_SESSION_KEY, "1");
        } catch {
          // ignore storage errors (private browsing, etc.)
        }
        setTimeout(() => {
          setPhase("done");
          onComplete?.();
        }, 500);
      }
    };

    // Small delay before starting the counter
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, 150);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [onComplete, alreadyLoaded]);

  if (phase === "done") return null;

  return (
    <div
      className={`loading-screen ${phase === "reveal" ? "loading-screen--reveal" : ""}`}
    >
      {/* Ambient glow orbs */}
      <div className="ls-orb ls-orb--1" />
      <div className="ls-orb ls-orb--2" />
      <div className="ls-orb ls-orb--3" />

      {/* Grid pattern overlay */}
      <div className="ls-grid" />

      {/* Center content */}
      <div className="ls-content">
        {/* Logo */}
        <div className="ls-logo">
          <div className="ls-logo-icon">
            <img src={logoIcon} alt="" className="ls-logo-img" />
          </div>
          <div className="ls-logo-text">
            <span className="ls-brand">
              EEX <span style={{ color: "var(--green-electric)" }}>ORIGIN</span>
            </span>
            <span className="ls-sub">Energy Exchange</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="ls-bar-track">
          <div className="ls-bar-fill" style={{ width: `${progress}%` }}>
            <div className="ls-bar-glow" />
          </div>
        </div>

        {/* Percentage + label */}
        <div className="ls-meta">
          <span className="ls-percent">{progress}%</span>
          <span className="ls-label">LOADING...</span>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="ls-scanline" />
    </div>
  );
};

export default LoadingScreen;
