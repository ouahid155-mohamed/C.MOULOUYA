import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCmsContent } from "../../context/CmsContext";
import { API_BASE_URL, API_HEADERS } from "../../api/apiConfig";
import axios from "axios";
import urgenceIcon from "../../assets/UrgenceContact.png";
import emailIcon from "../../assets/EmailContact.png";
import telephoneIcon from "../../assets/telephone (1) 1.png";
import mapPinIcon from "../../assets/Group 1000011086.png";
import localisationIcon from "../../assets/localisation.png";
import "./ContactSection.css";

export default function ContactSection() {
    const { t } = useTranslation();
    const { getCmsContact, socials } = useCmsContent();
    const [form, setForm] = useState({
        nom: "", prenom: "", email: "", tel: "", message: ""
    });
    const [success, setSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const phone1 = getCmsContact("phone_1", "+212 6 61 26 77 60");
    const phone2 = getCmsContact("phone_2", "+212 5366 - 168 69");
    const email = getCmsContact("email", "contact@cliniquemoulouya.ma");
    const hours = getCmsContact(
        "hours",
        t("contact.info.hoursValue", "Disponibles 24h/24. Nous vous assurons une prise en charge continue et des soins de qualite")
    );
    const address = getCmsContact("address", "7, Rue De La Paix, Berkane, Morocco, Oriental 63300");
    const [addressLine1, ...addressRest] = address.split(",");
    const addressLine2 = addressRest.join(",").trim();
    const instagramUrl = socials?.instagram || "#";
    const facebookUrl = socials?.facebook || "#";
    const tiktokUrl = socials?.tiktok || "#";

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);
        try {
            await axios.post(
                `${API_BASE_URL}/contact`,
                {
                    nom: `${form.nom} ${form.prenom}`.trim(),
                    email: form.email,
                    tel: form.tel,
                    message: form.message
                },
                { headers: API_HEADERS }
            );
            setSuccess(true);
            setForm({ nom: "", prenom: "", email: "", tel: "", message: "" });
            setTimeout(() => setSuccess(false), 4000);
        } catch (err) {
            setError("Une erreur est survenue. Veuillez reessayer.");
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="cs-wrapper">
            <div className="cs-layout">
                <form className="cs-form-box" onSubmit={handleSubmit}>
                    <div className="cs-row">
                        <div className="cs-field">
                            <label className="cs-label" htmlFor="cs-nom">{t("contact.form.lastNameLabel", "Nom")}</label>
                            <input
                                id="cs-nom"
                                className="cs-input"
                                type="text"
                                name="nom"
                                placeholder={t("contact.form.lastNamePlaceholder", "Nom")}
                                value={form.nom}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="cs-field">
                            <label className="cs-label" htmlFor="cs-prenom">{t("contact.form.firstNameLabel", "Prenom")}</label>
                            <input
                                id="cs-prenom"
                                className="cs-input"
                                type="text"
                                name="prenom"
                                placeholder={t("contact.form.firstNamePlaceholder", "Prenom")}
                                value={form.prenom}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="cs-field-full">
                        <label className="cs-label" htmlFor="cs-email">{t("contact.form.emailLabel", "Email")}</label>
                        <input
                            id="cs-email"
                            className="cs-input"
                            type="email"
                            name="email"
                            placeholder={t("contact.form.emailPlaceholder", "contact@cliniquemoulouya.ma")}
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cs-field-full">
                        <label className="cs-label" htmlFor="cs-tel">{t("contact.form.phoneLabel", "Numero de telephone")}</label>
                        <input
                            id="cs-tel"
                            className="cs-input"
                            type="tel"
                            name="tel"
                            placeholder={t("contact.form.phonePlaceholder", "+212.000-0000")}
                            value={form.tel}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cs-field-full cs-field-grow">
                        <label className="cs-label" htmlFor="cs-message">{t("contact.form.messageLabel", "Message")}</label>
                        <textarea
                            id="cs-message"
                            className="cs-textarea"
                            name="message"
                            placeholder={t("contact.form.messagePlaceholder", "")}
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cs-form-footer" style={{ flexDirection: "column", alignItems: "stretch", gap: "16px" }}>
                        {error && <p style={{ color: "#dc2626", fontSize: "13px", margin: "0" }}>{error}</p>}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <button
                                className={`cs-submit ${success ? "cs-submit--success" : ""}`}
                                type="submit"
                                disabled={submitting}
                            >
                                {submitting ? "Envoi..." : success ? "Message envoye" : t("contact.form.submitBtn", "ENVOYER")}
                            </button>
                            <div className="cs-socials">
                                <a href={instagramUrl} className="cs-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1376F8" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="5" stroke="#1376F8" strokeWidth="2" />
                                        <circle cx="17.5" cy="6.5" r="1.2" fill="#1376F8" />
                                    </svg>
                                </a>
                                <a href={facebookUrl} className="cs-social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                            fill="#1376F8" stroke="#1376F8" strokeWidth="1"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                <a href={tiktokUrl} className="cs-social-btn" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                                    <svg className="cs-tiktok-icon" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M14 4v9.1a4.1 4.1 0 11-4.1-4.1"
                                            stroke="#1376F8"
                                            strokeWidth="2.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 4c.5 3 2.3 4.8 5 5"
                                            stroke="#1376F8"
                                            strokeWidth="2.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="cs-info-col">
                    <div className="cs-info-card">
                        <div className="cs-info-icon">
                            <svg viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                                <path d="M12 7v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="cs-info-text">
                            <p className="cs-info-title">{t("contact.info.hoursTitle", "Horaires de la clinique")}</p>
                            <p className="cs-info-value">{hours}</p>
                        </div>
                    </div>

                    <div className="cs-info-card">
                        <div className="cs-info-icon">
                            <img src={emailIcon} alt="Email" />
                        </div>
                        <div className="cs-info-text">
                            <p className="cs-info-title">{t("contact.info.emailTitle", "Adresse email")}</p>
                            <p className="cs-info-value">{email}</p>
                        </div>
                    </div>

                    <div className="cs-info-card">
                        <div className="cs-info-icon">
                            <img src={telephoneIcon} alt="Telephone" />
                        </div>
                        <div className="cs-info-text">
                            <p className="cs-info-title">{t("contact.info.phoneTitle", "Numero de telephone")}</p>
                            <p className="cs-info-value">{phone2}</p>
                        </div>
                    </div>

                    <div className="cs-info-card">
                        <div className="cs-info-icon">
                            <img src={urgenceIcon} alt="Urgence" />
                        </div>
                        <div className="cs-info-text">
                            <p className="cs-info-title">{t("contact.info.emergencyTitle", "Urgence 24H/24H")}</p>
                            <p className="cs-info-value">{phone1}</p>
                        </div>
                    </div>

                    <div className="cs-map-box">
                        <img
                            src={localisationIcon}
                            alt="Carte de la clinique"
                            className="cs-map-frame"
                            style={{ objectFit: "cover" }}
                        />
                        <a
                            href="https://maps.app.goo.gl/c2Z5afyGVR4yqN2Z7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cs-map-link-overlay"
                            aria-label="Ouvrir dans Google Maps"
                        />
                        <div className="cs-map-address">
                            <div className="cs-map-pin">
                                <img src={mapPinIcon} alt="Localisation" />
                            </div>
                            <div className="cs-map-addr-text">
                                <p className="cs-map-addr-title">{t("contact.info.addressTitle", "Adresse de la clinique")}</p>
                                <p className="cs-map-addr-value">
                                    {addressLine1.trim()}<br />
                                    {addressLine2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
