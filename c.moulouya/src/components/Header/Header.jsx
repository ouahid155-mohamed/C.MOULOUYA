import { useState } from "react";
import mapPin from "../../assets/Map pin.png";
import mail from "../../assets/Mail 6.png";
import tel from "../../assets/Tel.png";
import langue from "../../assets/langue.png";
import "./Header.css";

const languages = [
  { code: "fr", label: "FR", flag: langue },
  { code: "ar", label: "AR", flag: null },
  { code: "en", label: "EN", flag: null },
];

export default function Header() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="topbar-wrapper">
      <div className="topbar-container">

        {/* ══ VERSION DESKTOP (> 500px) ══════════════════════════ */}
        <div className="topbar-desktop">

          <div className="topbar-item">
            <img src={mapPin} alt="adresse" className="topbar-icon" />
            <span className="topbar-text">7, Rue De La Paix, Berkane, Morocco, Oriental 63300</span>
          </div>

          <div className="topbar-divider" />

          <div className="topbar-item">
            <img src={tel} alt="téléphone" className="topbar-icon" />
            <span className="topbar-text">+212 6 61 26 77 60</span>
          </div>

          <div className="topbar-divider" />

          <div className="topbar-item">
            <img src={mail} alt="email" className="topbar-icon" />
            <span className="topbar-text">contact@cliniquemoulouya.ma</span>
          </div>

          {/* Langue desktop */}
          <div className="topbar-lang-wrapper">
            <button className="topbar-lang-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <img src={selectedLang.flag || langue} alt="langue" className="topbar-flag" />
              <span className="topbar-lang-label">{selectedLang.label}</span>
              <svg className={`topbar-chevron ${dropdownOpen ? "open" : ""}`} width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2 4L6 8L10 4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="topbar-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`topbar-dropdown-item ${selectedLang.code === lang.code ? "active" : ""}`}
                    onClick={() => { setSelectedLang(lang); setDropdownOpen(false); }}
                  >
                    {lang.flag && <img src={lang.flag} alt={lang.label} className="topbar-flag" />}
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ══ VERSION MOBILE (≤ 500px) ═══════════════════════════ */}
        <div className="topbar-mobile">

          {/* Barre : hamburger + langue */}
          <div className="topbar-mobile-bar">

            {/* Icône hamburger */}
            <button
              className="topbar-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`ham-line ${menuOpen ? "open" : ""}`} />
              <span className={`ham-line ${menuOpen ? "open" : ""}`} />
              <span className={`ham-line ${menuOpen ? "open" : ""}`} />
            </button>

            {/* Langue mobile */}
            <div className="topbar-lang-wrapper">
              <button className="topbar-lang-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={selectedLang.flag || langue} alt="langue" className="topbar-flag" />
                <span className="topbar-lang-label">{selectedLang.label}</span>
                <svg className={`topbar-chevron ${dropdownOpen ? "open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4L6 8L10 4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="topbar-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`topbar-dropdown-item ${selectedLang.code === lang.code ? "active" : ""}`}
                      onClick={() => { setSelectedLang(lang); setDropdownOpen(false); }}
                    >
                      {lang.flag && <img src={lang.flag} alt={lang.label} className="topbar-flag" />}
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Menu déroulant des infos */}
          {menuOpen && (
            <div className="topbar-mobile-menu">
              <div className="topbar-item">
                <img src={mapPin} alt="adresse" className="topbar-icon" />
                <span className="topbar-text">7, Rue De La Paix, Berkane, Morocco, Oriental 63300</span>
              </div>
              <div className="topbar-item">
                <img src={tel} alt="téléphone" className="topbar-icon" />
                <span className="topbar-text">+212 6 61 26 77 60</span>
              </div>
              <div className="topbar-item">
                <img src={mail} alt="email" className="topbar-icon" />
                <span className="topbar-text">contact@cliniquemoulouya.ma</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}