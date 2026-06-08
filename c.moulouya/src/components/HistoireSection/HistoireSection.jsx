import { useTranslation } from "react-i18next";
import { useCmsContent } from "../../context/CmsContext";
import aboutMain from "../../assets/Replace This.png";
import aboutTl from "../../assets/Screenshot 2026-04-21 104656 1.png";
import aboutBr from "../../assets/Screenshot 2026-04-21 105329 1.png";
import callIcon from "../../assets/Tel.png";
import "./HistoireSection.css";

export default function HistoireSection() {
  const { t } = useTranslation();
  const { getCmsText, getCmsContact, getCmsMedia } = useCmsContent();

  const imgMain = getCmsMedia("about_main", aboutMain);
  const imgTl = getCmsMedia("about_tl", aboutTl);
  const imgBr = getCmsMedia("about_br", aboutBr);
  const phone = getCmsContact("phone_1", "+212 6 61 26 77 60");

  const title = getCmsText(
    "history.title",
    t("history.title", "Des solutions de sante pensees pour votre bien-etre")
  );

  return (
    <section className="hs-wrapper">
      <div className="hs-inner">
        <div className="hs-images">
          <div className="hs-img-main-wrapper">
            <img src={imgBr} alt="Soins clinique" className="hs-img-main" />
          </div>

          <div className="hs-img-tl-wrapper">
            <img src={imgTl} alt="Equipe medicale" className="hs-img-tl" />
            <div className="hs-fillet fillet-tl-top" />
            <div className="hs-fillet fillet-tl-left" />
          </div>

          <div className="hs-img-br-wrapper">
            <img src={imgMain} alt="Operation" className="hs-img-br" />
            <div className="hs-fillet fillet-br-bottom" />
            <div className="hs-fillet fillet-br-right" />
          </div>
        </div>

        <div className="hs-content">
          <span className="hs-tag">
            {getCmsText("history.tag", t("history.tag", "NOTRE HISTOIRE"))}
          </span>

          <h2 className="hs-title">
            {title.split("pensées").reduce((prev, curr, i) => [prev, <br key={i} />, "pensées" + curr])}
          </h2>

          <p className="hs-desc">
            {getCmsText(
              "history.desc",
              t(
                "history.desc",
                "Depuis plus de 20 ans, la Clinique Moulouya est un pilier des soins de sante dans la region de l'Oriental. Fondee sur des valeurs d'excellence, d'engagement et d'humanite, notre clinique de reference offre une prise en charge medicale personnalisee, ou chaque patient est accueilli avec bienveillance et professionnalisme."
              )
            )}
          </p>

          <div className="hs-actions">
            <a href="/contact" className="hs-btn">
              {getCmsText("history.contact_btn", t("history.contact_btn", "CONTACTEZ-NOUS"))}
            </a>
            <div className="hs-phone">
              <div className="hs-phone-icon">
                <img src={callIcon} alt="telephone" />
              </div>
              <div className="hs-phone-text">
                <span className="hs-phone-label">
                  {getCmsText("history.need_help", t("history.need_help", "Besoin d'aide?"))}
                </span>
                <span className="hs-phone-number">{phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
