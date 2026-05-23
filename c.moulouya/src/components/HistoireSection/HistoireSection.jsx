import { useTranslation } from "react-i18next";
import aboutMain from "../../assets/Replace This.png";
import aboutTl from "../../assets/Screenshot 2026-04-21 104656 1.png";
import aboutBr from "../../assets/Screenshot 2026-04-21 105329 1.png";
import callIcon from "../../assets/Tel.png";
import "./HistoireSection.css";

export default function HistoireSection() {
  const { t } = useTranslation();
  return (
    <section className="hs-wrapper">
      <div className="hs-inner">

        {/* ── GAUCHE : Collage de 3 images ── */}
        <div className="hs-images">
          <div className="hs-img-main-wrapper">
            <img src={aboutBr} alt="Soins clinique" className="hs-img-main" />
          </div>
          
          <div className="hs-img-tl-wrapper">
            <img src={aboutTl} alt="Équipe médicale" className="hs-img-tl" />
            <div className="hs-fillet fillet-tl-top"></div>
            <div className="hs-fillet fillet-tl-left"></div>
          </div>
          
          <div className="hs-img-br-wrapper">
            <img src={aboutMain} alt="Opération" className="hs-img-br" />
            <div className="hs-fillet fillet-br-bottom"></div>
            <div className="hs-fillet fillet-br-right"></div>
          </div>
        </div>

        {/* ── DROITE : contenu ── */}
        <div className="hs-content">
          <span className="hs-tag">{t("history.tag", "NOTRE HISTOIRE")}</span>

          <h2 className="hs-title">
            {t("history.title", "Des solutions de santé pensées pour votre bien-être").split('pensées').reduce((prev, curr, i) => [prev, <br key={i} />, 'pensées' + curr])}
          </h2>

          <p className="hs-desc">
            {t("history.desc", "Depuis plus de 20 ans, la Clinique Moulouya est un pilier des soins de santé dans la région de l'Oriental. Fondée sur des valeurs d'excellence, d'engagement et d'humanité, notre clinique de référence offre une prise en charge médicale personnalisée, où chaque patient est accueilli avec bienveillance et professionnalisme.")}
          </p>

          <div className="hs-actions">
            <a href="/contact" className="hs-btn">{t("history.contact_btn", "CONTACTEZ-NOUS")}</a>
            <div className="hs-phone">
              <div className="hs-phone-icon">
                <img src={callIcon} alt="téléphone" />
              </div>
              <div className="hs-phone-text">
                <span className="hs-phone-label">{t("history.need_help", "Besoin d'aide?")}</span>
                <span className="hs-phone-number">+212 6 61 26 77 60</span>
              </div>
            </div>
          </div>
        </div>

      </div>


    </section>
  );
}
