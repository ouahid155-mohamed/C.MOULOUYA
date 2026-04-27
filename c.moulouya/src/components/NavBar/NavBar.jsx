import { useState } from "react";
import logoM from "../../assets/logo M.png";
import "./NavBar.css";

const navLinks = ["Accueil", "À Propos", "Spécialités", "Galerie", "Contact"];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Accueil");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nb-navbar">
        {/* Right background overlay */}
        <div className="nb-right-bg-wrapper">
          <svg width="30" height="66" viewBox="0 0 30 66" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <path d="M0 0 L15 33 L0 66 L30 66 L30 0 Z" fill="#0A2E72" />
            <path d="M0 0 L15 33 L0 66" stroke="white" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <div className="nb-dark-fill"></div>
        </div>

        {/* ── Logo ── */}
        <div className="nb-logo">
          <div className="nb-logo-icon">
            <img src={logoM} alt="Clinique Moulouya" />
          </div>
          <div className="nb-logo-text">
            <span className="nb-logo-main">CLINIQUE</span>
            <span className="nb-logo-sub">MOULOUYA</span>
          </div>
        </div>

        {/* ── Nav links desktop — pilule blanche ── */}
        <ul className="nb-nav-pill">
          {navLinks.map((link, index) => (
            <li key={link} className="nb-nav-item">
              {index > 0 && <span className="nb-sep">|</span>}
              <button
                className={`nb-nav-link ${activeLink === link ? "active" : ""}`}
                onClick={() => setActiveLink(link)}
              >
                {activeLink === link && <span className="nb-nav-dot" />}
                <span className="nb-nav-text">{link}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* ── CTA desktop ── */}
        <a href="tel:+212661267760" className="nb-cta">
          <span className="nb-cta-label">RENDEZ-VOUS</span>
          <span className="nb-cta-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6l6 6-6 6" stroke="#0088FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>

        {/* ── Hamburger mobile ── */}
        <button
          className="nb-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`nb-ham-line ${menuOpen ? "open" : ""}`} />
          <span className={`nb-ham-line ${menuOpen ? "open" : ""}`} />
          <span className={`nb-ham-line ${menuOpen ? "open" : ""}`} />
        </button>

        {/* ── Menu mobile déroulant ── */}
        {menuOpen && (
          <div className="nb-mobile-menu">
            {navLinks.map((link) => (
              <button
                key={link}
                className={`nb-mobile-link ${activeLink === link ? "active" : ""}`}
                onClick={() => { setActiveLink(link); setMenuOpen(false); }}
              >
                {link}
              </button>
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