import img1 from "../../assets/Background+Shadow.png";
import img2 from "../../assets/about_1_3.png";
import callIcon from "../../assets/CallContact.png";
import "./HistoireSection.css";

export default function HistoireSection() {
    return (
        <section className="hs-wrapper">
            <div className="hs-inner">

                {/* ── GAUCHE : Composition Puzzle (4 images) ── */}
                <div className="hs-images-grid">
                    {/* 1. Petite image haut-gauche (Médecins) */}
                    <div className="hs-img-box hs-img-1">
                        <img src={img1} alt="Médecins" />
                    </div>

                    {/* 2. Grande image haut-droite (Infirmière) */}
                    <div className="hs-img-box hs-img-2">
                        <img src={img2} alt="Infirmière" />
                    </div>

                    
                </div>

                {/* ── DROITE : Contenu ── */}
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
            <div className="hs-bottom-line" />
        </section>
    );
}