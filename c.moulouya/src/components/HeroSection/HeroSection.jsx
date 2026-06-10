import { useTranslation } from "react-i18next";
import { useCmsContent } from "../../context/CmsContext";
import doctors from "../../assets/3 docteurs.png";
import badge from "../../assets/20ans d'existence.png";
import calling from "../../assets/Calling hero section.png";
import localisation from "../../assets/localisation hero section.png";
import "./HeroSection.css";

export default function HeroSection() {
  const { t } = useTranslation();
  const { getCmsText, getCmsContact, getCmsMedia } = useCmsContent();

  const doctorsImg = getCmsMedia("hero_doctors", doctors);
  const badgeImg = getCmsMedia("hero_badge", badge);

  const phone = getCmsContact("phone_1", "+212 6 61 26 77 60");
  const address = getCmsContact(
    "address",
    "7, Rue De La Paix, Berkane, Morocco 63300"
  );
  const addressParts = address.split(",").map((part) => part.trim()).filter(Boolean);
  const address1 = `${addressParts.slice(0, 3).join(", ")}${addressParts.length > 3 ? "," : ""}`;
  const address2 = addressParts.slice(3).join(", ");

  return (
    <section className="hero-wrapper">
      <div className="hero-circle-3" />
      <div className="hero-circle-2" />
      <div className="hero-circle-1" />

      <img src={badgeImg} alt="20 ans d'existence" className="hero-badge" />
      <img src={doctorsImg} alt="Equipe medicale Clinique Moulouya" className="hero-doctors" />

      <div className="hero-cards">
        <div className="hero-card">
          <div className="hero-card-icon-wrap hero-card-icon-blue">
            <img src={calling} alt="Urgence" className="hero-card-icon" />
          </div>
          <div className="hero-card-body">
            <span className="hero-card-label">
              {getCmsText("hero.emergency_label", t("hero.emergency", "Urgence 24H/24H"))}
            </span>
            <span className="hero-card-value">{phone}</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-icon-wrap hero-card-icon-blue">
            <img src={localisation} alt="Adresse" className="hero-card-icon" />
          </div>
          <div className="hero-card-body">
            <span className="hero-card-value">{address1}</span>
            {address2 && <span className="hero-card-value">{address2}</span>}
          </div>
        </div>
      </div>

      <div className="hero-quote">
        {getCmsText(
          "hero.quote",
          t(
            "hero.quote",
            "Disponibles 24h/24, nous garantissons une excellence medicale continue et des soins performants"
          )
        )}
      </div>
    </section>
  );
}
