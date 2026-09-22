import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

export default function Footer() {
  return (
    <>
      {/* ━━━ CTA SECTION ━━━ */}
      <section className="cta-section">
        <h2>Ready to Build a Sustainable Energy Future?</h2>
        <p>Get expert advisory on green procurement, compliance, and market strategy — tailored for your business.</p>
        <div className="cta-btns">
          <Link to="/contact" className="cta-btn-white">Request a Consultation</Link>
          <a href="tel:+918838197744" className="cta-btn-outline-w">Call Us</a>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="nav-logo" style={{ color: "#fff" }}>
                <img src={logoIcon} alt="EEX Origin" className="nav-logo-mark" />
                <span>EEX<span className="e">&nbsp;Origin</span></span>
              </Link>
              <p>
                Energy Exchange Origin LLP — navigating India's open energy markets with
                sustainability-focused advisory and technology solutions for industrial consumers.
              </p>
            </div>

            {/* Sustainability Advisory */}
            <div className="footer-col">
              <h4>Sustainability Advisory</h4>
              <ul>
                <li><Link to="/services/carbon-credit-advisory">Carbon Advisory</Link></li>
                <li><Link to="/services/rpo">Renewable Advisory</Link></li>
                <li><Link to="/services/ltp">Long Term PPA</Link></li>
                <li><Link to="/services/mtp">Medium Term PPA</Link></li>
                <li><Link to="/services/stp">Short Term Trading</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/dashboard">Energy Dashboard</Link></li>
                <li><Link to="/price-forecast">Electricity Price Forecast</Link> <span className="footer-soon-tag">Coming Soon</span></li>
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@eexorigin.com" target="_blank" rel="noopener noreferrer">info@eexorigin.com</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <a href="tel:+918838197744">+91 88381 97744</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>Coimbatore, Tamil Nadu 641001</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>Bangalore, Karnataka 560100</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2025 Energy Exchange Origin LLP. All rights reserved.</span>
            <span><Link to="/privacy-policy">Privacy Policy</Link></span>
          </div>
        </div>
      </footer>
    </>
  );
}
