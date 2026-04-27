import doctors from "../../assets/3 docteurs.png";
import badge from "../../assets/20ans d'existence.png";
import calling from "../../assets/Calling hero section.png";
import localisation from "../../assets/localisation hero section.png";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-wrapper">

      {/* ── Cercles roses CSS ── */}
      <div className="hero-circle-3" />
      <div className="hero-circle-2" />
      <div className="hero-circle-1" />

      {/* ── Badge 20 ans ── */}
      <img src={badge} alt="20 ans d'existence" className="hero-badge" />

      {/* ── 3 Docteurs ── */}
      <img src={doctors} alt="Équipe médicale Clinique Moulouya" className="hero-doctors" />

      {/* ── Cards droite ── */}
      <div className="hero-cards">

        <div className="hero-card">
          <div className="hero-card-icon-wrap hero-card-icon-blue">
            <img src={calling} alt="Urgence" className="hero-card-icon" />
          </div>
          <div className="hero-card-body">
            <span className="hero-card-label">Urgence 24H/24H</span>
            <span className="hero-card-value">+212 6 61 26 77 60</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-icon-wrap hero-card-icon-blue">
            <img src={localisation} alt="Adresse" className="hero-card-icon" />
          </div>
          <div className="hero-card-body">
            <span className="hero-card-value">7, Rue De La Paix, Berkane,</span>
            <span className="hero-card-value">Morocco, Oriental 63300</span>
          </div>
        </div>

      </div>

      {/* ── Citation bas ── */}
      <div className="hero-quote">
        “Disponibles 24h/24, Nous vous assurons une prise en charge continue et des soins de qualité“
      </div>

    </section>
  );
}