import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import ServiceFull from "./pages/ServiceFull";
import { Toaster } from "@/components/ui/toaster";
import LongTermPPA from "./pages/LongTermPPA";
import MediumTermPPA from "./pages/MediumTermPPA";
import ShortTermPPA from "./pages/ShortTermPPA";
import RPOObligations from "./pages/RPOObligations";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/full" element={<ServiceFull />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/ltp" element={<LongTermPPA />} />
              <Route path="/services/mtp" element={<MediumTermPPA />} />
              <Route path="/services/stp" element={<ShortTermPPA />} />
              <Route path="/services/rpo" element={<RPOObligations />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
