import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import { Toaster } from "@/components/ui/toaster";

/* Everything but the homepage is lazy-loaded, so a first-time visitor
   only downloads the code for the page they actually landed on. */
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Contact = lazy(() => import("@/pages/Contact"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const PriceForecast = lazy(() => import("@/pages/PriceForecast"));
const ServiceFull = lazy(() => import("./pages/ServiceFull"));
const LongTermPPA = lazy(() => import("./pages/LongTermPPA"));
const MediumTermPPA = lazy(() => import("./pages/MediumTermPPA"));
const ShortTermPPA = lazy(() => import("./pages/ShortTermPPA"));
const RPOObligations = lazy(() => import("./pages/RPOObligations"));
const CarbonCreditAdvisory = lazy(() => import("./pages/CarbonCreditAdvisory"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

/* ── Page transition variants ── */
const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: "easeIn" } },
};

/* Minimal, brand-neutral fallback while a lazy page chunk downloads —
   intentionally quiet since most page chunks load in well under a
   second on a normal connection. */
const RouteFallback = () => (
  <div style={{ minHeight: "60vh" }} aria-hidden="true" />
);

const AnimatedRoutes = () => {
  const location = useLocation();

  // Always land at the top of the new page instead of keeping the
  // previous page's scroll position — unless the link included a
  // #section hash (e.g. from the Services flyout), in which case the
  // destination page scrolls itself to that section instead.
  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        id="main-content"
        className="flex-grow"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/full" element={<ServiceFull />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ltp" element={<LongTermPPA />} />
            <Route path="/services/mtp" element={<MediumTermPPA />} />
            <Route path="/services/stp" element={<ShortTermPPA />} />
            <Route path="/services/rpo" element={<RPOObligations />} />
            <Route path="/services/carbon-credit-advisory" element={<CarbonCreditAdvisory />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/price-forecast" element={<PriceForecast />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  );
};

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Router>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div className={`min-h-screen flex flex-col relative ${!loaded ? "opacity-0" : "animate-fadeIn"}`}>
        <Navbar />
        <ErrorBoundary>
          <AnimatedRoutes />
        </ErrorBoundary>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
