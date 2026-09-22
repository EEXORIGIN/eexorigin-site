import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, ChevronRight, Search } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import SiteSearch from "@/components/SiteSearch";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    categories: [
      {
        label: "Sustainability Advisory",
        to: "/services#sustainability-advisory",
        children: [
          { label: "Carbon Advisory", to: "/services/carbon-credit-advisory" },
          { label: "Renewable Advisory", to: "/services/rpo" },
        ],
      },
      {
        label: "PPA — Commercial & Industrial",
        to: "/services#ppa-commercial-industrial",
        children: [
          { label: "Long Term PPA", to: "/services/ltp" },
          { label: "Medium Term PPA", to: "/services/mtp" },
          { label: "Short Term Trading", to: "/services/stp" },
        ],
      },
    ],
    links: [
      { label: "Dashboard", to: "/dashboard" },
      { label: "Price Forecast", to: "/price-forecast" },
    ],
    viewAll: { label: "View All Services", to: "/services" },
  },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function isPathActive(to, pathname) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(to + "/");
}

function isServicesActive(pathname) {
  return (
    pathname.startsWith("/services") ||
    pathname === "/dashboard" ||
    pathname === "/price-forecast"
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSubOpen(null);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img src={logoIcon} alt="EEX Origin" className="nav-logo-mark" />
            <span>EEX<span className="e">&nbsp;Origin</span></span>
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to + item.label} className={item.categories ? "nav-item-dropdown" : ""}>
                {item.categories ? (
                  <>
                    <Link
                      to={item.to}
                      className={`nav-link nav-link-parent${isServicesActive(location.pathname) ? " active" : ""}`}
                    >
                      {item.label} <ChevronDown size={14} className="nav-caret" />
                    </Link>
                    <div className="nav-dropdown">
                      {item.categories.map((cat) => (
                        <div className="nav-dd-category" tabIndex={0} key={cat.label}>
                          <Link to={cat.to} className="nav-dd-category-label">
                            {cat.label}
                            <ChevronRight size={14} className="nav-dd-chev" />
                          </Link>
                          <div className="nav-flyout">
                            {cat.children.map((child) => (
                              <Link key={child.to} to={child.to} className="nav-dropdown-link">
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      {item.links.map((link) => (
                        <Link key={link.to} to={link.to} className="nav-dropdown-link">
                          {link.label}
                        </Link>
                      ))}
                      <Link to={item.viewAll.to} className="nav-dropdown-link nav-dropdown-viewall">
                        {item.viewAll.label}
                      </Link>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className={`nav-link${isPathActive(item.to, location.pathname) ? " active" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link to="/contact" className="nav-cta">
                Business Enquiry
              </Link>
            </li>
          </ul>

          <button
            className="nav-search-toggle"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="nav-mobile">
          <div className="nav-mobile-header">
            <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
              <img src={logoIcon} alt="EEX Origin" className="nav-logo-mark" />
              <span>EEX<span className="e">&nbsp;Origin</span></span>
            </Link>
            <button
              className="nav-mobile-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <ul className="nav-mobile-links">
            {navItems.map((item) => (
              <li key={item.to + item.label}>
                {item.categories ? (
                  <>
                    <button
                      className={`nav-mobile-parent-btn${isServicesActive(location.pathname) ? " active" : ""}`}
                      onClick={() => setMobileSubOpen(mobileSubOpen === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={20}
                        style={{ transform: mobileSubOpen === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                      />
                    </button>
                    {mobileSubOpen === item.label && (
                      <ul className="nav-mobile-sublinks">
                        {item.categories.map((cat) => (
                          <React.Fragment key={cat.label}>
                            <li className="nav-mobile-sub-heading">
                              <Link to={cat.to} onClick={() => setMobileOpen(false)}>
                                {cat.label}
                              </Link>
                            </li>
                            {cat.children.map((child) => (
                              <li key={child.to}>
                                <Link to={child.to} onClick={() => setMobileOpen(false)}>
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </React.Fragment>
                        ))}
                        <li className="nav-mobile-sub-heading">More</li>
                        {item.links.map((link) => (
                          <li key={link.to}>
                            <Link to={link.to} onClick={() => setMobileOpen(false)}>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            to={item.viewAll.to}
                            onClick={() => setMobileOpen(false)}
                            style={{ fontWeight: 600 }}
                          >
                            {item.viewAll.label}
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className={isPathActive(item.to, location.pathname) ? "active" : ""}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="nav-cta"
                style={{ display: "inline-flex", marginTop: 16, fontSize: 18 }}
                onClick={() => setMobileOpen(false)}
              >
                Business Enquiry <ArrowRight size={18} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
