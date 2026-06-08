import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useCmsContent } from "../../context/CmsContext";
import axios from "axios";
import softCactusLogo from "../../assets/Group 1000010885.png";
import urgenceIcon from "../../assets/UrgenceContact.png";
import emailIcon from "../../assets/EmailContact.png";
import callIcon from "../../assets/CallContact.png";
import "./ContactFooter.css";

export default function ContactFooter({ hideForm = false }) {
    const { t } = useTranslation();
    const { getCmsText, getCmsContact, contact, socials } = useCmsContent();

    const [form, setForm] = useState({ nom: "", email: "", tel: "", message: "" });
    const [isVisible, setIsVisible] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const handleSubmit = async () => {
        setError("");
        setSubmitting(true);
        try {
            await axios.post("http://127.0.0.1:8000/api/contact", form);
            setSuccess(true);
            setForm({ nom: "", email: "", tel: "", message: "" });
            setTimeout(() => setSuccess(false), 4000);
        } catch (err) {
            setError("Une erreur est survenue. Veuillez réessayer.");
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const isAtBottom = scrollY + windowHeight > documentHeight - 80;
            if (scrollY > 300 && !isAtBottom) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // ── Données de contact CMS avec fallback ──────────────────
    const phone1 = getCmsContact("phone_1", contact?.phone_1 || "+212 6 61 26 77 60");
    const phone2 = getCmsContact("phone_2", contact?.phone_2 || "+212 5366 - 168 69");
    const email  = getCmsContact("email",  contact?.email  || "contact@cliniquemoulouya.ma");

    // ── Réseaux sociaux CMS ───────────────────────────────────
    const instagramUrl = socials?.instagram || "#";
    const facebookUrl  = socials?.facebook  || "#";
    const tiktokUrl    = socials?.tiktok    || "#";

    return (
        <>
            {/* Bouton scroll top FIXE */}
            <button
                className={`cf-scroll-top ${isVisible ? "visible" : ""}`}
                onClick={scrollTop}
                aria-label="Haut de page"
            >
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5M5 12l7-7 7 7"
                        stroke="white" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* ══ SECTION CONTACT ══════════════════════════════════════ */}
            {!hideForm && (
            <section className="cf-wrapper">
                <div className="cf-inner">

                    {/* ── Formulaire gauche ─────────────────────────────── */}
                    <div className="cf-form-box">
                        <h3 className="cf-form-title">
                            {getCmsText("contact.footer_title", t("footer.contact_title", "Contactez-Nous"))}
                        </h3>
                        <div className="cf-fields">
                            <input className="cf-input" type="text" name="nom" placeholder={t("footer.form_name", "Nom et Prénom")} value={form.nom} onChange={handleChange} />
                            <input className="cf-input" type="email" name="email" placeholder={t("footer.form_email", "E-mail")} value={form.email} onChange={handleChange} />
                            <input className="cf-input" type="tel" name="tel" placeholder={t("footer.form_phone", "Numéro du téléphone")} value={form.tel} onChange={handleChange} />
                            <input className="cf-input" type="text" name="message" placeholder={t("footer.form_message", "Votre message")} value={form.message} onChange={handleChange} />
                        </div>
                        {error && <p style={{ color: "#dc2626", fontSize: "13px", margin: "8px 0 0" }}>{error}</p>}
                        <button
                          className={`cf-submit ${success ? "cf-submit--success" : ""}`}
                          onClick={handleSubmit}
                          disabled={submitting}
                        >
                          {submitting ? "Envoi..." : success ? "Message envoyé ✓" : t("footer.form_submit", "ENVOYER")}
                        </button>
                    </div>

                    {/* ── Infos contact droite ──────────────────────────── */}
                    <div className="cf-info">
                        <h2 className="cf-info-title">
                            {getCmsText("contact.footer_title", t("footer.contact_title", "Contactez-nous"))}
                        </h2>
                        <p className="cf-info-desc">
                            {getCmsText("contact.footer_desc", t("footer.contact_desc", "Contactez-nous pour toute information ou prise de rendez-vous, notre équipe est à votre écoute."))}
                        </p>
                        <div className="cf-info-line" />

                        <p className="cf-info-label">{t("footer.contact_info_label", "CONTACT INFO :")}</p>

                        {/* Urgence */}
                        <div className="cf-contact-item">
                            <div className="cf-contact-icon">
                                <img src={urgenceIcon} alt="urgence" />
                            </div>
                            <span>{getCmsText("hero.emergency_label", t("footer.emergency", "Urgence 24H/24H"))}</span>
                        </div>

                        {/* Email */}
                        <div className="cf-contact-item">
                            <div className="cf-contact-icon">
                                <img src={emailIcon} alt="email" />
                            </div>
                            <span>{email}</span>
                        </div>

                        {/* Téléphone */}
                        <div className="cf-contact-item">
                            <div className="cf-contact-icon">
                                <img src={callIcon} alt="téléphone" />
                            </div>
                            <div className="cf-contact-multi">
                                <span>{phone1}</span>
                                {phone2 && phone2 !== phone1 && <span>{phone2}</span>}
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="cf-socials">
                            <a href={instagramUrl} className="cf-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1376F8" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="5" stroke="#1376F8" strokeWidth="2" />
                                    <circle cx="17.5" cy="6.5" r="1.2" fill="#1376F8" />
                                </svg>
                            </a>
                            <a href={facebookUrl} className="cf-social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        fill="#1376F8"
                                        stroke="#1376F8" strokeWidth="1"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href={tiktokUrl} className="cf-social-btn" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"
                                        stroke="#1376F8" strokeWidth="2.5"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            )}

            {/* ══ FOOTER ═══════════════════════════════════════════════ */}
            <footer className="cf-footer">
                <div className="cf-footer-inner">
                    <div className="cf-footer-logo">
                        <a href="https://softcactus.ma/" target="_blank" rel="noopener noreferrer">
                            <img src={softCactusLogo} alt="Soft Cactus" className="cf-footer-logo-img" />
                        </a>
                    </div>
                    <p className="cf-footer-copy">
                        {t("footer.rights", "© 2026 Tous les droits sont réservés pour")} <a href="https://softcactus.ma/" target="_blank" rel="noopener noreferrer" className="cf-cactus-link">SOFT CACTUS</a>
                    </p>
                </div>
            </footer>
        </>
    );
}
