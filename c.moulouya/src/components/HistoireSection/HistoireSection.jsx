import aboutMain from "../../assets/about_1_3.png";
import aboutSmall from "../../assets/Background+Shadow.png";
import callIcon from "../../assets/Tel.png";
import "./HistoireSection.css";

export default function HistoireSection() {
  return (
    <section className="hs-wrapper">
      <div className="hs-inner">

        {/* ── GAUCHE : 2 images superposées ── */}
        <div className="hs-images">
          {/* Grande image principale — fond */}
          <img src={aboutMain} alt="Soins clinique" className="hs-img-main" />
          {/* Petite image — haut gauche par-dessus */}
          <img src={aboutSmall} alt="Équipe médicale" className="hs-img-small" />
        </div>

        {/* ── DROITE : contenu ── */}
        <div className="hs-content">
          <span className="hs-tag">NOTRE HISTOIRE</span>

          <h2 className="hs-title">
            Solutions De Soins De Santé Rentables
          </h2>

          <p className="hs-desc">
            Depuis plus de 20 ans, la Clinique Moulouya est un pilier des soins
            de santé dans la région. Fondée sur des valeurs d'excellence et
            d'engagement, notre clinique a su s'imposer comme un établissement
            de référence, où chaque patient est accueilli avec bienveillance.
          </p>

          <div className="hs-actions">
            <a href="/contact" className="hs-btn">CONTACTEZ-NOUS</a>
            <div className="hs-phone">
              <div className="hs-phone-icon">
                <img src={callIcon} alt="téléphone" />
              </div>
              <div className="hs-phone-text">
                <span className="hs-phone-label">Besoin d'aide?</span>
                <span className="hs-phone-number">+212 6 61 26 77 60</span>
              </div>
            </div>
          </div>
        </div>

      </div>


    </section>
  );
}