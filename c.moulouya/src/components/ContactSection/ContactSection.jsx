import { useState } from "react";
import urgenceIcon from "../../assets/UrgenceContact.png";
import emailIcon from "../../assets/EmailContact.png";
import callIcon from "../../assets/CallContact.png";
import telephoneIcon from "../../assets/telephone (1) 1.png";
import mapPinIcon from "../../assets/Group 1000011086.png";
import localisationIcon from "../../assets/localisation.png";
import "./ContactSection.css";

export default function ContactSection() {
    const [form, setForm] = useState({
        nom: "", prenom: "", email: "", tel: "", message: ""
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: envoyer le formulaire
    };

    return (
        <section className="cs-wrapper">
            <div className="cs-layout">

                {/* ── Formulaire gauche ─────────────────────────────── */}
                <form className="cs-form-box" onSubmit={handleSubmit}>

                    {/* Nom + Prénom */}
                    <div className="cs-row">
                        <div className="cs-field">
                            <label className="cs-label" htmlFor="cs-nom">Nom</label>
                            <input
                                id="cs-nom"
                                className="cs-input"
                                type="text"
                                name="nom"
                                placeholder="Nom"
                                value={form.nom}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="cs-field">
                            <label className="cs-label" htmlFor="cs-prenom">Prénom</label>
                            <input
                                id="cs-prenom"
                                className="cs-input"
                                type="text"
                                name="prenom"
                                placeholder="Prénom"
                                value={form.prenom}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="cs-field-full">
                        <label className="cs-label" htmlFor="cs-email">Email</label>
                        <input
                            id="cs-email"
                            className="cs-input"
                            type="email"
                            name="email"
                            placeholder="contact@cliniquemoulouya.ma"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Téléphone */}
                    <div className="cs-field-full">
                        <label className="cs-label" htmlFor="cs-tel">Numéro de téléphone</label>
                        <input
                            id="cs-tel"
                            className="cs-input"
                            type="tel"
                            name="tel"
                            placeholder="+212.000-0000"
                            value={form.tel}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Message */}
                    <div className="cs-field-full cs-field-grow">
                        <label className="cs-label" htmlFor="cs-message">Message</label>
                        <textarea
                            id="cs-message"
                            className="cs-textarea"
                            name="message"
                            placeholder=""
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Bas : bouton + réseaux */}
                    <div className="cs-form-footer">
                        <button className="cs-submit" type="submit">ENVOYÉ</button>
                        <div className="cs-socials">
                            <a href="#" className="cs-social-btn" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1376F8" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="5" stroke="#1376F8" strokeWidth="2" />
                                    <circle cx="17.5" cy="6.5" r="1.2" fill="#1376F8" />
                                </svg>
                            </a>
                            <a href="#" className="cs-social-btn" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        fill="#1376F8" stroke="#1376F8" strokeWidth="1"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#" className="cs-social-btn" aria-label="LinkedIn">
                                <svg viewBox="5.5 5.5 13 13" fill="none">
                                    <path d="M8 12v5M8 8v1" stroke="#1376F8" strokeWidth="2.5" strokeLinecap="round" />
                                    <path d="M12 17v-3a2.5 2.5 0 015 0v3M12 12v5" stroke="#1376F8" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </form>

                {/* ── Infos contact droite ──────────────────────────── */}
                <div className="cs-info-col">

                    {/* Horaires */}
                    <div className="cs-info-card">
                        <div className="cs-info-icon">
                            <svg viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                                <path d="M12 7v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="cs-info-text">
                            <p className="cs-info-title">Horaires de la clinique</p>
                            <p className="cs-info-value">Disponibles 24h/24. Nous vous assurons une prise en charge continue et des soins de qualité</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="cs-info-card">
                        <div className="cs-info-icon">
                            <img src={emailIcon} alt="Email" />
                        </div>
                        <div className="cs-info-text">
                            <p className="cs-info-title">Adresse email</p>
                            <p className="cs-info-value">contact@cliniquemoulouya.ma</p>
                        </div>
                    </div>

                    {/* Téléphone */}
                    <div className="cs-info-card">
                        <div className="cs-info-icon">
                            <img src={telephoneIcon} alt="Téléphone" />
                        </div>
                        <div className="cs-info-text">
                            <p className="cs-info-title">Numéro de téléphone</p>
                            <p className="cs-info-value">+212 5366 – 168 69</p>
                        </div>
                    </div>

                    {/* Urgence */}
                    <div className="cs-info-card">
                        <div className="cs-info-icon">
                            <img src={urgenceIcon} alt="Urgence" />
                        </div>
                        <div className="cs-info-text">
                            <p className="cs-info-title">Urgence 24H/24H</p>
                            <p className="cs-info-value">+212 6 61 26 77 60</p>
                        </div>
                    </div>

                    {/* Map Google */}
                    <div className="cs-map-box">
                        <img 
                            src={localisationIcon}
                            alt="Carte de la clinique"
                            className="cs-map-frame"
                            style={{ objectFit: 'cover' }}
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
                                <p className="cs-map-addr-title">Adresse de la clinique</p>
                                <p className="cs-map-addr-value">7, Rue De La Paix, Berkane, Morocco,<br />Oriental 63300</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
