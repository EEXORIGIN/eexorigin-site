import React, { useEffect, useRef, useState } from "react";
import eexLogoSvg from "./eexLogoSvg";
import "./LoadingScreen.css";

const LOADING_SESSION_KEY = "eex-loaded";

// Opening screen: plays the animated EEXORIGIN logo ("Minimal", ~2s),
// then fades into the site. Shown once per browser session; a click or
// key press skips it.
const PLAY_MS = 2000; // logo animation length
const FADE_MS = 500;  // fade-out into the site
const SPARKS = 12;

const LoadingScreen = ({ onComplete }) => {
  const alreadyLoaded = (() => {
    try {
      return sessionStorage.getItem(LOADING_SESSION_KEY) === "1";
    } catch {
      return false;
    }
  })();

  const [phase, setPhase] = useState(alreadyLoaded ? "done" : "play"); // play → reveal → done
  const finishing = useRef(false);
  const timers = useRef([]);

  const finish = () => {
    if (finishing.current) return;
    finishing.current = true;
    timers.current.forEach(clearTimeout);
    try {
      sessionStorage.setItem(LOADING_SESSION_KEY, "1");
    } catch {
      // ignore storage errors (private browsing, etc.)
    }
    setPhase("reveal");
    timers.current.push(
      setTimeout(() => {
        setPhase("done");
        onComplete?.();
      }, FADE_MS)
    );
  };

  useEffect(() => {
    if (alreadyLoaded) {
      onComplete?.();
      return;
    }
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    timers.current.push(setTimeout(finish, reduced ? 900 : PLAY_MS));
    const skip = () => finish();
    window.addEventListener("keydown", skip);
    return () => {
      timers.current.forEach(clearTimeout);
      window.removeEventListener("keydown", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`eexl-screen ${phase === "reveal" ? "eexl-screen--reveal" : ""}`}
      onClick={finish}
      role="presentation"
    >
      <div className="eexl-stage">
        <div dangerouslySetInnerHTML={{ __html: eexLogoSvg }} />
        <div className="eexl-sparks" aria-hidden="true">
          {Array.from({ length: SPARKS }).map((_, i) => (
            <span
              key={i}
              style={{
                "--a": `${(360 / SPARKS) * i + (i % 2 ? 9 : -6)}deg`,
                "--d": `${38 + ((i * 37) % 45)}px`,
                "--c": i % 2 ? "#0FA98A" : "#0768A1",
              }}
            />
          ))}
        </div>
      </div>
      <span className="sr-only">EEXORIGIN — Energy Exchange Origin</span>
    </div>
  );
};

export default LoadingScreen;
