import { useTranslation } from "react-i18next";
import troisDocteurs from "../../assets/3 docteurs.png";
import quoteIcon from "../../assets/Ellipse 1833.png";
import badge from "../../assets/20ans d'existence.png";
import calling from "../../assets/Calling hero section.png";
import localisation from "../../assets/localisation hero section.png";
import "./HeroSection.css";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="hero-wrapper">

      {/* ── Cercles roses CSS ── */}
      <div className="hero-circle-3" />
      <div className="hero-circle-2" />
      <div className="hero-circle-1" />

      {/* ── Badge 20 ans ── */}
      <img src={badge} alt="20 ans d'existence" className="hero-badge" />

      {/* ── Image 3 Docteurs ── */}
      <div className="hero-collage" style={{ width: 'auto', height: 'auto', bottom: 0 }}>
        <img src={troisDocteurs} alt="Équipe de chirurgiens" className="hero-doctors-img" style={{ maxHeight: '450px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
      </div>

      {/* ── Cards droite ── */}
      <div className="hero-cards">

        <div className="hero-card">
          <div className="hero-card-icon-wrap hero-card-icon-blue">
            <img src={calling} alt="Urgence" className="hero-card-icon" />
          </div>
          <div className="hero-card-body">
            <span className="hero-card-label">{t("hero.emergency", "Urgence 24H/24H")}</span>
            <span className="hero-card-value">+212 6 61 26 77 60</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-icon-wrap hero-card-icon-blue">
            <img src={localisation} alt="Adresse" className="hero-card-icon" />
          </div>
          <div className="hero-card-body">
            <span className="hero-card-value">{t("hero.address_line1", "7, Rue De La Paix,")}</span>
            <span className="hero-card-value">{t("hero.address_line2", "Berkane, Morocco 63300")}</span>
          </div>
        </div>

      </div>

      {/* ── Citation bas ── */}
      <div className="hero-quote" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {t("hero.quote", "“Disponibles 24h/24, Nous vous assurons une prise en charge continue et des soins de qualité“")}
        <img src={quoteIcon} alt="Icon" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', insetInlineEnd: '-24px' }} />
      </div>

    </section>
  );
}