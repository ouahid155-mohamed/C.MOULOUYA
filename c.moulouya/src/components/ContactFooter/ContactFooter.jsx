import { useState } from "react";
import logoSoftCactus from "../../assets/Logo SoftCactus.png";
import softCactusText from "../../assets/SoftCactus.png";
import urgenceIcon from "../../assets/UrgenceContact.png";
import emailIcon from "../../assets/EmailContact.png";
import callIcon from "../../assets/CallContact.png";
import "./ContactFooter.css";

export default function ContactFooter() {
    const [form, setForm] = useState({ nom: "", email: "", tel: "", message: "" });
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            {/* ══ SECTION CONTACT ══════════════════════════════════════ */}
            <section className="cf-wrapper">
                <div className="cf-inner">

                    {/* ── Formulaire gauche ─────────────────────────────── */}
                    <div className="cf-form-box">
                        <h3 className="cf-form-title">Contactez-Nous</h3>
                        <div className="cf-fields">
                            <input className="cf-input" type="text" name="nom" placeholder="Nom et Prénom" value={form.nom} onChange={handleChange} />
                            <input className="cf-input" type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
                            <input className="cf-input" type="tel" name="tel" placeholder="Numéro du téléphone" value={form.tel} onChange={handleChange} />
                            <input className="cf-input" type="text" name="message" placeholder="Votre message" value={form.message} onChange={handleChange} />
                        </div>
                        <button className="cf-submit">ENVOYER</button>
                    </div>

                    {/* ── Infos contact droite ──────────────────────────── */}
                    <div className="cf-info">

                        {/* Bouton scroll top */}
                        <button className="cf-scroll-top" onClick={scrollTop} aria-label="Haut de page">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M12 19V5M5 12l7-7 7 7"
                                    stroke="white" strokeWidth="2.5"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <h2 className="cf-info-title">Rester en contact</h2>
                        <p className="cf-info-desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt.
                        </p>
                        <div className="cf-info-line" />

                        <p className="cf-info-label">CONTACT INFO :</p>

                        {/* Urgence */}
                        <div className="cf-contact-item">
                            <div className="cf-contact-icon">
                                <img src={urgenceIcon} alt="urgence" />
                            </div>
                            <span>Urgence 24H/24H</span>
                        </div>

                        {/* Email */}
                        <div className="cf-contact-item">
                            <div className="cf-contact-icon">
                                <img src={emailIcon} alt="email" />
                            </div>
                            <span>contact@cliniquemoulouya.ma</span>
                        </div>

                        {/* Téléphone */}
                        <div className="cf-contact-item">
                            <div className="cf-contact-icon">
                                <img src={callIcon} alt="téléphone" />
                            </div>
                            <div className="cf-contact-multi">
                                <span>+212 6 61 26 77 60</span>
                                <span>+212 5366 - 168 69</span>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="cf-socials">
                            <a href="#" className="cf-social-btn" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1376F8" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="5" stroke="#1376F8" strokeWidth="2" />
                                    <circle cx="17.5" cy="6.5" r="1.2" fill="#1376F8" />
                                </svg>
                            </a>
                            <a href="#" className="cf-social-btn" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        fill="#1376F8"
                                        stroke="#1376F8" strokeWidth="1"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#" className="cf-social-btn" aria-label="TikTok">
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

            {/* ══ FOOTER ═══════════════════════════════════════════════ */}
            <footer className="cf-footer">
                <div className="cf-footer-inner">
                    <div className="cf-footer-logo">
                        <div className="cf-footer-logo-wrap">
                            <img src={logoSoftCactus} alt="Soft Cactus" className="cf-footer-logo-img" />
                            <span className="cf-footer-reg">®</span>
                        </div>
                        <img src={softCactusText} alt="Soft Cactus" className="cf-footer-logo-text-img" />
                    </div>
                    <p className="cf-footer-copy">
                        © 2026 Tous les droits sont réservés pour SOFT CACTUS
                    </p>
                </div>
            </footer>
        </>
    );
}