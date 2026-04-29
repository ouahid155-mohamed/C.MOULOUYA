import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoM from "../../assets/logo M.png";
import langue from "../../assets/langue.png";
import "./NavBar.css";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "À Propos", path: "/apropos" },
  { label: "Spécialités", path: "/#specialities" },
  { label: "Galerie", path: "/#galerie" },
  { label: "Contact", path: "/#contact" }
];

const languages = [
  { code: "fr", label: "FR", flag: langue },
  { code: "ar", label: "AR", flag: "https://flagcdn.com/w40/ma.png" },
  { code: "en", label: "EN", flag: "https://flagcdn.com/w40/gb.png" },
];

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Accueil");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const linksRef = useRef({});

  // Synchroniser l'onglet actif avec l'URL
  useEffect(() => {
    const currentLink = navLinks.find(l => l.path === location.pathname);
    if (currentLink) {
      setActiveLink(currentLink.label);
    }
  }, [location.pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = linksRef.current[activeLink];
      if (activeEl) {
        setIndicatorStyle({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeLink]);

  return (
    <>
      <nav className="nb-navbar">

        {/* ── Desktop: right dark background ── */}
        <div className="nb-right-bg-wrapper">
          <svg width="30" height="66" viewBox="0 0 30 66" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
            <path d="M0 0 L15 33 L0 66 L30 66 L30 0 Z" fill="#0A2E72" />
            <path d="M0 0 L15 33 L0 66" stroke="white" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <div className="nb-dark-fill"></div>
        </div>

        {/* ── Desktop: Logo ── */}
        <Link to="/" className="nb-logo nb-logo-desktop" style={{ textDecoration: 'none' }}>
          <div className="nb-logo-icon">
            <img src={logoM} alt="Clinique Moulouya" />
          </div>
          <div className="nb-logo-text">
            <span className="nb-logo-main">CLINIQUE</span>
            <span className="nb-logo-sub">MOULOUYA</span>
          </div>
        </Link>

        {/* ── Desktop: Nav links pill ── */}
        <div className="nb-nav-container">
          <ul className="nb-nav-pill">
            <span className="nb-nav-indicator" style={indicatorStyle} />
            {navLinks.map((link, index) => (
              <li key={link.label} className="nb-nav-item">
                {index > 0 && <span className="nb-sep">|</span>}
                <Link
                  to={link.path}
                  ref={(el) => (linksRef.current[link.label] = el)}
                  className={`nb-nav-link ${activeLink === link.label ? "active" : ""}`}
                  onClick={() => setActiveLink(link.label)}
                >
                  <span className="nb-nav-text">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Desktop: CTA ── */}
        <a href="tel:+212661267760" className="nb-cta">
          <span className="nb-cta-label">RENDEZ-VOUS</span>
          <span className="nb-cta-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M10 6l6 6-6 6" stroke="#0088FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>

        {/* ══ MOBILE BAR: hamburger | logo (centre) | langue ══ */}
        <div className="nb-mobile-bar">

          {/* Hamburger – left */}
          <button
            className="nb-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`nb-ham-line ${menuOpen ? "open" : ""}`} />
            <span className={`nb-ham-line ${menuOpen ? "open" : ""}`} />
            <span className={`nb-ham-line ${menuOpen ? "open" : ""}`} />
          </button>

          {/* Logo – centre */}
          <Link to="/" className="nb-logo nb-logo-mobile" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
            <div className="nb-logo-icon">
              <img src={logoM} alt="Clinique Moulouya" />
            </div>
            <div className="nb-logo-text">
              <span className="nb-logo-main">CLINIQUE</span>
              <span className="nb-logo-sub">MOULOUYA</span>
            </div>
          </Link>

          {/* Langue – right */}
          <div className="nb-mobile-lang-wrapper">
            <button
              className="nb-mobile-lang-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-label="Langue"
            >
              <img src={selectedLang.flag} alt={selectedLang.label} className="nb-mobile-flag" />
              <span className={`nb-mobile-lang-arrow ${dropdownOpen ? "open" : ""}`}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4L6 8L10 4" stroke="#0088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            {dropdownOpen && (
              <div className="nb-lang-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`nb-lang-dropdown-item ${selectedLang.code === lang.code ? "active" : ""}`}
                    onClick={() => { setSelectedLang(lang); setDropdownOpen(false); }}
                  >
                    <img src={lang.flag} alt={lang.label} className="nb-mobile-flag" />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile menu déroulant ── */}
        {menuOpen && (
          <div className="nb-mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`nb-mobile-link ${activeLink === link.label ? "active" : ""}`}
                onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+212661267760" className="nb-mobile-cta">
              RENDEZ-VOUS ›
            </a>
          </div>
        )}
      </nav>
    </>
  );
}